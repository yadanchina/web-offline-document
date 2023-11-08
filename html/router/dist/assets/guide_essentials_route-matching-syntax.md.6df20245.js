import{_ as n,v as e,b as o,t as p,F as s,L as l,R as t,M as c}from"./chunks/framework.dd59a003.js";const g=JSON.parse(`{"title":"Routes' Matching Syntax","description":"","frontmatter":{},"headers":[],"relativePath":"guide/essentials/route-matching-syntax.md","filePath":"guide/essentials/route-matching-syntax.md"}`),r={name:"guide/essentials/route-matching-syntax.md"},i=s("h1",{id:"Routes-Matching-Syntax",tabindex:"-1"},[l("Routes' Matching Syntax "),s("a",{class:"header-anchor",href:"#Routes-Matching-Syntax","aria-label":`Permalink to "Routes' Matching Syntax"`},"​")],-1),y=t(`<p>Most applications will use static routes like <code>/about</code> and dynamic routes like <code>/users/:userId</code> like we just saw in <a href="./dynamic-matching.html">Dynamic Route Matching</a>, but Vue Router has much more to offer!</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>For the sake of simplicity, all route records <strong>are omitting the <code>component</code> property</strong> to focus on the <code>path</code> value.</p></div><h2 id="Custom-regex-in-params" tabindex="-1">Custom regex in params <a class="header-anchor" href="#Custom-regex-in-params" aria-label="Permalink to &quot;Custom regex in params&quot;">​</a></h2><p>When defining a param like <code>:userId</code>, we internally use the following regex <code>([^/]+)</code> (at least one character that isn&#39;t a slash <code>/</code>) to extract params from URLs. This works well unless you need to differentiate two routes based on the param content. Imagine two routes <code>/:orderId</code> and <code>/:productName</code>, both would match the exact same URLs, so we need a way to differentiate them. The easiest way would be to add a static section to the path that differentiates them:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// matches /o/3549</span></span>
<span class="line"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/o/:orderId&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// matches /p/books</span></span>
<span class="line"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/p/:productName&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// matches /o/3549</span></span>
<span class="line"><span style="color:#24292E;">  { path: </span><span style="color:#032F62;">&#39;/o/:orderId&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// matches /p/books</span></span>
<span class="line"><span style="color:#24292E;">  { path: </span><span style="color:#032F62;">&#39;/p/:productName&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>But in some scenarios we don&#39;t want to add that static section <code>/o</code>/<code>p</code>. However, <code>orderId</code> is always a number while <code>productName</code> can be anything, so we can specify a custom regex for a param in parentheses:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// /:orderId -&gt; matches only numbers</span></span>
<span class="line"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/:orderId(</span><span style="color:#56B6C2;">\\\\</span><span style="color:#98C379;">d+)&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// /:productName -&gt; matches anything else</span></span>
<span class="line"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/:productName&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// /:orderId -&gt; matches only numbers</span></span>
<span class="line"><span style="color:#24292E;">  { path: </span><span style="color:#032F62;">&#39;/:orderId(</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d+)&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// /:productName -&gt; matches anything else</span></span>
<span class="line"><span style="color:#24292E;">  { path: </span><span style="color:#032F62;">&#39;/:productName&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>Now, going to <code>/25</code> will match <code>/:orderId</code> while going to anything else will match <code>/:productName</code>. The order of the <code>routes</code> array doesn&#39;t even matter!</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Make sure to <strong>escape backslashes (<code>\\</code>)</strong> like we did with <code>\\d</code> (becomes <code>\\\\d</code>) to actually pass the backslash character in a string in JavaScript.</p></div><h2 id="Repeatable-params" tabindex="-1">Repeatable params <a class="header-anchor" href="#Repeatable-params" aria-label="Permalink to &quot;Repeatable params&quot;">​</a></h2><p>If you need to match routes with multiple sections like <code>/first/second/third</code>, you should mark a param as repeatable with <code>*</code> (0 or more) and <code>+</code> (1 or more):</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// /:chapters -&gt; matches /one, /one/two, /one/two/three, etc</span></span>
<span class="line"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/:chapters+&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// /:chapters -&gt; matches /, /one, /one/two, /one/two/three, etc</span></span>
<span class="line"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/:chapters*&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// /:chapters -&gt; matches /one, /one/two, /one/two/three, etc</span></span>
<span class="line"><span style="color:#24292E;">  { path: </span><span style="color:#032F62;">&#39;/:chapters+&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// /:chapters -&gt; matches /, /one, /one/two, /one/two/three, etc</span></span>
<span class="line"><span style="color:#24292E;">  { path: </span><span style="color:#032F62;">&#39;/:chapters*&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>This will give you an array of params instead of a string and will also require you to pass an array when using named routes:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// given { path: &#39;/:chapters*&#39;, name: &#39;chapters&#39; },</span></span>
<span class="line"><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">resolve</span><span style="color:#ABB2BF;">({ </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;chapters&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">params</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">chapters</span><span style="color:#ABB2BF;">: [] } }).</span><span style="color:#E06C75;">href</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// produces /</span></span>
<span class="line"><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">resolve</span><span style="color:#ABB2BF;">({ </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;chapters&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">params</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">chapters</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&#39;a&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;b&#39;</span><span style="color:#ABB2BF;">] } }).</span><span style="color:#E06C75;">href</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// produces /a/b</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// given { path: &#39;/:chapters+&#39;, name: &#39;chapters&#39; },</span></span>
<span class="line"><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">resolve</span><span style="color:#ABB2BF;">({ </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;chapters&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">params</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">chapters</span><span style="color:#ABB2BF;">: [] } }).</span><span style="color:#E06C75;">href</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// throws an Error because \`chapters\` is empty</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// given { path: &#39;/:chapters*&#39;, name: &#39;chapters&#39; },</span></span>
<span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">({ name: </span><span style="color:#032F62;">&#39;chapters&#39;</span><span style="color:#24292E;">, params: { chapters: [] } }).href</span></span>
<span class="line"><span style="color:#6A737D;">// produces /</span></span>
<span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">({ name: </span><span style="color:#032F62;">&#39;chapters&#39;</span><span style="color:#24292E;">, params: { chapters: [</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;b&#39;</span><span style="color:#24292E;">] } }).href</span></span>
<span class="line"><span style="color:#6A737D;">// produces /a/b</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// given { path: &#39;/:chapters+&#39;, name: &#39;chapters&#39; },</span></span>
<span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">({ name: </span><span style="color:#032F62;">&#39;chapters&#39;</span><span style="color:#24292E;">, params: { chapters: [] } }).href</span></span>
<span class="line"><span style="color:#6A737D;">// throws an Error because \`chapters\` is empty</span></span></code></pre></div><p>These can also be combined with a custom regex by adding them <strong>after the closing parentheses</strong>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// only match numbers</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// matches /1, /1/2, etc</span></span>
<span class="line"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/:chapters(</span><span style="color:#56B6C2;">\\\\</span><span style="color:#98C379;">d+)+&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// matches /, /1, /1/2, etc</span></span>
<span class="line"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/:chapters(</span><span style="color:#56B6C2;">\\\\</span><span style="color:#98C379;">d+)*&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// only match numbers</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// matches /1, /1/2, etc</span></span>
<span class="line"><span style="color:#24292E;">  { path: </span><span style="color:#032F62;">&#39;/:chapters(</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d+)+&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// matches /, /1, /1/2, etc</span></span>
<span class="line"><span style="color:#24292E;">  { path: </span><span style="color:#032F62;">&#39;/:chapters(</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d+)*&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><h2 id="Sensitive-and-strict-route-options" tabindex="-1">Sensitive and strict route options <a class="header-anchor" href="#Sensitive-and-strict-route-options" aria-label="Permalink to &quot;Sensitive and strict route options&quot;">​</a></h2><p>By default, all routes are case-insensitive and match routes with or without a trailing slash. e.g. a route <code>/users</code> matches <code>/users</code>, <code>/users/</code>, and even <code>/Users/</code>. This behavior can be configured with the <code>strict</code> and <code>sensitive</code> options, they can be set both at a router and route level:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">createRouter</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">history</span><span style="color:#ABB2BF;">: </span><span style="color:#61AFEF;">createWebHistory</span><span style="color:#ABB2BF;">(),</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">routes</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// will match /users/posva but not:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// - /users/posva/ because of strict: true</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// - /Users/posva because of sensitive: true</span></span>
<span class="line"><span style="color:#ABB2BF;">    { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/users/:id&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">sensitive</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// will match /users, /Users, and /users/42 but not /users/ or /users/42/</span></span>
<span class="line"><span style="color:#ABB2BF;">    { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/users/:id?&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  ],</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">strict</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">// applies to all routes</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">router</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createRouter</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  history: </span><span style="color:#6F42C1;">createWebHistory</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">  routes: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// will match /users/posva but not:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// - /users/posva/ because of strict: true</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// - /Users/posva because of sensitive: true</span></span>
<span class="line"><span style="color:#24292E;">    { path: </span><span style="color:#032F62;">&#39;/users/:id&#39;</span><span style="color:#24292E;">, sensitive: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// will match /users, /Users, and /users/42 but not /users/ or /users/42/</span></span>
<span class="line"><span style="color:#24292E;">    { path: </span><span style="color:#032F62;">&#39;/users/:id?&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  strict: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// applies to all routes</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="Optional-parameters" tabindex="-1">Optional parameters <a class="header-anchor" href="#Optional-parameters" aria-label="Permalink to &quot;Optional parameters&quot;">​</a></h2><p>You can also mark a parameter as optional by using the <code>?</code> modifier (0 or 1):</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">routes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// will match /users and /users/posva</span></span>
<span class="line"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/users/:userId?&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// will match /users and /users/42</span></span>
<span class="line"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/users/:userId(</span><span style="color:#56B6C2;">\\\\</span><span style="color:#98C379;">d+)?&#39;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// will match /users and /users/posva</span></span>
<span class="line"><span style="color:#24292E;">  { path: </span><span style="color:#032F62;">&#39;/users/:userId?&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// will match /users and /users/42</span></span>
<span class="line"><span style="color:#24292E;">  { path: </span><span style="color:#032F62;">&#39;/users/:userId(</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">d+)?&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>Note that <code>*</code> technically also marks a parameter as optional but <code>?</code> parameters cannot be repeated.</p><h2 id="Debugging" tabindex="-1">Debugging <a class="header-anchor" href="#Debugging" aria-label="Permalink to &quot;Debugging&quot;">​</a></h2><p>If you need to dig how your routes are transformed into a regex to understand why a route isn&#39;t being matched or, to report a bug, you can use the <a href="https://paths.esm.dev/?p=AAMeJSyAwR4UbFDAFxAcAGAIJXMAAA..#" target="_blank" rel="noreferrer">path ranker tool</a>. It supports sharing your routes through the URL.</p>`,25);function B(d,h,u,F,A,m){const a=c("VueSchoolLink");return e(),o("div",null,[i,p(a,{href:"https://vueschool.io/lessons/vue-router-4-advanced-routes-matching-syntax",title:"Learn how to use advanced route routes' matching syntax"}),y])}const C=n(r,[["render",B]]);export{g as __pageData,C as default};
