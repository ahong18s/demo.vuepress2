import{_ as o,r,o as c,c as p,d as e,w as a,a as n,b as s,e as u}from"./app-73c0b56d.js";const d={},m=n("h3",{id:"integrate-in-the-project",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#integrate-in-the-project","aria-hidden":"true"},"#"),s(" Integrate in the project")],-1),v=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# install in your project"),s(`
`),n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress@next @vuepress/client@next vue

`),n("span",{class:"token comment"},"# create a markdown file"),s(`
`),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},"'# Hello VuePress'"),s(),n("span",{class:"token operator"},">"),s(` README.md

`),n("span",{class:"token comment"},"# start writing"),s(`
`),n("span",{class:"token function"},"pnpm"),s(` vuepress dev

`),n("span",{class:"token comment"},"# build to static files"),s(`
`),n("span",{class:"token function"},"pnpm"),s(` vuepress build
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# install in your project"),s(`
`),n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress@next

`),n("span",{class:"token comment"},"# create a markdown file"),s(`
`),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},"'# Hello VuePress'"),s(),n("span",{class:"token operator"},">"),s(` README.md

`),n("span",{class:"token comment"},"# start writing"),s(`
`),n("span",{class:"token function"},"yarn"),s(` vuepress dev

`),n("span",{class:"token comment"},"# build to static files"),s(`
`),n("span",{class:"token function"},"yarn"),s(` vuepress build
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# install in your project"),s(`
`),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress@next

`),n("span",{class:"token comment"},"# create a markdown file"),s(`
`),n("span",{class:"token builtin class-name"},"echo"),s(),n("span",{class:"token string"},"'# Hello VuePress'"),s(),n("span",{class:"token operator"},">"),s(` README.md

`),n("span",{class:"token comment"},"# start writing"),s(`
npx vuepress dev

`),n("span",{class:"token comment"},"# build to static files"),s(`
npx vuepress build
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("h3",{id:"plugins-supplementary",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plugins-supplementary","aria-hidden":"true"},"#"),s(" Plugins (supplementary)")],-1),h={href:"https://plugin-copy-code2.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://plugin-md-enhance.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},_=u(`<h3 id="problem-record" tabindex="-1"><a class="header-anchor" href="#problem-record" aria-hidden="true">#</a> Problem Record</h3><ul><li>1.Some plugins or files are missing under @vuePress in node_modules, resulting in failure when importing some files—— Unresolved（ ×）<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>⠙ Initializing and preparing dataerror Import <span class="token function">file</span> @vuepress/theme-default/src/client/styles/_variables.scss not found
error Import <span class="token function">file</span> @vuepress/theme-default/src/client/styles/vars.scss not found
error Import <span class="token function">file</span> @vuepress/theme-default/src/client/styles/vars-dark.scss not found
error Import <span class="token function">file</span> @vuepress/plugin-back-to-top/src/client/styles/vars.css not found
error Import <span class="token function">file</span> @vuepress/plugin-medium-zoom/src/client/styles/vars.css not found
error Import <span class="token function">file</span> @vuepress/plugin-external-link-icon/src/client/styles/vars.css not found
error Import <span class="token function">file</span> @vuepress/plugin-nprogress/src/client/styles/vars.css not found
error Import <span class="token function">file</span> @vuepress/plugin-pwa-popup/src/client/styles/vars.css not found
error Import <span class="token function">file</span> @vuepress/plugin-search/src/shared/hotKey.ts not found
error Import <span class="token function">file</span> @vuepress/plugin-search/src/client/styles/vars.css not found
error Import <span class="token function">file</span> @vuepress/plugin-back-to-top/src/client/styles/vars.css not found
error Import <span class="token function">file</span> @vuepress/theme-default/src/client/styles/_variables.scss not found
error Import <span class="token function">file</span> @vuepress/theme-default/src/client/styles/vars.scss not found
error Import <span class="token function">file</span> @vuepress/theme-default/src/client/styles/vars-dark.scss not found
error Import <span class="token function">file</span> @vuepress/plugin-external-link-icon/src/client/styles/vars.css not found
error Import <span class="token function">file</span> @vuepress/plugin-medium-zoom/src/client/styles/vars.css not found
error Import <span class="token function">file</span> @vuepress/plugin-nprogress/src/client/styles/vars.css not found
error Import <span class="token function">file</span> @vuepress/plugin-search/src/shared/hotKey.ts not found
error Import <span class="token function">file</span> @vuepress/plugin-search/src/client/styles/vars.css not found
⠹ Initializing and preparing dataerror Import <span class="token function">file</span> @vuepress/plugin-pwa-popup/src/client/styles/vars.css not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> @vuepress/theme-default@next
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> @vuepress/plugin-back-to-top@next
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> @vuepress/plugin-medium-zoom@next
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> @vuepress/plugin-external-link-icon@next
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> @vuepress/plugin-search@next
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> @vuepress/plugin-nprogress@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>2.When customizing components, use &#39;import. meta&#39; to report errors, or use other methods to define dirname - resolved (√)<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> @vuepress/plugin-register-components
<span class="token function">yarn</span> <span class="token function">add</span> path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,2);function y(x,I){const l=r("CodeGroupItem"),t=r("CodeGroup"),i=r("ExternalLinkIcon");return c(),p("div",null,[m,e(t,null,{default:a(()=>[e(l,{title:"PNPM",active:""},{default:a(()=>[v]),_:1}),e(l,{title:"YARN"},{default:a(()=>[f]),_:1}),e(l,{title:"NPM"},{default:a(()=>[b]),_:1})]),_:1}),k,n("ul",null,[n("li",null,[s("1."),n("a",h,[s("markdown copy"),e(i)]),s(", Supports one click copy function;")]),n("li",null,[s("2."),n("a",g,[s("markdown enhance"),e(i)]),s(", Support functions such as code block grouping, task list, flowchart, slides, etc;")])]),_])}const D=o(d,[["render",y],["__file","index.html.vue"]]);export{D as default};
