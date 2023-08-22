"use strict";(self.webpackChunknew_blishhud_com=self.webpackChunknew_blishhud_com||[]).push([[7858],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),m=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=m(n),g=r,h=u["".concat(s,".").concat(g)]||u[g]||p[g]||l;return n?a.createElement(h,i(i({ref:e},d),{},{components:n})):a.createElement(h,i({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3587:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={id:"overlay-settings",title:"Overlay Settings"},i=void 0,o={unversionedId:"user/overlay-settings",id:"user/overlay-settings",title:"Overlay Settings",description:"Overlay settings can be found in Blish HUD's main window by navigating to the Settings tab and then selecting Overlay Settings.",source:"@site/docs/user/overlay-settings.md",sourceDirName:"user",slug:"/user/overlay-settings",permalink:"/docs/user/overlay-settings",draft:!1,tags:[],version:"current",frontMatter:{id:"overlay-settings",title:"Overlay Settings"},sidebar:"UserGuides",previous:{title:"Installing Modules",permalink:"/docs/user/installing-modules"},next:{title:"ArcDPS Integration",permalink:"/docs/user/arcdps-integration"}},s={},m=[{value:"Overlay Settings",id:"overlay-settings",level:2},{value:"Dynamic HUD",id:"dynamic-hud",level:2},{value:"Graphics Settings",id:"graphics-settings",level:2},{value:"Debug Settings",id:"debug-settings",level:2}],d={toc:m};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Overlay settings can be found in Blish HUD's main window by navigating to the Settings tab and then selecting ",(0,r.kt)("strong",{parentName:"p"},"Overlay Settings"),"."),(0,r.kt)("h2",{id:"overlay-settings"},"Overlay Settings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Application & API Language")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"English")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the language Blish HUD runs in as well as the language used when querying the Guild Wars 2 API.  Please know that not all portions of Blish HUD or its modules have been fully translated.  In these cases, it will fallback to english.",(0,r.kt)("br",null),(0,r.kt)("br",null),"You can reach out in our Discord channel if you are interested in contributing translations for Blish HUD or one of its modules.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Minimize to tray when Guild Wars 2 closes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"If enabled, Blish HUD will remain running when Guild Wars 2 is closed.  This allows you to easily use Blish HUD without needing to launch it every time you run Guild Wars 2.  While in the tray, Blish HUD uses very little resources and is only tasked with checking for the game running every so often.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Show in taskbar")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"No")),(0,r.kt)("td",{parentName:"tr",align:null},"If enabled, Blish HUD will show an icon on your taskbar.  This is helpful when attempting to ",(0,r.kt)("a",{parentName:"td",href:"/docs/user/troubleshooting/776"},"record Blish HUD"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Close window on escape")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"If enabled, pressing ESC will close most Blish HUD and module windows which is the standard behavior in-game.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Interact")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"F")),(0,r.kt)("td",{parentName:"tr",align:null},"The key you have bound in-game to interact.  Used my multiple modules to add additional functionality.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Hide interface")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Ctrl + Shift + H")),(0,r.kt)("td",{parentName:"tr",align:null},"The key combination to toggle showing Blish HUD's interface.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Toggle Blish HUD window")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Ctrl + Shift + B")),(0,r.kt)("td",{parentName:"tr",align:null},"The key combination to toggle showing the main Blish HUD window.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Preview releases")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"No")),(0,r.kt)("td",{parentName:"tr",align:null},"If checked, Blish HUD will show prerelease modules in the module repo as well as prompt you to update to prerelease versions of Blish HUD.  Please know that prereleases may not be stable.  We recommend being a member of our Discord to provide feedback and request assistance if you intend on using prerelease versions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Use game volume")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"If checked, Blish HUD will attempt to match its volume to your in-game volume by detecting the average volume of your game from things like ambient noise, music, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Volume")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"100%")),(0,r.kt)("td",{parentName:"tr",align:null},"The volume level to use if ",(0,r.kt)("strong",{parentName:"td"},"Use game volume")," is disabled.")))),(0,r.kt)("h2",{id:"dynamic-hud"},"Dynamic HUD"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Menu Bar")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Always Show (Default)")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if the icons in the top left should sometimes be hidden.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Windows")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Always Show (Default)")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if Blish HUD windows should sometimes be hidden.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Cut Scene / Loading Screen")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Always Show (Default)")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if Blish HUD should be shown during loading screens / cutscenes.")))),(0,r.kt)("h2",{id:"graphics-settings"},"Graphics Settings"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"We do not typically recommend changing any of the graphics settings from their default.  Doing so can impact performance or the render alignment of some modules.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Frame Limiter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Locked to 60 FPS")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the framerate lock for Blish HUD.  Increasing this limit will increase CPU and GPU utilization.  Do not set it to ",(0,r.kt)("em",{parentName:"td"},"Unlimited")," without ",(0,r.kt)("strong",{parentName:"td"},"Enable Vsync"),".  Increasing Blish HUD's framerate is rarely helpful unless your game has higher FPS than Blish HUD.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Enable Vsync")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if vsync should be enabled for Blish HUD.  This should generally be left enabled - especially if you intend to set the ",(0,r.kt)("strong",{parentName:"td"},"Frame Limiter")," to ",(0,r.kt)("em",{parentName:"td"},"Unlimited")," for some reason.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Smooth Character Position")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Yes")),(0,r.kt)("td",{parentName:"tr",align:null},"Guild Wars 2 does not report accurate character position data every frame for some reason.  Enabling this feature will attempt to smooth out the character position so that modules get less jerky position data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"DPI Scaling")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Automatic - Sync With Game")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if Blish HUD should match the DPI scaling setting set in-game.  This should typically be left automatic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Interface Size")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Automatic - Sync With Game")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if Blish HUD should match the in-game interface size setting or scale independently.  Changing this from automatic will mis-align Blish HUD elements from the game.")))),(0,r.kt)("h2",{id:"debug-settings"},"Debug Settings"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"We recommend against enabling these settings unless asked by a Blish HUD developer as part of troubleshooting.  Enabling debug settings will result in larger log files and will somewhat hurt performance.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enable debug logging"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"No")),(0,r.kt)("td",{parentName:"tr",align:null},"Enables verbose debug logs if checked.  These entries may contain additional information from modules or Blish HUD itself helpful for troubleshooting.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Show Blish HUD FPS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"No")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable showing Blish HUD's FPS in the top right corner.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Show additional debug data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"No")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable showing additional stats in the corner.  This can be helpful when attempting to determine what module is causing performance issues.")))))}p.isMDXComponent=!0}}]);