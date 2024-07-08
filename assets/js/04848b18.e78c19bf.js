"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[8682],{1338:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var t=n(6070),r=n(5710),l=n(2),o=n(8088),a=n(8312);const i={},c="@farmfe/js-plugin-postcss",u={id:"plugins/official-plugins/js-postcss",title:"@farmfe/js-plugin-postcss",description:"Support postcss for Farm.",source:"@site/docs/plugins/official-plugins/js-postcss.mdx",sourceDirName:"plugins/official-plugins",slug:"/plugins/official-plugins/js-postcss",permalink:"/docs/plugins/official-plugins/js-postcss",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/official-plugins/js-postcss.mdx",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"@farmfe/plugin-react-components",permalink:"/docs/plugins/official-plugins/react-components"},next:{title:"@farmfe/js-plugin-less",permalink:"/docs/plugins/official-plugins/js-less"}},d={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"postcssLoadConfig",id:"postcssloadconfig",level:3},{value:"filters",id:"filters",level:3},{value:"implementation",id:"implementation",level:3}];function f(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"farmfejs-plugin-postcss",children:"@farmfe/js-plugin-postcss"}),"\n",(0,t.jsxs)(s.p,{children:["Support ",(0,t.jsx)(s.code,{children:"postcss"})," for Farm."]}),"\n",(0,t.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsx)(a.A,{value:"npm",label:"npm",children:(0,t.jsx)(l.A,{children:"npm install @farmfe/js-plugin-postcss postcss"})}),(0,t.jsx)(a.A,{value:"yarn",label:"yarn",children:(0,t.jsx)(l.A,{children:"yarn add @farmfe/js-plugin-postcss postcss"})}),(0,t.jsx)(a.A,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(l.A,{children:"pnpm add @farmfe/js-plugin-postcss postcss"})})]}),"\n",(0,t.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",metastring:"{2,6}",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginPostcss from '@farmfe/js-plugin-postcss';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginPostcss({ /* options */ })\n  ]\n}\n"})}),"\n",(0,t.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"export type PostcssPluginOptions = {\n  /**\n   * @default undefined\n   * postcss-load-config options. path default to farm.config.js root.\n   */\n  postcssLoadConfig?: {\n    ctx?: postcssLoadConfig.ConfigContext;\n    path?: string;\n    options?: Parameters<typeof postcssLoadConfig>[2];\n  };\n  filters?: {\n    resolvedPaths?: string[];\n    moduleTypes?: string[];\n  };\n  implementation?: string;\n};\n\n"})}),"\n",(0,t.jsx)(s.h3,{id:"postcssloadconfig",children:"postcssLoadConfig"}),"\n",(0,t.jsxs)(s.p,{children:["Farm uses ",(0,t.jsx)(s.code,{children:"postcss-load-config"})," to load ",(0,t.jsx)(s.code,{children:"postcss"})," config, so you can use ",(0,t.jsx)(s.code,{children:"postcss-load-config"}),"'s options. Refer to ",(0,t.jsx)(s.a,{href:"https://github.com/postcss/postcss-load-config",children:"postcss-load-config"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Example:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"import path from 'node:path';\nimport { UserConfig } from '@farmfe/core';\nimport farmJsPluginPostcss from '@farmfe/js-plugin-postcss';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginPostcss({\n      postcssLoadConfig: {\n        // load config from client/postcss.config.js\n        path: path.join(process.cwd(), 'client')\n      }\n    })\n  ]\n}\n\nexport default config;\n"})}),"\n",(0,t.jsx)(s.h3,{id:"filters",children:"filters"}),"\n",(0,t.jsxs)(s.p,{children:["Which files should be processed by ",(0,t.jsx)(s.code,{children:"postcss"}),". default to ",(0,t.jsx)(s.code,{children:"{ moduleTypes: ['css'] }"}),"."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"resolvedPaths"}),": Only files under these paths will be processed. Support regex."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"moduleTypes"}),": Only files with these module types will be processed. note that less/sass files should be processed by ",(0,t.jsx)(s.code,{children:"@farmfe/js-plugin-less"}),"/",(0,t.jsx)(s.code,{children:"@farmfe/plugin-sass"})," first."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"resolvedPaths"})," and ",(0,t.jsx)(s.code,{children:"moduleTypes"})," are unioned, which means files match any of them will be processed."]}),"\n",(0,t.jsx)(s.p,{children:"Example:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginPostcss from '@farmfe/js-plugin-postcss';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginPostcss({\n      filters: {\n        // all files end with .custom-css will be processed\n        resolvedPaths: ['\\\\.custom-css$'],\n        moduleTypes: ['css']\n      }\n    })\n  ]\n}\n\nexport default config;\n"})}),"\n",(0,t.jsx)(s.h3,{id:"implementation",children:"implementation"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"implementation"})," package name of ",(0,t.jsx)(s.code,{children:"postcss"}),". Default to ",(0,t.jsx)(s.code,{children:"postcss"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},8312:(e,s,n)=>{n.d(s,{A:()=>o});n(758);var t=n(3526);const r={tabItem:"tabItem_nyGA"};var l=n(6070);function o(e){let{children:s,hidden:n,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,o),hidden:n,children:s})}},8088:(e,s,n)=>{n.d(s,{A:()=>w});var t=n(758),r=n(3526),l=n(6217),o=n(5557),a=n(8732),i=n(5602),c=n(3195),u=n(8559);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:s,children:n}=e;return(0,t.useMemo)((()=>{const e=s??function(e){return d(e).map((e=>{let{props:{value:s,label:n,attributes:t,default:r}}=e;return{value:s,label:n,attributes:t,default:r}}))}(n);return function(e){const s=(0,c.X)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function f(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function h(e){let{queryString:s=!1,groupId:n}=e;const r=(0,o.W6)(),l=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,i.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const s=new URLSearchParams(r.location.search);s.set(l,e),r.replace({...r.location,search:s.toString()})}),[l,r])]}function m(e){const{defaultValue:s,queryString:n=!1,groupId:r}=e,l=p(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!f({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:l}))),[c,d]=h({queryString:n,groupId:r}),[m,g]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,l]=(0,u.Dv)(n);return[r,(0,t.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),j=(()=>{const e=c??m;return f({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{j&&i(j)}),[j]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=n(4392);const j={tabList:"tabList_pjAH",tabItem:"tabItem_R1Oe"};var b=n(6070);function x(e){let{className:s,block:n,selectedValue:t,selectValue:o,tabValues:a}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const s=e.currentTarget,n=i.indexOf(s),r=a[n].value;r!==t&&(c(s),o(r))},d=e=>{let s=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;s=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;s=i[n]??i[i.length-1];break}}s?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},s),children:a.map((e=>{let{value:s,label:n,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,r.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":t===s}),children:n??s},s)}))})}function v(e){let{lazy:s,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function y(e){const s=m(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,b.jsx)(x,{...s,...e}),(0,b.jsx)(v,{...s,...e})]})}function w(e){const s=(0,g.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(s))}}}]);