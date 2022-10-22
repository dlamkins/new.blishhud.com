"use strict";(self.webpackChunknew_blishhud_com=self.webpackChunknew_blishhud_com||[]).push([[737],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return a?r.createElement(h,l(l({ref:t},m),{},{components:a})):r.createElement(h,l({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7063:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={id:"markers",title:"Setup"},l=void 0,i={unversionedId:"markers",id:"markers",title:"Setup",description:"The Module",source:"@site/docs/markers.md",sourceDirName:".",slug:"/markers",permalink:"/docs/markers",draft:!1,tags:[],version:"current",frontMatter:{id:"markers",title:"Setup"}},s={},p=[{value:"The Module",id:"the-module",level:2},{value:"The permissions",id:"the-permissions",level:2},{value:"Marker Packs",id:"marker-packs",level:2},{value:"From Repo",id:"from-repo",level:3},{value:"Manually",id:"manually",level:3}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"the-module"},"The Module"),(0,n.kt)("p",null,'To provide marker pack support, Blish HUD can use the "Pathing" module.  The pathing module supports using TacO style marker packs (as .taco or .zip files) in Blish HUD!'),(0,n.kt)("p",null,"To install the Pathing module, find the ",(0,n.kt)("strong",{parentName:"p"},"Pathing")," module within the Module Repo and install it (see: ",(0,n.kt)("a",{parentName:"p",href:"/docs/user/installing-modules"},"Installing modules"),")."),(0,n.kt)("iframe",{width:"640",height:"360",src:"https://www.youtube.com/embed/jz1afT6_wxU",frameborder:"0",allow:"fullscreen; autoplay; encrypted-media; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("h2",{id:"the-permissions"},"The permissions"),(0,n.kt)("p",null,"If you are using an API key with Blish HUD, you can optionally consent to each of the following API permissions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Account")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Progression"))),(0,n.kt)("p",null,"If enabled, the Pathing module will auto detect what achievements you've completed and in marker packs that support it, can automatically hide the ones you've completed."),(0,n.kt)("h2",{id:"marker-packs"},"Marker Packs"),(0,n.kt)("admonition",{title:"Watch out!",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Don't extract the marker packs!"),"  They're intended to be left inside of their ",(0,n.kt)("inlineCode",{parentName:"p"},".zip")," or ",(0,n.kt)("inlineCode",{parentName:"p"},".taco")," archives.  If you extract them, Blish HUD can have difficulties loading your marker textures and trails."),(0,n.kt)("p",{parentName:"admonition"},"Likewise, packs which come as XML files may not work with Blish HUD as expected - many of them rely on resources and resource management built into TacO that we do not have plans to support at this time.  Reach out to us on Discord for assistance with repacking packs like this.")),(0,n.kt)("h3",{id:"from-repo"},"From Repo"),(0,n.kt)("p",null,"Within Blish HUD is now a marker pack repo.  Popular marker packs can be downloaded from the repo and kept automatically up to date."),(0,n.kt)("h3",{id:"manually"},"Manually"),(0,n.kt)("p",null,"Blish HUD supports most TacO format marker packs.  Here are some of our popular recommendations:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"What are you looking for?"),(0,n.kt)("th",{parentName:"tr",align:null},"Pack"),(0,n.kt)("th",{parentName:"tr",align:null},"Website"),(0,n.kt)("th",{parentName:"tr",align:null},"Stats"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Achievement hunting?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.heinze.fr/taco/download.php?f=3"},"ReActif EN")," / ",(0,n.kt)("a",{parentName:"td",href:"https://www.heinze.fr/taco/download.php?f=6"},"FR")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.heinze.fr/taco/?lang=en"},"Website")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://mp-repo.blishhud.com/reactif.en.taco.html"},"Stats"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Want the scenic route and to explore as you level up?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Sutcenes/MovementOnTheWorld_TacoSupport/releases/latest/download/MoW.taco"},"Movement on the World")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/Sutcenes/MovementOnTheWorld_TacoSupport/wiki"},"Website")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://mp-repo.blishhud.com/MoW.taco.html"},"Stats"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Fractals / Raids / Strikes?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/QuitarHero/Heros-Marker-Pack/releases/latest/download/Hero.Blish.Pack.zip"},"Hero's Marker Pack")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/QuitarHero/Heros-Marker-Pack/wiki"},"Website")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://mp-repo.blishhud.com/hero.blish.pack.zip.html"},"Stats"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Looking for more gifts of exploration / map completion or assistance with HP trains?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/xrandox/TehsTrails/releases/latest/download/TehsTrails.taco"},"Teh's Trails")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/xrandox/TehsTrails/wiki"},"Website")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://mp-repo.blishhud.com/TehsTrails.taco.html"},"Stats"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Looking for ",(0,n.kt)("em",{parentName:"td"},"fast")," solo farming routes?"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://cdn.discordapp.com/attachments/531175900100952087/947365218453966868/602fd903dad6efast_TacO_pack_001.taco"},"[","fast","]"," TacO Markers")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://fast.farming-community.eu/farming/guides/fast-taco-marker"},"Website")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://mp-repo.blishhud.com/fast_TacO_pack.taco.html"},"Stats"))))),(0,n.kt)("p",null,"\u2139 ",(0,n.kt)("em",{parentName:"p"},"Have a pack you'd like to see recommended?  Shoot a ping to @Freesn\xf6w:0001 on Discord!")),(0,n.kt)("p",null,"Click on the pack name for one of the above packs to download it to your computer.  Place the pack under:\n",(0,n.kt)("inlineCode",{parentName:"p"},"Documents\\Guild Wars 2\\addons\\blishhud\\markers")),(0,n.kt)("p",null,"You can quickly get here from within Blish HUD by pressing the settings cog to the right of the module's enable button and select ",(0,n.kt)("strong",{parentName:"p"},"Open 'Markers' Directory"),"."),(0,n.kt)("img",{src:"/img/pathing/overview/open-markers-dir.png"}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"Once you've added some marker packs, it should look something like this:"),(0,n.kt)("img",{src:"/img/pathing/overview/markers-folder.png"}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"Once you've added marker packs, you can enable the module!  If you've already enabled the module, you can disable and enable it, or restart Blish HUD so that it detects the new marker packs."))}u.isMDXComponent=!0}}]);