"use strict";(self.webpackChunknew_blishhud_com=self.webpackChunknew_blishhud_com||[]).push([[9554,4935,4504,4850],{1262:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(7294),r=a(2389);function n(e){let{children:t,fallback:a}=e;return(0,r.Z)()?l.createElement(l.Fragment,null,t?.()):a??null}},7054:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var l=a(7294);function r(e){let{timestamp:t,classes:a}=e;if("0001-01-01T00:00:00"==t)return l.createElement("p",{className:a},"Unknown");var r=new Date(t);return l.createElement("p",{className:a,"data-hint":r.toLocaleString()},r.toLocaleDateString())}},4271:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var l=a(7294),r=a(412);function n(e){let{module:t}=e;return r.Z.canUseDOM?l.createElement("a",{class:"bhud-module-card",target:"_top",href:`/modules/?module=${t.Namespace}`},l.createElement("div",{class:"bhud-module-hero"},l.createElement("img",{src:`https://pkgs.blishhud.com/metadata/img/module/${t.Namespace}.png`,onError:e=>{e.target.onerror=null,e.target.src="/img/156027x2.png"},alt:"Module image"})),l.createElement("div",{class:"bhud-card-stacked"},l.createElement("div",{class:"bhud-card-content"},l.createElement("div",{class:"bhud-card-title"},l.createElement("a",{href:`/modules?author=${t.AuthorName}`,"data-hint":t.AuthorName,class:"bhud-avatar hint--top"},l.createElement("img",{src:t.AuthorAvatar,onError:e=>{e.target.onerror=null,e.target.src="https://assets.gw2dat.com/733268.png"}})),l.createElement("div",{class:"bhud-module-line"},l.createElement("span",{class:"bhud-card-title hint--top","data-hint":t.Namespace},t.Name))),l.createElement("div",{class:"content",style:{fontWeight:400}},t.Summary)))):l.createElement("label",null,"Wait...")}},849:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var l=a(7294),r=a(412),n=a(7054);a(1262);function s(e){let{namespace:t,module:a}=e;return r.Z.canUseDOM?a.AuthorProfile?(a.ProfileSource=function(e){const t=/<a href="https:\/\/www\.youtube\.com.*\/([^"]*)"[^<]+<\/a>/gm;let a;for(;null!==(a=t.exec(e));)a.index===t.lastIndex&&t.lastIndex++,e=e.replace(a[0],`<iframe width='560' height='315' src='https://www.youtube.com/embed/${a[1]}' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`);return e}(a.ProfileSource),l.createElement("div",{class:"container"},l.createElement("nav",{class:"breadcrumb is-small","aria-label":"breadcrumbs"},l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"/modules"},"Modules")),l.createElement("li",{class:"is-active"},l.createElement("a",{"aria-current":"page"},a.Name)))),l.createElement("section",{class:"hero"},l.createElement("div",{class:"media"},l.createElement("div",{class:"media-left"},l.createElement("figure",{class:""},l.createElement("img",{src:`https://pkgs.blishhud.com/metadata/img/module/${t}.png`,alt:"Module image",width:"128",height:"128",onError:e=>{e.target.onerror=null,e.target.src="/img/156027x2.png"},style:{borderRadius:"6px"}}))),l.createElement("div",{class:"hero-body"},l.createElement("p",{class:"title"},a.Name),l.createElement("p",{class:"subtitle"})))),l.createElement("div",{class:"columns"},l.createElement("section",{class:"column is-two-thirds"},l.createElement("div",{class:"box"},l.createElement("nav",{class:"level"},l.createElement("div",{class:"level-item has-text-centered"},l.createElement("div",null,l.createElement("p",{class:"heading"},"Downloads"),l.createElement("p",{class:"title"},a.Downloads>0?a.Downloads.toLocaleString():"Unknown"))),l.createElement("div",{class:"level-item has-text-centered"},l.createElement("div",null,l.createElement("p",{class:"heading"},"Last Release"),l.createElement(n.default,{classes:"title hint--bottom",timestamp:a.LastRelease}))),l.createElement("div",{class:"level-item has-text-centered"},l.createElement("div",null,l.createElement("p",{class:"heading"},"Latest Version"),l.createElement("p",{class:"title"},a.Version??"Unknown"))))),l.createElement("div",{class:"box external-source",dangerouslySetInnerHTML:{__html:a.ProfileSource?a.ProfileSource:"<center><i>No Description</i></center>"}}),a.Downloads>=500&&l.createElement("div",{class:"card",style:{marginTop:"1em",padding:"0"}},l.createElement("header",{class:"card-header"},l.createElement("p",{class:"card-header-title"},"Module Downloads")),l.createElement("div",{class:"card-content",style:{padding:"0"}},l.createElement("iframe",{width:"100%",height:"470px",scrolling:"no",src:`https://dashboards.blishhud.com/embed/query/21/visualization/32?api_key=WgbLIl20YAQQvaGy8khDWnCQSJ3dRt3loEJ1boip&p_$module_namespaces=${t}&p_RelativeDaysSince=15&hide_parameters=true&hide_header=true&hide_link=true`,style:{overflow:"hidden"}})))),l.createElement("section",{class:"column is-one-third"},l.createElement("div",{class:"card"},l.createElement("header",{class:"card-header"},l.createElement("p",{class:"card-header-title"},"Module Details")),l.createElement("div",{class:"card-content"},l.createElement("table",{style:{width:"100%"}},l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"Name"),l.createElement("td",null,a.Name)),l.createElement("tr",null,l.createElement("td",null,"Downloads"),l.createElement("td",null,a.Downloads>0?a.Downloads.toLocaleString():"Unknown")),l.createElement("tr",null,l.createElement("td",null,"Last Update"),l.createElement("td",null,l.createElement(n.default,{classes:"hint--left",timestamp:a.LastRelease}))),l.createElement("tr",null,l.createElement("td",null,"Release Notes"),l.createElement("td",null,l.createElement("a",{target:"_blank",href:`https://pkgs.blishhud.com/${t}.html`},"View Release Notes")))))),l.createElement("div",{class:"card-content"},l.createElement("center",null,null!=a.IssueUrl&&l.createElement("a",{style:{marginRight:"1em"},class:"button",target:"_blank",href:a.IssueUrl},"Report a Bug"),null!=a.SuggestionsUrl&&l.createElement("a",{class:"button",target:"_blank",href:a.SuggestionsUrl},"Make a Suggestion")))),l.createElement("div",{class:"card",style:{marginTop:"1em"}},l.createElement("header",{class:"card-header"},l.createElement("p",{class:"card-header-title"},"Module Author")),l.createElement("div",{class:"card-content"},l.createElement("div",{class:"media"},l.createElement("div",{class:"media-left"},l.createElement("figure",{class:"image is-48x48 is-rounded"},l.createElement("img",{src:`https://pkgs.blishhud.com/metadata/img/author/${a.AuthorProfile.Id}.png`,class:"is-rounded",alt:"Module Author Image",onError:e=>{e.target.onerror=null,e.target.src="https://assets.gw2dat.com/733268.png"}}))),l.createElement("div",{class:"media-content"},l.createElement("p",{class:"title is-4",style:{lineHeight:"48px"}},a.AuthorProfile.DisplayName))),l.createElement("div",{class:"content"},null!=a.AuthorProfile.GuildWars2Profile&&l.createElement("div",{class:"field has-addons"},l.createElement("span",{class:"control"},l.createElement("a",{class:"button is-static",style:{width:"180px"}},l.createElement("i",{class:"fa fa-dragon"}),"\xa0\xa0Guild Wars 2")),l.createElement("span",{class:"control is-expanded"},l.createElement("a",{target:"_blank",class:"button"},a.AuthorProfile.GuildWars2Profile))),null!=a.AuthorProfile.GithubProfile&&l.createElement("div",{class:"field has-addons"},l.createElement("span",{class:"control"},l.createElement("a",{class:"button is-static",style:{width:"180px"}},l.createElement("i",{class:"fab fa-github"}),"\xa0\xa0GitHub Profile")),l.createElement("span",{class:"control is-expanded"},l.createElement("a",{target:"_blank",href:`https://github.com/${a.AuthorProfile.GithubProfile}`,class:"button"},a.AuthorProfile.GithubProfile))),null!=a.AuthorProfile.KofiProfile&&l.createElement("div",{class:"field has-addons"},l.createElement("span",{class:"control"},l.createElement("a",{class:"button is-static",style:{width:"180px"}},l.createElement("i",{class:"fa fa-heart"}),"\xa0\xa0Donate on Ko-Fi")),l.createElement("span",{class:"control is-expanded"},l.createElement("a",{target:"_blank",href:`https://ko-fi.com/${a.AuthorProfile.KofiProfile}`,class:"button"},a.AuthorProfile.KofiProfile))),null!=a.AuthorProfile.KofiProfile&&l.createElement("div",{class:"field has-addons"},l.createElement("iframe",{id:"kofiframe",src:`https://ko-fi.com/${a.AuthorProfile.KofiProfile}/?hidefeed=true&widget=true&embed=true&preview=true`,style:{border:"none",width:"100%",padding:"4px",background:"#f9f9f9",borderRadius:"4px"},height:"660",title:`${a.AuthorProfile.KofiProfile}`}))))))))):l.createElement("label",null,"Loading..."):l.createElement("label",null,"Wait...")}},1654:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var l=a(7294),r=a(7961),n=a(4271),s=a(849),c=a(2263),o=a(5742),i=a(1262),m=a(412);a(971);function d(e,t){let[a,s]=t;const m=(0,c.Z)(),{siteConfig:d={}}=m;return m.updateSortOrder=e=>s(e.target.value),m.doSort=function(e){switch(a){case"Downloads":return e.sort(((e,t)=>t.Downloads-e.Downloads));case"A to Z":return e.sort(((e,t)=>e.Name.localeCompare(t.Name)));case"Z to A":return e.sort(((e,t)=>t.Name.localeCompare(e.Name)));case"Last Update":return e.sort(((e,t)=>new Date(t.LastUpdate)-new Date(e.LastUpdate)));default:return e}},l.createElement(r.Z,{title:"Modules",description:`${d.tagline}`},l.createElement(o.Z,null,l.createElement("meta",{name:"keywords",content:"Guild Wars 2, gw2, Blish, HUD, bhud, TacO, Overlay"})),l.createElement("div",{className:"module-content"},l.createElement("div",{className:"field has-addons"},l.createElement("p",{className:"control"},l.createElement("a",{className:"button is-static"},"Sort")),l.createElement("div",{className:"select is-right"},l.createElement("select",{id:"sortOrder",value:m.sortMethod,onChange:m.updateSortOrder},l.createElement("option",null,"Downloads"),l.createElement("option",null,"A to Z"),l.createElement("option",null,"Z to A"),l.createElement("option",null,"Last Update")))),l.createElement("div",{className:"module-cards"},l.createElement(i.Z,null,(()=>e&&m.doSort(e).map((e=>l.createElement(n.default,{key:e.Namespace,module:e}))))))))}function u(){return l.createElement(r.Z,null)}const h=function(){if(!m.Z.canUseDOM)return u();const[e,t]=(0,l.useState)(null),[a,n]=(0,l.useState)(!1),[h,E]=(0,l.useState)(null),[p,f]=(0,l.useState)(null),[g,b]=(0,l.useState)("Downloads");var v=new URLSearchParams(window.location.search),w=v.get("module"),k=v.get("author");if((0,l.useEffect)((()=>{null==w?fetch("https://pkgs.blishhud.com/metadata/all.json").then((e=>e.json())).then((e=>{n(!0),E(e)}),(e=>{n(!0),t(e)})):fetch(`https://pkgs.blishhud.com/metadata/${w}.json`).then((e=>e.json())).then((e=>{n(!0),f(e)}),(e=>{n(!0),t(e)}))}),[a]),e)return l.createElement("label",null,"Error loading: ",e);if(!a)return u();if(null==w){if(null!=h)return d(null==k?h:h.filter((function(e){return!e.AuthorName.localeCompare(k,void 0,{sensitivity:"base"})})),[g,b]);n(!1)}else{if(null!=p)return function(e,t){const a=(0,c.Z)(),{siteConfig:n={}}=a;return l.createElement(r.Z,{title:`${t.Name} Module`,description:`${t.Summary}`},l.createElement(i.Z,null,(()=>l.createElement(o.Z,null,l.createElement("meta",{name:"keywords",content:`${e}, ${t.Name}, Module, Guild Wars 2, gw2, Blish, HUD, bhud, TacO, Overlay`}),l.createElement("meta",{name:"og:image",content:`https://pkgs.blishhud.com/metadata/img/module/${e}.png`})))),l.createElement(i.Z,null,(()=>l.createElement("div",{className:"module-content"},l.createElement(s.default,{namespace:e,module:t})))))}(w,p);n(!1)}}}}]);