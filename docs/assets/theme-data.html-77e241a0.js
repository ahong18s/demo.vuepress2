import{_ as l,r as i,o as t,c as r,d as n,a,b as e,w as c,e as u}from"./app-8ceb8f5d.js";const m={},v=a("h1",{id:"theme-data",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#theme-data","aria-hidden":"true"},"#"),e(" theme-data")],-1),o=u(`<p>该插件主要用于开发主题，并且已经集成到默认主题中。大部分情况下你不需要直接使用它。</p><p>对于主题作者，该插件可以提供与 VuePress 及默认主题相同的多语言支持机制。但是如果你的主题不需要提供多语言支持，或者你想用你自己的方式来实现多语言支持，那么你不需要使用该插件。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm i -D @vuepress/plugin-theme-data@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { themeDataPlugin } from &#39;@vuepress/plugin-theme-data&#39;

export default {
  plugins: [
    themeDataPlugin({
      // 配置项
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2><h3 id="themedata" tabindex="-1"><a class="header-anchor" href="#themedata" aria-hidden="true">#</a> themeData</h3><ul><li><p>类型： <code>ThemeData</code></p></li><li><p>默认值： <code>{}</code></p></li><li><p>详情：</p><p>你希望在 Client 端中使用的主题数据对象。</p><p>你可以通过该配置项，在 Node 端提供主题数据，然后在客户端通过 <a href="#useThemeData">useThemeData</a> 和 <a href="#useThemeLocaleData">useThemeLocaleData</a> 来使用主题数据。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  plugins: [
    themeDataPlugin({
      themeData: {
        foo: &#39;foo&#39;,
        locales: {
          &#39;/zh/&#39;: {
            foo: &#39;zh-foo&#39;,
          },
        },
      },
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>主题数据对象在传递到客户端之前，会使用 <code>JSON.stringify()</code> 进行处理，因此你需要保证你提供的是一个可以被 JSON 序列化的对象。</p></div><h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> Composition API</h2><h3 id="usethemedata" tabindex="-1"><a class="header-anchor" href="#usethemedata" aria-hidden="true">#</a> useThemeData</h3><ul><li><p>详情：</p><p>返回主题数据的 Ref 对象。</p><p>数据是通过 <a href="#themeData">themeData</a> 配置项提供的。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { useThemeData } from &#39;@vuepress/plugin-theme-data/client&#39;
import type { ThemeData } from &#39;@vuepress/plugin-theme-data/client&#39;

type MyThemeData = ThemeData&lt;{
  foo: string
}&gt;

export default {
  setup() {
    const themeData = useThemeData&lt;MyThemeData&gt;()
    console.log(themeData.value)
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usethemelocaledata" tabindex="-1"><a class="header-anchor" href="#usethemelocaledata" aria-hidden="true">#</a> useThemeLocaleData</h3><ul><li><p>详情：</p><p>返回当前 locale 下主题数据的 Ref 对象。</p><p>当前 locale 中的字段已被合并到顶层字段中。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { useThemeLocaleData } from &#39;@vuepress/plugin-theme-data/client&#39;
import type { ThemeData } from &#39;@vuepress/plugin-theme-data/client&#39;

type MyThemeData = ThemeData&lt;{
  foo: string
}&gt;

export default {
  setup() {
    const themeLocaleData = useThemeLocaleData&lt;MyThemeData&gt;()
    console.log(themeLocaleData.value)
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function p(h,b){const s=i("NpmBadge"),d=i("RouterLink");return t(),r("div",null,[v,n(s,{package:"@vuepress/plugin-theme-data"}),a("p",null,[e("为你的主题提供客户端数据，包含 VuePress 的 "),n(d,{to:"/guide/i18n.html"},{default:c(()=>[e("多语言支持")]),_:1}),e(" 。")]),o])}const f=l(m,[["render",p],["__file","theme-data.html.vue"]]);export{f as default};
