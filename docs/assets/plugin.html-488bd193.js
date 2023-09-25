import{_ as r,r as d,o as c,c as o,a as n,b as e,d as i,w as l,e as a}from"./app-09910f35.js";const u={},v=n("h1",{id:"开发插件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#开发插件","aria-hidden":"true"},"#"),e(" 开发插件")],-1),m={class:"custom-container tip"},p=n("p",{class:"custom-container-title"},"提示",-1),_=n("h2",{id:"创建一个插件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#创建一个插件","aria-hidden":"true"},"#"),e(" 创建一个插件")],-1),b=n("em",null,"插件对象",-1),h=a(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>const fooPlugin = {
  name: &#39;vuepress-plugin-foo&#39;,
  // ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),g=n("em",null,"插件对象",-1),f=n("em",null,"插件函数",-1),x=a(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>const barPlugin = (app) =&gt; {
  return {
    name: &#39;vuepress-plugin-bar&#39;,
    // ...
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插件通常需要允许用户传入配置，因此我们一般都会提供给用户一个函数来接收配置，然后将 <em>插件对象</em> 或者 <em>插件函数</em> 作为返回值。于是，你的插件应该转换成这样的形式：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>const fooPlugin = (options) =&gt; {
  return {
    name: &#39;vuepress-plugin-foo&#39;,
    // ...
  }
}

const barPlugin = (options) =&gt; {
  return (app) =&gt; {
    return {
      name: &#39;vuepress-plugin-bar&#39;,
      // ...
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="发布到-npm" tabindex="-1"><a class="header-anchor" href="#发布到-npm" aria-hidden="true">#</a> 发布到 NPM</h2>`,4),k={href:"https://docs.npmjs.com/cli/v8/configuring-npm/package-json",target:"_blank",rel:"noopener noreferrer"},P=a(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;name&quot;: &quot;vuepress-plugin-foo&quot;,
  &quot;keywords&quot;: [
    &quot;vuepress-plugin&quot;
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),q=n("code",null,"name",-1),y=n("code",null,"vuepress-plugin-xxx",-1),N=n("code",null,"@org/vuepress-plugin-xxx",-1),j=n("em",null,"插件对象",-1),V=n("li",null,[e("在 "),n("code",null,"keywords"),e(" 中包含 "),n("code",null,"vuepress-plugin"),e(" ，这样用户可以在 NPM 上搜索到你的插件。")],-1);function w(L,B){const s=d("RouterLink"),t=d("ExternalLinkIcon");return c(),o("div",null,[v,n("div",m,[p,n("p",null,[e("在阅读该指南之前，你最好先了解一下 VuePress 的 "),i(s,{to:"/advanced/architecture.html"},{default:l(()=>[e("架构")]),_:1}),e(" 。")])]),_,n("p",null,[e("插件是一个符合 "),i(s,{to:"/reference/plugin-api.html"},{default:l(()=>[e("插件 API")]),_:1}),e(" 的普通 JavaScript 对象，称之为 "),b,e(" ：")]),h,n("p",null,[e("插件还可以是一个接收 "),i(s,{to:"/reference/node-api.html#app"},{default:l(()=>[e("App 实例")]),_:1}),e(" 作为参数，且返回值为 "),g,e(" 的函数，称之为 "),f,e(" ：")]),x,n("p",null,[e("在创建了插件之后，你需要在 "),n("a",k,[e("package.json"),i(t)]),e(" 文件中遵循一定的约定，然后再将其发布到 NPM 上：")]),P,n("ul",null,[n("li",null,[e("将 "),q,e(" 按照约定命名，即 "),y,e(" 或 "),N,e(" ，它应该和 "),j,e(" 的 "),i(s,{to:"/reference/plugin-api.html#name"},{default:l(()=>[e("name")]),_:1}),e(" 字段保持一致。")]),V])])}const I=r(u,[["render",w],["__file","plugin.html.vue"]]);export{I as default};
