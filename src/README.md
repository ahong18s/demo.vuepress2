---
home: true
title: 首页
heroImage: '/logo.svg'
heroText: Vue 驱动的静态网站生成器
tagline: 这是一个仿照 VuePress 官网（v2.0.0-beta.67）的演示网站，默认中文语言
actions:
  - text: 快速上手
    link: /guide/getting-started.html
    type: primary
  - text: 项目简介
    link: /guide/
    type: secondary
features:
  - title: Vue 驱动
    details: 以 Markdown 为中心的项目结构，享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。
  - title: 渲染机制
    details: 打包工具是 Vite（默认）、Webpack；VuePress 会为每个页面预渲染生成静态的 HTML，每个页面被加载时作为 SPA 运行。
  - title: 主题插件
    details: 提供了一个开箱即用的默认主题；灵活的插件API，使得插件可以为你的站点提供许多即插即用的功能。
footer: MIT Licensed | Copyright © 2023-present ahong18s
---

### 在项目中集成

<CodeGroup>
  <CodeGroupItem title="PNPM" active>

```bash
# 在你的项目中安装
pnpm add -D vuepress@next @vuepress/client@next vue

# 新建一个 markdown 文件
echo '# Hello VuePress' > README.md

# 开始写作
pnpm vuepress dev

# 构建静态文件
pnpm vuepress build
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash
# 在你的项目中安装
yarn add -D vuepress@next

# 新建一个 markdown 文件
echo '# Hello VuePress' > README.md

# 开始写作
yarn vuepress dev

# 构建静态文件
yarn vuepress build
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
# 在你的项目中安装
npm install -D vuepress@next

# 新建一个 markdown 文件
echo '# Hello VuePress' > README.md

# 开始写作
npx vuepress dev

# 构建静态文件
npx vuepress build
```

  </CodeGroupItem>
</CodeGroup>

### 插件（补充）

- 1.[markdown 复制](https://plugin-copy-code2.vuejs.press/zh/)，支持一键复制功能；
- 2.[markdown 增强](https://plugin-md-enhance.vuejs.press/zh/)，支持代码块分组、任务列表、流程图、幻灯片等功能；

### 问题记录

- 1.node_modules 中 @vuepress 下缺少部分插件或文件，导致引入一些文件时失败。——未解决（×）
  ```shell
  ⠙ Initializing and preparing dataerror Import file @vuepress/theme-default/src/client/styles/_variables.scss not found
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
  ```
  ```shell
  yarn add -D @vuepress/theme-default@next
  yarn add -D @vuepress/plugin-back-to-top@next
  yarn add -D @vuepress/plugin-medium-zoom@next
  yarn add -D @vuepress/plugin-external-link-icon@next
  yarn add -D @vuepress/plugin-search@next
  yarn add -D @vuepress/plugin-nprogress@next
  ```
- 2.自定义组件时使用 `import.meta` 报错，或使用其它方法定义 dirname ——已解决（√）
  ```shell
  yarn add -D @vuepress/plugin-register-components
  yarn add path
  ```
