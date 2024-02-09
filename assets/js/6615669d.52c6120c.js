"use strict";(self.webpackChunknew_blishhud_com=self.webpackChunknew_blishhud_com||[]).push([[572],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=o.createContext({}),u=function(e){var t=o.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return o.createElement(a.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,g=p["".concat(a,".").concat(m)]||p[m]||c[m]||n;return r?o.createElement(g,s(s({ref:t},d),{},{components:r})):o.createElement(g,s({ref:t},d))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[p]="string"==typeof e?e:i,s[1]=l;for(var u=2;u<n;u++)s[u]=r[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3297:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var o=r(7462),i=(r(7294),r(3905));const n={id:"registering-modules",title:"Registering Modules"},s=void 0,l={unversionedId:"modules/ssrd/registering-modules",id:"modules/ssrd/registering-modules",title:"Registering Modules",description:"Overview",source:"@site/docs/modules/ssrd/registering-modules.md",sourceDirName:"modules/ssrd",slug:"/modules/ssrd/registering-modules",permalink:"/docs/modules/ssrd/registering-modules",draft:!1,tags:[],version:"current",frontMatter:{id:"registering-modules",title:"Registering Modules"},sidebar:"DevGuides",previous:{title:"Overview",permalink:"/docs/modules/ssrd/overview"},next:{title:"Manage Releases",permalink:"/docs/modules/ssrd/manage-releases"}},a={},u=[{value:"Overview",id:"overview",level:2},{value:"Registering a module",id:"registering-a-module",level:2},{value:"1. Copy the git URI from your repository.",id:"1-copy-the-git-uri-from-your-repository",level:4},{value:"2. Paste the URI into the <code>Add Module Repository</code> page in SSRD.",id:"2-paste-the-uri-into-the-add-module-repository-page-in-ssrd",level:4},{value:"4. Register the relevant modules.",id:"4-register-the-relevant-modules",level:4},{value:"Webhooks",id:"webhooks",level:2},{value:"Remarks",id:"remarks",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Modules are registered by their git URI.  A single git repository may contain multiple modules.  Each module detected within a repository can be imported into SSRD."),(0,i.kt)("h2",{id:"registering-a-module"},"Registering a module"),(0,i.kt)("p",null,"To register a module, you will need to first get your git URI.  It will end in ",(0,i.kt)("inlineCode",{parentName:"p"},".git"),"."),(0,i.kt)("h4",{id:"1-copy-the-git-uri-from-your-repository"},"1. Copy the git URI from your repository."),(0,i.kt)("img",{src:"/img/docs/ssrd/gituri.png"}),(0,i.kt)("h4",{id:"2-paste-the-uri-into-the-add-module-repository-page-in-ssrd"},"2. Paste the URI into the ",(0,i.kt)("inlineCode",{parentName:"h4"},"Add Module Repository")," page in SSRD."),(0,i.kt)("img",{src:"/img/docs/ssrd/register-module.png"}),(0,i.kt)("h4",{id:"4-register-the-relevant-modules"},"4. Register the relevant modules."),(0,i.kt)("p",null,"You will be presented with the manifest of each detected module in the repo.  Once you've added each module, you may continue on to the main modules page."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"An old recording of this process can be seen below, though, some aspects of the UI have since been updated.")),(0,i.kt)("div",{style:{position:"relative",paddingBottom:"calc(52.86% + 44px)"}},(0,i.kt)("iframe",{src:"/img/docs/ssrd/ssrd.webm",frameborder:"0",scrolling:"no",width:"100%",height:"100%",style:{position:"absolute",top:0,left:0},allowfullscreen:!0})),(0,i.kt)("h2",{id:"webhooks"},"Webhooks"),(0,i.kt)("p",null,"To allow SSRD to automatically update when you make changes to your module, you can add a webhook to your module's repo.  If a repo contains multiple repos within it, a single webhook will handle updates for all of the registered modules within it."),(0,i.kt)("p",null,"To get the webhook URL, hover-over the arrow in the top-right corner of your module and copy the ",(0,i.kt)("strong",{parentName:"p"},"Push Webhook")," from the menu."),(0,i.kt)("img",{src:"/img/docs/ssrd/push-webhook.png"}),(0,i.kt)("p",null,"Add the webhook to your repo and configure it to only trigger on ",(0,i.kt)("strong",{parentName:"p"},"Push"),".  This will ensure that your module's manifest remains up-to-date in SSRD for release management as well as other features such as static content hosting."),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SSRD only supports modules hosted on GitHub."),(0,i.kt)("li",{parentName:"ul"},"To add a private GitHub repo to SSRD, you must first give our ",(0,i.kt)("inlineCode",{parentName:"li"},"org@blishhud.com")," GitHub account read access to your repo."),(0,i.kt)("li",{parentName:"ul"},"Modules must include all dependencies resolvable from their repo, so if you have a second project that is not included in the repo that your module references, the build will fail.  You can either include the shared library DLL in your module\u2019s repo or publish it as a NuGet package."),(0,i.kt)("li",{parentName:"ul"},"There are limited user facing error messages.  If something unexpected happens, please let Freesn\xf6w know so that he can investigate.")))}c.isMDXComponent=!0}}]);