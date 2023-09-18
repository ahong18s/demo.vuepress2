---
home: true
title: Home
heroImage: /logo.svg
heroText: Vue-powered Static Site Generator
tagline: This is a demonstration website modeled after VuePress official website（v2.0.0-beta.67）, with default Chinese language
actions:
  - text: Get Started
    link: /guide/getting-started.html
    type: primary
  - text: Introduction
    link: /guide/
    type: secondary
features:
  - title: Vue-Powered
    details: Markdown-centered project structure; Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue.
  - title: Performant
    details: bundler are Vite (default) and Webpack; VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
  - title: Themes Plugins
    details: Providing a default theme out of the box; Flexible plugin API, allowing plugins to provide lots of plug-and-play features for your site.
footer: MIT Licensed | Copyright © 2023-present ahong18s
---

### Integrate in the project

<CodeGroup>
  <CodeGroupItem title="PNPM" active>

```bash
# install in your project
pnpm add -D vuepress@next @vuepress/client@next vue

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
pnpm vuepress dev

# build to static files
pnpm vuepress build
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash
# install in your project
yarn add -D vuepress@next

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
yarn vuepress dev

# build to static files
yarn vuepress build
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
# install in your project
npm install -D vuepress@next

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
npx vuepress dev

# build to static files
npx vuepress build
```

  </CodeGroupItem>
</CodeGroup>