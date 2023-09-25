import{_ as c,r as i,o as p,c as m,d as n,a as e,b as t,w as l,e as s}from"./app-09910f35.js";const v={},g=e("h1",{id:"built-in-components",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#built-in-components","aria-hidden":"true"},"#"),t(" Built-in Components")],-1),h={id:"badge",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#badge","aria-hidden":"true"},"#",-1),_=s(`<ul><li><p>Props:</p><ul><li>type <ul><li>Type: <code>&#39;tip&#39; | &#39;warning&#39; | &#39;danger&#39;</code></li><li>Default: <code>&#39;tip&#39;</code></li></ul></li><li>text <ul><li>Type: <code>string</code></li><li>Default: <code>&#39;&#39;</code></li></ul></li><li>vertical <ul><li>Type: <code>&#39;top&#39; | &#39;middle&#39; | &#39;bottom&#39; | undefined</code></li><li>Default: <code>undefined</code></li></ul></li></ul></li><li><p>Example:</p></li></ul><p><strong>Input</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>- VuePress - &lt;Badge type=&quot;tip&quot; text=&quot;v2&quot; vertical=&quot;top&quot; /&gt;
- VuePress - &lt;Badge type=&quot;warning&quot; text=&quot;v2&quot; vertical=&quot;middle&quot; /&gt;
- VuePress - &lt;Badge type=&quot;danger&quot; text=&quot;v2&quot; vertical=&quot;bottom&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p>`,4),f=s(`<h2 id="codegroup" tabindex="-1"><a class="header-anchor" href="#codegroup" aria-hidden="true">#</a> CodeGroup</h2><ul><li><p>Details:</p><p>Wrapper of the <a href="#codegroupitem">CodeGroupItem</a> components.</p></li></ul><h2 id="codegroupitem" tabindex="-1"><a class="header-anchor" href="#codegroupitem" aria-hidden="true">#</a> CodeGroupItem</h2><ul><li><p>Props:</p><ul><li>title <ul><li>Type: <code>string</code></li><li>Required: <code>true</code></li></ul></li><li>active <ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul></li></ul></li><li><p>Details:</p><p>This component must be placed inside a <a href="#codegroup">CodeGroup</a> component.</p><p>Use the <code>active</code> prop to set the initial active item, or the first item will be activated by default.</p></li><li><p>Example:</p></li></ul><p><strong>Input</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>&lt;CodeGroup&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p>`,7),q=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`pnpm install
`)])],-1),x=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`yarn install
`)])],-1),C=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`npm install
`)])],-1),w={class:"custom-container warning"},y=e("p",{class:"custom-container-title"},"warning",-1),k=e("p",null,[t("You must add an empty line between the starting tag of "),e("code",null,"<CodeGroupItem>"),t(" and the code fence, otherwise the code fence will not be parsed correctly by Markdown.")],-1),G=e("p",null,"All content must be valid Markdown first, and then a Vue SFC.",-1);function P(I,B){const u=i("NpmBadge"),o=i("Badge"),a=i("CodeGroupItem"),r=i("CodeGroup"),d=i("RouterLink");return p(),m("div",null,[g,n(u,{package:"@vuepress/theme-default"}),e("h2",h,[b,t(" Badge "),n(o,{text:"badge"})]),_,e("ul",null,[e("li",null,[t("VuePress - "),n(o,{type:"tip",text:"v2",vertical:"top"})]),e("li",null,[t("VuePress - "),n(o,{type:"warning",text:"v2",vertical:"middle"})]),e("li",null,[t("VuePress - "),n(o,{type:"danger",text:"v2",vertical:"bottom"})])]),f,n(r,null,{default:l(()=>[n(a,{title:"PNPM"},{default:l(()=>[q]),_:1}),n(a,{title:"YARN"},{default:l(()=>[x]),_:1}),n(a,{title:"NPM",active:""},{default:l(()=>[C]),_:1})]),_:1}),e("div",w,[y,k,G,e("p",null,[t("Learn more: "),n(d,{to:"/en-US/advanced/cookbook/markdown-and-vue-sfc.html"},{default:l(()=>[t("Cookbook > Markdown and Vue SFC")]),_:1})]),e("p",null,[t("Alternatively, you can use the "),n(d,{to:"/en-US/reference/default-theme/markdown.html#custom-containers"},{default:l(()=>[t("custom containers")]),_:1}),t(".")])])])}const V=c(v,[["render",P],["__file","components.html.vue"]]);export{V as default};
