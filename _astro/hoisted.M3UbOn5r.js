var Ce=Object.defineProperty;var Me=(w,g,E)=>g in w?Ce(w,g,{enumerable:!0,configurable:!0,writable:!0,value:E}):w[g]=E;var m=(w,g,E)=>(Me(w,typeof g!="symbol"?g+"":g,E),E);import"./Tabs.astro_astro_type_script_index_0_lang.BqK4QFew.js";import{i as Ne}from"./index.CTbVEFV3.js";import{_ as je}from"./preload-helper.BiBI96sQ.js";let qe=(async()=>{window.dataLayer=window.dataLayer||[];function w(){dataLayer.push(arguments)}w("js",new Date),w("config","G-0YDFJ7LX7F"),function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?e3a5cec56ef8619cf9d7c2abebd509e3";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),function(e,t,n,o,r){e[o]=e[o]||[];var s=t.getElementsByTagName(n)[0],c=t.createElement(n);c.async=!0,c.id="beacon-aplus",c.setAttribute("exparams","userid=&aplus&sidx=aplusSidex&ckx=aplusCkx"),c.src="//g.alicdn.com/alilog/mlog/aplus_v2.js",c.crossorigin="anonymous",s.parentNode.insertBefore(c,s)}(window,document,"script","aplus_queue"),function(e){var t=e.createElement("script");t.type="text/javascript",t.async=!0,t.src="//g.alicdn.com/aes/??tracker/3.3.4/index.js,tracker-plugin-pv/3.0.5/index.js,tracker-plugin-event/3.0.0/index.js,tracker-plugin-autolog/3.0.3/index.js,tracker-plugin-survey/3.0.3/index.js,tracker-plugin-jserror/3.0.3/index.js,tracker-plugin-resourceError/3.0.3/index.js,tracker-plugin-api/3.0.3/index.js",t.onload=function(){window.location.hostname==="nacos.io"&&(window.AES_CONFIG=window.AES_CONFIG||{env:"prod"},window.aes=new AES({pid:"e7WQkK",user_type:6}),window.AESPluginAutologConfig={exposure:"auto"},window.AEMPluginInstances=[aes.use(AESPluginPV,window.AESPluginPVConfig||{enableHistory:!0}),aes.use(AESPluginEvent,window.AESPluginEventConfig||{}),aes.use(AESPluginSurvey,window.AESPluginEventConfig||{}),aes.use(AESPluginAutolog,window.AESPluginAutologConfig||{}),aes.use(AESPluginJSError,window.AESPluginJSError||{}),aes.use(AESPluginResourceError,window.AESPluginResourceError||{}),aes.use(AESPluginAPI,window.AESPluginAPI||{})])},setTimeout(function(){e.getElementsByTagName("body")[0].appendChild(t)},800)}(document);class g extends HTMLElement{constructor(){super();m(this,"ifscroll");m(this,"handleScroll",()=>{window.innerWidth<=800||(window.scrollY>=100&&!this.ifscroll&&(this.ifscroll=!0,this.classList.add("bg-gray-14/[0.84]")),window.scrollY<=100&&this.ifscroll&&(this.ifscroll=!1,this.classList.remove("bg-gray-14/[0.84]")))});this.ifscroll=!1,window.addEventListener("scroll",this.handleScroll)}}customElements.define("my-layout",g);function E(){const e=document.createElement("script");e.type="text/javascript",e.src="https://g.alicdn.com/cm-design/copilot-booter/0.0.26/copilot-booter.js",e.addEventListener("load",function(){window.CNPilot&&window.CNPilot.mounted({CNPilot_OPEN_SOURCE:["nacos.io"],CNPilot_OPEN_SOURCE_API:"https://ai.nacos.io",showFloatICON:!0,globalStyle:{top:"64px"},entryIconProps:{"position-type":"updown","icon-hover-text":"\u4E13\u5BB6\u7B54\u7591","icon-style":{color:"red",background:"white",border:"2px solid red",borderRadius:"20px"}},headerProps:{closeIcon:{show:!0},titleText:"AI\u7B54\u7591\u4E13\u5BB6"}})}),document.body.append(e)}E(),document.addEventListener("astro:page-load",function(){window.CNPilot&&window.CNPilot.unmounted(),E()});let k=document.createElement("script");k.src="https://g.alicdn.com/cm-design/mw-vendor/1.6.12/web-animations-next.min.js?spm=defwork.home.0.0.413a5c4bEOqptl&file=web-animations-next.min.js",k.onload=function(){document.getAnimations||(document.getAnimations=window.Element.prototype.getAnimations)},document.head.appendChild(k);const b="data-astro-transition-persist";function Q(e){for(const t of document.scripts)for(const n of e.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!t.src&&t.textContent===n.textContent||t.src&&t.type===n.type&&t.src===n.src)){n.dataset.astroExec="";break}}function z(e){const t=document.documentElement,n=[...t.attributes].filter(({name:o})=>(t.removeAttribute(o),o.startsWith("data-astro-")));[...e.documentElement.attributes,...n].forEach(({name:o,value:r})=>t.setAttribute(o,r))}function Z(e){for(const t of Array.from(document.head.children)){const n=ne(t,e);n?n.remove():t.remove()}document.head.append(...e.head.children)}function ee(e,t){t.replaceWith(e);for(const n of t.querySelectorAll(`[${b}]`)){const o=n.getAttribute(b),r=e.querySelector(`[${b}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&oe(n)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const te=()=>{const e=document.activeElement;if(e!=null&&e.closest(`[${b}]`)){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const t=e.selectionStart,n=e.selectionEnd;return()=>D({activeElement:e,start:t,end:n})}return()=>D({activeElement:e})}else return()=>D({activeElement:null})},D=({activeElement:e,start:t,end:n})=>{e&&(e.focus(),(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(typeof t=="number"&&(e.selectionStart=t),typeof n=="number"&&(e.selectionEnd=n)))},ne=(e,t)=>{const n=e.getAttribute(b),o=n&&t.head.querySelector(`[${b}="${n}"]`);if(o)return o;if(e.matches("link[rel=stylesheet]")){const r=e.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},oe=e=>{const t=e.dataset.astroTransitionPersistProps;return t==null||t==="false"},re=e=>{Q(e),z(e),Z(e);const t=te();ee(e.body,document.body),t()},ie="astro:before-preparation",se="astro:after-preparation",ae="astro:before-swap",ce="astro:after-swap",le=e=>document.dispatchEvent(new Event(e));class R extends Event{constructor(n,o,r,s,c,a,d,f,l,i){super(n,o);m(this,"from");m(this,"to");m(this,"direction");m(this,"navigationType");m(this,"sourceElement");m(this,"info");m(this,"newDocument");m(this,"signal");this.from=r,this.to=s,this.direction=c,this.navigationType=a,this.sourceElement=d,this.info=f,this.newDocument=l,this.signal=i,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class de extends R{constructor(n,o,r,s,c,a,d,f,l,i){super(ie,{cancelable:!0},n,o,r,s,c,a,d,f);m(this,"formData");m(this,"loader");this.formData=l,this.loader=i.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class ue extends R{constructor(n,o){super(ae,void 0,n.from,n.to,n.direction,n.navigationType,n.sourceElement,n.info,n.newDocument,n.signal);m(this,"direction");m(this,"viewTransition");m(this,"swap");this.direction=n.direction,this.viewTransition=o,this.swap=()=>re(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function me(e,t,n,o,r,s,c,a,d){const f=new de(e,t,n,o,r,s,window.document,c,a,d);return document.dispatchEvent(f)&&(await f.loader(),f.defaultPrevented||(le(se),f.navigationType!=="traverse"&&C({scrollX,scrollY}))),f}function fe(e,t){const n=new ue(e,t);return document.dispatchEvent(n),n.swap(),n}const pe=history.pushState.bind(history),x=history.replaceState.bind(history),C=e=>{history.state&&(history.scrollRestoration="manual",x({...history.state,...e},""))},M=!!document.startViewTransition,N=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),H=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let p,y,T;const O=e=>document.dispatchEvent(new Event(e)),_=()=>O("astro:page-load"),he=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{var n;let t=document.title||((n=document.querySelector("h1"))==null?void 0:n.textContent)||location.pathname;e.textContent=t},60)},I="data-astro-transition-persist",Y="data-astro-transition",j="data-astro-transition-fallback";let P,A=0;history.state?(A=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):N()&&(x({index:A,scrollX,scrollY},""),history.scrollRestoration="manual");async function ge(e,t){var n;try{const o=await fetch(e,t),r=((n=o.headers.get("content-type"))!=null?n:"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await o.text(),redirected:o.redirected?o.url:void 0,mediaType:r}}catch{return null}}function X(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function we(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const s=new Promise(c=>{o.onload=o.onerror=c});e=e.then(()=>s)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const U=(e,t,n,o,r)=>{const s=H(t,e),c=document.title;document.title=o;let a=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const d=history.state;x({...n.state,index:d.index,scrollX:d.scrollX,scrollY:d.scrollY},"",e.href)}else pe({...n.state,index:++A,scrollX:0,scrollY:0},"",e.href);if(document.title=c,T=e,s||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const d=history.state;location.href=e.href,history.state||(x(d,""),s&&window.dispatchEvent(new PopStateEvent("popstate")))}else a||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function Ee(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${I}="${n.getAttribute(I)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(s=>o.addEventListener(s,r)),document.head.append(o)}))}return t}async function F(e,t,n,o,r){async function s(d){function f(u){const h=u.effect;return!h||!(h instanceof KeyframeEffect)||!h.target?!1:window.getComputedStyle(h.target,h.pseudoElement).animationIterationCount==="infinite"}const l=document.getAnimations();document.documentElement.setAttribute(j,d);const i=document.getAnimations().filter(u=>!l.includes(u)&&!f(u));return Promise.allSettled(i.map(u=>u.finished))}if(r==="animate"&&!n.transitionSkipped&&!e.signal.aborted)try{await s("old")}catch{}const c=document.title,a=fe(e,n.viewTransition);U(a.to,a.from,t,c,o),O(ce),r==="animate"&&(!n.transitionSkipped&&!a.signal.aborted?s("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function ye(){return p==null||p.controller.abort(),p={controller:new AbortController}}async function $(e,t,n,o,r){const s=ye();if(!N()||location.origin!==n.origin){s===p&&(p=void 0),location.href=n.href;return}const c=r?"traverse":o.history==="replace"?"replace":"push";if(c!=="traverse"&&C({scrollX,scrollY}),H(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){U(n,t,o,document.title,r),s===p&&(p=void 0);return}const a=await me(t,n,e,c,o.sourceElement,o.info,s.controller.signal,o.formData,d);if(a.defaultPrevented||a.signal.aborted){s===p&&(p=void 0),a.signal.aborted||(location.href=n.href);return}async function d(i){var G,J;const u=i.to.href,h={signal:i.signal};if(i.formData){h.method="POST";const S=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:(G=i.sourceElement)==null?void 0:G.closest("form");h.body=((J=S==null?void 0:S.attributes.getNamedItem("enctype"))==null?void 0:J.value)==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const v=await ge(u,h);if(v===null){i.preventDefault();return}if(v.redirected&&(i.to=new URL(v.redirected)),P!=null||(P=new DOMParser),i.newDocument=P.parseFromString(v.html,v.mediaType),i.newDocument.querySelectorAll("noscript").forEach(S=>S.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const L=Ee(i.newDocument);L.length&&!i.signal.aborted&&await Promise.all(L)}async function f(){if(y&&y.viewTransition){try{y.viewTransition.skipTransition()}catch{}try{await y.viewTransition.updateCallbackDone}catch{}}return y={transitionSkipped:!1}}const l=await f();if(a.signal.aborted){s===p&&(p=void 0);return}if(document.documentElement.setAttribute(Y,a.direction),M)l.viewTransition=document.startViewTransition(async()=>await F(a,o,l,r));else{const i=(async()=>{await Promise.resolve(),await F(a,o,l,r,X())})();l.viewTransition={updateCallbackDone:i,ready:i,finished:new Promise(u=>l.viewTransitionFinished=u),skipTransition:()=>{l.transitionSkipped=!0,document.documentElement.removeAttribute(j)}}}l.viewTransition.updateCallbackDone.finally(async()=>{await we(),_(),he()}),l.viewTransition.finished.finally(()=>{l.viewTransition=void 0,l===y&&(y=void 0),s===p&&(p=void 0),document.documentElement.removeAttribute(Y),document.documentElement.removeAttribute(j)});try{await l.viewTransition.updateCallbackDone}catch(i){const u=i;console.log("[astro]",u.name,u.message,u.stack)}}async function V(e,t){await $("forward",T,new URL(e,location.href),t!=null?t:{})}function ve(e){if(!N()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>A?"forward":"back";A=n,$(o,T,new URL(location.href),{},t)}const B=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&C({scrollX,scrollY})};{if(M||X()!=="none")if(T=new URL(location.href),addEventListener("popstate",ve),addEventListener("load",_),"onscrollend"in window)addEventListener("scrollend",B);else{let e,t,n,o;const r=()=>{var s;if(o!==((s=history.state)==null?void 0:s.index)){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,B();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(o=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(r,50))},{passive:!0})}for(const e of document.scripts)e.dataset.astroExec=""}function be(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function K(e){return e.dataset.astroReload!==void 0}(M||be()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;K(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),V(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{var l,i,u,h;let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||K(t))return;const n=t,o=e.submitter,r=new FormData(n,o),s=typeof n.action=="string"?n.action:n.getAttribute("action"),c=typeof n.method=="string"?n.method:n.getAttribute("method");let a=(i=(l=o==null?void 0:o.getAttribute("formaction"))!=null?l:s)!=null?i:location.pathname;const d=(h=(u=o==null?void 0:o.getAttribute("formmethod"))!=null?u:c)!=null?h:"get";if(d==="dialog"||location.origin!==new URL(a,location.href).origin)return;const f={sourceElement:o!=null?o:n};if(d==="get"){const v=new URLSearchParams(r),L=new URL(a);L.search=v.toString(),a=L.toString()}else f.formData=r;e.preventDefault(),V(a,f)}),Ne({prefetchAll:!0})),[{type:"all",title:"\u5168\u90E8\u6587\u7AE0",href:"/blog"},{type:"article",title:"\u6280\u672F\u6587\u7AE0",href:"/blog/article"},{type:"ecosystem",title:"\u751F\u6001\u6587\u7AE0",href:"/blog/ecosystem"},{type:"case",title:"\u6700\u4F73\u5B9E\u8DF5",href:"/blog/case"}].map(e=>({...e,href:"/en"+e.href}));const Ae={appId:"1QV814950M",apiKey:"7445da3dec050d45d29f3fe93ed45af3",indexName:"nacos"};let q="";class Le extends HTMLElement{constructor(){super(),setTimeout(()=>{q&&q!==window.location.href&&this.initDocSearch(),q=window.location.href},0),window.addEventListener("DOMContentLoaded",this.initDocSearch)}async initDocSearch(){const{default:t}=await je(()=>import("./index.qv16JarW.js"),[]),n={...Ae,container:"sl-doc-search"};try{const o=JSON.parse(this.dataset.translations||"{}");Object.assign(n,o)}catch{}t(n)}}customElements.define("sl-doc-search",Le);function Se(e){e.parentNode.style.display="none",window.alertBarClosed=!0}function W(){try{const e=document.querySelector(".alert-bar"),t=document.querySelector(".close-button");(window.alertBarClosed||!1)===!0?e.style.display="none":t.addEventListener("click",function(){Se(t)})}catch(e){console.log(e)}}window.addEventListener("DOMContentLoaded",W),document.addEventListener("astro:after-swap",W);let xe=class extends HTMLElement{constructor(){super();m(this,"toggleLanguage",()=>{var t;/^(\/en).+/.test((t=window==null?void 0:window.location)==null?void 0:t.pathname)?window.location.pathname=window.location.pathname.replace("/en/","/"):window.location.pathname=window.location.pathname.replace("/","/en/")});const t=document.querySelectorAll("input[data-switch]")[0],n=document.querySelectorAll("div[data-switch]")[0];t.addEventListener("click",()=>{this.toggleLanguage()}),n.addEventListener("click",()=>{this.toggleLanguage()})}};customElements.define("toggle-content",xe);class Te extends HTMLElement{constructor(){super();const t=this.querySelector("button");t.addEventListener("click",()=>this.toggleExpanded());const n=this.closest("nav");n&&n.addEventListener("keyup",o=>this.closeOnEscape(o,t))}setExpanded(t){this.setAttribute("aria-expanded",String(t)),document.body.toggleAttribute("data-mobile-menu-expanded",t)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(t,n){t.code==="Escape"&&(this.setExpanded(!1),n.focus())}}customElements.define("mobile-menu-button",Te);class Pe extends HTMLElement{constructor(){super();const t=this.getAttribute("data-trigger"),n=this.querySelector(".toggle-dropdown"),o=this.querySelector("svg[data-updown]");o&&(t==="click"?this.addEventListener("click",()=>{n&&n.classList.toggle("toggle-dropdown-active"),document.body.classList.toggle("overflow-hidden"),Array.from(o.classList).includes("toggle-trigger-up")?this.toggleDown(o):this.toggleUp(o)}):t==="hover"&&(this.addEventListener("mouseenter",()=>{n&&n.classList.add("toggle-dropdown-active"),this.toggleUp(o)}),this.addEventListener("mouseleave",()=>{n&&n.classList.remove("toggle-dropdown-active"),this.toggleDown(o)})))}toggleUp(t){t.classList.remove("toggle-trigger-down"),t.classList.add("toggle-trigger-up")}toggleDown(t){t.classList.remove("toggle-trigger-up"),t.classList.add("toggle-trigger-down")}}customElements.define("toggle-component",Pe);class ke extends HTMLElement{constructor(){super()}}customElements.define("docs-menu",ke);class De extends HTMLElement{constructor(){super();const t=this.parentElement;this.querySelector(".dropdown-overlay").addEventListener("mouseenter",()=>{t.classList.remove("toggle-dropdown-active"),t.classList.add("toggle-dropdown-notactive")})}}customElements.define("community-menu",De)})();export{qe as __tla};
