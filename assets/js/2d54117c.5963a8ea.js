"use strict";(self.webpackChunknew_blishhud_com=self.webpackChunknew_blishhud_com||[]).push([[4935,4504],{1262:(e,t,l)=>{l.d(t,{Z:()=>s});var a=l(7294),r=l(2389);function s(e){let{children:t,fallback:l}=e;return(0,r.Z)()?a.createElement(a.Fragment,null,t?.()):l??null}},7054:(e,t,l)=>{l.r(t),l.d(t,{default:()=>r});var a=l(7294);function r(e){let{timestamp:t,classes:l}=e;var r=new Date(t);return a.createElement("p",{className:l,"data-hint":r.toLocaleString()},r.toLocaleDateString())}},849:(e,t,l)=>{l.r(t),l.d(t,{default:()=>n});var a=l(7294),r=l(412),s=l(7054);l(1262);function n(e){let{namespace:t,module:l}=e;return r.Z.canUseDOM?l.AuthorProfile?(l.ProfileSource=function(e){const t=/<a href="https:\/\/www\.youtube\.com.*\/([^"]*)"[^<]+<\/a>/gm;let l;for(;null!==(l=t.exec(e));)l.index===t.lastIndex&&t.lastIndex++,e=e.replace(l[0],`<iframe width='560' height='315' src='https://www.youtube.com/embed/${l[1]}' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`);return e}(l.ProfileSource),a.createElement("div",{class:"container"},a.createElement("nav",{class:"breadcrumb is-small","aria-label":"breadcrumbs"},a.createElement("ul",null,a.createElement("li",null,a.createElement("a",{href:"/modules"},"Modules")),a.createElement("li",{class:"is-active"},a.createElement("a",{"aria-current":"page"},l.Name)))),a.createElement("section",{class:"hero"},a.createElement("div",{class:"media"},a.createElement("div",{class:"media-left"},a.createElement("figure",{class:""},a.createElement("img",{src:`https://pkgs.blishhud.com/metadata/img/module/${t}.png`,alt:"Module image",width:"128",height:"128",onError:e=>{e.target.onerror=null,e.target.src="/img/156027x2.png"},style:{borderRadius:"6px"}}))),a.createElement("div",{class:"hero-body"},a.createElement("p",{class:"title"},l.Name),a.createElement("p",{class:"subtitle"})))),a.createElement("div",{class:"columns"},a.createElement("section",{class:"column is-two-thirds"},a.createElement("div",{class:"box"},a.createElement("nav",{class:"level"},a.createElement("div",{class:"level-item has-text-centered"},a.createElement("div",null,a.createElement("p",{class:"heading"},"Downloads"),a.createElement("p",{class:"title"},l.Downloads.toLocaleString()))),a.createElement("div",{class:"level-item has-text-centered"},a.createElement("div",null,a.createElement("p",{class:"heading"},"Last Release"),a.createElement(s.default,{classes:"title hint--bottom",timestamp:l.LastRelease}))),a.createElement("div",{class:"level-item has-text-centered"},a.createElement("div",null,a.createElement("p",{class:"heading"},"Latest Version"),a.createElement("p",{class:"title"},l.Version))))),a.createElement("div",{class:"box external-source",dangerouslySetInnerHTML:{__html:l.ProfileSource?l.ProfileSource:"<center><i>No Description</i></center>"}}),l.Downloads>=500&&a.createElement("div",{class:"card",style:{marginTop:"1em",padding:"0"}},a.createElement("header",{class:"card-header"},a.createElement("p",{class:"card-header-title"},"Module Downloads")),a.createElement("div",{class:"card-content",style:{padding:"0"}},a.createElement("iframe",{width:"100%",height:"470px",scrolling:"no",src:`https://dashboards.blishhud.com/embed/query/21/visualization/32?api_key=WgbLIl20YAQQvaGy8khDWnCQSJ3dRt3loEJ1boip&p_$module_namespaces=${t}&p_RelativeDaysSince=15&hide_parameters=true&hide_header=true&hide_link=true`,style:{overflow:"hidden"}})))),a.createElement("section",{class:"column is-one-third"},a.createElement("div",{class:"card"},a.createElement("header",{class:"card-header"},a.createElement("p",{class:"card-header-title"},"Module Details")),a.createElement("div",{class:"card-content"},a.createElement("table",{style:{width:"100%"}},a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,"Name"),a.createElement("td",null,l.Name)),a.createElement("tr",null,a.createElement("td",null,"Downloads"),a.createElement("td",null,l.Downloads.toLocaleString())),a.createElement("tr",null,a.createElement("td",null,"Last Update"),a.createElement("td",null,a.createElement(s.default,{classes:"hint--left",timestamp:l.LastRelease}))),a.createElement("tr",null,a.createElement("td",null,"Release Notes"),a.createElement("td",null,a.createElement("a",{target:"_blank",href:`https://pkgs.blishhud.com/${t}.html`},"View Release Notes")))))),a.createElement("div",{class:"card-content"},a.createElement("center",null,null!=l.IssueUrl&&a.createElement("a",{style:{marginRight:"1em"},class:"button",target:"_blank",href:l.IssueUrl},"Report a Bug"),null!=l.SuggestionsUrl&&a.createElement("a",{class:"button",target:"_blank",href:l.SuggestionsUrl},"Make a Suggestion")))),a.createElement("div",{class:"card",style:{marginTop:"1em"}},a.createElement("header",{class:"card-header"},a.createElement("p",{class:"card-header-title"},"Module Author")),a.createElement("div",{class:"card-content"},a.createElement("div",{class:"media"},a.createElement("div",{class:"media-left"},a.createElement("figure",{class:"image is-48x48 is-rounded"},a.createElement("img",{src:`https://pkgs.blishhud.com/metadata/img/author/${l.AuthorProfile.Id}.png`,class:"is-rounded",alt:"Module Author Image",onError:e=>{e.target.onerror=null,e.target.src="https://assets.gw2dat.com/733268.png"}}))),a.createElement("div",{class:"media-content"},a.createElement("p",{class:"title is-4",style:{lineHeight:"48px"}},l.AuthorProfile.DisplayName))),a.createElement("div",{class:"content"},null!=l.AuthorProfile.GuildWars2Profile&&a.createElement("div",{class:"field has-addons"},a.createElement("span",{class:"control"},a.createElement("a",{class:"button is-static",style:{width:"180px"}},a.createElement("i",{class:"fa fa-dragon"}),"\xa0\xa0Guild Wars 2")),a.createElement("span",{class:"control is-expanded"},a.createElement("a",{target:"_blank",class:"button"},l.AuthorProfile.GuildWars2Profile))),null!=l.AuthorProfile.GithubProfile&&a.createElement("div",{class:"field has-addons"},a.createElement("span",{class:"control"},a.createElement("a",{class:"button is-static",style:{width:"180px"}},a.createElement("i",{class:"fab fa-github"}),"\xa0\xa0GitHub Profile")),a.createElement("span",{class:"control is-expanded"},a.createElement("a",{target:"_blank",href:`https://github.com/${l.AuthorProfile.GithubProfile}`,class:"button"},l.AuthorProfile.GithubProfile))),null!=l.AuthorProfile.KofiProfile&&a.createElement("div",{class:"field has-addons"},a.createElement("span",{class:"control"},a.createElement("a",{class:"button is-static",style:{width:"180px"}},a.createElement("i",{class:"fa fa-heart"}),"\xa0\xa0Donate on Ko-Fi")),a.createElement("span",{class:"control is-expanded"},a.createElement("a",{target:"_blank",href:`https://ko-fi.com/${l.AuthorProfile.KofiProfile}`,class:"button"},l.AuthorProfile.KofiProfile))),null!=l.AuthorProfile.KofiProfile&&a.createElement("div",{class:"field has-addons"},a.createElement("iframe",{id:"kofiframe",src:`https://ko-fi.com/${l.AuthorProfile.KofiProfile}/?hidefeed=true&widget=true&embed=true&preview=true`,style:{border:"none",width:"100%",padding:"4px",background:"#f9f9f9",borderRadius:"4px"},height:"660",title:`${l.AuthorProfile.KofiProfile}`}))))))))):a.createElement("label",null,"Loading..."):a.createElement("label",null,"Wait...")}}}]);