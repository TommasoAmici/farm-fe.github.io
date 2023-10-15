"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[3299],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=m(n),d=a,f=s["".concat(p,".").concat(d)]||s[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(1163),a=(n(9496),n(9613));const i={},o="1. \u521b\u5efa\u4e00\u4e2a\u9879\u76ee",l={unversionedId:"tutorials/create",id:"tutorials/create",title:"1. \u521b\u5efa\u4e00\u4e2a\u9879\u76ee",description:"\u5728\u672c\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u4ece\u5934\u5f00\u59cb\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Farm React \u9879\u76ee\uff0c\u5e76\u4ee5\u5f00\u53d1\u6a21\u5f0f\u542f\u52a8\u5b83\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/tutorials/1-create.md",sourceDirName:"tutorials",slug:"/tutorials/create",permalink:"/zh/docs/tutorials/create",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/tutorials/1-create.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6982\u8ff0",permalink:"/zh/docs/tutorials/overview"},next:{title:"2. \u4f7f\u7528 Farm \u5f00\u53d1\u9879\u76ee",permalink:"/zh/docs/tutorials/start"}},p={},m=[{value:"\u521b\u5efa\u4e00\u4e2a Npm \u5305",id:"\u521b\u5efa\u4e00\u4e2a-npm-\u5305",level:2},{value:"\u5b89\u88c5\u4f9d\u8d56\u9879",id:"\u5b89\u88c5\u4f9d\u8d56\u9879",level:2},{value:"\u521b\u5efa Farm \u914d\u7f6e\u6587\u4ef6",id:"\u521b\u5efa-farm-\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u521b\u5efa\u4e00\u4e2a\u5165\u53e3Html\u548cJs",id:"\u521b\u5efa\u4e00\u4e2a\u5165\u53e3html\u548cjs",level:2},{value:"Start Your Farm Project!",id:"start-your-farm-project",level:2}],c={toc:m},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1-\u521b\u5efa\u4e00\u4e2a\u9879\u76ee"},"1. \u521b\u5efa\u4e00\u4e2a\u9879\u76ee"),(0,a.kt)("p",null,"\u5728\u672c\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u4ece\u5934\u5f00\u59cb\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Farm React \u9879\u76ee\uff0c\u5e76\u4ee5\u5f00\u53d1\u6a21\u5f0f\u542f\u52a8\u5b83\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm"),"\u4f5c\u4e3a\u9ed8\u8ba4\u5305\u7ba1\u7406\u5668\u3002 \u672c\u7ae0\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"\u4ece\u5934\u5f00\u59cb\u6784\u5efa Farm React \u9879\u76ee"),"\uff0c\u5982\u679c\u60a8\u60f3\u5feb\u901f\u542f\u52a8\u4e00\u4e2a\u65b0\u7684 Farm \u9879\u76ee\uff0c\u8bf7\u4f7f\u7528\u6211\u4eec\u7684\u5b98\u65b9\u6a21\u677f\u548c\u547d\u4ee4",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm create farm"),"\u3002")),(0,a.kt)("h2",{id:"\u521b\u5efa\u4e00\u4e2a-npm-\u5305"},"\u521b\u5efa\u4e00\u4e2a Npm \u5305"),(0,a.kt)("p",null,"\u9996\u5148\u6211\u4eec\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm init"),"\u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u5305\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir farm-react && cd farm-react && pnpm init\n")),(0,a.kt)("p",null,"\u5c06\u81ea\u52a8\u751f\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"\u6587\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56\u9879"},"\u5b89\u88c5\u4f9d\u8d56\u9879"),(0,a.kt)("p",null,"\u5b89\u88c5\u5fc5\u8981\u7684\u4f9d\u8d56\u9879(react \u4ee5\u53ca react-dom:)\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add react react-dom && pnpm add react-refresh @types/react @types/react-dom -D\n")),(0,a.kt)("p",null,"\u7136\u540e\u5b89\u88c5 Farm \u76f8\u5173\u4f9d\u8d56:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add -D @farmfe/cli @farmfe/core @farmfe/plugin-react\n")),(0,a.kt)("p",null,"React \u9879\u76ee\u9700\u8981 3 \u4e2a\u5305\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"@farmfe/cli")),"\uff1a\u8be5\u5305\u63d0\u4f9b\u4e86",(0,a.kt)("inlineCode",{parentName:"li"},"farm start"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"farm build"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"farm Preview"),"\u7b49\u547d\u4ee4\uff0c\u5fc5\u987b\u4e0e",(0,a.kt)("inlineCode",{parentName:"li"},"@farmfe/core"),"\u4e00\u8d77\u4f7f\u7528\uff0c\u4e0d\u80fd\u5355\u72ec\u4f7f\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"@farmfe/core")),"\uff1a\u8be5\u8f6f\u4ef6\u5305\u63d0\u4f9b",(0,a.kt)("inlineCode",{parentName:"li"},"\u7f16\u8bd1"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"Dev Server"),"\uff0c\u4e3a\u672c\u5730\u5f00\u53d1\u548c\u4ea7\u54c1\u6784\u5efa\u63d0\u4f9b\u6240\u6709\u5fc5\u8981\u7684\u7ec4\u4ef6\u3002 \u5b83\u5bfc\u51fa",(0,a.kt)("inlineCode",{parentName:"li"},"Compiler"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"DevServer"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"Watcher"),"\uff0c\u7528\u4e8e",(0,a.kt)("inlineCode",{parentName:"li"},"\u7f16\u8bd1\u9879\u76ee"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"\u4ee5\u5f00\u53d1\u6a21\u5f0f\u670d\u52a1\u9879\u76ee"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"\u76d1\u89c6\u9879\u76ee\u7684\u70ed\u6a21\u5757\u66ff\u6362"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"@farmfe/plugin-react")),"\uff1a\u6b64\u5305\u63d0\u4f9b React Jsx \u7f16\u8bd1\u548c React-refresh \u652f\u6301\u3002")),(0,a.kt)("h2",{id:"\u521b\u5efa-farm-\u914d\u7f6e\u6587\u4ef6"},"\u521b\u5efa Farm \u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"farm.config.ts"),"\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:"{2}","{2}":!0},".\n\u251c\u2500\u2500 farm.config.ts\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 pnpm-lock.yaml\n")),(0,a.kt)("p",null,"\u5e76\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { UserConfig } from '@farmfe/core';\n\nfunction defineConfig(config: UserConfig): UserConfig {\n  return config;\n}\n\nexport default defineConfig({\n  compilation: {\n    input: {\n      index: './src/index.html'\n    },\n    output: {\n      path: 'build',\n      publicPath: '/',\n      targetEnv: 'browser'\n    }\n  },\n  plugins: [\n    '@farmfe/plugin-react',\n  ]\n});\n")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4e0a\u9762\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u6211\u4eec\u4f7f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"input"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"output"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"plugins"),"\uff0c\u8fd9\u662fFarm\u4e2d\u6700\u57fa\u672c\u7684\u914d\u7f6e\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"input")),"\uff1a\u914d\u7f6e\u5165\u53e3\u70b9\u3002 Farm \u5c06\u6839\u636e\u6761\u76ee\u7f16\u8bd1\u5e76\u6784\u5efa\u6a21\u5757\u56fe\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u8f93\u51fa")),"\uff1a\u914d\u7f6e\u8f93\u51fa\u76ee\u5f55\u3001\u6587\u4ef6\u540d\u7b49\u3002 \u6709\u5173\u5b8c\u6574\u9009\u9879\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"li",href:"/docs/config/farm-config#output"},"compilation.output"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"plugins")),"\uff1a\u914d\u7f6efarm\u63d2\u4ef6\uff0cReact\u3001Vue SFC\u7b49\u6240\u6709\u6269\u5c55\u80fd\u529b\u5747\u7531\u63d2\u4ef6\u652f\u6301\u3002 \u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u4e00\u4e2a Rust \u63d2\u4ef6\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"@farmfe/plugin-react"),"\uff09\u6765\u652f\u6301\u7f16\u8bd1 React jsx\u3002")),(0,a.kt)("p",null,"\u67e5\u9605",(0,a.kt)("a",{parentName:"p",href:"/docs/config/farm-config"},"\u914d\u7f6e\u53c2\u8003"),"\u4ee5\u83b7\u53d6\u66f4\u591a\u9009\u9879\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5c06 input \u914d\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"index: './src/index.html'"),"\uff0c\u5982\u679c\u6211\u4eec\u4e0d\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"input"),"\uff0c\u5219\u9ed8\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"index: './index.html'"),"\u3002 \u5e76\u4e14\u6211\u4eec\u53ef\u4ee5\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"input"),"\u4e2d\u914d\u7f6e\u591a\u4e2a\u6761\u76ee\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"p",href:"/docs/features/html#multi-page-app"},"\u591a\u9875\u9762\u5e94\u7528"))),(0,a.kt)("h2",{id:"\u521b\u5efa\u4e00\u4e2a\u5165\u53e3html\u548cjs"},"\u521b\u5efa\u4e00\u4e2a\u5165\u53e3Html\u548cJs"),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa 2 \u4e2a\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.html")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.tsx"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:"{5-7}","{5-7}":!0},".\n\u251c\u2500\u2500 farm.config.ts\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 pnpm-lock.yaml\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 index.html\n    \u2514\u2500\u2500 index.tsx\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"src/index.html")," \u7684\u5185\u5bb9\u662f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n<body>\n  <div id="root"></div>\n  \x3c!-- we must use script to make ./index.tsx as a dependency --\x3e\n  <script src="./index.tsx"><\/script>\n</body>\n</html>\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u8bf7\u6ce8\u610f\uff0c\u6211\u4eec\u5fc5\u987b\u6dfb\u52a0\u81f3\u5c11\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"<script>"),"\u6765\u5f15\u7528\u811a\u672c\u6a21\u5757\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"src/index.tsx")," \u7684\u5185\u5bb9\u662f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},"import React from 'react';\nimport { createRoot } from 'react-dom/client';\n\nconst container = document.querySelector('#root');\nconst root = createRoot(container);\n\nroot.render(<div>A React Page compiled by Farm</div>);\n")),(0,a.kt)("h2",{id:"start-your-farm-project"},"Start Your Farm Project!"),(0,a.kt)("p",null,"\u73b0\u5728\u4e00\u5207\u90fd\u51c6\u5907\u597d\u4e86\uff0c\u5c06\u542f\u52a8\u811a\u672c\u6dfb\u52a0\u5230\u60a8\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"\u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json" {6}',title:'"package.json"',"{6}":!0},'{\n  "name": "1-create-a-project",\n  "version": "1.0.0",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n    "start": "farm start"\n  },\n  // ... ignore other fields \n}\n')),(0,a.kt)("p",null,"\u7136\u540e\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"npm start"),"\uff0c\u5982\u679c Farm \u8f93\u51fa\u4ee5\u4e0b\u6d88\u606f\uff0c\u5219\u610f\u5473\u7740\u60a8\u7684\u9879\u76ee\u5df2\u6210\u529f\u542f\u52a8\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"$ npm start\n\n> 1-create-a-project@1.0.0 start\n> farm start\n\n[ Farm ] Using config file at /home/tutorials/1-create-a-project/farm.config.ts\n\n   \u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e\n   \u2502                                                  \u2502\n   \u2502              _____ _    ____  __  __             \u2502\n   \u2502             |  ___/ \\  |  _ \\|  \\/  |            \u2502\n   \u2502             | |_ / _ \\ | |_) | |\\/| |            \u2502\n   \u2502             |  _/ ___ \\|  _ <| |  | |            \u2502\n   \u2502             |_|/_/   \\_\\_| \\_\\_|  |_|            \u2502\n   \u2502                                                  \u2502\n   \u2502                   Version 0.11.0                 \u2502\n   \u2502                                                  \u2502\n   \u2502     \ud83d\udd25 Ready on http://localhost:9000 in 61ms.   \u2502\n   \u2502                                                  \u2502\n   \u2502                                                  \u2502\n   \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f\n\n[ Farm ] HMR enabled, watching for file changes under /home/tutorials/1-create-a-project\n")),(0,a.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:9000"),"\u3002"))}u.isMDXComponent=!0}}]);