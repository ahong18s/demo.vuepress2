import{_ as a,r as s,o as r,c as t,d as n,a as e,b as i,e as d}from"./app-09910f35.js";const c={},u=e("h1",{id:"medium-zoom",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#medium-zoom","aria-hidden":"true"},"#"),i(" medium-zoom")],-1),m={href:"https://github.com/francoischalifour/medium-zoom#readme",target:"_blank",rel:"noopener noreferrer"},h=d(`<p>该插件已经集成到默认主题中。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm i -D @vuepress/plugin-medium-zoom@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { mediumZoomPlugin } from &#39;@vuepress/plugin-medium-zoom&#39;

export default {
  plugins: [
    mediumZoomPlugin({
      // 配置项
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2><h3 id="selector" tabindex="-1"><a class="header-anchor" href="#selector" aria-hidden="true">#</a> selector</h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>&#39;:not(a) &gt; img&#39;</code></p></li><li><p>详情：</p><p>可缩放的图片的选择器。</p><p>默认情况下，该插件会使 <code>&lt;a&gt;</code> 标签以外的所有图片都支持缩放。</p></li></ul><h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h3><ul><li><p>类型： <code>number</code></p></li><li><p>默认值： <code>500</code></p></li><li><p>详情：</p><p>以毫秒为单位的延迟。</p><p>在切换路由进入一个新页面时，该插件会在一定延迟后才使页面内的图片支持缩放。</p></li></ul><h3 id="zoomoptions" tabindex="-1"><a class="header-anchor" href="#zoomoptions" aria-hidden="true">#</a> zoomOptions</h3>`,10),p=e("li",null,[e("p",null,[i("类型： "),e("code",null,"Object")])],-1),v=e("li",null,[e("p",null,"详情："),e("p",null,"medium-zoom 的配置项。")],-1),b=e("p",null,"参考：",-1),_={href:"https://github.com/francoischalifour/medium-zoom#options",target:"_blank",rel:"noopener noreferrer"},f=d('<h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h2><p>你可以通过 <a href="#zoomoptions">zoomOptions</a> 对大部分的缩放样式进行自定义，不过作为补充，该插件同样提供了一些 CSS 变量：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> Composition API</h2><h3 id="usemediumzoom" tabindex="-1"><a class="header-anchor" href="#usemediumzoom" aria-hidden="true">#</a> useMediumZoom</h3>',5),g=e("p",null,"详情：",-1),z=e("code",null,"Zoom",-1),x={href:"https://github.com/francoischalifour/medium-zoom#methods",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,"该插件会在切换路由进入当前页面时使图片支持缩放。但如果你要动态添加新图片，那么你可能就需要这个方法来让这些新图片也支持缩放。",-1),Z=e("p",null,[i("该插件在 "),e("code",null,"Zoom"),i(" 实例上额外添加了一个 "),e("code",null,"refresh"),i(" 方法，它将使用 "),e("a",{href:"#selector"},"selector"),i(" 作为默认参数，先调用 "),e("code",null,"zoom.detach()"),i(" 再调用 "),e("code",null,"zoom.attach()"),i(" ，便于你快速刷新当前页面图片的缩放状态。")],-1),y=e("li",null,[e("p",null,"示例：")],-1),N=d(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { nextTick } from &#39;vue&#39;
import { useMediumZoom } from &#39;@vuepress/plugin-medium-zoom/client&#39;

export default {
  setup() {
    const zoom = useMediumZoom()

    // ... 进行了一些操作，在当前页面添加了新的图片

    // 此时你可能需要手动调用 \`refresh\` 来让这些新图片支持缩放
    nextTick(() =&gt; {
      zoom.refresh()
    })
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function B(V,O){const l=s("NpmBadge"),o=s("ExternalLinkIcon");return r(),t("div",null,[u,n(l,{package:"@vuepress/plugin-medium-zoom"}),e("p",null,[i("将 "),e("a",m,[i("medium-zoom"),n(o)]),i(" 集成到 VuePress 中，为图片提供可缩放的功能。")]),h,e("ul",null,[p,v,e("li",null,[b,e("ul",null,[e("li",null,[e("a",_,[i("medium-zoom > Options"),n(o)])])])])]),f,e("ul",null,[e("li",null,[g,e("p",null,[i("返回该插件使用的 "),z,i(" 实例，便于你直接使用实例上的 "),e("a",x,[i("methods"),n(o)]),i(" 。")]),k,Z]),y]),N])}const C=a(c,[["render",B],["__file","medium-zoom.html.vue"]]);export{C as default};
