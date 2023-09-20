import{_ as r,r as n,o as i,c as a,a as o,b as e,d as s,e as d}from"./app-8ceb8f5d.js";const c={},l=o("h1",{id:"contributing-guide",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#contributing-guide","aria-hidden":"true"},"#"),e(" Contributing Guide")],-1),p=o("h2",{id:"overview",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),e(" Overview")],-1),h={href:"https://en.wikipedia.org/wiki/Monorepo",target:"_blank",rel:"noopener noreferrer"},u={href:"https://pnpm.io/workspaces",target:"_blank",rel:"noopener noreferrer"},m=d('<p>In the <code>packages</code> directory:</p><ul><li><code>bundler-vite</code>: The VuePress bundler package with vite. Use vite to <code>dev</code> and <code>build</code> VuePress app that generated by <code>@vuepress/core</code>.</li><li><code>bundler-webpack</code>: The VuePress bundler package with webpack. Use webpack to <code>dev</code> and <code>build</code> VuePress app that generated by <code>@vuepress/core</code>.</li><li><code>cli</code>: The VuePress command line interface (CLI) package. It will resolve user config file, and create VuePress app with <code>@vuepress/core</code>, then execute corresponding command.</li><li><code>client</code>: The VuePress client package. Provides the client entry, and exports types and composable utils that can be used in client side development.</li><li><code>core</code>: The VuePress core. Provides pure Node API to generate VuePress app, including page handling, plugin system and data preparation.</li><li><code>markdown</code>: The VuePress markdown package. Use <code>markdown-it</code> as the markdown parser and integrate some plugins to be used in VuePress.</li><li><code>shared</code>: Utilities that shared between node side and client side.</li><li><code>utils</code>: Utilities that should only be used in node side.</li></ul><p>In the <code>ecosystem</code> directory:</p><ul><li><code>plugin-${name}</code>: Official plugins.</li><li><code>theme-default</code>: The default theme.</li><li><code>vuepress</code>: A wrapper of <code>vuepress-vite</code>.</li><li><code>vuepress-vite</code>: A wrapper of <code>@vuepress/cli</code> + <code>@vuepress/bundler-vite</code> + <code>@vuepress/theme-default</code>. If users want to use default theme with vite, they can simply install this package.</li><li><code>vuepress-webpack</code>: A wrapper of <code>@vuepress/cli</code> + <code>@vuepress/bundler-webpack</code> + <code>@vuepress/theme-default</code>. If users want to use default theme with webpack, they can simply install this package.</li></ul><h2 id="development-setup" tabindex="-1"><a class="header-anchor" href="#development-setup" aria-hidden="true">#</a> Development Setup</h2><p>Pre-requirement:</p>',6),b={href:"http://nodejs.org",target:"_blank",rel:"noopener noreferrer"},f=o("strong",null,"version 18.16.0+",-1),v={href:"https://pnpm.io/",target:"_blank",rel:"noopener noreferrer"},g=o("strong",null,"version 8+",-1),_=d(`<p>Clone the repo, and install dependencies:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pnpm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Build source code:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pnpm build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Start developing the documentation site:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pnpm docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Main tools that used in this project:</p>`,7),w={href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://vitest.dev/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer"},P=d('<h2 id="scripts" tabindex="-1"><a class="header-anchor" href="#scripts" aria-hidden="true">#</a> Scripts</h2><h3 id="pnpm-build" tabindex="-1"><a class="header-anchor" href="#pnpm-build" aria-hidden="true">#</a> <code>pnpm build</code></h3><p>The <code>build</code> script uses <code>tsc</code> and <code>tsup</code> to compile TypeScript source files to JavaScript dist files.</p><p>Also, it will copy necessary resources from source directory to dist directory, because some source files (e.g. <code>.vue</code>, <code>.css</code> files) would not be processed by <code>tsc</code> nor <code>tsup</code>, but should keep the same relative path in the dist directory.</p><p>You may need to run this script first after your clone this repository, because the dist files are ignored by <code>.gitignore</code>.</p><h3 id="pnpm-clean" tabindex="-1"><a class="header-anchor" href="#pnpm-clean" aria-hidden="true">#</a> <code>pnpm clean</code></h3><p>The <code>clean</code> script runs <code>clean</code> script in all packages, cleaning all the dist files and caches. In other words, it will remove all the files that generated by <code>build</code>, <code>copy</code> scripts.</p><p>It&#39;s used before you want to re-build source files from a clean / initial state.</p><h3 id="pnpm-docs" tabindex="-1"><a class="header-anchor" href="#pnpm-docs" aria-hidden="true">#</a> <code>pnpm docs:*</code></h3><h4 id="pnpm-docs-build-pnpm-docs-dev-pnpm-docs-clean" tabindex="-1"><a class="header-anchor" href="#pnpm-docs-build-pnpm-docs-dev-pnpm-docs-clean" aria-hidden="true">#</a> <code>pnpm docs:build</code>, <code>pnpm docs:dev</code>, <code>pnpm docs:clean</code></h4><p>The <code>docs:</code> prefix indicates that these scripts are for documentation, i.e. the <code>docs</code> directory.</p><p>VuePress is using itself to build its own documentation site.</p><p>You need to run <code>pnpm build</code> to build VuePress source files first, then run these <code>docs:</code> scripts to develop and build our documentation.</p><h4 id="pnpm-docs-serve" tabindex="-1"><a class="header-anchor" href="#pnpm-docs-serve" aria-hidden="true">#</a> <code>pnpm docs:serve</code></h4><p>Serve the documentation site locally.</p><p>You need to run <code>pnpm docs:build</code> first to generate the documentation dist files, and then run <code>pnpm docs:serve</code> to serve them.</p><h3 id="pnpm-lint" tabindex="-1"><a class="header-anchor" href="#pnpm-lint" aria-hidden="true">#</a> <code>pnpm lint</code></h3><p>The <code>lint</code> script uses ESLint to check all source files.</p><h3 id="pnpm-test" tabindex="-1"><a class="header-anchor" href="#pnpm-test" aria-hidden="true">#</a> <code>pnpm test</code></h3><p>The <code>test</code> script uses Vitest to run unit testings.</p><h2 id="documentation" tabindex="-1"><a class="header-anchor" href="#documentation" aria-hidden="true">#</a> Documentation</h2><p>VuePress documentation is powered by VuePress itself, which is built from the source code of this repository.</p><p>All the markdown source files are placed in <code>docs</code> directory. We are maintaining two translations:</p><ul><li>English (en-US) in <code>/</code> path</li><li>Chinese (zh-CN) in <code>/zh/</code> path</li></ul><p>We have two different deployments:</p>',25),V={href:"https://www.netlify.com",target:"_blank",rel:"noopener noreferrer"},T={href:"https://v2.vuepress.vuejs.org",target:"_blank",rel:"noopener noreferrer"},I={href:"https://pages.github.com",target:"_blank",rel:"noopener noreferrer"},S={href:"https://vuepress.github.io",target:"_blank",rel:"noopener noreferrer"};function N(A,C){const t=n("ExternalLinkIcon");return i(),a("div",null,[l,p,o("p",null,[e("This repository employs a "),o("a",h,[e("monorepo"),s(t)]),e(" setup with "),o("a",u,[e("pnpm workspaces"),s(t)]),e(", and hosts a number of associated but separated packages.")]),m,o("ul",null,[o("li",null,[o("a",b,[e("Node.js"),s(t)]),e(),f]),o("li",null,[o("a",v,[e("pnpm"),s(t)]),e(),g])]),_,o("ul",null,[o("li",null,[o("a",w,[e("TypeScript"),s(t)]),e(" as the development language")]),o("li",null,[o("a",y,[e("Vitest"),s(t)]),e(" for unit testing")]),o("li",null,[o("a",k,[e("ESLint"),s(t)]),e(" + "),o("a",x,[e("Prettier"),s(t)]),e(" for code linting and formatting")])]),P,o("ul",null,[o("li",null,[e("Release deployment powered by "),o("a",V,[e("Netlify"),s(t)]),e(". This deployment is built from the latest released version, so users will not see unreleased changes. The domain name is "),o("a",T,[e("https://v2.vuepress.vuejs.org"),s(t)]),e(".")]),o("li",null,[e("Developer deployment powered by "),o("a",I,[e("GitHub Pages"),s(t)]),e(". This deployment is built from the latest commit, so developers could preview the latest changes. The domain name is "),o("a",S,[e("https://vuepress.github.io"),s(t)]),e(".")])])])}const U=r(c,[["render",N],["__file","contributing.html.vue"]]);export{U as default};
