"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[3005],{5598:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>f});var a=r(6070),t=r(5710),l=r(2778),s=r(6092),i=r(1254);const u={},o="@farmfe/plugin-react",c={id:"plugins/official-plugins/react",title:"@farmfe/plugin-react",description:"Support React Jsx and React Refresh for Farm.",source:"@site/versioned_docs/version-0.x/plugins/official-plugins/react.mdx",sourceDirName:"plugins/official-plugins",slug:"/plugins/official-plugins/react",permalink:"/docs/0.x/plugins/official-plugins/react",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/versioned_docs/version-0.x/plugins/official-plugins/react.mdx",tags:[],version:"0.x",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"Overview",permalink:"/docs/0.x/plugins/official-plugins/overview"},next:{title:"@farmfe/plugin-sass",permalink:"/docs/0.x/plugins/official-plugins/sass"}},d={},f=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"farmfeplugin-react",children:"@farmfe/plugin-react"}),"\n",(0,a.jsxs)(n.p,{children:["Support ",(0,a.jsx)(n.code,{children:"React Jsx"})," and ",(0,a.jsx)(n.code,{children:"React Refresh"})," for Farm."]}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"npm",label:"npm",children:(0,a.jsx)(l.A,{children:"npm install @farmfe/plugin-react"})}),(0,a.jsx)(i.A,{value:"yarn",label:"yarn",children:(0,a.jsx)(l.A,{children:"yarn add @farmfe/plugin-react"})}),(0,a.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(l.A,{children:"pnpm add @farmfe/plugin-react"})})]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"@farmfe/plugin-react"})," is a Rust plugin, you only need to configure its package name in ",(0,a.jsx)(n.code,{children:"plugins"})," field in ",(0,a.jsx)(n.code,{children:"farm.config.ts"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"{4}",children:"import { UserConfig } from '@farmfe/core';\n\nconst config: UserConfig = {\n  plugins: ['@farmfe/plugin-react', { /** options here */}]\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"https://swc.rs/docs/configuration/compilation#jsctransformreact",children:"SWC Transform React Options"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},1254:(e,n,r)=>{r.d(n,{A:()=>s});r(758);var a=r(3526);const t={tabItem:"tabItem_PaXs"};var l=r(6070);function s(e){let{children:n,hidden:r,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,s),hidden:r,children:n})}},6092:(e,n,r)=>{r.d(n,{A:()=>w});var a=r(758),t=r(3526),l=r(1329),s=r(5557),i=r(3584),u=r(5290),o=r(1219),c=r(433);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:r}=e;const t=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,l=f(e),[s,u]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[o,d]=h({queryString:r,groupId:t}),[m,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,c.Dv)(r);return[t,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:t}),b=(()=>{const e=o??m;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{b&&u(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=r(60);const b={tabList:"tabList_J1qD",tabItem:"tabItem_LY8c"};var v=r(6070);function x(e){let{className:n,block:r,selectedValue:a,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),c=e=>{const n=e.currentTarget,r=u.indexOf(n),t=i[r].value;t!==a&&(o(n),s(t))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>u.push(e),onKeyDown:d,onClick:c,...l,className:(0,t.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:t}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,t.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function w(e){const n=(0,g.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}}}]);