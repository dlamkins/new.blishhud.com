"use strict";(self.webpackChunknew_blishhud_com=self.webpackChunknew_blishhud_com||[]).push([[7350],{3905:(t,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>g});var e=a(7294);function r(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function l(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)}return a}function i(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}function p(t,n){if(null==t)return{};var a,e,r=function(t,n){if(null==t)return{};var a,e,r={},l=Object.keys(t);for(e=0;e<l.length;e++)a=l[e],n.indexOf(a)>=0||(r[a]=t[a]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(e=0;e<l.length;e++)a=l[e],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var k=e.createContext({}),u=function(t){var n=e.useContext(k),a=n;return t&&(a="function"==typeof t?t(n):i(i({},n),t)),a},m=function(t){var n=u(t.components);return e.createElement(k.Provider,{value:n},t.children)},d={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},o=e.forwardRef((function(t,n){var a=t.components,r=t.mdxType,l=t.originalType,k=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),o=u(a),g=r,N=o["".concat(k,".").concat(g)]||o[g]||d[g]||l;return a?e.createElement(N,i(i({ref:n},m),{},{components:a})):e.createElement(N,i({ref:n},m))}));function g(t,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=o;var p={};for(var k in n)hasOwnProperty.call(n,k)&&(p[k]=n[k]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return e.createElement.apply(null,i)}return e.createElement.apply(null,a)}o.displayName="MDXCreateElement"},1567:(t,n,a)=>{a.r(n),a.d(n,{assets:()=>k,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var e=a(7462),r=(a(7294),a(3905));const l={id:"specialization",title:"Specialization",hide_table_of_contents:!0},i=void 0,p={unversionedId:"markers/attributes/specialization",id:"markers/attributes/specialization",title:"Specialization",description:"| Applies To | | Blish HUD | TacO |",source:"@site/docs/markers/attributes/specialization.md",sourceDirName:"markers/attributes",slug:"/markers/attributes/specialization",permalink:"/docs/markers/attributes/specialization",draft:!1,tags:[],version:"current",frontMatter:{id:"specialization",title:"Specialization",hide_table_of_contents:!0}},k={},u=[{value:"Description",id:"description",level:2},{value:"Supported values",id:"supported-values",level:2},{value:"How it works",id:"how-it-works",level:2}],m={toc:u};function d(t){let{components:n,...a}=t;return(0,r.kt)("wrapper",(0,e.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Applies To"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Blish HUD"),(0,r.kt)("th",{parentName:"tr",align:null},"TacO"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("center",null,"Markers, Trails")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("center",null,"\u2714")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("center",null,"\u274c"))))),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Hides the marker or trail if the player is not currently one of the specified specializations.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"specialization"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of ",(0,r.kt)("a",{parentName:"td",href:"../datatypes/integer"},"Integer")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'specialization="40,61"')),(0,r.kt)("td",{parentName:"tr",align:null},"The specialization(s) the marker or trail should be shown while using.")))),(0,r.kt)("h2",{id:"supported-values"},"Supported values"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The value is checked against the active third slot specialization ID.  It is not limited to elite specializations but we are unable to detect the first two specializations.  This is a quirk of it's implementation in the mumblelink API."),(0,r.kt)("p",{parentName:"admonition"},"For your convenience, we've bolded the elite specializations in the below table and moved them to the top.  The remaining non-elite specializations can be detected ",(0,r.kt)("em",{parentName:"p"},"if")," applied in the third specialization slot.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Specialization"),(0,r.kt)("th",{parentName:"tr",align:null},"Profession"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"5")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Druid")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Ranger"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"7")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Daredevil")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Thief"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"18")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Berserker")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Warrior"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"27")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Dragonhunter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Guardian"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"34")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Reaper")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Necromancer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"40")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Chronomancer")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Mesmer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"43")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Scrapper")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Engineer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"48")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Tempest")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Elementalist"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"52")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Herald")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Revenant"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"55")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Soulbeast")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Ranger"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"56")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Weaver")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Elementalist"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"57")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Holosmith")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Engineer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"58")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Deadeye")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Thief"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"59")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Mirage")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Mesmer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"60")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Scourge")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Necromancer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"61")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Spellbreaker")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Warrior"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"62")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Firebrand")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Guardian"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"63")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Renegade")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Revenant"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"64")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Harbinger")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Necromancer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"65")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Willbender")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Guardian"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"66")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Virtuoso")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Mesmer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"67")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Catalyst")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Elementalist"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"68")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Bladesworn")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Warrior"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"69")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Vindicator")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Revenant"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"70")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Mechanist")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Engineer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"71")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Specter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Thief"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"72")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Untamed")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",null,"Ranger"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Dueling"),(0,r.kt)("td",{parentName:"tr",align:null},"Mesmer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Death Magic"),(0,r.kt)("td",{parentName:"tr",align:null},"Necromancer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Invocation"),(0,r.kt)("td",{parentName:"tr",align:null},"Revenant")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Strength"),(0,r.kt)("td",{parentName:"tr",align:null},"Warrior")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"Explosives"),(0,r.kt)("td",{parentName:"tr",align:null},"Engineer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"Marksmanship"),(0,r.kt)("td",{parentName:"tr",align:null},"Ranger")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"Retribution"),(0,r.kt)("td",{parentName:"tr",align:null},"Revenant")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"Domination"),(0,r.kt)("td",{parentName:"tr",align:null},"Mesmer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"Tactics"),(0,r.kt)("td",{parentName:"tr",align:null},"Warrior")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"Salvation"),(0,r.kt)("td",{parentName:"tr",align:null},"Revenant")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"Valor"),(0,r.kt)("td",{parentName:"tr",align:null},"Guardian")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"Corruption"),(0,r.kt)("td",{parentName:"tr",align:null},"Revenant")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"Devastation"),(0,r.kt)("td",{parentName:"tr",align:null},"Revenant")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"Radiance"),(0,r.kt)("td",{parentName:"tr",align:null},"Guardian")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"17"),(0,r.kt)("td",{parentName:"tr",align:null},"Water"),(0,r.kt)("td",{parentName:"tr",align:null},"Elementalist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"19"),(0,r.kt)("td",{parentName:"tr",align:null},"Blood Magic"),(0,r.kt)("td",{parentName:"tr",align:null},"Necromancer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"Shadow Arts"),(0,r.kt)("td",{parentName:"tr",align:null},"Thief")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"21"),(0,r.kt)("td",{parentName:"tr",align:null},"Tools"),(0,r.kt)("td",{parentName:"tr",align:null},"Engineer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"22"),(0,r.kt)("td",{parentName:"tr",align:null},"Defense"),(0,r.kt)("td",{parentName:"tr",align:null},"Warrior")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"23"),(0,r.kt)("td",{parentName:"tr",align:null},"Inspiration"),(0,r.kt)("td",{parentName:"tr",align:null},"Mesmer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"24"),(0,r.kt)("td",{parentName:"tr",align:null},"Illusions"),(0,r.kt)("td",{parentName:"tr",align:null},"Mesmer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"Nature Magic"),(0,r.kt)("td",{parentName:"tr",align:null},"Ranger")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"26"),(0,r.kt)("td",{parentName:"tr",align:null},"Earth"),(0,r.kt)("td",{parentName:"tr",align:null},"Elementalist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"28"),(0,r.kt)("td",{parentName:"tr",align:null},"Deadly Arts"),(0,r.kt)("td",{parentName:"tr",align:null},"Thief")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"29"),(0,r.kt)("td",{parentName:"tr",align:null},"Alchemy"),(0,r.kt)("td",{parentName:"tr",align:null},"Engineer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"30"),(0,r.kt)("td",{parentName:"tr",align:null},"Skirmishing"),(0,r.kt)("td",{parentName:"tr",align:null},"Ranger")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"31"),(0,r.kt)("td",{parentName:"tr",align:null},"Fire"),(0,r.kt)("td",{parentName:"tr",align:null},"Elementalist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"32"),(0,r.kt)("td",{parentName:"tr",align:null},"Beastmastery"),(0,r.kt)("td",{parentName:"tr",align:null},"Ranger")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"33"),(0,r.kt)("td",{parentName:"tr",align:null},"Wilderness Survival"),(0,r.kt)("td",{parentName:"tr",align:null},"Ranger")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"35"),(0,r.kt)("td",{parentName:"tr",align:null},"Critical Strikes"),(0,r.kt)("td",{parentName:"tr",align:null},"Thief")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"36"),(0,r.kt)("td",{parentName:"tr",align:null},"Arms"),(0,r.kt)("td",{parentName:"tr",align:null},"Warrior")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"37"),(0,r.kt)("td",{parentName:"tr",align:null},"Arcane"),(0,r.kt)("td",{parentName:"tr",align:null},"Elementalist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"38"),(0,r.kt)("td",{parentName:"tr",align:null},"Firearms"),(0,r.kt)("td",{parentName:"tr",align:null},"Engineer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"39"),(0,r.kt)("td",{parentName:"tr",align:null},"Curses"),(0,r.kt)("td",{parentName:"tr",align:null},"Necromancer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"41"),(0,r.kt)("td",{parentName:"tr",align:null},"Air"),(0,r.kt)("td",{parentName:"tr",align:null},"Elementalist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"42"),(0,r.kt)("td",{parentName:"tr",align:null},"Zeal"),(0,r.kt)("td",{parentName:"tr",align:null},"Guardian")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"44"),(0,r.kt)("td",{parentName:"tr",align:null},"Trickery"),(0,r.kt)("td",{parentName:"tr",align:null},"Thief")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"45"),(0,r.kt)("td",{parentName:"tr",align:null},"Chaos"),(0,r.kt)("td",{parentName:"tr",align:null},"Mesmer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"46"),(0,r.kt)("td",{parentName:"tr",align:null},"Virtues"),(0,r.kt)("td",{parentName:"tr",align:null},"Guardian")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"47"),(0,r.kt)("td",{parentName:"tr",align:null},"Inventions"),(0,r.kt)("td",{parentName:"tr",align:null},"Engineer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"49"),(0,r.kt)("td",{parentName:"tr",align:null},"Honor"),(0,r.kt)("td",{parentName:"tr",align:null},"Guardian")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"50"),(0,r.kt)("td",{parentName:"tr",align:null},"Soul Reaping"),(0,r.kt)("td",{parentName:"tr",align:null},"Necromancer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"51"),(0,r.kt)("td",{parentName:"tr",align:null},"Discipline"),(0,r.kt)("td",{parentName:"tr",align:null},"Warrior")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"53"),(0,r.kt)("td",{parentName:"tr",align:null},"Spite"),(0,r.kt)("td",{parentName:"tr",align:null},"Necromancer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"54"),(0,r.kt)("td",{parentName:"tr",align:null},"Acrobatics"),(0,r.kt)("td",{parentName:"tr",align:null},"Thief")))),(0,r.kt)("p",null,"This attribute supports providing an array of specialization IDs (values separated by comma) meaning one or more values can be provided.  If the player character is any of the provided specialization (in the third specialization slot) the the marker or trail is shown."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"The mumblelink API provides values indicating the active character specialization.  This state is updated in realtime."),(0,r.kt)("p",null,"Values referenced from the GW2 Web API: ",(0,r.kt)("a",{parentName:"p",href:"https://dotnetfiddle.net/Sx3hkm"},"https://dotnetfiddle.net/Sx3hkm")))}d.isMDXComponent=!0}}]);