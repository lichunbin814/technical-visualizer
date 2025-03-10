"use strict";(self.webpackChunkbrowser_render_visualizer=self.webpackChunkbrowser_render_visualizer||[]).push([[59],{44:(e,t,r)=>{r.d(t,{GY:()=>a,Gu:()=>o,dN:()=>i});const i=[[{id:"html",label:"html"}],[{id:"body",label:"body"}],[{id:"header",label:"header"},{id:"main",label:"main"}],[{id:"h1",label:"h1"},{id:"p",label:"p"}],[{id:"script",label:"script",hidden:!0}]],a=[{from:"html",to:["body"]},{from:"body",to:["header","main"]},{from:"header",to:["h1"]},{from:"main",to:["p"]}],o={node:{background:"#eff6ff",border:"#bfdbfe",color:"#1d4ed8"}}},59:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});r(43);var i=r(694),a=r(464),o=r(97),n=r(44),d=r(579);const l=a.Ay.div`
  display: grid;
  grid-template-areas:
    "header header"
    "trees-container trees-container"
    "merge merge"
    "render-tree render-tree";
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  padding: 2rem;
`,s=(0,a.Ay)(i.P.div)`
  grid-area: trees-container;
  display: grid;
  grid-template-areas:
    "container-header container-header"
    "dom-tree cssom-tree";
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  position: relative;
  border: 2px dashed #94a3b8;
  border-radius: 1rem;
  padding: 1.5rem;
  background-color: rgba(241, 245, 249, 0.3);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`,c=a.Ay.h3`
  grid-area: container-header;
  font-weight: 600;
  color: #475569;
  margin: 0 0 1rem 0;
  text-align: center;
`,h=(0,a.Ay)(i.P.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 2;
`,p=(0,a.Ay)(i.P.div)`
  position: absolute;
  width: 2px;
  height: 60px;
  background: linear-gradient(to bottom, #94a3b8, #4f46e5);
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 10px solid #4f46e5;
  }
`,m=(0,a.Ay)(i.P.div)`
  position: absolute;
  padding: 0.5rem 1rem;
  background-color: #f8fafc;
  border-radius: 0.5rem;
  border: 1px solid #cbd5e1;
  color: #334155;
  font-size: 0.875rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  z-index: 3;
  left: 50%;
  top: 91%;
  transform: translate(-50%, -50%);
`,f=e=>{let{isVisible:t}=e;const r={start:.3},i={start:.5},a={start:1.2,duration:.5},f={start:1.8};return(0,d.jsxs)(l,{children:[(0,d.jsxs)(s,{initial:{opacity:0,scale:.95},animate:t?{opacity:1,scale:1}:{opacity:0,scale:.95},transition:{delay:i.start,duration:.4},children:[(0,d.jsx)(c,{children:"Browser's Internal Representation"}),(0,d.jsxs)(h,{initial:{opacity:0},animate:t?{opacity:1}:{opacity:0},transition:{delay:a.start,duration:.3},children:[(0,d.jsx)(p,{initial:{height:0},animate:t?{height:60}:{height:0},transition:{delay:a.start,duration:a.duration}}),(0,d.jsx)(m,{initial:{opacity:0},animate:t?{opacity:1}:{opacity:0},transition:{delay:a.start+.2,duration:.3},children:"Construction Process"})]}),(0,d.jsx)(o.A,{title:"DOM Tree",treeData:n.dN,connections:n.GY,isVisible:t,timeline:{start:r.start},titleColor:"#1e40af",sectionGridArea:"dom-tree",theme:n.Gu}),(0,d.jsx)(o.A,{title:"CSSOM Tree",treeData:[[{id:"styles",label:"styles"}],[{id:"header-style",label:"header"},{id:"main-style",label:"main"},{id:"h1-style",label:"h1"},{id:"p-style",label:"p"}]],connections:[{from:"styles",to:["header-style","main-style","h1-style","p-style"]}],isVisible:t,timeline:{start:r.start},titleColor:"#6b21a8",sectionGridArea:"cssom-tree",theme:{node:{background:"#f5f3ff",border:"#e9d5ff",color:"#7e22ce"}}})]}),(0,d.jsx)(o.A,{title:"Render Tree",treeData:[[{id:"render-html",label:"html"}],[{id:"render-body",label:"body"}],[{id:"render-header",label:"header + style"},{id:"render-main",label:"main + style"}],[{id:"render-h1",label:"h1 + style"},{id:"render-p",label:"p + style"}]],connections:[{from:"render-html",to:["render-body"]},{from:"render-body",to:["render-header","render-main"]},{from:"render-header",to:["render-h1"]},{from:"render-main",to:["render-p"]}],isVisible:t,timeline:{start:f.start},pathFilter:e=>{const[t]=e.split("_");return"render-html"===t?0:"render-body"===t?.2:"render-header"===t||"render-main"===t?.4:.6},titleColor:"#4338ca",sectionGridArea:"render-tree",theme:{node:{background:"linear-gradient(to right, #eff6ff, #f5f3ff)",border:"#c7d2fe",color:"#4338ca"}}})]})}},97:(e,t,r)=>{r.d(t,{A:()=>f});var i=r(43),a=r(694),o=r(464),n=r(579);const d=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  grid-area: ${e=>e.gridArea||"auto"};
`,l=(0,o.Ay)(a.P.h2)`
  font-weight: 600;
  color: ${e=>e.color||"#4338ca"};
  margin: 0 0 1rem 0;
  text-align: center;
`,s=o.Ay.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;
  width: 100%;
  justify-items: center;
  position: relative;
`,c=(0,o.Ay)(a.P.div)`
  position: relative;
  z-index: 2;
`,h=o.Ay.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
`,p=(0,o.Ay)(a.P.path)`
  fill: none;
  stroke: #94A3B8;
  stroke-width: 2px;
`,m=o.Ay.div`
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  border-width: 2px;
  border-style: solid;
  font-family: monospace;
  font-size: 0.875rem;
  background-color: ${e=>{var t,r;return e.hidden?"#f3f4f6":(null===(t=e.theme)||void 0===t||null===(r=t.node)||void 0===r?void 0:r.background)||"#eff6ff"}};
  border-color: ${e=>{var t,r;return e.hidden?"#e5e7eb":(null===(t=e.theme)||void 0===t||null===(r=t.node)||void 0===r?void 0:r.border)||"#bfdbfe"}};
  color: ${e=>{var t,r;return e.hidden?"#9ca3af":(null===(t=e.theme)||void 0===t||null===(r=t.node)||void 0===r?void 0:r.color)||"#1d4ed8"}};
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  }
`,f=e=>{var t;let{title:r,treeData:a,connections:o,titleColor:f,isVisible:b=!0,timeline:u={start:0,duration:.3},sectionGridArea:y,pathFilter:g=e=>{const t=e.split("_")[0];return.2*(parseInt(t.replace(/\D/g,""))||0)},theme:x}=e;const v=(0,i.useRef)({}),w=(0,i.useRef)(null),[A,j]=(0,i.useState)({});return(0,i.useEffect)((()=>{if(!b||!w.current)return;const e=()=>{const e={},t=w.current.getBoundingClientRect();o.forEach((r=>{const i=v.current[r.from];if(!i)return;const a=i.getBoundingClientRect(),o=a.left+a.width/2-t.left,n=a.top+a.height-t.top;r.to.forEach((i=>{const a=v.current[i];if(!a)return;const d=a.getBoundingClientRect(),l=d.left+d.width/2-t.left,s=d.top-t.top,c=(n+s)/2;e[`${r.from}_${i}`]=`M${o},${n} C${o},${c} ${l},${c} ${l},${s}`}))})),j(e)},t=setTimeout(e,100);return window.addEventListener("resize",e),()=>{clearTimeout(t),window.removeEventListener("resize",e)}}),[b,o]),(0,n.jsxs)(d,{ref:w,gridArea:y,children:[b&&(0,n.jsx)(h,{children:Object.entries(A).map((e=>{var t,r,i;let[a,o]=e;return(0,n.jsx)(p,{d:o,initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{pathLength:{delay:(null!==(t=u.start)&&void 0!==t?t:0)+g(a),duration:null!==(r=u.duration)&&void 0!==r?r:.3},opacity:{delay:(null!==(i=u.start)&&void 0!==i?i:0)+g(a),duration:.1}}},a)}))}),(0,n.jsx)(l,{color:f,initial:{opacity:0},animate:b?{opacity:1}:{opacity:0},transition:{delay:(null!==(t=u.start)&&void 0!==t?t:0)-.2},children:r}),a.map(((e,t)=>(0,n.jsx)(s,{style:{gridTemplateColumns:`repeat(${e.length}, 1fr)`},children:e.map(((e,r)=>{var i;return(0,n.jsx)(c,{ref:t=>{v.current[e.id]=t},initial:{opacity:0,scale:.8},animate:b?e.hidden?{opacity:.3,scale:.8}:{opacity:1,scale:1}:{opacity:0,scale:.8},transition:{delay:(null!==(i=u.start)&&void 0!==i?i:0)+.2*t+.1*r,duration:.3},children:(0,n.jsx)(m,{hidden:e.hidden,theme:x,children:e.label})},e.id)}))},`${r.toLowerCase().replace(/\s+/g,"-")}-level-${t}`)))]})}}}]);
//# sourceMappingURL=59.6f261564.chunk.js.map