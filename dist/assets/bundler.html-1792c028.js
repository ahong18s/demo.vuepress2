import{_ as c,r as o,o as i,c as u,a as n,b as e,d as s,w as a,e as d}from"./app-e83a4b47.js";const k={},v=n("h1",{id:"打包工具",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#打包工具","aria-hidden":"true"},"#"),e(" 打包工具")],-1),m={href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},_=n("h2",{id:"选择一个打包工具",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#选择一个打包工具","aria-hidden":"true"},"#"),e(" 选择一个打包工具")],-1),h={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.npmjs.com/package/vuepress-webpack",target:"_blank",rel:"noopener noreferrer"},g=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),e(` uninstall vuepress
`),n("span",{class:"token function"},"pnpm"),e(),n("span",{class:"token function"},"add"),e(),n("span",{class:"token parameter variable"},"-D"),e(` vuepress-webpack@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),e(` remove vuepress
`),n("span",{class:"token function"},"yarn"),e(),n("span",{class:"token function"},"add"),e(),n("span",{class:"token parameter variable"},"-D"),e(` vuepress-webpack@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),e(` uninstall vuepress
`),n("span",{class:"token function"},"npm"),e(),n("span",{class:"token function"},"install"),e(),n("span",{class:"token parameter variable"},"-D"),e(` vuepress-webpack@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V={class:"custom-container tip"},y=n("p",{class:"custom-container-title"},"提示",-1),C={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},N={href:"https://www.npmjs.com/package/vuepress-vite",target:"_blank",rel:"noopener noreferrer"},j=n("h2",{id:"配置打包工具",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置打包工具","aria-hidden":"true"},"#"),e(" 配置打包工具")],-1),B=n("p",null,"一般情况下，你不要任何额外配置就可以使用打包工具，因为我们已经帮你配置好了它们。",-1),P=d(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token comment">// import { webpackBundler } from &#39;vuepress-webpack&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  bundler<span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    vuePluginOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      template<span class="token operator">:</span> <span class="token punctuation">{</span>
        compilerOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token function-variable function">isCustomElement</span><span class="token operator">:</span> <span class="token punctuation">(</span>tag<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> tag <span class="token operator">===</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function E(G,I){const t=o("ExternalLinkIcon"),p=o("CodeGroupItem"),l=o("CodeGroup"),r=o("RouterLink");return i(),u("div",null,[v,n("p",null,[e("VuePress 一直以来都在使用 "),n("a",m,[e("Webpack"),s(t)]),e(" 作为打包工具来进行网站的开发和构建。从 VuePress v2 开始，我们还支持使用其他的打包工具，并且现在使用 "),n("a",b,[e("Vite"),s(t)]),e(" 作为默认的打包工具。当然，你仍然可以选择使用 Webpack 。")]),_,n("p",null,[e("在使用 "),n("a",h,[e("vuepress"),s(t)]),e(" 包时，会自动安装和使用 Vite 打包工具。")]),n("p",null,[e("如果你想改为使用 Webpack 打包工具，那么你可以移除它，改为安装 "),n("a",f,[e("vuepress-webpack"),s(t)]),e(" 包：")]),s(l,null,{default:a(()=>[s(p,{title:"PNPM",active:""},{default:a(()=>[g]),_:1}),s(p,{title:"YARN"},{default:a(()=>[w]),_:1}),s(p,{title:"NPM"},{default:a(()=>[x]),_:1})]),_:1}),n("div",V,[y,n("p",null,[e("实际上， "),n("a",C,[e("vuepress"),s(t)]),e(" 包只是 "),n("a",N,[e("vuepress-vite"),s(t)]),e(" 包的一个封装而已。")])]),j,B,n("p",null,[e("通过 "),s(r,{to:"/reference/config.html#bundler"},{default:a(()=>[e("bundler")]),_:1}),e(" 配置项，你可以对打包工具进行进阶配置：")]),P,n("p",null,[e("你可以参考 "),s(r,{to:"/reference/bundler/vite.html"},{default:a(()=>[e("打包工具 > Vite")]),_:1}),e(" 和 "),s(r,{to:"/reference/bundler/webpack.html"},{default:a(()=>[e("打包工具 > Webpack")]),_:1}),e(" 来查看对应打包工具的所有配置项。")])])}const W=c(k,[["render",E],["__file","bundler.html.vue"]]);export{W as default};
