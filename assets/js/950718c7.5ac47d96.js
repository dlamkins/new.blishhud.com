"use strict";(self.webpackChunknew_blishhud_com=self.webpackChunknew_blishhud_com||[]).push([[1796],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,v=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return r?n.createElement(v,a(a({ref:t},p),{},{components:r})):n.createElement(v,a({ref:t},p))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var d=2;d<l;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2433:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const l={id:"dev",title:"Overview"},a=void 0,i={unversionedId:"dev",id:"dev",title:"Overview",description:"Blish HUD development comes in two flavors: Core and Module development.  Blish HUD is written in C# and can load .NET compiled modules.",source:"@site/docs/dev.md",sourceDirName:".",slug:"/dev",permalink:"/docs/dev",draft:!1,tags:[],version:"current",frontMatter:{id:"dev",title:"Overview"},sidebar:"DevGuides",next:{title:"Getting Started",permalink:"/docs/modules/overview/getting-started"}},s={},d=[{value:"Core Development",id:"core-development",level:3},{value:"Module Development",id:"module-development",level:3}],p={toc:d},u="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Blish HUD development comes in two flavors: ",(0,o.kt)("strong",{parentName:"p"},"Core")," and ",(0,o.kt)("strong",{parentName:"p"},"Module")," development.  Blish HUD is written in C# and can load .NET compiled modules."),(0,o.kt)("h3",{id:"core-development"},"Core Development"),(0,o.kt)("p",null,"Core development surrounds development of the base ",(0,o.kt)("inlineCode",{parentName:"p"},"Blish HUD.exe")," which provides the framework for modules and integration with Guild Wars 2 as an overlay."),(0,o.kt)("p",null,"Core provides the following to modules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Extensive UI Framework which replicates a large number of common Guild Wars 2 controls."),(0,o.kt)("li",{parentName:"ul"},"Rendering within the Guild Wars 2 3D user space powered by Monogame."),(0,o.kt)("li",{parentName:"ul"},"ArcDps integration with arcdps-bhud."),(0,o.kt)("li",{parentName:"ul"},"Content management for textures, audio, shaders, etc."),(0,o.kt)("li",{parentName:"ul"},"Easy MumbleLink and Web API access."),(0,o.kt)("li",{parentName:"ul"},"Access to user input."),(0,o.kt)("li",{parentName:"ul"},"Settings management with setting renderers.")),(0,o.kt)("p",null,"Contributing to Core is great if you'd like to improve Blish HUD as a whole, expand the features provided to modules, etc."),(0,o.kt)("h3",{id:"module-development"},"Module Development"),(0,o.kt)("p",null,"Module development surrounds the development of smaller packages which are loaded by Blish HUD by users.  Modules reference Blish HUD.exe and can interact with the base application to add any number of features."))}c.isMDXComponent=!0}}]);