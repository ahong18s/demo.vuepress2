import{_ as r,r as i,o as p,c as u,d as e,a as n,b as s,w as a,e as o}from"./app-4042ea51.js";const m={},v=n("h1",{id:"markdown",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown","aria-hidden":"true"},"#"),s(" Markdown")],-1),g=n("h2",{id:"custom-containers",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#custom-containers","aria-hidden":"true"},"#"),s(" Custom Containers")],-1),k=o(`<p>Usage:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span> [title]
[content]
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>type</code> is required, and the <code>title</code> and <code>content</code> are optional.</p><p>Supported <code>type</code> :</p>`,4),b=n("li",null,[n("code",null,"tip")],-1),h=n("li",null,[n("code",null,"warning")],-1),_=n("li",null,[n("code",null,"danger")],-1),w=n("li",null,[n("code",null,"details")],-1),f=n("ul",null,[n("li",null,[n("code",null,"code-group")]),n("li",null,[n("code",null,"code-group-item")])],-1),x=n("li",null,[n("p",null,"Example 1 (default title):")],-1),y=o(`<p><strong>Input</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p><div class="custom-container tip"><p class="custom-container-title">prompt</p><p>This is a tip</p></div><div class="custom-container warning"><p class="custom-container-title">warning</p><p>This is a warning</p></div><div class="custom-container danger"><p class="custom-container-title">danger</p><p>This is a dangerous warning</p></div><details class="custom-container details"><p>This is a details block</p></details><ul><li>Example 2 (custom title):</li></ul><p><strong>Input</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">ts</span>
<span class="token code-block language-ts"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, VuePress!&#39;</span><span class="token punctuation">)</span></span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p><div class="custom-container danger"><p class="custom-container-title">STOP</p><p>Danger zone, do not proceed</p></div><details class="custom-container details"><summary>Click me to view the code</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, VuePress!&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><ul><li>Example 3 (code group alias):</li></ul><p><strong>Input</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: code-group
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p>`,17),C=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" foo "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'foo'"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" bar "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'bar'"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1);function O(B,G){const d=i("NpmBadge"),l=i("RouterLink"),t=i("CodeGroupItem"),c=i("CodeGroup");return p(),u("div",null,[v,e(d,{package:"@vuepress/theme-default"}),g,n("ul",null,[n("li",null,[k,n("ul",null,[b,h,_,w,n("li",null,[s("Alias of "),e(l,{to:"/en-US/reference/default-theme/components.html#codegroup"},{default:a(()=>[s("CodeGroup")]),_:1}),s(" and "),e(l,{to:"/en-US/reference/default-theme/components.html#codegroupitem"},{default:a(()=>[s("CodeGroupItem")]),_:1}),s(": "),f])])]),x]),y,e(c,null,{default:a(()=>[e(t,{title:"FOO"},{default:a(()=>[C]),_:1}),e(t,{title:"BAR"},{default:a(()=>[T]),_:1})]),_:1})])}const N=r(m,[["render",O],["__file","markdown.html.vue"]]);export{N as default};
