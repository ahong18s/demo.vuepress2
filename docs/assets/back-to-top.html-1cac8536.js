import{_ as s,r as n,o as i,c as d,d as c,a as e,b as r,e as t}from"./app-09910f35.js";const o={},l=e("h1",{id:"back-to-top",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#back-to-top","aria-hidden":"true"},"#"),r(" back-to-top")],-1),p=t(`<p>该插件会给你的站点添加一个 <em>返回顶部</em> 按钮。当页面向下滚动时，该按钮会显示在页面的右下角，点击它就会滚动到页面顶部。</p><p>该插件已经集成到默认主题中。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm i -D @vuepress/plugin-back-to-top@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { backToTopPlugin } from &#39;@vuepress/plugin-back-to-top&#39;

export default {
  plugins: [
    backToTopPlugin(),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h2><p>你可以通过 CSS 变量来自定义 <em>返回顶部</em> 按钮的样式：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div>`,8);function u(m,v){const a=n("NpmBadge");return i(),d("div",null,[l,c(a,{package:"@vuepress/plugin-back-to-top"}),p])}const h=s(o,[["render",u],["__file","back-to-top.html.vue"]]);export{h as default};
