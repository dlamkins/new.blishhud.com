---
id: shaders
title: Custom Shaders
---

## Overview

You can include custom vertex and pixel shaders with your modules.  Shaders allow for more complex rendering effects applied to both your 2D and 3D elements.

Shaders are written in HLSL and then transcoded to GLSL and packed in an ".mgfx" format by the MonoGame Content Builder.

:::caution Warning
Geometry shaders are not supported.
:::

## Writing Shaders

Shader's can range from simple to complex and we recommend referring to public documentation on HLSL and guides written for both XNA and MonoGame if you are unfamiliar with writing your own shaders.

## Packaging a Shader

The [MonoGame.Content.Builder.Task](https://www.nuget.org/packages/MonoGame.Content.Builder.Task) NuGet package contains **mgfxc.exe** which is used to prepare your shaders.  It is important that you utilize the same version of the NuGet package as Blish HUD Core is using (currently `3.8.0.1641`) when preparing your shaders.  Different versions often introduce changes to the mgfx format which will cause your shader to fail to load due to a version mismatch.

To prepare a shader as an mgfx file run the following command (adjust as necessary for your system):

```cmd
"%userprofile%\.nuget\packages\monogame.content.builder.task\3.8.0.1641\tools\netcoreapp3.1\any\mgfxc.exe" "c:\full\path\to\shader.hlsl" "c:\full\path\to\shader.mgfx" /Profile:DirectX_11
```

## Using a Shader

### Loading the shader as an effect

A shader can be loaded from your ref using the `ContentsManager` provided to your module:

```csharp
var effect = ContentsManager.GetEffect("shader.mgfx");
```

You may wish to utilize our `SharedEffect` class which can wrap a MonoGame effect with utilities for managing your parameters.  You can do this by creating a class which inherits from `SharedEffect` in core and uses the built-in `SetParameter` function on variable setters to more efficiently pass changed values to your shader without wasting time on parameters that have not changed.

An example of this can be seen in the Pathing module:
https://github.com/blish-hud/Pathing/blob/main/Entity/Effects/MarkerEffect.cs

:::info
Effects should only be loaded once.  Once loaded, a single effect instance can be used to render effects for all of your subjects.  Do not create multiple instances of your effect.
:::

### Setting parameters on your effect

You can pass values to your shader at runtime.  If manually managing your effect without inheriting `SharedEffect`, you can set parameters as follows:

```csharp
effect.Parameters[parameterName].SetValue(newValue);
```

Some types may require you to carefully cast the value type to ensure it is received properly by the shader.  For example, an XNA/MonoGame `Color` value must be converted to a Vector4 with `.ToVector4()`.

:::info
If using `SharedEffect`, `SetParameter` has built-in overloads for the following types:
- Matrix
- Matrix[]
- Quaternion
- Texture2D
- Vector2
- Vector2[]
- Vector3
- Vector3[]
- Vector4
- Vector4[]
- bool
- float
- float[]
- int
- Color
:::

### Rendering using your effect

After ensuring all parameters are assigned for the current subject you are rendering, you will need to apply all passes of your shader and then render your subject.

```csharp
graphicsDevice.SetVertexBuffer(vertexBuffer);

foreach (var pass in effect.CurrentTechnique.Passes) {
    pass.Apply();

    graphicsDevice.DrawPrimitives(PrimitiveType.TriangleStrip, 0, vertexBuffer.VertexCount - 2);
}
```

Many effects will only have a single pass that needs applied.

An example of trail segments rendering with a shader applied can be seen in the Pathing module:
```csharp
public override void Render(GraphicsDevice graphicsDevice, IWorld world, ICamera camera) {
    // [...]

    _packState.SharedTrailEffect.SetEntityState(this.Texture,
                                                Math.Min(this.AnimationSpeed, _packState.UserConfiguration.PackMaxTrailAnimationSpeed.Value),
                                                Math.Min(this.FadeNear,       _packState.UserConfiguration.PackMaxViewDistance.Value - (this.FadeFar - this.FadeNear)),
                                                Math.Min(this.FadeFar,        _packState.UserConfiguration.PackMaxViewDistance.Value),
                                                GetOpacity(),
                                                0.25f,
                                                this.CanFade && _packState.UserConfiguration.PackFadeTrailsAroundCharacter.Value,
                                                this.DebugRender ? Color.Red : this.Tint);

    for (int i = 0; i < _sectionBuffers.Length; i++) {
        ref var vertexBuffer = ref _sectionBuffers[i];

        graphicsDevice.SetVertexBuffer(vertexBuffer);

        foreach (var pass in _packState.SharedTrailEffect.CurrentTechnique.Passes) {
            pass.Apply();

            graphicsDevice.DrawPrimitives(PrimitiveType.TriangleStrip, 0, vertexBuffer.VertexCount - 2);
        }
    }
}
```

In this case, SetEntityState is a method on a custom `SharedEffect` which assigns the values to each parameter using `SetParameter`.

[Full Source](https://github.com/blish-hud/Pathing/blob/3fd0d00ecd4c17091c5d6b8d55a614e644ceade5/Entity/StandardTrail.World.cs#L128-L155)