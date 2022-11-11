"use strict";(self.webpackChunknew_blishhud_com=self.webpackChunknew_blishhud_com||[]).push([[9067],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,u=d["".concat(m,".").concat(c)]||d[c]||p[c]||i;return a?n.createElement(u,l(l({ref:t},h),{},{components:a})):n.createElement(u,l({ref:t},h))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5664:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={id:"achievement",title:"Achievement",hide_table_of_contents:!0},l=void 0,o={unversionedId:"markers/attributes/achievement",id:"markers/attributes/achievement",title:"Achievement",description:"| Applies To | | Blish HUD | TacO |",source:"@site/docs/markers/attributes/achievement.md",sourceDirName:"markers/attributes",slug:"/markers/attributes/achievement",permalink:"/docs/markers/attributes/achievement",draft:!1,tags:[],version:"current",frontMatter:{id:"achievement",title:"Achievement",hide_table_of_contents:!0}},m={},s=[{value:"Description",id:"description",level:2},{value:"Supported values",id:"supported-values",level:2},{value:"achievementid",id:"achievementid",level:3},{value:"achievementbit",id:"achievementbit",level:3},{value:"Affected by",id:"affected-by",level:2},{value:"How it works",id:"how-it-works",level:2}],h={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Applies To"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Blish HUD"),(0,r.kt)("th",{parentName:"tr",align:null},"TacO"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("center",null,"Markers, Trails")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("center",null,"\u2714")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("center",null,"\u2714"))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For this feature to work, the user must have given Blish HUD and the pathing module permission to access the ",(0,r.kt)("inlineCode",{parentName:"p"},"account")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"progression")," items with an API key."),(0,r.kt)("p",{parentName:"admonition"},"If the user does not provide an API key or the user has not consented to the ",(0,r.kt)("inlineCode",{parentName:"p"},"account")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"progression")," items, then markers and trails marked with this attribute will not be automatically hidden.")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Hides markers and trails based on their associated completion status reported by the web API.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"achievementid"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../datatypes/integer"},"integer")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'achievementid="4949"')),(0,r.kt)("td",{parentName:"tr",align:null},"The achievement this marker or trail will hide for when completed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"achievementbit"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../datatypes/integer"},"integer")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'achievementbit="3"')),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the sub item within an achievement this marker or trail will hide for when completed.")))),(0,r.kt)("h2",{id:"supported-values"},"Supported values"),(0,r.kt)("h3",{id:"achievementid"},"achievementid"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"achievementid")," must be a value which matches the Guild Wars 2 Web API achievements endpoint."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"API provided list of achievements: ",(0,r.kt)("a",{parentName:"li",href:"https://api.guildwars2.com/v2/achievements"},"https://api.guildwars2.com/v2/achievements")),(0,r.kt)("li",{parentName:"ul"},"Checking an explicit achievement: ",(0,r.kt)("a",{parentName:"li",href:"https://api.guildwars2.com/v2/achievements?id=4949"},"https://api.guildwars2.com/v2/achievements?id=4949"))),(0,r.kt)("h3",{id:"achievementbit"},"achievementbit"),(0,r.kt)("p",null,"Often the harder to find, the ",(0,r.kt)("inlineCode",{parentName:"p"},"achievementbit")," will represent the index of the associated bit found in, for example, the above explicit achievement under the bits entry."),(0,r.kt)("p",null,"If an achievement requires you to find 4 items, typically each of those 4 items will receive a bit to indicate it's individual status."),(0,r.kt)("p",null,"The bits are 0 indexed meaning that they count from 0 onwards so if there are 4 bits in an achievement, they will range from 0 to 3."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Do not trust the order of the Wiki or the in-game achievement UI.  This order does not necessarily represent the order provided by the API.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"achievementbit")," is not required and when not specified, the marker or trail will be toggled based exclusively on the status of the parent achievement, itself."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A great way to find achievement IDs and other details is via ",(0,r.kt)("a",{parentName:"p",href:"https://en.gw2treasures.com/achievement"},"gw2treasures.com's achievement search"),".")),(0,r.kt)("h2",{id:"affected-by"},"Affected by"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"How"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"autotrigger"},"AutoTrigger")),(0,r.kt)("td",{parentName:"tr",align:null},"If enabled, the marker will be hidden for the remainder of the session automatically if the user enters the ",(0,r.kt)("a",{parentName:"td",href:"triggerrange"},"TriggerRange"),".  Enable for achievements which require you to enter an area without needing to directly interact.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"triggerrange"},"TriggerRange")),(0,r.kt)("td",{parentName:"tr",align:null},"Determines the range necessary to trigger hiding the marker with the action key (or automatically if autotrigger is enabled).")))),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"Every 5 minutes, a list of the current users achievements are pulled from the API."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If we don't see the indicated achievement in the list we do nothing."),(0,r.kt)("li",{parentName:"ol"},"If the achievement itself indicates that it is complete, we hide all markers with the associated ",(0,r.kt)("inlineCode",{parentName:"li"},"achievementid"),"."),(0,r.kt)("li",{parentName:"ol"},"If the achievement itself indicates that it is not complete, but indicates that a bit has been completed, we hide all markers with the associated ",(0,r.kt)("inlineCode",{parentName:"li"},"achievementbit"),".")),(0,r.kt)("p",null,"When a user interacts (usually the F key) with a marker that has an achievementid, we automatically hide it for that session since the Web API has a cache which prevents it from being updated in realtime."))}p.isMDXComponent=!0}}]);