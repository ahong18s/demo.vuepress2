import{_ as c,r as i,o as p,c as m,d as n,a as e,b as l,w as t,e as s}from"./app-09910f35.js";const v={},g=e("h1",{id:"内置组件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#内置组件","aria-hidden":"true"},"#"),l(" 内置组件")],-1),b={id:"badge",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#badge","aria-hidden":"true"},"#",-1),_=s(`<ul><li><p>Props:</p><ul><li>type <ul><li>类型： <code>&#39;tip&#39; | &#39;warning&#39; | &#39;danger&#39;</code></li><li>默认值： <code>&#39;tip&#39;</code></li></ul></li><li>text <ul><li>类型： <code>string</code></li><li>默认值： <code>&#39;&#39;</code></li></ul></li><li>vertical <ul><li>类型： <code>&#39;top&#39; | &#39;middle&#39; | &#39;bottom&#39; | undefined</code></li><li>默认值： <code>undefined</code></li></ul></li></ul></li><li><p>示例：</p></li></ul><p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>- VuePress - &lt;Badge type=&quot;tip&quot; text=&quot;v2&quot; vertical=&quot;top&quot; /&gt;
- VuePress - &lt;Badge type=&quot;warning&quot; text=&quot;v2&quot; vertical=&quot;middle&quot; /&gt;
- VuePress - &lt;Badge type=&quot;danger&quot; text=&quot;v2&quot; vertical=&quot;bottom&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p>`,4),f=s(`<h2 id="codegroup" tabindex="-1"><a class="header-anchor" href="#codegroup" aria-hidden="true">#</a> CodeGroup</h2><ul><li><p>详情：</p><p><a href="#codegroupitem">CodeGroupItem</a> 组件的 Wrapper 。</p></li></ul><h2 id="codegroupitem" tabindex="-1"><a class="header-anchor" href="#codegroupitem" aria-hidden="true">#</a> CodeGroupItem</h2><ul><li><p>Props:</p><ul><li>title <ul><li>类型： <code>string</code></li><li>是否必需： <code>true</code></li></ul></li><li>active <ul><li>类型： <code>boolean</code></li><li>默认值： <code>false</code></li></ul></li></ul></li><li><p>详情：</p><p>该组件必须放置在 <a href="#codegroup">CodeGroup</a> 组件的内部。</p><p>可以通过 <code>active</code> Prop 来设置初始激活的元素。如果不设置，默认激活第一个元素。</p></li><li><p>示例：</p></li></ul><p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>&lt;CodeGroup&gt;
  &lt;CodeGroupItem title=&quot;PNPM&quot;&gt;

\`\`\`bash:no-line-numbers
pnpm install
\`\`\`

  &lt;/CodeGroupItem&gt;

  &lt;CodeGroupItem title=&quot;YARN&quot;&gt;

\`\`\`bash:no-line-numbers
yarn install
\`\`\`

  &lt;/CodeGroupItem&gt;

  &lt;CodeGroupItem title=&quot;NPM&quot; active&gt;

\`\`\`bash:no-line-numbers
npm install
\`\`\`

  &lt;/CodeGroupItem&gt;
&lt;/CodeGroup&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p>`,7),q=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`pnpm install
`)])],-1),x=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`yarn install
`)])],-1),C=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`npm install
`)])],-1),k={class:"custom-container warning"},G=e("p",{class:"custom-container-title"},"注意",-1),w=e("p",null,[l("你必须在 "),e("code",null,"<CodeGroupItem>"),l(" 的开始标签和代码块之间添加一个空行，否则代码块无法被 Markdown 正确解析。")],-1),P=e("p",null,"所有内容首先都必须是合法的 Markdown ，然后才是一个 Vue SFC 。",-1);function B(N,V){const r=i("NpmBadge"),d=i("Badge"),o=i("CodeGroupItem"),u=i("CodeGroup"),a=i("RouterLink");return p(),m("div",null,[g,n(r,{package:"@vuepress/theme-default"}),e("h2",b,[h,l(" Badge "),n(d,{text:"badge"})]),_,e("ul",null,[e("li",null,[l("VuePress - "),n(d,{type:"tip",text:"v2",vertical:"top"})]),e("li",null,[l("VuePress - "),n(d,{type:"warning",text:"v2",vertical:"middle"})]),e("li",null,[l("VuePress - "),n(d,{type:"danger",text:"v2",vertical:"bottom"})])]),f,n(u,null,{default:t(()=>[n(o,{title:"PNPM"},{default:t(()=>[q]),_:1}),n(o,{title:"YARN"},{default:t(()=>[x]),_:1}),n(o,{title:"NPM",active:""},{default:t(()=>[C]),_:1})]),_:1}),e("div",k,[G,w,P,e("p",null,[l("了解更多： "),n(a,{to:"/advanced/cookbook/markdown-and-vue-sfc.html"},{default:t(()=>[l("Cookbook > Markdown 与 Vue SFC")]),_:1})]),e("p",null,[l("或者你可以选择使用 "),n(a,{to:"/reference/default-theme/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8"},{default:t(()=>[l("自定义容器")]),_:1}),l(" 。")])])])}const y=c(v,[["render",B],["__file","components.html.vue"]]);export{y as default};
