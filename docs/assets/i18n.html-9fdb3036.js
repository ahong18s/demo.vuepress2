import{_ as d,r as t,o as c,c as o,a as n,b as e,d as s,w as a,e as l}from"./app-8ceb8f5d.js";const r={},u=l(`<h1 id="i18n" tabindex="-1"><a class="header-anchor" href="#i18n" aria-hidden="true">#</a> I18n</h1><h2 id="site-i18n-config" tabindex="-1"><a class="header-anchor" href="#site-i18n-config" aria-hidden="true">#</a> Site I18n Config</h2><p>To take advantage of multi-language support in VuePress, you first need to use the following file and directory structure:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docs
├─ README.md
├─ foo.md
├─ nested
│  └─ README.md
└─ zh
   ├─ README.md
   ├─ foo.md
   └─ nested
      └─ README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v=n("code",null,"locales",-1),m=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use &#39;/&#39; as its path.
    &#39;/&#39;: {
      lang: &#39;en-US&#39;,
      title: &#39;VuePress&#39;,
      description: &#39;Vue-powered Static Site Generator&#39;,
    },
    &#39;/zh/&#39;: {
      lang: &#39;zh-CN&#39;,
      title: &#39;VuePress&#39;,
      description: &#39;Vue 驱动的静态网站生成器&#39;,
    },
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If a locale does not have a <code>lang</code>, <code>title</code>, <code>description</code> or <code>head</code>, VuePress will fallback to the root-level values. You can omit the root level config as long as they are provided in each locale.</p>`,2),h={class:"custom-container tip"},p=n("p",{class:"custom-container-title"},"prompt",-1),f=l(`<h2 id="theme-i18n-config" tabindex="-1"><a class="header-anchor" href="#theme-i18n-config" aria-hidden="true">#</a> Theme I18n Config</h2><p>VuePress does not restrict how themes provide multi-language support, so each theme may have different way to handle i18n, and some themes may not provide multi-language support at all. You&#39;d better refer to the theme documentation for detailed guide.</p><p>If you are using default theme, the multi-language support is the same as above:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defaultTheme } from &#39;vuepress&#39;

export default {
  theme: defaultTheme({
    locales: {
      &#39;/&#39;: {
        selectLanguageName: &#39;English&#39;,
      },
      &#39;/zh/&#39;: {
        selectLanguageName: &#39;简体中文&#39;,
      },
    },
  }),
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),b={class:"custom-container tip"},g=n("p",{class:"custom-container-title"},"prompt",-1);function _(x,y){const i=t("RouterLink");return c(),o("div",null,[u,n("p",null,[e("Then, specify the "),v,e(" option in your "),s(i,{to:"/en-US/guide/configuration.html#config-file"},{default:a(()=>[e("config file")]),_:1}),e(":")]),m,n("div",h,[p,n("p",null,[e("Config reference: "),s(i,{to:"/en-US/reference/config.html#locales"},{default:a(()=>[e("locales")]),_:1})])]),f,n("div",b,[g,n("p",null,[e("Config reference: "),s(i,{to:"/en-US/reference/default-theme/config.html#locales"},{default:a(()=>[e("Default Theme > locales")]),_:1})])])])}const E=d(r,[["render",_],["__file","i18n.html.vue"]]);export{E as default};
