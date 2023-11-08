import{_ as a,v as p,b as o,t as l,F as s,L as e,R as t,M as c}from"./chunks/framework.dd59a003.js";const D=JSON.parse('{"title":"Vue Router and the Composition API","description":"","frontmatter":{},"headers":[],"relativePath":"guide/advanced/composition-api.md","filePath":"guide/advanced/composition-api.md"}'),r={name:"guide/advanced/composition-api.md"},y=s("h1",{id:"Vue-Router-and-the-Composition-API",tabindex:"-1"},[e("Vue Router and the Composition API "),s("a",{class:"header-anchor",href:"#Vue-Router-and-the-Composition-API","aria-label":'Permalink to "Vue Router and the Composition API"'},"​")],-1),B=t(`<p>The introduction of <code>setup</code> and Vue&#39;s <a href="https://v3.vuejs.org/guide/composition-api-introduction.html" target="_blank" rel="noreferrer">Composition API</a>, open up new possibilities but to be able to get the full potential out of Vue Router, we will need to use a few new functions to replace access to <code>this</code> and in-component navigation guards.</p><h2 id="Accessing-the-Router-and-current-Route-inside-setup" tabindex="-1">Accessing the Router and current Route inside <code>setup</code> <a class="header-anchor" href="#Accessing-the-Router-and-current-Route-inside-setup" aria-label="Permalink to &quot;Accessing the Router and current Route inside \`setup\`&quot;">​</a></h2><p>Because we don&#39;t have access to <code>this</code> inside of <code>setup</code>, we cannot directly access <code>this.$router</code> or <code>this.$route</code> anymore. Instead we use the <code>useRouter</code> and <code>useRoute</code> functions:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">useRouter</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">useRoute</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">setup</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">useRouter</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">route</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">useRoute</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">pushWithQuery</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">query</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;search&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">query</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">          ...</span><span style="color:#E5C07B;">route</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">query</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          ...</span><span style="color:#E06C75;">query</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">      })</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useRouter, useRoute } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">router</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useRouter</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">route</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useRoute</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">pushWithQuery</span><span style="color:#24292E;">(</span><span style="color:#E36209;">query</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      router.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;search&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        query: {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">route.query,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">query,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>The <code>route</code> object is a reactive object, so any of its properties can be watched and you should <strong>avoid watching the whole <code>route</code></strong> object. In most scenarios, you should directly watch the param you are expecting to change</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">useRoute</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue-router&#39;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">ref</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">watch</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">setup</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">route</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">useRoute</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">userData</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">ref</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// fetch the user information when params change</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">watch</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">      () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">route</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">params</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">newId</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">userData</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">await</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fetchUser</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">newId</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    )</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useRoute } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref, watch } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">route</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useRoute</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">userData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// fetch the user information when params change</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">watch</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> route.params.id,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#E36209;">newId</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        userData.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fetchUser</span><span style="color:#24292E;">(newId)</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Note we still have access to <code>$router</code> and <code>$route</code> in templates, so there is no need to return <code>router</code> or <code>route</code> inside of <code>setup</code>.</p><h2 id="Navigation-Guards" tabindex="-1">Navigation Guards <a class="header-anchor" href="#Navigation-Guards" aria-label="Permalink to &quot;Navigation Guards&quot;">​</a></h2><p>While you can still use in-component navigation guards with a <code>setup</code> function, Vue Router exposes update and leave guards as Composition API functions:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">onBeforeRouteLeave</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">onBeforeRouteUpdate</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue-router&#39;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">ref</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">setup</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// same as beforeRouteLeave option with no access to \`this\`</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">onBeforeRouteLeave</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">to</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">from</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">answer</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">window</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">confirm</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#98C379;">&#39;Do you really want to leave? you have unsaved changes!&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">      )</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// cancel the navigation and stay on the same page</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">!</span><span style="color:#E06C75;">answer</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">userData</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">ref</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// same as beforeRouteUpdate option with no access to \`this\`</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">onBeforeRouteUpdate</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">to</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">from</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// only fetch the user if the id changed as maybe only the query or the hash changed</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">to</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">params</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">!==</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">from</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">params</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">userData</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">await</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fetchUser</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">to</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">params</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    })</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { onBeforeRouteLeave, onBeforeRouteUpdate } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// same as beforeRouteLeave option with no access to \`this\`</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onBeforeRouteLeave</span><span style="color:#24292E;">((</span><span style="color:#E36209;">to</span><span style="color:#24292E;">, </span><span style="color:#E36209;">from</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">answer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> window.</span><span style="color:#6F42C1;">confirm</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;Do you really want to leave? you have unsaved changes!&#39;</span></span>
<span class="line"><span style="color:#24292E;">      )</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// cancel the navigation and stay on the same page</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">answer) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">userData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// same as beforeRouteUpdate option with no access to \`this\`</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onBeforeRouteUpdate</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">to</span><span style="color:#24292E;">, </span><span style="color:#E36209;">from</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// only fetch the user if the id changed as maybe only the query or the hash changed</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (to.params.id </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> from.params.id) {</span></span>
<span class="line"><span style="color:#24292E;">        userData.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fetchUser</span><span style="color:#24292E;">(to.params.id)</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Composition API guards can also be used in any component rendered by <code>&lt;router-view&gt;</code>, they don&#39;t have to be used directly on the route component like in-component guards.</p><h2 id="useLink" tabindex="-1"><code>useLink</code> <a class="header-anchor" href="#useLink" aria-label="Permalink to &quot;\`useLink\`&quot;">​</a></h2><p>Vue Router exposes the internal behavior of RouterLink as a composable. It accepts a reactive object like the props of <code>RouterLink</code> and exposes low-level properties to build your own <code>RouterLink</code> component or generate custom links:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">RouterLink</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">useLink</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue-router&#39;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">computed</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;AppLink&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">props</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// add @ts-ignore if using TypeScript</span></span>
<span class="line"><span style="color:#ABB2BF;">    ...</span><span style="color:#E5C07B;">RouterLink</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">props</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">inactiveClass</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">String</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">setup</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">props</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// the resolved route object</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">route</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// the href to use in a link</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">href</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// boolean ref  indicating if the link is active</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">isActive</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// boolean ref  indicating if the link is exactly active</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">isExactActive</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// function to navigate to the link</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">navigate</span></span>
<span class="line"><span style="color:#ABB2BF;">      } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">useLink</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">props</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">isExternalLink</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">computed</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">      () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">typeof</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">props</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">to</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;string&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">props</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">to</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">startsWith</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;http&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">isExternalLink</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">href</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">navigate</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">isActive</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { RouterLink, useLink } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { computed } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;AppLink&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  props: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// add @ts-ignore if using TypeScript</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">RouterLink.props,</span></span>
<span class="line"><span style="color:#24292E;">    inactiveClass: String,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">(</span><span style="color:#E36209;">props</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// the resolved route object</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">route</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// the href to use in a link</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">href</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// boolean ref  indicating if the link is active</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">isActive</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// boolean ref  indicating if the link is exactly active</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">isExactActive</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// function to navigate to the link</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">navigate</span></span>
<span class="line"><span style="color:#24292E;">      } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useLink</span><span style="color:#24292E;">(props)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">isExternalLink</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">computed</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> props.to </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> props.to.</span><span style="color:#6F42C1;">startsWith</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;http&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> { isExternalLink, href, navigate, isActive }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Note that the RouterLink&#39;s <code>v-slot</code> gives access to the same properties as the <code>useLink</code> composable.</p>`,15);function i(A,F,E,u,d,C){const n=c("VueSchoolLink");return p(),o("div",null,[y,l(n,{href:"https://vueschool.io/lessons/router-and-the-composition-api",title:"Learn how to use Vue Router with the composition API"}),B])}const f=a(r,[["render",i]]);export{D as __pageData,f as default};
