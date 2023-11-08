import{d as u,u as d,o as c,c as i,k as r,r as g,a as p,t as v,l as _,_ as h,e as y,p as k,m as S,s as l,a2 as V,a3 as L,a4 as A,a5 as b,a6 as w,a7 as C,a8 as P,a9 as I,aa as $,ab as M,J as x,j as D,y as E,ac as N,ad as R,ae as F,af as O}from"./chunks/framework.7ffc5276.js";import{t as T}from"./chunks/theme.0f3a9405.js";const j={class:"vueschool"},B=["href","title"],G=u({__name:"VueSchoolLink",props:{href:{},title:{}},setup(e){const{site:t}=d(),a={"en-US":"Watch a free video lesson on Vue School","zh-CN":"在 Vue School 上观看免费视频课程"};return(o,s)=>(c(),i("div",j,[r("a",{href:`${o.href}?friend=vuerouter`,target:"_blank",rel:"sponsored noopener",title:o.title,class:"no-icon"},[g(o.$slots,"default",{},()=>[p(v(a[_(t).lang]),1)],!0)],8,B)]))}});const U=h(G,[["__scopeId","data-v-8f8151a0"]]),f=e=>(k("data-v-1c5cd6d2"),e=e(),S(),e),z=["href"],H=f(()=>r("span",{class:"logo-wrapper"},[r("img",{alt:"Vue Mastery Logo",width:"25px",src:"https://firebasestorage.googleapis.com/v0/b/vue-mastery.appspot.com/o/flamelink%2Fmedia%2Fvue-mastery-logo-small.png?alt=media&token=941fcc3a-2b6f-40e9-b4c8-56b3890da108"})],-1)),J={key:0,class:"description"},W=f(()=>r("span",{class:"highlight"},"Pinia Cheat Sheet",-1)),q=u({__name:"VueMasteryLogoLink",props:{for:{}},setup(e){const t=e,o={"pinia-cheat-sheet":"https://www.vuemastery.com/pinia?coupon=PINIA-DOCS&via=eduardo"}[t.for],s=t.for==="pinia-cheat-sheet";return(te,ae)=>(c(),i("a",{href:_(o),target:"_blank"},[H,s?(c(),i("span",J,[p(" Get the "),W,p(" from Vue Mastery ")])):y("",!0)],8,z))}});const K=h(q,[["__scopeId","data-v-1c5cd6d2"]]),Q={...T,enhanceApp({app:e}){e.component("VueSchoolLink",U),e.component("VueMasteryLogoLink",K)}};function m(e){if(e.extends){const t=m(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const n=m(Q),X=u({name:"VitePressApp",setup(){const{site:e}=d();return D(()=>{E(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),N(),R(),F(),n.setup&&n.setup(),()=>O(n.Layout)}});async function Y(){const e=ee(),t=Z();t.provide(L,e);const a=A(e.route);return t.provide(b,a),t.component("Content",w),t.component("ClientOnly",C),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:t,router:e,siteData:P}),{app:t,router:e,data:a}}function Z(){return I(X)}function ee(){let e=l,t;return $(a=>{let o=M(a),s=null;return o&&(e&&(t=o),(e||t===o)&&(o=o.replace(/\.js$/,".lean.js")),s=x(()=>import(o),[])),l&&(e=!1),s},n.NotFound)}l&&Y().then(({app:e,router:t,data:a})=>{t.go().then(()=>{V(t.route,a.site),e.mount("#app")})});export{Y as createApp};
