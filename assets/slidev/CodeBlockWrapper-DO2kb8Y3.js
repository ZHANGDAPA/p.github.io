import{E as H,F as B}from"../modules/unplugin-icons-DZotwfbM.js";import{d as E,t as L,aA as I,C as _,ac as N,y,aB as q,o as c,b as v,f as V,A as u,c as C,g as $,i as z,h as D}from"../modules/vue-uvdIgQm2.js";import{c as k,ab as M,ag as R,ah as U,_ as W}from"../index-etgzCgYH.js";import{u as F}from"./context-BEeGzwOE.js";const K=["title"],j=E({__name:"CodeBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},lines:{type:Boolean,default:k.lineNumbers},at:{type:[String,Number],default:"+1"},maxHeight:{type:String,default:void 0}},setup(b){const e=b,{$clicksContext:a}=F(),s=L(),d=M();I(()=>{a.unregister(d)}),_(()=>{var t;(t=s.value)==null||t.classList.toggle("slidev-code-line-numbers",e.lines)}),N(()=>{var i;if(!a||!((i=e.ranges)!=null&&i.length))return;const t=a.calculateSince(e.at,e.ranges.length-1);a.register(d,t);const o=y(()=>Math.max(0,a.current-t.start+1)),n=y(()=>e.finally==="last"?e.ranges.at(-1):e.finally.toString());_(()=>{if(!s.value)return;let r=e.ranges[o.value]??n.value;const g=r==="hide";s.value.classList.toggle(R,g),g&&(r=e.ranges[o.value+1]??n.value);const h=s.value.querySelector(".shiki"),m=Array.from(h.querySelectorAll("code > .line")),A=m.length;if(U(r,A,e.startLine,l=>[m[l]]),e.maxHeight){const l=Array.from(h.querySelectorAll(".line.highlighted"));l.reduce((f,w)=>w.offsetHeight+f,0)>s.value.offsetHeight?l[0].scrollIntoView({behavior:"smooth",block:"start"}):l.length>0&&l[Math.round((l.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}})});const{copied:p,copy:S}=q();function x(){var o,n;const t=(n=(o=s.value)==null?void 0:o.querySelector(".slidev-code"))==null?void 0:n.textContent;t&&S(t)}return(t,o)=>{const n=H,i=B;return c(),v("div",{ref_key:"el",ref:s,class:z(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":e.lines}]),style:D({"max-height":e.maxHeight,"overflow-y":e.maxHeight?"scroll":void 0,"--start":e.startLine})},[V(t.$slots,"default"),u(k).codeCopy?(c(),v("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:u(p)?"Copied":"Copy",onClick:o[0]||(o[0]=r=>x())},[u(p)?(c(),C(n,{key:0,class:"p-2 w-8 h-8"})):(c(),C(i,{key:1,class:"p-2 w-8 h-8"}))],8,K)):$("v-if",!0)],6)}}}),T=W(j,[["__file","C:/Users/zhw/AppData/Roaming/npm/node_modules/@slidev/cli/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]);export{T as _};
