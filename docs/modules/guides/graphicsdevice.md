---
id: graphicsdevice
title: Exclusive GraphicsDevice Usage
---

:::info tl;dr
If you're directly utilizing `GameService.Graphics.GraphicsDevice` anywhere in your code base, please review the below options to ensure your usage of the GraphicsDevice is done safely.
:::

There may be times when your module needs access to the `GraphicsDevice`.  The `GraphicsDevice` is needed for loading textures, shaders, and more.

The `GraphicsDevice` requires that most operations performed with it are done so exclusively.  If the `GraphicsDevice` is operated on by multiple threads at the same time Blish HUD ***will*** crash.

For this reason, it is absolutely necessary that any usage of the `GraphicsDevice` be done in the proper manor to ensure its usage is exclusive for the duration of the calls regardless of the thread it is ran from.  If your module isn't crashing Blish HUD now, it will eventually (or likely already has for somebody somewhere).

Blish HUD provides two ways of ensuring exclusive access to the `GraphicsDevice`:

### LendGraphicsDeviceContext

:::info
`LendGraphicsDeviceContext` is only available in Blish HUD v0.11.8-45 and beyond.
:::

Blish HUD's `Graphics` service provides `LendGraphicsDeviceContext()`.  This should be the preferred way of getting exclusive access to the `GraphicsDevice`.  The `GraphicsDeviceContext` allows you to use a using statement to use the graphics device from different threads (or the main thread) and know you're accessing the `GraphicsDevice` safely.

```cpp
using (var ctx = GameService.Graphics.LendGraphicsDeviceContext()) {
    // Do something safely with `ctx.GraphicsDevice`
}
```

Please be aware that `LendGraphicsDeviceContext()` **BLOCKS**.  We use a tri-lock system to split lend requests into low and high priority requests.  For this reason, please also avoid introducing your own locks around GraphicsDevice lending calls to avoid deadlocking Blish HUD.

Low priority lend requests will queue up and high priority lend requests skip the low priority queue.  This is to ensure we don't delay the render loop.

:::caution
Avoid batching large jobs while you have ownership of a `GraphicsDeviceContext`.  Jobs should be short such as loading a single texture.  Blish HUD manages the priority of these by queuing and running them based on priority, but Blish HUD can't interrupt a job, regardless of its priority, once it has started.  This means that any jobs running when the render loop attempts to start will have to finish before the next frame can be drawn.
:::

### QueueMainThreadRender

Blish HUD's `Graphics` service provides a method for enqueuing delegates to later be ran during the render loop.  The provided delegate has a parameter which provides access to the `GraphicsDevice` on the main thread, properly locked.

When using this method, understand that the delegate won't be called until the very end of the render loop meaning that the result is essentially 1 frame late.

This is the primary method for ensuring safe `GraphicsDevice` usage prior to v0.11.8 of Blish HUD.

```cpp
GameService.Graphics.QueueMainThreadRender((graphicsDevice) => {
    // Do something safely with the graphics device such as load a texture...
});
```

:::caution
Avoid batching large jobs in a single delegate scheduled with QueueMainThreadRender.  Jobs should be short such as loading a single texture.  Blish HUD attempts to squeeze in as many queued jobs as it can without interrupting frame times, but once a delegate is started, Blish HUD will not disrupt it.  This means that frame times can be severely impacted if too much happens in one scheduled call.
:::

### Internal Methods

If you're using an internal Blish HUD call to load a texture which does not accept `GraphicsDevice` as a parameter in versions beyond v0.11.8-45 of Blish HUD, you should be able to assume it is safe.  Calls such as `TextureUtil.FromStreamPremultiplied(Stream)` make these lock calls for you.  Any internal calls which we identify not to be safe going forward should be considered a bug.