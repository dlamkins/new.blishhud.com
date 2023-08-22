"use strict";(self.webpackChunknew_blishhud_com=self.webpackChunknew_blishhud_com||[]).push([[6719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>p});var o=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),c=u(n),p=s,m=c["".concat(l,".").concat(p)]||c[p]||d[p]||i;return n?o.createElement(m,r(r({ref:t},h),{},{components:n})):o.createElement(m,r({ref:t},h))}));function p(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=c;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,r[1]=a;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var o=n(7462),s=(n(7294),n(3905));const i={id:"troubleshooting",title:"Common Issues"},r=void 0,a={unversionedId:"user/troubleshooting",id:"user/troubleshooting",title:"Common Issues",description:"Join our Discord and share your issues in our #\ud83d\udca2help channel.",source:"@site/docs/user/troubleshooting.md",sourceDirName:"user",slug:"/user/troubleshooting",permalink:"/docs/user/troubleshooting",draft:!1,tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"Common Issues"}},l={},u=[{value:"1. I see the Blish HUD icons on a black background",id:"1-i-see-the-blish-hud-icons-on-a-black-background",level:3},{value:"<strong>Possible Solution 1</strong>",id:"possible-solution-1",level:4},{value:"<strong>Possible Solution 2</strong>",id:"possible-solution-2",level:4},{value:"2. Dragging windows creates a trail behind them",id:"2-dragging-windows-creates-a-trail-behind-them",level:3},{value:"Old Windows 10",id:"old-windows-10",level:4},{value:"Nvidia or Radeon post effects",id:"nvidia-or-radeon-post-effects",level:4},{value:"3. Text and/or textures are blurry",id:"3-text-andor-textures-are-blurry",level:3},{value:"4. Blish HUD does not show while game is set to Fullscreen",id:"4-blish-hud-does-not-show-while-game-is-set-to-fullscreen",level:3},{value:"5. Running as administrator",id:"5-running-as-administrator",level:3},{value:"6. Blish HUD doesn&#39;t show on top of Guild Wars 2",id:"6-blish-hud-doesnt-show-on-top-of-guild-wars-2",level:3},{value:"<strong>Executable name</strong>",id:"executable-name",level:4},{value:"<strong>3rd party launchers</strong>",id:"3rd-party-launchers",level:4},{value:"7. The Module Repo is empty",id:"7-the-module-repo-is-empty",level:3},{value:"8. Settings are not saved",id:"8-settings-are-not-saved",level:3},{value:"9. Immediate crash when Blish HUD is in the same directory as ArcDPS",id:"9-immediate-crash-when-blish-hud-is-in-the-same-directory-as-arcdps",level:3},{value:"10. Blish HUD crashes when it is launched and no logs are written",id:"10-blish-hud-crashes-when-it-is-launched-and-no-logs-are-written",level:3}],h={toc:u};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Can't find your issue or still need help?",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Join our Discord and share your issues in our ",(0,s.kt)("a",{parentName:"p",href:"https://discord.gg/qJdUhdG"},"#\ud83d\udca2help")," channel."),(0,s.kt)("p",{parentName:"admonition"},"Please be sure to let us know what version of Blish HUD you are using and provide a copy of your logs. Logs can be found in the folder ",(0,s.kt)("inlineCode",{parentName:"p"},"Documents\\Guild Wars 2\\addons\\blishhud\\logs"),".")),(0,s.kt)("h3",{id:"1-i-see-the-blish-hud-icons-on-a-black-background"},"1. I see the Blish HUD icons on a black background"),(0,s.kt)("img",{src:"/img/troubleshooting/nvidia-post-processing.png"}),(0,s.kt)("h4",{id:"possible-solution-1"},(0,s.kt)("strong",{parentName:"h4"},"Possible Solution 1")),(0,s.kt)("p",null,"This is usually due to post-processing effects being applied to Blish HUD by your graphics card drivers."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Open ",(0,s.kt)("strong",{parentName:"li"},"NVIDIA Control Panel"),"."),(0,s.kt)("li",{parentName:"ol"},"In the tree view on the left side select ",(0,s.kt)("strong",{parentName:"li"},"3D Settings > Manage 3D settings"),"."),(0,s.kt)("li",{parentName:"ol"},"Under the ",(0,s.kt)("strong",{parentName:"li"},"Program Settings")," tab in the main panel, select or find Blish HUD in the dropdown."),(0,s.kt)("li",{parentName:"ol"},"Ensure that all settings appled to Blish HUD are the default setting."),(0,s.kt)("li",{parentName:"ol"},"Apply the changes.")),(0,s.kt)("p",null,"Restarting Blish HUD should remove the black background and allow it to be transparent on top of the game like it is intended."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"If using an AMD card, please check the graphics panel and ensure no post processing effects such as sharpening are being applied.")),(0,s.kt)("h4",{id:"possible-solution-2"},(0,s.kt)("strong",{parentName:"h4"},"Possible Solution 2")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Ensure you have transparency effects turned on in your Windows settings."),(0,s.kt)("li",{parentName:"ul"},"Ensure you have the latest version of your graphics card drivers installed."),(0,s.kt)("li",{parentName:"ul"},"Ensure you don't have other overlays such as the Discord overlay enabled.")),(0,s.kt)("h3",{id:"2-dragging-windows-creates-a-trail-behind-them"},"2. Dragging windows creates a trail behind them"),(0,s.kt)("img",{src:"/img/troubleshooting/windows-1803.png"}),(0,s.kt)("h4",{id:"old-windows-10"},"Old Windows 10"),(0,s.kt)("p",null,"Please ensure you are not running Windows 10 Version 1803.  If you are, you likely need to update to a more recent version as there appear to be issues with overlays in this version."),(0,s.kt)("p",null,"You can check your version of Windows 10:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Press ",(0,s.kt)("strong",{parentName:"li"},"Windows Key + R")," to open the Run dialog."),(0,s.kt)("li",{parentName:"ol"},"Type ",(0,s.kt)("em",{parentName:"li"},"winver")," and press ",(0,s.kt)("strong",{parentName:"li"},"Enter"),"."),(0,s.kt)("li",{parentName:"ol"},"The resulting dialog will indicate the exact version of Windows you are using.")),(0,s.kt)("h4",{id:"nvidia-or-radeon-post-effects"},"Nvidia or Radeon post effects"),(0,s.kt)("p",null,"Check your AMD or Nvidia post processing effects configured to ensure that sharpening or other things are not applied to Blish HUD.  Having these post processing effects applied to Blish HUD can result in us rendering incorrectly."),(0,s.kt)("h3",{id:"3-text-andor-textures-are-blurry"},"3. Text and/or textures are blurry"),(0,s.kt)("p",null,'This is a known issue with how we currently handle scaling the UI.  Guild Wars 2 allows you to set one of four "UI Size" in the game options which we try to account for and match.  Currently, for the highest quality results, ensure this setting is set to ',(0,s.kt)("strong",{parentName:"p"},"Large"),".  We hope to have a better solution for this in the future."),(0,s.kt)("h3",{id:"4-blish-hud-does-not-show-while-game-is-set-to-fullscreen"},"4. Blish HUD does not show while game is set to Fullscreen"),(0,s.kt)("p",null,"In order for us to overlay the game, the game's resolution must be set to ",(0,s.kt)("strong",{parentName:"p"},"Window"),", ",(0,s.kt)("strong",{parentName:"p"},"Windowed Fullscreen"),", or a specific resolution.  If it is set to just ",(0,s.kt)("strong",{parentName:"p"},"Fullscreen"),", we are unable to overlay the game."),(0,s.kt)("h3",{id:"5-running-as-administrator"},"5. Running as administrator"),(0,s.kt)("p",null,"When an application is run as an administrator, other applications can not interact with it unless they have also been launched as an administrator.  Some third party launchers will launch Guild Wars 2 as administrator.  If you or a launcher starts Guild Wars 2 as an administrator, you must also start Blish HUD as an administrator."),(0,s.kt)("p",null,"Under normal circumstances, Blish HUD does not require administrator privileges to work, so running it as an administrator is typically only needed in the above scenario."),(0,s.kt)("h3",{id:"6-blish-hud-doesnt-show-on-top-of-guild-wars-2"},"6. Blish HUD doesn't show on top of Guild Wars 2"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"(Check first that #5 does not apply)")),(0,s.kt)("h4",{id:"executable-name"},(0,s.kt)("strong",{parentName:"h4"},"Executable name")),(0,s.kt)("p",null,"Ensure that your Guild Wars 2 executable (where it is installed) is named one of the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Gw2-64"),(0,s.kt)("li",{parentName:"ul"},"Gw2"),(0,s.kt)("li",{parentName:"ul"},"KZW")),(0,s.kt)("img",{src:"/img/troubleshooting/executable-name.png"}),(0,s.kt)("h4",{id:"3rd-party-launchers"},(0,s.kt)("strong",{parentName:"h4"},"3rd party launchers")),(0,s.kt)("p",null,"Some launchers can make it difficult for us to detect the game.  Use a launcher that has built in support for Blish HUD (such as ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/TheCheatsrichter/Gw2_Launchbuddy"},"Gw2 LaunchBuddy"),")."),(0,s.kt)("p",null,"If you still have issues or a edge case, familiarize yourself with our ",(0,s.kt)("a",{parentName:"p",href:"/docs/user/launch-options"},"launch options")," which can be used to manually specify the executable name we should detect as well as the Mumblelink API connection name that some launchers change."),(0,s.kt)("h3",{id:"7-the-module-repo-is-empty"},"7. The Module Repo is empty"),(0,s.kt)("p",null,"If you are running Windows 7 this is an issue with the versions of TLS enabled on your system.  Consider reviewing this ",(0,s.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/topic/update-to-enable-tls-1-1-and-tls-1-2-as-default-secure-protocols-in-winhttp-in-windows-c4bd73d2-31d7-761e-0178-11268bb10392"},"Microsoft topic")," which goes into more details about the issue and potential solutions."),(0,s.kt)("p",null,"If you are uncomfortable or unfamiliar with the topics discussed in the above Microsoft document, reach out to us on Discord and we can provide a custom version of Blish HUD."),(0,s.kt)("h3",{id:"8-settings-are-not-saved"},"8. Settings are not saved"),(0,s.kt)("p",null,"You you find that your settings are not saving between maps (for the pathing module) or with relaunches of Blish HUD, it is likely that your anti-virus is preventing us from writing to our settings directory."),(0,s.kt)("p",null,'You can check your Blish HUD logs for occurances of "Access Denied" errors to confirm this.  There is also a chance that no logs will exist if we have been blocked from writing to our logs directory.'),(0,s.kt)("p",null,"To resolve this issue:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Ensure Blish HUD.exe is explicitly allowed by any anti-virus you have running (if you only have Windows Defender, we have not seen this block us before)."),(0,s.kt)("li",{parentName:"ol"},"Ensure our directory under your documents (",(0,s.kt)("inlineCode",{parentName:"li"},"Documents\\Guild Wars 2\\addons\\blishhud\\"),") is explicitly allowed in your anti-virus software."),(0,s.kt)("li",{parentName:"ol"},'Right-click your Blish HUD.exe and go to properties.  Ensure at the bottom that the option "Unblock" is checked, if it is available (if this option is not available, you can skip it).')),(0,s.kt)("p",null,"If the above steps do not resolve the issue, you can try utilizing ",(0,s.kt)("a",{parentName:"p",href:"portable-mode"},"portable mode"),"."),(0,s.kt)("h3",{id:"9-immediate-crash-when-blish-hud-is-in-the-same-directory-as-arcdps"},"9. Immediate crash when Blish HUD is in the same directory as ArcDPS"),(0,s.kt)("p",null,"When using the DirectX 11 vesrion of ArcDPS (d3d11.dll), if it is in the same directory as Blish HUD, it will attempt to inject into Blish HUD.  ArcDPS expects to be injected into Guild Wars 2, so it will cause Blish HUD to crash almost immediately upon launch."),(0,s.kt)("p",null,"To resolve this, please ensure that Blish HUD is placed in a different folder \u2014 not one where there is a d3d11.dll file in the same directory."),(0,s.kt)("h3",{id:"10-blish-hud-crashes-when-it-is-launched-and-no-logs-are-written"},"10. Blish HUD crashes when it is launched and no logs are written"),(0,s.kt)("p",null,"When features such as ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/microsoft-365/security/defender-endpoint/controlled-folders?view=o365-worldwide"},"Window's Ransomware protection")," are enabled (typically called Controlled Folder Access), it can block us from writing to our settings directory and cause Blish HUD to crash.  Since we can't access the settings directory, we also can't write a log file to tell you why we crashed."),(0,s.kt)("p",null,'The best way to check if this is causing the issue is to open "Controlled Folder Access" by searching for it in the Windows Start Menu.'),(0,s.kt)("img",{src:"/img/troubleshooting/cfa1.png"}),(0,s.kt)("p",null,'If the Controlled folder access toggle shows "On" as it does in the screenshot above, you will need to explicitly give access to Blish HUD.  You can do this by selecting "Allow an app through Controlled folder access" and selecting the ',(0,s.kt)("inlineCode",{parentName:"p"},"Blish HUD.exe")," when prompted."),(0,s.kt)("p",null,'If this toggle shows "Off" or if Blish HUD still crashes, check to ensure you don\'t have an anti-virus enabled as described in troubleshooting item 8: ',(0,s.kt)("a",{parentName:"p",href:"/docs/user/troubleshooting#8-settings-are-not-saved"},"Settings are not saved"),"."),(0,s.kt)("p",null,"Finally, if you are still experiencing issues, you can try to enable ",(0,s.kt)("a",{parentName:"p",href:"/docs/user/portable-mode"},"portable mode")," which will save the settings in the current folder which is less likely to be blocked."))}d.isMDXComponent=!0}}]);