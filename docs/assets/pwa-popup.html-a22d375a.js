import{_ as u,r as s,o as c,c as t,d as n,a as e,b as i,w as l,e as d}from"./app-8ceb8f5d.js";const p={},o=e("h1",{id:"pwa-popup",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pwa-popup","aria-hidden":"true"},"#"),i(" pwa-popup")],-1),v=e("p",null,"提供一个弹窗组件，允许用户手动刷新 PWA Service Worker 。",-1),m=e("code",null,"skipWaiting",-1),h=e("code",null,"true",-1),b=d(`<p>当新的 Service Worker 就绪时，会在页面右下角出现一个弹窗，询问用户是否需要激活处于 Waiting 状态的 Service Worker 。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm i -D @vuepress/plugin-pwa-popup@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { pwaPlugin } from &#39;@vuepress/plugin-pwa&#39;
import { pwaPopupPlugin } from &#39;@vuepress/plugin-pwa-popup&#39;

export default {
  plugins: [
    pwaPlugin(),
    pwaPopupPlugin({
      // 配置项
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>类型： <code>Record&lt;string, { message: string, buttonText: string }&gt;</code></p></li><li><p>详情：</p><p>弹窗在不同 locales 下的信息。</p><p>如果没有指定该配置项，它会降级使用默认信息。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  plugins: [
    pwaPlugin(),
    pwaPopupPlugin({
      locales: {
        &#39;/&#39;: {
          message: &#39;New content is available.&#39;,
          buttonText: &#39;Refresh&#39;,
        },
        &#39;/zh/&#39;: {
          message: &#39;发现新内容可用&#39;,
          buttonText: &#39;刷新&#39;,
        },
      },
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),g=d('<h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h2><p>你可以通过 CSS 变量来自定义弹窗的样式：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div>',3);function _(f,w){const r=s("NpmBadge"),a=s("RouterLink");return c(),t("div",null,[o,n(r,{package:"@vuepress/plugin-pwa-popup"}),v,e("p",null,[i("该插件必须和 "),n(a,{to:"/reference/plugin/pwa.html"},{default:l(()=>[i("pwa 插件")]),_:1}),i(" 一起使用，并且 "),m,i(" 配置项不能设置为 "),h,i(" 。")]),b,e("ul",null,[e("li",null,[i("参考： "),e("ul",null,[e("li",null,[n(a,{to:"/guide/i18n.html"},{default:l(()=>[i("指南 > 多语言支持")]),_:1})])])])]),g])}const P=u(p,[["render",_],["__file","pwa-popup.html.vue"]]);export{P as default};
