(this["webpackJsonpmy-first-app"]=this["webpackJsonpmy-first-app"]||[]).push([[0],{25:function(e,t,l){},32:function(e,t,l){},33:function(e,t,l){},34:function(e,t,l){},35:function(e,t,l){},36:function(e,t,l){},37:function(e,t,l){"use strict";l.r(t);var c=l(0),r=l.n(c),n=l(18),a=l.n(n),s=(l(25),l(6));function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var l,c,r=function(e,t){if(null==e)return{};var l,c,r={},n=Object.keys(e);for(c=0;c<n.length;c++)l=n[c],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(c=0;c<n.length;c++)l=n[c],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var b=c.createElement("g",null,c.createElement("path",{d:"M95.329,59.861c-0.031-7.134-0.053-12.289-3.562-16.824c-3.975-5.134-10.106-6.004-15.076-6.152 c0.837-3.587,1.079-7.564,0.692-11.863C77.277,10.705,66.624,0.414,51.839,0.006L51.626,0L29.012,0.018l-0.243-0.001 c-8.795,0-15.747,2.626-20.664,7.804c-3.043,3.203-7.085,8.798-7.513,17.845l-0.018,36.48c-0.044,0.689,0.025,1.385,0.016,2.1 c0,10.379,1.661,17.85,6.848,23.371c5.183,5.521,12.847,8.32,22.776,8.32c0.215,0,0.432-0.001,0.649-0.004H65.41h0.082 c8.858-0.074,16.343-2.998,21.646-8.455c5.293-5.447,8.143-13.208,8.24-22.441C95.377,65.037,95.335,61.32,95.329,59.861z  M30.846,19.457l19.322-0.023c4.554,0.072,8.188,4.151,8.114,8.705c-0.072,4.509-3.749,7.799-8.242,7.799 c-0.044,0-19.455,0.008-19.455,0.008c-4.554-0.073-8.186-3.823-8.113-8.375C22.544,23.017,26.286,19.413,30.846,19.457z  M67.164,73.732H28.521c-4.553,0-8.246-3.691-8.246-8.246c0-4.554,3.693-8.246,8.246-8.246h38.644c4.555,0,8.246,3.692,8.246,8.246 C75.411,70.041,71.719,73.732,67.164,73.732z"})),j=c.createElement("g",null),u=c.createElement("g",null),d=c.createElement("g",null),m=c.createElement("g",null),h=c.createElement("g",null),g=c.createElement("g",null),O=c.createElement("g",null),x=c.createElement("g",null),f=c.createElement("g",null),p=c.createElement("g",null),_=c.createElement("g",null),v=c.createElement("g",null),N=c.createElement("g",null),y=c.createElement("g",null),w=c.createElement("g",null);function E(e,t){var l=e.title,r=e.titleId,n=o(e,["title","titleId"]);return c.createElement("svg",i({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"95.938px",height:"95.938px",viewBox:"0 0 95.938 95.938",style:{enableBackground:"new 0 0 95.938 95.938"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},n),l?c.createElement("title",{id:r},l):null,b,j,u,d,m,h,g,O,x,f,p,_,v,N,y,w)}var k=c.forwardRef(E),C=(l.p,l(1));function S(e){return Object(C.jsx)("div",{className:"navbar",children:Object(C.jsxs)("div",{className:"navbar__container container",children:[Object(C.jsxs)(s.b,{to:"/blogger",className:"navbar__brand",children:[Object(C.jsx)("div",{className:"navbar__svg-layout",children:Object(C.jsx)(k,{className:"navbar__svg"})}),e.title]}),Object(C.jsx)("nav",{className:"navbar__nav nav",children:Object(C.jsx)("ul",{className:"nav__list",children:e.children})})]})})}function I(e){return Object(C.jsx)("li",{className:"nav__item",children:Object(C.jsx)(s.b,{to:e.to,className:"nav__link",children:e.children})})}l(32);var B=l(8);function R(e,t){var l=Object(c.useState)(JSON.parse(localStorage.getItem(e))||t),r=Object(B.a)(l,2),n=r[0],a=r[1];return Object(c.useEffect)((function(){localStorage.setItem(e,JSON.stringify(n))}),[n,e]),[n,a]}l(33);var M=[{title:"Create a new blog",time:"3/14/2020",author:"Admin",body:"Hit the 'Create' link to open the blog redactor.",id:"1"},{title:"Hello world",time:"3/15/2020",author:"Admin",body:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",id:"2"}];function D(){var e=R("task.blogs",M),t=Object(B.a)(e,1)[0];if(0===t.length)return Object(C.jsxs)("div",{children:["No blogs yet.",Object(C.jsx)("br",{}),"...But u can create new!"]});function l(e){return Object(C.jsx)("li",{className:"blogs__item",children:Object(C.jsxs)(s.b,{to:"/blogger/blogs/"+e.blog.id,className:"blogs__link",children:[Object(C.jsx)("h2",{className:"blogs__title",children:e.blog.title}),Object(C.jsx)("time",{className:"blogs__time",children:e.blog.time})]})})}return Object(C.jsx)("article",{className:"blogs",children:Object(C.jsx)("ul",{className:"blogs__list",children:t.map((function(e,t){return Object(C.jsx)(l,{blog:e},t)}))})})}var H=l(2);l(34);function A(){var e=Object(H.g)().id,t=R("task.blogs",[]),l=Object(B.a)(t,2),c=l[0],r=l[1],n=Object(H.f)(),a=c.find((function(t){return t.id===e}));if(!a)return Object(C.jsx)("p",{children:"NOT FOUND"});return Object(C.jsxs)("article",{className:"blog",children:[Object(C.jsxs)("header",{className:"blog__header",children:[Object(C.jsx)("h1",{className:"blog__title title",children:a.title}),Object(C.jsx)("time",{className:"blog__time",children:a.time})]}),Object(C.jsx)("p",{className:"blog__text",children:a.body}),Object(C.jsx)("address",{className:"blog__author",children:a.author}),Object(C.jsx)("button",{onClick:function(){r((function(t){return t.filter((function(t){return t.id!==e}))})),setTimeout((function(){n.push("/blogger")}),0)},className:"btn blog__btn",children:"Delete blog"})]})}l(35);function J(){return Object(C.jsxs)("section",{className:"error",children:[Object(C.jsx)("h1",{className:"error__title title",children:"ERROR"}),Object(C.jsx)("p",{className:"error__text",children:"Sorry! But it seems that this page does not exist."}),Object(C.jsx)(s.b,{to:"/blogger",className:"error__link",children:"Go to home page"})]})}var L=l(20),T=l(39);l(36);function q(){var e=Object(c.useRef)(),t=Object(c.useRef)(),l=Object(c.useRef)(),r=R("task.blogs",[]),n=Object(B.a)(r,2)[1],a=Object(H.f)();return Object(C.jsxs)("section",{className:"create",children:[Object(C.jsx)("h1",{className:"create__title title",children:"Add a new blog"}),Object(C.jsxs)("form",{onSubmit:function(c){c.preventDefault();var r=function(e,t,l){var c=new Date;return{title:e,time:c.getDate()+"/"+(c.getMonth()+1)+"/"+c.getFullYear(),author:l,body:t,id:Object(T.a)()}}(e.current.value,t.current.value,l.current.value);n((function(e){return[].concat(Object(L.a)(e),[r])})),setTimeout((function(){a.push("/blogger/blogs/"+r.id)}),0)},className:"create__form container",children:[Object(C.jsxs)("label",{className:"create__label",children:["Blog title:",Object(C.jsx)("br",{}),Object(C.jsx)("input",{ref:e,type:"text",className:"create__field",required:!0})]}),Object(C.jsxs)("label",{className:"create__label _wide",children:["Blog body:",Object(C.jsx)("br",{}),Object(C.jsx)("textarea",{ref:t,className:"create__area",required:!0})]}),Object(C.jsxs)("label",{className:"create__label",children:["Author:",Object(C.jsx)("br",{}),Object(C.jsx)("input",{ref:l,type:"text",className:"create__field",required:!0})]}),Object(C.jsx)("button",{className:"btn create__btn",type:"submit",children:"Create"})]})]})}function z(){return Object(C.jsx)("div",{className:"wrapper",children:Object(C.jsxs)(s.a,{children:[Object(C.jsxs)(S,{title:"Blogger",children:[Object(C.jsx)(I,{to:"/blogger",children:"Home"}),Object(C.jsx)(I,{to:"/blogger/create",children:"Create"})]}),Object(C.jsx)("main",{className:"main",children:Object(C.jsx)("div",{className:"main__container container",children:Object(C.jsxs)(H.c,{children:[Object(C.jsx)(H.a,{exact:!0,path:"/blogger",children:Object(C.jsx)(D,{})}),Object(C.jsx)(H.a,{exact:!0,path:"/blogger/create",children:Object(C.jsx)(q,{})}),Object(C.jsx)(H.a,{exact:!0,path:"/blogger/blogs/:id",children:Object(C.jsx)(A,{})}),Object(C.jsx)(H.a,{path:"*",children:Object(C.jsx)(J,{})})]})})})]})})}a.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(z,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.925b8fd9.chunk.js.map