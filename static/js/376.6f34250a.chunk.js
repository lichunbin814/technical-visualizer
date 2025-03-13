"use strict";(self.webpackChunkbrowser_render_visualizer=self.webpackChunkbrowser_render_visualizer||[]).push([[376],{376:(i,e,r)=>{r.r(e),r.d(e,{default:()=>k});r(43);var o=r(694),t=r(464),a=r(117),s=r(693),n=r(579);const d=t.Ay.div`
  position: relative;
  width: 100%;
  height: 100%;
`,l=t.Ay.div`
  margin: 2rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;
  border: 2px dashed #e5e7eb;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    "layers composition"
    "layers final";
  gap: 2rem;
  padding: 2rem;
  height: calc(100% - 4rem);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "layers"
      "composition";
    gap: 0;
    padding-bottom: 5rem;
  }
`,c=t.Ay.div`
  grid-area: layers;
  position: relative;
  min-height: 20rem;
`,p=t.Ay.div`
  height: 12rem;
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  background: ${i=>i.color};
  border: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4px);
  transform: rotateX(10deg) rotateY(5deg);
`,m=t.Ay.div`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,g=t.Ay.div`
  font-size: 0.875rem;
  color: #4b5563;
`,b=(0,t.Ay)(o.P.div)`
  grid-area: composition;
`,x=t.Ay.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
`,h=t.Ay.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
`,y=t.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,f=t.Ay.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,u=t.Ay.div`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  background-color: ${i=>i.bgColor};
`,j=t.Ay.div`
  font-size: 0.875rem;
  color: #4b5563;
`,v=((0,t.Ay)(o.P.div)`
  grid-area: final;
  background: linear-gradient(to bottom right, #eef2ff, #eff6ff);
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid #e0e7ff;
  align-self: end;
  justify-self: end;
  max-width: 80%;
`,t.Ay.div`
  font-size: 0.875rem;
  color: #4338ca;
`,(0,t.Ay)(o.P.div)`
  position: absolute;
  bottom: -1rem;
  right: 1rem;
  background-color: white;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  z-index: 50;
`),w=t.Ay.div`
  font-size: 0.875rem;
  color: #474747;
`,A=t.Ay.div`
  font-weight: 500;
  margin-bottom: 0.5rem;
`,z=t.Ay.ul`
  list-style-type: disc;
  list-style-position: inside;
  font-size: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,k=i=>{let{isVisible:e}=i;const{t:r}=(0,a.Bd)(),t=s.WT.steps.composite.timeline,k=[{id:"background",label:r("animations.composite.layers.background"),description:r("animations.composite.descriptions.background"),color:"linear-gradient(to bottom right, rgba(219, 234, 254, 0.8), rgba(239, 246, 255, 0.8))",z:10},{id:"content",label:r("animations.composite.layers.content"),description:r("animations.composite.descriptions.content"),color:"linear-gradient(to bottom right, rgba(237, 233, 254, 0.8), rgba(245, 243, 255, 0.8))",z:20},{id:"ui",label:r("animations.composite.layers.ui"),description:r("animations.composite.descriptions.ui"),color:"linear-gradient(to bottom right, rgba(220, 252, 231, 0.8), rgba(240, 253, 244, 0.8))",z:30}];return(0,n.jsx)(d,{children:(0,n.jsxs)(l,{children:[(0,n.jsx)(c,{children:k.map(((i,r)=>(0,n.jsx)(o.P.div,{initial:{opacity:0,y:-20},animate:e?{opacity:1,y:40*r,z:i.z}:{opacity:0,y:-20,z:i.z},transition:{delay:t.backgroundLayer.start+.2*r,duration:.3},style:{position:"absolute",left:0,top:0,width:"100%",perspective:"1000px"},children:(0,n.jsxs)(p,{color:i.color,children:[(0,n.jsx)(m,{children:i.label}),(0,n.jsx)(g,{children:i.description})]})},i.id)))}),(0,n.jsx)(b,{initial:{opacity:0},animate:e?{opacity:1}:{opacity:0},transition:{delay:t.compositing.start,duration:t.compositing.duration},children:(0,n.jsxs)(x,{children:[(0,n.jsx)(h,{children:r("animations.composite.steps.title")}),(0,n.jsxs)(y,{children:[(0,n.jsxs)(f,{children:[(0,n.jsx)(u,{bgColor:"#60a5fa"}),(0,n.jsx)(j,{children:r("animations.composite.steps.createLayers")})]}),(0,n.jsxs)(f,{children:[(0,n.jsx)(u,{bgColor:"#c084fc"}),(0,n.jsx)(j,{children:r("animations.composite.steps.rasterize")})]}),(0,n.jsxs)(f,{children:[(0,n.jsx)(u,{bgColor:"#4ade80"}),(0,n.jsx)(j,{children:r("animations.composite.steps.gpuAcceleration")})]}),(0,n.jsxs)(f,{children:[(0,n.jsx)(u,{bgColor:"#f9fafb"}),(0,n.jsx)(j,{children:r("animations.composite.steps.complete")})]})]})]})}),(0,n.jsx)(v,{initial:{opacity:0},animate:e?{opacity:1}:{opacity:0},transition:{delay:t.gpuHint.start,duration:t.gpuHint.duration},children:(0,n.jsxs)(w,{children:[(0,n.jsx)(A,{children:r("animations.composite.gpuHints.title")}),(0,n.jsxs)(z,{children:[(0,n.jsx)("li",{children:r("animations.composite.gpuHints.transform")}),(0,n.jsx)("li",{children:r("animations.composite.gpuHints.willChange")}),(0,n.jsx)("li",{children:r("animations.composite.gpuHints.layerUsage")})]})]})})]})})}}}]);
//# sourceMappingURL=376.6f34250a.chunk.js.map