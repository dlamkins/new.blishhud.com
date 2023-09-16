"use strict";(self.webpackChunknew_blishhud_com=self.webpackChunknew_blishhud_com||[]).push([[7008],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(a),p=r,h=c["".concat(l,".").concat(p)]||c[p]||m[p]||s;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9955:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const s={id:"textures",title:"Textures"},i=void 0,o={unversionedId:"modules/guides/textures",id:"modules/guides/textures",title:"Textures",description:"Overview",source:"@site/docs/modules/guides/textures.md",sourceDirName:"modules/guides",slug:"/modules/guides/textures",permalink:"/docs/modules/guides/textures",draft:!1,tags:[],version:"current",frontMatter:{id:"textures",title:"Textures"},sidebar:"DevGuides",previous:{title:"Exclusive GraphicsDevice Usage",permalink:"/docs/modules/guides/graphicsdevice"},next:{title:"Guild Wars 2 Assets",permalink:"/docs/modules/guides/gw2assets"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Texture2D",id:"texture2d",level:2},{value:"AsyncTexture2D",id:"asynctexture2d",level:2},{value:"Usage Example",id:"usage-example",level:3},{value:"Guild Wars 2 Asset Textures: DatAssetCache",id:"guild-wars-2-asset-textures-datassetcache",level:2},{value:"Using the DatAssetCache",id:"using-the-datassetcache",level:3},{value:"GameService.Content.DatAssetCache.GetTextureFromAssetId(int assetId);",id:"gameservicecontentdatassetcachegettexturefromassetidint-assetid",level:4},{value:"GameService.Content.DatAssetCache.TryGetTextureFromAssetId(int assetId, out AsyncTexture2D texture);",id:"gameservicecontentdatassetcachetrygettexturefromassetidint-assetid-out-asynctexture2d-texture",level:4},{value:"AsyncTexture2D.FromAssetId(int assetId);",id:"asynctexture2dfromassetidint-assetid",level:4},{value:"AsyncTexture2D.TryFromAssetId(int assetId, out AsyncTexture2D texture);",id:"asynctexture2dtryfromassetidint-assetid-out-asynctexture2d-texture",level:4},{value:"Notes",id:"notes",level:3}],d={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Blish HUD modules often deal with texture loading and management, which can be complex due to the need to both load and manage textures in memory.  MonoGame texture management has many notably blocking (synchronous) steps such as loading a texture from disk.  Blish HUD extends MonoGame's texture management to make the process easier."),(0,r.kt)("h2",{id:"texture2d"},"Texture2D"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Texture2D")," is the standard MonoGame texture class which represents a loaded texture.  A ",(0,r.kt)("inlineCode",{parentName:"p"},"Texture2D")," can be loaded from a number of sources, but most typically it is from your module's ref."),(0,r.kt)("p",null,"When managing a ",(0,r.kt)("inlineCode",{parentName:"p"},"Texture2D")," directly, you are in charge of its lifecycle.  Textures are not, by default, cached, so if you intend to continue using a texture, it should be stored until it is no longer needed.  Once a texture is not needed, it should be disposed."),(0,r.kt)("h2",{id:"asynctexture2d"},"AsyncTexture2D"),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncTexture2D")," is the preferred way of managing textures in Blish HUD.  An ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncTexture2D")," acts as a wrapper around a standard ",(0,r.kt)("inlineCode",{parentName:"p"},"Texture2D"),".  The primary benefit of an ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncTexture2D"),' is that it allows you to "swap" a texture in-place without the consumer needing to be aware.'),(0,r.kt)("h3",{id:"usage-example"},"Usage Example"),(0,r.kt)("p",null,"You may wish to load a texture from a webservice and provide it to a custom control to be rendered.  In the case of a standard ",(0,r.kt)("inlineCode",{parentName:"p"},"Texture2D"),", this request would have to block until the texture was received from the webservice and loaded in - blocking you from easily passing the texture to your control.  You could delay loading your control until the texture is available, but with load times being uncertain, this can quickly become a poor experience for your users."),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncTexture2D")," allows you to immediately return a texture before one has been loaded.  Once your asynchronous task completes, it can use the existing reference to the ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncTexture2D")," to swap in the loaded texture.  As long as the texture was passed to your custom control as an ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncTexture2D"),", it will suddenly be able to use the new texture and your custom control did not have to wait."),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncTexture2D")," can either have no texture (and can thus act similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Nullable<T>")," type), a transparent pixel, or a temporary texture until your intended texture is swapped in."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"private AsyncTexture2D LoadTexture(int assetId) {\n    var texture = new AsyncTexture2D();\n\n    async void HandleResponse(Task<Texture2D> textureResponse) {\n        var loadedTexture = ContentService.Textures.Error;\n\n        if (textureResponse.Exception == null) {\n            loadedTexture = textureResponse.Result;\n        }\n\n        texture.SwapTexture(loadedTexture);\n    }\n\n    if (locallyCached) {\n        LoadTextureFromFileSystem(assetId).ContinueWith(HandleResponse);\n    } else {\n        LoadTextureFromServ(lassetId).ContinueWith(HandleResponse);\n    }\n\n    // The method can immediately return the new texture to the calling method without blocking.\n    // Once the texture is loaded, it will get swapped in-place.\n    return texture;\n}\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The moment your ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncTexture2D")," is cast to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Texture2D"),", it will no longer respond to being swapped.  For this reason, it is best to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncTexture2D")," type in all places that you can and not store or pass it as a ",(0,r.kt)("inlineCode",{parentName:"p"},"Texture2D"),".")),(0,r.kt)("h2",{id:"guild-wars-2-asset-textures-datassetcache"},"Guild Wars 2 Asset Textures: DatAssetCache"),(0,r.kt)("p",null,"Guild Wars 2 has various textures that developers may want to use in their modules.  Many developers will extract these textures from the game or the official render service and include them in their module's ref.  Managing textures at scale this way can become difficult or simply not be possible."),(0,r.kt)("p",null,"To make it easier for developers to access and manage these textures, Blish HUD has a sub-service called the DatAssetCache. This service allows developers to quickly retrieve a texture from the game by using its asset ID at runtime and receive an ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncTexture2D"),". Asset IDs can be found in the Guild Wars 2 dat file, through various Guild Wars 2 API endpoints, or on the website ",(0,r.kt)("a",{parentName:"p",href:"https://search.gw2dat.com."},"https://search.gw2dat.com."),"  These textures are also available to developers through the gw2dat CDN, assets.gw2dat.com."),(0,r.kt)("p",null,"Blish HUD maintains a metadata file that keeps track of all the textures on the CDN and their size and availability.  This means that when a developer requests a texture through the DatAssetCache, they will receive an ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncTexture2D")," with a transparent texture that matches the size of the intended texture.  If it is the first time the texture has been requested, it will be pulled from the CDN.  If it has been requested before, it will be loaded from a local cache on disk. This allows for smooth UI performance, as textures will render soon after requested without delaying frame times."),(0,r.kt)("p",null,"Developers should keep a reference to the ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncTexture2D")," until they no longer need the texture.  Once Blish HUD determines that there are no more references to the texture, it will be released from memory until it is requested again."),(0,r.kt)("h3",{id:"using-the-datassetcache"},"Using the DatAssetCache"),(0,r.kt)("p",null,"You can use the DatAssetCache one of 4 ways:"),(0,r.kt)("h4",{id:"gameservicecontentdatassetcachegettexturefromassetidint-assetid"},"GameService.Content.DatAssetCache.GetTextureFromAssetId(int assetId);"),(0,r.kt)("p",null,"This method will immediately return an ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncTexture2D")," which will soon have the requested texture swapped onto it or ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if the asset is not available in the CDN."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"AsyncTexture2D texture = GameService.Content.DatAssetCache.GetTextureFromAssetId(102491);\n")),(0,r.kt)("h4",{id:"gameservicecontentdatassetcachetrygettexturefromassetidint-assetid-out-asynctexture2d-texture"},"GameService.Content.DatAssetCache.TryGetTextureFromAssetId(int assetId, out AsyncTexture2D texture);"),(0,r.kt)("p",null,"This method will immediately return ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the texture is available or ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," if the texture is not available.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"texture")," out will be assigned to the pending ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncTexture2D")," if a texture is available."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"if (GameService.Content.DatAssetCache.TryGetTextureFromAssetId(102491, out AsyncTexture2D texture)) {\n    DoSomething(texture);\n}\n")),(0,r.kt)("h4",{id:"asynctexture2dfromassetidint-assetid"},"AsyncTexture2D.FromAssetId(int assetId);"),(0,r.kt)("p",null,"A shortcut for ",(0,r.kt)("inlineCode",{parentName:"p"},"GameService.Content.DatAssetCache.GetTextureFromAssetId(int assetId)")," easily accessible from the ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncTexture2D")," class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"AsyncTexture2D texture = AsyncTexture2D.FromAssetId(102491);\n")),(0,r.kt)("h4",{id:"asynctexture2dtryfromassetidint-assetid-out-asynctexture2d-texture"},"AsyncTexture2D.TryFromAssetId(int assetId, out AsyncTexture2D texture);"),(0,r.kt)("p",null,"A shortcut for ",(0,r.kt)("inlineCode",{parentName:"p"},"GameService.Content.DatAssetCache.TryGetTextureFromAssetId(int assetId, out AsyncTexture2D texture)")," easily accessible from the ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncTexture2D")," class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"if (AsyncTexture2D.TryFromAssetId(102491, out AsyncTexture2D texture)) {\n    DoSomething(texture);\n}\n")),(0,r.kt)("h3",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DatAssetCache is thread-safe.  It can be used at any time from any thread and will immediately return an ",(0,r.kt)("inlineCode",{parentName:"li"},"AsyncTexture2D")," when an asset is known to be available.  The intended texture will typically be swapped on that ",(0,r.kt)("inlineCode",{parentName:"li"},"AsyncTexture2D")," within a second of the request, but may take longer due to environmental factors."),(0,r.kt)("li",{parentName:"ul"},"At this time, assets.gw2dat.com assets are managed manually.  That means that textures introduced in new releases may not always be immediately available.  For assistance with filling in missing assets, please reach out to Freesn\xf6w#0001 on Discord."),(0,r.kt)("li",{parentName:"ul"},"Blish HUD maintains its local texture cache in: ",(0,r.kt)("inlineCode",{parentName:"li"},"%programdata%\\Blish HUD\\cache\\assets")),(0,r.kt)("li",{parentName:"ul"},"Modules that previously handled icon caching manually that switch to using the DatAssetCache should consider implementing code to delete their old caches to recover storage space for our users."),(0,r.kt)("li",{parentName:"ul"},"Do note dispose of textures that are not from your own ref.  With the DatAssetCache, and in other instances, textures are often shared meaning that disposing of the texture can disrupt other modules and Blish HUD core.")))}m.isMDXComponent=!0}}]);