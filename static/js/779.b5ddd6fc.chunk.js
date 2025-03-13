"use strict";(self.webpackChunkbrowser_render_visualizer=self.webpackChunkbrowser_render_visualizer||[]).push([[779],{44:(e,t,i)=>{i.d(t,{GY:()=>n,Gu:()=>o,dN:()=>r});const r=[[{id:"html",label:"html"}],[{id:"body",label:"body"}],[{id:"header",label:"header"},{id:"main",label:"main"}],[{id:"h1",label:"h1"},{id:"p",label:"p"}],[{id:"script",label:"script",hidden:!0}]],n=[{from:"html",to:["body"]},{from:"body",to:["header","main"]},{from:"header",to:["h1"]},{from:"main",to:["p"]}],o={node:{background:"#eff6ff",border:"#bfdbfe",color:"#1d4ed8"}}},97:(e,t,i)=>{i.d(t,{A:()=>u});var r=i(43),n=i(694),o=i(464),a=i(579);const d=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  grid-area: ${e=>e.gridArea||"auto"};
`,l=(0,o.Ay)(n.P.h2)`
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
`,c=(0,o.Ay)(n.P.div)`
  position: relative;
  z-index: 2;
`,m=o.Ay.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
`,h=(0,o.Ay)(n.P.path)`
  fill: none;
  stroke: #94A3B8;
  stroke-width: 2px;
`,p=o.Ay.div`
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  border-width: 2px;
  border-style: solid;
  font-family: monospace;
  font-size: 0.875rem;
  background-color: ${e=>{var t,i;return e.hidden?"#f3f4f6":(null===(t=e.theme)||void 0===t||null===(i=t.node)||void 0===i?void 0:i.background)||"#eff6ff"}};
  border-color: ${e=>{var t,i;return e.hidden?"#e5e7eb":(null===(t=e.theme)||void 0===t||null===(i=t.node)||void 0===i?void 0:i.border)||"#bfdbfe"}};
  color: ${e=>{var t,i;return e.hidden?"#9ca3af":(null===(t=e.theme)||void 0===t||null===(i=t.node)||void 0===i?void 0:i.color)||"#1d4ed8"}};
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  }
`,u=e=>{var t;let{title:i,treeData:n,connections:o,titleColor:u,isVisible:f=!0,timeline:b={start:0,duration:.3},sectionGridArea:y,pathFilter:v=e=>{const t=e.split("_")[0];return.2*(parseInt(t.replace(/\D/g,""))||0)},theme:x}=e;const g=(0,r.useRef)({}),w=(0,r.useRef)(null),[$,A]=(0,r.useState)({});return(0,r.useEffect)((()=>{if(!f||!w.current)return;const e=()=>{const e={},t=w.current.getBoundingClientRect();o.forEach((i=>{const r=g.current[i.from];if(!r)return;const n=r.getBoundingClientRect(),o=n.left+n.width/2-t.left,a=n.top+n.height-t.top;i.to.forEach((r=>{const n=g.current[r];if(!n)return;const d=n.getBoundingClientRect(),l=d.left+d.width/2-t.left,s=d.top-t.top,c=(a+s)/2;e[`${i.from}_${r}`]=`M${o},${a} C${o},${c} ${l},${c} ${l},${s}`}))})),A(e)},t=setTimeout(e,100);return window.addEventListener("resize",e),()=>{clearTimeout(t),window.removeEventListener("resize",e)}}),[f,o]),(0,a.jsxs)(d,{ref:w,gridArea:y,children:[f&&(0,a.jsx)(m,{children:Object.entries($).map((e=>{var t,i,r;let[n,o]=e;return(0,a.jsx)(h,{d:o,initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{pathLength:{delay:(null!==(t=b.start)&&void 0!==t?t:0)+v(n),duration:null!==(i=b.duration)&&void 0!==i?i:.3},opacity:{delay:(null!==(r=b.start)&&void 0!==r?r:0)+v(n),duration:.1}}},n)}))}),(0,a.jsx)(l,{color:u,initial:{opacity:0},animate:f?{opacity:1}:{opacity:0},transition:{delay:(null!==(t=b.start)&&void 0!==t?t:0)-.2},children:i}),n.map(((e,t)=>(0,a.jsx)(s,{style:{gridTemplateColumns:`repeat(${e.length}, 1fr)`},children:e.map(((e,i)=>{var r;return(0,a.jsx)(c,{ref:t=>{g.current[e.id]=t},initial:{opacity:0,scale:.8},animate:f?e.hidden?{opacity:.3,scale:.8}:{opacity:1,scale:1}:{opacity:0,scale:.8},transition:{delay:(null!==(r=b.start)&&void 0!==r?r:0)+.2*t+.1*i,duration:.3},children:(0,a.jsx)(p,{hidden:e.hidden,theme:x,children:e.label})},e.id)}))},`${i.toLowerCase().replace(/\s+/g,"-")}-level-${t}`)))]})}},779:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});i(43);var r=i(694),n=i(464),o=i(117),a=i(693),d=i(97),l=i(44),s=i(579);const c=n.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
`,m=(0,n.Ay)(r.P.div)`
  width: 100%;
  max-width: 16rem;
  background-color: #1f2937;
  border-radius: 0.5rem;
  padding: 16px;
  font-family: monospace;
  font-size: 0.75rem;
  color: white;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`,h=n.Ay.div`
  flex: 1;
  max-width: 320px;
  
  @media (max-width: 500px) {
    padding: 0 0.5rem;
  }
`,p=e=>{let{isVisible:t}=e;const i=a.WT.steps.domTree.timeline,{t:r}=(0,o.Bd)(),n=`\n<html>\n  <body>\n    <header>\n      <h1>${r("animations.domTree.title")}</h1>\n    </header>\n    <main>\n      <p>${r("animations.domTree.content")}</p>\n    </main>\n  </body>\n</html>`.trim();return(0,s.jsxs)(c,{children:[(0,s.jsx)(m,{initial:{opacity:0,x:-20},animate:t?{opacity:1,x:0}:{opacity:0,x:-20},transition:{delay:i.htmlCode.start,duration:i.htmlCode.duration},children:(0,s.jsx)("pre",{children:n})}),(0,s.jsx)(h,{children:(0,s.jsx)(d.A,{title:"DOM Tree",treeData:l.dN,connections:l.GY,isVisible:t,timeline:{start:i.htmlNode.start},theme:l.Gu})})]})}}}]);
//# sourceMappingURL=779.b5ddd6fc.chunk.js.map