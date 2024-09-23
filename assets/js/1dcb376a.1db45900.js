"use strict";(self.webpackChunknew_blishhud_com=self.webpackChunknew_blishhud_com||[]).push([[8199],{3905:(e,t,l)=>{l.d(t,{Zo:()=>d,kt:()=>h});var r=l(7294);function s(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){s(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,r,s=function(e,t){if(null==e)return{};var l,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(s[l]=e[l]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(s[l]=e[l])}return s}var i=r.createContext({}),u=function(e){var t=r.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},d=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var l=e.components,s=e.mdxType,n=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(l),m=s,h=p["".concat(i,".").concat(m)]||p[m]||c[m]||n;return l?r.createElement(h,a(a({ref:t},d),{},{components:l})):r.createElement(h,a({ref:t},d))}));function h(e,t){var l=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=l.length,a=new Array(n);a[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:s,a[1]=o;for(var u=2;u<n;u++)a[u]=l[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,l)}m.displayName="MDXCreateElement"},7441:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var r=l(7462),s=(l(7294),l(3905));const n={id:"manage-releases",title:"Manage Releases"},a=void 0,o={unversionedId:"modules/ssrd/manage-releases",id:"modules/ssrd/manage-releases",title:"Manage Releases",description:"Overview",source:"@site/docs/modules/ssrd/manage-releaes.md",sourceDirName:"modules/ssrd",slug:"/modules/ssrd/manage-releases",permalink:"/docs/modules/ssrd/manage-releases",draft:!1,tags:[],version:"current",frontMatter:{id:"manage-releases",title:"Manage Releases"},sidebar:"DevGuides",previous:{title:"Registering Modules",permalink:"/docs/modules/ssrd/registering-modules"},next:{title:"Additional Services",permalink:"/docs/modules/ssrd/additional-services"}},i={},u=[{value:"Overview",id:"overview",level:2},{value:"Submit a New Release",id:"submit-a-new-release",level:2},{value:"Publish to the public repo",id:"publish-to-the-public-repo",level:3},{value:"Publish to the prerelease repo",id:"publish-to-the-prerelease-repo",level:3},{value:"Set Release Notes",id:"set-release-notes",level:2},{value:"Release Listing Modifiers",id:"release-listing-modifiers",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...l}=e;return(0,s.kt)(p,(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"SSRD allows you to submit releases to the Blish HUD module repository automatically.  SSRD also allows you to manage existing releases."),(0,s.kt)("h2",{id:"submit-a-new-release"},"Submit a New Release"),(0,s.kt)("p",null,"A new release can be submitted by using the Publish button to select a repo target."),(0,s.kt)("img",{src:"/img/docs/ssrd/mr1.png",width:"500"}),(0,s.kt)("p",null,"When selected, your module will be built and a new package manifest PR'd to the target repository."),(0,s.kt)("h3",{id:"publish-to-the-public-repo"},"Publish to the public repo"),(0,s.kt)("p",null,"Releases added to the public repo will be visible to all Blish HUD users."),(0,s.kt)("h3",{id:"publish-to-the-prerelease-repo"},"Publish to the prerelease repo"),(0,s.kt)("p",null,"Releases added to the prerelease repo will only be visible to Blish HUD users that have ",(0,s.kt)("a",{parentName:"p",href:"https://blishhud.com/docs/user/overlay-settings#:~:text=Blish%20HUD%20window.-,Preview%20releases,-No"},"Preview releases")," enabled.  Prerelease releases are good for testing major changes before deploying to a wider audience."),(0,s.kt)("h2",{id:"set-release-notes"},"Set Release Notes"),(0,s.kt)("p",null,"Providing release notes helps your users better understand the improvements made to your module.  Release notes are shared in the ",(0,s.kt)("a",{parentName:"p",href:"https://discord.gg/ryWP5Ct89S"},"\ud83c\udf89release-feed")," Discord channel and on ",(0,s.kt)("a",{parentName:"p",href:"https://pkgs.blishhud.com/"},"https://pkgs.blishhud.com/"),"."),(0,s.kt)("img",{src:"/img/docs/ssrd/mr2.png",width:"400"}),(0,s.kt)("p",null,"Release notes can be updated at any time as needed.  The posting will be updated both in Discord and on the pkgs site."),(0,s.kt)("h2",{id:"release-listing-modifiers"},"Release Listing Modifiers"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Toggle Release Listing"),(0,s.kt)("div",null,"Allows you to hide a module release from Blish HUD.  When hidden, the release will no longer be displayed in Blish HUD's module repo.  It can be good to hide older releases to keep the version dropdown easier to navigate.")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Spoil Release"),(0,s.kt)("div",null,(0,s.kt)("p",null,(0,s.kt)("strong",null,"ONLY AN ADMIN CAN UN-SPOIL A RELEASE.")),(0,s.kt)("p",null,"Spoiling a release fully recalls a release for all users:",(0,s.kt)("ul",null,(0,s.kt)("li",null,"The release is no longer available for download in Blish HUD's module repo."),(0,s.kt)("li",null,"Users will be unable to enable the module under any circumstances (even if it was previously downloaded and enabled)."))),(0,s.kt)("p",null,"A module release should be spoiled when it causes numerous unhandled/fatal exceptions causing Blish HUD to crash."))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Delete Release"),(0,s.kt)("div",null,(0,s.kt)("p",null,(0,s.kt)("i",null,"Currently only available prior to a release getting merged.")),(0,s.kt)("p",null,"Deletes a release from SSRD.  If you wish to perform a new release, you will need to bump the version number to avoid artifact naming conflicts (this will be fixed in the future)."))))}c.isMDXComponent=!0}}]);