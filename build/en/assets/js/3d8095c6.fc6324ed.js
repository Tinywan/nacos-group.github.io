"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[6649],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?o.createElement(f,r(r({ref:t},p),{},{components:n})):o.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const i={title:"Nacos 1.4.0 + Go SDK 1.0.1 Release",keywords:["1.4.0","Go 1.0.1"],description:"Nacos 1.4.0 + Go SDK 1.0.1 Release",date:new Date("2020-11-02T00:00:00.000Z")},r="Nacos 1.4.0 + Go SDK 1.0.1 Release",c={permalink:"/en/blog/1.4.0-release",source:"@site/i18n/en/docusaurus-plugin-content-blog/1.4.0-release.md",title:"Nacos 1.4.0 + Go SDK 1.0.1 Release",description:"Nacos 1.4.0 + Go SDK 1.0.1 Release",date:"2020-11-02T00:00:00.000Z",formattedDate:"November 2, 2020",tags:[],readingTime:3.345,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Nacos 1.4.0 + Go SDK 1.0.1 Release",keywords:["1.4.0","Go 1.0.1"],description:"Nacos 1.4.0 + Go SDK 1.0.1 Release",date:"2020-11-02T00:00:00.000Z"},prevItem:{title:"Nacos 2.0.1 + 1.4.2 Release",permalink:"/en/blog/2.0.1-release"},nextItem:{title:"Nacos' Distro conformance protocol",permalink:"/en/blog/nacos-distro-mechanism"}},s={authorsImageUrls:[]},l=[{value:"Nacos 1.4.0",id:"nacos-140",level:2},{value:"Nacos Go SDK 1.0.1",id:"nacos-go-sdk-101",level:2},{value:"Community",id:"community",level:2},{value:"About Nacos",id:"about-nacos",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The annual double eleven shopping festival is coming again.\nHave you grabbed goods you want?"),(0,a.kt)("p",null,"In this festival, Nacos community will provide a gift for yours -- ",(0,a.kt)("inlineCode",{parentName:"p"},"Nacos 1.4.0")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"nacos-sdk-go 1.0.1")," released."),(0,a.kt)("h2",{id:"nacos-140"},"Nacos 1.4.0"),(0,a.kt)("p",null,"Main upgrade in 1.4.0:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Refactors the distro protocol of the naming module and sinks to the nacos-core module."),(0,a.kt)("li",{parentName:"ol"},"Used jraft to replace the old self-implemented raft protocol to improve the performance and accuracy of raft semantics."),(0,a.kt)("li",{parentName:"ol"},"Unifies the http clients completely used by nacos, optimizes the usage of some http clients, and reduces connection cost, especially the number of CLOSE_WAIT connections."),(0,a.kt)("li",{parentName:"ol"},"Add a BETA interface to modify service metadata separately."),(0,a.kt)("li",{parentName:"ol"},"Fix some old version bugs and optimized console usage.")),(0,a.kt)("p",null,"Detail change logs\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[#1654] Fix content hightlight does not work in config detail page.\n[#2792] Save user information in login when auth open.\n[#2835] Fix the console loading continuously if there is no permission of the namespace.\n[#2866] Fix client do not have permision for api  /nacos/v1/ns/operator/metrics.\n[#3117] Sink and Optimize the Notify implementation into common module.\n[#3192] Unified http client in nacos server.\n[#3315] nacos-client support https.\n[#3397] Fix some error in start script.\n[#3384] Fix raft information show error in console.\n[#3500] Make page list of service manager same as config manager.\n[#3509] Fix address server mode cannot be obtained application.properties.\n[#3518] When binding roles, the user list is changed to the drop-down selection mode.\n[#3530] Add refresh buttons for each page in console.\n[#3533] Change client cache directory config.\n[#3515][#3536][#3899] Upgrade dependency to fix security problem.\n[#3528] Fix client get illegal project.version.\n[#3550] Fix persistency file can't create in server side for raft protocol.\n[#3560] Change title logo in browser.\n[#3566] Extract and sink auth feature to nacos-auth from nacos-config.\n[#3576] Adding the destroy lifecycle method on NamingMaintainService.\n[#3592] Fix incorrect prompt when accessing unauthorized namespace.\n[#3628] Enhance the client update interval when subscribe non-exist service.\n[#3635] Replace raft of naming module by Jraft of consistency module.\n[#3651] Enhance http client usage to reduce CLOSE_WAIT connection in nacos-server.\n[#3661] Enhance raft group update logic for using Jraft.\n[#3671] Move some util class into common package.\n[#3676] Fix revert chunk does not work in Content Comparison page.\n[#3692] Refactor Distro protocol in nacos naming module.\n[#3687] Check serviceName's format in server and client.\n[#3710] Fix service metadata can't be special words problem.\n[#3781] Fix service list intermittently lost service.\n[#3790] Fix the configuration garbled problem that may occur on the client.\n[#3815] Fix client cache may be truncated when contain Chinese.\n[#3833] Fix NotifyCenter will throw NullPointerException when no subscriber.\n[#3855] Add changed detail from previous version in configuration detail page.\n[#3904] Support operate instance's metadata alonely.\n[#3909] Fix nacos server can't config domains.\n[#3973] Fix load config failed during the first run.\n[#4110] Naming modules failed to work properly during the nacos capacity expansion.\n")),(0,a.kt)("h2",{id:"nacos-go-sdk-101"},"Nacos Go SDK 1.0.1"),(0,a.kt)("p",null,"This version mainly fixes some bugs in the old version and support https."),(0,a.kt)("p",null,"Detail change logs in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-sdk-go/releases/tag/v1.0.1"},"release notes")),(0,a.kt)("h2",{id:"community"},"Community"),(0,a.kt)("p",null,"With Nacos 1.4.0 released\uff0c Nacos community will invite new two committers : Maijh97 and wangweizZZ."),(0,a.kt)("p",null,"They have made a lot of contributions in the unifying http client, sinking the auth module, supporting https in client, reorganizing part of the server thread pool and fixing bugs, and actively participated in community discussions."),(0,a.kt)("p",null,"The Nacos community welcomes more partners who would participate to contribution, including but not limited to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Source codes"),(0,a.kt)("li",{parentName:"ul"},"Document"),(0,a.kt)("li",{parentName:"ul"},"Discussion in community"),(0,a.kt)("li",{parentName:"ul"},"Multiple-language"),(0,a.kt)("li",{parentName:"ul"},"Combination of surrounding ecological products")),(0,a.kt)("p",null,"Active participation will get exquisite small gifts from the Nacos community~"),(0,a.kt)("h2",{id:"about-nacos"},"About Nacos"),(0,a.kt)("p",null,"Nacos is committed to help you discover, configure, and manage your microservices. It provides a set of simple and useful features enabling you to realize dynamic service discovery, service configuration, service metadata and traffic management. "),(0,a.kt)("p",null,"Nacos makes it easier and faster to construct, deliver and manage your microservices platform. It is the infrastructure that supports a service-centered modern application architecture with a microservices or cloud-native approach."))}m.isMDXComponent=!0}}]);