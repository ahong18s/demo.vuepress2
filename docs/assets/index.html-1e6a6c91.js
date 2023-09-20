import{_ as c,r,o,c as p,d as e,w as a,a as s,b as n,e as u}from"./app-2fe2c728.js";const d={},v=s("h3",{id:"在项目中集成",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#在项目中集成","aria-hidden":"true"},"#"),n(" 在项目中集成")],-1),m=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"# 在你的项目中安装"),n(`
`),s("span",{class:"token function"},"pnpm"),n(),s("span",{class:"token function"},"add"),n(),s("span",{class:"token parameter variable"},"-D"),n(` vuepress@next @vuepress/client@next vue

`),s("span",{class:"token comment"},"# 新建一个 markdown 文件"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},"'# Hello VuePress'"),n(),s("span",{class:"token operator"},">"),n(` README.md

`),s("span",{class:"token comment"},"# 开始写作"),n(`
`),s("span",{class:"token function"},"pnpm"),n(` vuepress dev

`),s("span",{class:"token comment"},"# 构建静态文件"),n(`
`),s("span",{class:"token function"},"pnpm"),n(` vuepress build
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),b=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"# 在你的项目中安装"),n(`
`),s("span",{class:"token function"},"yarn"),n(),s("span",{class:"token function"},"add"),n(),s("span",{class:"token parameter variable"},"-D"),n(` vuepress@next

`),s("span",{class:"token comment"},"# 新建一个 markdown 文件"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},"'# Hello VuePress'"),n(),s("span",{class:"token operator"},">"),n(` README.md

`),s("span",{class:"token comment"},"# 开始写作"),n(`
`),s("span",{class:"token function"},"yarn"),n(` vuepress dev

`),s("span",{class:"token comment"},"# 构建静态文件"),n(`
`),s("span",{class:"token function"},"yarn"),n(` vuepress build
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),f=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"# 在你的项目中安装"),n(`
`),s("span",{class:"token function"},"npm"),n(),s("span",{class:"token function"},"install"),n(),s("span",{class:"token parameter variable"},"-D"),n(` vuepress@next

`),s("span",{class:"token comment"},"# 新建一个 markdown 文件"),n(`
`),s("span",{class:"token builtin class-name"},"echo"),n(),s("span",{class:"token string"},"'# Hello VuePress'"),n(),s("span",{class:"token operator"},">"),n(` README.md

`),s("span",{class:"token comment"},"# 开始写作"),n(`
npx vuepress dev

`),s("span",{class:"token comment"},"# 构建静态文件"),n(`
npx vuepress build
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),k=s("h3",{id:"插件-补充",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#插件-补充","aria-hidden":"true"},"#"),n(" 插件（补充）")],-1),h={href:"https://plugin-copy-code2.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://plugin-md-enhance.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},_=u(`<h3 id="问题记录" tabindex="-1"><a class="header-anchor" href="#问题记录" aria-hidden="true">#</a> 问题记录</h3><ul><li>1.node_modules 中 @vuepress 下缺少部分插件或文件，导致引入一些文件时失败。——未解决（×）<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>⠙ Initializing and preparing dataerror Import <span class="token function">file</span> @vuepress/theme-default/src/client/styles/_variables.scss not found
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>2.自定义组件时使用 <code>i<wbr>mport.meta</code> 报错，或使用其它方法定义 dirname ——已解决（√）<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> @vuepress/plugin-register-components
<span class="token function">yarn</span> <span class="token function">add</span> path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,2);function x(y,I){const l=r("CodeGroupItem"),t=r("CodeGroup"),i=r("ExternalLinkIcon");return o(),p("div",null,[v,e(t,null,{default:a(()=>[e(l,{title:"PNPM",active:""},{default:a(()=>[m]),_:1}),e(l,{title:"YARN"},{default:a(()=>[b]),_:1}),e(l,{title:"NPM"},{default:a(()=>[f]),_:1})]),_:1}),k,s("ul",null,[s("li",null,[n("1."),s("a",h,[n("markdown 复制"),e(i)]),n("，支持一键复制功能；")]),s("li",null,[n("2."),s("a",g,[n("markdown 增强"),e(i)]),n("，支持代码块分组、任务列表、流程图、幻灯片等功能；")])]),_])}const w=c(d,[["render",x],["__file","index.html.vue"]]);export{w as default};
