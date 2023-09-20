import{_ as d,r as n,o,c as l,f as a,d as r,a as s,b as e,e as c}from"./app-8ceb8f5d.js";const p={},u=s("h1",{id:"nprogress-plugin",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#nprogress-plugin","aria-hidden":"true"},"#"),e(" nprogress Plugin")],-1),g={href:"https://github.com/rstacruz/nprogress",target:"_blank",rel:"noopener noreferrer"},h=c(`<p>This plugin has been integrated into the default theme.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm i -D @vuepress/plugin-nprogress@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { nprogressPlugin } from &#39;@vuepress/plugin-nprogress&#39;

export default {
  plugins: [
    nprogressPlugin(),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles</h2><p>You can customize the style of the progress bar via CSS variables:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>File not found</code></pre><div class="line-numbers" aria-hidden="true"></div></div>`,7);function v(m,b){const i=n("NpmBadge"),t=n("ExternalLinkIcon");return o(),l("div",null,[a(' `# nprogress` will be rendered as `<h1 id="nprogress">`, and the id will conflict with the nprogress bar (stupid) '),a(" so we add a 'plugin' suffix in the h1 title, and use title frontmatter to set the page title "),u,r(i,{package:"@vuepress/plugin-nprogress"}),s("p",null,[e("Integrate "),s("a",g,[e("nprogress"),r(t)]),e(" into VuePress, which can provide a progress bar when navigating to another page.")]),h])}const f=d(p,[["render",v],["__file","nprogress.html.vue"]]);export{f as default};