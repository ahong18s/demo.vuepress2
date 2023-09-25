import{_ as r,r as d,o as c,c as o,d as n,a as i,b as e,w as l,e as a}from"./app-09910f35.js";const u={},v=i("h1",{id:"toc",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#toc","aria-hidden":"true"},"#"),e(" toc")],-1),p=a(`<p>该插件会提供一个目录 (table-of-contents, TOC) 组件。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm i -D @vuepress/plugin-toc@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { tocPlugin } from &#39;@vuepress/plugin-toc&#39;

export default {
  plugins: [
    tocPlugin({
      // 配置项
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="与-markdown-目录语法的区别" tabindex="-1"><a class="header-anchor" href="#与-markdown-目录语法的区别" aria-hidden="true">#</a> 与 Markdown 目录语法的区别</h2>`,5),m=a(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>&lt;!-- Markdown 目录语法 --&gt;
[[toc]]

&lt;!-- Vue 目录组件 --&gt;
&lt;Toc /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Build 模式中，它们都可以被正确地预渲染。然而，它们之间存在一些区别。</p><p>Markdown 语法 <code>[[toc]]</code> 仅能在 Markdown 文件中使用。它是由 markdown-it 解析的，生成的目录是静态内容。</p><p>组件 <code>&lt;Toc/&gt;</code> 既可以用在 Markdown 文件中，也可以用在 Vue 文件中。它是由 Vue 加载的，生成的目录是一个 Vue 组件。</p>`,4),g=i("code",null,"linkClass",-1),b=i("code",null,"linkActiveClass",-1),h=a(`<p>因此，该插件对于主题开发者来说更为有用。</p><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2><h3 id="componentname" tabindex="-1"><a class="header-anchor" href="#componentname" aria-hidden="true">#</a> componentName</h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>&#39;Toc&#39;</code></p></li><li><p>详情：</p><p>指定目录组件的名称。</p></li></ul><h3 id="defaultpropsoptions" tabindex="-1"><a class="header-anchor" href="#defaultpropsoptions" aria-hidden="true">#</a> defaultPropsOptions</h3><ul><li><p>类型： <code>Partial&lt;TocPropsOptions&gt;</code></p></li><li><p>默认值： <code>{}</code></p></li><li><p>详情：</p><p>覆盖组件 <a href="#options">options</a> Prop 的默认值。</p></li></ul><h2 id="组件-props" tabindex="-1"><a class="header-anchor" href="#组件-props" aria-hidden="true">#</a> 组件 Props</h2><p>目录组件可以通过 Props 来进行自定义。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>&lt;template&gt;
  &lt;Toc :headers=&quot;headers&quot; :options=&quot;options&quot; /&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="headers" tabindex="-1"><a class="header-anchor" href="#headers" aria-hidden="true">#</a> headers</h3><ul><li>类型： <code>PageHeader[]</code></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>interface PageHeader {
  level: number
  title: string
  slug: string
  children: PageHeader[]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>详情：</p><p>指定要渲染的标题数组。</p><p>如果该 Prop 没有被设置，默认会使用当前页面的标题。</p></li></ul><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h3><ul><li>类型： <code>Partial&lt;TocPropsOptions&gt;</code></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>interface TocPropsOptions {
  containerTag: string
  containerClass: string
  listClass: string
  itemClass: string
  linkTag: &#39;a&#39; | &#39;RouterLink&#39;
  linkClass: string
  linkActiveClass: string
  linkChildrenActiveClass: string
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>默认值：</p><p>下列默认值可以用过 <a href="#defaultpropsoptions">defaultPropsOptions</a> 来覆盖：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>const defaultOptions = {
  containerTag: &#39;nav&#39;,
  containerClass: &#39;vuepress-toc&#39;,
  listClass: &#39;vuepress-toc-list&#39;,
  itemClass: &#39;vuepress-toc-item&#39;,
  linkTag: &#39;RouterLink&#39;,
  linkClass: &#39;vuepress-toc-link&#39;,
  linkActiveClass: &#39;active&#39;,
  linkChildrenActiveClass: &#39;active&#39;,
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>详情：</p><p>自定义目录组件。</p><p>如果 <code>containerTag</code> 设置为空字符串 <code>&#39;&#39;</code> ，那么最外层的 <code>&lt;nav&gt;</code> Container 会被完全移除。</p></li><li><p>示例：</p><p>使用默认 options 的目录组件的渲染结果类似以下结构：</p></li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>&lt;template&gt;
  &lt;!-- container --&gt;
  &lt;nav class=&quot;vuepress-toc&quot;&gt;
    &lt;!-- list --&gt;
    &lt;ul class=&quot;vuepress-toc-list&quot;&gt;
      &lt;!-- item --&gt;
      &lt;li class=&quot;vuepress-toc-item&quot;&gt;
        &lt;!-- link --&gt;
        &lt;RouterLink class=&quot;vuepress-toc-link&quot; to=&quot;#foo&quot;&gt;Foo&lt;/RouterLink&gt;
      &lt;/li&gt;
      &lt;!-- item with children --&gt;
      &lt;li class=&quot;vuepress-toc-item&quot;&gt;
        &lt;!-- link (children active) --&gt;
        &lt;RouterLink class=&quot;vuepress-toc-link active&quot; to=&quot;#bar&quot;&gt;Bar&lt;/RouterLink&gt;
        &lt;!-- list (children) --&gt;
        &lt;ul class=&quot;vuepress-toc-list&quot;&gt;
          &lt;!-- item --&gt;
          &lt;li class=&quot;vuepress-toc-item&quot;&gt;
            &lt;!-- link (active) --&gt;
            &lt;RouterLink class=&quot;vuepress-toc-link active&quot; to=&quot;#bar-child&quot;&gt;Bar Child&lt;/RouterLink&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function k(f,_){const t=d("NpmBadge"),s=d("RouterLink");return c(),o("div",null,[v,n(t,{package:"@vuepress/plugin-toc"}),p,i("p",null,[e("与 "),n(s,{to:"/guide/markdown.html#%E7%9B%AE%E5%BD%95"},{default:l(()=>[e("Markdown 目录语法")]),_:1}),e(" 类似，该插件提供的目录组件可以直接在你的 Markdown 内容中使用：")]),m,i("p",null,[e("该插件可以和 "),n(s,{to:"/reference/plugin/active-header-links.html"},{default:l(()=>[e("@vuepress/plugin-active-header-links")]),_:1}),e(" 协同工作，你只需要将 "),n(s,{to:"/reference/plugin/active-header-links.html#headerlinkselector"},{default:l(()=>[e("headerLinkSelector")]),_:1}),e(" 与该插件的 "),g,e(" 匹配即可。当页面滚动至某个标题锚点后，对应的链接就会被加上 "),b,e(" 类名。")]),h])}const x=r(u,[["render",k],["__file","toc.html.vue"]]);export{x as default};
