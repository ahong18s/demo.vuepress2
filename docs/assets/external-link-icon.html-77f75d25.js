import{_ as c,r as i,o as t,c as o,d as a,a as e,b as n,w as u,e as l}from"./app-09910f35.js";const p={},v=e("h1",{id:"external-link-icon",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#external-link-icon","aria-hidden":"true"},"#"),n(" external-link-icon")],-1),h=l(`<p>该插件已经集成到默认主题中。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm i -D @vuepress/plugin-external-link-icon@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { externalLinkIconPlugin } from &#39;@vuepress/plugin-external-link-icon&#39;

export default {
  plugins: [
    externalLinkIconPlugin({
      // 配置项
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>类型： <code>Record&lt;string, { openInNewWindow: string }&gt;</code></p></li><li><p>详情：</p><p>外部链接图标在不同 locales 下的 A11y 文字。</p><p>如果没有指定该配置项，它会降级使用默认文字。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  plugins: [
    externalLinkIconPlugin({
      locales: {
        &#39;/&#39;: {
          openInNewWindow: &#39;open in new window&#39;,
        },
        &#39;/zh/&#39;: {
          openInNewWindow: &#39;在新窗口打开&#39;,
        },
      },
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),m=l('<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2><h3 id="externallinkicon" tabindex="-1"><a class="header-anchor" href="#externallinkicon" aria-hidden="true">#</a> externalLinkIcon</h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>详情：</p><p>是否在当前页面的外部链接的后面添加外部链接图标。</p></li></ul><h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h2><p>你可以通过 CSS 变量来自定义外部链接图标的样式：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2><h3 id="externallinkicon-1" tabindex="-1"><a class="header-anchor" href="#externallinkicon-1" aria-hidden="true">#</a> ExternalLinkIcon</h3><ul><li><p>详情：</p><p>该插件会全局注册一个 <code>&lt;ExternalLinkIcon /&gt;</code> 组件，你可以不传入任何 Props 来使用它。</p></li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>该组件主要用于主题开发。在大多数情况下你不需要直接使用该组件。</p></div>',10);function b(x,g){const d=i("NpmBadge"),s=i("ExternalLinkIcon"),r=i("RouterLink");return t(),o("div",null,[v,a(d,{package:"@vuepress/plugin-external-link-icon"}),e("p",null,[n("该插件会为你 Markdown 内容中的外部链接添加一个图标，即 "),a(s)]),h,e("ul",null,[e("li",null,[n("参考： "),e("ul",null,[e("li",null,[a(r,{to:"/guide/i18n.html"},{default:u(()=>[n("指南 > 多语言支持")]),_:1})])])])]),m])}const _=c(p,[["render",b],["__file","external-link-icon.html.vue"]]);export{_ as default};
