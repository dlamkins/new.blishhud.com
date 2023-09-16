"use strict";(self.webpackChunknew_blishhud_com=self.webpackChunknew_blishhud_com||[]).push([[4780],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(r),f=o,h=c["".concat(s,".").concat(f)]||c[f]||p[f]||a;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8875:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={id:"user",title:"Overview"},i=void 0,l={unversionedId:"user",id:"user",title:"Overview",description:"What is Blish HUD?",source:"@site/docs/user.md",sourceDirName:".",slug:"/user",permalink:"/docs/user",draft:!1,tags:[],version:"current",frontMatter:{id:"user",title:"Overview"},sidebar:"UserGuides",next:{title:"FAQ",permalink:"/docs/user/faq"}},s={},u=[{value:"What is Blish HUD?",id:"what-is-blish-hud",level:2},{value:"What does this mean for me?",id:"what-does-this-mean-for-me",level:3}],d={toc:u},c="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-blish-hud"},"What is Blish HUD?"),(0,o.kt)("p",null,"Blish HUD is a Guild Wars 2 overlay ",(0,o.kt)("em",{parentName:"p"},"framework"),".  Unlike other overlays (such as TacO), Blish HUD does not contain the features on its own.  Instead, developers write modules, sort of like plugins, which Blish HUD can load and run."),(0,o.kt)("p",null,"Blish HUD provides a platform and API for modules.  This makes it easier for developers to create their own overlay features without needing to make their own overlay and allows you to load any combination of features you would like."),(0,o.kt)("p",null,"Modules are created by both the Blish HUD team and by 3rd party developers."),(0,o.kt)("h3",{id:"what-does-this-mean-for-me"},"What does this mean for me?"),(0,o.kt)("p",null,"In addition to downloading Blish HUD, you'll also need to download modules.  Module files end with the extension ",(0,o.kt)("inlineCode",{parentName:"p"},".bhm"),".  Modules are placed in a folder under ",(0,o.kt)("inlineCode",{parentName:"p"},"Documents\\Guild Wars 2\\addons\\blishhud\\modules"),".  When you load Blish HUD, you'll be able to toggle on and off any module found in that directory."))}p.isMDXComponent=!0}}]);