"use strict";(self.webpackChunkbrowser_render_visualizer=self.webpackChunkbrowser_render_visualizer||[]).push([[82],{82:(e,t,i)=>{i.r(t),i.d(t,{default:()=>q});i(43);var r=i(694),a=i(464),n=i(117),o=i(693),s=i(579);const l=a.Ay.div`
  position: relative;
  width: 100%;
  height: 100%;
`,d=(0,a.Ay)(r.P.div)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5% 10%;
`,c=(0,a.Ay)(r.P.div)`
  width: 25%;
  aspect-ratio: 1 / 1;
  background-image: linear-gradient(to bottom right, #f0f9ff, rgba(219, 234, 254, 0.5));
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #bfdbfe;
  position: relative;
`,p=a.Ay.svg`
  width: 33.333%;
  height: 33.333%;
  color: #3b82f6;
`,h=a.Ay.span`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #2563eb;
  font-weight: 500;
`,u=a.Ay.div`
  position: absolute;
  width: 100%;
`,m=(0,a.Ay)(u)`
  top: 40%;
`,y=(0,a.Ay)(u)`
  top: 60%;
`,b=(0,a.Ay)(r.P.div)`
  position: absolute;
  background-color: #dbeafe;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  color: #2563eb;
  font-size: 0.75rem;
  white-space: nowrap;
  z-index: 10;
  left: 43%;
  transform: translateY(-50%);
  text-align: center;
`,x=(0,a.Ay)(r.P.div)`
  position: absolute;
  background-color: #d1fae5;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  color: #059669;
  font-size: 0.75rem;
  white-space: nowrap;
  z-index: 10;
  right: 62%;
  transform: translateY(-50%);
  text-align: center;
`,f=(0,a.Ay)(r.P.div)`
  position: absolute;
  height: 0.125rem;
  background-color: #3b82f6;
  left: 20%;
  width: 39%;
  transform-origin: left center;
`,g=(0,a.Ay)(r.P.div)`
  position: absolute;
  height: 0.125rem;
  background-color: #10b981;
  left: 19%;
  width: 41%;
  transform-origin: right center;
`,v=(0,a.Ay)(r.P.div)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`,w=(0,a.Ay)(v)`
  right: -1%;
`,j=(0,a.Ay)(v)`
  left: -1%;
`,k=a.Ay.div`
  width: 0.75rem;
  height: 0.75rem;
  transform: rotate(45deg);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`,A=(0,a.Ay)(k)`
  background-color: #3b82f6;
`,L=(0,a.Ay)(k)`
  background-color: #10b981;
`,q=e=>{let{isVisible:t}=e;const{t:i}=(0,n.Bd)(),r=o.WT.steps.httpRequest.timeline;return(0,s.jsx)(l,{children:(0,s.jsxs)(d,{initial:{opacity:0},animate:{opacity:t?1:0},transition:{duration:r.containerFadeIn.duration},children:[(0,s.jsxs)(c,{initial:{opacity:0,scale:.8},animate:t?{opacity:1,scale:1}:{opacity:0,scale:.8},transition:{delay:r.browserServerDisplay.start,duration:r.browserServerDisplay.duration},children:[(0,s.jsx)(p,{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"})}),(0,s.jsx)(h,{children:i("animations.httpRequest.browser")})]}),(0,s.jsxs)(c,{initial:{opacity:0,scale:.8},animate:t?{opacity:1,scale:1}:{opacity:0,scale:.8},transition:{delay:r.browserServerDisplay.start,duration:r.browserServerDisplay.duration},children:[(0,s.jsx)(p,{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"})}),(0,s.jsx)(h,{children:i("animations.httpRequest.server")})]}),(0,s.jsxs)(m,{children:[(0,s.jsx)(b,{initial:{opacity:0},animate:t?{opacity:1}:{opacity:0},transition:{delay:r.requestLine.start+.2},children:i("animations.httpRequest.request")}),(0,s.jsx)(f,{initial:{scaleX:0},animate:t?{scaleX:1}:{scaleX:0},transition:{delay:r.requestLine.start,duration:r.requestLine.duration},children:(0,s.jsx)(w,{initial:{left:0},animate:t?{left:"100%"}:{left:0},transition:{delay:r.requestLine.start,duration:r.requestLine.duration,ease:"easeInOut"},children:(0,s.jsx)(A,{})})})]}),(0,s.jsxs)(y,{children:[(0,s.jsx)(x,{initial:{opacity:0},animate:t?{opacity:1}:{opacity:0},transition:{delay:r.responseLine.start+.2},children:i("animations.httpRequest.response")}),(0,s.jsx)(g,{initial:{scaleX:0},animate:t?{scaleX:1}:{scaleX:0},transition:{delay:r.responseLine.start,duration:r.responseLine.duration},children:(0,s.jsx)(j,{initial:{right:"100%"},animate:t?{right:0}:{right:"100%"},transition:{delay:r.responseLine.start,duration:r.responseLine.duration,ease:"easeInOut"},children:(0,s.jsx)(L,{})})})]})]})})}}}]);
//# sourceMappingURL=82.deb95072.chunk.js.map