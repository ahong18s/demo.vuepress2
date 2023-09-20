import{_ as i,r as s,o as l,c,a as t,b as e,d as n,w as o,e as a}from"./app-8ceb8f5d.js";const u={},m=a(`<h1 id="页面" tabindex="-1"><a class="header-anchor" href="#页面" aria-hidden="true">#</a> 页面</h1><p>VuePress 是以 Markdown 为中心的。你项目中的每一个 Markdown 文件都是一个单独的页面。</p><h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2><p>默认情况下，页面的路由路径是根据你的 Markdown 文件的相对路径决定的。</p><p>假设这是你的 Markdown 文件所处的目录结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>└─ docs
   ├─ guide
   │  ├─ getting-started.md
   │  └─ README.md
   ├─ contributing.md
   └─ README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),h=t("code",null,"docs",-1),_=t("code",null,"vuepress dev docs",-1),p=a("<table><thead><tr><th>相对路径</th><th>路由路径</th></tr></thead><tbody><tr><td><code>/README.md</code></td><td><code>/</code></td></tr><tr><td><code>/index.md</code></td><td><code>/</code></td></tr><tr><td><code>/contributing.md</code></td><td><code>/contributing.html</code></td></tr><tr><td><code>/guide/README.md</code></td><td><code>/guide/</code></td></tr><tr><td><code>/guide/getting-started.md</code></td><td><code>/guide/getting-started.html</code></td></tr></tbody></table>",1),g={class:"custom-container tip"},v=t("p",{class:"custom-container-title"},"提示",-1),f=t("p",null,[e("默认配置下， "),t("code",null,"README.md"),e(" 和 "),t("code",null,"index.md"),e(" 都会被转换成 "),t("code",null,"index.html"),e(" ，并且其对应的路由路径都是由斜杠结尾的。然而，如果你想同时保留这两个文件，就可能会造成冲突。")],-1),b=t("code",null,"['**/*.md', '!**/README.md', '!.vuepress', '!node_modules']",-1),k=t("code",null,"README.md",-1),E=t("code",null,":",-1),M=t("code",null,"+",-1),w={href:"https://router.vuejs.org/zh/guide/essentials/route-matching-syntax.html",target:"_blank",rel:"noopener noreferrer"},x=t("h2",{id:"frontmatter",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#frontmatter","aria-hidden":"true"},"#"),e(" Frontmatter")],-1),F={href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer"},V=a(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>---
lang: zh-CN
title: 页面的标题
description: 页面的描述
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),A=t("code",null,"lang",-1),D=t("code",null,"title",-1),R=t("code",null,"description",-1),L=t("p",null,"同样的，VuePress 有一些内置支持的 Frontmatter 字段，而你使用的主题也可能有它自己的特殊 Frontmatter 。",-1),P={class:"custom-container tip"},B=t("p",{class:"custom-container-title"},"提示",-1),N=t("h2",{id:"内容",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#内容","aria-hidden":"true"},"#"),e(" 内容")],-1),y=t("p",null,[e("页面的主要内容是使用 Markdown 书写的。VuePress 首先会将 Markdown 转换为 HTML ，然后将 HTML 作为 Vue 单文件组件的 "),t("code",null,"<template>"),e(" 。")],-1),C={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"};function T(z,H){const d=s("RouterLink"),r=s("ExternalLinkIcon");return l(),c("div",null,[m,t("p",null,[e("将 "),h,e(" 目录作为你的 "),n(d,{to:"/reference/cli.html"},{default:o(()=>[e("sourceDir")]),_:1}),e(" ，例如你在运行 "),_,e(" 命令。此时，你的 Markdown 文件对应的路由路径为：")]),p,t("div",g,[v,f,t("p",null,[e("在这种情况下，你可以设置 "),n(d,{to:"/reference/config.html#pagepatterns"},{default:o(()=>[e("pagePatterns")]),_:1}),e(" 来避免某个文件被 VuePress 处理，例如使用 "),b,e(" 来排除所有的 "),k,e(" 文件。")]),t("p",null,[e("此外，一些符号如 "),E,e(" 和 "),M,e(" 可能对 vue-router 有特殊含义，因此你应该避免使用它们，请参阅 "),t("a",w,[e("vue-router 文档"),n(r)]),e(" 了解更多详情。")])]),x,t("p",null,[e("Markdown 文件可以包含一个 "),t("a",F,[e("YAML"),n(r)]),e(" Frontmatter 。Frontmatter 必须在 Markdown 文件的顶部，并且被包裹在一对三短划线中间。下面是一个基本的示例：")]),V,t("p",null,[e("你肯定注意到 Frontmatter 中的字段和"),n(d,{to:"/guide/configuration.html#config-file"},{default:o(()=>[e("配置文件")]),_:1}),e("中的"),n(d,{to:"/guide/configuration.html#%E7%AB%99%E7%82%B9%E9%85%8D%E7%BD%AE"},{default:o(()=>[e("站点配置")]),_:1}),e("十分类似。你可以通过 Frontmatter 来覆盖当前页面的 "),A,e(", "),D,e(", "),R,e(" 等属性。因此，你可以把 Frontmatter 当作页面级作用域的配置。")]),L,t("div",P,[B,t("p",null,[e("前往 "),n(d,{to:"/reference/frontmatter.html"},{default:o(()=>[e("Frontmatter 参考")]),_:1}),e(" 查看 VuePress 支持的 Frontmatter 配置。")]),t("p",null,[e("前往 "),n(d,{to:"/reference/default-theme/frontmatter.html"},{default:o(()=>[e("默认主题 > Frontmatter 参考")]),_:1}),e(" 查看默认主题的 Frontmatter 配置。")])]),N,y,t("p",null,[e("借助 "),t("a",C,[e("markdown-it"),n(r)]),e(" 和 Vue 模板语法的能力，基础的 Markdown 可以得到很多的扩展功能。接下来，前往 "),n(d,{to:"/guide/markdown.html"},{default:o(()=>[e("Markdown")]),_:1}),e(" 章节来了解 VuePress 中 Markdown 的扩展功能。")])])}const j=i(u,[["render",T],["__file","page.html.vue"]]);export{j as default};
