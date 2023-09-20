import{_ as c,r as d,o as u,c as m,d as i,a as e,b as n,w as s,e as t}from"./app-8ceb8f5d.js";const v={},p=e("h1",{id:"markdown",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown","aria-hidden":"true"},"#"),n(" Markdown")],-1),g=e("h2",{id:"custom-containers",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#custom-containers","aria-hidden":"true"},"#"),n(" Custom Containers")],-1),b=t(`<p>Usage:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: &lt;type&gt; [title]
[content]
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>type</code> is required, and the <code>title</code> and <code>content</code> are optional.</p><p>Supported <code>type</code> :</p>`,4),h=e("li",null,[e("code",null,"tip")],-1),_=e("li",null,[e("code",null,"warning")],-1),f=e("li",null,[e("code",null,"danger")],-1),w=e("li",null,[e("code",null,"details")],-1),k=e("ul",null,[e("li",null,[e("code",null,"code-group")]),e("li",null,[e("code",null,"code-group-item")])],-1),x=e("li",null,[e("p",null,"Example 1 (default title):")],-1),C=t(`<p><strong>Input</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tip
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
\`\`\`ts
console.log(&#39;Hello, VuePress!&#39;)
\`\`\`
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p><div class="custom-container danger"><p class="custom-container-title">STOP</p><p>Danger zone, do not proceed</p></div><details class="custom-container details"><summary>Click me to view the code</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>console.log(&#39;Hello, VuePress!&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><ul><li>Example 3 (code group alias):</li></ul><p><strong>Input</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: code-group
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p>`,17),T=e("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[e("pre",{class:"language-typescript"},[e("code",null,`const foo = 'foo'
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),y=e("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[e("pre",{class:"language-typescript"},[e("code",null,`const bar = 'bar'
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1);function O(B,G){const o=d("NpmBadge"),l=d("RouterLink"),a=d("CodeGroupItem"),r=d("CodeGroup");return u(),m("div",null,[p,i(o,{package:"@vuepress/theme-default"}),g,e("ul",null,[e("li",null,[b,e("ul",null,[h,_,f,w,e("li",null,[n("Alias of "),i(l,{to:"/en-US/reference/default-theme/components.html#codegroup"},{default:s(()=>[n("CodeGroup")]),_:1}),n(" and "),i(l,{to:"/en-US/reference/default-theme/components.html#codegroupitem"},{default:s(()=>[n("CodeGroupItem")]),_:1}),n(": "),k])])]),x]),C,i(r,null,{default:s(()=>[i(a,{title:"FOO"},{default:s(()=>[T]),_:1}),i(a,{title:"BAR"},{default:s(()=>[y]),_:1})]),_:1})])}const N=c(v,[["render",O],["__file","markdown.html.vue"]]);export{N as default};
