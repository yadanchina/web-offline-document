import{_ as s,v as a,b as e,R as n}from"./chunks/framework.dd59a003.js";const h=JSON.parse('{"title":"Interface: RouteMeta","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/interfaces/RouteMeta.md","filePath":"api/interfaces/RouteMeta.md"}'),o={name:"api/interfaces/RouteMeta.md"},p=n(`<p><a href="./../">API Documentation</a> / RouteMeta</p><h1 id="Interface-RouteMeta" tabindex="-1">Interface: RouteMeta <a class="header-anchor" href="#Interface-RouteMeta" aria-label="Permalink to &quot;Interface: RouteMeta&quot;">​</a></h1><p>Interface to type <code>meta</code> fields in route records.</p><p><strong><code>Example</code></strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// typings.d.ts or router.ts</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue-router&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">declare</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">module</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue-router&#39;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">RouteMeta</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">requiresAuth</span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">boolean</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;"> }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// typings.d.ts or router.ts</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">module</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RouteMeta</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">requiresAuth</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span></code></pre></div><h2 id="Hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#Hierarchy" aria-label="Permalink to &quot;Hierarchy&quot;">​</a></h2><ul><li><p><code>Record</code>&lt;<code>string</code> | <code>number</code> | <code>symbol</code>, <code>unknown</code>&gt;</p><p>↳ <strong><code>RouteMeta</code></strong></p></li></ul>`,7),l=[p];function t(r,c,i,y,d,u){return a(),e("div",null,l)}const f=s(o,[["render",t]]);export{h as __pageData,f as default};