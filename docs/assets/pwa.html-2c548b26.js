import{_ as d,r as a,o as u,c,d as n,a as e,b as i,w as r,e as t}from"./app-8ceb8f5d.js";const v={},p=e("h1",{id:"pwa",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pwa","aria-hidden":"true"},"#"),i(" pwa")],-1),m={href:"https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps",target:"_blank",rel:"noopener noreferrer"},h={href:"https://developers.google.com/web/tools/workbox/modules/workbox-build",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/yyx990803/register-service-worker",target:"_blank",rel:"noopener noreferrer"},g=t(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm i -D @vuepress/plugin-pwa@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { pwaPlugin } from &#39;@vuepress/plugin-pwa&#39;

export default {
  plugins: [
    pwaPlugin({
      // options
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="web-app-manifests" tabindex="-1"><a class="header-anchor" href="#web-app-manifests" aria-hidden="true">#</a> Web App Manifests</h2>`,4),_={href:"https://developer.mozilla.org/en-US/docs/Web/Manifest",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,".vuepress/public",-1),w=t(`<ol><li>Create manifest file</li></ol><p>Typically <code>.vuepress/public/manifest.webmanifest</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Generate PWA icons</li></ol><p>To make your PWA more accessible, you need to generate some icons, and put them inside the public directory.</p><p>Make sure the path of icons matches the <code>icons</code> field in your manifest file:</p><ul><li><code>.vuepress/public/images/icons/android-chrome-192x192.png</code></li><li><code>.vuepress/public/images/icons/android-chrome-384x384.png</code></li></ul>`,7),k={class:"custom-container tip"},q=e("p",{class:"custom-container-title"},"prompt",-1),y={href:"https://realfavicongenerator.net/",target:"_blank",rel:"noopener noreferrer"},x=e("ol",{start:"3"},[e("li",null,"Set tags in head")],-1),W={href:"https://developer.mozilla.org/en-US/docs/Web/Manifest#deploying_a_manifest_with_the_link_tag",target:"_blank",rel:"noopener noreferrer"},P=t(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  head: [
    [&#39;link&#39;, { rel: &#39;manifest&#39;, href: &#39;/manifest.webmanifest&#39; }],
    [&#39;meta&#39;, { name: &#39;theme-color&#39;, content: &#39;#3eaf7c&#39; }],
    // ...other tags
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>`,2),S={href:"https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"globDirectory",-1),A=e("code",null,"swDest",-1),E=t(`<p>For example, you can set <code>skipWaiting: true</code> to auto activate the new service worker once it is ready:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  plugins: [
    pwaPlugin({
      skipWaiting: true,
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>But if you omit <code>skipWaiting</code> or set it to <code>false</code>, you have to activate the new service worker manually:</p>`,3),U=e("li",null,[i("For developers, you can use our "),e("a",{href:"#composition-api"},"composition API"),i(" to take control of the service worker behavior.")],-1),D=e("h3",{id:"serviceworkerfilename",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#serviceworkerfilename","aria-hidden":"true"},"#"),i(" serviceWorkerFilename")],-1),V=e("li",null,[e("p",null,[i("Type: "),e("code",null,"string")])],-1),F=e("li",null,[e("p",null,[i("Default: "),e("code",null,"'service-worker.js'")])],-1),z=e("p",null,"Details:",-1),B=e("p",null,[i("The service worker file will only be generated in "),e("code",null,"build"),i(" mode.")],-1),I=e("h2",{id:"composition-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#composition-api","aria-hidden":"true"},"#"),i(" Composition API")],-1),N=e("h3",{id:"usepwaevent",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usepwaevent","aria-hidden":"true"},"#"),i(" usePwaEvent")],-1),C=e("p",null,"Details:",-1),M=e("p",null,"Returns the event emitter of this plugin.",-1),j={href:"https://github.com/yyx990803/register-service-worker",target:"_blank",rel:"noopener noreferrer"},G=e("li",null,[e("p",null,"Example:")],-1),L=t(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { usePwaEvent } from &#39;@vuepress/plugin-pwa/client&#39;

export default {
  setup() {
    const event = usePwaEvent()
    event.on(&#39;ready&#39;, (registration) =&gt; {
      console.log(&#39;Service worker is active.&#39;)
    })
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="useskipwaiting" tabindex="-1"><a class="header-anchor" href="#useskipwaiting" aria-hidden="true">#</a> useSkipWaiting</h3><ul><li>Parameters:</li></ul><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>registration</td><td><code>ServiceWorkerRegistration</code></td><td>The registration of the service worker you want activate</td></tr></tbody></table>`,4),R=e("p",null,"Details:",-1),Y={href:"https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting",target:"_blank",rel:"noopener noreferrer"},O=e("li",null,[e("p",null,"Example:")],-1),H=t(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import {
  usePwaEvent,
  useSkipWaiting,
} from &#39;@vuepress/plugin-pwa/client&#39;

export default {
  setup() {
    const event = usePwaEvent()
    event.on(&#39;updated&#39;, (registration) =&gt; {
      console.log(&#39;The waiting service worker is available.&#39;)
      // activate the waiting service worker
      useSkipWaiting(registration)
    })
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function J(K,Q){const l=a("NpmBadge"),s=a("ExternalLinkIcon"),o=a("RouterLink");return u(),c("div",null,[p,n(l,{package:"@vuepress/plugin-pwa"}),e("p",null,[i("Make your VuePress site a "),e("a",m,[i("Progressive Web Application (PWA)"),n(s)]),i(".")]),e("p",null,[i("This plugin uses "),e("a",h,[i("workbox-build"),n(s)]),i(" to generate service worker file, and uses "),e("a",b,[i("register-service-worker"),n(s)]),i(" to register service worker.")]),g,e("p",null,[i("To make your website fully compliant with PWA, you need to create a "),e("a",_,[i("Web app manifests"),n(s)]),i(" file and set the icons, colors, etc. for your PWA.")]),e("p",null,[i("You need to put your manifest file and icons into the "),n(o,{to:"/en-US/guide/assets.html#public-files"},{default:r(()=>[i("public files directory")]),_:1}),i(". In the following example, we assume that you are using the default public directory "),f,i(".")]),w,e("div",k,[q,e("p",null,[i("Some tools can help to do that. For example, "),e("a",y,[i("Favicon Generator"),n(s)]),i(" would help you to generate icons together with a sample manifest file.")])]),x,e("p",null,[i("You also need to set some tags via "),n(o,{to:"/en-US/reference/config.html#head"},{default:r(()=>[i("head")]),_:1}),i(" option to "),e("a",W,[i("deploy the manifest"),n(s)]),i(":")]),P,e("p",null,[i("This plugin accepts all parameters of workbox-build's "),e("a",S,[i("generateSW method"),n(s)]),i(" in its options, except "),T,i(" and "),A,i(".")]),E,e("ul",null,[e("li",null,[i("For users, you can use our "),n(o,{to:"/en-US/reference/plugin/pwa-popup.html"},{default:r(()=>[i("pwa-popup")]),_:1}),i(" plugin together.")]),U]),D,e("ul",null,[V,F,e("li",null,[z,e("p",null,[i("File path of the generated service worker file, which is relative to the "),n(o,{to:"/en-US/reference/config.html#dest"},{default:r(()=>[i("dest")]),_:1}),i(" directory.")]),B])]),I,N,e("ul",null,[e("li",null,[C,M,e("p",null,[i("You can add listener function to events that provided by "),e("a",j,[i("register-service-worker"),n(s)]),i(".")])]),G]),L,e("ul",null,[e("li",null,[R,e("p",null,[i("Call "),e("a",Y,[i("skipWaiting()"),n(s)]),i(" to activate the waiting service worker.")])]),O]),H])}const Z=d(v,[["render",J],["__file","pwa.html.vue"]]);export{Z as default};
