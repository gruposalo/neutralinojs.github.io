(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),i=(n(0),n(112)),o=n(125),l=n(126),c={title:"Your First Neutralinojs App"},s={unversionedId:"getting-started/your-first-neutralinojs-app",id:"getting-started/your-first-neutralinojs-app",isDocsHomePage:!1,title:"Your First Neutralinojs App",description:"Introduction",source:"@site/docs/getting-started/your-first-neutralinojs-app.mdx",slug:"/getting-started/your-first-neutralinojs-app",permalink:"/docs/getting-started/your-first-neutralinojs-app",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/getting-started/your-first-neutralinojs-app.mdx",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Native API Overview",permalink:"/docs/api/overview"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Step 0: Installing neu CLI",id:"step-0-installing-neu-cli",children:[]},{value:"Step 1: Creating a new app",id:"step-1-creating-a-new-app",children:[]},{value:"Step 2: Writing JavaScript, HTML, and CSS",id:"step-2-writing-javascript-html-and-css",children:[]},{value:"Step 3: Running your application",id:"step-3-running-your-application",children:[]},{value:"Step 4: Building your application\xa0",id:"step-4-building-your-application",children:[]},{value:"What&#39;s next?",id:"whats-next",children:[]}],u={toc:p};function b(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"We are going to create a simple application using Neutralinojs. This sample application will display Hello with the\ncurrent username of your operating system. For example, if the current username is John, it will show, Hello John."),Object(i.b)("h2",{id:"step-0-installing-neu-cli"},"Step 0: Installing neu CLI"),Object(i.b)("p",null,"You need to install neu CLI to create Neutralinojs applications. However, you can develop applications without CLI as well.\nBut, the CLI will make some hard stuff easy. Run the following command on your terminal to install neu CLI globally."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install -g @neutralinojs/neu\n")),Object(i.b)("p",null,"If you don't want a global installation, use neu CLI with npx."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npx @neutralinojs/neu <command>\n")),Object(i.b)("h2",{id:"step-1-creating-a-new-app"},"Step 1: Creating a new app"),Object(i.b)("p",null,"Enter the following command to scaffold a new app."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"neu create myapp\n")),Object(i.b)("p",null,"The above command will create a new app inside myapp directory. To make sure whether everything is fine,\nrun your application."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"cd myapp\nneu run\n")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"If you are on Windows, you might get a blank white screen.\nThe reason for this is, accessing localhost from a UWP context is disabled by default.\nRun the following command with administrative privileges on the command prompt to fix this."),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre"},'CheckNetIsolation.exe LoopbackExempt -a -n="Microsoft.Win32WebViewHost_cw5n1h2txyewy"\n')),Object(i.b)("p",{parentName:"div"},"You may include this in your Windows setup files (with the user's consent) because users also may get an empty white screen on Windows."),Object(i.b)("p",{parentName:"div"},"For better developer experience, we recommend you to install the ",Object(i.b)("a",{parentName:"p",href:"https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section"},"WebView2 runtime")," on Windows."))),Object(i.b)("h2",{id:"step-2-writing-javascript-html-and-css"},"Step 2: Writing JavaScript, HTML, and CSS"),Object(i.b)("p",null,"Insert the following content into your application resource files."),Object(i.b)(o.a,{defaultValue:"index.html",values:[{label:"index.html",value:"index.html"},{label:"styles.css",value:"styles.css"},{label:"main.js",value:"main.js"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"index.html",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <title>NeutralinoJs</title>\n    <link rel="stylesheet" href="styles.css">\n  </head>\n  <body>\n    <div id="neutralinoapp">\n      <h1 id="name"></h1>\n    </div>\n    <script src="js/neutralino.js"><\/script>\n    <script src="js/main.js"><\/script>\n  </body>\n</html>\n'))),Object(i.b)(l.a,{value:"styles.css",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-css"},"html, body{\n    margin: 0px;\n    padding: 0px;\n}\n\n#neutralinoapp {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: #FFD700;\n}\n\n#neutralinoapp h1 {\n    position: relative;\n    float: left;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-family: Arial;\n    font-size: 48px;\n    padding: 0px;\n    margin: 0px;\n}\n"))),Object(i.b)(l.a,{value:"main.js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"let getUsername = async () => {\n  const key = NL_OS == 'Windows' ? 'USERNAME' : 'USER';\n  let value = '';\n  try {\n      value = await Neutralino.os.getEnv(key);\n  }\n  catch(err) {\n      console.error(err);\n  }\n  document.getElementById('name').innerText = `Hello ${value}`;\n}\n\nNeutralino.init();\ngetUsername();\n")))),Object(i.b)("h2",{id:"step-3-running-your-application"},"Step 3: Running your application"),Object(i.b)("p",null,"As mentioned above, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"run")," command to start your application."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"neu run\n")),Object(i.b)("p",null,"Congrats! your application works."),Object(i.b)("p",null,Object(i.b)("img",{alt:"mypp is running on Linux",src:n(161).default})),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"neu run")," command will reload your application when there is a change in application resources.\nTry to change your ",Object(i.b)("inlineCode",{parentName:"p"},"index.html")," while the application is running."))),Object(i.b)("h2",{id:"step-4-building-your-application"},"Step 4: Building your application\xa0"),Object(i.b)("p",null,"To make portable binaries for your application, we can use the ",Object(i.b)("inlineCode",{parentName:"p"},"build")," command.\nEnter the following command on your terminal to make final binaries for all supported platforms.\xa0"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"neu build --release\n")),Object(i.b)("p",null,"The above command will produce binaries for all platforms into the ",Object(i.b)("inlineCode",{parentName:"p"},"dist")," directory.\nThis command will do the work blazing fast because there is no compilation process behind."),Object(i.b)("h2",{id:"whats-next"},"What's next?"),Object(i.b)("p",null,"Now you know how to create Neutralinojs applications. We will suggest you to look into the\nfollowing topics next."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../configuration/neutralino.config.json"},"neutralino.config.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../configuration/project-structure"},"Project structure")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../cli/neu-cli"},"neu CLI")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../api/global-variables"},"Global variables")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../configuration/modes"},"Application modes")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../api/overview"},"Native API overview"))),Object(i.b)("p",null,"We've built the above example application with vanilla JavaScript. However, you can use your favorite frontend\nframework to build Neutralinojs apps."),Object(i.b)("p",null,"Check more details about frontend framework support ",Object(i.b)("a",{parentName:"p",href:"../configuration/project-structure#developing-apps-with-frontend-frameworks"},"here"),"."))}b.isMDXComponent=!0},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},113:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},119:function(e,t,n){"use strict";var a=n(0),r=n(120);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},120:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},125:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(119),o=n(113),l=n(58),c=n.n(l);var s=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,u=e.values,b=e.groupId,m=e.className,d=Object(i.a)(),f=d.tabGroupChoices,h=d.setTabGroupChoices,v=Object(a.useState)(l),j=v[0],g=v[1],O=a.Children.toArray(e.children),y=[];if(null!=b){var w=f[b];null!=w&&w!==j&&u.some((function(e){return e.value===w}))&&g(w)}var N=function(e){var t=e.target,n=y.indexOf(t),a=O[n].props.value;g(a),null!=b&&(h(b,a),setTimeout((function(){var e,n,a,r,i,o,l,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,s=o.innerWidth,n>=0&&i<=s&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case p:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case s:var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:x,onFocus:N,onClick:N},n)}))),t?Object(a.cloneElement)(O.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},126:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},161:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/myapp-running-linux-6b64836102a03dea98022af84f9b189c.png"}}]);