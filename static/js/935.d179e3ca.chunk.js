"use strict";(self.webpackChunkbrowser_render_visualizer=self.webpackChunkbrowser_render_visualizer||[]).push([[935],{935:(i,t,r)=>{r.r(t),r.d(t,{default:()=>k});r(43);var o=r(694),a=r(464),e=r(117),n=r(693),s=r(579);const d=a.Ay.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 600px;
`,l=(0,a.Ay)(o.P.div)`
  position: absolute;
  inset: 2rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  height: 264px;
  z-index: 1;
`,p=a.Ay.div`
  position: absolute;
  top: -1.5rem;
  left: 1rem;
  font-size: 0.875rem;
  color: #4B5563;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
`,c=a.Ay.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 0.75rem;
  z-index: 2;
`,m=a.Ay.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`,x=(0,a.Ay)(o.P.div)`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  gap: 0.5rem;
`,b=a.Ay.div`
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  background-color: ${i=>i.bgColor};
`,u=a.Ay.span`
  font-size: 0.875rem;
  color: #4B5563;
`,y=a.Ay.div`
  position: absolute;
  inset: 1rem 45% 51% 36%;
  width: 196px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

`,h=(0,a.Ay)(o.P.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom right, #EFF6FF, #F5F3FF);
  border-radius: 0.5rem;
`,g=(0,a.Ay)(o.P.div)`
  position: absolute;
  inset: 0;
  border: 2px solid #BFDBFE;
  border-radius: 0.5rem;
  padding: 1.5rem;
`,F=(0,a.Ay)(o.P.div)`
  position: relative;
  z-index: 3;
`,f=a.Ay.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 1rem;
`,v=a.Ay.p`
  color: #4B5563;
`,A=((0,a.Ay)(o.P.div)`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background-color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 4;
`,(0,a.Ay)(o.P.div)`
  position: absolute;
  bottom: -6rem;
  right: 1rem;
  background-color: white;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #efefef;
  z-index: 4;
  width: 90%;
`),j=a.Ay.div`
  color: #474747;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
`,w=a.Ay.ul`
  list-style-type: disc;
  list-style-position: inside;
  font-size: 0.75rem;
  color: #474747;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,k=((0,a.Ay)(o.P.div)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #ECFDF5;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #D1FAE5;
  z-index: 4;
`,a.Ay.div`
  color: #047857;
  font-size: 0.75rem;
`,i=>{let{isVisible:t}=i;const{t:r}=(0,e.Bd)(),o=n.WT.steps.paint.timeline,a=[{id:"background",label:r("animations.paint.layers.background"),color:"#EFF6FF"},{id:"borders",label:r("animations.paint.layers.borders"),color:"#DBEAFE"},{id:"text",label:r("animations.paint.layers.text"),color:"#BFDBFE"},{id:"shadows",label:r("animations.paint.layers.shadows"),color:"#93C5FD"}];return(0,s.jsx)(d,{children:(0,s.jsxs)(l,{initial:{opacity:0},animate:t?{opacity:1}:{opacity:0},transition:{delay:o.canvas.start,duration:o.canvas.duration},children:[(0,s.jsx)(p,{children:r("animations.paint.canvas")}),(0,s.jsxs)(c,{children:[(0,s.jsxs)(m,{children:[r("animations.paint.paintOrder"),"\uff1a"]}),a.map(((i,r)=>(0,s.jsxs)(x,{initial:{opacity:0,x:-20},animate:t?{opacity:1,x:0}:{opacity:0,x:-20},transition:{delay:o.structure.start+.2*r,duration:.3},children:[(0,s.jsx)(b,{bgColor:i.color}),(0,s.jsxs)(u,{children:[r+1,". ",i.label]})]},i.id)))]}),(0,s.jsxs)(y,{children:[(0,s.jsx)(h,{initial:{opacity:0},animate:t?{opacity:1}:{opacity:0},transition:{delay:o.background.start,duration:o.background.duration}}),(0,s.jsx)(g,{initial:{opacity:0},animate:t?{opacity:1}:{opacity:0},transition:{delay:o.structure.start,duration:o.structure.duration},children:(0,s.jsxs)(F,{initial:{opacity:0},animate:t?{opacity:1}:{opacity:0},transition:{delay:o.text.start,duration:o.text.duration},children:[(0,s.jsx)(f,{children:r("animations.paint.title")}),(0,s.jsx)(v,{children:r("animations.paint.paragraph")})]})})]}),(0,s.jsxs)(A,{initial:{opacity:0},animate:t?{opacity:1}:{opacity:0},transition:{delay:o.order.start,duration:o.order.duration},children:[(0,s.jsx)(j,{children:r("animations.paint.rules.title")}),(0,s.jsxs)(w,{children:[(0,s.jsx)("li",{children:r("animations.paint.rules.backToFront")}),(0,s.jsx)("li",{children:r("animations.paint.rules.parentFirst")}),(0,s.jsx)("li",{children:r("animations.paint.rules.stackingContext")}),(0,s.jsx)("li",{children:r("animations.paint.rules.repaintHint")})]})]})]})})})}}]);
//# sourceMappingURL=935.d179e3ca.chunk.js.map