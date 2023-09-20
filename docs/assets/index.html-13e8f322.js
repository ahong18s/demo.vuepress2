import{_ as u,r as l,o as t,c,d as n,w as r,a as e,b as s,e as o}from"./app-8ceb8f5d.js";const v={},m=e("h3",{id:"在项目中集成",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#在项目中集成","aria-hidden":"true"},"#"),s(" 在项目中集成")],-1),p=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`# 在你的项目中安装
pnpm add -D vuepress@next @vuepress/client@next vue

# 新建一个 markdown 文件
echo '# Hello VuePress' > README.md

# 开始写作
pnpm vuepress dev

# 构建静态文件
pnpm vuepress build
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),b=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`# 在你的项目中安装
yarn add -D vuepress@next

# 新建一个 markdown 文件
echo '# Hello VuePress' > README.md

# 开始写作
yarn vuepress dev

# 构建静态文件
yarn vuepress build
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),h=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`# 在你的项目中安装
npm install -D vuepress@next

# 新建一个 markdown 文件
echo '# Hello VuePress' > README.md

# 开始写作
npx vuepress dev

# 构建静态文件
npx vuepress build
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=e("h3",{id:"插件-补充",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#插件-补充","aria-hidden":"true"},"#"),s(" 插件（补充）")],-1),g={href:"https://plugin-copy-code2.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://plugin-md-enhance.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},x=o(`<h3 id="问题记录" tabindex="-1"><a class="header-anchor" href="#问题记录" aria-hidden="true">#</a> 问题记录</h3><ul><li>1.node_modules 中 @vuepress 下缺少部分插件或文件，导致引入一些文件时失败。——未解决（×）<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>⠙ Initializing and preparing dataerror Import file @vuepress/theme-default/src/client/styles/_variables.scss not found
error Import file @vuepress/theme-default/src/client/styles/vars.scss not found
error Import file @vuepress/theme-default/src/client/styles/vars-dark.scss not found
error Import file @vuepress/plugin-back-to-top/src/client/styles/vars.css not found
error Import file @vuepress/plugin-medium-zoom/src/client/styles/vars.css not found
error Import file @vuepress/plugin-external-link-icon/src/client/styles/vars.css not found
error Import file @vuepress/plugin-nprogress/src/client/styles/vars.css not found
error Import file @vuepress/plugin-pwa-popup/src/client/styles/vars.css not found
error Import file @vuepress/plugin-search/src/shared/hotKey.ts not found
error Import file @vuepress/plugin-search/src/client/styles/vars.css not found
error Import file @vuepress/plugin-back-to-top/src/client/styles/vars.css not found
error Import file @vuepress/theme-default/src/client/styles/_variables.scss not found
error Import file @vuepress/theme-default/src/client/styles/vars.scss not found
error Import file @vuepress/theme-default/src/client/styles/vars-dark.scss not found
error Import file @vuepress/plugin-external-link-icon/src/client/styles/vars.css not found
error Import file @vuepress/plugin-medium-zoom/src/client/styles/vars.css not found
error Import file @vuepress/plugin-nprogress/src/client/styles/vars.css not found
error Import file @vuepress/plugin-search/src/shared/hotKey.ts not found
error Import file @vuepress/plugin-search/src/client/styles/vars.css not found
⠹ Initializing and preparing dataerror Import file @vuepress/plugin-pwa-popup/src/client/styles/vars.css not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yarn add -D @vuepress/theme-default@next
yarn add -D @vuepress/plugin-back-to-top@next
yarn add -D @vuepress/plugin-medium-zoom@next
yarn add -D @vuepress/plugin-external-link-icon@next
yarn add -D @vuepress/plugin-search@next
yarn add -D @vuepress/plugin-nprogress@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>2.自定义组件时使用 <code>i<wbr>mport.meta</code> 报错，或使用其它方法定义 dirname ——已解决（√）<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yarn add -D @vuepress/plugin-register-components
yarn add path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,2);function y(I,k){const i=l("CodeGroupItem"),d=l("CodeGroup"),a=l("ExternalLinkIcon");return t(),c("div",null,[m,n(d,null,{default:r(()=>[n(i,{title:"PNPM",active:""},{default:r(()=>[p]),_:1}),n(i,{title:"YARN"},{default:r(()=>[b]),_:1}),n(i,{title:"NPM"},{default:r(()=>[h]),_:1})]),_:1}),f,e("ul",null,[e("li",null,[s("1."),e("a",g,[s("markdown 复制"),n(a)]),s("，支持一键复制功能；")]),e("li",null,[s("2."),e("a",_,[s("markdown 增强"),n(a)]),s("，支持代码块分组、任务列表、流程图、幻灯片等功能；")])]),x])}const w=u(v,[["render",y],["__file","index.html.vue"]]);export{w as default};
