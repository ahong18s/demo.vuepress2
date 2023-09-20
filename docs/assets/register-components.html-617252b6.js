import{_ as d,r as i,o as t,c as o,d as s,a as e,b as n,e as a}from"./app-8ceb8f5d.js";const c={},p=e("h1",{id:"register-components",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#register-components","aria-hidden":"true"},"#"),n(" register-components")],-1),m=a(`<p>根据组件文件或目录自动注册 Vue 组件。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm i -D @vuepress/plugin-register-components@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { registerComponentsPlugin } from &#39;@vuepress/plugin-register-components&#39;

export default {
  plugins: [
    registerComponentsPlugin({
      // 配置项
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2><h3 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> components</h3><ul><li><p>类型： <code>Record&lt;string, string&gt;</code></p></li><li><p>默认值： <code>{}</code></p></li><li><p>详情：</p><p>一个定义了组件名称和其对应文件路径的对象。</p><p>键会被用作组件名称，值是组件文件的绝对路径。</p><p>如果该配置项中的组件名称和 <a href="#componentsdir">componentsDir</a> 配置项发生冲突，那么该配置项会有更高的优先级。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { getDirname, path } from &#39;@vuepress/utils&#39;

const __dirname = getDirname(i<wbr>mport.meta.url)

export default {
  plugins: [
    registerComponentsPlugin({
      components: {
        FooBar: path.resolve(__dirname, &#39;./components/FooBar.vue&#39;),
      },
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="componentsdir" tabindex="-1"><a class="header-anchor" href="#componentsdir" aria-hidden="true">#</a> componentsDir</h3><ul><li><p>类型： <code>string | null</code></p></li><li><p>默认值： <code>null</code></p></li><li><p>详情：</p><p>组件目录的绝对路径。</p><p>该目录下匹配 <a href="#componentspatterns">componentsPatterns</a> 的文件会被自动注册为 Vue 组件。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { getDirname, path } from &#39;@vuepress/utils&#39;

const __dirname = getDirname(i<wbr>mport.meta.url)

export default {
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, &#39;./components&#39;),
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件目录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>components
├─ FooBar.vue
└─ Baz.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件会像这样被注册：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineAsyncComponent } from &#39;vue&#39;

app.component(
  &#39;FooBar&#39;,
  defineAsyncComponent(() =&gt; import(&#39;/path/to/components/FooBar.vue&#39;))
)

app.component(
  &#39;Baz&#39;,
  defineAsyncComponent(() =&gt; import(&#39;/path/to/components/Baz.vue&#39;))
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="componentspatterns" tabindex="-1"><a class="header-anchor" href="#componentspatterns" aria-hidden="true">#</a> componentsPatterns</h3>`,16),u=e("li",null,[e("p",null,[n("类型： "),e("code",null,"string[]")])],-1),v=e("li",null,[e("p",null,[n("默认值： "),e("code",null,"['**/*.vue']")])],-1),h=e("p",null,"详情：",-1),b={href:"https://github.com/sindresorhus/globby",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,[n("该 Patterns 是相对于 "),e("a",{href:"#componentsdir"},"componentsDir"),n(" 目录的。")],-1),_=a('<h3 id="getcomponentname" tabindex="-1"><a class="header-anchor" href="#getcomponentname" aria-hidden="true">#</a> getComponentName</h3><ul><li><p>类型： <code>(filename: string) =&gt; string</code></p></li><li><p>默认值： <code>(filename) =&gt; path.trimExt(filename.replace(/\\/|\\\\/g, &#39;-&#39;))</code></p></li><li><p>详情：</p><p>用于从文件名获取对应组件名称的函数。</p><p>它只会对 <a href="#componentsdir">componentsDir</a> 目录下匹配了 <a href="#componentspatterns">componentsPatterns</a> 的文件生效。</p><p>注意，这里的 <code>filename</code> 是相对于 <a href="#componentspatterns">componentsPatterns</a> 目录的文件路径。</p></li></ul>',2);function f(x,y){const r=i("NpmBadge"),l=i("ExternalLinkIcon");return t(),o("div",null,[p,s(r,{package:"@vuepress/plugin-register-components"}),m,e("ul",null,[u,v,e("li",null,[h,e("p",null,[n("使用 "),e("a",b,[n("globby"),s(l)]),n(" 来匹配组件文件的 Patterns 。")]),g])]),_])}const C=d(c,[["render",f],["__file","register-components.html.vue"]]);export{C as default};
