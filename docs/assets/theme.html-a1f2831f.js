import{_ as r,r as t,o,c,a as n,b as e,d as i,w as l,e as d}from"./app-8ceb8f5d.js";const u={},v=n("h1",{id:"开发主题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#开发主题","aria-hidden":"true"},"#"),e(" 开发主题")],-1),m={class:"custom-container tip"},p=n("p",{class:"custom-container-title"},"提示",-1),b=n("h2",{id:"创建一个主题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#创建一个主题","aria-hidden":"true"},"#"),e(" 创建一个主题")],-1),h=n("em",null,"主题对象",-1),_=n("em",null,"主题函数",-1),g=d(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { getDirname, path } from &#39;@vuepress/utils&#39;

const __dirname = getDirname(i<wbr>mport.meta.url)

const fooTheme = (options) =&gt; {
  // 返回一个主题对象
  return {
    name: &#39;vuepress-theme-foo&#39;,

    // 主题的客户端配置文件的路径
    clientConfigFile: path.resolve(__dirname, &#39;client.js&#39;),

    // 设置自定义 dev / build 模板
    // 如果没有指定模板，将会使用 \`@vuepress/client\` 提供的默认模板
    templateBuild: path.resolve(__dirname, &#39;templates/build.html&#39;),
    templateDev: path.resolve(__dirname, &#39;templates/dev.html&#39;),

    // 使用插件
    plugins: [
      // ...
    ],

    // 其他的插件 API 也都可用
  }
}

const barTheme = (options) =&gt; {
  // 返回一个主题函数
  return (app) =&gt; {
    return {
      name: &#39;vuepress-theme-bar&#39;,
      // ...
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，创建主题的客户端配置文件 <code>client.js</code> :</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineClientConfig } from &#39;@vuepress/client&#39;
import Layout from &#39;./layouts/Layout.vue&#39;
import NotFound from &#39;./layouts/NotFound.vue&#39;

export default defineClientConfig({
  layouts: {
    Layout,
    NotFound,
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>layouts</code> 字段声明了你的主题提供的布局。一个主题必须提供至少两个布局：<code>Layout</code> 和 <code>NotFound</code> 。前者用于提供一般页面的默认布局，后者用于提供 404 页面的布局。</p>`,4),f=n("code",null,"Layout",-1),x=d(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;Content /&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>NotFound</code> 布局会被用于 <code>404.html</code> 页面：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div&gt;404 Not Found&lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),y=n("h2",{id:"发布到-npm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#发布到-npm","aria-hidden":"true"},"#"),e(" 发布到 NPM")],-1),k={href:"https://docs.npmjs.com/cli/v8/configuring-npm/package-json",target:"_blank",rel:"noopener noreferrer"},N=d(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;name&quot;: &quot;vuepress-theme-foo&quot;,
  &quot;keywords&quot;: [
    &quot;vuepress-theme&quot;
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),C=n("code",null,"name",-1),L=n("code",null,"vuepress-theme-xxx",-1),j=n("code",null,"@org/vuepress-theme-xxx",-1),q=n("em",null,"主题对象",-1),F=n("li",null,[e("在 "),n("code",null,"keywords"),e(" 中包含 "),n("code",null,"vuepress-theme"),e(" ，这样用户可以在 NPM 上搜索到你的主题。")],-1);function w(P,V){const s=t("RouterLink"),a=t("ExternalLinkIcon");return o(),c("div",null,[v,n("div",m,[p,n("p",null,[e("在阅读该指南之前，你最好先了解一下 "),i(s,{to:"/advanced/plugin.html"},{default:l(()=>[e("开发插件")]),_:1}),e(" 指南。")])]),b,n("p",null,[e("VuePress 主题是一个特殊的插件，它应该符合 "),i(s,{to:"/reference/theme-api.html"},{default:l(()=>[e("主题 API")]),_:1}),e(" 。和插件一样，主题可以是一个 "),h,e(" 或一个 "),_,e(" ，并且通常通过一个函数来接收配置项：")]),g,n("p",null,[f,e(" 布局应该包含 "),i(s,{to:"/reference/components.html#content"},{default:l(()=>[e("Content")]),_:1}),e(" 组件来展示 Markdown 内容：")]),x,n("p",null,[e("你可以提供多个布局，用户可以通过 "),i(s,{to:"/reference/frontmatter.html#layout"},{default:l(()=>[e("layout")]),_:1}),e(" Frontmatter 来修改布局。")]),y,n("p",null,[e("同样的，对于主题也有 "),n("a",k,[e("package.json"),i(a)]),e(" 相关的约定：")]),N,n("ul",null,[n("li",null,[e("将 "),C,e(" 按照约定命名： "),L,e(" 或 "),j,e(" ，它应该和 "),q,e(" 的 "),i(s,{to:"/reference/theme-api.html#name"},{default:l(()=>[e("name")]),_:1}),e(" 字段保持一致。")]),F])])}const I=r(u,[["render",w],["__file","theme.html.vue"]]);export{I as default};
