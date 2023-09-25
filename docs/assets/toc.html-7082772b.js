import{_ as r,r as a,o,c,d as n,a as i,b as e,w as t,e as l}from"./app-09910f35.js";const u={},v=i("h1",{id:"toc",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#toc","aria-hidden":"true"},"#"),e(" toc")],-1),p=l(`<p>This plugin will provide a table-of-contents (TOC) component.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm i -D @vuepress/plugin-toc@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { tocPlugin } from &#39;@vuepress/plugin-toc&#39;

export default {
  plugins: [
    tocPlugin({
      // options
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="differences-with-markdown-toc-syntax" tabindex="-1"><a class="header-anchor" href="#differences-with-markdown-toc-syntax" aria-hidden="true">#</a> Differences with Markdown TOC Syntax</h2>`,5),m=l(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>&lt;!-- markdown toc syntax --&gt;
[[toc]]

&lt;!-- vue toc component --&gt;
&lt;Toc /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Both of them can be pre-rendered correctly in build mode. However, there are some differences between them.</p><p>The markdown syntax <code>[[toc]]</code> could only be used in markdown files. It is parsed by markdown-it, and the generated TOC is static content.</p><p>The component <code>&lt;Toc/&gt;</code> could be used in both markdown files and vue files. It is loaded by vue, and the generated TOC is a vue component.</p>`,4),h=i("code",null,"linkClass",-1),b=i("code",null,"linkActiveClass",-1),g=l(`<p>Therefore, this plugin is more useful for theme developers.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="componentname" tabindex="-1"><a class="header-anchor" href="#componentname" aria-hidden="true">#</a> componentName</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;Toc&#39;</code></p></li><li><p>Details:</p><p>Specify the name of the TOC component.</p></li></ul><h3 id="defaultpropsoptions" tabindex="-1"><a class="header-anchor" href="#defaultpropsoptions" aria-hidden="true">#</a> defaultPropsOptions</h3><ul><li><p>Type: <code>Partial&lt;TocPropsOptions&gt;</code></p></li><li><p>Default: <code>{}</code></p></li><li><p>Details:</p><p>Override the default values of the component <a href="#options-1">options</a> prop.</p></li></ul><h2 id="component-props" tabindex="-1"><a class="header-anchor" href="#component-props" aria-hidden="true">#</a> Component Props</h2><p>The TOC component also accepts props for customization.</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>&lt;template&gt;
  &lt;Toc :headers=&quot;headers&quot; :options=&quot;options&quot; /&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="headers" tabindex="-1"><a class="header-anchor" href="#headers" aria-hidden="true">#</a> headers</h3><ul><li>Type: <code>PageHeader[]</code></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>interface PageHeader {
  level: number
  title: string
  slug: string
  children: PageHeader[]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>Specify the headers array to render.</p><p>If this prop is not specified, the headers of current page will be used.</p></li></ul><h3 id="options-1" tabindex="-1"><a class="header-anchor" href="#options-1" aria-hidden="true">#</a> options</h3><ul><li>Type: <code>Partial&lt;TocPropsOptions&gt;</code></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>interface TocPropsOptions {
  containerTag: string
  containerClass: string
  listClass: string
  itemClass: string
  linkTag: &#39;a&#39; | &#39;RouterLink&#39;
  linkClass: string
  linkActiveClass: string
  linkChildrenActiveClass: string
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Default:</p><p>Following default values can be overridden by <a href="#defaultpropsoptions">defaultPropsOptions</a>.</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>const defaultOptions = {
  containerTag: &#39;nav&#39;,
  containerClass: &#39;vuepress-toc&#39;,
  listClass: &#39;vuepress-toc-list&#39;,
  itemClass: &#39;vuepress-toc-item&#39;,
  linkTag: &#39;RouterLink&#39;,
  linkClass: &#39;vuepress-toc-link&#39;,
  linkActiveClass: &#39;active&#39;,
  linkChildrenActiveClass: &#39;active&#39;,
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>Customize the TOC component.</p><p>If the <code>containerTag</code> is set to an empty string <code>&#39;&#39;</code>, the <code>&lt;nav&gt;</code> container will be removed totally.</p></li><li><p>Example:</p><p>The rendered TOC component with default options looks like:</p></li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>&lt;template&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function f(k,T){const d=a("NpmBadge"),s=a("RouterLink");return o(),c("div",null,[v,n(d,{package:"@vuepress/plugin-toc"}),p,i("p",null,[e("Similar to the "),n(s,{to:"/en-US/guide/markdown.html#table-of-contents"},{default:t(()=>[e("Table of Contents Markdown Syntax")]),_:1}),e(", the TOC component that provided by this plugin could be used in your markdown content directly:")]),m,i("p",null,[e("This plugin could work together with "),n(s,{to:"/en-US/reference/plugin/active-header-links.html"},{default:t(()=>[e("@vuepress/plugin-active-header-links")]),_:1}),e(" by setting the "),n(s,{to:"/en-US/reference/plugin/active-header-links.html#headerlinkselector"},{default:t(()=>[e("headerLinkSelector")]),_:1}),e(" to match the "),h,e(" option. When the page scroll to a certain header anchor, this corresponding link will be added "),b,e(" class name.")]),g])}const x=r(u,[["render",f],["__file","toc.html.vue"]]);export{x as default};
