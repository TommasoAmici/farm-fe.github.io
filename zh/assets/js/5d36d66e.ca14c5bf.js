"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[5042],{7579:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>u,metadata:()=>r,toc:()=>o});var s=e(6070),l=e(5710);const u={},t="\u793e\u533a\u63d2\u4ef6",r={id:"plugins/community-plugins",title:"\u793e\u533a\u63d2\u4ef6",description:"Farm Plugins",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plugins/community-plugins.md",sourceDirName:"plugins",slug:"/plugins/community-plugins",permalink:"/zh/docs/plugins/community-plugins",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/community-plugins.md",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"@farmfe/js-plugin-dts",permalink:"/zh/docs/plugins/official-plugins/js-dts"},next:{title:"\u6982\u89c8",permalink:"/zh/docs/plugins/writing-plugins/overview"}},c={},o=[{value:"Farm Plugins",id:"farm-plugins",level:2},{value:"Vite/Rollup Plugins",id:"viterollup-plugins",level:2},{value:"unplugin",id:"unplugin",level:2}];function p(n){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"\u793e\u533a\u63d2\u4ef6",children:"\u793e\u533a\u63d2\u4ef6"}),"\n",(0,s.jsx)(i.h2,{id:"farm-plugins",children:"Farm Plugins"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://github.com/CCherry07/farm-pulgin-strip",children:"farm-pulgin-strip"}),": \u4e00\u4e2a Farm Rust \u63d2\u4ef6\uff0c\u7528\u4e8e\u4ece\u4ee3\u7801\u4e2d\u5220\u9664 debugger \u8bed\u53e5\u548c\u51fd\u6570\uff0c\u4f8b\u5982 assert.equal \u548c console.log \u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"viterollup-plugins",children:"Vite/Rollup Plugins"}),"\n",(0,s.jsxs)(i.p,{children:["Farm\u652f\u6301 ",(0,s.jsx)(i.code,{children:"Vite/Rollup"})," \u63d2\u4ef6\u5f00\u7bb1\u5373\u7528\u3002\u6240\u4ee5",(0,s.jsx)(i.code,{children:"Vite/Rollup"}),"\u6216",(0,s.jsx)(i.code,{children:"unplugin"}),"\u63d2\u4ef6\u53ef\u4ee5\u76f4\u63a5\u5728Farm\u4e2d\u4f7f\u7528\u3002"]}),"\n",(0,s.jsx)(i.admonition,{type:"tip",children:(0,s.jsx)(i.p,{children:"\u5982\u679c\u60a8\u5f00\u53d1\u4e86\u517c\u5bb9 Farm \u7684\u63d2\u4ef6\u5e76\u4e14\u60f3\u5728\u6b64\u5904\u5217\u51fa\uff0c\u6b22\u8fce PR\u3002"})}),"\n",(0,s.jsxs)(i.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(i.code,{children:"farm.config.ts"})," \u4e2d\u7684 ",(0,s.jsx)(i.code,{children:"vitePlugins"})," \u6765\u914d\u7f6e ",(0,s.jsx)(i.code,{children:"Vite/Rollup"})," \u63d2\u4ef6\u3002"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",children:"import { UserConfig } from '@farmfe/core';\nimport vue from '@vitejs/plugin-vue';\nimport vueJsx from '@vitejs/plugin-vue-jsx';\n\nconst config: UserConfig = {\n  vitePlugins: [\n    vue(),\n    vueJsx(),\n  ]\n}\n"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.a,{href:"https://github.com/vitejs/vite-plugin-vue/blob/main/packages/plugin-vue/README.md",children:(0,s.jsx)(i.code,{children:"@vitejs/plugin-vue"})})}),": Vue \u652f\u6301."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.a,{href:"https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx",children:(0,s.jsx)(i.code,{children:"@vitejs/plugin-vue-jsx"})})}),": Vue Jsx/Tsx \u652f\u6301."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.a,{href:"https://www.npmjs.com/package/vite-plugin-solid",children:(0,s.jsx)(i.code,{children:"vite-plugin-solid"})})}),": Solid \u652f\u6301"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.a,{href:"https://www.npmjs.com/package/vite-plugin-solid",children:(0,s.jsx)(i.code,{children:"vite-plugin-mock"})})}),": Mock \u6570\u636e."]}),"\n",(0,s.jsx)(i.li,{children:"..."}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"unplugin",children:"unplugin"}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsxs)(i.p,{children:["\u76ee\u524d\uff0c\u60a8\u53ef\u4ee5\u5728 Farm \u4e2d\u4f7f\u7528\u201cunplugin/vite\u201d\u8fdb\u884c\u201cunplugin/rollup\u201d\u3002 \u5f53",(0,s.jsx)(i.a,{href:"https://github.com/unjs/unplugin/pull/341",children:"\u6b64 PR"})," \u5408\u5e76\u5230 unplugin \u65f6\uff0c",(0,s.jsx)(i.code,{children:"unplugin/farm"})," \u5c06\u53ef\u7528\u3002"]})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",children:"import Icons from 'unplugin-icons/vite';\nimport IconsResolver from 'unplugin-icons/resolver';\nimport Components from 'unplugin-vue-components/rollup';\nimport { NaiveUiResolver } from 'unplugin-vue-components/resolvers';\nimport { FileSystemIconLoader } from 'unplugin-icons/loaders';\n\nconst config: UserConfig = {\n  vitePlugins: [\n    Icons({\n      compiler: 'vue3',\n      customCollections: {\n        [collectionName]: FileSystemIconLoader(localIconPath, svg =>\n          svg.replace(/^<svg\\s/, '<svg width=\"1em\" height=\"1em\" ')\n        )\n      },\n      scale: 1,\n      defaultClass: 'inline-block'\n    }),\n    Components({\n      dts: 'src/typings/components.d.ts',\n      types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],\n      resolvers: [\n        NaiveUiResolver(),\n        IconsResolver({ customCollections: [collectionName], componentPrefix: VITE_ICON_PREFIX })\n      ]\n    })\n  ]\n}\n"})}),"\n",(0,s.jsx)(i.p,{children:"Farm \u652f\u6301\u6240\u6709 unplugin \u63d2\u4ef6:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/antfu/unplugin-auto-import",children:"unplugin-auto-import"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/antfu/unplugin-vue2-script-setup",children:"unplugin-vue2-script-setup"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/antfu/unplugin-icons",children:"unplugin-icons"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/antfu/unplugin-vue-components",children:"unplugin-vue-components"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/zenotsai/unplugin-upload-cdn",children:"unplugin-upload-cdn"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/jwr12135/unplugin-web-ext",children:"unplugin-web-ext"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/pd4d10/unplugin-properties",children:"unplugin-properties"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/1247748612/unplugin-moment-to-dayjs",children:"unplugin-moment-to-dayjs"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/m0ksem/unplugin-object-3d",children:"unplugin-object-3d"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/ssssota/unplugin-parcel-css",children:"unplugin-parcel-css"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/sxzz/unplugin-vue",children:"unplugin-vue"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/sxzz/unplugin-vue-macros",children:"unplugin-vue-macros"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/sxzz/unplugin-vue-macros/tree/main/packages/define-options",children:"unplugin-vue-define-options"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/sxzz/unplugin-jsx-string",children:"unplugin-jsx-string"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/sxzz/unplugin-ast",children:"unplugin-ast"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/element-plus/unplugin-element-plus",children:"unplugin-element-plus"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/sxzz/unplugin-glob",children:"unplugin-glob"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/kricsleo/unplugin-sentry",children:"unplugin-sentry"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/ErKeLost/unplugin-imagemin",children:"unplugin-imagemin"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/ssssota/typedotenv",children:"unplugin-typedotenv"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/cssninjaStudio/unplugin-fonts",children:"unplugin-fonts"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/getsentry/sentry-javascript-bundler-plugins",children:"sentry-javascript-bundler-plugins"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/Jevon617/unplugin-svg-component",children:"unplugin-svg-component"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/baiwusanyu-c/unplugin-vue-cssvars",children:"unplugin-vue-cssvars"})}),"\n"]})]})}function h(n={}){const{wrapper:i}={...(0,l.R)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},5710:(n,i,e)=>{e.d(i,{R:()=>t,x:()=>r});var s=e(758);const l={},u=s.createContext(l);function t(n){const i=s.useContext(u);return s.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function r(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),s.createElement(u.Provider,{value:i},n.children)}}}]);