import{_ as l}from"./hero-91b5dea0.js";import{_ as r,r as t,o,c,a,b as e,d as s,w as n,e as d}from"./app-8ceb8f5d.js";const u={},m=d(`<h1 id="静态资源" tabindex="-1"><a class="header-anchor" href="#静态资源" aria-hidden="true">#</a> 静态资源</h1><h2 id="相对路径" tabindex="-1"><a class="header-anchor" href="#相对路径" aria-hidden="true">#</a> 相对路径</h2><p>你可以在你的 Markdown 内容中使用相对路径来引用静态资源：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>![图片](./image.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>![图片](image.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一般情况下，我们推荐你使用这种方式来引用图片，因为人们通常会把图片放在引用它的 Markdown 文件附近。</p><h2 id="public-文件" tabindex="-1"><a class="header-anchor" href="#public-文件" aria-hidden="true">#</a> Public 文件</h2><p>你可以把一些静态资源放在 Public 目录中，它们会被复制到最终生成的网站的根目录下。</p>`,9),v=a("code",null,".vuepress/public",-1),p=d(`<p>在下列这些情况中，你可能会用到它：</p><ul><li>你可能需要提供一些静态资源，但是它们并不直接被你的 Markdown 文件引用，比如 favicon 和 PWA 图标。</li><li>你可能想要托管一些共享的静态资源，甚至可能需要在你的网站外部引用它，比如 Logo 图片。</li><li>你可能想在你的 Markdown 内容中通过绝对路径来引入图片。</li></ul><p>以我们文档的源文件为例，我们把 VuePress 的 Logo 放在了 Public 目录下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>└─ docs
   ├─ .vuepress
   |  └─ public
   |     └─ images
   |        └─ hero.png  # &lt;- Logo 文件
   └─ guide
      └─ assets.md       # &lt;- 我们在这里
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以这样在当前页面引用 Logo ：</p><p><strong>Input</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>![VuePress Logo](/images/hero.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Output</strong></p><p><img src="`+l+'" alt="VuePress Logo"></p><h3 id="base-helper" tabindex="-1"><a class="header-anchor" href="#base-helper" aria-hidden="true">#</a> Base Helper</h3>',10),g=a("code",null,"https://foo.github.io/bar/",-1),b=a("code",null,"'/bar/'",-1),h=a("code",null,"https://foo.github.io/bar/images/hero.png",-1),_=d('<p>在大多数情况下，你不需要担心这些 Public 文件的引用路径，因为 VuePress 会自动帮你处理 <code>base</code> 前缀：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>&lt;!-- 你不需要给 `/images/hero.png` 手动添加 `/bar/` 前缀 --&gt;\n![VuePress Logo](/images/hero.png)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',2),f=a("code",null,"base",-1),w=a("code",null,"base",-1),k=d(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>&lt;template&gt;
  &lt;img :src=&quot;withBase(logoPath)&quot;&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from &#39;vue&#39;
import { withBase } from &#39;@vuepress/client&#39;

const logoPath = ref(&#39;/images/hero.png&#39;)
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以通过 <code>$withBase</code> 来直接使用这个工具函数：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>&lt;img :src=&quot;$withBase(&#39;/images/hero.png&#39;)&quot; alt=&quot;VuePress Logo&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="依赖包和路径别名" tabindex="-1"><a class="header-anchor" href="#依赖包和路径别名" aria-hidden="true">#</a> 依赖包和路径别名</h2><p>尽管这不是常见用法，但是你可以从依赖包中引用图片：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm install -D package-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于 Markdown 会默认将图片链接视为相对链接，你需要使用 <code>&lt;img&gt;</code> 标签:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>&lt;img src=&quot;package-name/image.png&quot; alt=&quot;来自依赖包的图片&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在配置文件中设置的路径别名也同样支持：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { getDirname, path } from &#39;@vuepress/utils&#39;

const __dirname = getDirname(i<wbr>mport.meta.url)

export default {
  alias: {
    &#39;@alias&#39;: path.resolve(__dirname, &#39;./path/to/some/dir&#39;),
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>&lt;img src=&quot;@alias/image.png&quot; alt=&quot;来自路径别名的图片&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),x={class:"custom-container tip"},P=a("p",{class:"custom-container-title"},"提示",-1);function q(V,L){const i=t("RouterLink");return o(),c("div",null,[m,a("p",null,[e("默认的 Public 目录是 "),v,e(" ，可以通过 "),s(i,{to:"/reference/config.html#public"},{default:n(()=>[e("public")]),_:1}),e(" 配置项来修改。")]),p,a("p",null,[e("如果你的网站部署在非根路径下，例如 "),g,e(" ，那么你应该把 "),s(i,{to:"/reference/config.html#base"},{default:n(()=>[e("base")]),_:1}),e(" 设置为 "),b,e("。显然，此时你的 Public 文件会被部署在 "),h,e(" 这样的链接下。")]),_,a("p",null,[e("然而，有些情况下，你可能会有一些指向 Public 文件的动态路径，尤其是在你开发一个自定义主题的时候。在这种情况下， "),f,e(" 无法被自动处理。为了解决这个问题，VuePress 提供了 "),s(i,{to:"/reference/client-api.html#withbase"},{default:n(()=>[e("withBase")]),_:1}),e(" 工具函数，它可以帮助你添加 "),w,e(" 前缀：")]),k,a("div",x,[P,a("p",null,[e("配置参考： "),s(i,{to:"/reference/plugin-api.html#alias"},{default:n(()=>[e("alias")]),_:1})])])])}const N=r(u,[["render",q],["__file","assets.html.vue"]]);export{N as default};
