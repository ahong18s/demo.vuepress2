import{_ as t,r as a,o as r,c as d,d as l,a as e,b as n,e as i}from"./app-8ceb8f5d.js";const c={},u=e("h1",{id:"google-analytics",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#google-analytics","aria-hidden":"true"},"#"),n(" google-analytics")],-1),g={href:"https://analytics.google.com/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://developers.google.com/analytics/devguides/collection/gtagjs",target:"_blank",rel:"noopener noreferrer"},p={href:"https://support.google.com/analytics/answer/10089681",target:"_blank",rel:"noopener noreferrer"},v=i(`<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm i -D @vuepress/plugin-google-analytics@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { googleAnalyticsPlugin } from &#39;@vuepress/plugin-google-analytics&#39;

export default {
  plugins: [
    googleAnalyticsPlugin({
      // 配置项
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="上报事件" tabindex="-1"><a class="header-anchor" href="#上报事件" aria-hidden="true">#</a> 上报事件</h2>`,4),_={href:"https://support.google.com/analytics/answer/9234069",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"page_view",-1),b=e("code",null,"first_visit",-1),f=e("p",null,[n("因此，如果你只是想收集站点的一些基础数据，你只需要正确设置 "),e("a",{href:"#id"},"Measurement ID"),n(" ，不需要再额外做其他事情。")],-1),y=e("code",null,"gtag()",-1),x=e("code",null,"window",-1),X={href:"https://developers.google.com/analytics/devguides/collection/ga4/events",target:"_blank",rel:"noopener noreferrer"},k=e("h2",{id:"配置项",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置项","aria-hidden":"true"},"#"),n(" 配置项")],-1),A=e("h3",{id:"id",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#id","aria-hidden":"true"},"#"),n(" id")],-1),D=e("li",null,[e("p",null,[n("类型： "),e("code",null,"string")])],-1),w=e("p",null,"详情：",-1),G=e("p",null,[n("Google Analytics 4 的 Measurement ID ，应以 "),e("code",null,"'G-'"),n(" 开头。")],-1),I={href:"https://support.google.com/analytics/answer/9539598",target:"_blank",rel:"noopener noreferrer"},V=e("li",null,[e("p",null,"示例：")],-1),N=i(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  plugins: [
    googleAnalyticsPlugin({
      id: &#39;G-XXXXXXXXXX&#39;,
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="debug" tabindex="-1"><a class="header-anchor" href="#debug" aria-hidden="true">#</a> debug</h3>`,2),B=e("li",null,[e("p",null,[n("类型： "),e("code",null,"boolean")])],-1),P=e("p",null,"详情：",-1),M=e("code",null,"true",-1),E={href:"https://support.google.com/analytics/answer/7201382",target:"_blank",rel:"noopener noreferrer"},j=e("li",null,[e("p",null,"示例：")],-1),L=i(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  plugins: [
    googleAnalyticsPlugin({
      id: &#39;G-XXXXXXXXXX&#39;,
      debug: true,
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function T(U,C){const o=a("NpmBadge"),s=a("ExternalLinkIcon");return r(),d("div",null,[u,l(o,{package:"@vuepress/plugin-google-analytics"}),e("p",null,[n("将 "),e("a",g,[n("Google Analytics"),l(s)]),n(" 集成到 VuePress 中。")]),e("p",null,[n("该插件会通过引入 "),e("a",h,[n("gtag.js"),l(s)]),n(" 来启用 "),e("a",p,[n("Google Analytics 4"),l(s)]),n(" 。")]),v,e("p",null,[n("Google Analytics 会 "),e("a",_,[n("自动收集部分事件"),l(s)]),n(" ，比如 "),m,n(", "),b,n(" 等。")]),f,e("p",null,[n("在引入该插件之后，一个全局的 "),y,n(" 函数会被挂载到 "),x,n(" 对象上，你可以使用它进行 "),e("a",X,[n("自定义事件的上报"),l(s)]),n(" 。")]),k,A,e("ul",null,[D,e("li",null,[w,G,e("p",null,[n("你可以通过 "),e("a",I,[n("这里"),l(s)]),n(' 的指引来找到你的 Measurement ID 。注意区分 Google Analytics 4 的 Measurement ID （即 "G-" 开头的 ID） 和 Universal Analytics 的 Tracking ID （即 "UA-" 开头的 ID）。')])]),V]),N,e("ul",null,[B,e("li",null,[P,e("p",null,[n("设置为 "),M,n(" 可以向 DebugView 发送事件。"),e("a",E,[n("了解更多关于 DebugView 的信息"),l(s)]),n(" 。")])]),j]),L])}const q=t(c,[["render",T],["__file","google-analytics.html.vue"]]);export{q as default};
