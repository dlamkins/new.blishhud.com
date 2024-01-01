"use strict";(self.webpackChunknew_blishhud_com=self.webpackChunknew_blishhud_com||[]).push([[2403],{3905:(e,o,r)=>{r.d(o,{Zo:()=>p,kt:()=>k});var t=r(7294);function n(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function l(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?l(Object(r),!0).forEach((function(o){n(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function c(e,o){if(null==e)return{};var r,t,n=function(e,o){if(null==e)return{};var r,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],o.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=t.createContext({}),s=function(e){var o=t.useContext(a),r=o;return e&&(r="function"==typeof e?e(o):i(i({},o),e)),r},p=function(e){var o=s(e.components);return t.createElement(a.Provider,{value:o},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},m=t.forwardRef((function(e,o){var r=e.components,n=e.mdxType,l=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,k=d["".concat(a,".").concat(m)]||d[m]||u[m]||l;return r?t.createElement(k,i(i({ref:o},p),{},{components:r})):t.createElement(k,i({ref:o},p))}));function k(e,o){var r=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var c={};for(var a in o)hasOwnProperty.call(o,a)&&(c[a]=o[a]);c.originalType=e,c[d]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<l;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6368:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var t=r(7462),n=(r(7294),r(3905));const l={id:"colorpicker",title:"ColorPicker & ColorBox"},i=void 0,c={unversionedId:"dev/controls/colorpicker",id:"dev/controls/colorpicker",title:"ColorPicker & ColorBox",description:"The ColorPicker control is meant to replicate the color selection controls found under wardrobe dying, guild emblem designing, etc.  The ColorPicker control pairs nicely with the ColorBox control.",source:"@site/docs/dev/controls/colorpicker.md",sourceDirName:"dev/controls",slug:"/dev/controls/colorpicker",permalink:"/docs/dev/controls/colorpicker",draft:!1,tags:[],version:"current",frontMatter:{id:"colorpicker",title:"ColorPicker & ColorBox"},sidebar:"DevGuides",previous:{title:"Controls Overview",permalink:"/docs/dev/controls/overview"},next:{title:"DetailsButton",permalink:"/docs/dev/controls/detailsbutton"}},a={},s=[{value:"Standard Usage",id:"standard-usage",level:2},{value:"Using multiple ColorBox controls",id:"using-multiple-colorbox-controls",level:3},{value:"Adding colors from the API",id:"adding-colors-from-the-api",level:3}],p={toc:s},d="wrapper";function u(e){let{components:o,...r}=e;return(0,n.kt)(d,(0,t.Z)({},p,r,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"ColorPicker")," control is meant to replicate the color selection controls found under wardrobe dying, guild emblem designing, etc.  The ",(0,n.kt)("inlineCode",{parentName:"p"},"ColorPicker")," control pairs nicely with the ",(0,n.kt)("inlineCode",{parentName:"p"},"ColorBox")," control."),(0,n.kt)("h2",{id:"standard-usage"},"Standard Usage"),(0,n.kt)("img",{src:"/img/docs/controls/colorpicker-1.png"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"var exampleColorBox = new ColorBox() {\n    // ...\n};\n\nvar exampleColorPicker = new ColorPicker() {\n    // ...\n    AssociatedColorBox = exampleColorBox\n};\n")),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"ColorPicker")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"AssociatedColorBox")," will set the assigned ",(0,n.kt)("inlineCode",{parentName:"p"},"ColorBox"),"'s color to whatever the picker selects."),(0,n.kt)("h3",{id:"using-multiple-colorbox-controls"},"Using multiple ColorBox controls"),(0,n.kt)("p",null,"If you have multiple ",(0,n.kt)("inlineCode",{parentName:"p"},"ColorBox")," controls that you would like to use with a single ",(0,n.kt)("inlineCode",{parentName:"p"},"ColorPicker"),", reassign the ",(0,n.kt)("inlineCode",{parentName:"p"},"AssociatedColorBox")," on the ",(0,n.kt)("inlineCode",{parentName:"p"},"ColorPicker")," to the ",(0,n.kt)("inlineCode",{parentName:"p"},"ColorBox")," last clicked."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"colorBox1.Click += UpdateActiveColorBox;\ncolorBox2.Click += UpdateActiveColorBox;\ncolorBox3.Click += UpdateActiveColorBox;\n\n// ...\n\nprivate void UpdateActiveColorBox(object sender, MouseEventArgs e) {\n    exampleColorPicker.AssociatedColorBox = (ColorBox) sender;\n}\n")),(0,n.kt)("h3",{id:"adding-colors-from-the-api"},"Adding colors from the API"),(0,n.kt)("p",null,"Colors can be retrieved from the Guild Wars 2 Web API:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"var colors = await Gw2ApiManager.Gw2ApiClient.V2.Colors.AllAsync();\n")),(0,n.kt)("p",null,"And added to the picker:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"foreach (var color in colors) {\n    exampleColorPicker.Colors.Add(color);\n}\n")))}u.isMDXComponent=!0}}]);