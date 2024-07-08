"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[1237],{8854:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=r(6070),i=r(5710);const s={},d="Server-Side Rendering (SSR)",l={id:"advanced/ssr",title:"Server-Side Rendering (SSR)",description:"Server-Side Rendering (SSR) means rendering front-end frameworks(for example React, Vue, Solid, etc) to html in Node.js(Server Side), and hydrating the rendered html on the client.",source:"@site/docs/advanced/ssr.md",sourceDirName:"advanced",slug:"/advanced/ssr",permalink:"/docs/advanced/ssr",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/advanced/ssr.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NestJs",permalink:"/docs/frameworks/nestjs"},next:{title:"Partial Bundling",permalink:"/docs/advanced/partial-bundling"}},o={},c=[{value:"Example Projects",id:"example-projects",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"Setting up Dev Server",id:"setting-up-dev-server",level:2},{value:"Building for Node.js",id:"building-for-nodejs",level:2},{value:"Develop SSR Project",id:"develop-ssr-project",level:2},{value:"Building for Production",id:"building-for-production",level:2},{value:"Static-Site Generation(SSG)",id:"static-site-generationssg",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"server-side-rendering-ssr",children:"Server-Side Rendering (SSR)"}),"\n",(0,t.jsxs)(n.p,{children:["Server-Side Rendering (SSR) means rendering front-end frameworks(for example React, Vue, Solid, etc) to ",(0,t.jsx)(n.code,{children:"html"})," in Node.js(Server Side), and hydrating the ",(0,t.jsx)(n.code,{children:"rendered html"})," on the client."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"This document describes how to built a SSR application on top of Farm from scratch."})}),"\n",(0,t.jsx)(n.h2,{id:"example-projects",children:"Example Projects"}),"\n",(0,t.jsxs)(n.p,{children:["Farm provides a list of SSR ",(0,t.jsx)(n.a,{href:"https://github.com/farm-fe/farm/tree/main/examples",children:"examples"})," for popular frameworks:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://github.com/farm-fe/farm/tree/main/examples/react-ssr",children:"React"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://github.com/farm-fe/farm/tree/main/examples/vue-ssr",children:"Vue"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://github.com/farm-fe/farm/tree/main/examples/solid-ssr",children:"Solid"})})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.a,{href:"https://github.com/farm-fe/farm/tree/main/examples/react-ssr",children:"SSR typical application"})," often have the following source file structure:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:".\n\u251c\u2500\u2500 index.html\n\u251c\u2500\u2500 farm.config.ts\n\u251c\u2500\u2500 farm.config.server.ts\n\u251c\u2500\u2500 server.js\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 index-client.tsx\n    \u251c\u2500\u2500 index-server.tsx\n    \u2514\u2500\u2500 main.tsx\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"index.html"})}),": Entry html of the application that running on the client(browser)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"farm.config.ts"})}),": farm config that builds the project to client"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"farm.config.server.ts"})}),": Farm config that builds the project to Node.js(server)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"server.js"})}),": Server script that should be deployed for production"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"src/index-client.tsx"})}),": Client entry scripts"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"src/index-server.tsx"})}),": Server entry scripts"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"src/main.tsx"})}),": Application code shared for both client and server"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"index.html"})," need to reference ",(0,t.jsx)(n.code,{children:"index-client.tsx"})," and include a placeholder where the server-rendered ",(0,t.jsx)(n.code,{children:"markup"})," should injected:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<div id="root"><div>app-html-to-replace</div></div>\n<script src="./src/index-client.tsx"><\/script>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You should replace ",(0,t.jsx)(n.code,{children:"<div>app-html-to-replace</div>"})," to the server-rendered ",(0,t.jsx)(n.code,{children:"markup"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["We have to build the SSR application ",(0,t.jsx)(n.strong,{children:"twice"}),", one for ",(0,t.jsx)(n.code,{children:"client"}),"(browser) and one for ",(0,t.jsx)(n.code,{children:"server"}),"(Node.js). So ",(0,t.jsx)(n.code,{children:"farm.config.ts"})," and ",(0,t.jsx)(n.code,{children:"farm.config.server.ts"})," are needed, we'll discuss the details in later sections."]})}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-dev-server",children:"Setting up Dev Server"}),"\n",(0,t.jsxs)(n.p,{children:["For above example, ",(0,t.jsx)(n.code,{children:"farm.config.ts"})," is used to ",(0,t.jsx)(n.strong,{children:"build the project for browser"})," and setting up DevServer for server rendering. The content of ",(0,t.jsx)(n.code,{children:"farm.config.ts"})," normally would be:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"import path from 'path';\nimport { defineConfig } from '@farmfe/core';\n\nexport default defineConfig({\n  compilation: {\n    input: {\n      index_client: './index.html'\n    },\n    output: {\n      path: './build'\n    },\n  },\n  server: {\n    hmr: true,\n    cors: true,\n    middlewares: [\n      // register a middleware that render the application on the server, \n      // inject server rendered markup and return final index.html\n      (server) => {\n        server.app().use(async (ctx, next) => {\n          await next();\n\n          // handle index.html or SPA fallback\n          if (ctx.path === '/' || ctx.status === 404) {\n            // loading the server entry, and render it by ctx.path\n            const render = await import(path.join(process.cwd(), 'dist', 'index.js')).then(\n              (m) => m.default\n            );\n            const renderedHtml = render(ctx.path);\n\n            // get compiled index.html content from server.getCompiler()\n            // The html is compiled for client with all client bundles injected\n            const template = server\n              .getCompiler()\n              .resource('index_client.html')\n              .toString();\n\n            // replace the placeholder to rendered markup and return it as html \n            const html = template.replace(\n              '<div>app-html-to-replace</div>',\n              renderedHtml\n            );\n            ctx.body = html;\n            ctx.type = 'text/html';\n            ctx.status = 200;\n          }\n\n          console.log('ctx.path outer', ctx.path);\n        });\n      }\n    ]\n  },\n  plugins: ['@farmfe/plugin-react', '@farmfe/plugin-sass']\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In above example, a ",(0,t.jsx)(n.code,{children:"middleware"})," is required for rendering the application to markup and serve it as html. Normal workflow for SSR in the ",(0,t.jsx)(n.code,{children:"middleware"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Load compiled server entry:"})," A ",(0,t.jsx)(n.code,{children:"index-server"})," entry which exports a ",(0,t.jsx)(n.code,{children:"render"})," function is required, we need to ",(0,t.jsx)(n.code,{children:"import(server_entry_path)"})," to get the ",(0,t.jsx)(n.code,{children:"render"})," function."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Get compiled client index.html:"})," All client bundles and Farm runtime are injected to ",(0,t.jsx)(n.code,{children:"index.html"}),", so the client can ",(0,t.jsx)(n.code,{children:"hydrate"})," successfully."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Replace the placeholder to rendered markup:"})," Replace the placeholder and return the ",(0,t.jsx)(n.code,{children:"final html"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["In this example, we are building a ",(0,t.jsx)(n.code,{children:"SPA"})," SSR application with ",(0,t.jsx)(n.code,{children:"if (ctx.path === '/' || ctx.status === 404) {"}),", if you are building a ",(0,t.jsx)(n.code,{children:"MPA"})," SSR application, guard ",(0,t.jsx)(n.code,{children:"ctx.path"})," to your pages."]})}),"\n",(0,t.jsx)(n.h2,{id:"building-for-nodejs",children:"Building for Node.js"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"farm.config.server.ts"})," is used to ",(0,t.jsx)(n.strong,{children:"build the project for Node.js"}),", producing the compiled server entry which can be used to rendering the application to markup on the server side."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.server.ts"',children:"import { defineConfig } from '@farmfe/core';\n\nexport default defineConfig({\n  compilation: {\n    // c-highlight-start\n    input: {\n      index: './src/index-server.tsx'\n    },\n    output: {\n      path: './dist',\n      targetEnv: 'node'\n    }\n    // c-highlight-end\n  },\n  plugins: [\n    [\n      '@farmfe/plugin-react',\n      {\n        refresh: false,\n        development: false\n      }\n    ],\n    '@farmfe/plugin-sass'\n  ]\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.code,{children:"farm.config.server.ts"}),", we set ",(0,t.jsx)(n.code,{children:"input"})," to ",(0,t.jsx)(n.strong,{children:"server entry"})," and ",(0,t.jsx)(n.a,{href:"/docs/config/compilation-options#output-targetenv",children:(0,t.jsx)(n.code,{children:"output.targetEnv"})})," to ",(0,t.jsx)(n.code,{children:"node"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["By default, Farm compiles server entry script to ",(0,t.jsx)(n.code,{children:"esm"}),", if you want to compile it to ",(0,t.jsx)(n.code,{children:"cjs"}),", try set ",(0,t.jsx)(n.a,{href:"/docs/config/compilation-options#output-format",children:(0,t.jsx)(n.code,{children:"output.format"})}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"develop-ssr-project",children:"Develop SSR Project"}),"\n",(0,t.jsxs)(n.p,{children:["You have start compilation for both ",(0,t.jsx)(n.code,{children:"client"})," and ",(0,t.jsx)(n.code,{children:"server"}),", for example, you may have following ",(0,t.jsx)(n.code,{children:"scripts"})," in ",(0,t.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "name": "@farmfe-examples/react-ssr",\n  "scripts": {\n    // c-highlight-start\n    "start": "farm start",\n    "start:server": "farm watch --config farm.config.server.mjs",\n    // c-highlight-end\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["When starting your SSR project, you should run both ",(0,t.jsx)(n.code,{children:"npm run start"})," and ",(0,t.jsx)(n.code,{children:"npm run start:server"})," in different terminal."]}),"\n",(0,t.jsx)(n.h2,{id:"building-for-production",children:"Building for Production"}),"\n",(0,t.jsxs)(n.p,{children:["You have build both ",(0,t.jsx)(n.code,{children:"client"})," and ",(0,t.jsx)(n.code,{children:"server"}),", for example, you may add following command to ",(0,t.jsx)(n.code,{children:"scripts"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "name": "@farmfe-examples/react-ssr",\n  "scripts": {\n    "start": "farm start",\n    "start:server": "farm watch --config farm.config.server.mjs",\n    // c-highlight-start\n    "build": "farm build",\n    "build:server": "farm build --config farm.config.server.mjs"\n    // c-highlight-end\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["When building for production, you should run both ",(0,t.jsx)(n.code,{children:"npm run build"})," and ",(0,t.jsx)(n.code,{children:"npm run build:server"}),", the client bundles will be emitted to ",(0,t.jsx)(n.code,{children:"build"})," dir, and the server bundles will be emitted to ",(0,t.jsx)(n.code,{children:"dist"})," dir."]}),"\n",(0,t.jsxs)(n.p,{children:["For production, you need a ",(0,t.jsx)(n.code,{children:"node server"})," for ",(0,t.jsx)(n.code,{children:"rendering"})," and serving ",(0,t.jsx)(n.code,{children:"rendered html"}),", in this example, we provide a ",(0,t.jsx)(n.code,{children:"server.js"})," as production server:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="server.js"',children:"import path from 'node:path';\nimport { fileURLToPath } from 'node:url'\nimport fsp from 'fs/promises';\nimport express from 'express';\n\nfunction resolve(p) {\n  const __dirname = path.dirname(fileURLToPath(import.meta.url));\n  return path.resolve(__dirname, p);\n}\n\n// create a node production server\nasync function createServer() {\n  let app = express();\n  // serve the client builds as static assets, you can also deploy client builds to CDN or separate dev server as you wish.\n  app.use(express.static(resolve('build')));\n  // listen '/' route, you can replace it to the routes you use.\n  app.use('/', async (req, res) => {\n    let url = req.originalUrl;\n\n    try {\n      let template;\n      let render;\n\n      // load client html\n      template = await fsp.readFile(resolve('build/index_client.html'), 'utf8');\n      // load server render function\n      render = await import(resolve('dist/index.js')).then(\n        (m) => m.default\n      );\n      // render the application to markup\n      const markup = render(url);\n\n      let html = template.replace(\n        '<div>app-html-to-replace</div>',\n        markup\n      );\n      // return the rendered html with client bundles, the client bundles hydrate the server rendered markup and make it interactive\n      res.setHeader('Content-Type', 'text/html');\n      return res.status(200).end(html);\n    } catch (error) {\n      console.log(error.stack);\n      res.status(500).end(error.stack);\n    }\n  });\n\n  return app;\n}\n// create and listen the server\ncreateServer().then((app) => {\n  app.listen(3000, () => {\n    console.log('HTTP server is running at http://localhost:3000');\n  });\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We use ",(0,t.jsx)(n.code,{children:"express"})," as server here, but you can use whatever server frameworks you want. The rendering process are the same:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Loading client compiled html"}),"\n",(0,t.jsxs)(n.li,{children:["Loading ",(0,t.jsx)(n.code,{children:"render"})," function from compiled server script"]}),"\n",(0,t.jsxs)(n.li,{children:["Call ",(0,t.jsx)(n.code,{children:"const markup = render(url)"})," function to get the server-side rendered markup of your application"]}),"\n",(0,t.jsxs)(n.li,{children:["Replace the ",(0,t.jsx)(n.code,{children:"placeholder"})," in ",(0,t.jsx)(n.code,{children:"client index.html"})," to the ",(0,t.jsx)(n.code,{children:"rendered markup"})," and return the replaced html as final result"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"static-site-generationssg",children:"Static-Site Generation(SSG)"}),"\n",(0,t.jsxs)(n.p,{children:["The same flow of SSG is the same as SSR, the difference is SSG that emits to ",(0,t.jsx)(n.code,{children:"replaced html"})," to the final resources. Example scripts for SSG:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// load client html\nconst template = await fsp.readFile(resolve('build/index_client.html'), 'utf8');\n// load server render function\nconst render = await import(resolve('dist/index.js')).then(\n  (m) => m.default\n);\n\nconst pages = renderDirEntry('src/pages');\n\nfor (const page of pages) {\n  // render the application to markup\n  const markup = render(url);\n  const html = template.replace(\n    '<div>app-html-to-replace</div>',\n    markup\n  );\n  // emit the static generated page, for example writing it to disk\n  emitPage(page, html);\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},5710:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var t=r(758);const i={},s=t.createContext(i);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);