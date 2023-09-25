import{_ as r,r as a,o as d,c as u,a as n,b as e,d as i,w as l,e as t}from"./app-09910f35.js";const c={},p=n("h1",{id:"writing-a-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#writing-a-plugin","aria-hidden":"true"},"#"),e(" Writing a Plugin")],-1),v={class:"custom-container tip"},m=n("p",{class:"custom-container-title"},"prompt",-1),h=n("h2",{id:"create-a-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#create-a-plugin","aria-hidden":"true"},"#"),e(" Create a Plugin")],-1),g=n("em",null,"Plugin Object",-1),b=t(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>const fooPlugin = {
  name: &#39;vuepress-plugin-foo&#39;,
  // ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_=n("em",null,"Plugin Object",-1),f=n("em",null,"Plugin Function",-1),x=t(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>const barPlugin = (app) =&gt; {
  return {
    name: &#39;vuepress-plugin-bar&#39;,
    // ...
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A plugin usually needs to allow user options, so we typically provide users with a function to receive options, and returns a <em>Plugin Object</em> or a <em>Plugin Function</em>. Then your plugin should be converted like this:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>const fooPlugin = (options) =&gt; {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="publish-to-npm" tabindex="-1"><a class="header-anchor" href="#publish-to-npm" aria-hidden="true">#</a> Publish to NPM</h2>`,4),P={href:"https://docs.npmjs.com/cli/v8/configuring-npm/package-json",target:"_blank",rel:"noopener noreferrer"},w=t(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;name&quot;: &quot;vuepress-plugin-foo&quot;,
  &quot;keywords&quot;: [
    &quot;vuepress-plugin&quot;
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),y=n("code",null,"name",-1),k=n("code",null,"vuepress-plugin-xxx",-1),j=n("code",null,"@org/vuepress-plugin-xxx",-1),q=n("em",null,"Plugin Object",-1),S=n("li",null,[e("Set "),n("code",null,"keywords"),e(" to include "),n("code",null,"vuepress-plugin"),e(", so that users can search your plugin on NPM.")],-1);function N(A,V){const s=a("RouterLink"),o=a("ExternalLinkIcon");return d(),u("div",null,[p,n("div",v,[m,n("p",null,[e("Before reading this guide, you'd better learn the VuePress "),i(s,{to:"/en-US/advanced/architecture.html"},{default:l(()=>[e("architecture")]),_:1}),e(" first.")])]),h,n("p",null,[e("A plugin should be a plain JavaScript object that satisfies the "),i(s,{to:"/en-US/reference/plugin-api.html"},{default:l(()=>[e("Plugin API")]),_:1}),e(", which is called a "),g,e(":")]),b,n("p",null,[e("A plugin could also be a function that receives the "),i(s,{to:"/en-US/reference/node-api.html#app"},{default:l(()=>[e("app instance")]),_:1}),e(" as the param and returns a "),_,e(", which is called a "),f,e(":")]),x,n("p",null,[e("After creating a plugin, you should follow some conventions in the "),n("a",P,[e("package.json"),i(o)]),e(" file before publishing it to NPM:")]),w,n("ul",null,[n("li",null,[e("Set "),y,e(" to follow the naming convention, i.e. "),k,e(" or "),j,e(", which should be consistent with the "),i(s,{to:"/en-US/reference/plugin-api.html#name"},{default:l(()=>[e("name")]),_:1}),e(" field of the "),q,e(".")]),S])])}const L=r(c,[["render",N],["__file","plugin.html.vue"]]);export{L as default};
