import{_ as o,r as t,o as p,c as u,d as n,a as e,b as i,w as a,e as d}from"./app-8ceb8f5d.js";const c={},v=e("h1",{id:"插件-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#插件-api","aria-hidden":"true"},"#"),i(" 插件 API")],-1),m={href:"https://www.npmjs.com/package/@vuepress/core",target:"_blank",rel:"noopener noreferrer"},h=d('<h2 id="概览" tabindex="-1"><a class="header-anchor" href="#概览" aria-hidden="true">#</a> 概览</h2><p>插件需要在初始化之前使用。基础配置项会在使用插件时立即被处理：</p><ul><li><a href="#name">name</a></li><li><a href="#multiple">multiple</a></li></ul><p>下列 Hooks 会在初始化 App 时处理：</p><ul><li><a href="#extendsmarkdownoptions">extendsMarkdownOptions</a></li><li><a href="#extendsmarkdown">extendsMarkdown</a></li><li><a href="#extendspageoptions">extendsPageOptions</a></li><li><a href="#extendspage">extendsPage</a></li><li><a href="#oninitialized">onInitialized</a></li></ul><p>下列 Hooks 会在准备文件时处理：</p><ul><li><a href="#clientconfigfile">clientConfigFile</a></li><li><a href="#onprepared">onPrepared</a></li></ul><p>下列 Hooks 会在 dev / build 时处理：</p><ul><li><a href="#extendsbundleroptions">extendsBundlerOptions</a></li><li><a href="#alias">alias</a></li><li><a href="#define">define</a></li><li><a href="#onwatched">onWatched</a></li><li><a href="#ongenerated">onGenerated</a></li></ul>',9),b=d(`<h2 id="基础配置项" tabindex="-1"><a class="header-anchor" href="#基础配置项" aria-hidden="true">#</a> 基础配置项</h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>插件的名称。</p><p>它会被用来识别插件，以避免多次使用同一个插件，因此应确保你的插件名称是独一无二的。</p><p>它应遵从如下命名约定：</p><ul><li>非 Scoped: <code>vuepress-plugin-foo</code></li><li>Scoped: <code>@org/vuepress-plugin-foo</code></li></ul></li><li><p>参考：</p><ul><li><a href="#multiple">插件 API &gt; multiple</a></li></ul></li></ul><h3 id="multiple" tabindex="-1"><a class="header-anchor" href="#multiple" aria-hidden="true">#</a> multiple</h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>默认值： <code>false</code></p></li><li><p>详情：</p><p>插件是否能够被多次使用。</p><p>如果设置为 <code>false</code> ，当有相同名称的插件被使用时，先使用的会被后使用的替换掉。</p><p>如果设置为 <code>true</code> ，相同名称的插件可以被多次使用且不会被替换。</p></li><li><p>参考：</p><ul><li><a href="#name">插件 API &gt; name</a></li></ul></li></ul><h2 id="开发-hooks" tabindex="-1"><a class="header-anchor" href="#开发-hooks" aria-hidden="true">#</a> 开发 Hooks</h2><h3 id="alias" tabindex="-1"><a class="header-anchor" href="#alias" aria-hidden="true">#</a> alias</h3><ul><li><p>类型： <code>Record&lt;string, any&gt; | ((app: App, isServer: boolean) =&gt; Record&lt;string, any&gt;)</code></p></li><li><p>详情：</p><p>定义路径别名。</p><p>该 Hook 接收一个对象，或者一个返回对象的函数。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { getDirname, path } from &#39;@vuepress/utils&#39;

const __dirname = getDirname(i<wbr>mport.meta.url)

export default {
  alias: {
    &#39;@alias&#39;: path.resolve(__dirname, &#39;./path/to/alias&#39;),
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="clientconfigfile" tabindex="-1"><a class="header-anchor" href="#clientconfigfile" aria-hidden="true">#</a> clientConfigFile</h3><ul><li><p>类型： <code>string | ((app: App) =&gt; string | Promise&lt;string&gt;)</code></p></li><li><p>详情：</p><p>客户端配置文件路径。</p><p>该 Hook 接收文件绝对路径，或者一个返回路径的函数。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { getDirname, path } from &#39;@vuepress/utils&#39;

const __dirname = getDirname(i<wbr>mport.meta.url)

export default {
  clientConfigFile: path.resolve(
    __dirname,
    &#39;./path/to/clientConfig.js&#39;
  ),
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),g=d(`<h3 id="define" tabindex="-1"><a class="header-anchor" href="#define" aria-hidden="true">#</a> define</h3><ul><li><p>类型： <code>Record&lt;string, any&gt; | ((app: App, isServer: boolean) =&gt; Record&lt;string, any&gt;)</code></p></li><li><p>详情：</p><p>定义全局常量。</p><p>该 Hook 接收一个对象，或者一个返回对象的函数。</p><p>它可以被用于向客户端文件传递变量。注意这里的值都会自动被 <code>JSON.stringify()</code> 处理。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  define: {
    __GLOBAL_BOOLEAN__: true,
    __GLOBAL_STRING__: &#39;foobar&#39;,
    __GLOBAL_OBJECT__: { foo: &#39;bar&#39; },
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extendsbundleroptions" tabindex="-1"><a class="header-anchor" href="#extendsbundleroptions" aria-hidden="true">#</a> extendsBundlerOptions</h3><ul><li><p>类型： <code>(options: BundlerOptions, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>Bundler 配置项扩展。</p><p>该 Hook 接收一个函数，在参数中会收到 Bundler 配置项。</p><p>该 Hook 可以用于修改 Bundler 配置项。</p><p>你可以通过 <code>app.options.bundler.name</code> 判断用户当前使用的 Bundler。</p></li><li><p>示例：</p></li></ul>`,5),f={href:"https://vuejs.org/api/application.html#app-config-compileroptions",target:"_blank",rel:"noopener noreferrer"},_=d(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  extendsBundlerOptions: (bundlerOptions, app) =&gt; {
    // 修改 @vuepress/bundler-vite 的配置项
    if (app.options.bundler.name === &#39;@vuepress/bundler-vite&#39;) {
      bundlerOptions.vuePluginOptions ??= {}
      bundlerOptions.vuePluginOptions.template ??= {}
      bundlerOptions.vuePluginOptions.template.compilerOptions ??= {}
      const isCustomElement = bundlerOptions.vuePluginOptions.template.compilerOptions.isCustomElement
      bundlerOptions.vuePluginOptions.template.compilerOptions.isCustomElement = (tag) =&gt; {
        if (isCustomElement?.(tag)) return true
        if (tag === &#39;my-custom-element&#39;) return true
      }
    }

    // 修改 @vuepress/bundler-webpack 的配置项
    if (app.options.bundler.name === &#39;@vuepress/bundler-webpack&#39;) {
      bundlerOptions.vue ??= {}
      bundlerOptions.vue.compilerOptions ??= {}
      const isCustomElement = bundlerOptions.vue.compilerOptions.isCustomElement
      bundlerOptions.vue.compilerOptions.isCustomElement = (tag) =&gt; {
        if (isCustomElement?.(tag)) return true
        if (tag === &#39;my-custom-element&#39;) return true
      }
    }
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),k=d(`<h3 id="extendsmarkdownoptions" tabindex="-1"><a class="header-anchor" href="#extendsmarkdownoptions" aria-hidden="true">#</a> extendsMarkdownOptions</h3><ul><li><p>类型： <code>(options: MarkdownOptions, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>Markdown 配置项扩展。</p><p>该 Hook 接收一个函数，在参数中会收到 Markdown 配置项。</p><p>该 Hook 可以用于修改 Markdown 配置项。</p></li><li><p>示例：</p></li></ul><p>修改默认提取的子标题层级：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  extendsMarkdownOptions: (markdownOptions, app) =&gt; {
    if (markdownOptions.headers === false) return
    markdownOptions.headers ??= {}
    if (markdownOptions.headers.level) return
    markdownOptions.headers.level = [2, 3, 4, 5, 6]
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),x=e("h3",{id:"extendsmarkdown",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#extendsmarkdown","aria-hidden":"true"},"#"),i(" extendsMarkdown")],-1),P=e("li",null,[e("p",null,[i("类型： "),e("code",null,"(md: Markdown, app: App) => void | Promise<void>")])],-1),O=e("p",null,"详情：",-1),w=e("p",null,"Markdown 增强。",-1),A={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"Markdown",-1),H=e("p",null,"该 Hook 可以用来添加额外的 markdown-it 插件、应用额外的自定义功能。",-1),B=e("li",null,[e("p",null,"示例：")],-1),E=d(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  extendsMarkdown: (md) =&gt; {
    md.use(plugin1)
    md.linkify.set({ fuzzyEmail: false })
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extendspageoptions" tabindex="-1"><a class="header-anchor" href="#extendspageoptions" aria-hidden="true">#</a> extendsPageOptions</h3><ul><li><p>类型： <code>(options: PageOptions, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>页面配置项扩展。</p><p>该 Hook 接收一个函数，在参数中会收到 <code>createPage</code> 传入的配置项。</p><p>该 Hook 可以用于修改页面配置项。</p></li><li><p>示例：</p></li></ul><p>为 <code>_posts</code> 目录下的页面设置永久链接 Pattern ：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  extendsPageOptions: (pageOptions, app) =&gt; {
    if (pageOptions.filePath?.startsWith(app.dir.source(&#39;_posts/&#39;))) {
      pageOptions.frontmatter = pageOptions.frontmatter ?? {}
      pageOptions.frontmatter.permalinkPattern = &#39;/:year/:month/:day/:slug.html&#39;
    }
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),C=d(`<h3 id="extendspage" tabindex="-1"><a class="header-anchor" href="#extendspage" aria-hidden="true">#</a> extendsPage</h3><ul><li><p>类型： <code>(page: Page, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>页面扩展。</p><p>该 Hook 接收一个函数，在参数中会收到一个 <code>Page</code> 实例。</p><p>该 Hook 可以用来在 Page 对象上添加额外的属性，或修改现有的属性等。</p><p>值得一提的是，针对 <code>page.data</code> 和 <code>page.routeMeta</code> 的改动可以在客户端代码中使用。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  extendsPage: (page) =&gt; {
    page.foo = &#39;foo&#39;
    page.data.bar = &#39;bar&#39;
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在客户端组件中：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { usePageData } from &#39;@vuepress/client&#39;

export default {
  setup() {
    const page = usePageData()
    console.log(page.value.bar) // bar
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),I=d('<h2 id="生命周期-hooks" tabindex="-1"><a class="header-anchor" href="#生命周期-hooks" aria-hidden="true">#</a> 生命周期 Hooks</h2><h3 id="oninitialized" tabindex="-1"><a class="header-anchor" href="#oninitialized" aria-hidden="true">#</a> onInitialized</h3><ul><li><p>类型： <code>(app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>该 Hook 会在 VuePress App 初始化后被立即调用。</p></li></ul><h3 id="onprepared" tabindex="-1"><a class="header-anchor" href="#onprepared" aria-hidden="true">#</a> onPrepared</h3><ul><li><p>类型： <code>(app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>该 Hook 会在 VuePress App 完成文件准备后被立即调用。</p></li></ul><h3 id="onwatched" tabindex="-1"><a class="header-anchor" href="#onwatched" aria-hidden="true">#</a> onWatched</h3><ul><li><p>类型： <code>(app: App, watchers: Closable[], restart: () =&gt; Promise&lt;void&gt;) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>该 Hook 会在 VuePress App 启动开发服务器并开始监听文件修改后被调用。</p><p><code>watchers</code> 是一个文件监听器的数组。在修改配置文件导致重启 dev 命令时，这些监听器会被自动关闭。如果你在当前 Hook 中添加了新的监听器，你应该把它们也加入到这个数组中，确保在重启 dev 命令时它们能被正确关闭。</p><p><code>restart</code> 方法用来重启 dev 命令。调用该方法时， <code>watchers</code> 数组中的监听器也会被自动关闭。</p></li></ul><h3 id="ongenerated" tabindex="-1"><a class="header-anchor" href="#ongenerated" aria-hidden="true">#</a> onGenerated</h3><ul><li><p>类型： <code>(app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>该 Hook 会在 VuePress App 完成静态文件生成后被立即调用。</p></li></ul>',9);function M(N,L){const r=t("NpmBadge"),s=t("ExternalLinkIcon"),l=t("RouterLink");return p(),u("div",null,[v,n(r,{package:"@vuepress/core"}),e("p",null,[i("插件 API 是由 "),e("a",m,[i("@vuepress/core"),n(s)]),i(" 包支持的。你可以查看 "),n(l,{to:"/reference/node-api.html"},{default:a(()=>[i("Node API")]),_:1}),i(" 来了解如何使用插件 Hooks 中的 VuePress App 实例。")]),h,e("blockquote",null,[e("p",null,[i("查看 "),n(l,{to:"/advanced/architecture.html#%E6%A0%B8%E5%BF%83%E6%B5%81%E7%A8%8B%E4%B8%8E-hooks"},{default:a(()=>[i("深入 > 架构 > 核心流程与 Hooks")]),_:1}),i(" 来更好地理解该流程。")])]),b,e("ul",null,[e("li",null,[i("参考： "),e("ul",null,[e("li",null,[n(l,{to:"/reference/client-api.html#defineclientconfig"},{default:a(()=>[i("客户端 API > defineClientConfig")]),_:1})]),e("li",null,[n(l,{to:"/advanced/cookbook/usage-of-client-config.html"},{default:a(()=>[i("深入 > Cookbook > 客户端配置的使用方法")]),_:1})])])])]),g,e("p",null,[i("添加默认的 "),e("a",f,[i("app.compilerOptions.isCustomElement"),n(s)]),i(" 配置：")]),_,e("ul",null,[e("li",null,[i("参考： "),e("ul",null,[e("li",null,[n(l,{to:"/reference/bundler/vite.html"},{default:a(()=>[i("打包工具 > Vite")]),_:1})]),e("li",null,[n(l,{to:"/reference/bundler/webpack.html"},{default:a(()=>[i("打包工具 > Webpack")]),_:1})])])])]),k,e("ul",null,[e("li",null,[i("参考： "),e("ul",null,[e("li",null,[n(l,{to:"/reference/config.html#markdown"},{default:a(()=>[i("配置 > markdown")]),_:1})])])])]),x,e("ul",null,[P,e("li",null,[O,w,e("p",null,[i("该 Hook 接收一个函数，在参数中会收到一个由 "),e("a",A,[i("markdown-it"),n(s)]),i(" 提供的 "),y,i(" 实例。")]),H]),B]),E,e("ul",null,[e("li",null,[i("参考： "),e("ul",null,[e("li",null,[n(l,{to:"/reference/node-api.html#createPage"},{default:a(()=>[i("Node API > Page > createPage")]),_:1})])])])]),C,e("ul",null,[e("li",null,[i("参考： "),e("ul",null,[e("li",null,[n(l,{to:"/reference/client-api.html#usepagedata"},{default:a(()=>[i("客户端 API > usePageData")]),_:1})]),e("li",null,[n(l,{to:"/reference/node-api.html#data"},{default:a(()=>[i("Node API > Page 属性 > data")]),_:1})]),e("li",null,[n(l,{to:"/reference/node-api.html#routemeta"},{default:a(()=>[i("Node API > Page 属性 > routeMeta")]),_:1})])])])]),I])}const z=o(c,[["render",M],["__file","plugin-api.html.vue"]]);export{z as default};
