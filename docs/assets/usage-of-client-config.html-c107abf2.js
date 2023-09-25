import{_ as l,r as a,o as d,c,a as n,b as e,d as i,w as s,e as o}from"./app-09910f35.js";const u={},p=n("h1",{id:"usage-of-client-config",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usage-of-client-config","aria-hidden":"true"},"#"),e(" Usage of Client Config")],-1),v=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { getDirname, path } from &#39;@vuepress/utils&#39;

const __dirname = getDirname(i<wbr>mport.meta.url)

const pluginOrTheme = {
  clientConfigFile: path.resolve(__dirname, &#39;./path/to/clientConfig.ts&#39;),
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),m=n("code",null,"@vuepress/client",-1),h=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineClientConfig } from &#39;@vuepress/client&#39;

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  layouts: {},
  rootComponents: [],
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="enhance" tabindex="-1"><a class="header-anchor" href="#enhance" aria-hidden="true">#</a> enhance</h2><p>The <code>enhance</code> function could be either synchronous or asynchronous. It accepts a context param with following properties:</p>`,3),f=n("code",null,"app",-1),b={href:"https://vuejs.org/api/application.html#createapp",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"router",-1),_={href:"https://router.vuejs.org/api/#createrouter",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"siteData",-1),C=n("p",null,[e("The "),n("code",null,"enhance"),e(" function will be invoked after the client app is created. It's possible to implement any enhancements to the Vue application.")],-1),S=n("h3",{id:"register-vue-components",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#register-vue-components","aria-hidden":"true"},"#"),e(" Register Vue Components")],-1),x={href:"https://vuejs.org/api/application.html#app-component",target:"_blank",rel:"noopener noreferrer"},k=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineClientConfig } from &#39;@vuepress/client&#39;
import MyComponent from &#39;./MyComponent.vue&#39;

export default defineClientConfig({
  enhance({ app }) {
    app.component(&#39;MyComponent&#39;, MyComponent)
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-non-ssr-friendly-features" tabindex="-1"><a class="header-anchor" href="#use-non-ssr-friendly-features" aria-hidden="true">#</a> Use Non-SSR-Friendly Features</h3><p>VuePress will generate a SSR application to pre-render pages during build. Generally speaking, if a code snippet is using Browser / DOM APIs before client app is mounted, we call it non-SSR-friendly.</p>`,3),R=n("code",null,"enhance",-1),U=n("code",null,[e("_"),n("wbr"),e("_VUEPRESS_SSR__")],-1),w=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineClientConfig } from &#39;@vuepress/client&#39;

export default defineClientConfig({
  async enhance() {
    if (!_<wbr>_VUEPRESS_SSR__) {
      const nonSsrFriendlyModule = await import(&#39;non-ssr-friendly-module&#39;)
      // ...
    }
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-router-methods" tabindex="-1"><a class="header-anchor" href="#use-router-methods" aria-hidden="true">#</a> Use Router Methods</h3>`,2),M={href:"https://router.vuejs.org/api/#router-methods",target:"_blank",rel:"noopener noreferrer"},I=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineClientConfig } from &#39;@vuepress/client&#39;

export default defineClientConfig({
  enhance({ router }) {
    router.beforeEach((to) =&gt; {
      console.log(&#39;before navigation&#39;)
    })

    router.afterEach((to) =&gt; {
      console.log(&#39;after navigation&#39;)
    })
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">warning</p><p>It&#39;s not recommended to use <code>addRoute</code> method to add dynamic routes here, because those routes will <strong>NOT</strong> be pre-rendered in build mode.</p><p>But you can still do that if you understand the drawback.</p></div><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> setup</h2>`,3),V=n("code",null,"setup",-1),E={href:"https://vuejs.org/api/composition-api-setup.html",target:"_blank",rel:"noopener noreferrer"},P=n("h3",{id:"use-composition-api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#use-composition-api","aria-hidden":"true"},"#"),e(" Use Composition API")],-1),j=n("code",null,"setup",-1),T={href:"https://vuejs.org/api/composition-api-setup.html",target:"_blank",rel:"noopener noreferrer"},F=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineClientConfig } from &#39;@vuepress/client&#39;
import { provide, ref } from &#39;vue&#39;
import { useRoute, useRouter } from &#39;vue-router&#39;

export default defineClientConfig({
  setup() {
    // get the current route location
    const route = useRoute()
    // get the vue-router instance
    const router = useRouter()
    // provide a value that can be injected by layouts, pages and other components
    const count = ref(0)
    provide(&#39;count&#39;, count)
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-non-ssr-friendly-features-1" tabindex="-1"><a class="header-anchor" href="#use-non-ssr-friendly-features-1" aria-hidden="true">#</a> Use Non-SSR-Friendly Features</h3>`,2),A=n("code",null,"setup",-1),L=n("code",null,[e("_"),n("wbr"),e("_VUEPRESS_SSR__")],-1),N={href:"https://vuejs.org/api/composition-api-lifecycle.html#onmounted",target:"_blank",rel:"noopener noreferrer"},D=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineClientConfig } from &#39;@vuepress/client&#39;
import { onMounted } from &#39;vue&#39;

export default defineClientConfig({
  setup() {
    onMounted(() =&gt; {
      // use DOM API after mounted
      document.querySelector(&#39;#app&#39;)
    })
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="layouts" tabindex="-1"><a class="header-anchor" href="#layouts" aria-hidden="true">#</a> layouts</h2>`,2),O=n("code",null,"layouts",-1),B=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineClientConfig } from &#39;@vuepress/client&#39;
import MyLayout from &#39;./layouts/MyLayout.vue&#39;

export default defineClientConfig({
  layouts: {
    MyLayout,
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rootcomponents" tabindex="-1"><a class="header-anchor" href="#rootcomponents" aria-hidden="true">#</a> rootComponents</h2><p>The <code>rootComponents</code> is a components array to be placed directly into the root node of the client vue app.</p><p>Typical usage of this option is to put some global UI components, like global popup or so:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineClientConfig } from &#39;@vuepress/client&#39;
import GlobalPopup from &#39;./components/GlobalPopup.vue&#39;

export default defineClientConfig({
  rootComponents: [GlobalPopup],
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function G(Y,q){const t=a("RouterLink"),r=a("ExternalLinkIcon");return d(),c("div",null,[p,n("p",null,[e("You can make use of the "),i(t,{to:"/en-US/guide/configuration.html#client-config-file"},{default:s(()=>[e("client config file")]),_:1}),e(" directly in your project, or specify the file path in your plugin or theme via "),i(t,{to:"/en-US/reference/plugin-api.html#clientconfigfile"},{default:s(()=>[e("clientConfigFile")]),_:1}),e(" hook:")]),v,n("p",null,[e("Inside the client config file, "),m,e(" package provides a helper function "),i(t,{to:"/en-US/reference/client-api.html#defineclientconfig"},{default:s(()=>[e("defineClientConfig")]),_:1}),e(" to help you define the client config:")]),h,n("ul",null,[n("li",null,[f,e(" is the Vue application instance that created by "),n("a",b,[e("createApp"),i(r)]),e(".")]),n("li",null,[g,e(" is the Vue Router instance that created by "),n("a",_,[e("createRouter"),i(r)]),e(".")]),n("li",null,[y,e(" is a ref of an object that generated from user config, including "),i(t,{to:"/en-US/reference/config.html#base"},{default:s(()=>[e("base")]),_:1}),e(", "),i(t,{to:"/en-US/reference/config.html#lang"},{default:s(()=>[e("lang")]),_:1}),e(", "),i(t,{to:"/en-US/reference/config.html#title"},{default:s(()=>[e("title")]),_:1}),e(", "),i(t,{to:"/en-US/reference/config.html#description"},{default:s(()=>[e("description")]),_:1}),e(", "),i(t,{to:"/en-US/reference/config.html#head"},{default:s(()=>[e("head")]),_:1}),e(" and "),i(t,{to:"/en-US/reference/config.html#locales"},{default:s(()=>[e("locales")]),_:1}),e(".")])]),C,S,n("p",null,[e("You can register global Vue components via the "),n("a",x,[e("app.component"),i(r)]),e(" method:")]),k,n("p",null,[e("We already provides a "),i(t,{to:"/en-US/reference/components.html#clientonly"},{default:s(()=>[e("ClientOnly")]),_:1}),e(" component to wrap non-SSR-friendly content.")]),n("p",null,[e("In the "),R,e(" function, you can make use of the "),i(t,{to:"/en-US/reference/client-api.html#ssr"},{default:s(()=>[U]),_:1}),e(" flag for that purpose.")]),w,n("p",null,[e("You can make use of the "),n("a",M,[e("Router Methods"),i(r)]),e(" that provided by vue-router. For example, add navigation guard:")]),I,n("p",null,[e("The "),V,e(" function would be invoked inside the "),n("a",E,[e("setup"),i(r)]),e(" hook of the client vue app.")]),P,n("p",null,[e("You can take the "),j,e(" function as part of the "),n("a",T,[e("setup"),i(r)]),e(" hook of the root component. Thus, all composition APIs are available here.")]),F,n("p",null,[e("In the "),A,e(" function, the "),i(t,{to:"/en-US/reference/client-api.html#ssr"},{default:s(()=>[L]),_:1}),e(" flag is also available.")]),n("p",null,[e("Another way to use non-ssr-friendly features is to put them inside the "),n("a",N,[e("onMounted"),i(r)]),e(" hook:")]),D,n("p",null,[e("The "),O,e(" options is to set layout components. After layout components are registered here, users can use it via "),i(t,{to:"/en-US/reference/frontmatter.html#layout"},{default:s(()=>[e("layout")]),_:1}),e(" frontmatter.")]),B])}const z=l(u,[["render",G],["__file","usage-of-client-config.html.vue"]]);export{z as default};
