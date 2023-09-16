"use strict";(self.webpackChunknew_blishhud_com=self.webpackChunknew_blishhud_com||[]).push([[8774],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(r),c=n,m=u["".concat(p,".").concat(c)]||u[c]||h[c]||l;return r?a.createElement(m,i(i({ref:t},s),{},{components:r})):a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7659:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const l={id:"showhide",title:"Show & Hide",hide_table_of_contents:!0},i=void 0,o={unversionedId:"markers/attributes/showhide",id:"markers/attributes/showhide",title:"Show & Hide",description:"| Applies To | | Blish HUD | TacO |",source:"@site/docs/markers/attributes/showhide.md",sourceDirName:"markers/attributes",slug:"/markers/attributes/showhide",permalink:"/docs/markers/attributes/showhide",draft:!1,tags:[],version:"current",frontMatter:{id:"showhide",title:"Show & Hide",hide_table_of_contents:!0}},p={},d=[{value:"Description",id:"description",level:2},{value:"Supported value",id:"supported-value",level:2},{value:"Affected by",id:"affected-by",level:2},{value:"How it works",id:"how-it-works",level:2}],s={toc:d},u="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Applies To"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"Blish HUD"),(0,n.kt)("th",{parentName:"tr",align:null},"TacO"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("center",null,"Markers")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("center",null,"\u2714")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("center",null,"\u274c"))))),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Allows showing or hiding a specified category when triggered.  Similar in behavior to the ",(0,n.kt)("a",{parentName:"em",href:"toggle"},"Toggle")," attribute.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,n.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Example"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"show"),(0,n.kt)("td",{parentName:"tr",align:null},"category"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'show="mypack.adventures.tickletrahearne"')),(0,n.kt)("td",{parentName:"tr",align:null},"A category to show when triggered.  If the category is already showing, then nothing will happen.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hide"),(0,n.kt)("td",{parentName:"tr",align:null},"category"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'hide="mypack.adventures.tickletrahearne"')),(0,n.kt)("td",{parentName:"tr",align:null},"A category to hide when triggered.  If the category is already disabled, then nothing will happen.")))),(0,n.kt)("h2",{id:"supported-value"},"Supported value"),(0,n.kt)("p",null,"The value specified should be that of a category's full namespace (the same format used by the ","[type]"," attribute).  The category does not have to be from the same marker pack which does allow for packs to interact with each other."),(0,n.kt)("h2",{id:"affected-by"},"Affected by"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,n.kt)("th",{parentName:"tr",align:null},"How"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"autotrigger"},"AutoTrigger")),(0,n.kt)("td",{parentName:"tr",align:null},"If enabled, the category will be shown or hidden automatically when the user enters within the ",(0,n.kt)("a",{parentName:"td",href:"triggerrange"},"TriggerRange"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"triggerrange"},"TriggerRange")),(0,n.kt)("td",{parentName:"tr",align:null},"Determines the range necessary to trigger hiding or showing with the interaction key (or automatically if ",(0,n.kt)("a",{parentName:"td",href:"autotrigger"},"AutoTrigger")," is enabled).")))),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"Unlike other behaviors/filters, these attributes, when triggered, update the user's category preferences.  That is to say that a category hidden or shown can be seen reflected in the users category dropdowns and will persist between launches of the overlay."))}h.isMDXComponent=!0}}]);