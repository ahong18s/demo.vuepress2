import{_ as d,r as l,o as u,c as o,d as n,w as r,a as e,b as s,e as c}from"./app-8ceb8f5d.js";const v={},p=e("h3",{id:"integrate-in-the-project",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#integrate-in-the-project","aria-hidden":"true"},"#"),s(" Integrate in the project")],-1),m=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`# install in your project
pnpm add -D vuepress@next @vuepress/client@next vue

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
pnpm vuepress dev

# build to static files
pnpm vuepress build
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),b=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`# install in your project
yarn add -D vuepress@next

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
yarn vuepress dev

# build to static files
yarn vuepress build
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),h=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`# install in your project
npm install -D vuepress@next

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
npx vuepress dev

# build to static files
npx vuepress build
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=e("h3",{id:"plugins-supplementary",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plugins-supplementary","aria-hidden":"true"},"#"),s(" Plugins (supplementary)")],-1),g={href:"https://plugin-copy-code2.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://plugin-md-enhance.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},y=c(`<h3 id="problem-record" tabindex="-1"><a class="header-anchor" href="#problem-record" aria-hidden="true">#</a> Problem Record</h3><ul><li>1.Some plugins or files are missing under @vuePress in node_modules, resulting in failure when importing some files—— Unresolved（ ×）<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>⠙ Initializing and preparing dataerror Import file @vuepress/theme-default/src/client/styles/_variables.scss not found
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>2.When customizing components, use &#39;import. meta&#39; to report errors, or use other methods to define dirname - resolved (√)<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yarn add -D @vuepress/plugin-register-components
yarn add path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,2);function x(I,k){const i=l("CodeGroupItem"),t=l("CodeGroup"),a=l("ExternalLinkIcon");return u(),o("div",null,[p,n(t,null,{default:r(()=>[n(i,{title:"PNPM",active:""},{default:r(()=>[m]),_:1}),n(i,{title:"YARN"},{default:r(()=>[b]),_:1}),n(i,{title:"NPM"},{default:r(()=>[h]),_:1})]),_:1}),f,e("ul",null,[e("li",null,[s("1."),e("a",g,[s("markdown copy"),n(a)]),s(", Supports one click copy function;")]),e("li",null,[s("2."),e("a",_,[s("markdown enhance"),n(a)]),s(", Support functions such as code block grouping, task list, flowchart, slides, etc;")])]),y])}const D=d(v,[["render",x],["__file","index.html.vue"]]);export{D as default};
