const __vite__fileDeps=["_astro/signals.module.DIX1jU16.js","_astro/preact.module.vwaTWOFh.js","_astro/hooks.module.DjA5krAQ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as v}from"./preload-helper.BiBI96sQ.js";import{g as n,D as m,E as y}from"./preact.module.vwaTWOFh.js";let p,h=(async()=>{const c=({value:t,name:o,hydrate:e=!0})=>t?n(e?"astro-slot":"astro-static-slot",{name:o,dangerouslySetInnerHTML:{__html:t}}):null;c.shouldComponentUpdate=()=>!1;var u=c;const s=new Map;p=t=>async(o,e,{default:r,...d},{client:_})=>{if(t.hasAttribute("ssr")){for(const[a,l]of Object.entries(d))e[a]=n(u,{value:l,name:a});if(t.dataset.preactSignals){const{signal:a}=await v(()=>import("./signals.module.DIX1jU16.js"),__vite__mapDeps([0,1,2]));let l=JSON.parse(t.dataset.preactSignals);for(const[f,i]of Object.entries(l)){if(!s.has(i)){const g=a(e[f]);s.set(i,g)}e[f]=s.get(i)}}(_!=="only"?y:m)(n(o,e,r!=null?n(u,{value:r}):r),t),t.addEventListener("astro:unmount",()=>m(null,t),{once:!0})}}})();export{h as __tla,p as default};
