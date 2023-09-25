import{_ as c,r as o,o as a,c as r,a as i,b as e,d as n,w as d,e as l}from"./app-09910f35.js";const t={},u=l(`<h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>如果没有任何配置，你的 VuePress 站点仅有一些最基础的功能。为了更好地自定义你的网站，让我们首先在你的文档目录下创建一个 <code>.vuepress</code> 目录，所有 VuePress 相关的文件都将会被放在这里。你的项目结构可能是这样：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
├─ .gitignore
└─ package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>VuePress 站点的基本配置文件是 <code>.vuepress/config.js</code> ，但也同样支持 TypeScript 配置文件。你可以使用 <code>.vuepress/config.ts</code> 来得到更好的类型提示。</p><p>具体而言，我们对于配置文件的路径有着约定（按照优先顺序）：</p><ul><li>当前工作目录 <code>cwd</code> 下： <ul><li><code>vuepress.config.ts</code></li><li><code>vuepress.config.js</code></li><li><code>vuepress.config.mjs</code></li></ul></li><li>源文件目录 <code>sourceDir</code> 下： <ul><li><code>.vuepress/config.ts</code></li><li><code>.vuepress/config.js</code></li><li><code>.vuepress/config.mjs</code></li></ul></li></ul>`,7),v=i("code",null,"--config",-1),p=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vuepress dev docs --config my-config.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一个基础的配置文件是这样的：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineUserConfig } from &#39;vuepress&#39;

export default defineUserConfig({
  lang: &#39;zh-CN&#39;,
  title: &#39;你好， VuePress ！&#39;,
  description: &#39;这是我的第一个 VuePress 站点&#39;,
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),m={class:"custom-container tip"},g=i("p",{class:"custom-container-title"},"提示",-1),b=l(`<h2 id="客户端配置文件" tabindex="-1"><a class="header-anchor" href="#客户端配置文件" aria-hidden="true">#</a> 客户端配置文件</h2><p>在大多数情况下，配置文件已经足够帮助你配置好你的 VuePress 站点。不过，有些时候用户们可能希望直接添加一些客户端代码。 VuePress 通过客户端配置文件来支持这种需求：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  │  ├─ client.js   &lt;--- 客户端配置文件
│  │  └─ config.js   &lt;--- 配置文件
│  └─ README.md
├─ .gitignore
└─ package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样的，我们也有关于客户端配置文件的路径约定（按照优先顺序）：</p><ul><li>当前工作目录 <code>cwd</code> 下： <ul><li><code>vuepress.client.ts</code></li><li><code>vuepress.client.js</code></li><li><code>vuepress.client.mjs</code></li></ul></li><li>源文件目录 <code>sourceDir</code> 下： <ul><li><code>.vuepress/client.ts</code></li><li><code>.vuepress/client.js</code></li><li><code>.vuepress/client.mjs</code></li></ul></li></ul><p>一个基础的客户端配置文件是这样的：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineClientConfig } from &#39;@vuepress/client&#39;

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  rootComponents: [],
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),f={class:"custom-container tip"},h=i("p",{class:"custom-container-title"},"提示",-1),_=i("p",null,"和配置文件不同，客户端配置文件不能通过命令行接口的选项来指定。",-1);function x(j,V){const s=o("RouterLink");return a(),r("div",null,[u,i("p",null,[e("你也可以通过 "),n(s,{to:"/reference/cli.html"},{default:d(()=>[e("命令行接口")]),_:1}),e(" 的 "),v,e(" 选项来指定配置文件：")]),p,i("div",m,[g,i("p",null,[e("前往 "),n(s,{to:"/reference/config.html"},{default:d(()=>[e("配置参考")]),_:1}),e(" 查看所有 VuePress 配置。")])]),b,i("div",f,[h,_,i("p",null,[e("可以前往 "),n(s,{to:"/advanced/cookbook/usage-of-client-config.html"},{default:d(()=>[e("深入 > Cookbook > 客户端配置的使用方法")]),_:1}),e(" 来了解更多信息。")])])])}const k=c(t,[["render",x],["__file","configuration.html.vue"]]);export{k as default};
