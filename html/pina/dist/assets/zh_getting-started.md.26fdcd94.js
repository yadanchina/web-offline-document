import{_ as s,o as a,c as n,S as p}from"./chunks/framework.7ffc5276.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"zh/getting-started.md","filePath":"zh/getting-started.md"}'),l={name:"zh/getting-started.md"},o=p(`<h2 id="installation" tabindex="-1">安装 <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;安装 %{#installation}%&quot;">​</a></h2><p>用你喜欢的包管理器安装 <code>pinia</code>：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#62E884;">yarn</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">add</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">pinia</span></span>
<span class="line"><span style="color:#7B7F8B;"># 或者使用 npm</span></span>
<span class="line"><span style="color:#62E884;">npm</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">install</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">pinia</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">yarn</span><span style="color:#393A34;"> </span><span style="color:#B56959;">add</span><span style="color:#393A34;"> </span><span style="color:#B56959;">pinia</span></span>
<span class="line"><span style="color:#A0ADA0;"># 或者使用 npm</span></span>
<span class="line"><span style="color:#59873A;">npm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">install</span><span style="color:#393A34;"> </span><span style="color:#B56959;">pinia</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果你的应用使用的 Vue 版本低于 2.7，你还需要安装组合式 API 包：<code>@vue/composition-api</code>。如果你使用的是 Nuxt，你应该参考<a href="/ssr/nuxt.html">这篇指南</a>。</p></div><p>如果你正在使用 Vue CLI，你可以试试这个<a href="https://github.com/wobsoriano/vue-cli-plugin-pinia" target="_blank" rel="noreferrer"><strong>非官方插件</strong></a>。</p><p>创建一个 pinia 实例 (根 store) 并将其传递给应用：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { createApp } </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">vue</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line highlighted"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { createPinia } </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">pinia</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> App </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">./App.vue</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> pinia </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">createPinia</span><span style="color:#F6F6F4;">()</span></span>
<span class="line highlighted"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> app </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">createApp</span><span style="color:#F6F6F4;">(App)</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#F6F6F4;">app.</span><span style="color:#62E884;">use</span><span style="color:#F6F6F4;">(pinia)</span></span>
<span class="line"><span style="color:#F6F6F4;">app.</span><span style="color:#62E884;">mount</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">#app</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">createApp</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">vue</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line highlighted"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">createPinia</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">pinia</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">App</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">./App.vue</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">pinia</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">createPinia</span><span style="color:#999999;">()</span></span>
<span class="line highlighted"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">app</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">createApp</span><span style="color:#999999;">(</span><span style="color:#B07D48;">App</span><span style="color:#999999;">)</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#B07D48;">app</span><span style="color:#999999;">.</span><span style="color:#59873A;">use</span><span style="color:#999999;">(</span><span style="color:#B07D48;">pinia</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#B07D48;">app</span><span style="color:#999999;">.</span><span style="color:#59873A;">mount</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">#app</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">)</span></span></code></pre></div><p>如果你使用的是 Vue 2，你还需要安装一个插件，并在应用的根部注入创建的 <code>pinia</code>：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { createPinia, PiniaVuePlugin } </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">pinia</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#F6F6F4;">Vue.</span><span style="color:#62E884;">use</span><span style="color:#F6F6F4;">(PiniaVuePlugin)</span></span>
<span class="line highlighted"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> pinia </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">createPinia</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Vue</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">  el</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">#app</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 其他配置...</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// ...</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 请注意，同一个\`pinia&#39;实例</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 可以在同一个页面的多个 Vue 应用中使用。 </span></span>
<span class="line highlighted"><span style="color:#F6F6F4;">  pinia,</span></span>
<span class="line"><span style="color:#F6F6F4;">})</span></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">createPinia</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">PiniaVuePlugin</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">pinia</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#B07D48;">Vue</span><span style="color:#999999;">.</span><span style="color:#59873A;">use</span><span style="color:#999999;">(</span><span style="color:#B07D48;">PiniaVuePlugin</span><span style="color:#999999;">)</span></span>
<span class="line highlighted"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">pinia</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">createPinia</span><span style="color:#999999;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Vue</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">el</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">#app</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#A0ADA0;">// 其他配置...</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#A0ADA0;">// ...</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#A0ADA0;">// 请注意，同一个\`pinia&#39;实例</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#A0ADA0;">// 可以在同一个页面的多个 Vue 应用中使用。 </span></span>
<span class="line highlighted"><span style="color:#393A34;">  </span><span style="color:#B07D48;">pinia</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">})</span></span></code></pre></div><p>这样才能提供 devtools 的支持。在 Vue 3 中，一些功能仍然不被支持，如 time traveling 和编辑，这是因为 vue-devtools 还没有相关的 API，但 devtools 也有很多针对 Vue 3 的专属功能，而且就开发者的体验来说，Vue 3 整体上要好得多。在 Vue 2 中，Pinia 使用的是 Vuex 的现有接口 (因此不能与 Vuex 一起使用) 。</p><h2 id="what-is-a-store" tabindex="-1">Store 是什么？ <a class="header-anchor" href="#what-is-a-store" aria-label="Permalink to &quot;Store 是什么？%{#what-is-a-store}%&quot;">​</a></h2><p>Store (如 Pinia) 是一个保存状态和业务逻辑的实体，它并不与你的组件树绑定。换句话说，<strong>它承载着全局状态</strong>。它有点像一个永远存在的组件，每个组件都可以读取和写入它。它有<strong>三个概念</strong>，<a href="./core-concepts/state.html">state</a>、<a href="./core-concepts/getters.html">getter</a> 和 <a href="./core-concepts/actions.html">action</a>，我们可以假设这些概念相当于组件中的 <code>data</code>、 <code>computed</code> 和 <code>methods</code>。</p><h2 id="when-should-i-use-a-store" tabindex="-1">应该在什么时候使用 Store? <a class="header-anchor" href="#when-should-i-use-a-store" aria-label="Permalink to &quot;应该在什么时候使用 Store? %{#when-should-i-use-a-store}%&quot;">​</a></h2><p>一个 Store 应该包含可以在整个应用中访问的数据。这包括在许多地方使用的数据，例如显示在导航栏中的用户信息，以及需要通过页面保存的数据，例如一个非常复杂的多步骤表单。</p><p>另一方面，你应该避免在 Store 中引入那些原本可以在组件中保存的本地数据，例如，一个元素在页面中的可见性。</p><p>并非所有的应用都需要访问全局状态，但如果你的应用确实需要一个全局状态，那 Pinia 将使你的开发过程更轻松。</p>`,16),e=[o];function t(c,r,i,y,F,h){return a(),n("div",null,e)}const A=s(l,[["render",t]]);export{g as __pageData,A as default};
