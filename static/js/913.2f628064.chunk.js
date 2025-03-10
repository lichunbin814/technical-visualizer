"use strict";(self.webpackChunkbrowser_render_visualizer=self.webpackChunkbrowser_render_visualizer||[]).push([[913],{913:(t,e,i)=>{i.r(e),i.d(e,{default:()=>C});var o=i(43),r=i(694),a=i(464),s=i(117),l=i(693),d=i(579);const n=a.Ay.div`
  position: relative;
  width: 100%;
  height: 100%;
`,p=(0,a.Ay)(r.P.div)`
  position: absolute;
  inset: 2rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;
  border: 2px dashed #d1d5db;
`,h=a.Ay.div`
  position: absolute;
  top: -1.5rem;
  left: 1rem;
  font-size: 0.875rem;
  color: #4b5563;
  font-family: monospace;
`,c=a.Ay.div`
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1rem;
  padding: 1rem;
  pointer-events: none;
`,m=a.Ay.div`
  height: 100%;
  border-left: 1px solid #e5e7eb;
`,f=(0,a.Ay)(r.P.div)`
  position: absolute;
  background-color: #eff6ff;
  border: 2px solid #bfdbfe;
  border-radius: 0.25rem;
`,b=a.Ay.div`
  position: absolute;
  top: -2%;
  left: 5%;
  font-size: 0.75rem;
  color: #2563eb;
  font-family: monospace;
`,y=(0,a.Ay)(r.P.div)`
  position: absolute;
  right: 18%;
  top: 0;
  background-color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  font-size: 0.75rem;
  font-family: monospace;
`,x=a.Ay.div`
  color: #4b5563;
`,u=(0,a.Ay)(r.P.div)`
  position: absolute;
  inset: 0;
`,g=a.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,w=a.Ay.div`
  height: 1px;
  background-color: #60a5fa;
  width: 100%;
`,v=a.Ay.div`
  position: absolute;
  left: 0;
  width: 0.5rem;
  height: 0.5rem;
  border-left: 2px solid #60a5fa;
  border-top: 2px solid #60a5fa;
  transform: translateY(-50%) rotate(-45deg);
`,j=a.Ay.div`
  position: absolute;
  right: 0;
  width: 0.5rem;
  height: 0.5rem;
  border-right: 2px solid #60a5fa;
  border-top: 2px solid #60a5fa;
  transform: translateY(-50%) rotate(45deg);
`,A=a.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  align-items: center;
`,k=a.Ay.div`
  width: 1px;
  background-color: #60a5fa;
  height: 100%;
`,z=a.Ay.div`
  position: absolute;
  top: 0;
  height: 0.5rem;
  width: 0.5rem;
  border-left: 2px solid #60a5fa;
  border-top: 2px solid #60a5fa;
  transform: translateX(-50%) rotate(-45deg);
`,P=a.Ay.div`
  position: absolute;
  bottom: 0;
  height: 0.5rem;
  width: 0.5rem;
  border-left: 2px solid #60a5fa;
  border-bottom: 2px solid #60a5fa;
  transform: translateX(-50%) rotate(45deg);
`,_=(0,a.Ay)(r.P.div)`
  position: absolute;
  bottom: -23%;
  right: 0;
  background-color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
`,S=a.Ay.div`
  color: #474747;
  font-size: 0.875rem;
`,B=a.Ay.span`
  font-weight: 500;
`,C=t=>{let{isVisible:e}=t;const{t:i}=(0,s.Bd)(),r=l.WT.steps.layout.timeline;return(0,d.jsx)(n,{children:(0,d.jsxs)(p,{initial:{opacity:0},animate:e?{opacity:1}:{opacity:0},transition:{delay:r.viewport.start,duration:r.viewport.duration},children:[(0,d.jsx)(h,{children:i("animations.layout.viewport")}),(0,d.jsx)(c,{children:Array.from({length:12}).map(((t,e)=>(0,d.jsx)(m,{},e)))}),[{id:"header",label:"header",width:"100%",height:"30%",top:"0%",left:"0%",measurementStyle:{right:"-3.8rem",top:"4%"}},{id:"h1",label:"h1",width:"80%",height:"20%",top:"5%",left:"10%"},{id:"main",label:"main",width:"100%",height:"60%",top:"35%",left:"0%",measurementStyle:{right:"-3.8rem",top:"4%"}},{id:"p",label:"p",width:"80%",height:"40%",top:"45%",left:"10%"}].map(((t,i)=>(0,d.jsx)(o.Fragment,{children:(0,d.jsxs)(f,{initial:{opacity:0,scale:.8},animate:e?{opacity:1,scale:1}:{opacity:0,scale:.8},transition:{delay:r.elementBoxes.start+.1*i,duration:.3},style:{width:t.width,height:t.height,top:t.top,left:t.left},children:[(0,d.jsx)(b,{children:t.label}),(0,d.jsxs)(y,{initial:{opacity:0},animate:e?{opacity:1}:{opacity:0},transition:{delay:r.calculation.start+.1*i},style:t.measurementStyle,children:[(0,d.jsxs)(x,{children:["width: ",t.width]}),(0,d.jsxs)(x,{children:["height: ",t.height]}),(0,d.jsxs)(x,{children:["top: ",t.top]}),(0,d.jsxs)(x,{children:["left: ",t.left]})]}),(0,d.jsxs)(u,{initial:{opacity:0},animate:e?{opacity:1}:{opacity:0},transition:{delay:r.calculation.start+.1*i},children:[(0,d.jsxs)(g,{children:[(0,d.jsx)(w,{}),(0,d.jsx)(v,{}),(0,d.jsx)(j,{})]}),(0,d.jsxs)(A,{children:[(0,d.jsx)(k,{}),(0,d.jsx)(z,{}),(0,d.jsx)(P,{})]})]})]})},t.id))),(0,d.jsx)(_,{initial:{opacity:0},animate:e?{opacity:1}:{opacity:0},transition:{delay:r.reflowHint.start},children:(0,d.jsxs)(S,{children:[(0,d.jsx)(B,{children:i("animations.layout.reflow")}),"\uff1a",(0,d.jsx)("br",{}),i("animations.layout.reflow_desc")]})})]})})}}}]);
//# sourceMappingURL=913.2f628064.chunk.js.map