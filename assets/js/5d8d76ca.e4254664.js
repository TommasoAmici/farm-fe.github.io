"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[8726],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,y=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(1163),o=(n(9496),n(9613));const r={},i="Lazy Compilation",l={unversionedId:"features/lazy-compilation",id:"features/lazy-compilation",title:"Lazy Compilation",description:"When comes to a big project, you may want to split them into small pieces and load on demand. This can be achieved by dynamic imports.",source:"@site/docs/features/lazy-compilation.md",sourceDirName:"features",slug:"/features/lazy-compilation",permalink:"/docs/features/lazy-compilation",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/features/lazy-compilation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Static Assets",permalink:"/docs/features/static"},next:{title:"Partial Bundling",permalink:"/docs/features/partial-bundling"}},p={},s=[{value:"Configuring Lazy Compilation",id:"configuring-lazy-compilation",level:2},{value:"How Lazy Compilation Work",id:"how-lazy-compilation-work",level:2}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lazy-compilation"},"Lazy Compilation"),(0,o.kt)("p",null,"When comes to a big project, you may want to split them into small pieces and load on demand. This can be achieved by dynamic imports."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const page = React.lazy(() => import('./page')); // lazy load page\n")),(0,o.kt)("p",null,"By default, Farm will lazy compile these dynamic imports in development, only compile them when the module is really executed. Lazy compilation can really speedup the compiling of a large project."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Lazy Compilation are always disabled for production build.")),(0,o.kt)("p",null,"Note that it is important to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"dynamic import")," properly to make ",(0,o.kt)("inlineCode",{parentName:"p"},"lazy compilation")," work better. For example, if one of your page has a big dependencies, but this dependencies won't be used until this page rendered, then it is necessary to make sure that this big dependencies are dynamic imported, so it won't be compiled util the page rendered."),(0,o.kt)("h2",{id:"configuring-lazy-compilation"},"Configuring Lazy Compilation"),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"compilation.lazyCompilation")," to enable or disable it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="farm.config.ts"',title:'"farm.config.ts"'},"export default {\n   compilation: {\n     lazyCompilation: true,\n   },\n};\n")),(0,o.kt)("h2",{id:"how-lazy-compilation-work"},"How Lazy Compilation Work"),(0,o.kt)("p",null,"When lazy compilation is enabled, Farm will analyze all of your ",(0,o.kt)("inlineCode",{parentName:"p"},"dynamic import")," first, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const page = React.lazy(() => import('./page'));\n")),(0,o.kt)("p",null,"Farm will treat ",(0,o.kt)("inlineCode",{parentName:"p"},"./page")," as a module that should be lazy compiled and won't compile it, instead, Farm will return a virtual placeholder module for ",(0,o.kt)("inlineCode",{parentName:"p"},"./page")," like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// ... other actions\nconst compilingModules = FarmModuleSystem.compilingModules;\n// return a promise, this promise will be resolved when lazy compilation finished.\nlet promise = Promise.resolve();\n\n// it has lazy been lazy compiling\nif (compilingModules.has(modulePath)) {\n  promise = promise.then(() => compilingModules.get(modulePath));\n} else {\n  // request the dev server for lazy compilation\n  const url = '/__lazy_compile?paths=' + paths.join(',') + `&t=${Date.now()}`;\n  promise = import(url).then((module: any) => {\n      const result: LazyCompileResult = module.default;\n      // ...\n  });\n  // ... more actions\n}\n\nexport const __farm_async = true;\nexport default promise;\n")),(0,o.kt)("p",null,"Above example illustrated a basic structure of that virtual placeholder module. When the placeholder executed, it will request the dev server to compile this module and its dependencies. After getting the lazy compiled result from dev server, the placeholder module will patch these changes to Farm's runtime module system."))}u.isMDXComponent=!0}}]);