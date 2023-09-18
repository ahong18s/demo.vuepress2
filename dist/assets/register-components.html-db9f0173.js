import{_ as i,r as a,o as c,c as l,d as e,a as n,b as s,e as t}from"./app-e83a4b47.js";const r={},u=n("h1",{id:"register-components",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#register-components","aria-hidden":"true"},"#"),s(" register-components")],-1),d=t(`<p>Register Vue components from component files or directory automatically.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-register-components@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> registerComponentsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/plugin-register-components&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">registerComponentsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// options</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> components</h3><ul><li><p>Type: <code>Record&lt;string, string&gt;</code></p></li><li><p>Default: <code>{}</code></p></li><li><p>Details:</p><p>An object that defines name of components and their corresponding file path.</p><p>The key will be used as the component name, and the value is an absolute path of the component file.</p><p>If the component name from this option conflicts with <a href="#componentsdir">componentsDir</a> option, this option will have a higher priority.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/utils&#39;</span>

<span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">registerComponentsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      components<span class="token operator">:</span> <span class="token punctuation">{</span>
        FooBar<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./components/FooBar.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="componentsdir" tabindex="-1"><a class="header-anchor" href="#componentsdir" aria-hidden="true">#</a> componentsDir</h3><ul><li><p>Type: <code>string | null</code></p></li><li><p>Default: <code>null</code></p></li><li><p>Details:</p><p>Absolute path to the components directory.</p><p>Files in this directory which are matched with <a href="#componentspatterns">componentsPatterns</a> will be registered as Vue components automatically.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/utils&#39;</span>

<span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">registerComponentsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      componentsDir<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./components&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Components directory:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>components
├─ FooBar.vue
└─ Baz.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Components will be registered like this:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineAsyncComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>
  <span class="token string">&#39;FooBar&#39;</span><span class="token punctuation">,</span>
  <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/path/to/components/FooBar.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>
  <span class="token string">&#39;Baz&#39;</span><span class="token punctuation">,</span>
  <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/path/to/components/Baz.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="componentspatterns" tabindex="-1"><a class="header-anchor" href="#componentspatterns" aria-hidden="true">#</a> componentsPatterns</h3>`,16),m=n("li",null,[n("p",null,[s("Type: "),n("code",null,"string[]")])],-1),k=n("li",null,[n("p",null,[s("Default: "),n("code",null,"['**/*.vue']")])],-1),v=n("p",null,"Details:",-1),h={href:"https://github.com/sindresorhus/globby",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,[s("The patterns are relative to "),n("a",{href:"#componentsdir"},"componentsDir"),s(".")],-1),b=t('<h3 id="getcomponentname" tabindex="-1"><a class="header-anchor" href="#getcomponentname" aria-hidden="true">#</a> getComponentName</h3><ul><li><p>Type: <code>(filename: string) =&gt; string</code></p></li><li><p>Default: <code>(filename) =&gt; path.trimExt(filename.replace(/\\/|\\\\/g, &#39;-&#39;))</code></p></li><li><p>Details:</p><p>A function to get component name from the filename.</p><p>It will only take effect on the files in the <a href="#componentsdir">componentsDir</a> which are matched with the <a href="#componentspatterns">componentsPatterns</a>.</p><p>Notice that the <code>filename</code> is a filepath relative to <a href="#componentsdir">componentsDir</a>.</p></li></ul>',2);function f(y,_){const p=a("NpmBadge"),o=a("ExternalLinkIcon");return c(),l("div",null,[u,e(p,{package:"@vuepress/plugin-register-components"}),d,n("ul",null,[m,k,n("li",null,[v,n("p",null,[s("Patterns to match component files using "),n("a",h,[s("globby"),e(o)]),s(".")]),g])]),b])}const x=i(r,[["render",f],["__file","register-components.html.vue"]]);export{x as default};
