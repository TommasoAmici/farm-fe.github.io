"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[1110],{7165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var r=n(6070),a=n(5710),i=n(2778),l=n(6092),s=n(1254);const o={sidebar_position:1},c="Quick Start",u={id:"quick-start",title:"Quick Start",description:"Farm needs Node 16.18.0 and above.",source:"@site/docs/quick-start.mdx",sourceDirName:".",slug:"/quick-start",permalink:"/docs/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/quick-start.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Why Farm?",permalink:"/docs/why-farm"},next:{title:"Using Plugins",permalink:"/docs/using-plugins"}},d={},h=[{value:"Online experience",id:"online-experience",level:2},{value:"Create a Farm Project",id:"create-a-farm-project",level:2},{value:"2. Start the Project",id:"2-start-the-project",level:2},{value:"3. Configuring the Project",id:"3-configuring-the-project",level:2},{value:"4. Building the project",id:"4-building-the-project",level:2},{value:"Next Steps",id:"next-steps",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"quick-start",children:"Quick Start"}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Farm needs ",(0,r.jsx)(t.strong,{children:"Node 16.18.0 and above"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"online-experience",children:"Online experience"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://codesandbox.io/p/github/ErKeLost/react/main",children:(0,r.jsx)(t.img,{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit Farm"})})}),"\n",(0,r.jsx)(t.h2,{id:"create-a-farm-project",children:"Create a Farm Project"}),"\n",(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(l.A,{children:[(0,r.jsx)(s.A,{value:"npm",label:"npm",children:(0,r.jsx)(i.A,{children:"npm create farm@latest"})}),(0,r.jsx)(s.A,{value:"yarn",label:"yarn",children:(0,r.jsx)(i.A,{children:"yarn create farm"})}),(0,r.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(i.A,{children:"pnpm create farm"})})]})}),"\n",(0,r.jsx)(t.admonition,{title:"Then follow the prompts!",type:"note",children:(0,r.jsx)(t.p,{children:"You can also directly specify the project name and the template you want to use via additional command line options:"})}),"\n",(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(l.A,{children:[(0,r.jsx)(s.A,{value:"npm 6.x",label:"npm 6.x",children:(0,r.jsx)(i.A,{children:"npm create farm@latest my-react-app --template react"})}),(0,r.jsx)(s.A,{value:"npm 7+",label:"npm 7+",children:(0,r.jsx)(i.A,{children:"npm create farm@latest my-react-app -- --template react"})}),(0,r.jsx)(s.A,{value:"yarn",label:"yarn",children:(0,r.jsx)(i.A,{children:"yarn create farm my-react-app --template react"})}),(0,r.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(i.A,{children:"pnpm create farm my-react-app --template react"})})]})}),"\n",(0,r.jsx)(t.h2,{id:"2-start-the-project",children:"2. Start the Project"}),"\n",(0,r.jsx)(t.p,{children:"Choose the package manager you like, install dependencies, then start the project.\nThen, start the project:"}),"\n",(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(l.A,{children:[(0,r.jsx)(s.A,{value:"npm",label:"npm",children:(0,r.jsx)(i.A,{children:"cd farm-project && npm i && npm start"})}),(0,r.jsx)(s.A,{value:"yarn",label:"yarn",children:(0,r.jsx)(i.A,{children:"cd farm-project && yarn && yarn start"})}),(0,r.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(i.A,{children:"cd farm-project && pnpm i && pnpm start"})})]})}),"\n",(0,r.jsxs)(t.p,{children:["The project will start at ",(0,r.jsx)(t.code,{children:"http://localhost:9000"})," by default."]}),"\n",(0,r.jsx)(t.h2,{id:"3-configuring-the-project",children:"3. Configuring the Project"}),"\n",(0,r.jsxs)(t.p,{children:["The project is configured by ",(0,r.jsx)(t.code,{children:"farm.config.ts/js/mjs"})," file in the root directory of the project."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:'import { defineConfig } from "@farmfe/core";\n\nexport default defineConfig({\n  // Options related to the compilation\n  compilation: {\n    input: {\n      // can be a relative path or an absolute path\n      index: "./index.html",\n    },\n    output: {\n      path: "./build",\n      publicPath: "/",\n    },\n    // ...\n  },\n  // Options related to the dev server\n  server: {\n    port: 9000,\n    // ...\n  },\n  // Additional plugins\n  plugins: [],\n});\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"/docs/config/configuring-farm",children:"Configuring Farm"})})," for details."]})}),"\n",(0,r.jsx)(t.h2,{id:"4-building-the-project",children:"4. Building the project"}),"\n",(0,r.jsx)(t.p,{children:"Build the Farm project as production-ready static files:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The built product is downgraded to ",(0,r.jsx)(t.code,{children:"ES2017"})," by default, and the product will be compressed and Tree Shake. If you want to preview the build product locally, you can execute ",(0,r.jsx)(t.code,{children:"npm run preview"})," or ",(0,r.jsx)(t.code,{children:"npx farm preview"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"/docs/tutorials/build",children:"Build For Production"})})," for details."]})}),"\n",(0,r.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/why-farm",children:"Why Farm?"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/features/html",children:"Features"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/config/configuring-farm",children:"Configuring Farm"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/plugins/official-plugins/overview",children:"Plugins"})}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},1254:(e,t,n)=>{n.d(t,{A:()=>l});n(758);var r=n(3526);const a={tabItem:"tabItem_PaXs"};var i=n(6070);function l(e){let{children:t,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},6092:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(758),a=n(3526),i=n(1329),l=n(5557),s=n(3584),o=n(5290),c=n(1219),u=n(433);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,d]=m({queryString:n,groupId:a}),[f,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),x=(()=>{const e=c??f;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{x&&o(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),j(e)}),[d,j,i]),tabValues:i}}var j=n(60);const x={tabList:"tabList_J1qD",tabItem:"tabItem_LY8c"};var b=n(6070);function g(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),a=s[n].value;a!==r&&(c(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,b.jsx)(g,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function A(e){const t=(0,j.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(t))}}}]);