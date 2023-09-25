import{_ as a,r as d,o,c,a as n,b as e,d as i,w as t,e as l}from"./app-09910f35.js";const u={},v=n("h1",{id:"客户端配置的使用方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#客户端配置的使用方法","aria-hidden":"true"},"#"),e(" 客户端配置的使用方法")],-1),p=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { getDirname, path } from &#39;@vuepress/utils&#39;

const __dirname = getDirname(i<wbr>mport.meta.url)

const pluginOrTheme = {
  clientConfigFile: path.resolve(__dirname, &#39;./path/to/clientConfig.ts&#39;),
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),m=n("code",null,"@vuepress/client",-1),h=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineClientConfig } from &#39;@vuepress/client&#39;

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  layouts: {},
  rootComponents: [],
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="enhance" tabindex="-1"><a class="header-anchor" href="#enhance" aria-hidden="true">#</a> enhance</h2><p><code>enhance</code> 函数既可以是同步的，也可以是异步的。它接收一个 Context 参数，包含以下属性：</p>`,3),f=n("code",null,"app",-1),b={href:"https://staging-cn.vuejs.org/api/application.html#create-app",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"router",-1),g={href:"https://router.vuejs.org/zh/api/index.html#createrouter",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"siteData",-1),y=n("p",null,[n("code",null,"enhance"),e(" 函数会在客户端应用创建后被调用，你可以对 Vue 应用添加各种能力。")],-1),x=n("h3",{id:"注册-vue-组件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#注册-vue-组件","aria-hidden":"true"},"#"),e(" 注册 Vue 组件")],-1),S={href:"https://staging-cn.vuejs.org/api/application.html#app-component",target:"_blank",rel:"noopener noreferrer"},R=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineClientConfig } from &#39;@vuepress/client&#39;
import MyComponent from &#39;./MyComponent.vue&#39;

export default defineClientConfig({
  enhance({ app }) {
    app.component(&#39;MyComponent&#39;, MyComponent)
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用不支持-ssr-的功能" tabindex="-1"><a class="header-anchor" href="#使用不支持-ssr-的功能" aria-hidden="true">#</a> 使用不支持 SSR 的功能</h3><p>VuePress 会在构建过程中生成一个 SSR 应用，用以对页面进行预渲染。一般而言，如果一段代码在客户端应用 Mount 之前就使用了浏览器或 DOM API ，我们就认为其对 SSR 不友好，即不支持 SSR 。</p>`,3),E=n("code",null,"enhance",-1),k=n("code",null,[e("_"),n("wbr"),e("_VUEPRESS_SSR__")],-1),M=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineClientConfig } from &#39;@vuepress/client&#39;

export default defineClientConfig({
  async enhance() {
    if (!_<wbr>_VUEPRESS_SSR__) {
      const nonSsrFriendlyModule = await import(&#39;non-ssr-friendly-module&#39;)
      // ...
    }
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-router-方法" tabindex="-1"><a class="header-anchor" href="#使用-router-方法" aria-hidden="true">#</a> 使用 Router 方法</h3>`,2),V={href:"https://router.vuejs.org/zh/api/index.html#router-%E6%96%B9%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},B=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineClientConfig } from &#39;@vuepress/client&#39;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>我们不推荐使用 <code>addRoute</code> 方法来添加动态路由，因为这些路由记录 <strong>不会</strong> 在构建模式中被预渲染出来。</p><p>当然，如果你了解了这种用法的缺点，你还是可以这样使用。</p></div><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> setup</h2>`,3),P=n("code",null,"setup",-1),A={href:"https://staging-cn.vuejs.org/api/composition-api-setup.html",target:"_blank",rel:"noopener noreferrer"},w=n("h3",{id:"使用组合式-api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用组合式-api","aria-hidden":"true"},"#"),e(" 使用组合式 API")],-1),D=n("code",null,"setup",-1),j={href:"https://staging-cn.vuejs.org/api/composition-api-setup.html",target:"_blank",rel:"noopener noreferrer"},I=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineClientConfig } from &#39;@vuepress/client&#39;
import { provide, ref } from &#39;vue&#39;
import { useRoute, useRouter } from &#39;vue-router&#39;

export default defineClientConfig({
  setup() {
    // 获取当前的路由位置
    const route = useRoute()
    // 或者 vue-router 实例
    const router = useRouter()
    // 供给一个值，可以被布局、页面和其他组件注入
    const count = ref(0)
    provide(&#39;count&#39;, count)
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用不支持-ssr-的功能-1" tabindex="-1"><a class="header-anchor" href="#使用不支持-ssr-的功能-1" aria-hidden="true">#</a> 使用不支持 SSR 的功能</h3>`,2),L=n("code",null,"setup",-1),O=n("code",null,[e("_"),n("wbr"),e("_VUEPRESS_SSR__")],-1),F={href:"https://staging-cn.vuejs.org/api/composition-api-lifecycle.html#onmounted",target:"_blank",rel:"noopener noreferrer"},H=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineClientConfig } from &#39;@vuepress/client&#39;
import { onMounted } from &#39;vue&#39;

export default defineClientConfig({
  setup() {
    onMounted(() =&gt; {
      // 在 mounted 之后使用 DOM API
      document.querySelector(&#39;#app&#39;)
    })
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="layouts" tabindex="-1"><a class="header-anchor" href="#layouts" aria-hidden="true">#</a> layouts</h2>`,2),N=n("code",null,"layouts",-1),U=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineClientConfig } from &#39;@vuepress/client&#39;
import MyLayout from &#39;./layouts/MyLayout.vue&#39;

export default defineClientConfig({
  layouts: {
    MyLayout,
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rootcomponents" tabindex="-1"><a class="header-anchor" href="#rootcomponents" aria-hidden="true">#</a> rootComponents</h2><p><code>rootComponents</code> 是一个组件数组，它们将会直接被放置在客户端 Vue 应用的根节点下。</p><p>该选项的典型使用方式就是放置一些全局的 UI 组件，比如全局弹窗等：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineClientConfig } from &#39;@vuepress/client&#39;
import GlobalPopup from &#39;./components/GlobalPopup.vue&#39;

export default defineClientConfig({
  rootComponents: [GlobalPopup],
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function G(z,T){const s=d("RouterLink"),r=d("ExternalLinkIcon");return o(),c("div",null,[v,n("p",null,[e("你可以直接在你的项目中使用 "),i(s,{to:"/guide/configuration.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:t(()=>[e("客户端配置文件")]),_:1}),e(" 。或者，在你的插件或者主题中，使用 "),i(s,{to:"/reference/plugin-api.html#clientconfigfile"},{default:t(()=>[e("clientConfigFile")]),_:1}),e(" Hook 来指定客户端配置文件的路径：")]),p,n("p",null,[e("在客户端配置文件中，"),m,e(" 包提供了一个 "),i(s,{to:"/reference/client-api.html#defineclientconfig"},{default:t(()=>[e("defineClientConfig")]),_:1}),e(" 函数来帮助你定义客户端配置：")]),h,n("ul",null,[n("li",null,[f,e(" 是由 "),n("a",b,[e("createApp"),i(r)]),e(" 创建的 Vue 应用实例。")]),n("li",null,[_,e(" 是由 "),n("a",g,[e("createRouter"),i(r)]),e(" 创建的路由实例。")]),n("li",null,[C,e(" 是一个根据用户配置生成的 Ref 对象，包含 "),i(s,{to:"/reference/config.html#base"},{default:t(()=>[e("base")]),_:1}),e(", "),i(s,{to:"/reference/config.html#lang"},{default:t(()=>[e("lang")]),_:1}),e(", "),i(s,{to:"/reference/config.html#title"},{default:t(()=>[e("title")]),_:1}),e(", "),i(s,{to:"/reference/config.html#description"},{default:t(()=>[e("description")]),_:1}),e(", "),i(s,{to:"/reference/config.html#head"},{default:t(()=>[e("head")]),_:1}),e(" 和 "),i(s,{to:"/reference/config.html#locales"},{default:t(()=>[e("locales")]),_:1}),e("。")])]),y,x,n("p",null,[e("你可以通过 "),n("a",S,[e("app.component"),i(r)]),e(" 方法来注册 Vue 全局组件：")]),R,n("p",null,[e("我们已经提供了一个 "),i(s,{to:"/reference/components.html#clientonly"},{default:t(()=>[e("ClientOnly")]),_:1}),e(" 组件来包裹不支持 SSR 的内容。")]),n("p",null,[e("在 "),E,e(" 函数中，你可以使用 "),i(s,{to:"/reference/client-api.html#ssr"},{default:t(()=>[k]),_:1}),e(" 标记来处理这种情况。")]),M,n("p",null,[e("你可以使用 vue-router 提供的 "),n("a",V,[e("Router 方法"),i(r)]),e(" 。例如，添加导航钩子：")]),B,n("p",null,[P,e(" 函数会在客户端 Vue 应用的 "),n("a",A,[e("setup"),i(r)]),e(" Hook 中被调用。")]),w,n("p",null,[e("你可以把 "),D,e(" 函数当作根组件的 "),n("a",j,[e("setup"),i(r)]),e(" Hook 中的一部分。因此，所有的组合式 API 都可以在这里使用。")]),I,n("p",null,[e("在 "),L,e(" 函数中，"),i(s,{to:"/reference/client-api.html#ssr"},{default:t(()=>[O]),_:1}),e(" 标记同样可用。")]),n("p",null,[e("使用不支持 SSR 的功能的另一种方式就是将他们放在 "),n("a",F,[e("onMounted"),i(r)]),e(" Hook 中：")]),H,n("p",null,[N,e(" 配置项用于设置布局组件。你在此处注册布局后，用户就可以通过 "),i(s,{to:"/reference/frontmatter.html#layout"},{default:t(()=>[e("layout")]),_:1}),e(" frontmatter 来使用它们。")]),U])}const J=a(u,[["render",G],["__file","usage-of-client-config.html.vue"]]);export{J as default};
