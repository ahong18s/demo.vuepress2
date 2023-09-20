import{_ as r,r as i,o,c,d as a,a as e,b as n,w as u,e as l}from"./app-8ceb8f5d.js";const p={},h=e("h1",{id:"external-link-icon",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#external-link-icon","aria-hidden":"true"},"#"),n(" external-link-icon")],-1),v=l(`<p>This plugin has been integrated into the default theme.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm i -D @vuepress/plugin-external-link-icon@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { externalLinkIconPlugin } from &#39;@vuepress/plugin-external-link-icon&#39;

export default {
  plugins: [
    externalLinkIconPlugin({
      // options
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>Type: <code>Record&lt;string, { openInNewWindow: string }&gt;</code></p></li><li><p>Details:</p><p>The a11y text of the external link icon in different locales.</p><p>If this option is not specified, it will fallback to default text.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),m=l('<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2><h3 id="externallinkicon" tabindex="-1"><a class="header-anchor" href="#externallinkicon" aria-hidden="true">#</a> externalLinkIcon</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>Whether to append an external link icon to external links in current page.</p></li></ul><h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles</h2><p>You can customize the style of the external link icon via CSS variables:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h2 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> Components</h2><h3 id="externallinkicon-1" tabindex="-1"><a class="header-anchor" href="#externallinkicon-1" aria-hidden="true">#</a> ExternalLinkIcon</h3><ul><li><p>Details:</p><p>This plugin will register a <code>&lt;ExternalLinkIcon /&gt;</code> component globally, and you can use it without any props.</p></li></ul><div class="custom-container tip"><p class="custom-container-title">prompt</p><p>This component is mainly used for theme development. You don&#39;t need to use it directly in most cases.</p></div>',10);function b(x,g){const s=i("NpmBadge"),t=i("ExternalLinkIcon"),d=i("RouterLink");return o(),c("div",null,[h,a(s,{package:"@vuepress/plugin-external-link-icon"}),e("p",null,[n("This plugin will add an icon to the external link in your markdown content, i.e. "),a(t)]),v,e("ul",null,[e("li",null,[n("Also see: "),e("ul",null,[e("li",null,[a(d,{to:"/en-US/guide/i18n.html"},{default:u(()=>[n("Guide > I18n")]),_:1})])])])]),m])}const k=r(p,[["render",b],["__file","external-link-icon.html.vue"]]);export{k as default};
