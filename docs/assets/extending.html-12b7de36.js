import{_ as a}from"./extending-a-theme-01-75beb13f.js";import{_ as r,r as n,o,c,a as i,b as e,d as s,w as v,e as d}from"./app-8ceb8f5d.js";const u={},m=d(`<h1 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h1><p>VuePress 默认主题有着大量的用户，因此我们对它进行了一些便于继承的设计，以便用户轻松进行定制化。</p><p>VuePress 提供了继承主题的基础能力，但不同的主题可能会提供不同的可继承的功能。因此，如果你使用的是一个社区主题的话，你最好参考主题本身的文档来了解如何继承它。</p><h2 id="布局插槽" tabindex="-1"><a class="header-anchor" href="#布局插槽" aria-hidden="true">#</a> 布局插槽</h2><p>默认主题的 <code>Layout</code> 布局提供了一些插槽：</p><ul><li><code>navbar</code></li><li><code>navbar-before</code></li><li><code>navbar-after</code></li><li><code>sidebar</code></li><li><code>sidebar-top</code></li><li><code>sidebar-bottom</code></li><li><code>page</code></li><li><code>page-top</code></li><li><code>page-bottom</code></li><li><code>page-content-top</code></li><li><code>page-content-bottom</code></li></ul><p>在它们的帮助下，你可以很容易地添加或替换内容。下面通过一个示例来介绍一下如何使用布局插槽来继承默认主题。</p><p>首先，创建一个客户端配置文件 <code>.vuepress/client.ts</code> ：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineClientConfig } from &#39;@vuepress/client&#39;
import Layout from &#39;./layouts/Layout.vue&#39;

export default defineClientConfig({
  layouts: {
    Layout,
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，创建 <code>.vuepress/layouts/Layout.vue</code> ，并使用由默认主题的 <code>Layout</code> 布局提供的插槽：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>&lt;script setup&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时默认的 <code>Layout</code> 布局已经被你的本地布局覆盖，将会在除了首页外的所有页面添加一个自定义的页脚：</p><p><img src="`+a+'" alt="extending-a-theme"></p><h2 id="组件替换" tabindex="-1"><a class="header-anchor" href="#组件替换" aria-hidden="true">#</a> 组件替换</h2><p>布局插槽十分实用，但有时候你可能会觉得它不够灵活。默认主题同样提供了替换单个组件的能力。</p>',15),p={href:"https://github.com/vuepress/vuepress-next/tree/main/ecosystem/theme-default/src/client/components",target:"_blank",rel:"noopener noreferrer"},b=i("code",null,"@theme",-1),h=i("code",null,"HomeFooter.vue",-1),g=i("code",null,"@theme/HomeFooter.vue",-1),f=d(`<p>接下来，如果你想要替换 <code>HomeFooter.vue</code> 组件，只需要在配置文件 <code>.vuepress/config.ts</code> 中覆盖这个别名即可：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { getDirname, path } from &#39;@vuepress/utils&#39;
import { defaultTheme, defineUserConfig } from &#39;vuepress&#39;

const __dirname = getDirname(i<wbr>mport.meta.url)

export default defineUserConfig({
  theme: defaultTheme(),
  alias: {
    &#39;@theme/HomeFooter.vue&#39;: path.resolve(__dirname, &#39;./components/MyHomeFooter.vue&#39;),
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开发一个子主题" tabindex="-1"><a class="header-anchor" href="#开发一个子主题" aria-hidden="true">#</a> 开发一个子主题</h2><p>除了在 <code>.vuepress/config.ts</code> 和 <code>.vuepress/client.ts</code> 中直接扩展默认主题以外，你可以通过继承默认主题来开发一个你自己的主题：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import type { Theme } from &#39;@vuepress/core&#39;
import { defaultTheme, type DefaultThemeOptions } from &#39;@vuepress/theme-default&#39;
import { getDirname, path } from &#39;@vuepress/utils&#39;

const __dirname = getDirname(i<wbr>mport.meta.url)

export const childTheme = (options: DefaultThemeOptions): Theme =&gt; {
  return {
    name: &#39;vuepress-theme-child&#39;,
    extends: defaultTheme(options),

    // 在子主题的客户端配置文件中覆盖布局
    // 注意，你在发布到 NPM 之前会将 TS 构建为 JS ，因此这里需要设置为 JS 文件的路径
    clientConfigFile: path.resolve(__dirname, &#39;./client.js&#39;),

    // 覆盖组件别名
    alias: {
      &#39;@theme/HomeFooter.vue&#39;: path.resolve(__dirname, &#39;./components/MyHomeFooter.vue&#39;),
    },
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function _(y,x){const t=n("ExternalLinkIcon"),l=n("RouterLink");return o(),c("div",null,[m,i("p",null,[e("默认主题将所有 "),i("a",p,[e("非全局的组件"),s(t)]),e(" 都注册了一个带 "),b,e(" 前缀的 "),s(l,{to:"/reference/plugin-api.html#alias"},{default:v(()=>[e("alias")]),_:1}),e(" 。例如，"),h,e(" 的别名是 "),g,e(" 。")]),f])}const C=r(u,[["render",_],["__file","extending.html.vue"]]);export{C as default};
