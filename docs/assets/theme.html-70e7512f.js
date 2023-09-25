import{_ as o,r as d,o as r,c as u,a as n,b as e,d as i,w as s,e as l}from"./app-09910f35.js";const c={},m=n("h1",{id:"writing-a-theme",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#writing-a-theme","aria-hidden":"true"},"#"),e(" Writing a Theme")],-1),v={class:"custom-container tip"},h=n("p",{class:"custom-container-title"},"prompt",-1),p=n("h2",{id:"create-a-theme",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#create-a-theme","aria-hidden":"true"},"#"),e(" Create a Theme")],-1),b=n("em",null,"Theme Object",-1),g=n("em",null,"Theme Function",-1),_=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { getDirname, path } from &#39;@vuepress/utils&#39;

const __dirname = getDirname(i<wbr>mport.meta.url)

const fooTheme = (options) =&gt; {
  // returns a theme object
  return {
    name: &#39;vuepress-theme-foo&#39;,

    // path to the client config of your theme
    clientConfigFile: path.resolve(__dirname, &#39;client.js&#39;),

    // set custom dev / build template
    // if the template is not specified, the default template from \`@vuepress/client\` will be used
    templateBuild: path.resolve(__dirname, &#39;templates/build.html&#39;),
    templateDev: path.resolve(__dirname, &#39;templates/dev.html&#39;),

    // use plugins
    plugins: [
      // ...
    ],

    // other plugin APIs are also available
  }
}

const barTheme = (options) =&gt; {
  // returns a theme function
  return (app) =&gt; {
    return {
      name: &#39;vuepress-theme-bar&#39;,
      // ...
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, create theme&#39;s client config file <code>client.js</code> :</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineClientConfig } from &#39;@vuepress/client&#39;
import Layout from &#39;./layouts/Layout.vue&#39;
import NotFound from &#39;./layouts/NotFound.vue&#39;

export default defineClientConfig({
  layouts: {
    Layout,
    NotFound,
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>layouts</code> field declares the layouts provided by your theme. A theme must provide at least two layouts: <code>Layout</code> and <code>NotFound</code>. The former is to provide default layout for common pages, while the latter is to provide layout for 404-not-found page.</p>`,4),f=n("code",null,"Layout",-1),y=l(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;Content /&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>NotFound</code> layout will be used for the <code>404.html</code> page:</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div&gt;404 Not Found&lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),x=n("h2",{id:"publish-to-npm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#publish-to-npm","aria-hidden":"true"},"#"),e(" Publish to NPM")],-1),w={href:"https://docs.npmjs.com/cli/v8/configuring-npm/package-json",target:"_blank",rel:"noopener noreferrer"},T=l(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;name&quot;: &quot;vuepress-theme-foo&quot;,
  &quot;keywords&quot;: [
    &quot;vuepress-theme&quot;
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),k=n("code",null,"name",-1),N=n("code",null,"vuepress-theme-xxx",-1),j=n("code",null,"@org/vuepress-theme-xxx",-1),C=n("em",null,"Theme Object",-1),L=n("li",null,[e("Set "),n("code",null,"keywords"),e(" to include "),n("code",null,"vuepress-theme"),e(", so that users can search your theme on NPM.")],-1);function q(F,S){const t=d("RouterLink"),a=d("ExternalLinkIcon");return r(),u("div",null,[m,n("div",v,[h,n("p",null,[e("Before reading this guide, you'd better learn the guide of "),i(t,{to:"/en-US/advanced/plugin.html"},{default:s(()=>[e("Writing a Plugin")]),_:1}),e(" first.")])]),p,n("p",null,[e("A VuePress theme is a special plugin, which should satisfy the "),i(t,{to:"/en-US/reference/theme-api.html"},{default:s(()=>[e("Theme API")]),_:1}),e(". Like plugins, a theme should also be a "),b,e(" or a "),g,e(", and could be wrapped with a function to receive options:")]),_,n("p",null,[e("The "),f,e(" layout should contain the "),i(t,{to:"/en-US/reference/components.html#content"},{default:s(()=>[e("Content")]),_:1}),e(" component to display the markdown content:")]),y,n("p",null,[e("You can provide more layouts, and users can change layout via "),i(t,{to:"/en-US/reference/frontmatter.html#layout"},{default:s(()=>[e("layout")]),_:1}),e(" frontmatter.")]),x,n("p",null,[e("Also, there are some conventions for theme in "),n("a",w,[e("package.json"),i(a)]),e(":")]),T,n("ul",null,[n("li",null,[e("Set "),k,e(" to follow the naming convention: "),N,e(" or "),j,e(", which should be consistent with the "),i(t,{to:"/en-US/reference/theme-api.html#name"},{default:s(()=>[e("name")]),_:1}),e(" field of the "),C,e(".")]),L])])}const A=o(c,[["render",q],["__file","theme.html.vue"]]);export{A as default};
