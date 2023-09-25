import{_ as o,r as i,o as r,c as d,d as s,a as e,b as n,e as t}from"./app-09910f35.js";const c={},p=e("h1",{id:"register-components",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#register-components","aria-hidden":"true"},"#"),n(" register-components")],-1),m=t(`<p>Register Vue components from component files or directory automatically.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm i -D @vuepress/plugin-register-components@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { registerComponentsPlugin } from &#39;@vuepress/plugin-register-components&#39;

export default {
  plugins: [
    registerComponentsPlugin({
      // options
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> components</h3><ul><li><p>Type: <code>Record&lt;string, string&gt;</code></p></li><li><p>Default: <code>{}</code></p></li><li><p>Details:</p><p>An object that defines name of components and their corresponding file path.</p><p>The key will be used as the component name, and the value is an absolute path of the component file.</p><p>If the component name from this option conflicts with <a href="#componentsdir">componentsDir</a> option, this option will have a higher priority.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { getDirname, path } from &#39;@vuepress/utils&#39;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="componentsdir" tabindex="-1"><a class="header-anchor" href="#componentsdir" aria-hidden="true">#</a> componentsDir</h3><ul><li><p>Type: <code>string | null</code></p></li><li><p>Default: <code>null</code></p></li><li><p>Details:</p><p>Absolute path to the components directory.</p><p>Files in this directory which are matched with <a href="#componentspatterns">componentsPatterns</a> will be registered as Vue components automatically.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { getDirname, path } from &#39;@vuepress/utils&#39;

const __dirname = getDirname(i<wbr>mport.meta.url)

export default {
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, &#39;./components&#39;),
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Components directory:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>components
├─ FooBar.vue
└─ Baz.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Components will be registered like this:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineAsyncComponent } from &#39;vue&#39;

app.component(
  &#39;FooBar&#39;,
  defineAsyncComponent(() =&gt; import(&#39;/path/to/components/FooBar.vue&#39;))
)

app.component(
  &#39;Baz&#39;,
  defineAsyncComponent(() =&gt; import(&#39;/path/to/components/Baz.vue&#39;))
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="componentspatterns" tabindex="-1"><a class="header-anchor" href="#componentspatterns" aria-hidden="true">#</a> componentsPatterns</h3>`,16),u=e("li",null,[e("p",null,[n("Type: "),e("code",null,"string[]")])],-1),v=e("li",null,[e("p",null,[n("Default: "),e("code",null,"['**/*.vue']")])],-1),h=e("p",null,"Details:",-1),b={href:"https://github.com/sindresorhus/globby",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,[n("The patterns are relative to "),e("a",{href:"#componentsdir"},"componentsDir"),n(".")],-1),f=t('<h3 id="getcomponentname" tabindex="-1"><a class="header-anchor" href="#getcomponentname" aria-hidden="true">#</a> getComponentName</h3><ul><li><p>Type: <code>(filename: string) =&gt; string</code></p></li><li><p>Default: <code>(filename) =&gt; path.trimExt(filename.replace(/\\/|\\\\/g, &#39;-&#39;))</code></p></li><li><p>Details:</p><p>A function to get component name from the filename.</p><p>It will only take effect on the files in the <a href="#componentsdir">componentsDir</a> which are matched with the <a href="#componentspatterns">componentsPatterns</a>.</p><p>Notice that the <code>filename</code> is a filepath relative to <a href="#componentsdir">componentsDir</a>.</p></li></ul>',2);function _(x,y){const a=i("NpmBadge"),l=i("ExternalLinkIcon");return r(),d("div",null,[p,s(a,{package:"@vuepress/plugin-register-components"}),m,e("ul",null,[u,v,e("li",null,[h,e("p",null,[n("Patterns to match component files using "),e("a",b,[n("globby"),s(l)]),n(".")]),g])]),f])}const B=o(c,[["render",_],["__file","register-components.html.vue"]]);export{B as default};
