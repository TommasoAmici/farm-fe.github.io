"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[7670],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,g=u["".concat(p,".").concat(m)]||u[m]||f[m]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(1163),o=(n(9496),n(9613));const i={},a="Script",s={unversionedId:"features/script",id:"features/script",title:"Script",description:"Farm support compiling Js/Jsx/Ts/Tsx out of box, and compile Jsx/Tsx to React by default.",source:"@site/docs/features/script.md",sourceDirName:"features",slug:"/features/script",permalink:"/docs/features/script",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/features/script.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Css",permalink:"/docs/features/css"},next:{title:"Static Assets",permalink:"/docs/features/static"}},p={},l=[{value:"Configuring Swc Parser",id:"configuring-swc-parser",level:2},{value:"Configuring Target",id:"configuring-target",level:2},{value:"Using SWC Plugins",id:"using-swc-plugins",level:2}],c={toc:l},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"script"},"Script"),(0,o.kt)("p",null,"Farm support compiling ",(0,o.kt)("inlineCode",{parentName:"p"},"Js/Jsx/Ts/Tsx")," out of box, and compile ",(0,o.kt)("inlineCode",{parentName:"p"},"Jsx/Tsx")," to React by default."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="./button.tsx"',title:'"./button.tsx"'},"import Button from './Button';\n\nfunction ButtonGroup(props: ButtonProps) {\n  return <div>{props.buttons.map(b => <Button>{b}</Button>)}</div>\n}\n")),(0,o.kt)("p",null,"Farm using SWC to compile scripts, and Farm has set reasonable default configurations for script compilation. Also, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"compilation.script")," to configure how to compile your script file. see ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/farm-config#compilation-options"},"compilation.script")," for details. "),(0,o.kt)("h2",{id:"configuring-swc-parser"},"Configuring Swc Parser"),(0,o.kt)("p",null,"You can configuring the SWC Parser through ",(0,o.kt)("inlineCode",{parentName:"p"},"compilation.script.parser"),". Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://swc.rs/docs/configuration/compilation#jscparser"},"https://swc.rs/docs/configuration/compilation#jscparser"),"."),(0,o.kt)("p",null,"For example, if you want to enable decorator, you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"compilation.script.parser.esConfig.decorators"),"(or tsConfig.decorators if the module is TS):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="farm.config.ts"',title:'"farm.config.ts"'},"export default {\n   compilation: {\n     script: {\n      // for .js/.jsx files\n       esConfig: {\n        decorators: true\n       },\n       // for .ts/.tsx files\n       tsConfig: {\n        decorators: true\n       }\n     }\n   },\n};\n")),(0,o.kt)("p",null,"By default Farm set ",(0,o.kt)("inlineCode",{parentName:"p"},"jsx: true")," for ",(0,o.kt)("inlineCode",{parentName:"p"},".jsx|.tsx")," files. Other field are default to SWC's defaults."),(0,o.kt)("h2",{id:"configuring-target"},"Configuring Target"),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"compilation.script.target")," to configure your target env when running your project, Farm set it default to ",(0,o.kt)("inlineCode",{parentName:"p"},"ESNext"),"."),(0,o.kt)("p",null,"This option can be used along with ",(0,o.kt)("inlineCode",{parentName:"p"},"compilation.presetEnv")," to gracefully downgrade your project for old browsers. For example, you can set target to ",(0,o.kt)("inlineCode",{parentName:"p"},"ES5")," and enable ",(0,o.kt)("inlineCode",{parentName:"p"},"presetEnv"),", then your project will be fully downgrade to ES5."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="farm.config.ts"',title:'"farm.config.ts"'},"export default {\n   compilation: {\n     script: {\n      target: 'ES5'\n     },\n     presetEnv: true,\n   },\n};\n")),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/features/polyfill"},"Polyfill")," for more about ",(0,o.kt)("inlineCode",{parentName:"p"},"presetEnv"),"."),(0,o.kt)("h2",{id:"using-swc-plugins"},"Using SWC Plugins"),(0,o.kt)("p",null,"SWC Plugins can be used directly in Farm, for example, we use ",(0,o.kt)("inlineCode",{parentName:"p"},"swc-plugin-vue-jsx")," to compiling vue jsx in Farm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="farm.config.ts"',title:'"farm.config.ts"'},"import jsPluginVue from '@farmfe/js-plugin-vue';\n\n/**\n  * @type {import('@farmfe/core').UserConfig}\n  */\nexport default {\n   compilation: {\n     script: {\n       plugins: [{\n         name: 'swc-plugin-vue-jsx',\n         options: {\n           \"transformOn\": true,\n           \"optimize\": true\n         },\n         filters: {\n           // resolvedPaths: [\".+\"]\n           moduleTypes: ['tsx', 'jsx'],\n         }\n       }]\n     }\n   },\n   plugins: [jsPluginVue()],\n};\n")),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/using-plugins#using-swc-plugins"},"Using Plugins")," for more details."))}f.isMDXComponent=!0}}]);