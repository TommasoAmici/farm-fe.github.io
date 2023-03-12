"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[1661],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(1163),a=(n(9496),n(9613));const i={},o="Partial Bundling",l={unversionedId:"features/partial-bundling",id:"features/partial-bundling",title:"Partial Bundling",description:"Back to webpack, the developer often uses splitChunks to split bundles, trying to optimize the resources loading time and increase the cache hit rate. But configuring splitChunks is really complex and sometimes it won't achieve what you want.",source:"@site/docs/features/partial-bundling.md",sourceDirName:"features",slug:"/features/partial-bundling",permalink:"/docs/features/partial-bundling",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/docs/features/partial-bundling.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lazy Compilation",permalink:"/docs/features/lazy-compilation"},next:{title:"Benchmarks",permalink:"/docs/benchmark"}},u={},c=[{value:"How Partial Bundling Works",id:"how-partial-bundling-works",level:2}],s={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"partial-bundling"},"Partial Bundling"),(0,a.kt)("p",null,"Back to webpack, the developer often uses ",(0,a.kt)("inlineCode",{parentName:"p"},"splitChunks")," to split bundles, trying to optimize the resources loading time and increase the cache hit rate. But configuring ",(0,a.kt)("inlineCode",{parentName:"p"},"splitChunks")," is really complex and sometimes it won't achieve what you want."),(0,a.kt)("p",null,"So Farm invented ",(0,a.kt)("inlineCode",{parentName:"p"},"Partial Bundling"),", bundle your application into several resources based on the dependency relationship and resource sizes automatically."),(0,a.kt)("h2",{id:"how-partial-bundling-works"},"How Partial Bundling Works"),(0,a.kt)("p",null,"WIP..."))}d.isMDXComponent=!0}}]);