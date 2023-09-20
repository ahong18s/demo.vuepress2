import{_ as t,r as s,o as d,c as r,d as n,a as e,b as i,e as a}from"./app-8ceb8f5d.js";const m={},u=e("h1",{id:"medium-zoom",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#medium-zoom","aria-hidden":"true"},"#"),i(" medium-zoom")],-1),c={href:"https://github.com/francoischalifour/medium-zoom#readme",target:"_blank",rel:"noopener noreferrer"},h=a(`<p>This plugin has been integrated into the default theme.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm i -D @vuepress/plugin-medium-zoom@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { mediumZoomPlugin } from &#39;@vuepress/plugin-medium-zoom&#39;

export default {
  plugins: [
    mediumZoomPlugin({
      // options
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="selector" tabindex="-1"><a class="header-anchor" href="#selector" aria-hidden="true">#</a> selector</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;:not(a) &gt; img&#39;</code></p></li><li><p>Details:</p><p>Selector of zoomable images.</p><p>By default this plugin will make all images zoomable except those inside <code>&lt;a&gt;</code> tags.</p></li></ul><h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h3><ul><li><p>Type: <code>number</code></p></li><li><p>Default: <code>500</code></p></li><li><p>Details:</p><p>Delay in milliseconds.</p><p>After navigating to a new page, this plugin will make images zoomable with a delay.</p></li></ul><h3 id="zoomoptions" tabindex="-1"><a class="header-anchor" href="#zoomoptions" aria-hidden="true">#</a> zoomOptions</h3>`,10),p=e("li",null,[e("p",null,[i("Type: "),e("code",null,"Object")])],-1),v=e("li",null,[e("p",null,"Details:"),e("p",null,"Options for medium-zoom.")],-1),g=e("p",null,"Also see:",-1),b={href:"https://github.com/francoischalifour/medium-zoom#options",target:"_blank",rel:"noopener noreferrer"},f=a('<h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles</h2><p>You can customize most of the zoom styles via <a href="#zoomoptions">zoomOptions</a>, while this plugin also provides some CSS variables for additional customization:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div><h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> Composition API</h2><h3 id="usemediumzoom" tabindex="-1"><a class="header-anchor" href="#usemediumzoom" aria-hidden="true">#</a> useMediumZoom</h3>',5),_=e("p",null,"Details:",-1),z=e("code",null,"Zoom",-1),y={href:"https://github.com/francoischalifour/medium-zoom#methods",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,"This plugin will make images zoomable after navigating to current page. But if you are going to add new images dynamically, you may need this method to make those new images zoomable, too.",-1),k=e("p",null,[i("This plugin adds an extra "),e("code",null,"refresh"),i(" method on the "),e("code",null,"Zoom"),i(" instance, which will call "),e("code",null,"zoom.detach()"),i(" then "),e("code",null,"zoom.attach()"),i(" with the "),e("a",{href:"#selector"},"selector"),i(" as the default parameter. It will help you to refresh the zoomable images for current page.")],-1),w=e("li",null,[e("p",null,"Example:")],-1),T=a(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { nextTick } from &#39;vue&#39;
import { useMediumZoom } from &#39;@vuepress/plugin-medium-zoom/client&#39;

export default {
  setup() {
    const zoom = useMediumZoom()

    // ... do something to add new images in current page
  
    // then you may need to call \`refresh\` manually to make those new images zoomable
    nextTick(() =&gt; {
      zoom.refresh()
    })
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function D(Z,B){const l=s("NpmBadge"),o=s("ExternalLinkIcon");return d(),r("div",null,[u,n(l,{package:"@vuepress/plugin-medium-zoom"}),e("p",null,[i("Integrate "),e("a",c,[i("medium-zoom"),n(o)]),i(" into VuePress, which can provide the ability to zoom images.")]),h,e("ul",null,[p,v,e("li",null,[g,e("ul",null,[e("li",null,[e("a",b,[i("medium-zoom > Options"),n(o)])])])])]),f,e("ul",null,[e("li",null,[_,e("p",null,[i("Returns the "),z,i(" instance that used by this plugin, so that you can use the instance "),e("a",y,[i("methods"),n(o)]),i(" directly.")]),x,k]),w]),T])}const O=t(m,[["render",D],["__file","medium-zoom.html.vue"]]);export{O as default};
