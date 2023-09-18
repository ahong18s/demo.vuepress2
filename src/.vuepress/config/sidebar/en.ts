import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/en-US/guide/': [
    {
      text: 'Guide',
      children: [
        '/en-US/guide/README.md',
        '/en-US/guide/getting-started.md',
        '/en-US/guide/configuration.md',
        '/en-US/guide/page.md',
        '/en-US/guide/markdown.md',
        '/en-US/guide/assets.md',
        '/en-US/guide/i18n.md',
        '/en-US/guide/deployment.md',
        '/en-US/guide/theme.md',
        '/en-US/guide/plugin.md',
        '/en-US/guide/bundler.md',
        '/en-US/guide/migration.md',
      ],
    },
  ],
  '/advanced/': [
    {
      text: 'Advanced',
      children: [
        '/en-US/advanced/architecture.md',
        '/en-US/advanced/plugin.md',
        '/en-US/advanced/theme.md',
      ],
    },
    {
      text: 'Cookbook',
      children: [
        '/en-US/advanced/cookbook/README.md',
        '/en-US/advanced/cookbook/usage-of-client-config.md',
        '/en-US/advanced/cookbook/adding-extra-pages.md',
        '/en-US/advanced/cookbook/making-a-theme-extendable.md',
        '/en-US/advanced/cookbook/passing-data-to-client-code.md',
        '/en-US/advanced/cookbook/markdown-and-vue-sfc.md',
      ],
    },
  ],
  '/reference/': [
    {
      text: 'VuePress Reference',
      collapsible: true,
      children: [
        '/en-US/reference/cli.md',
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
      text: 'Bundlers Reference',
      collapsible: true,
      children: ['/en-US/reference/bundler/vite.md', '/en-US/reference/bundler/webpack.md'],
    },
    {
      text: 'Default Theme Reference',
      collapsible: true,
      children: [
        '/en-US/reference/default-theme/config.md',
        '/en-US/reference/default-theme/frontmatter.md',
        '/en-US/reference/default-theme/components.md',
        '/en-US/reference/default-theme/markdown.md',
        '/en-US/reference/default-theme/styles.md',
        '/en-US/reference/default-theme/extending.md',
      ],
    },
    {
      text: 'Official Plugins Reference',
      collapsible: true,
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
  ],
}
