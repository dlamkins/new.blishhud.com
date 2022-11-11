"use strict";(self.webpackChunknew_blishhud_com=self.webpackChunknew_blishhud_com||[]).push([[7166],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=l.createContext({}),s=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,c=m["".concat(u,".").concat(h)]||m[h]||d[h]||i;return n?l.createElement(c,o(o({ref:t},p),{},{components:n})):l.createElement(c,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var s=2;s<i;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var l=n(7462),a=(n(7294),n(3905));const i={id:"launch-options",title:"Launch Options"},o=void 0,r={unversionedId:"user/launch-options",id:"user/launch-options",title:"Launch Options",description:"Launch options allow you to set lower level settings in the overlay at launch.  These can be added to a Blish HUD shortcut or when launched from a console.",source:"@site/docs/user/launch-options.md",sourceDirName:"user",slug:"/user/launch-options",permalink:"/docs/user/launch-options",draft:!1,tags:[],version:"current",frontMatter:{id:"launch-options",title:"Launch Options"},sidebar:"UserGuides",previous:{title:"Portable Mode",permalink:"/docs/user/portable-mode"},next:{title:"Blish HUD has an opaque black background",permalink:"/docs/user/troubleshooting/731"}},u={},s=[{value:"Parameters",id:"parameters",level:2},{value:"-g, --startgw2 &lt;1 or 2&gt;",id:"-g---startgw2-1-or-2",level:3},{value:"-p, --process &lt;Gw2-64&gt;",id:"-p---process-gw2-64",level:3},{value:"-P, --pid &lt;pid&gt;",id:"-p---pid-pid",level:3},{value:"-w, --window &lt;ArenaNet_Dx_Window_Class&gt;",id:"-w---window-arenanet_dx_window_class",level:3},{value:"-s, --settings &lt;path\tosettingsdir&gt;",id:"-s---settings-pathtosettingsdir",level:3},{value:"-r, --ref &lt;path\to\ref.dat&gt;",id:"-r---ref-pathtorefdat",level:3},{value:"-m, --mumble &lt;MumbleLink&gt;",id:"-m---mumble-mumblelink",level:3},{value:"-f, --maxfps &lt;60&gt;",id:"-f---maxfps-60",level:3},{value:"-d, --debug",id:"-d---debug",level:3},{value:"-M, --module &lt;path\tomodule.bhm&gt;",id:"-m---module-pathtomodulebhm",level:3},{value:"Examples",id:"examples",level:2},{value:"Overlay a different application (esp. for testing)",id:"overlay-a-different-application-esp-for-testing",level:3},{value:"Save application settings in the current directory",id:"save-application-settings-in-the-current-directory",level:3},{value:"Debugging a module",id:"debugging-a-module",level:3},{value:"Packed module",id:"packed-module",level:4},{value:"Unpacked module",id:"unpacked-module",level:4}],p={toc:s};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,l.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Launch options allow you to set lower level settings in the overlay at launch.  These can be added to a Blish HUD shortcut or when launched from a console."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"-g---startgw2-1-or-2"},"-g, --startgw2 <1 or 2",">"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Default: ",(0,a.kt)("inlineCode",{parentName:"em"},"0"))),(0,a.kt)("p",null,"Allows you to launch Guild Wars 2 along with Blish HUD."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0 does nothing"),(0,a.kt)("li",{parentName:"ul"},"1 will start Guild Wars 2"),(0,a.kt)("li",{parentName:"ul"},"2 will start Guild Wars 2 with the autologin flag")),(0,a.kt)("h3",{id:"-p---process-gw2-64"},"-p, --process <Gw2-64",">"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Default: ",(0,a.kt)("inlineCode",{parentName:"em"},"Gw2-64"))),(0,a.kt)("p",null,"The name of the process the overlay will be waiting for (without ",(0,a.kt)("inlineCode",{parentName:"p"},".exe"),"). This parameter is used in conjunction with -w, --window."),(0,a.kt)("h3",{id:"-p---pid-pid"},"-P, --pid <pid",">"),(0,a.kt)("p",null,"The PID of the process the overlay will be waiting for to overlay.  Has a higher priority than -p, --process but a lower priority than -m, --mumble."),(0,a.kt)("h3",{id:"-w---window-arenanet_dx_window_class"},"-w, --window <ArenaNet_Dx_Window_Class",">"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Default: ",(0,a.kt)("inlineCode",{parentName:"em"},"ArenaNet_Dx_Window_Class"))),(0,a.kt)("p",null,"The name of the window Blish HUD should overlay. This parameter is used in conjunction with -p, --process."),(0,a.kt)("h3",{id:"-s---settings-pathtosettingsdir"},"-s, --settings <path\\to\\settings\\dir",">"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Default: ",(0,a.kt)("inlineCode",{parentName:"em"},"%userprofile%\\Documents\\Guild Wars 2\\addons\\blishhud"))),(0,a.kt)("p",null,"The directory where Blish HUD should load and save settings and other persistent data from/to."),(0,a.kt)("h3",{id:"-r---ref-pathtorefdat"},"-r, --ref <path\\to\\ref.dat",">"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Default: ",(0,a.kt)("inlineCode",{parentName:"em"},".\\ref.dat"))),(0,a.kt)("p",null,"The path to the ref.dat file which primarily contains texture and audio assets for Blish HUD. "),(0,a.kt)("h3",{id:"-m---mumble-mumblelink"},"-m, --mumble <MumbleLink",">"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Default: ",(0,a.kt)("inlineCode",{parentName:"em"},"MumbleLink"))),(0,a.kt)("p",null,"The name of the Mumble Link target that Blish HUD should be reading from (if you are using the ",(0,a.kt)("inlineCode",{parentName:"p"},"-mumble")," parameter with Guild Wars 2)."),(0,a.kt)("h3",{id:"-f---maxfps-60"},"-f, --maxfps <60",">"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Default: ",(0,a.kt)("inlineCode",{parentName:"em"},"60"))),(0,a.kt)("p",null,"Allows you to set the max target FPS (mutually exclusive with --unlockfps)."),(0,a.kt)("h3",{id:"-d---debug"},"-d, --debug"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Default: ",(0,a.kt)("inlineCode",{parentName:"em"},"false"))),(0,a.kt)("p",null,"When enabled:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Shows FPS and other timings in the top-right corner."),(0,a.kt)("li",{parentName:"ul"},"Module exceptions are rethrown (where they would otherwise be handled) to enable debugging Modules easier."),(0,a.kt)("li",{parentName:"ul"},"Sets the minimum output log level to DEBUG.")),(0,a.kt)("h3",{id:"-m---module-pathtomodulebhm"},"-M, --module <path\\to\\module.bhm",">"),(0,a.kt)("p",null,"Expects the path to a Blish HUD module file (.bhm) OR the path to a directory which contains an unpacked module.  When specified, Blish HUD will load this module and attempt to enable it when launched.  Useful when developing modules."),(0,a.kt)("p",null,"If using a directory, be sure that your path does not end in ",(0,a.kt)("inlineCode",{parentName:"p"},"\\")," otherwise the closing double quote will be escaped."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"overlay-a-different-application-esp-for-testing"},"Overlay a different application (esp. for testing)"),(0,a.kt)("p",null,"Identify the process name and window name.  Window Spy (a utility that comes with ",(0,a.kt)("a",{parentName:"p",href:"https://www.autohotkey.com/download/"},"AutoHotKey"),") does a good job of acquiring the required info."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2090).Z,width:"1453",height:"542"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'".\\Blish HUD.exe" --process powershell --window ConsoleWindowClass')," will have Blish HUD overlay a PowerShell window."),(0,a.kt)("h3",{id:"save-application-settings-in-the-current-directory"},"Save application settings in the current directory"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'".\\Blish HUD.exe" --settings .\\')),(0,a.kt)("h3",{id:"debugging-a-module"},"Debugging a module"),(0,a.kt)("h4",{id:"packed-module"},"Packed module"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'".\\Blish HUD.exe" --module "C:\\Source\\MyNewModule\\bin\\Debug\\MyNewModule.bhm" --debug')),(0,a.kt)("h4",{id:"unpacked-module"},"Unpacked module"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'".\\Blish HUD.exe" --module "C:\\Source\\MyNewModule\\bin\\Debug" --debug')))}d.isMDXComponent=!0},2090:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/launch-options-0210353cdf0f59f6ca8f2dfd3c28c80e.png"}}]);