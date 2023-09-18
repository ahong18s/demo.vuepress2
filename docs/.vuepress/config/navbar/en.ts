import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEn: NavbarConfig = [
  {
    text: 'Guide',
    link: '/en-US/guide/',
  },
  {
    text: 'Reference',
    children: [
      {
        text: 'VuePress',
        children: [
          {
            text: 'CLI',
            link: '/en-US/reference/cli.html',
          },
          '/en-US/reference/config.md',
          '/en-US/reference/frontmatter.md',
          '/en-US/reference/components.md',
          '/en-US/reference/plugin-api.md',
          '/en-US/reference/theme-api.md',
          '/en-US/reference/client-api.md',
          '/en-US/reference/node-api.md',
        ],
      },
      {
        text: 'Bundlers',
        children: [
          '/en-US/reference/bundler/vite.md',
          '/en-US/reference/bundler/webpack.md',
        ],
      },
      {
        text: 'Default Theme',
        children: [
          '/en-US/reference/default-theme/config.md',
          '/en-US/reference/default-theme/frontmatter.md',
          '/en-US/reference/default-theme/components.md',
          '/en-US/reference/default-theme/markdown.md',
          '/en-US/reference/default-theme/styles.md',
          '/en-US/reference/default-theme/extending.md',
        ],
      },
    ],
  },
  {
    text: 'Plugins',
    children: [
      {
        text: 'Common Features',
        children: [
          '/en-US/reference/plugin/back-to-top.md',
          '/en-US/reference/plugin/container.md',
          '/en-US/reference/plugin/external-link-icon.md',
          '/en-US/reference/plugin/google-analytics.md',
          '/en-US/reference/plugin/medium-zoom.md',
          '/en-US/reference/plugin/nprogress.md',
          '/en-US/reference/plugin/register-components.md',
        ],
      },
      {
        text: 'Content Search',
        children: [
          '/en-US/reference/plugin/docsearch.md',
          '/en-US/reference/plugin/search.md',
        ],
      },
      {
        text: 'PWA',
        children: [
          '/en-US/reference/plugin/pwa.md',
          '/en-US/reference/plugin/pwa-popup.md',
        ],
      },
      {
        text: 'Syntax Highlighting',
        children: [
          '/en-US/reference/plugin/prismjs.md',
          '/en-US/reference/plugin/shiki.md',
        ],
      },
      {
        text: 'Theme Development',
        children: [
          '/en-US/reference/plugin/active-header-links.md',
          '/en-US/reference/plugin/git.md',
          '/en-US/reference/plugin/palette.md',
          '/en-US/reference/plugin/theme-data.md',
          '/en-US/reference/plugin/toc.md',
        ],
      },
    ],
  },
  {
    text: 'Learn More',
    children: [
      {
        text: 'Advanced',
        children: [
          '/en-US/advanced/architecture.md',
          '/en-US/advanced/plugin.md',
          '/en-US/advanced/theme.md',
          {
            text: 'Cookbook',
            link: '/en-US/advanced/cookbook/',
          },
        ],
      },
      {
        text: 'Resources',
        children: [
          '/en-US/contributing.md',
          {
            text: 'Awesome VuePress',
            link: 'https://github.com/vuepress/awesome-vuepress',
          },
        ],
      },
    ],
  },
]
