import{_ as d,r as i,o as l,c as r,d as n,a,b as e,w as o,e as u}from"./app-8ceb8f5d.js";const c={},m=a("h1",{id:"theme-data",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#theme-data","aria-hidden":"true"},"#"),e(" theme-data")],-1),v=u(`<p>This plugin is mainly used to develop themes, and has been integrated into the default theme. You won&#39;t need to use it directly in most cases.</p><p>For theme authors, this plugin will help you to use the same i18n mechanism as VuePress and the default theme. But if you don&#39;t want to provide i18n support, or you want to implement in your own way, you don&#39;t need this plugin.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm i -D @vuepress/plugin-theme-data@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { themeDataPlugin } from &#39;@vuepress/plugin-theme-data&#39;

export default {
  plugins: [
    themeDataPlugin({
      // options
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="themedata" tabindex="-1"><a class="header-anchor" href="#themedata" aria-hidden="true">#</a> themeData</h3><ul><li><p>Type: <code>ThemeData</code></p></li><li><p>Default: <code>{}</code></p></li><li><p>Details:</p><p>The theme data object that you want to use in client side.</p><p>You can provide theme data in Node side via this option, and use it in client side via <a href="#useThemeData">useThemeData</a> and <a href="#useThemeLocaleData">useThemeLocaleData</a>.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">warning</p><p>The theme data object will be processed by <code>JSON.stringify()</code> before forwarding to client side, so you should ensure that you are providing a JSON-friendly object.</p></div><h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> Composition API</h2><h3 id="usethemedata" tabindex="-1"><a class="header-anchor" href="#usethemedata" aria-hidden="true">#</a> useThemeData</h3><ul><li><p>Details:</p><p>Returns the theme data ref object.</p><p>The value is provided by <a href="#themeData">themeData</a> option.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { useThemeData } from &#39;@vuepress/plugin-theme-data/client&#39;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usethemelocaledata" tabindex="-1"><a class="header-anchor" href="#usethemelocaledata" aria-hidden="true">#</a> useThemeLocaleData</h3><ul><li><p>Details:</p><p>Returns the theme data ref object in current locale.</p><p>The properties of current locale has been merged into the root-level properties.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { useThemeLocaleData } from &#39;@vuepress/plugin-theme-data/client&#39;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function h(p,b){const t=i("NpmBadge"),s=i("RouterLink");return l(),r("div",null,[m,n(t,{package:"@vuepress/plugin-theme-data"}),a("p",null,[e("Provide client data for your theme, with VuePress "),n(s,{to:"/en-US/guide/i18n.html"},{default:o(()=>[e("i18n")]),_:1}),e(" support.")]),v])}const f=d(c,[["render",h],["__file","theme-data.html.vue"]]);export{f as default};
