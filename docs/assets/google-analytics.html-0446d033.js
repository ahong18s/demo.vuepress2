import{_ as a,r as t,o as r,c as d,d as s,a as e,b as n,e as l}from"./app-8ceb8f5d.js";const c={},u=e("h1",{id:"google-analytics",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#google-analytics","aria-hidden":"true"},"#"),n(" google-analytics")],-1),g={href:"https://analytics.google.com/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://developers.google.com/analytics/devguides/collection/gtagjs",target:"_blank",rel:"noopener noreferrer"},p={href:"https://support.google.com/analytics/answer/10089681",target:"_blank",rel:"noopener noreferrer"},v=l(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm i -D @vuepress/plugin-google-analytics@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { googleAnalyticsPlugin } from &#39;@vuepress/plugin-google-analytics&#39;

export default {
  plugins: [
    googleAnalyticsPlugin({
      // options
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reporting-events" tabindex="-1"><a class="header-anchor" href="#reporting-events" aria-hidden="true">#</a> Reporting Events</h2>`,4),_={href:"https://support.google.com/analytics/answer/9234069",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"page_view",-1),b=e("code",null,"first_visit",-1),f=e("p",null,[n("So if you only want to collect some basic data of your site, you don't need to do anything else except setting the "),e("a",{href:"#id"},"Measurement ID"),n(" correctly.")],-1),y=e("code",null,"gtag()",-1),x=e("code",null,"window",-1),X={href:"https://developers.google.com/analytics/devguides/collection/ga4/events",target:"_blank",rel:"noopener noreferrer"},w=e("h2",{id:"options",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),n(" Options")],-1),k=e("h3",{id:"id",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#id","aria-hidden":"true"},"#"),n(" id")],-1),A=e("li",null,[e("p",null,[n("Type: "),e("code",null,"string")])],-1),D=e("p",null,"Details:",-1),I=e("p",null,[n("The Measurement ID of Google Analytics 4, which should start with "),e("code",null,"'G-'"),n(".")],-1),G={href:"https://support.google.com/analytics/answer/9539598",target:"_blank",rel:"noopener noreferrer"},N=e("li",null,[e("p",null,"Example:")],-1),V=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  plugins: [
    googleAnalyticsPlugin({
      id: &#39;G-XXXXXXXXXX&#39;,
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="debug" tabindex="-1"><a class="header-anchor" href="#debug" aria-hidden="true">#</a> debug</h3>`,2),E=e("li",null,[e("p",null,[n("Type: "),e("code",null,"boolean")])],-1),T=e("p",null,"Details:",-1),B=e("code",null,"true",-1),P={href:"https://support.google.com/analytics/answer/7201382",target:"_blank",rel:"noopener noreferrer"},M=e("li",null,[e("p",null,"Example:")],-1),S=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  plugins: [
    googleAnalyticsPlugin({
      id: &#39;G-XXXXXXXXXX&#39;,
      debug: true,
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function j(U,L){const o=t("NpmBadge"),i=t("ExternalLinkIcon");return r(),d("div",null,[u,s(o,{package:"@vuepress/plugin-google-analytics"}),e("p",null,[n("Integrate "),e("a",g,[n("Google Analytics"),s(i)]),n(" into VuePress.")]),e("p",null,[n("This plugin will import "),e("a",h,[n("gtag.js"),s(i)]),n(" for "),e("a",p,[n("Google Analytics 4"),s(i)]),n(".")]),v,e("p",null,[n("Google Analytics will "),e("a",_,[n("automatically collect some events"),s(i)]),n(", such as "),m,n(", "),b,n(", etc.")]),f,e("p",null,[n("After using this plugin, the global "),y,n(" function is available on the "),x,n(" object, and you can use it for "),e("a",X,[n("custom events reporting"),s(i)]),n(".")]),w,k,e("ul",null,[A,e("li",null,[D,I,e("p",null,[n("You can follow the instructions "),e("a",G,[n("here"),s(i)]),n(' to find your Measurement ID. Notice the difference between Google Analytics 4 Measurement ID (i.e. "G-" ID) and Universal Analytics Tracking ID (i.e. "UA-" ID).')])]),N]),V,e("ul",null,[E,e("li",null,[T,e("p",null,[n("Set to "),B,n(" to enable sending events to DebugView. "),e("a",P,[n("See more information on DebugView"),s(i)]),n(".")])]),M]),S])}const O=a(c,[["render",j],["__file","google-analytics.html.vue"]]);export{O as default};
