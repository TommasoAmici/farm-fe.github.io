"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[7224],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(n),m=i,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(1163),i=(n(9496),n(9613));const a={},o="\u538b\u7f29",c={unversionedId:"features/minification",id:"features/minification",title:"\u538b\u7f29",description:"Farm \u652f\u6301\u5f00\u7bb1\u5373\u7528\u7684\u751f\u4ea7\u73af\u5883\u538b\u7f29\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u81ea\u52a8\u5728production\u6a21\u5f0f\u4e0b\u542f\u7528\u3002 \u53ef\u4ee5\u901a\u8fc7compilation.minify\u9009\u9879\u542f\u7528\u6216\u7981\u7528\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/features/minification.md",sourceDirName:"features",slug:"/features/minification",permalink:"/zh/docs/features/minification",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/features/minification.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tree Shake",permalink:"/zh/docs/features/tree-shake"},next:{title:"Syntax Downgrade and Polyfill",permalink:"/zh/docs/features/polyfill"}},l={},p=[],u={toc:p},f="wrapper";function s(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u538b\u7f29"},"\u538b\u7f29"),(0,i.kt)("p",null,"Farm \u652f\u6301\u5f00\u7bb1\u5373\u7528\u7684\u751f\u4ea7\u73af\u5883\u538b\u7f29\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u81ea\u52a8\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"production"),"\u6a21\u5f0f\u4e0b\u542f\u7528\u3002 \u53ef\u4ee5\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"compilation.minify"),"\u9009\u9879\u542f\u7528\u6216\u7981\u7528\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"compilation.minify"),"\u8fdb\u884c\u914d\u7f6e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="farm.config.ts"',title:'"farm.config.ts"'},"export default {\n   compilation: {\n     minify: true\n   },\n};\n")),(0,i.kt)("p",null,"\u5982\u679c\u542f\u7528\u4e86\u538b\u7f29\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e8ejs/ts\u6a21\u5757\uff0c\u5b83\u5c06\u88ab\u538b\u7f29\u4ee5\u53ca\u6df7\u6dc6\uff0c\u6240\u6709\u7a7a\u767d\u5b57\u7b26\u5c06\u88ab\u5220\u9664\uff0c\u53d8\u91cf\u7b49\u5c06\u88ab\u538b\u7f29\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e css \u548c html \u6a21\u5757\uff0c\u6240\u6709\u7a7a\u683c\u90fd\u5c06\u88ab\u5220\u9664\u3002")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Farm \u5e95\u5c42\u4f7f\u7528swc minifier\uff0cswc minifier \u7684\u6240\u6709\u9009\u9879\u90fd\u53ef\u4ee5\u5728 Farm \u4e2d\u4f7f\u7528\u3002")))}s.isMDXComponent=!0}}]);