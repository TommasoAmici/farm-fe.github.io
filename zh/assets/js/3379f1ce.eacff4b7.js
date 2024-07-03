"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[9378],{8491:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(6070),t=n(5710),l=n(2778),i=n(6092),u=n(1254);const s={},o="@farmfe/plugin-virtual",c={id:"plugins/official-plugins/virtual",title:"@farmfe/plugin-virtual",description:"\u53d7 @rollup/plugin-virtual \u542f\u53d1",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plugins/official-plugins/virtual.mdx",sourceDirName:"plugins/official-plugins",slug:"/plugins/official-plugins/virtual",permalink:"/zh/docs/plugins/official-plugins/virtual",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/official-plugins/virtual.mdx",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"@farmfe/plugin-yaml",permalink:"/zh/docs/plugins/official-plugins/yaml"},next:{title:"@farmfe/plugin-react-components",permalink:"/zh/docs/plugins/official-plugins/react-components"}},d={},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}];function f(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h1,{id:"farmfeplugin-virtual",children:"@farmfe/plugin-virtual"}),"\n",(0,a.jsxs)(r.p,{children:["\u53d7 ",(0,a.jsx)(r.a,{href:"https://www.npmjs.com/package/@rollup/plugin-virtual",children:"@rollup/plugin-virtual"})," \u542f\u53d1"]}),"\n",(0,a.jsx)(r.p,{children:"\u4e00\u4e2a\u4e3afarm\u6253\u9020\u7684rust\u63d2\u4ef6\uff0c\u7528\u4e8e\u8f7b\u677e\u4f7f\u7528\u865a\u62df\u6a21\u5757"}),"\n",(0,a.jsx)(r.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(u.A,{value:"npm",label:"npm",children:(0,a.jsx)(l.A,{children:"npm install @farmfe/plugin-virtual"})}),(0,a.jsx)(u.A,{value:"yarn",label:"yarn",children:(0,a.jsx)(l.A,{children:"yarn add @farmfe/plugin-virtual"})}),(0,a.jsx)(u.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(l.A,{children:"pnpm add @farmfe/plugin-virtual"})})]}),"\n",(0,a.jsx)(r.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,a.jsx)(r.p,{children:"farm.config.ts"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-typescript",children:"import { defineConfig } from '@farmfe/core';\n\nexport default defineConfig({\n  plugins: [\n    [\n      '@farmfe/plugin-virtual',\n      {\n        'virtual-module': 'export const a = 1',\n        'src/01.js': 'export const module01 = \"virtual-module\"',\n      },\n    ],\n  ],\n});\n"})}),"\n",(0,a.jsx)(r.p,{children:"index.js"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-javascript",children:"import { a } from 'virtual-module';\n"})}),"\n",(0,a.jsx)(r.p,{children:"src/02.js"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-javascript",children:"import { module01 } from './01.js';\n"})}),"\n",(0,a.jsxs)(r.p,{children:["\u8fd9\u4e2a ",(0,a.jsx)(r.code,{children:"@farmfe/plugin-virtual"})," \u63d2\u4ef6\u5141\u8bb8\u4f60\u5b9a\u4e49\u865a\u62df\u6a21\u5757\uff0c\u8fd9\u4e9b\u6a21\u5757\u5e76\u4e0d\u5bf9\u5e94\u4efb\u4f55\u5b9e\u9645\u7684\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u6587\u4ef6\uff0c\u4f46\u53ef\u4ee5\u50cf\u666e\u901a\u6a21\u5757\u4e00\u6837\u88ab\u5bfc\u5165\u548c\u4f7f\u7528\u3002\u8fd9\u5728\u6a21\u62df\u7b2c\u4e09\u65b9\u5e93\u3001\u73af\u5883\u53d8\u91cf\u6216\u4efb\u4f55\u4e0d\u4fbf\u4e8e\u76f4\u63a5\u653e\u5728\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u6570\u636e\u65f6\u7279\u522b\u6709\u7528\u3002"]}),"\n",(0,a.jsxs)(r.p,{children:["\u901a\u8fc7\u5728 ",(0,a.jsx)(r.code,{children:"farm.config.ts"})," \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 ",(0,a.jsx)(r.code,{children:"plugins"})," \u6570\u7ec4\u4e2d\u6ce8\u518c\u63d2\u4ef6\u5e76\u914d\u7f6e\u865a\u62df\u6a21\u5757\uff0c\u4f60\u53ef\u4ee5\u5728\u9879\u76ee\u4e2d\u7684\u4efb\u4f55\u5730\u65b9\u901a\u8fc7\u6307\u5b9a\u7684\u6a21\u5757\u540d\u6765\u5bfc\u5165\u8fd9\u4e9b\u865a\u62df\u6a21\u5757\u3002\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,a.jsx)(r.code,{children:"virtual-module"})," \u7684\u865a\u62df\u6a21\u5757\uff0c\u5b83\u5bfc\u51fa\u4e86\u4e00\u4e2a\u5e38\u91cf ",(0,a.jsx)(r.code,{children:"a"}),"\uff0c\u4ee5\u53ca\u53e6\u4e00\u4e2a\u540d\u4e3a ",(0,a.jsx)(r.code,{children:"src/01.js"})," \u7684\u865a\u62df\u6a21\u5757\uff0c\u5b83\u5bfc\u51fa\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,a.jsx)(r.code,{children:"module01"})," \u7684\u53d8\u91cf\u3002\u8fd9\u4e9b\u6a21\u5757\u968f\u540e\u53ef\u4ee5\u5728\u9879\u76ee\u4e2d\u7684\u4efb\u4f55\u5730\u65b9\u88ab\u5bfc\u5165\u548c\u4f7f\u7528\uff0c\u5c31\u50cf\u5b83\u4eec\u662f\u5b9e\u9645\u5b58\u5728\u4e8e\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u4e00\u6837\u3002"]})]})}function m(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},1254:(e,r,n)=>{n.d(r,{A:()=>i});n(758);var a=n(3526);const t={tabItem:"tabItem_PaXs"};var l=n(6070);function i(e){let{children:r,hidden:n,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,i),hidden:n,children:r})}},6092:(e,r,n)=>{n.d(r,{A:()=>w});var a=n(758),t=n(3526),l=n(1329),i=n(5557),u=n(3584),s=n(5290),o=n(1219),c=n(433);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:n}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:a,default:t}}=e;return{value:r,label:n,attributes:a,default:t}}))}(n);return function(e){const r=(0,o.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function f(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const t=(0,i.W6)(),l=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,s.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(t.location.search);r.set(l,e),t.replace({...t.location,search:r.toString()})}),[l,t])]}function h(e){const{defaultValue:r,queryString:n=!1,groupId:t}=e,l=p(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:l}))),[o,d]=m({queryString:n,groupId:t}),[h,g]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,l]=(0,c.Dv)(n);return[t,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:t}),v=(()=>{const e=o??h;return f({value:e,tabValues:l})?e:null})();(0,u.A)((()=>{v&&s(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=n(60);const v={tabList:"tabList_J1qD",tabItem:"tabItem_LY8c"};var b=n(6070);function x(e){let{className:r,block:n,selectedValue:a,selectValue:i,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),c=e=>{const r=e.currentTarget,n=s.indexOf(r),t=u[n].value;t!==a&&(o(r),i(t))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;r=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;r=s[n]??s[s.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},r),children:u.map((e=>{let{value:r,label:n,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>s.push(e),onKeyDown:d,onClick:c,...l,className:(0,t.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":a===r}),children:n??r},r)}))})}function j(e){let{lazy:r,children:n,selectedValue:t}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==t})))})}function y(e){const r=h(e);return(0,b.jsxs)("div",{className:(0,t.A)("tabs-container",v.tabList),children:[(0,b.jsx)(x,{...e,...r}),(0,b.jsx)(j,{...e,...r})]})}function w(e){const r=(0,g.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(r))}}}]);