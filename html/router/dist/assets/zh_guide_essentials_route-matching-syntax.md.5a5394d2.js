import{_ as n,v as p,b as l,t as o,F as s,L as e,R as t,M as c}from"./chunks/framework.dd59a003.js";const v=JSON.parse('{"title":"路由的匹配语法","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/essentials/route-matching-syntax.md","filePath":"zh/guide/essentials/route-matching-syntax.md"}'),r={name:"zh/guide/essentials/route-matching-syntax.md"},y=s("h1",{id:"路由的匹配语法",tabindex:"-1"},[e("路由的匹配语法 "),s("a",{class:"header-anchor",href:"#路由的匹配语法","aria-label":'Permalink to "路由的匹配语法"'},"​")],-1),B=t(`<p>大多数应用都会使用 <code>/about</code> 这样的静态路由和 <code>/users/:userId</code> 这样的动态路由，就像我们刚才在<a href="./dynamic-matching.html">动态路由匹配</a>中看到的那样，但是 Vue Router 可以提供更多的方式！</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>为了简单起见，所有的路由<strong>都省略了 <code>component</code> 属性</strong>，只关注 <code>path</code> 值。</p></div><h2 id="在参数中自定义正则" tabindex="-1">在参数中自定义正则 <a class="header-anchor" href="#在参数中自定义正则" aria-label="Permalink to &quot;在参数中自定义正则&quot;">​</a></h2><p>当定义像 <code>:userId</code> 这样的参数时，我们内部使用以下的正则 <code>([^/]+)</code> (至少有一个字符不是斜杠 <code>/</code> )来从 URL 中提取参数。这很好用，除非你需要根据参数的内容来区分两个路由。想象一下，两个路由 <code>/:orderId</code> 和 <code>/:productName</code>，两者会匹配完全相同的 URL，所以我们需要一种方法来区分它们。最简单的方法就是在路径中添加一个静态部分来区分它们：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 匹配 /o/3549</span></span>
<span class="line"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/o/:orderId&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 匹配 /p/books</span></span>
<span class="line"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/p/:productName&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 匹配 /o/3549</span></span>
<span class="line"><span style="color:#24292E;">  { path: </span><span style="color:#032F62;">&#39;/o/:orderId&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 匹配 /p/books</span></span>
<span class="line"><span style="color:#24292E;">  { path: </span><span style="color:#032F62;">&#39;/p/:productName&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>但在某些情况下，我们并不想添加静态的 <code>/o</code> <code>/p</code> 部分。由于，<code>orderId</code> 总是一个数字，而 <code>productName</code> 可以是任何东西，所以我们可以在括号中为参数指定一个自定义的正则：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// /:orderId -&gt; 仅匹配数字</span></span>
<span class="line"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/:orderId(</span><span style="color:#56B6C2;">\\\\</span><span style="color:#98C379;">d+)&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// /:productName -&gt; 匹配其他任何内容</span></span>
<span class="line"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/:productName&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// /:orderId -&gt; 仅匹配数字</span></span>
<span class="line"><span style="color:#24292E;">  { path: </span><span style="color:#032F62;">&#39;/:orderId(</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d+)&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// /:productName -&gt; 匹配其他任何内容</span></span>
<span class="line"><span style="color:#24292E;">  { path: </span><span style="color:#032F62;">&#39;/:productName&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>现在，转到 <code>/25</code> 将匹配 <code>/:orderId</code>，其他情况将会匹配 <code>/:productName</code>。<code>routes</code> 数组的顺序并不重要!</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>确保<strong>转义反斜杠( <code>\\</code> )</strong>，就像我们对 <code>\\d</code> (变成<code>\\\\d</code>)所做的那样，在 JavaScript 中实际传递字符串中的反斜杠字符。</p></div><h2 id="可重复的参数" tabindex="-1">可重复的参数 <a class="header-anchor" href="#可重复的参数" aria-label="Permalink to &quot;可重复的参数&quot;">​</a></h2><p>如果你需要匹配具有多个部分的路由，如 <code>/first/second/third</code>，你应该用 <code>*</code>（0 个或多个）和 <code>+</code>（1 个或多个）将参数标记为可重复：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// /:chapters -&gt;  匹配 /one, /one/two, /one/two/three, 等</span></span>
<span class="line"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/:chapters+&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// /:chapters -&gt; 匹配 /, /one, /one/two, /one/two/three, 等</span></span>
<span class="line"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/:chapters*&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// /:chapters -&gt;  匹配 /one, /one/two, /one/two/three, 等</span></span>
<span class="line"><span style="color:#24292E;">  { path: </span><span style="color:#032F62;">&#39;/:chapters+&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// /:chapters -&gt; 匹配 /, /one, /one/two, /one/two/three, 等</span></span>
<span class="line"><span style="color:#24292E;">  { path: </span><span style="color:#032F62;">&#39;/:chapters*&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>这将为你提供一个参数数组，而不是一个字符串，并且在使用命名路由时也需要你传递一个数组：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 给定 { path: &#39;/:chapters*&#39;, name: &#39;chapters&#39; },</span></span>
<span class="line"><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">resolve</span><span style="color:#ABB2BF;">({ </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;chapters&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">params</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">chapters</span><span style="color:#ABB2BF;">: [] } }).</span><span style="color:#E06C75;">href</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 产生 /</span></span>
<span class="line"><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">resolve</span><span style="color:#ABB2BF;">({ </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;chapters&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">params</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">chapters</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&#39;a&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;b&#39;</span><span style="color:#ABB2BF;">] } }).</span><span style="color:#E06C75;">href</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 产生 /a/b</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 给定 { path: &#39;/:chapters+&#39;, name: &#39;chapters&#39; },</span></span>
<span class="line"><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">resolve</span><span style="color:#ABB2BF;">({ </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;chapters&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">params</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">chapters</span><span style="color:#ABB2BF;">: [] } }).</span><span style="color:#E06C75;">href</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 抛出错误，因为 \`chapters\` 为空</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 给定 { path: &#39;/:chapters*&#39;, name: &#39;chapters&#39; },</span></span>
<span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">({ name: </span><span style="color:#032F62;">&#39;chapters&#39;</span><span style="color:#24292E;">, params: { chapters: [] } }).href</span></span>
<span class="line"><span style="color:#6A737D;">// 产生 /</span></span>
<span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">({ name: </span><span style="color:#032F62;">&#39;chapters&#39;</span><span style="color:#24292E;">, params: { chapters: [</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;b&#39;</span><span style="color:#24292E;">] } }).href</span></span>
<span class="line"><span style="color:#6A737D;">// 产生 /a/b</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 给定 { path: &#39;/:chapters+&#39;, name: &#39;chapters&#39; },</span></span>
<span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">({ name: </span><span style="color:#032F62;">&#39;chapters&#39;</span><span style="color:#24292E;">, params: { chapters: [] } }).href</span></span>
<span class="line"><span style="color:#6A737D;">// 抛出错误，因为 \`chapters\` 为空</span></span></code></pre></div><p>这些也可以通过在<strong>右括号后</strong>添加它们与自定义正则结合使用：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 仅匹配数字</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 匹配 /1, /1/2, 等</span></span>
<span class="line"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/:chapters(</span><span style="color:#56B6C2;">\\\\</span><span style="color:#98C379;">d+)+&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 匹配 /, /1, /1/2, 等</span></span>
<span class="line"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/:chapters(</span><span style="color:#56B6C2;">\\\\</span><span style="color:#98C379;">d+)*&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 仅匹配数字</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 匹配 /1, /1/2, 等</span></span>
<span class="line"><span style="color:#24292E;">  { path: </span><span style="color:#032F62;">&#39;/:chapters(</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d+)+&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 匹配 /, /1, /1/2, 等</span></span>
<span class="line"><span style="color:#24292E;">  { path: </span><span style="color:#032F62;">&#39;/:chapters(</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d+)*&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><h2 id="Sensitive-与-strict-路由配置" tabindex="-1">Sensitive 与 strict 路由配置 <a class="header-anchor" href="#Sensitive-与-strict-路由配置" aria-label="Permalink to &quot;Sensitive 与 strict 路由配置&quot;">​</a></h2><p>默认情况下，所有路由是不区分大小写的，并且能匹配带有或不带有尾部斜线的路由。例如，路由 <code>/users</code> 将匹配 <code>/users</code>、<code>/users/</code>、甚至 <code>/Users/</code>。这种行为可以通过 <code>strict</code> 和 <code>sensitive</code> 选项来修改，它们既可以应用在整个全局路由上，又可以应用于当前路由上：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">createRouter</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">history</span><span style="color:#ABB2BF;">: </span><span style="color:#61AFEF;">createWebHistory</span><span style="color:#ABB2BF;">(),</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">routes</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 将匹配 /users/posva 而非：</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// - /users/posva/ 当 strict: true</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// - /Users/posva 当 sensitive: true</span></span>
<span class="line"><span style="color:#ABB2BF;">    { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/users/:id&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">sensitive</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 将匹配 /users, /Users, 以及 /users/42 而非 /users/ 或 /users/42/</span></span>
<span class="line"><span style="color:#ABB2BF;">    { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/users/:id?&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  ],</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">strict</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">// applies to all routes</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">router</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createRouter</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  history: </span><span style="color:#6F42C1;">createWebHistory</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">  routes: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 将匹配 /users/posva 而非：</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// - /users/posva/ 当 strict: true</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// - /Users/posva 当 sensitive: true</span></span>
<span class="line"><span style="color:#24292E;">    { path: </span><span style="color:#032F62;">&#39;/users/:id&#39;</span><span style="color:#24292E;">, sensitive: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 将匹配 /users, /Users, 以及 /users/42 而非 /users/ 或 /users/42/</span></span>
<span class="line"><span style="color:#24292E;">    { path: </span><span style="color:#032F62;">&#39;/users/:id?&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  strict: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// applies to all routes</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="可选参数" tabindex="-1">可选参数 <a class="header-anchor" href="#可选参数" aria-label="Permalink to &quot;可选参数&quot;">​</a></h2><p>你也可以通过使用 <code>?</code> 修饰符(0 个或 1 个)将一个参数标记为可选：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 匹配 /users 和 /users/posva</span></span>
<span class="line"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/users/:userId?&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 匹配 /users 和 /users/42</span></span>
<span class="line"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/users/:userId(</span><span style="color:#56B6C2;">\\\\</span><span style="color:#98C379;">d+)?&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 匹配 /users 和 /users/posva</span></span>
<span class="line"><span style="color:#24292E;">  { path: </span><span style="color:#032F62;">&#39;/users/:userId?&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 匹配 /users 和 /users/42</span></span>
<span class="line"><span style="color:#24292E;">  { path: </span><span style="color:#032F62;">&#39;/users/:userId(</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d+)?&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>请注意，<code>*</code> 在技术上也标志着一个参数是可选的，但 <code>?</code> 参数不能重复。</p><h2 id="调试" tabindex="-1">调试 <a class="header-anchor" href="#调试" aria-label="Permalink to &quot;调试&quot;">​</a></h2><p>如果你需要探究你的路由是如何转化为正则的，以了解为什么一个路由没有被匹配，或者，报告一个 bug，你可以使用<a href="https://paths.esm.dev/?p=AAMeJSyAwR4UbFDAFxAcAGAIJXMAAA..#" target="_blank" rel="noreferrer">路径排名工具</a>。它支持通过 URL 分享你的路由。</p>`,25);function i(d,h,F,A,u,E){const a=c("VueSchoolLink");return p(),l("div",null,[y,o(a,{href:"https://vueschool.io/lessons/vue-router-4-advanced-routes-matching-syntax",title:"Learn how to use advanced route routes' matching syntax"}),B])}const g=n(r,[["render",i]]);export{v as __pageData,g as default};
