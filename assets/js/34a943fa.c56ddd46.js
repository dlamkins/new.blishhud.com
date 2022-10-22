"use strict";(self.webpackChunknew_blishhud_com=self.webpackChunknew_blishhud_com||[]).push([[4689],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2694:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={id:"mp_introduction",title:"Introduction",hide_table_of_contents:!1},a=void 0,l={unversionedId:"markers/development/mp_introduction",id:"markers/development/mp_introduction",title:"Introduction",description:"Marker packs are typically archives which contain within them three types of files.",source:"@site/docs/markers/development/introduction.md",sourceDirName:"markers/development",slug:"/markers/development/mp_introduction",permalink:"/docs/markers/development/mp_introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"mp_introduction",title:"Introduction",hide_table_of_contents:!1}},c={},s=[{value:"Archive Files",id:"archive-files",level:2},{value:"XML Files (.xml)",id:"xml-files-xml",level:3},{value:"Trail Files (.trl)",id:"trail-files-trl",level:3},{value:"Texture Files (.png, etc.)",id:"texture-files-png-etc",level:3},{value:"Archive Format",id:"archive-format",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Marker packs are typically archives which contain within them three types of files."),(0,i.kt)("h2",{id:"archive-files"},"Archive Files"),(0,i.kt)("h3",{id:"xml-files-xml"},"XML Files (.xml)"),(0,i.kt)("p",null,"The XML files are the main component of a marker pack and are what define all major aspects of the packs including every marker, the categories, and their defined behaviors."),(0,i.kt)("h3",{id:"trail-files-trl"},"Trail Files (.trl)"),(0,i.kt)("p",null,"Trail files each represent a trail to be displayed and contain the data necessary to rebuild them in the world.  You can use TacO or TrlTool to create these files.  Blish HUD's pathing module does not have a tool to do this yet."),(0,i.kt)("h3",{id:"texture-files-png-etc"},"Texture Files (.png, etc.)"),(0,i.kt)("p",null,"Texture files are simply images used by either markers or trails.  They are included in the marker pack.  A single texture file can be used by multiple markers, trails, etc. and re-use is encouraged to reduce memory requirements, load times, archive size, etc."),(0,i.kt)("h2",{id:"archive-format"},"Archive Format"))}p.isMDXComponent=!0}}]);