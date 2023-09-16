"use strict";(self.webpackChunknew_blishhud_com=self.webpackChunknew_blishhud_com||[]).push([[4962],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),c=a,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||n;return r?o.createElement(h,l(l({ref:t},p),{},{components:r})):o.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<n;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7515:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var o=r(7462),a=(r(7294),r(3905));const n={id:"getting-started",title:"Getting Started"},l=void 0,i={unversionedId:"modules/overview/getting-started",id:"modules/overview/getting-started",title:"Getting Started",description:"Discord",source:"@site/docs/modules/overview/getting-started.md",sourceDirName:"modules/overview",slug:"/modules/overview/getting-started",permalink:"/docs/modules/overview/getting-started",draft:!1,tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started"},sidebar:"DevGuides",previous:{title:"Overview",permalink:"/docs/dev"},next:{title:"Update Your Manifest",permalink:"/docs/modules/overview/update-your-manifest"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Setup Using the Module Template for Visual Studio 2019",id:"setup-using-the-module-template-for-visual-studio-2019",level:2},{value:"Setup Without the Module Template",id:"setup-without-the-module-template",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/HzAV82d"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Join_Our_Discord-%F0%9F%93%A6module_discussion-Green",alt:"Discord"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/blish-hud/Module-Template/releases"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Release-ModuleTemplateDeployment.vsix-Blue",alt:null}))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Blish HUD module projects can be created from scratch or by using the above module template.  The template is the recommended method.  Both methods are described below.  Do not perform both sets of instructions."),(0,a.kt)("h2",{id:"setup-using-the-module-template-for-visual-studio-2019"},"Setup Using the Module Template for Visual Studio 2019"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the latest Visual Studio module template found under ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/blish-hud/Module-Template/releases"},"Releases"),"."),(0,a.kt)("li",{parentName:"ol"},"Create a new project in Visual Studio using the template.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},'Note: On the "Configure your new project" step of the project wizard, make sure to enter the desired project name.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},'Note: On the "Configure your new project" step of the project wizard, you ',(0,a.kt)("strong",{parentName:"em"},"must"),' select "Place solution and project in the same directory".')))),(0,a.kt)("li",{parentName:"ol"},'When you open the Package Manager Console, you should get a prompt saying "Some NuGet packages are missing from this solution. Click to restore from your online package sources." Click the restore button to download the NuGet packages.'),(0,a.kt)("li",{parentName:"ol"},'Now run "Update-Package" in the Package Manager Console to update all NuGet packages to the latest versions.')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The template will attempt to auto-fill details in your manifest as well as define namespace, etc.  Be sure to review these to ensure things are how you would like them to be.")),(0,a.kt)("h2",{id:"setup-without-the-module-template"},"Setup Without the Module Template"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new .NET Framework Class Library project."),(0,a.kt)("li",{parentName:"ol"},"Add a reference to the latest version of Blish HUD to your project (",(0,a.kt)("inlineCode",{parentName:"li"},"Install-Package BlishHUD"),")."),(0,a.kt)("li",{parentName:"ol"},"Ensure the Blish HUD and all of Blish HUD's dependent references have ",(0,a.kt)("strong",{parentName:"li"},"Copy Local")," set to ",(0,a.kt)("strong",{parentName:"li"},"False")," in the properties of the reference.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you don't do this, your module will package these assemblies with your module.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This will make your modules unnecessarily large (it'll contain the entire Blish HUD assembly!)."),(0,a.kt)("li",{parentName:"ul"},"Blish HUD will already have all of these assemblies loaded (since it naturally depends on them), so you don't need to include them.")))))))}m.isMDXComponent=!0}}]);