"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[6213],{9613:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(9496);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=t.createContext({}),p=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(u.Provider,{value:n},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(r),g=i,m=s["".concat(u,".").concat(g)]||s[g]||f[g]||o;return r?t.createElement(m,a(a({ref:n},c),{},{components:r})):t.createElement(m,a({ref:n},c))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=g;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7825:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=r(1163),i=(r(9496),r(9613));const o={},a="Overview",l={unversionedId:"plugins/overview",id:"plugins/overview",title:"Overview",description:"To use a Rust plugin, configuring plugins in farm.config.ts.",source:"@site/docs/plugins/overview.md",sourceDirName:"plugins",slug:"/plugins/overview",permalink:"/docs/plugins/overview",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/docs/plugins/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",next:{title:"Rust Plugins",permalink:"/docs/plugins/rust-plugin"}},u={},p=[],c={toc:p},s="wrapper";function f(e){let{components:n,...r}=e;return(0,i.kt)(s,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"To use a Rust plugin, configuring ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"farm.config.ts"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { defineFarmConfig } from '@farmfe/core/dist/config';\n\ndefineFarmConfig({\n  // ...\n  plugins: [\n    { /*..*/ }, // Js plugin, a object with hook defined\n    '@farmfe/plugin-react', // rust plugin package name\n  ]\n})\n\n")),(0,i.kt)("p",null,"Farm support both rust plugins and js plugins:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/plugins/rust-plugin"},"Rust Plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/plugins/js-plugin"},"Js plugin"))))}f.isMDXComponent=!0}}]);