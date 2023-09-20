import{_ as a}from"./extending-a-theme-01-75beb13f.js";import{_ as d,r as n,o as r,c,a as i,b as e,d as t,w as u,e as s}from"./app-8ceb8f5d.js";const m={},v=s(`<h1 id="extending" tabindex="-1"><a class="header-anchor" href="#extending" aria-hidden="true">#</a> Extending</h1><p>VuePress default theme is widely used by users, so it is designed to be extendable, allowing users to make their own customization with ease.</p><p>VuePress provides basic ability to extend a theme, but different themes may have different features to be extended. Thus, if you are using a community theme, you&#39;d better refer to the theme&#39;s own documentation for how to extending it.</p><h2 id="layout-slots" tabindex="-1"><a class="header-anchor" href="#layout-slots" aria-hidden="true">#</a> Layout Slots</h2><p>Default theme&#39;s <code>Layout</code> provides some slots:</p><ul><li><code>navbar</code></li><li><code>navbar-before</code></li><li><code>navbar-after</code></li><li><code>sidebar</code></li><li><code>sidebar-top</code></li><li><code>sidebar-bottom</code></li><li><code>page</code></li><li><code>page-top</code></li><li><code>page-bottom</code></li><li><code>page-content-top</code></li><li><code>page-content-bottom</code></li></ul><p>With the help of them, you can add or replace content easily. Here comes an example to introduce how to extend default theme with layout slots.</p><p>Firstly, create a client config file <code>.vuepress/client.ts</code>:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineClientConfig } from &#39;@vuepress/client&#39;
import Layout from &#39;./layouts/Layout.vue&#39;

export default defineClientConfig({
  layouts: {
    Layout,
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Next, create the <code>.vuepress/layouts/Layout.vue</code>, and make use of the slots that provided by the <code>Layout</code> of default theme:</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>&lt;script setup&gt;
import ParentLayout from &#39;@vuepress/theme-default/layouts/Layout.vue&#39;
&lt;/script&gt;

&lt;template&gt;
  &lt;ParentLayout&gt;
    &lt;template #page-bottom&gt;
      &lt;div class=&quot;my-footer&quot;&gt;This is my custom page footer&lt;/div&gt;
    &lt;/template&gt;
  &lt;/ParentLayout&gt;
&lt;/template&gt;

&lt;style lang=&quot;css&quot;&gt;
.my-footer {
  text-align: center;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then the default <code>Layout</code> layout has been overridden by your own local layout, which will add a custom footer to every normal pages in default theme (excluding homepage):</p><p><img src="`+a+'" alt="extending-a-theme"></p><h2 id="components-replacement" tabindex="-1"><a class="header-anchor" href="#components-replacement" aria-hidden="true">#</a> Components Replacement</h2><p>The layout slots are useful, but sometimes you might find it&#39;s not flexible enough. Default theme also provides the ability to replace a single component.</p>',15),p={href:"https://github.com/vuepress/vuepress-next/tree/main/ecosystem/theme-default/src/client/components",target:"_blank",rel:"noopener noreferrer"},h=i("code",null,"@theme",-1),b=i("code",null,"HomeFooter.vue",-1),f=i("code",null,"@theme/HomeFooter.vue",-1),g=s(`<p>Then, if you want to replace the <code>HomeFooter.vue</code> component, just override the alias in your config file <code>.vuepress/config.ts</code>:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { getDirname, path } from &#39;@vuepress/utils&#39;
import { defaultTheme, defineUserConfig } from &#39;vuepress&#39;

const __dirname = getDirname(i<wbr>mport.meta.url)

export default defineUserConfig({
  theme: defaultTheme(),
  alias: {
    &#39;@theme/HomeFooter.vue&#39;: path.resolve(__dirname, &#39;./components/MyHomeFooter.vue&#39;),
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="developing-a-child-theme" tabindex="-1"><a class="header-anchor" href="#developing-a-child-theme" aria-hidden="true">#</a> Developing a Child Theme</h2><p>Instead of extending the default theme directly in <code>.vuepress/config.ts</code> and <code>.vuepress/client.ts</code>, you can also develop your own theme extending the default theme:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import type { Theme } from &#39;@vuepress/core&#39;
import { defaultTheme, type DefaultThemeOptions } from &#39;@vuepress/theme-default&#39;
import { getDirname, path } from &#39;@vuepress/utils&#39;

const __dirname = getDirname(i<wbr>mport.meta.url)

export const childTheme = (options: DefaultThemeOptions): Theme =&gt; {
  return {
    name: &#39;vuepress-theme-child&#39;,
    extends: defaultTheme(options),

    // override layouts in child theme&#39;s client config file
    // notice that you would build ts to js before publishing to npm,
    // so this should be the path to the js file
    clientConfigFile: path.resolve(__dirname, &#39;./client.js&#39;),

    // override component alias
    alias: {
      &#39;@theme/HomeFooter.vue&#39;: path.resolve(__dirname, &#39;./components/MyHomeFooter.vue&#39;),
    },
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function y(_,x){const l=n("RouterLink"),o=n("ExternalLinkIcon");return r(),c("div",null,[v,i("p",null,[e("Default theme has registered "),t(l,{to:"/en-US/reference/plugin-api.html#alias"},{default:u(()=>[e("alias")]),_:1}),e(" for every "),i("a",p,[e("non-global components"),t(o)]),e(" with a "),h,e(" prefix. For example, the alias of "),b,e(" is "),f,e(".")]),g])}const T=d(m,[["render",y],["__file","extending.html.vue"]]);export{T as default};
