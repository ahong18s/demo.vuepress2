import{_ as r,r as d,o as u,c as m,d as n,a as e,w as s,b as i,e as t}from"./app-8ceb8f5d.js";const v={},p=e("h1",{id:"markdown",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown","aria-hidden":"true"},"#"),i(" Markdown")],-1),b=e("h2",{id:"自定义容器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自定义容器","aria-hidden":"true"},"#"),i(" 自定义容器")],-1),g=t(`<p>使用：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: &lt;type&gt; [title]
[content]
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>type</code> 是必需的， <code>title</code> 和 <code>content</code> 是可选的。</p><p>支持的 <code>type</code> 有：</p>`,4),_=e("li",null,[e("code",null,"tip")],-1),h=e("li",null,[e("code",null,"warning")],-1),f=e("li",null,[e("code",null,"danger")],-1),k=e("li",null,[e("code",null,"details")],-1),w=e("ul",null,[e("li",null,[e("code",null,"code-group")]),e("li",null,[e("code",null,"code-group-item")])],-1),x=e("li",null,[e("p",null,"示例 1 （默认标题）：")],-1),y=t(`<p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tip
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
\`\`\`ts
console.log(&#39;你好，VuePress！&#39;)
\`\`\`
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="custom-container danger"><p class="custom-container-title">STOP</p><p>危险区域，禁止通行</p></div><details class="custom-container details"><summary>点击查看代码</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>console.log(&#39;你好，VuePress！&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><ul><li>示例 3 （Code Group 别名）：</li></ul><p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: code-group
::: code-group-item FOO
\`\`\`ts
const foo = &#39;foo&#39;
\`\`\`
:::
::: code-group-item BAR
\`\`\`ts
const bar = &#39;bar&#39;
\`\`\`
:::
::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p>`,17),C=e("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[e("pre",{class:"language-typescript"},[e("code",null,`const foo = 'foo'
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),B=e("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[e("pre",{class:"language-typescript"},[e("code",null,`const bar = 'bar'
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1);function G(N,O){const o=d("NpmBadge"),l=d("RouterLink"),a=d("CodeGroupItem"),c=d("CodeGroup");return u(),m("div",null,[p,n(o,{package:"@vuepress/theme-default"}),b,e("ul",null,[e("li",null,[g,e("ul",null,[_,h,f,k,e("li",null,[n(l,{to:"/reference/default-theme/components.html#codegroup"},{default:s(()=>[i("CodeGroup")]),_:1}),i(" 和 "),n(l,{to:"/reference/default-theme/components.html#codegroupitem"},{default:s(()=>[i("CodeGroupItem")]),_:1}),i(" 的别名： "),w])])]),x]),y,n(c,null,{default:s(()=>[n(a,{title:"FOO"},{default:s(()=>[C]),_:1}),n(a,{title:"BAR"},{default:s(()=>[B]),_:1})]),_:1})])}const P=r(v,[["render",G],["__file","markdown.html.vue"]]);export{P as default};
