import{_ as r,r as l,o as p,c as u,d as e,a as n,w as a,b as s,e as o}from"./app-111ec351.js";const m={},v=n("h1",{id:"markdown",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown","aria-hidden":"true"},"#"),s(" Markdown")],-1),g=n("h2",{id:"自定义容器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义容器","aria-hidden":"true"},"#"),s(" 自定义容器")],-1),b=o(`<p>使用：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span> [title]
[content]
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>type</code> 是必需的， <code>title</code> 和 <code>content</code> 是可选的。</p><p>支持的 <code>type</code> 有：</p>`,4),k=n("li",null,[n("code",null,"tip")],-1),_=n("li",null,[n("code",null,"warning")],-1),h=n("li",null,[n("code",null,"danger")],-1),f=n("li",null,[n("code",null,"details")],-1),w=n("ul",null,[n("li",null,[n("code",null,"code-group")]),n("li",null,[n("code",null,"code-group-item")])],-1),y=n("li",null,[n("p",null,"示例 1 （默认标题）：")],-1),x=o(`<p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>这是一个提示</p></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>这是一个警告</p></div><div class="custom-container danger"><p class="custom-container-title">警告</p><p>这是一个危险警告</p></div><details class="custom-container details"><p>这是一个 details 标签</p></details><ul><li>示例 2 （自定义标题）：</li></ul><p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">ts</span>
<span class="token code-block language-ts"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;你好，VuePress！&#39;</span><span class="token punctuation">)</span></span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="custom-container danger"><p class="custom-container-title">STOP</p><p>危险区域，禁止通行</p></div><details class="custom-container details"><summary>点击查看代码</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;你好，VuePress！&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><ul><li>示例 3 （Code Group 别名）：</li></ul><p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: code-group
::: code-group-item FOO
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">ts</span>
<span class="token code-block language-ts"><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span></span>
<span class="token punctuation">\`\`\`</span></span>
:::
::: code-group-item BAR
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">ts</span>
<span class="token code-block language-ts"><span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span></span>
<span class="token punctuation">\`\`\`</span></span>
:::
::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p>`,17),C=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" foo "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'foo'"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" bar "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'bar'"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1);function G(N,O){const d=l("NpmBadge"),i=l("RouterLink"),t=l("CodeGroupItem"),c=l("CodeGroup");return p(),u("div",null,[v,e(d,{package:"@vuepress/theme-default"}),g,n("ul",null,[n("li",null,[b,n("ul",null,[k,_,h,f,n("li",null,[e(i,{to:"/reference/default-theme/components.html#codegroup"},{default:a(()=>[s("CodeGroup")]),_:1}),s(" 和 "),e(i,{to:"/reference/default-theme/components.html#codegroupitem"},{default:a(()=>[s("CodeGroupItem")]),_:1}),s(" 的别名： "),w])])]),y]),x,e(c,null,{default:a(()=>[e(t,{title:"FOO"},{default:a(()=>[C]),_:1}),e(t,{title:"BAR"},{default:a(()=>[B]),_:1})]),_:1})])}const P=r(m,[["render",G],["__file","markdown.html.vue"]]);export{P as default};
