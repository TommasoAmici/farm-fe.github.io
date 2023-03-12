"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[1232],{9613:(t,e,r)=>{r.d(e,{Zo:()=>i,kt:()=>d});var n=r(9496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),m=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},i=function(t){var e=m(t.components);return n.createElement(c.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,i=p(t,["components","mdxType","originalType","parentName"]),s=m(r),k=a,d=s["".concat(c,".").concat(k)]||s[k]||u[k]||l;return r?n.createElement(d,o(o({ref:e},i),{},{components:r})):n.createElement(d,o({ref:e},i))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=k;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p[s]="string"==typeof t?t:a,o[1]=p;for(var m=2;m<l;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},5910:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=r(1163),a=(r(9496),r(9613));const l={},o="Benchmarks",p={unversionedId:"benchmark",id:"benchmark",title:"Benchmarks",description:"Using Turbopack's bench cases (1000 React components), see https://turbo.build/pack/docs/benchmarks.",source:"@site/docs/benchmark.md",sourceDirName:".",slug:"/benchmark",permalink:"/docs/benchmark",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/docs/benchmark.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Partial Bundling",permalink:"/docs/features/partial-bundling"}},c={},m=[],i={toc:m},s="wrapper";function u(t){let{components:e,...l}=t;return(0,a.kt)(s,(0,n.Z)({},i,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"benchmarks"},"Benchmarks"),(0,a.kt)("p",null,"Using Turbopack's bench cases (1000 React components), see ",(0,a.kt)("a",{parentName:"p",href:"https://turbo.build/pack/docs/benchmarks"},"https://turbo.build/pack/docs/benchmarks"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Test Repo\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/farm-fe/performance-compare"},"https://github.com/farm-fe/performance-compare")),(0,a.kt)("p",{parentName:"blockquote"},"Test Machine\uff08Linux Mint 21.1 Cinnamon\uff0c 11th Gen Intel\xa9 Core\u2122 i5-11400 @ 2.60GHz \xd7 6\uff0c 15.5 GiB\uff09")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"xx",src:r(2010).Z,width:"2106",height:"954"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Startup")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"HMR (Root)")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"HMR (Leaf)")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Webpack"),(0,a.kt)("td",{parentName:"tr",align:null},"7694ms"),(0,a.kt)("td",{parentName:"tr",align:null},"334ms"),(0,a.kt)("td",{parentName:"tr",align:null},"267ms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Vite"),(0,a.kt)("td",{parentName:"tr",align:null},"4625ms"),(0,a.kt)("td",{parentName:"tr",align:null},"32ms"),(0,a.kt)("td",{parentName:"tr",align:null},"27ms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Turbopack"),(0,a.kt)("td",{parentName:"tr",align:null},"2444ms"),(0,a.kt)("td",{parentName:"tr",align:null},"9ms"),(0,a.kt)("td",{parentName:"tr",align:null},"11ms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rspack"),(0,a.kt)("td",{parentName:"tr",align:null},"406ms"),(0,a.kt)("td",{parentName:"tr",align:null},"311ms"),(0,a.kt)("td",{parentName:"tr",align:null},"301ms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Farm"),(0,a.kt)("td",{parentName:"tr",align:null},"395ms"),(0,a.kt)("td",{parentName:"tr",align:null},"7ms"),(0,a.kt)("td",{parentName:"tr",align:null},"12ms")))))}u.isMDXComponent=!0},2010:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/benchmark-fb797ab45c0f73a074c122ba6eb2e57a.png"}}]);