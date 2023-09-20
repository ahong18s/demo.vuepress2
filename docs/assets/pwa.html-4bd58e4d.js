import{_ as d,r as o,o as c,c as u,d as n,a as e,b as i,w as l,e as r}from"./app-8ceb8f5d.js";const v={},p=e("h1",{id:"pwa",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pwa","aria-hidden":"true"},"#"),i(" pwa")],-1),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps",target:"_blank",rel:"noopener noreferrer"},b={href:"https://developers.google.com/web/tools/workbox/modules/workbox-build",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/yyx990803/register-service-worker",target:"_blank",rel:"noopener noreferrer"},_=r(`<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm i -D @vuepress/plugin-pwa@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { pwaPlugin } from &#39;@vuepress/plugin-pwa&#39;

export default {
  plugins: [
    pwaPlugin({
      // 配置项
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="web-app-manifests" tabindex="-1"><a class="header-anchor" href="#web-app-manifests" aria-hidden="true">#</a> Web App Manifests</h2>`,4),g={href:"https://developer.mozilla.org/zh-CN/docs/Web/Manifest",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,".vuepress/public",-1),k=r(`<ol><li>创建 Manifest 文件</li></ol><p>通常是 <code>.vuepress/public/manifest.webmanifest</code> ：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;name&quot;: &quot;VuePress&quot;,
  &quot;short_name&quot;: &quot;VuePress&quot;,
  &quot;description&quot;: &quot;Vue-powered Static Site Generator&quot;,
  &quot;start_url&quot;: &quot;/index.html&quot;,
  &quot;display&quot;: &quot;standalone&quot;,
  &quot;background_color&quot;: &quot;#fff&quot;,
  &quot;theme_color&quot;: &quot;#3eaf7c&quot;,
  &quot;icons&quot;: [
    {
      &quot;src&quot;: &quot;/images/icons/android-chrome-192x192.png&quot;,
      &quot;sizes&quot;: &quot;192x192&quot;,
      &quot;type&quot;: &quot;image/png&quot;
    },
    {
      &quot;src&quot;: &quot;/images/icons/android-chrome-384x384.png&quot;,
      &quot;sizes&quot;: &quot;384x384&quot;,
      &quot;type&quot;: &quot;image/png&quot;
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>生成 PWA 图标</li></ol><p>为了提高你的 PWA 的可用性，你需要生成一些图标，并将它们放置在 Public 目录下。</p><p>确保图标的路径匹配 Manifest 文件中的 <code>icons</code> 字段：</p><ul><li><code>.vuepress/public/images/icons/android-chrome-192x192.png</code></li><li><code>.vuepress/public/images/icons/android-chrome-384x384.png</code></li></ul>`,7),q={class:"custom-container tip"},w=e("p",{class:"custom-container-title"},"提示",-1),x={href:"https://realfavicongenerator.net/",target:"_blank",rel:"noopener noreferrer"},W=e("ol",{start:"3"},[e("li",null,"设置 Head 中的标签")],-1),S={href:"https://developer.mozilla.org/en-US/docs/Web/Manifest#deploying_a_manifest_with_the_link_tag",target:"_blank",rel:"noopener noreferrer"},P=r(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  head: [
    [&#39;link&#39;, { rel: &#39;manifest&#39;, href: &#39;/manifest.webmanifest&#39; }],
    [&#39;meta&#39;, { name: &#39;theme-color&#39;, content: &#39;#3eaf7c&#39; }],
    // ...其他标签
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2>`,2),y={href:"https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW",target:"_blank",rel:"noopener noreferrer"},E=e("code",null,"globDirectory",-1),A=e("code",null,"swDest",-1),z=r(`<p>比如，你可以设置 <code>skipWaiting: true</code> ，这将在新的 Service Worker 就绪之后立即激活它：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  plugins: [
    pwaPlugin({
      skipWaiting: true,
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是如果你不设置 <code>skipWaiting</code> 或设置为 <code>false</code> ，你就需要手动激活新的 Service Worker 。</p>`,3),B=e("li",null,[i("对于开发者，你可以使用该插件提供的 "),e("a",{href:"#composition-api"},"Composition API"),i(" 来控制 Service Worker 的行为。")],-1),M=e("h3",{id:"serviceworkerfilename",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#serviceworkerfilename","aria-hidden":"true"},"#"),i(" serviceWorkerFilename")],-1),N=e("li",null,[e("p",null,[i("类型： "),e("code",null,"string")])],-1),V=e("li",null,[e("p",null,[i("默认值： "),e("code",null,"'service-worker.js'")])],-1),C=e("p",null,"详情：",-1),I=e("p",null,[i("Service Worker 文件只会在 "),e("code",null,"build"),i(" 模式下生成。")],-1),j=e("h2",{id:"composition-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#composition-api","aria-hidden":"true"},"#"),i(" Composition API")],-1),L=e("h3",{id:"usepwaevent",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usepwaevent","aria-hidden":"true"},"#"),i(" usePwaEvent")],-1),R=e("p",null,"详情：",-1),D=e("p",null,"返回该插件的 Event Emitter 。",-1),G={href:"https://github.com/yyx990803/register-service-worker",target:"_blank",rel:"noopener noreferrer"},F=e("li",null,[e("p",null,"示例：")],-1),U=r(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { usePwaEvent } from &#39;@vuepress/plugin-pwa/client&#39;

export default {
  setup() {
    const event = usePwaEvent()
    event.on(&#39;ready&#39;, (registration) =&gt; {
      console.log(&#39;Service worker 已经生效。&#39;)
    })
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="useskipwaiting" tabindex="-1"><a class="header-anchor" href="#useskipwaiting" aria-hidden="true">#</a> useSkipWaiting</h3><ul><li>参数：</li></ul><table><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>registration</td><td><code>ServiceWorkerRegistration</code></td><td>你想要激活的 Service Worker 的 Registration</td></tr></tbody></table>`,4),H=e("p",null,"详情：",-1),T={href:"https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting",target:"_blank",rel:"noopener noreferrer"},J=e("li",null,[e("p",null,"示例：")],-1),K=r(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import {
  usePwaEvent,
  useSkipWaiting,
} from &#39;@vuepress/plugin-pwa/client&#39;

export default {
  setup() {
    const event = usePwaEvent()
    event.on(&#39;updated&#39;, (registration) =&gt; {
      console.log(&#39;在 Waiting 状态的 Service Worker 已经就绪。&#39;)
      // 激活 Waiting 状态的 Service Worker
      useSkipWaiting(registration)
    })
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function O(Q,X){const a=o("NpmBadge"),s=o("ExternalLinkIcon"),t=o("RouterLink");return c(),u("div",null,[p,n(a,{package:"@vuepress/plugin-pwa"}),e("p",null,[i("使你的 VuePress 站点成为一个 "),e("a",m,[i("渐进式 Web 应用 (PWA)"),n(s)]),i(".")]),e("p",null,[i("该插件使用 "),e("a",b,[i("workbox-build"),n(s)]),i(" 来生成 Service Worker 文件，并通过 "),e("a",h,[i("register-service-worker"),n(s)]),i(" 来注册 Service Worker 。")]),_,e("p",null,[i("为了使你的网站符合 PWA 的要求，你需要创建一个 "),e("a",g,[i("Web app manifests"),n(s)]),i(" 文件，并且为你的 PWA 设置图标、颜色等信息。")]),e("p",null,[i("你需要将你的 Manifest 文件和图标放置在 "),n(t,{to:"/guide/assets.html#public-%E6%96%87%E4%BB%B6"},{default:l(()=>[i("Public 目录")]),_:1}),i(" 下。在下述的示例中，我们假设你正在使用默认的 Public 目录 "),f,i(" 。")]),k,e("div",q,[w,e("p",null,[i("一些工具可以帮助你做这些事。比如 "),e("a",x,[i("Favicon Generator"),n(s)]),i(" 可以帮助你生成图片以及一个 Manifest 文件样例。")])]),W,e("p",null,[i("你还需要通过 "),n(t,{to:"/reference/config.html#head"},{default:l(()=>[i("head")]),_:1}),i(" 配置项来设置一些标签，用来 "),e("a",S,[i("部署你的 Manifest 文件"),n(s)]),i(" 。")]),P,e("p",null,[i("该插件的配置项可以接收 workbox-build 中 "),e("a",y,[i("generateSW 方法"),n(s)]),i(" 除了 "),E,i(" 和 "),A,i(" 以外的所有参数。")]),z,e("ul",null,[e("li",null,[i("对于用户，你可以配合我们提供的 "),n(t,{to:"/reference/plugin/pwa-popup.html"},{default:l(()=>[i("pwa-popup")]),_:1}),i(" 插件一起使用。")]),B]),M,e("ul",null,[N,V,e("li",null,[C,e("p",null,[i("生成的 Service Worker 文件路径，该路径是 "),n(t,{to:"/reference/config.html#dest"},{default:l(()=>[i("dest")]),_:1}),i(" 目录的相对路径。")]),I])]),j,L,e("ul",null,[e("li",null,[R,D,e("p",null,[i("你可以为 "),e("a",G,[i("register-service-worker"),n(s)]),i(" 提供的事件添加事件监听器。")])]),F]),U,e("ul",null,[e("li",null,[H,e("p",null,[i("调用 "),e("a",T,[i("skipWaiting()"),n(s)]),i(" 来激活处于 Waiting 状态的 Service Worker 。")])]),J]),K])}const Z=d(v,[["render",O],["__file","pwa.html.vue"]]);export{Z as default};
