"use strict";(self.webpackChunknew_blishhud_com=self.webpackChunknew_blishhud_com||[]).push([[5306],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,m=s["".concat(p,".").concat(d)]||s[d]||g[d]||l;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5302:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const l={id:"toggle",title:"Toggle",hide_table_of_contents:!0},o=void 0,i={unversionedId:"markers/attributes/toggle",id:"markers/attributes/toggle",title:"Toggle",description:"| Applies To | | Blish HUD | TacO |",source:"@site/docs/markers/attributes/toggle.md",sourceDirName:"markers/attributes",slug:"/markers/attributes/toggle",permalink:"/docs/markers/attributes/toggle",draft:!1,tags:[],version:"current",frontMatter:{id:"toggle",title:"Toggle",hide_table_of_contents:!0}},p={},u=[{value:"Description",id:"description",level:2},{value:"Supported value",id:"supported-value",level:2},{value:"Affected by",id:"affected-by",level:2},{value:"How it works",id:"how-it-works",level:2}],c={toc:u},s="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Applies To"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"Blish HUD"),(0,n.kt)("th",{parentName:"tr",align:null},"TacO"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("center",null,"Markers")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("center",null,"\u2714")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("center",null,"\u274c"))))),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Toggles a category on or off.  Similar in behavior to the ",(0,n.kt)("a",{parentName:"em",href:"showhide"},"Show & Hide")," attributes.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,n.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Example"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"toggle"),(0,n.kt)("td",{parentName:"tr",align:null},"category"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'toggle="mypack.adventures.tickletrahearne"')),(0,n.kt)("td",{parentName:"tr",align:null},"A category to toggle when triggered.  If the category is disabled, it will be enabled.  If the category is enabled, it will be disabled.")))),(0,n.kt)("h2",{id:"supported-value"},"Supported value"),(0,n.kt)("p",null,"The value specified should be that of a category's full namespace (the same format used by the ","[type]"," attribute).  The category does not have to be from the same marker pack which does allow for packs to interact with each other."),(0,n.kt)("h2",{id:"affected-by"},"Affected by"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,n.kt)("th",{parentName:"tr",align:null},"How"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"autotrigger"},"AutoTrigger")),(0,n.kt)("td",{parentName:"tr",align:null},"If enabled, the category will be toggled automatically when the user enters within the ",(0,n.kt)("a",{parentName:"td",href:"triggerrange"},"TriggerRange"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"triggerrange"},"TriggerRange")),(0,n.kt)("td",{parentName:"tr",align:null},"Determines the range necessary to trigger toggling with the interaction key (or automatically if ",(0,n.kt)("a",{parentName:"td",href:"autotrigger"},"AutoTrigger")," is enabled).")))),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"Unlike other behaviors/filters, this attribute, when triggered, update the user's category preferences.  That is to say that a category toggle can be seen reflected in the users category dropdowns and will persist between launches of the overlay."))}g.isMDXComponent=!0}}]);