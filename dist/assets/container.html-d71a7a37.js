import{_ as c,r as t,o as r,c as d,d as s,a as n,b as a,w as p,e as o}from"./app-e83a4b47.js";const u={},k=n("h1",{id:"container",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#container","aria-hidden":"true"},"#"),a(" container")],-1),h=n("p",null,"为你的 VuePress 站点注册自定义容器。",-1),m={href:"https://github.com/markdown-it/markdown-it-container",target:"_blank",rel:"noopener noreferrer"},v=o(`<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-container@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> containerPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/plugin-container&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">containerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 配置项</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="容器语法" tabindex="-1"><a class="header-anchor" href="#容器语法" aria-hidden="true">#</a> 容器语法</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span> [info]
[content]
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>type</code> 是必需的，应通过 <a href="#type">type</a> 配置项来指定。</li><li><code>info</code> 是可选的，其默认值可以通过 <a href="#locales">locales</a> 的 <code>defaultInfo</code> 配置项来指定。</li><li><code>content</code> 可是任何合法的 Markdown 内容。</li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>该插件可以被多次使用，以便支持不同类型的容器。</p></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h3>`,9),g=n("li",null,[n("p",null,[a("类型： "),n("code",null,"string")])],-1),b=n("p",null,"详情：",-1),f=n("p",null,"容器的类型。",-1),_={href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"name",-1),w=o(`<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>类型： <code>Record&lt;string, { defaultInfo: string }&gt;</code></p></li><li><p>详情：</p><p>容器在不同 locales 下的默认 <code>info</code> 。</p><p>如果没有指定该配置项，默认 <code>info</code> 会使用大写的 <a href="#type">type</a> 。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">containerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&#39;tip&#39;</span><span class="token punctuation">,</span>
      locales<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          defaultInfo<span class="token operator">:</span> <span class="token string">&#39;TIP&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;/zh/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          defaultInfo<span class="token operator">:</span> <span class="token string">&#39;提示&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),x=o(`<h3 id="before" tabindex="-1"><a class="header-anchor" href="#before" aria-hidden="true">#</a> before</h3><ul><li><p>类型： <code>(info: string) =&gt; string</code></p></li><li><p>默认值：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">(</span>info<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span>
  <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div class=&quot;custom-container </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">type</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>info <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;p class=&quot;custom-container-title&quot;&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>info<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/p&gt;</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n</span><span class="token template-punctuation string">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>详情：</p><p>一个用于渲染容器起始标签的函数。</p><p>第一个参数是 <a href="#%E5%AE%B9%E5%99%A8%E8%AF%AD%E6%B3%95">容器语法</a> 的 <code>info</code> 部分。</p><p>如果你没有设置 <a href="#after">after</a> 配置项，则该配置项也不会生效。</p></li></ul><h3 id="after" tabindex="-1"><a class="header-anchor" href="#after" aria-hidden="true">#</a> after</h3><ul><li><p>类型： <code>(info: string) =&gt; string</code></p></li><li><p>默认值：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;&lt;/div&gt;\\n&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>详情：</p><p>一个用于渲染容器结束标签的函数。</p><p>第一个参数是 <a href="#%E5%AE%B9%E5%99%A8%E8%AF%AD%E6%B3%95">容器语法</a> 的 <code>info</code> 部分。</p><p>如果你没有设置 <a href="#before">before</a> 配置项，则该配置项也不会生效。</p></li></ul><h3 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> render</h3><ul><li>类型：</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">MarkdownItContainerRenderFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  tokens<span class="token operator">:</span> Token<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  options<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
  env<span class="token operator">:</span> MarkdownEnv<span class="token punctuation">,</span>
  self<span class="token operator">:</span> Renderer
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),E=n("p",null,"详情：",-1),A={href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"},B=n("code",null,"render",-1),I=n("p",null,[a("该插件使用了一个默认的 "),n("code",null,"render"),a(" 函数。但如果你指定了该配置项，那么默认的 "),n("code",null,"render"),a(" 函数就会被替换掉，此时 "),n("a",{href:"#locales"},"locales"),a(" 、 "),n("a",{href:"#before"},"before"),a(" 和 "),n("a",{href:"#after"},"after"),a(" 配置项都会被忽略。")],-1),N=n("h3",{id:"validate",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#validate","aria-hidden":"true"},"#"),a(" validate")],-1),P=n("li",null,[n("p",null,[a("类型： "),n("code",null,"(params: string) => boolean")])],-1),R=n("p",null,"详情：",-1),V={href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"validate",-1),L=n("h3",{id:"marker",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#marker","aria-hidden":"true"},"#"),a(" marker")],-1),C=n("li",null,[n("p",null,[a("类型： "),n("code",null,"string")])],-1),D=n("p",null,"详情：",-1),F={href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"},M=n("code",null,"marker",-1);function T($,z){const l=t("NpmBadge"),e=t("ExternalLinkIcon"),i=t("RouterLink");return r(),d("div",null,[k,s(l,{package:"@vuepress/plugin-container"}),h,n("p",null,[a("该插件简化了 "),n("a",m,[a("markdown-it-container"),s(e)]),a(" 的使用方法，但同时也保留了其原本的能力。")]),n("p",null,[a("默认主题的 "),s(i,{to:"/reference/default-theme/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8"},{default:p(()=>[a("自定义容器")]),_:1}),a(" 就是由该插件支持的。")]),v,n("ul",null,[g,n("li",null,[b,f,n("p",null,[a("它将会被用作 "),n("a",_,[a("markdown-it-container"),s(e)]),a(" 的 "),y,a(" 参数。")])])]),w,n("ul",null,[n("li",null,[a("参考： "),n("ul",null,[n("li",null,[s(i,{to:"/guide/i18n.html"},{default:p(()=>[a("指南 > 多语言支持")]),_:1})])])])]),x,n("ul",null,[n("li",null,[E,n("p",null,[n("a",A,[a("markdown-it-container"),s(e)]),a(" 的 "),B,a(" 配置项。")]),I])]),N,n("ul",null,[P,n("li",null,[R,n("p",null,[n("a",V,[a("markdown-it-container"),s(e)]),a(" 的 "),q,a(" 配置项。")])])]),L,n("ul",null,[C,n("li",null,[D,n("p",null,[n("a",F,[a("markdown-it-container"),s(e)]),a(" 的 "),M,a(" 配置项。")])])])])}const j=c(u,[["render",T],["__file","container.html.vue"]]);export{j as default};
