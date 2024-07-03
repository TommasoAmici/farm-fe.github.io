"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[4681],{177:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var s=r(6070),o=r(5710);const c={},t="Source Map",i={id:"features/sourcemap",title:"Source Map",description:"Farm \u652f\u6301 Source Map\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u81ea\u52a8\u542f\u7528\u3002 \u53ef\u4ee5\u901a\u8fc7\u9009\u9879\u542f\u7528\u6216\u7981\u7528 sourcemap\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/features/sourcemap.md",sourceDirName:"features",slug:"/features/sourcemap",permalink:"/zh/docs/features/sourcemap",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/features/sourcemap.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u61d2\u7f16\u8bd1",permalink:"/zh/docs/features/lazy-compilation"},next:{title:"\u670d\u52a1\u7aef\u6e32\u67d3 (SSR)",permalink:"/zh/docs/advanced/ssr"}},a={},d=[];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"source-map",children:"Source Map"}),"\n",(0,s.jsx)(n.p,{children:"Farm \u652f\u6301 Source Map\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u81ea\u52a8\u542f\u7528\u3002 \u53ef\u4ee5\u901a\u8fc7\u9009\u9879\u542f\u7528\u6216\u7981\u7528 sourcemap\u3002"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Farm \u9ed8\u8ba4\u4e0d\u4f1a\u4e3a node_modules \u4e0b\u7684\u6587\u4ef6\u751f\u6210 sourcemap\uff0c\u5982\u679c\u4f60\u60f3\u4e3a node_modules \u4e0b\u7684\u6587\u4ef6\u751f\u6210 sourcemap\uff0c\u8bf7\u5c06 ",(0,s.jsx)(n.code,{children:"compilation.sourcemap"})," \u914d\u7f6e\u4e3a",(0,s.jsx)(n.code,{children:"all"}),"\u3002"]})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528",(0,s.jsx)(n.code,{children:"compilation.sourcemap"}),"\u914d\u7f6e sourcemap \u751f\u6210\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"export default {\n   compilation: {\n     sourcemap: 'all', // generate sourcemap for modules under node_modules\n   },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6240\u6709\u9009\u9879\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"true"})}),"\uff1a\u53ea\u4e3a\u4e0d\u5728",(0,s.jsx)(n.code,{children:"node_modules"}),"\u4e0b\u7684\u6587\u4ef6\u751f\u6210 sourcemap\uff0c\u5e76\u751f\u6210\u5355\u72ec\u7684 sourcemap \u6587\u4ef6"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"false"})}),"\uff1a\u7981\u7528\u6e90\u6620\u5c04"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"inline"})}),"\uff1a\u53ea\u4e3a\u4e0d\u5728",(0,s.jsx)(n.code,{children:"node_modules"}),"\u4e0b\u7684\u6587\u4ef6\u751f\u6210 sourcemap\uff0c\u5e76\u5c06 sourcemap \u5185\u8054\u5230\u4ea7\u7269\u4e2d\uff0c\u4e0d\u751f\u6210\u5355\u72ec\u7684\u6587\u4ef6"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"all"})}),"\uff1a\u4e3a\u6240\u6709\u6587\u4ef6\u751f\u6210 sourcemap\uff0c\u5e76\u751f\u6210\u5355\u72ec\u7684 sourcemap \u6587\u4ef6"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"all-inline"})}),"\uff1a\u4e3a\u6240\u6709\u6587\u4ef6\u751f\u6210 sourcemap\uff0c\u5e76\u5c06 sourcemap \u5185\u8054\u5230\u4ea7\u54c1\u4e2d\uff0c\u4e0d\u751f\u6210\u5355\u72ec\u7684\u6587\u4ef6"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},5710:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>i});var s=r(758);const o={},c=s.createContext(o);function t(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);