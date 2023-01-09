---
id: gw2assets
title: Guild Wars 2 Assets
---

## Overview

Guild Wars 2 contains within its dat file (gw2.dat) a treasure trove of incredible artwork, UI textures, and more.  As we aim to help preserve a users immersion in the game, we make heavy use of these assets.

Guild Wars 2 assets are denoted by an ID.  The ID is a numerical value and (for our purposes) will never change.  For example, asset ID `102491` represents the texture:

<img src="https://assets.gw2dat.com/102491.png" />

The Guild Wars 2 dat file contains other assets including sound clips, 3D models, and much more, but we will focus on the textures.

## Exporting the dat

Guild Wars 2 installs contain a `gw2.dat` file.  This file is most easily extracted using the 3rd party application "Gw2Browser".  We recommend [
kytulendu's fork](https://github.com/kytulendu/Gw2Browser/releases) which is still maintained.

This application can be used extract assets from the dat.  To see all textures, you can right-click on the UI Textures and extract them to a directory on your system.  This can take a long time to perform.

## Viewing Textures

Textures are most easily viewed using [Adobe Bridge](https://www.adobe.com/products/bridge.html) or similar image inventory software that can create a cache of the images for you.  Once the cache is created, it becomes very quick to look through hundreds of images at a time as you don't have to wait for thumbnails to load.

## Finding Textures

The hardest part is finding the texture you're looking for.

### Pull it from the API

If you're looking for skill, item, etc. icons which have endpoints in the GW2 REST API, many of these endpoints include fields which links directly to the asset on the official render service.

https://api.guildwars2.com/v2/specializations?ids=1

```json
[
  {
    "id": 1,
    "name": "Dueling",
    "profession": "Mesmer",
    "elite": false,
    "minor_traits": [
      706,
      710,
      707
    ],
    "major_traits": [
      701,
      705,
      700,
      1889,
      1960,
      708,
      692,
      1950,
      704
    ],
    "icon": "https://render.guildwars2.com/file/43C5400906A104C60F30DFE0A145D1E767353573/1012003.png",
    "background": "https://render.guildwars2.com/file/992D53319C5FCD4AE841C592DC2AE91D5906AECF/1012057.png"
  }
]
```

The asset ID is the numeric value at the end of the URL.  In the above example, that would be both `1012003` and `1012057`.  The official render service does not provide all UI textures and is mostly limited to the textures referenced by the API results.

### Manually search

#### Think critically about the size of the icon

gw2.dat exports are organized by the texture's size.  Knowing the size of your icon (based on other icons in the same category or intuition) can quickly narrow down how many images to look through.

#### Consider when the icon was added

If you are looking for a texture introduced with new content, it will have a higher asset ID number than older textures.

Further, if you find an icon that would have been introduced at a similar time, they are likely to be close to each other, numerically.  For example, if you find a waypoint icon, it is likely you would find other minimap related textures soon before and after the asset ID of the waypoint.  You can use Adobe Bridge's search to find asset IDs that "start with" the first few numbers of the asset you found.

### search.gw2dat.com

We provide a basic search service to aid you in finding the textures you need.  It allows you to supply a screenshot or wiki image to aid you in finding your icon.  Combining a few methods to ensure you are providing a clean image can make the search incredibly successful, but it won't work for everything.

https://search.gw2dat.com/

Due to the complexity, we provide a [dedicated guide for search.gw2dat.com here](https://blish-hud.notion.site/blish-hud/Overview-of-search-gw2dat-com-71792757b6f84abd8071dcb9fcfd3d2a).

:::info Still can't find what you're looking for?

We have many developers in our Discord channel that have spent a lot of time digging through textures.  If you need a tip or other assistance with finding a texture, reach out in our [#📦module_dev_discussion](https://discord.gg/HzAV82d) channel.

:::