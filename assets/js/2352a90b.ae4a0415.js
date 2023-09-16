"use strict";(self.webpackChunknew_blishhud_com=self.webpackChunknew_blishhud_com||[]).push([[1101],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),d=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=d(a),g=n,h=u["".concat(o,".").concat(g)]||u[g]||k[g]||l;return a?r.createElement(h,i(i({ref:t},m),{},{components:a})):r.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=g;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},1299:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const l={id:"behavior",title:"Behavior",hide_table_of_contents:!0},i=void 0,p={unversionedId:"markers/attributes/behavior",id:"markers/attributes/behavior",title:"Behavior",description:"| Applies To | | Blish HUD | TacO |",source:"@site/docs/markers/attributes/behavior.md",sourceDirName:"markers/attributes",slug:"/markers/attributes/behavior",permalink:"/docs/markers/attributes/behavior",draft:!1,tags:[],version:"current",frontMatter:{id:"behavior",title:"Behavior",hide_table_of_contents:!0}},o={},d=[{value:"Description",id:"description",level:2},{value:"Supported values",id:"supported-values",level:2},{value:"Triggering",id:"triggering",level:2},{value:"Affected by",id:"affected-by",level:2},{value:"Keeping states",id:"keeping-states",level:2}],m={toc:d},u="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Applies To"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"Blish HUD"),(0,n.kt)("th",{parentName:"tr",align:null},"TacO"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("center",null,"Markers")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("center",null,"\u2714")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("center",null,"\u26a0"))))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Behavior IDs of 100 and above are Blish HUD specific and will do nothing in TacO.")),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Enables one of several predefined behaviors when triggered.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,n.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Example"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"behavior"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"../datatypes/integer"},"integer")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'behavior="3"')),(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"The behavior ID to use.")))),(0,n.kt)("h2",{id:"supported-values"},"Supported values"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Behavior ID"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Behavior Summary"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("center",null,"0")),(0,n.kt)("td",{parentName:"tr",align:null},"Always visible"),(0,n.kt)("td",{parentName:"tr",align:null},"The default - the marker has no behavior.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("center",null,"1")),(0,n.kt)("td",{parentName:"tr",align:null},"Reappear on map change"),(0,n.kt)("td",{parentName:"tr",align:null},"The marker hides when triggered until the map is changed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("center",null,"2")),(0,n.kt)("td",{parentName:"tr",align:null},"Reappear on daily reset"),(0,n.kt)("td",{parentName:"tr",align:null},"The marker hides when triggered until daily reset (UTC+0).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("center",null,"3")),(0,n.kt)("td",{parentName:"tr",align:null},"Only visible before activation"),(0,n.kt)("td",{parentName:"tr",align:null},"The marker hides when triggered permanently.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("center",null,"4")),(0,n.kt)("td",{parentName:"tr",align:null},"Reappear After Timer"),(0,n.kt)("td",{parentName:"tr",align:null},"The marker hides when triggered until the time specified by the ",(0,n.kt)("a",{parentName:"td",href:"ResetLength"},"resetlength")," attribute.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("center",null,"5")),(0,n.kt)("td",{parentName:"tr",align:null},"Reappear on map reset"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"Does nothing.  Not implemented by Blish HUD or TacO."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("center",null,"6")),(0,n.kt)("td",{parentName:"tr",align:null},"Once per instance"),(0,n.kt)("td",{parentName:"tr",align:null},"The marker hides when triggered until the instance is changed (a combination of map ID + shard ID).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("center",null,"7")),(0,n.kt)("td",{parentName:"tr",align:null},"Once daily per character"),(0,n.kt)("td",{parentName:"tr",align:null},"The marker hides when triggered until the next day but will show for other characters which have not triggered it yet.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("center",null,"101")),(0,n.kt)("td",{parentName:"tr",align:null},"Reappear on weekly reset"),(0,n.kt)("td",{parentName:"tr",align:null},"Resets on the weekly reset (Monday 7:30 UTC).")))),(0,n.kt)("h2",{id:"triggering"},"Triggering"),(0,n.kt)("p",null,"Behaviors activate when they are triggered.  Triggering a marker can be done by pressing the action key while in-range of the marker or by walking within the ",(0,n.kt)("a",{parentName:"p",href:"triggerrange"},"TriggerRange")," if ",(0,n.kt)("a",{parentName:"p",href:"autotrigger"},"AutoTrigger")," is enabled."),(0,n.kt)("h2",{id:"affected-by"},"Affected by"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,n.kt)("th",{parentName:"tr",align:null},"How"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"autotrigger"},"AutoTrigger")),(0,n.kt)("td",{parentName:"tr",align:null},"If enabled, the marker will trigger when the user enters within the ",(0,n.kt)("a",{parentName:"td",href:"triggerrange"},"TriggerRange"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"triggerrange"},"TriggerRange")),(0,n.kt)("td",{parentName:"tr",align:null},"Determines the range necessary to trigger the marker with the action key.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"resetlength"},"ResetLength")),(0,n.kt)("td",{parentName:"tr",align:null},"For behavior 4, the time until the marker becomes visible again.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"invertbehavior"},"InvertBehavior")),(0,n.kt)("td",{parentName:"tr",align:null},"If enabled, the behavior filter is inverted so that the marker is only displayed after the behavior has triggered.")))),(0,n.kt)("h2",{id:"keeping-states"},"Keeping states"),(0,n.kt)("p",null,"Behavior states are tracked by a ",(0,n.kt)("a",{parentName:"p",href:"guid"},"GUID"),".  Between launches, this information is saved to disk."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Overlay"),(0,n.kt)("th",{parentName:"tr",align:null},"File"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Blish HUD"),(0,n.kt)("td",{parentName:"tr",align:null},"Stored in ",(0,n.kt)("inlineCode",{parentName:"td"},"\\Documents\\Guild Wars 2\\addons\\blishhud\\markers\\data\\states\\timers.txt")," as ",(0,n.kt)("inlineCode",{parentName:"td"},"guid,timestamp")," pairs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TacO"),(0,n.kt)("td",{parentName:"tr",align:null},"Stored in ",(0,n.kt)("inlineCode",{parentName:"td"},"activationdata.xml")," as XML")))))}k.isMDXComponent=!0}}]);