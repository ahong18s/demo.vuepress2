import{_ as p,r as o,o as c,c as i,a as s,b as n,d as t,w as e,e as l}from"./app-111ec351.js";const u={},r=s("h1",{id:"添加额外页面",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#添加额外页面","aria-hidden":"true"},"#"),n(" 添加额外页面")],-1),d=s("p",null,"有时你可能希望在不创建 Markdown 文件的情况下添加一些额外的页面。",-1),k=l(`<h2 id="添加默认的主页" tabindex="-1"><a class="header-anchor" href="#添加默认的主页" aria-hidden="true">#</a> 添加默认的主页</h2><p>作为一个主题作者，你可能不想要求用户必须创建一个 <code>/README.md</code> 文件来作为主页，但是你希望提供一个默认的主页：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createPage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/core&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// 初始化之后，所有的页面已经加载完毕</span>
  <span class="token keyword">async</span> <span class="token function">onInitialized</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果主页不存在</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>app<span class="token punctuation">.</span>pages<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>path <span class="token operator">!==</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 创建一个主页</span>
      <span class="token keyword">const</span> homepage <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createPage</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 设置 frontmatter</span>
        frontmatter<span class="token operator">:</span> <span class="token punctuation">{</span>
          layout<span class="token operator">:</span> <span class="token string">&#39;Layout&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 设置 markdown 内容</span>
        content<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\
# 欢迎来到 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>app<span class="token punctuation">.</span>options<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">

这是默认主页
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token comment">// 把它添加到 \`app.pages\`</span>
      app<span class="token punctuation">.</span>pages<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>homepage<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function m(v,b){const a=o("RouterLink");return c(),i("div",null,[r,d,s("p",null,[n("我们可以借助于 "),t(a,{to:"/reference/plugin-api.html"},{default:e(()=>[n("插件 API")]),_:1}),n(" 和 "),t(a,{to:"/reference/node-api.html"},{default:e(()=>[n("Node API")]),_:1}),n(" 来轻松实现。")]),k])}const h=p(u,[["render",m],["__file","adding-extra-pages.html.vue"]]);export{h as default};
