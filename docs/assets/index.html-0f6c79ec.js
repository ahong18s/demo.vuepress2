import{_ as t,r,o,c,d as e,w as a,a as s,b as n,e as u}from"./app-4042ea51.js";const d={},p=s("h3",{id:"integrate-in-the-project",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#integrate-in-the-project","aria-hidden":"true"},"#"),n(" Integrate in the project")],-1),m=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"# install in your project"),n(`
`),s("span",{class:"token function"},"pnpm"),n(),s("span",{class:"token function"},"add"),n(),s("span",{class:"token parameter variable"},"-D"),n(` vuepress@next @vuepress/client@next vue

`),s("span",{class:"token comment"},"# create a markdown file"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},"'# Hello VuePress'"),n(),s("span",{class:"token operator"},">"),n(` README.md

`),s("span",{class:"token comment"},"# start writing"),n(`
`),s("span",{class:"token function"},"pnpm"),n(` vuepress dev

`),s("span",{class:"token comment"},"# build to static files"),n(`
`),s("span",{class:"token function"},"pnpm"),n(` vuepress build
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),v=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"# install in your project"),n(`
`),s("span",{class:"token function"},"yarn"),n(),s("span",{class:"token function"},"add"),n(),s("span",{class:"token parameter variable"},"-D"),n(` vuepress@next

`),s("span",{class:"token comment"},"# create a markdown file"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},"'# Hello VuePress'"),n(),s("span",{class:"token operator"},">"),n(` README.md

`),s("span",{class:"token comment"},"# start writing"),n(`
`),s("span",{class:"token function"},"yarn"),n(` vuepress dev

`),s("span",{class:"token comment"},"# build to static files"),n(`
`),s("span",{class:"token function"},"yarn"),n(` vuepress build
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),f=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"# install in your project"),n(`
`),s("span",{class:"token function"},"npm"),n(),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-D"),n(` vuepress@next

`),s("span",{class:"token comment"},"# create a markdown file"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},"'# Hello VuePress'"),n(),s("span",{class:"token operator"},">"),n(` README.md

`),s("span",{class:"token comment"},"# start writing"),n(`
npx vuepress dev

`),s("span",{class:"token comment"},"# build to static files"),n(`
npx vuepress build
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),b=u(`<h3 id="problem-record" tabindex="-1"><a class="header-anchor" href="#problem-record" aria-hidden="true">#</a> Problem Record</h3><ul><li>1.Some plugins or files are missing under @vuePress in node_modules, resulting in failure when importing some files—— Unresolved（ ×）<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>⠙ Initializing and preparing dataerror Import <span class="token function">file</span> @vuepress/theme-default/src/client/styles/_variables.scss not found
error Import <span class="token function">file</span> @vuepress/theme-default/src/client/styles/vars.scss not found
error Import <span class="token function">file</span> @vuepress/theme-default/src/client/styles/vars-dark.scss not found
error Import <span class="token function">file</span> @vuepress/plugin-back-to-top/src/client/styles/vars.css not found
error Import <span class="token function">file</span> @vuepress/plugin-external-link-icon/src/client/styles/vars.css not found
error Import <span class="token function">file</span> @vuepress/plugin-medium-zoom/src/client/styles/vars.css not found
error Import <span class="token function">file</span> @vuepress/plugin-nprogress/src/client/styles/vars.css not found
error Import <span class="token function">file</span> @vuepress/plugin-pwa-popup/src/client/styles/vars.css not found
error Import <span class="token function">file</span> @vuepress/plugin-search/src/shared/hotKey.ts not found
error Import <span class="token function">file</span> @vuepress/plugin-search/src/client/styles/vars.css not found
error Import <span class="token function">file</span> @vuepress/theme-default/src/client/styles/_variables.scss not found
error Import <span class="token function">file</span> @vuepress/theme-default/src/client/styles/vars.scss not found
error Import <span class="token function">file</span> @vuepress/theme-default/src/client/styles/vars-dark.scss not found
error Import <span class="token function">file</span> @vuepress/plugin-back-to-top/src/client/styles/vars.css not found
⠙ Initializing and preparing dataerror Import <span class="token function">file</span> @vuepress/plugin-external-link-icon/src/client/styles/vars.css not found
error Import <span class="token function">file</span> @vuepress/plugin-medium-zoom/src/client/styles/vars.css not found
error Import <span class="token function">file</span> @vuepress/plugin-nprogress/src/client/styles/vars.css not found
error Import <span class="token function">file</span> @vuepress/plugin-pwa-popup/src/client/styles/vars.css not found
error Import <span class="token function">file</span> @vuepress/plugin-search/src/shared/hotKey.ts not found
error Import <span class="token function">file</span> @vuepress/plugin-search/src/client/styles/vars.css not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>2.When customizing components, use &#39;import. meta&#39; to report errors, or use other methods to define dirname - resolved (√)</li></ul>`,2);function k(h,g){const l=r("CodeGroupItem"),i=r("CodeGroup");return o(),c("div",null,[p,e(i,null,{default:a(()=>[e(l,{title:"PNPM",active:""},{default:a(()=>[m]),_:1}),e(l,{title:"YARN"},{default:a(()=>[v]),_:1}),e(l,{title:"NPM"},{default:a(()=>[f]),_:1})]),_:1}),b])}const y=t(d,[["render",k],["__file","index.html.vue"]]);export{y as default};
