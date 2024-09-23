"use strict";(self.webpackChunknew_blishhud_com=self.webpackChunknew_blishhud_com||[]).push([[3328],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),p=r,m=c["".concat(l,".").concat(p)]||c[p]||h[p]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(7462),r=(n(7294),n(3905));const a={id:"gw2assets",title:"Guild Wars 2 Assets"},o=void 0,s={unversionedId:"modules/guides/gw2assets",id:"modules/guides/gw2assets",title:"Guild Wars 2 Assets",description:"Overview",source:"@site/docs/modules/guides/gw2assets.md",sourceDirName:"modules/guides",slug:"/modules/guides/gw2assets",permalink:"/docs/modules/guides/gw2assets",draft:!1,tags:[],version:"current",frontMatter:{id:"gw2assets",title:"Guild Wars 2 Assets"},sidebar:"DevGuides",previous:{title:"Textures",permalink:"/docs/modules/guides/textures"},next:{title:"Custom Shaders",permalink:"/docs/modules/guides/shaders"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Exporting the dat",id:"exporting-the-dat",level:2},{value:"Viewing Textures",id:"viewing-textures",level:2},{value:"Finding Textures",id:"finding-textures",level:2},{value:"Pull it from the API",id:"pull-it-from-the-api",level:3},{value:"Manually search",id:"manually-search",level:3},{value:"Think critically about the size of the icon",id:"think-critically-about-the-size-of-the-icon",level:4},{value:"Consider when the icon was added",id:"consider-when-the-icon-was-added",level:4},{value:"search.gw2dat.com",id:"searchgw2datcom",level:3}],u={toc:d},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Guild Wars 2 contains within its dat file (gw2.dat) a treasure trove of incredible artwork, UI textures, and more.  As we aim to help preserve a users immersion in the game, we make heavy use of these assets."),(0,r.kt)("p",null,"Guild Wars 2 assets are denoted by an ID.  The ID is a numerical value and (for our purposes) will never change.  For example, asset ID ",(0,r.kt)("inlineCode",{parentName:"p"},"102491")," represents the texture:"),(0,r.kt)("img",{src:"https://assets.gw2dat.com/102491.png"}),(0,r.kt)("p",null,"The Guild Wars 2 dat file contains other assets including sound clips, 3D models, and much more, but we will focus on the textures."),(0,r.kt)("h2",{id:"exporting-the-dat"},"Exporting the dat"),(0,r.kt)("p",null,"Guild Wars 2 installs contain a ",(0,r.kt)("inlineCode",{parentName:"p"},"gw2.dat"),' file.  This file is most easily extracted using the 3rd party application "Gw2Browser".  We recommend ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/kytulendu/Gw2Browser/releases"},"\nkytulendu's fork")," which is still maintained."),(0,r.kt)("p",null,"This application can be used extract assets from the dat.  To see all textures, you can right-click on the UI Textures and extract them to a directory on your system.  This can take a long time to perform."),(0,r.kt)("h2",{id:"viewing-textures"},"Viewing Textures"),(0,r.kt)("p",null,"Textures are most easily viewed using ",(0,r.kt)("a",{parentName:"p",href:"https://www.adobe.com/products/bridge.html"},"Adobe Bridge")," or similar image inventory software that can create a cache of the images for you.  Once the cache is created, it becomes very quick to look through hundreds of images at a time as you don't have to wait for thumbnails to load."),(0,r.kt)("h2",{id:"finding-textures"},"Finding Textures"),(0,r.kt)("p",null,"The hardest part is finding the texture you're looking for."),(0,r.kt)("h3",{id:"pull-it-from-the-api"},"Pull it from the API"),(0,r.kt)("p",null,"If you're looking for skill, item, etc. icons which have endpoints in the GW2 REST API, many of these endpoints include fields which links directly to the asset on the official render service."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://api.guildwars2.com/v2/specializations?ids=1"},"https://api.guildwars2.com/v2/specializations?ids=1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 1,\n    "name": "Dueling",\n    "profession": "Mesmer",\n    "elite": false,\n    "minor_traits": [\n      706,\n      710,\n      707\n    ],\n    "major_traits": [\n      701,\n      705,\n      700,\n      1889,\n      1960,\n      708,\n      692,\n      1950,\n      704\n    ],\n    "icon": "https://render.guildwars2.com/file/43C5400906A104C60F30DFE0A145D1E767353573/1012003.png",\n    "background": "https://render.guildwars2.com/file/992D53319C5FCD4AE841C592DC2AE91D5906AECF/1012057.png"\n  }\n]\n')),(0,r.kt)("p",null,"The asset ID is the numeric value at the end of the URL.  In the above example, that would be both ",(0,r.kt)("inlineCode",{parentName:"p"},"1012003")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"1012057"),".  The official render service does not provide all UI textures and is mostly limited to the textures referenced by the API results."),(0,r.kt)("h3",{id:"manually-search"},"Manually search"),(0,r.kt)("h4",{id:"think-critically-about-the-size-of-the-icon"},"Think critically about the size of the icon"),(0,r.kt)("p",null,"gw2.dat exports are organized by the texture's size.  Knowing the size of your icon (based on other icons in the same category or intuition) can quickly narrow down how many images to look through."),(0,r.kt)("h4",{id:"consider-when-the-icon-was-added"},"Consider when the icon was added"),(0,r.kt)("p",null,"If you are looking for a texture introduced with new content, it will have a higher asset ID number than older textures."),(0,r.kt)("p",null,'Further, if you find an icon that would have been introduced at a similar time, they are likely to be close to each other, numerically.  For example, if you find a waypoint icon, it is likely you would find other minimap related textures soon before and after the asset ID of the waypoint.  You can use Adobe Bridge\'s search to find asset IDs that "start with" the first few numbers of the asset you found.'),(0,r.kt)("h3",{id:"searchgw2datcom"},"search.gw2dat.com"),(0,r.kt)("p",null,"We provide a basic search service to aid you in finding the textures you need.  It allows you to supply a screenshot or wiki image to aid you in finding your icon.  Combining a few methods to ensure you are providing a clean image can make the search incredibly successful, but it won't work for everything."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://search.gw2dat.com/"},"https://search.gw2dat.com/")),(0,r.kt)("p",null,"Due to the complexity, we provide a ",(0,r.kt)("a",{parentName:"p",href:"https://blish-hud.notion.site/blish-hud/Overview-of-search-gw2dat-com-71792757b6f84abd8071dcb9fcfd3d2a"},"dedicated guide for search.gw2dat.com here"),"."),(0,r.kt)("admonition",{title:"Still can't find what you're looking for?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We have many developers in our Discord channel that have spent a lot of time digging through textures.  If you need a tip or other assistance with finding a texture, reach out in our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/HzAV82d"},"#\ud83d\udce6module_dev_discussion")," channel.")))}h.isMDXComponent=!0}}]);