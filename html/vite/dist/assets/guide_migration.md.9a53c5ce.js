import{_ as e,o as a,c as r,a as t}from"./app.dbaf790a.js";const f=JSON.parse('{"title":"从 v3 迁移","description":"","frontmatter":{},"headers":[{"level":2,"title":"Rollup 3","slug":"rollup-3","link":"#rollup-3","children":[]},{"level":2,"title":"现代浏览器基准线变化","slug":"modern-browser-baseline-change","link":"#modern-browser-baseline-change","children":[]},{"level":2,"title":"其他一般性变化","slug":"general-changes","link":"#general-changes","children":[{"level":3,"title":"编码","slug":"encoding","link":"#encoding","children":[]},{"level":3,"title":"以字符串形式导入 CSS","slug":"importing-css-as-a-string","link":"#importing-css-as-a-string","children":[]},{"level":3,"title":"默认情况下的生产构建","slug":"production-builds-by-default","link":"#production-builds-by-default","children":[]},{"level":3,"title":"环境变量","slug":"environment-variables","link":"#environment-variables","children":[]}]},{"level":2,"title":"进阶","slug":"advanced","link":"#advanced","children":[]},{"level":2,"title":"从 v2 迁移","slug":"migration-from-v2","link":"#migration-from-v2","children":[]}],"relativePath":"guide/migration.md"}'),l={name:"guide/migration.md"},o=t(`<h1 id="migration-from-v3" tabindex="-1">从 v3 迁移 <a class="header-anchor" href="#migration-from-v3" aria-hidden="true">#</a></h1><h2 id="rollup-3" tabindex="-1">Rollup 3 <a class="header-anchor" href="#rollup-3" aria-hidden="true">#</a></h2><p>Vite 现在正式启用 <a href="https://github.com/vitejs/vite/issues/9870" target="_blank" rel="noreferrer">Rollup 3</a>，这使得我们可以简化 Vite 内部的资源处理并同时拥有许多改进。详情请查看 <a href="https://github.com/rollup/rollup/releases/tag/v3.0.0" target="_blank" rel="noreferrer">Rollup 3 版本记录</a>。</p><p>Rollup 3 尽最大可能兼容了 Rollup 2。如果你在项目中使用了自定义的 <a href="./../config/build-options.html#rollup-options"><code>rollupOptions</code></a> 并（升级后）遇到了问题，请先查看 <a href="https://rollupjs.org/migration/" target="_blank" rel="noreferrer">Rollup 迁移指南</a> 来更新升级你的配置。</p><h2 id="modern-browser-baseline-change" tabindex="-1">现代浏览器基准线变化 <a class="header-anchor" href="#modern-browser-baseline-change" aria-hidden="true">#</a></h2><p>当前对于现代浏览器的构建目标及现调整为了默认 <code>safari14</code> 以求更广的 ES2020 兼容性（从 <code>safari13</code> 升级）。这意味着现代化构建现在可以使用 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt" target="_blank" rel="noreferrer"><code>BigInt</code></a>，同时 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing" target="_blank" rel="noreferrer">空值合并运算符</a> 将不再被转译。如果你需要支持更旧版本的浏览器，你可以照常添加 <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-legacy" target="_blank" rel="noreferrer"><code>@vitejs/plugin-legacy</code></a>。</p><h2 id="general-changes" tabindex="-1">其他一般性变化 <a class="header-anchor" href="#general-changes" aria-hidden="true">#</a></h2><h3 id="encoding" tabindex="-1">编码 <a class="header-anchor" href="#encoding" aria-hidden="true">#</a></h3><p>构建的默认字符集现在是 utf8（查看 <a href="https://github.com/vitejs/vite/issues/10753" target="_blank" rel="noreferrer">#10753</a> 了解更多细节）。</p><h3 id="importing-css-as-a-string" tabindex="-1">以字符串形式导入 CSS <a class="header-anchor" href="#importing-css-as-a-string" aria-hidden="true">#</a></h3><p>在过往的 Vite 3 之中，以默认导入形式导入一个 <code>.css</code> 文件的可能会造成对 CSS 的双重加载。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> cssString </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./global.css</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><p>这种双重加载出现的原因是 <code>.css</code> 文件是将会被释放（emit）到最终产物的，并且很可能 CSS 字符串将会在应用代码中被使用到，就比如被框架运行时注入的时候。对于现在的 Vite 4，<code>.css</code> 默认导出 <a href="https://github.com/vitejs/vite/issues/11094" target="_blank" rel="noreferrer">已经被废弃</a>。在这种情况下你将需要使用 <code>?inline</code> 这个查询参数后缀，而这时将不会将导入的 <code>.css</code> 样式文件释放到最终产物。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> stuff </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./global.css?inline</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h3 id="production-builds-by-default" tabindex="-1">默认情况下的生产构建 <a class="header-anchor" href="#production-builds-by-default" aria-hidden="true">#</a></h3><p>不管所传递的 <code>--mode</code> 是什么，<code>vite build</code> 总是构建生产版本。之前，若将 <code>mode</code> 改为 <code>production</code> 之外的模式会构建开发版本，如果现在希望用于开发构建，可以在 <code>.env.{mode}</code> 文件中设置 <code>NODE_ENV=development</code>。</p><p>在本次变动中，如果 <code>p<wbr>rocess.env.NODE_ENV</code> 已经被定义，<code>vite dev</code> 和 <code>vite build</code> 将不再覆盖它。所以如果在构建前设置了 <code>p<wbr>rocess.env.NODE_ENV = &#39;development&#39;</code>，将会构建开发版本。这在并行执行多个构建或开发服务器时提供了更多的控制权。</p><p>请参阅更新后的 <a href="/guide/env-and-mode.html#modes"><code>mode</code> 文档</a> 了解更多详细信息。</p><h3 id="environment-variables" tabindex="-1">环境变量 <a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a></h3><p>Vite 现在使用 <code>dotenv</code> 16 和 <code>dotenv-expand</code> 9（之前是 <code>dotenv</code> 14 和 <code>dotenv-expand</code> 5）如果你有一个包含 <code>#</code> 或者 <code>\`</code> 的值，你将需要将它们以双引号包裹起来。</p><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;">VITE_APP=ab#cd\`ef</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">VITE_APP=&quot;ab#cd\`ef&quot;</span></span>
<span class="line"></span></code></pre></div><p>了解更多详情，请查看 <a href="https://github.com/motdotla/dotenv/blob/master/CHANGELOG.md" target="_blank" rel="noreferrer"><code>dotenv</code></a> 和 <a href="https://github.com/motdotla/dotenv-expand/blob/master/CHANGELOG.md" target="_blank" rel="noreferrer"><code>dotenv-expand</code> 更新日志</a>。</p><h2 id="advanced" tabindex="-1">进阶 <a class="header-anchor" href="#advanced" aria-hidden="true">#</a></h2><p>下列改动仅会影响到插件/工具的作者：</p><ul><li><a href="https://github.com/vitejs/vite/issues/11036" target="_blank" rel="noreferrer">[#11036] feat(client)!: remove never implemented hot.decline</a><ul><li>使用 <code>hot.invalidate</code> 来代替</li></ul></li><li><a href="https://github.com/vitejs/vite/issues/9669" target="_blank" rel="noreferrer">[#9669] feat: align object interface for <code>transformIndexHtml</code> hook</a><ul><li>使用 <code>order</code> 来代替 <code>enforce</code></li></ul></li></ul><p>此外，还有其他一些只影响少数用户的破坏性变化。</p><ul><li><a href="https://github.com/vitejs/vite/pull/11101" target="_blank" rel="noreferrer">[#11101] feat(ssr)!: remove dedupe and mode support for CJS</a><ul><li>您应该迁移到 SSR 的默认 ESM 模式，CJS SSR 支持可能会在下一个 Vite 主要版本删除。</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/10475" target="_blank" rel="noreferrer">[#10475] feat: handle static assets in case-sensitive manner</a><ul><li>您的项目不应该依赖于会被不同操作系统忽略大小写的文件名。</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/10996" target="_blank" rel="noreferrer">[#10996] fix!: make <code>NODE_ENV</code> more predictable</a><ul><li>有关此更改的解释，请参阅 PR。</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/10903" target="_blank" rel="noreferrer">[#10903] refactor(types)!: remove facade type files</a></li></ul><h2 id="migration-from-v2" tabindex="-1">从 v2 迁移 <a class="header-anchor" href="#migration-from-v2" aria-hidden="true">#</a></h2><p>请先查看之前 Vite v3 文档中的 <a href="https://cn.vitejs.dev/guide/migration-from-v2.html" target="_blank" rel="noreferrer">Migration from v2 Guide</a> 了解迁移到 v3 所需要的更改，然后再继续执行本页提到的相关更改。</p>`,29),n=[o];function s(i,c,d,p,h,u){return a(),r("div",null,n)}const v=e(l,[["render",s]]);export{f as __pageData,v as default};