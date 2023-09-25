import{_ as r,r as a,o as p,c as u,d as n,a as e,b as i,w as l,e as d}from"./app-09910f35.js";const o={},c=e("h1",{id:"pwa-popup",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pwa-popup","aria-hidden":"true"},"#"),i(" pwa-popup")],-1),v=e("p",null,"Provide a popup component for users to activate the new PWA service worker manually.",-1),m=e("code",null,"skipWaiting",-1),h=e("code",null,"true",-1),b=d(`<p>When the new service worker is ready, a popup will appear in the right bottom of the page to ask users to activate the waiting service worker.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm i -D @vuepress/plugin-pwa-popup@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { pwaPlugin } from &#39;@vuepress/plugin-pwa&#39;
import { pwaPopupPlugin } from &#39;@vuepress/plugin-pwa-popup&#39;

export default {
  plugins: [
    pwaPlugin(),
    pwaPopupPlugin({
      // options
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>Type: <code>Record&lt;string, { message: string, buttonText: string }&gt;</code></p></li><li><p>Details:</p><p>The messages of the popup in different locales.</p><p>If this option is not specified, it will fallback to default messages.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),g=d('<h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles</h2><p>You can customize the style of the popup via CSS variables:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div>',3);function f(_,w){const t=a("NpmBadge"),s=a("RouterLink");return p(),u("div",null,[c,n(t,{package:"@vuepress/plugin-pwa-popup"}),v,e("p",null,[i("This plugin must be used together with "),n(s,{to:"/en-US/reference/plugin/pwa.html"},{default:l(()=>[i("pwa plugin")]),_:1}),i(", and the "),m,i(" option must not be set to "),h,i(".")]),b,e("ul",null,[e("li",null,[i("Also see: "),e("ul",null,[e("li",null,[n(s,{to:"/en-US/guide/i18n.html"},{default:l(()=>[i("Guide > I18n")]),_:1})])])])]),g])}const P=r(o,[["render",f],["__file","pwa-popup.html.vue"]]);export{P as default};
