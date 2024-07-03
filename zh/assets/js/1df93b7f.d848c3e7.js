"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[4583],{2037:(e,t,s)=>{s.r(t),s.d(t,{default:()=>I});var n=s(758),a=s(8835),i=s(7733),l=s(7553),r=s(1227),o=s(3700);const c=s.p+"assets/images/rocket-84b12b0b9c2fedde390e122d2563ecbc.png",d=s.p+"assets/images/plug-509f8f982a9a08431017c8c46bb6d3bb.png",m=s.p+"assets/images/feature-1a0545f4589a9c5ac2949f6ff0acde53.png",x=s.p+"assets/images/box-2073f27f31683afdfc3b2e6f1f775e1f.png",u=s.p+"assets/images/compatible-1387759c6885367cdeb0569560b3a950.png",h=(s.p,{features:"features_t9lD",item:"item_fAv5",card:"card_L8bV",backgroundImage:"backgroundImage_M6A8","card-container":"card-container_mQSC",glowing:"glowing_rukm","card-container-content":"card-container-content_HPWq"});var f=s(6070);const p=[{title:(0,f.jsx)(o.A,{children:"Extremely Fast"}),Img:c,description:(0,f.jsx)(o.A,{children:"Written in Rust, start a React / Vue project in milliseconds and perform an HMR update within 10ms for most situations."}),className:"w-full rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2"},{title:(0,f.jsx)(o.A,{children:"Incremental Building"}),Img:x,description:(0,f.jsx)(o.A,{children:"Incremental Building: Support persistent cache, module level cache enabled by default, any module won't be compiled twice until it's changed!"}),className:"w-full rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2"},{title:(0,f.jsx)(o.A,{children:"Rich Features"}),Img:m,description:(0,f.jsx)(o.A,{children:"Farm support compiling Html, Css, Css Modules, Js/Jsx/Ts/Tsx, Json, Static Assets out of box, support sass, less, postcss, vue, react, solid by official plugins, support lazy compiling, partial bundling and more"}),className:"w-full rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2"},{title:(0,f.jsx)(o.A,{children:"Fully Pluggable and Vite Compatible"}),Img:d,description:(0,f.jsx)(o.A,{children:"Everything inside Farm is powered by plugins, Supports both Rust and JavaScript plugins. Support Vite plugins out of box."}),className:" w-full flex h-52 rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-auto"},{title:(0,f.jsx)(o.A,{children:"Partial Bundling"}),Img:x,description:(0,f.jsx)(o.A,{children:"Partial Bundling: Bundle your project into a few reasonable bundles, speeding up resource loading without losing caching granularity."}),className:"w-full rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2"},{title:(0,f.jsx)(o.A,{children:"Consistency and Compatibility"}),Img:u,description:(0,f.jsx)(o.A,{children:"What you see in development will be the same as what you get in production. Supports both legacy (ES5) and modern browsers."}),className:" w-full flex h-52 rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-auto"}];function g(e){let{Img:t,title:s,description:n,className:i}=e;return(0,f.jsx)("div",{className:(0,a.A)("rounded-lg shadow-lg",h.card,h["card-container"],i),children:(0,f.jsxs)("div",{className:(0,a.A)("flex items-center flex-col",h["card-container-content"]),children:[(0,f.jsx)("div",{className:(0,a.A)("flex items-center justify-center absolute",h.backgroundImage),children:(0,f.jsx)("img",{src:t,className:(0,a.A)("text--center w-20 h-20"),role:"img"})}),(0,f.jsx)("img",{src:t,className:(0,a.A)("text--center w-16 h-16"),role:"img"}),(0,f.jsxs)("div",{className:"p-6 flex-grow flex-shrink",children:[(0,f.jsx)("h3",{className:"text-lg font-bold mt-4 mb-2",children:s}),(0,f.jsx)("p",{className:"text-base",children:n})]})]})})}function j(){return(0,f.jsx)("section",{className:"my-4",children:(0,f.jsx)("div",{className:"max-w-7xl mx-auto flex",children:(0,f.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8",children:p.map(((e,t)=>(0,f.jsx)(g,{...e,className:"flex-grow flex-shrink my-4"},t)))})})})}var b=s(4044);const w={"progress-bar-container":"progress-bar-container_Btve","progress-bar-inner-container":"progress-bar-inner-container_RjNy","progress-bar":"progress-bar_MQ9H","font-mono":"font-mono_qmiE",main:"main_Gz2F",fill:"fill_bMTX",content:"content__pcr",container:"container_GXFn",tabs:"tabs_FETH"};function A(e){let{value:t,max:s}=e;const[a,i]=(0,n.useState)(0),l=1e3*t,r=window.innerWidth<768?80:18,o=(c=a,l<1e3?`${c.toFixed(0)}ms`:`${(c/1e3).toFixed(2)}s`);var c;const d=(0,b.zh)({width:"100%",from:{width:"0%"},config:{duration:l},onChange(e){i(parseFloat(e.value.width)/100*l)}});return(0,f.jsxs)("div",{className:`${w["progress-bar-container"]} flex justify-between items-center sm:pr-4`,style:{width:`${r}vw`,flex:1},children:[(0,f.jsx)("div",{className:`${w["progress-bar-inner-container"]} flex justify-between`,style:{width:t/s*.8*r+"vw"},children:(0,f.jsx)(b.CS.div,{className:w["progress-bar"],style:d})}),(0,f.jsx)("div",{className:`${w["font-mono"]} text-sm sm:text-base`,children:o})]})}var v=s(513);const N={ColdStart:[{name:"Farm",time:.396},{name:"RsBuild",time:.468},{name:"Vite",time:1.7},{name:"Webpack",time:2.078}],HotStart:[{name:"Farm",time:.273},{name:"RsBuild",time:.468},{name:"Vite",time:1.426},{name:"Webpack",time:.945}],HmrRoot:[{name:"Farm",time:.018},{name:"RsBuild",time:.087},{name:"Vite",time:.022},{name:"Webpack",time:.532}],HmrLeaf:[{name:"Farm",time:.013},{name:"RsBuild",time:.074},{name:"Vite",time:.011},{name:"Webpack",time:.165}],ColdBuild:[{name:"Farm",time:.313},{name:"RsBuild",time:.363},{name:"Vite",time:1.543},{name:"Webpack",time:4.128}],HotBuild:[{name:"Farm",time:.16},{name:"RsBuild",time:.363},{name:"Vite",time:1.54},{name:"Webpack",time:.527}]};function y(){const e=[{name:(0,f.jsx)(o.A,{children:"ColdStart"}),title:"ColdStart"},{name:(0,f.jsx)(o.A,{children:"HotStart"}),title:"HotStart"},{name:(0,f.jsx)(o.A,{children:"HmrRoot"}),title:"HmrRoot"},{name:(0,f.jsx)(o.A,{children:"HmrLeaf"}),title:"HmrLeaf"},{name:(0,f.jsx)(o.A,{children:"ColdBuild"}),title:"ColdBuild"},{name:(0,f.jsx)(o.A,{children:"HotBuild"}),title:"HotBuild"}],[t,s]=(0,n.useState)("ColdStart"),{ref:l,inView:r}=(0,v.Wx)(),c=N[t],[d,m]=(0,n.useState)("ColdStart");function x(e){let{section:t}=e;return(0,f.jsx)("div",{children:(0,f.jsx)("div",{className:(0,a.A)("flex-1 cursor-pointer rounded-md py-2 px-2 sm:px-4 text-center font-jakarta text-sm font-semibold",d===t.title?"bg-fuchsia-600 text-white":"color-re"),onClick:()=>{m(t.title),s(t.title)},children:t.name})})}function u(e){let{SCENE:t,children:s}=e;return(0,f.jsxs)("div",{className:"overflow-x-auto",children:[(0,f.jsx)("div",{className:"inline-flex mb-4 items-center rounded-lg text-sm lg:text-base",children:t.map(((e,t)=>(0,f.jsx)(x,{section:e},t)))}),(0,f.jsx)("div",{children:s})]})}return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{ref:l,className:"flex",children:r&&(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{className:`${w.tabs} flex flex-col items-center my-4 z-1`,children:(0,f.jsx)("div",{className:"flex h-20 w-full flex-1 items-center self-start lg:justify-end",children:(0,f.jsxs)("div",{className:"w-full",children:[(0,f.jsx)(u,{SCENE:e,children:c.map((e=>(0,f.jsx)("div",{className:"flex flex-center justify-start my-8 flex-col sm:flex-row",children:r&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"flex items-center text-light-500  text-center font-bold",style:{minWidth:"100px"},children:e.name}),(0,f.jsx)(A,{value:e.time,max:Math.max(...c.map((e=>e.time)))})]})},e.name)))}),(0,f.jsx)("div",{className:"font-bold cursor-pointer",children:(0,f.jsx)(i.A,{rel:"stylesheet",href:"https://github.com/farm-fe/performance-compare",children:(0,f.jsx)(o.A,{children:"See benchmark details"})})})]})})})})})})}var k=s(307),B=s(7963),S=s(8952),F=s(4829),_=s(5244),C=s(2197);function R(){new B.PointsMaterial({color:"rgb(255, 255, 0)",size:.1});const e=new B.BufferGeometry,t=(new B.PointsMaterial({color:"white",size:.1}),new Float32Array(300));for(let s=0;s<100;s++){const e=100*Math.random()-50,n=100*Math.random()-50,a=100*Math.random()-50;t[3*s]=e,t[3*s+1]=n,t[3*s+2]=a}e.setAttribute("position",new B.BufferAttribute(t,3));(0,n.useRef)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(k.Hl,{dpr:[1.5,2],linear:!0,shadows:!0,style:{position:"absolute"},children:[(0,f.jsx)("fog",{attach:"fog",args:["#272730",16,30]}),(0,f.jsx)("ambientLight",{intensity:.75}),(0,f.jsxs)(S.u,{makeDefault:!0,position:[0,0,16],fov:75,children:[(0,f.jsx)("pointLight",{intensity:1,position:[-10,-25,-10]}),(0,f.jsx)("spotLight",{castShadow:!0,intensity:2.25,angle:.2,penumbra:1,position:[-25,20,-15],"shadow-mapSize":[1024,1024],"shadow-bias":-1e-4})]}),(0,f.jsx)(F.N,{autoRotate:!0,autoRotateSpeed:.015,enablePan:!0,enableZoom:!1,enableRotate:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),(0,f.jsx)(_.A,{radius:100,count:1500,factor:8,saturation:1,fade:!0})]}),(0,f.jsx)("div",{className:"layer"}),(0,f.jsx)(C.a,{})]})}const H={heroBanner:"heroBanner_qdFl",banner:"banner_d9gt",buttons:"buttons_AeoN",btn:"btn_bvfa",farmButton:"farmButton_siNL",glowing:"glowing_QCKo"};function W(){const{siteConfig:e}=(0,l.A)();return(0,f.jsxs)("header",{className:(0,a.A)("grid grid-cols-1 gap-10 relative z-10 mx-auto max-w-8xl py-4 sm:py-6 lg:py-8","lg:grid-cols-2",H.heroBanner),children:[(0,f.jsxs)("div",{className:"container w-full flex flex-col my-1",children:[(0,f.jsxs)("p",{className:"font-extrabold text-3xl sm:text-6xl lg:text-6xl text-left mb-6 flex flex-col gap-2",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("span",{children:(0,f.jsx)(o.A,{children:"Extremely"})}),(0,f.jsx)("span",{className:(0,a.A)(H.banner),children:(0,f.jsx)(o.A,{children:" Fast "})}),(0,f.jsx)("span",{children:(0,f.jsx)(o.A,{children:"Web"})})]}),(0,f.jsx)("div",{children:(0,f.jsx)("span",{className:(0,a.A)(H.banner),children:(0,f.jsx)(o.A,{children:" Build Tool"})})}),(0,f.jsxs)("div",{children:[(0,f.jsx)("span",{children:(0,f.jsx)(o.A,{children:"Written in"})}),(0,f.jsx)("span",{className:(0,a.A)(H.banner,"my-6"),children:(0,f.jsx)(o.A,{children:" Rust"})})]})]}),(0,f.jsx)("p",{className:"font-semibold brand-color mb-6 text-1xl sm:text-2xl lg:text-xl tracking-wide text-left  flex flex-col gap-2",children:(0,f.jsxs)("div",{children:[(0,f.jsx)("span",{className:(0,a.A)(H.banner,"font-extrabold"),children:(0,f.jsx)(o.A,{children:"Farm "})}),(0,f.jsx)("span",{className:"font-sans",children:(0,f.jsx)(o.A,{children:"is a Rust-Based Web Building Engine to Facilitate Your Web Program and JavaScript Library"})})]})}),(0,f.jsxs)("div",{className:(0,a.A)(H.buttons,"my-2"),children:[(0,f.jsx)(i.A,{to:"/docs/quick-start",style:{textDecoration:"none"},children:(0,f.jsx)("div",{className:(0,a.A)(H.farmButton,"flex w-36 sm:w-40 items-center justify-center font-bold"),children:(0,f.jsx)(o.A,{children:"Quick Start"})})}),(0,f.jsx)(i.A,{style:{marginLeft:"20px",textDecoration:"none"},to:"/docs/why-farm",children:(0,f.jsx)("div",{className:(0,a.A)(H.farmButton,"flex w-36 sm:w-40  items-center justify-center font-bold"),children:(0,f.jsx)(o.A,{children:"Why Farm?"})})})]})]}),(0,f.jsx)(y,{})]})}function I(){const{siteConfig:e}=(0,l.A)();return(0,f.jsxs)(r.A,{title:`${e.title} Documentation`,description:"Description will go into a meta tag in <head />",children:[(0,f.jsx)(R,{}),(0,f.jsxs)("main",{className:"mb-20 mt-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8max-w-6xl",children:[(0,f.jsx)(W,{}),(0,f.jsx)(j,{})]})]})}}}]);