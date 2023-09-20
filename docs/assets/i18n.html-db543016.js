import{_ as a,r as c,o as t,c as r,a as n,b as e,d as s,w as d,e as l}from"./app-8ceb8f5d.js";const v={},o=l(`<h1 id="多语言支持" tabindex="-1"><a class="header-anchor" href="#多语言支持" aria-hidden="true">#</a> 多语言支持</h1><h2 id="站点多语言配置" tabindex="-1"><a class="header-anchor" href="#站点多语言配置" aria-hidden="true">#</a> 站点多语言配置</h2><p>要启用 VuePress 的多语言支持，首先需要使用如下的文件目录结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docs
├─ README.md
├─ foo.md
├─ nested
│  └─ README.md
└─ zh
   ├─ README.md
   ├─ foo.md
   └─ nested
      └─ README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),u=n("code",null,"locales",-1),m=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 &#39;/&#39; 作为其路径。
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一个语言没有声明 <code>lang</code>, <code>title</code>, <code>description</code> 或者 <code>head</code> ，VuePress 将会尝试使用顶层配置的对应值。如果每个语言都声明了这些值，那么顶层配置中的对应值可以被省略。</p>`,2),b={class:"custom-container tip"},h=n("p",{class:"custom-container-title"},"提示",-1),p=l(`<h2 id="主题多语言配置" tabindex="-1"><a class="header-anchor" href="#主题多语言配置" aria-hidden="true">#</a> 主题多语言配置</h2><p>VuePress 没有限制主题如何提供多语言支持，因此每个主题可能会有不同的多语言配置方式，而且部分主题可能不会提供多语言支持。建议你查看主题本身的文档来获取更详细的指引。</p><p>如果你使用的是默认主题，那么它提供多语言支持的方式和上述是一致的：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defaultTheme } from &#39;vuepress&#39;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),_={class:"custom-container tip"},f=n("p",{class:"custom-container-title"},"提示",-1);function g(x,E){const i=c("RouterLink");return t(),r("div",null,[o,n("p",null,[e("然后，在你的 "),s(i,{to:"/guide/configuration.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:d(()=>[e("配置文件")]),_:1}),e(" 中设置 "),u,e(" 选项：")]),m,n("div",b,[h,n("p",null,[e("配置参考： "),s(i,{to:"/reference/config.html#locales"},{default:d(()=>[e("locales")]),_:1})])]),p,n("div",_,[f,n("p",null,[e("配置参考： "),s(i,{to:"/reference/default-theme/config.html#locales"},{default:d(()=>[e("默认主题 > locales")]),_:1})])])])}const B=a(v,[["render",g],["__file","i18n.html.vue"]]);export{B as default};
