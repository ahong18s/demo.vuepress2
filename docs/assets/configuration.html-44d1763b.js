import{_ as l,r as t,o as d,c as r,a as i,b as e,d as n,w as o,e as c}from"./app-09910f35.js";const a={},u=c(`<h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1><h2 id="config-file" tabindex="-1"><a class="header-anchor" href="#config-file" aria-hidden="true">#</a> Config File</h2><p>Without any configuration, the VuePress site is pretty minimal. To customize your site, let’s first create a <code>.vuepress</code> directory inside your docs directory. This is where all VuePress-specific files will be placed. Your project structure is probably like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
├─ .gitignore
└─ package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The essential file for configuring a VuePress site is <code>.vuepress/config.js</code>, while TypeScript config file is also supported. You can use <code>.vuepress/config.ts</code> instead to get better types hint for VuePress config.</p><p>To be more specific, we have a convention for config file paths (in order of precedence):</p><ul><li>In current working directory <code>cwd</code>: <ul><li><code>vuepress.config.ts</code></li><li><code>vuepress.config.js</code></li><li><code>vuepress.config.mjs</code></li></ul></li><li>In source directory <code>sourceDir</code>: <ul><li><code>.vuepress/config.ts</code></li><li><code>.vuepress/config.js</code></li><li><code>.vuepress/config.mjs</code></li></ul></li></ul>`,7),f=i("code",null,"--config",-1),v=c(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vuepress dev docs --config my-config.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A basic config file looks like this:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineUserConfig } from &#39;vuepress&#39;

export default defineUserConfig({
  lang: &#39;en-US&#39;,
  title: &#39;Hello VuePress&#39;,
  description: &#39;Just playing around&#39;,
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p={class:"custom-container tip"},g=i("p",{class:"custom-container-title"},"prompt",-1),m=c(`<h2 id="client-config-file" tabindex="-1"><a class="header-anchor" href="#client-config-file" aria-hidden="true">#</a> Client Config File</h2><p>In most cases, the config file is sufficient to configure your VuePress site. However, sometimes users may want to add some client-side code directly. To help with this, VuePress also supports a client config file:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  │  ├─ client.js   &lt;--- client config file
│  │  └─ config.js   &lt;--- config file
│  └─ README.md
├─ .gitignore
└─ package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Similarly, we also have a convention for client config file paths (in order of precedence):</p><ul><li>In current working directory <code>cwd</code>: <ul><li><code>vuepress.client.ts</code></li><li><code>vuepress.client.js</code></li><li><code>vuepress.client.mjs</code></li></ul></li><li>In source directory <code>sourceDir</code>: <ul><li><code>.vuepress/client.ts</code></li><li><code>.vuepress/client.js</code></li><li><code>.vuepress/client.mjs</code></li></ul></li></ul><p>A basic client config file looks like this:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defineClientConfig } from &#39;@vuepress/client&#39;

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  rootComponents: [],
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),h={class:"custom-container tip"},b=i("p",{class:"custom-container-title"},"prompt",-1),_=i("p",null,"Unlike config file, client config file could not be specified via CLI options.",-1);function y(x,C){const s=t("RouterLink");return d(),r("div",null,[u,i("p",null,[e("You can also specify the config file via "),f,e(" option of "),n(s,{to:"/en-US/reference/cli.html"},{default:o(()=>[e("CLI")]),_:1}),e(":")]),v,i("div",p,[g,i("p",null,[e("Check out the "),n(s,{to:"/en-US/reference/config.html"},{default:o(()=>[e("Config Reference")]),_:1}),e(" for a full list of VuePress config.")])]),m,i("div",h,[b,_,i("p",null,[e("To learn more about client config file, see "),n(s,{to:"/en-US/advanced/cookbook/usage-of-client-config.html"},{default:o(()=>[e("Advanced > Cookbook > Usage of Client Config")]),_:1})])])])}const j=l(a,[["render",y],["__file","configuration.html.vue"]]);export{j as default};
