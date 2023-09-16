"use strict";(self.webpackChunknew_blishhud_com=self.webpackChunknew_blishhud_com||[]).push([[3350],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=s(n),d=a,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(k,l(l({ref:e},m),{},{components:n})):r.createElement(k,l({ref:e},m))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7163:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={id:"tip",title:"Tip",hide_table_of_contents:!0},l=void 0,o={unversionedId:"markers/attributes/tip",id:"markers/attributes/tip",title:"Tip",description:"| Applies To | | Blish HUD | TacO |",source:"@site/docs/markers/attributes/tip.md",sourceDirName:"markers/attributes",slug:"/markers/attributes/tip",permalink:"/docs/markers/attributes/tip",draft:!1,tags:[],version:"current",frontMatter:{id:"tip",title:"Tip",hide_table_of_contents:!0}},p={},s=[{value:"Description",id:"description",level:2},{value:"Remarks",id:"remarks",level:2}],m={toc:s},u="wrapper";function c(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Applies To"),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Blish HUD"),(0,a.kt)("th",{parentName:"tr",align:null},"TacO"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("center",null,"Categories, Markers")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("center",null,"\u2714")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("center",null,"\u274c"))))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"tip-name")," is implemented on the mini-map but not for categories as a name would be redundant.")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Allows you to display a tooltip on markers on the minimap or categories in the category dropdown.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tip-name"),(0,a.kt)("td",{parentName:"tr",align:null},"arbitrary text"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'tip-name="Golden Coin"')),(0,a.kt)("td",{parentName:"tr",align:null},"The text to show as the title of the tooltip.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tip-description"),(0,a.kt)("td",{parentName:"tr",align:null},"arbitrary text"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'tip-description="Coin 7 - under the cove south of the waypoint."')),(0,a.kt)("td",{parentName:"tr",align:null},"The description text shown under the title.")))),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"tip-name")," is not provided, the ",(0,a.kt)("a",{parentName:"p",href:"displayname"},"displayname")," of the parent category is used instead."),(0,a.kt)("p",null,"If you would like no tooltip to be shown for a marker, set ",(0,a.kt)("inlineCode",{parentName:"p"},'tip-name=""'),".  Note that this will also hide the distance indicator and any set ",(0,a.kt)("inlineCode",{parentName:"p"},"tip-description")," will also be ignored."))}c.isMDXComponent=!0}}]);