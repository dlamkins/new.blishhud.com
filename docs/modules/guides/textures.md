---
id: textures
title: Textures
---

## Overview

Blish HUD modules often deal with texture loading and management, which can be complex due to the need to both load and manage textures in memory.  MonoGame texture management has many notable blocking (synchronous) steps, such as loading a texture from disk.  Blish HUD extends MonoGame's texture management to make the process easier.

## Texture2D

A `Texture2D` is the standard MonoGame texture class which represents a loaded texture.  A `Texture2D` can be loaded from a number of sources, but most typically, it is from your module's ref.

When managing a `Texture2D` directly, you are in charge of its lifecycle.  Textures are not, by default, cached, so if you intend to continue using a texture, it should be stored until it is no longer needed.  Once a texture is not needed, it should be disposed of.

## AsyncTexture2D

An `AsyncTexture2D` is the preferred way of managing textures in Blish HUD.  An `AsyncTexture2D` acts as a wrapper around a standard `Texture2D`.  The primary benefit of an `AsyncTexture2D` is that it allows you to "swap" a texture in place without the consumer needing to be aware.

### Usage Example

You may wish to load a texture from a web service and provide it to a custom control to be rendered.  In the case of a standard `Texture2D`, this request would have to block until the texture was received from the web service and loaded in - blocking you from easily passing the texture to your control.  You could delay loading your control until the texture is available, but with load times being uncertain, this can quickly become a poor experience for your users.

An `AsyncTexture2D` allows you to immediately return a texture before one has been loaded.  Once your asynchronous task completes, it can use the existing reference to the `AsyncTexture2D` to swap in the loaded texture.  As long as the texture was passed to your custom control as an `AsyncTexture2D`, it will suddenly be able to use the new texture, and your custom control did not have to wait.

An `AsyncTexture2D` can either have no texture (and can thus act similar to the `Nullable<T>` type), a transparent pixel, or a temporary texture until your intended texture is swapped in.

```cs
private AsyncTexture2D LoadTexture(int assetId) {
    var texture = new AsyncTexture2D();

    async void HandleResponse(Task<Texture2D> textureResponse) {
        var loadedTexture = ContentService.Textures.Error;

        if (textureResponse.Exception == null) {
            loadedTexture = textureResponse.Result;
        }

        texture.SwapTexture(loadedTexture);
    }

    if (locallyCached) {
        LoadTextureFromFileSystem(assetId).ContinueWith(HandleResponse);
    } else {
        LoadTextureFromServ(lassetId).ContinueWith(HandleResponse);
    }

    // The method can immediately return the new texture to the calling method without blocking.
    // Once the texture is loaded, it will get swapped in place.
    return texture;
}
```

:::caution

The moment your `AsyncTexture2D` is cast to a `Texture2D`, it will no longer respond to being swapped.  For this reason, it is best to use the `AsyncTexture2D` type in all places that you can and do not store or pass it as a `Texture2D`.

:::

## Guild Wars 2 Asset Textures: DatAssetCache

Guild Wars 2 has various textures that developers may want to use in their modules.  Many developers will extract these textures from the game or the official render service and include them in their module's ref.  Managing textures at scale this way can become difficult or not be possible.

To make it easier for developers to access and manage these textures, Blish HUD has a sub-service called the DatAssetCache. This service allows developers to quickly retrieve a texture from the game by using its asset ID at runtime and receive an `AsyncTexture2D`. Asset IDs can be found in the Guild Wars 2 dat file, through various Guild Wars 2 API endpoints, or on the website https://search.gw2dat.com.  These textures are also available to developers through the gw2dat CDN, assets.gw2dat.com.

Blish HUD maintains a metadata file that keeps track of all the textures on the CDN and their size and availability.  This means that when a developer requests a texture through the DatAssetCache, they will receive an `AsyncTexture2D` with a transparent texture that matches the size of the intended texture.  If it is the first time the texture has been requested, it will be pulled from the CDN.  If it has been requested before, it will be loaded from a local cache on disk. This allows for smooth UI performance, as textures will render soon after requested without delaying frame times.

Developers should keep a reference to the `AsyncTexture2D` until they no longer need the texture.  Once Blish HUD determines that there are no more references to the texture, it will be released from memory until it is requested again.

### Using the DatAssetCache

You can use the DatAssetCache one of 4 ways:

#### GameService.Content.DatAssetCache.GetTextureFromAssetId(int assetId);

This method will immediately return an `AsyncTexture2D`, which will soon have the requested texture swapped onto it or `null` if the asset is not available in the CDN.

```cs
AsyncTexture2D texture = GameService.Content.DatAssetCache.GetTextureFromAssetId(102491);
```

#### GameService.Content.DatAssetCache.TryGetTextureFromAssetId(int assetId, out AsyncTexture2D texture);

This method will immediately return `true` if the texture is available or `false` if the texture is not available.  The `texture` out will be assigned to the pending `AsyncTexture2D` if a texture is available.

```cs
if (GameService.Content.DatAssetCache.TryGetTextureFromAssetId(102491, out AsyncTexture2D texture)) {
    DoSomething(texture);
}
```

#### AsyncTexture2D.FromAssetId(int assetId);

A shortcut for `GameService.Content.DatAssetCache.GetTextureFromAssetId(int assetId)` is easily accessible from the `AsyncTexture2D` class.

```cs
AsyncTexture2D texture = AsyncTexture2D.FromAssetId(102491);
```

#### AsyncTexture2D.TryFromAssetId(int assetId, out AsyncTexture2D texture);

A shortcut for `GameService.Content.DatAssetCache.TryGetTextureFromAssetId(int assetId, out AsyncTexture2D texture)` easily accessible from the `AsyncTexture2D` class.

```cs
if (AsyncTexture2D.TryFromAssetId(102491, out AsyncTexture2D texture)) {
    DoSomething(texture);
}
```

### Notes

- DatAssetCache is thread-safe.  It can be used at any time from any thread and will immediately return an `AsyncTexture2D` when an asset is known to be available.  The intended texture will typically be swapped on that `AsyncTexture2D` within a second of the request but it may take longer due to environmental factors.
- At this time, assets.gw2dat.com assets are managed manually.  That means that textures introduced in new releases may not always be immediately available.  For assistance with filling in missing assets, please reach out to Freesnöw#0001 on Discord.
- Blish HUD maintains its local texture cache in: `%programdata%\Blish HUD\cache\assets`
- Modules that previously handled icon caching manually that switch to using the DatAssetCache should consider implementing code to delete their old caches to recover storage space for our users.
- Do not dispose of textures that are not from your own ref.  With the DatAssetCache, and in other instances, textures are often shared, meaning that disposing of the texture can disrupt other modules and Blish HUD core.
