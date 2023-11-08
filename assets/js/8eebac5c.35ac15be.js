"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[3446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"Nacos\u652f\u6301\u4e09\u79cd\u90e8\u7f72\u6a21\u5f0f",keywords:["Nacos","\u90e8\u7f72\u6a21\u5f0f"],description:"Nacos\u652f\u6301\u4e09\u79cd\u90e8\u7f72\u6a21\u5f0f"},o=void 0,i={unversionedId:"v2/guide/admin/deployment",id:"version-1.X/v2/guide/admin/deployment",title:"Nacos\u652f\u6301\u4e09\u79cd\u90e8\u7f72\u6a21\u5f0f",description:"Nacos\u652f\u6301\u4e09\u79cd\u90e8\u7f72\u6a21\u5f0f",source:"@site/versioned_docs/version-1.X/v2/guide/admin/deployment.md",sourceDirName:"v2/guide/admin",slug:"/v2/guide/admin/deployment",permalink:"/docs/1.X/v2/guide/admin/deployment",draft:!1,tags:[],version:"1.X",frontMatter:{title:"Nacos\u652f\u6301\u4e09\u79cd\u90e8\u7f72\u6a21\u5f0f",keywords:["Nacos","\u90e8\u7f72\u6a21\u5f0f"],description:"Nacos\u652f\u6301\u4e09\u79cd\u90e8\u7f72\u6a21\u5f0f"},sidebar:"docs",previous:{title:"failover",permalink:"/docs/1.X/v2/guide/user/failover"},next:{title:"\u96c6\u7fa4\u90e8\u7f72\u8bf4\u660e",permalink:"/docs/1.X/v2/guide/admin/cluster-mode-quick-start"}},s={},c=[{value:"\u5355\u673a\u6a21\u5f0f\u4e0b\u8fd0\u884cNacos",id:"\u5355\u673a\u6a21\u5f0f\u4e0b\u8fd0\u884cnacos",level:2},{value:"Linux/Unix/Mac",id:"linuxunixmac",level:3},{value:"Windows",id:"windows",level:3},{value:"\u5355\u673a\u6a21\u5f0f\u652f\u6301mysql",id:"\u5355\u673a\u6a21\u5f0f\u652f\u6301mysql",level:3},{value:"\u96c6\u7fa4\u6a21\u5f0f\u4e0b\u8fd0\u884cNacos",id:"\u96c6\u7fa4\u6a21\u5f0f\u4e0b\u8fd0\u884cnacos",level:2},{value:"\u591a\u96c6\u7fa4\u6a21\u5f0f",id:"\u591a\u96c6\u7fa4\u6a21\u5f0f",level:2},{value:"\u591a\u7f51\u5361IP\u9009\u62e9",id:"\u591a\u7f51\u5361ip\u9009\u62e9",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6587\u6863\u4f18\u5316\u4e2d......")),(0,a.kt)("h1",{id:"nacos\u90e8\u7f72\u73af\u5883"},"Nacos\u90e8\u7f72\u73af\u5883"),(0,a.kt)("p",null,"Nacos\u5b9a\u4e49\u4e3a\u4e00\u4e2aIDC\u5185\u90e8\u5e94\u7528\u7ec4\u4ef6\uff0c\u5e76\u975e\u9762\u5411\u516c\u7f51\u73af\u5883\u7684\u4ea7\u54c1\uff0c\u5efa\u8bae\u5728\u5185\u90e8\u9694\u79bb\u7f51\u7edc\u73af\u5883\u4e2d\u90e8\u7f72\uff0c\u5f3a\u70c8\u4e0d\u5efa\u8bae\u90e8\u7f72\u5728\u516c\u5171\u7f51\u7edc\u73af\u5883\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u6587\u6863\u4e2d\u63d0\u53ca\u7684VIP\uff0c\u7f51\u5361\u7b49\u6240\u6709\u7f51\u7edc\u76f8\u5173\u6982\u5ff5\u5747\u5904\u4e8e\u5185\u90e8\u7f51\u7edc\u73af\u5883\u3002"),(0,a.kt)("h1",{id:"nacos\u652f\u6301\u4e09\u79cd\u90e8\u7f72\u6a21\u5f0f"},"Nacos\u652f\u6301\u4e09\u79cd\u90e8\u7f72\u6a21\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5355\u673a\u6a21\u5f0f - \u7528\u4e8e\u6d4b\u8bd5\u548c\u5355\u673a\u8bd5\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u6a21\u5f0f - \u7528\u4e8e\u751f\u4ea7\u73af\u5883\uff0c\u786e\u4fdd\u9ad8\u53ef\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u591a\u96c6\u7fa4\u6a21\u5f0f - \u7528\u4e8e\u591a\u6570\u636e\u4e2d\u5fc3\u573a\u666f\u3002")),(0,a.kt)("h1",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u597d JDK\uff0c\u9700\u8981 1.8 \u53ca\u5176\u4ee5\u4e0a\u7248\u672c"),(0,a.kt)("li",{parentName:"ul"},"\u5efa\u8bae: 2\u6838 CPU / 4G \u5185\u5b58 \u53ca\u5176\u4ee5\u4e0a"),(0,a.kt)("li",{parentName:"ul"},"\u5efa\u8bae: \u751f\u4ea7\u73af\u5883 3 \u4e2a\u8282\u70b9 \u53ca\u5176\u4ee5\u4e0a")),(0,a.kt)("h2",{id:"\u5355\u673a\u6a21\u5f0f\u4e0b\u8fd0\u884cnacos"},"\u5355\u673a\u6a21\u5f0f\u4e0b\u8fd0\u884cNacos"),(0,a.kt)("h3",{id:"linuxunixmac"},"Linux/Unix/Mac"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Standalone means it is non-cluster Mode.\n$ sh startup.sh -m standalone\n")),(0,a.kt)("h3",{id:"windows"},"Windows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Standalone means it is non-cluster Mode.\n$ cmd startup.cmd -m standalone\n")),(0,a.kt)("h3",{id:"\u5355\u673a\u6a21\u5f0f\u652f\u6301mysql"},"\u5355\u673a\u6a21\u5f0f\u652f\u6301mysql"),(0,a.kt)("p",null,"\u57280.7\u7248\u672c\u4e4b\u524d\uff0c\u5728\u5355\u673a\u6a21\u5f0f\u65f6nacos\u4f7f\u7528\u5d4c\u5165\u5f0f\u6570\u636e\u5e93\u5b9e\u73b0\u6570\u636e\u7684\u5b58\u50a8\uff0c\u4e0d\u65b9\u4fbf\u89c2\u5bdf\u6570\u636e\u5b58\u50a8\u7684\u57fa\u672c\u60c5\u51b5\u30020.7\u7248\u672c\u589e\u52a0\u4e86\u652f\u6301mysql\u6570\u636e\u6e90\u80fd\u529b\uff0c\u5177\u4f53\u7684\u64cd\u4f5c\u6b65\u9aa4\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1.\u5b89\u88c5\u6570\u636e\u5e93\uff0c\u7248\u672c\u8981\u6c42\uff1a5.6.5+"),(0,a.kt)("li",{parentName:"ul"},"2.\u521d\u59cb\u5316mysql\u6570\u636e\u5e93\uff0c\u6570\u636e\u5e93\u521d\u59cb\u5316\u6587\u4ef6\uff1amysql-schema.sql"),(0,a.kt)("li",{parentName:"ul"},"3.\u4fee\u6539conf/application.properties\u6587\u4ef6\uff0c\u589e\u52a0\u652f\u6301mysql\u6570\u636e\u6e90\u914d\u7f6e\uff08\u76ee\u524d\u53ea\u652f\u6301mysql\uff09\uff0c\u6dfb\u52a0mysql\u6570\u636e\u6e90\u7684url\u3001\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"spring.datasource.platform=mysql\n\ndb.num=1\ndb.url.0=jdbc:mysql://11.162.196.16:3306/nacos_devtest?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true\ndb.user=nacos_devtest\ndb.password=youdontknow\n")),(0,a.kt)("p",null,"\u518d\u4ee5\u5355\u673a\u6a21\u5f0f\u542f\u52a8nacos\uff0cnacos\u6240\u6709\u5199\u5d4c\u5165\u5f0f\u6570\u636e\u5e93\u7684\u6570\u636e\u90fd\u5199\u5230\u4e86mysql"),(0,a.kt)("h2",{id:"\u96c6\u7fa4\u6a21\u5f0f\u4e0b\u8fd0\u884cnacos"},"\u96c6\u7fa4\u6a21\u5f0f\u4e0b\u8fd0\u884cNacos"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/1.X/v2/guide/admin/cluster-mode-quick-start"},"\u96c6\u7fa4\u6a21\u5f0f\u4e0b\u8fd0\u884cNacos")),(0,a.kt)("h2",{id:"\u591a\u96c6\u7fa4\u6a21\u5f0f"},"\u591a\u96c6\u7fa4\u6a21\u5f0f"),(0,a.kt)("p",null,"Nacos\u652f\u6301NameServer\u8def\u7531\u8bf7\u6c42\u6a21\u5f0f\uff0c\u901a\u8fc7\u5b83\u60a8\u53ef\u4ee5\u8bbe\u8ba1\u4e00\u4e2a\u6709\u7528\u7684\u6620\u5c04\u89c4\u5219\u6765\u63a7\u5236\u8bf7\u6c42\u8f6c\u53d1\u5230\u76f8\u5e94\u7684\u96c6\u7fa4\uff0c\u5728\u6620\u5c04\u89c4\u5219\u4e2d\u60a8\u53ef\u4ee5\u6309\u547d\u540d\u7a7a\u95f4\u6216\u79df\u6237\u7b49\u5206\u7247\u8bf7\u6c42..."),(0,a.kt)("h2",{id:"\u591a\u7f51\u5361ip\u9009\u62e9"},"\u591a\u7f51\u5361IP\u9009\u62e9"),(0,a.kt)("p",null,"\u5f53\u672c\u5730\u73af\u5883\u6bd4\u8f83\u590d\u6742\u7684\u65f6\u5019\uff0cNacos\u670d\u52a1\u5728\u542f\u52a8\u7684\u65f6\u5019\u9700\u8981\u9009\u62e9\u8fd0\u884c\u65f6\u4f7f\u7528\u7684IP\u6216\u8005\u7f51\u5361\u3002Nacos\u4ece\u591a\u7f51\u5361\u83b7\u53d6IP\u53c2\u8003Spring Cloud\u8bbe\u8ba1\uff0c\u901a\u8fc7nacos.inetutils\u53c2\u6570\uff0c\u53ef\u4ee5\u6307\u5b9aNacos\u4f7f\u7528\u7684\u7f51\u5361\u548cIP\u5730\u5740\u3002\u76ee\u524d\u652f\u6301\u7684\u914d\u7f6e\u53c2\u6570\u6709:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ip-address\u53c2\u6570\u53ef\u4ee5\u76f4\u63a5\u8bbe\u7f6enacos\u7684ip")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nacos.inetutils.ip-address=10.11.105.155\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"use-only-site-local-interfaces\u53c2\u6570\u53ef\u4ee5\u8ba9nacos\u4f7f\u7528\u5c40\u57df\u7f51ip\uff0c\u8fd9\u4e2a\u5728nacos\u90e8\u7f72\u7684\u673a\u5668\u6709\u591a\u7f51\u5361\u65f6\u5f88\u6709\u7528\uff0c\u53ef\u4ee5\u8ba9nacos\u9009\u62e9\u5c40\u57df\u7f51\u7f51\u5361")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nacos.inetutils.use-only-site-local-interfaces=true\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ignored-interfaces\u652f\u6301\u7f51\u5361\u6570\u7ec4\uff0c\u53ef\u4ee5\u8ba9nacos\u5ffd\u7565\u591a\u4e2a\u7f51\u5361")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nacos.inetutils.ignored-interfaces[0]=eth0\nnacos.inetutils.ignored-interfaces[1]=eth1\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"preferred-networks\u53c2\u6570\u53ef\u4ee5\u8ba9nacos\u4f18\u5148\u9009\u62e9\u5339\u914d\u7684ip\uff0c\u652f\u6301\u6b63\u5219\u5339\u914d\u548c\u524d\u7f00\u5339\u914d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nacos.inetutils.preferred-networks[0]=30.5.124.\nnacos.inetutils.preferred-networks[0]=30.5.124.(25[0-5]|2[0-4]\\\\d|((1d{2})|([1-9]?\\\\d))),30.5.124.(25[0-5]|2[0-4]\\\\d|((1d{2})|([1-9]?\\\\d)))\n")))}d.isMDXComponent=!0}}]);