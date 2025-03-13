"use strict";(self.webpackChunkbrowser_render_visualizer=self.webpackChunkbrowser_render_visualizer||[]).push([[935],{935:(i,r,t)=>{t.r(r),t.d(r,{default:()=>j});t(43);var o=t(694),e=t(464),a=t(117),n=t(693),s=t(579);const d=e.Ay.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 600px;
`,l=(0,e.Ay)(o.P.div)`
  position: absolute;
  inset: 2rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  height: 264px;
  z-index: 1;
`,p=e.Ay.div`
  position: absolute;
  top: -1.5rem;
  left: 1rem;
  font-size: 0.875rem;
  color: #4B5563;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
`,c=e.Ay.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 0.75rem;
  z-index: 2;
`,m=e.Ay.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`,x=(0,e.Ay)(o.P.div)`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  gap: 0.5rem;
`,b=e.Ay.div`
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  background-color: ${i=>i.bgColor};
`,u=e.Ay.span`
  font-size: 0.875rem;
  color: #4B5563;
`,h=e.Ay.div`
  position: absolute;
  z-index: 10;
  left: 35%;
  z-index: 10;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  @media (max-width: 768px) {
    left: 50%;
  }
`,y=(0,e.Ay)(o.P.div)`
  background: linear-gradient(to bottom right, #EFF6FF, #F5F3FF);
  border: 2px solid #BFDBFE;
  border-radius: 0.5rem;
  padding: 1.5rem;
`,g=(0,e.Ay)(o.P.div)`
  position: relative;
  z-index: 3;
`,f=e.Ay.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 1rem;
`,F=e.Ay.p`
  color: #4B5563;
`,v=((0,e.Ay)(o.P.div)`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background-color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 4;
`,(0,e.Ay)(o.P.div)`
  position: absolute;
  bottom: -6rem;
  right: 1rem;
  background-color: white;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #efefef;
  z-index: 4;
  width: 90%;
`),w=e.Ay.div`
  color: #474747;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
`,A=e.Ay.ul`
  list-style-type: disc;
  list-style-position: inside;
  font-size: 0.75rem;
  color: #474747;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,j=((0,e.Ay)(o.P.div)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #ECFDF5;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #D1FAE5;
  z-index: 4;
`,e.Ay.div`
  color: #047857;
  font-size: 0.75rem;
`,i=>{let{isVisible:r}=i;const{t:t}=(0,a.Bd)(),o=n.WT.steps.paint.timeline,e=[{id:"background",label:t("animations.paint.layers.background"),color:"#EFF6FF"},{id:"borders",label:t("animations.paint.layers.borders"),color:"#DBEAFE"},{id:"text",label:t("animations.paint.layers.text"),color:"#BFDBFE"},{id:"shadows",label:t("animations.paint.layers.shadows"),color:"#93C5FD"}];return(0,s.jsx)(d,{children:(0,s.jsxs)(l,{initial:{opacity:0},animate:r?{opacity:1}:{opacity:0},transition:{delay:o.canvas.start,duration:o.canvas.duration},children:[(0,s.jsx)(p,{children:t("animations.paint.canvas")}),(0,s.jsxs)(c,{children:[(0,s.jsxs)(m,{children:[t("animations.paint.paintOrder"),"\uff1a"]}),e.map(((i,t)=>(0,s.jsxs)(x,{initial:{opacity:0,x:-20},animate:r?{opacity:1,x:0}:{opacity:0,x:-20},transition:{delay:o.structure.start+.2*t,duration:.3},children:[(0,s.jsx)(b,{bgColor:i.color}),(0,s.jsxs)(u,{children:[t+1,". ",i.label]})]},i.id)))]}),(0,s.jsx)(h,{children:(0,s.jsx)(y,{initial:{opacity:0},animate:r?{opacity:1}:{opacity:0},transition:{delay:o.structure.start,duration:o.structure.duration},children:(0,s.jsxs)(g,{initial:{opacity:0},animate:r?{opacity:1}:{opacity:0},transition:{delay:o.text.start,duration:o.text.duration},children:[(0,s.jsx)(f,{children:t("animations.paint.title")}),(0,s.jsx)(F,{children:t("animations.paint.paragraph")})]})})}),(0,s.jsxs)(v,{initial:{opacity:0},animate:r?{opacity:1}:{opacity:0},transition:{delay:o.order.start,duration:o.order.duration},children:[(0,s.jsx)(w,{children:t("animations.paint.rules.title")}),(0,s.jsxs)(A,{children:[(0,s.jsx)("li",{children:t("animations.paint.rules.backToFront")}),(0,s.jsx)("li",{children:t("animations.paint.rules.parentFirst")}),(0,s.jsx)("li",{children:t("animations.paint.rules.stackingContext")}),(0,s.jsx)("li",{children:t("animations.paint.rules.repaintHint")})]})]})]})})})}}]);
//# sourceMappingURL=935.d827bbaf.chunk.js.map