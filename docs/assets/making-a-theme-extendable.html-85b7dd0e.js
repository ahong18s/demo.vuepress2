import{_ as s,r as l,o,c as r,a as n,b as e,d as i,w as a,e as d}from"./app-8ceb8f5d.js";const m={},u=n("h1",{id:"making-a-theme-extendable",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#making-a-theme-extendable","aria-hidden":"true"},"#"),e(" Making a Theme Extendable")],-1),c=n("p",null,"Sometimes users might want make some minor changes to a theme, but they don't want to fork and modify the entire project.",-1),v=d(`<h2 id="layout-slots" tabindex="-1"><a class="header-anchor" href="#layout-slots" aria-hidden="true">#</a> Layout Slots</h2><p>This approach requires you to determine which parts of your theme could be extended. It is more suitable for those common customizations like page footer or header.</p><p>You just need to provide slots in your layouts, and tell users how to make use of them:</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;my-theme-layout&quot;&gt;
    &lt;slot name=&quot;page-header&quot; /&gt;
    &lt;Content /&gt;
    &lt;slot name=&quot;page-footer&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="component-aliases" tabindex="-1"><a class="header-anchor" href="#component-aliases" aria-hidden="true">#</a> Component Aliases</h2><p>This approach requires you to consider which components of your theme should be replaceable, and you also need to split components into a suitable granularity.</p><p>First, set <code>alias</code> for replaceable components of you theme:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import type { Theme } from &#39;@vuepress/core&#39;
import { getDirname } from &#39;@vuepress/utils&#39;

const __dirname = getDirname(i<wbr>mport.meta.url)

export const fooTheme = (options): Theme =&gt; {
  return {
    name: &#39;vuepress-theme-foo&#39;,
    alias: {
      // set alias for replaceable components
      &#39;@theme/Navbar.vue&#39;: path.resolve(__dirname, &#39;components/Navbar.vue&#39;),
      &#39;@theme/Sidebar.vue&#39;: path.resolve(__dirname, &#39;components/Sidebar.vue&#39;),
    },
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Next, use those components via aliases in your theme:</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>&lt;script setup lang=&quot;ts&quot;&gt;
import Navbar from &#39;@theme/Navbar.vue&#39;
import Sidebar from &#39;@theme/Sidebar.vue&#39;
&lt;/script&gt;

&lt;template&gt;
  &lt;div class=&quot;my-theme-layout&quot;&gt;
    &lt;Navbar /&gt;
    &lt;Sidebar /&gt;
    &lt;Content /&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, users can replace specific components by overriding the <code>alias</code> when extending or using your theme.</p>`,11);function h(p,b){const t=l("RouterLink");return o(),r("div",null,[u,c,n("p",null,[e("With the help of "),i(t,{to:"/en-US/reference/theme-api.html"},{default:a(()=>[e("Theme API")]),_:1}),e(", you can make your theme extendable, allowing users to make their own modifications easily.")]),n("p",null,[e("You must have known that how to "),i(t,{to:"/en-US/reference/default-theme/extending.html"},{default:a(()=>[e("extend default theme")]),_:1}),e(". Here we'll introduce how to make your own theme extendable like default theme.")]),v])}const f=s(m,[["render",h],["__file","making-a-theme-extendable.html.vue"]]);export{f as default};
