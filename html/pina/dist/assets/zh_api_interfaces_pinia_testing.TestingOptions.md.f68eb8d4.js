import{_ as e,o as t,c as a,S as o}from"./chunks/framework.7ffc5276.js";const u=JSON.parse('{"title":"接口：TestingOptions","description":"","frontmatter":{"sidebar":"auto","editLinks":false,"sidebarDepth":3},"headers":[],"relativePath":"zh/api/interfaces/pinia_testing.TestingOptions.md","filePath":"zh/api/interfaces/pinia_testing.TestingOptions.md"}'),i={name:"zh/api/interfaces/pinia_testing.TestingOptions.md"},n=o('<p><a href="./../">API 文档</a> / <a href="./../modules/pinia_testing.html">@pinia/testing</a> / TestingOptions</p><h1 id="interface-testingoptions" tabindex="-1">接口：TestingOptions <a class="header-anchor" href="#interface-testingoptions" aria-label="Permalink to &quot;接口：TestingOptions %{#interface-testingoptions}%&quot;">​</a></h1><p><a href="./../modules/pinia_testing.html">@pinia/testing</a>.TestingOptions</p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><h3 id="createspy" tabindex="-1">createSpy <a class="header-anchor" href="#createspy" aria-label="Permalink to &quot;createSpy %{#createspy}%&quot;">​</a></h3><p>• <code>Optional</code> <strong>createSpy</strong>: (<code>fn?</code>: (...<code>args</code>: <code>any</code>[]) =&gt; <code>any</code>) =&gt; (...<code>args</code>: <code>any</code>[]) =&gt; <code>any</code></p><h4 id="type-declaration" tabindex="-1">类型声明 <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;类型声明 %{#type-declaration}%&quot;">​</a></h4><p>▸ (<code>fn?</code>): (...<code>args</code>: <code>any</code>[]) =&gt; <code>any</code></p><p>用于创建 action 和 <code>$patch()</code> 的 spy 的函数。 在 jest 项目中默认为 <code>jest.fn()</code>，在 vitest 项目中默认为 <code>vi.fn()</code>。</p><h5 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn?</code></td><td style="text-align:left;">(...<code>args</code>: <code>any</code>[]) =&gt; <code>any</code></td></tr></tbody></table><h5 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h5><p><code>fn</code></p><p>▸ (...<code>args</code>): <code>any</code></p><h5 id="参数-1" tabindex="-1">参数 <a class="header-anchor" href="#参数-1" aria-label="Permalink to &quot;参数&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th></tr></thead><tbody><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td></tr></tbody></table><h5 id="返回值-1" tabindex="-1">返回值 <a class="header-anchor" href="#返回值-1" aria-label="Permalink to &quot;返回值&quot;">​</a></h5><p><code>any</code></p><hr><h3 id="fakeapp" tabindex="-1">fakeApp <a class="header-anchor" href="#fakeapp" aria-label="Permalink to &quot;fakeApp %{#fakeapp}%&quot;">​</a></h3><p>• <code>Optional</code> <strong>fakeApp</strong>: <code>boolean</code></p><p>创建一个空的 App，并通过创建的测试 pinia 调用 <code>app.use(pinia)</code>。 这养可以让你在单元测试时使用插件， 因为插件<strong>必须等待 pinia 安装好后才会执行</strong>。 默认为 false。</p><hr><h3 id="initialstate" tabindex="-1">initialState <a class="header-anchor" href="#initialstate" aria-label="Permalink to &quot;initialState %{#initialstate}%&quot;">​</a></h3><p>• <code>Optional</code> <strong>initialState</strong>: <a href="./../modules/pinia.html#statetree"><code>StateTree</code></a></p><p>允许你定义每个 store 的部分初始 state。 这个 state 会在 store 创建后被应用，这样可以让你只设置测试中需要的几个属性。</p><hr><h3 id="plugins" tabindex="-1">插件 <a class="header-anchor" href="#plugins" aria-label="Permalink to &quot;插件 %{#plugins}%&quot;">​</a></h3><p>• <code>Optional</code> <strong>plugins</strong>: <a href="./pinia.PiniaPlugin.html"><code>PiniaPlugin</code></a>[]</p><p>在测试插件之前必装的插件。 可以向你的应用添加测试时使用的任意插件。</p><hr><h3 id="stubactions" tabindex="-1">stubActions <a class="header-anchor" href="#stubactions" aria-label="Permalink to &quot;stubActions %{#stubactions}%&quot;">​</a></h3><p>• <code>Optional</code> <strong>stubActions</strong>: <code>boolean</code></p><p>当设置为 false 时， actions 只会被监听，它们仍然会执行。 当设置为 true 时，actions 将被替换为 spies，导致其代码不被执行。 默认为 true。 注意：当提供 <code>createSpy()</code> 时，它将<strong>只</strong>给 <code>fn</code> 参数 传递 <code>undefined</code>。 你仍然需要在 <code>createSpy()</code> 中处理这个问题。</p><hr><h3 id="stubpatch" tabindex="-1">stubPatch <a class="header-anchor" href="#stubpatch" aria-label="Permalink to &quot;stubPatch %{#stubpatch}%&quot;">​</a></h3><p>• <code>Optional</code> <strong>stubPatch</strong>: <code>boolean</code></p><p>当设置为 true 时，对 <code>$patch()</code> 的调用将不会改变状态。 默认为 false。注意：当提供 <code>createSpy()</code> 时，它将<strong>只</strong>给 <code>fn</code> 参数 传递 <code>undefined</code>。 你仍然需要在 <code>createSpy()</code> 中处理这个问题。</p>',38),c=[n];function d(s,r,l,p,h,g){return t(),a("div",null,c)}const b=e(i,[["render",d]]);export{u as __pageData,b as default};
