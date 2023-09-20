import{_ as s,r as l,o as d,c as r,a as n,b as e,d as a,w as t,e as v}from"./app-8ceb8f5d.js";const u={},c=n("h1",{id:"开发一个可继承的主题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#开发一个可继承的主题","aria-hidden":"true"},"#"),e(" 开发一个可继承的主题")],-1),m=n("p",null,"有时用户可能希望对一个主题进行一些小改动，但是又不想 Fork 并修改整个项目。",-1),o=v(`<h2 id="布局插槽" tabindex="-1"><a class="header-anchor" href="#布局插槽" aria-hidden="true">#</a> 布局插槽</h2><p>这种方式需要你来决定主题的哪些部分是可以被扩展的，它更适合用于一些常见的自定义需求，比如页眉或页脚。</p><p>你只需要在你的布局文件中提供 slots ，并告诉用户如何使用它们即可：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div class=&quot;my-theme-layout&quot;&gt;
    &lt;slot name=&quot;page-header&quot; /&gt;
    &lt;Content /&gt;
    &lt;slot name=&quot;page-footer&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件别名" tabindex="-1"><a class="header-anchor" href="#组件别名" aria-hidden="true">#</a> 组件别名</h2><p>这种方式需要你考虑清楚你的主题的哪些组件可以被替换，并且你需要将组件拆分到合适的粒度。</p><p>首先，为你主题的可替换组件设置 <code>alias</code> 别名：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import type { Theme } from &#39;@vuepress/core&#39;
import { getDirname, path } from &#39;@vuepress/utils&#39;

const __dirname = getDirname(i<wbr>mport.meta.url)

export const fooTheme = (options): Theme =&gt; {
  return {
    name: &#39;vuepress-theme-foo&#39;,
    alias: {
      // 为可替换的组件设置别名
      &#39;@theme/Navbar.vue&#39;: path.resolve(__dirname, &#39;components/Navbar.vue&#39;),
      &#39;@theme/Sidebar.vue&#39;: path.resolve(__dirname, &#39;components/Sidebar.vue&#39;),
    },
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在你的主题中通过别名来使用这些组件：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>&lt;script setup lang=&quot;ts&quot;&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，用户在继承或使用你的主题时，就可以通过覆盖 <code>alias</code> 来替换特定的组件了。</p>`,11);function b(p,h){const i=l("RouterLink");return d(),r("div",null,[c,m,n("p",null,[e("借助于 "),a(i,{to:"/reference/theme-api.html"},{default:t(()=>[e("主题 API")]),_:1}),e(" ，你可以让用户继承你的主题，允许用户对你的主题进行改动。")]),n("p",null,[e("你肯定已经知道了如何 "),a(i,{to:"/reference/default-theme/extending.html"},{default:t(()=>[e("继承默认主题")]),_:1}),e(" 。接下来我们将介绍如何让你的主题像默认主题一样被用户继承。")]),o])}const _=s(u,[["render",b],["__file","making-a-theme-extendable.html.vue"]]);export{_ as default};
