import {defineUserConfig, defaultTheme} from 'vuepress';
import {registerComponentsPlugin} from '@vuepress/plugin-register-components';
import {resolve} from 'path';
import {copyCodePlugin} from "vuepress-plugin-copy-code2";
import {docsearchPlugin} from '@vuepress/plugin-docsearch';
import { shikiPlugin } from '@vuepress/plugin-shiki';
// 引入配置
import {navbarZh, navbarEn,} from './config/navbar/index';
import {sidebarZh, sidebarEn,} from './config/sidebar/index';

const isProd = process.env.NODE_ENV === 'production';
const base = '/demo.vuepress2/';

export default defineUserConfig({
    base: base,
    title: '',
    description: '',
    lang: 'zh-CN',
    head: [
        ['link', {rel: 'icon', href: '/logo.svg', type: 'image/png'}],//sizes: '16x16'
        //完全地兼容PWA
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'application-name', content: 'VuePress'}],
        ['meta', {name: 'apple-mobile-web-app-title', content: 'VuePress'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['link', {rel: 'apple-touch-icon', href: '/logo.svg'}],
        ['link', {rel: 'mask-icon', href: '/logo.svg', color: '#3eaf7c'}],
        ['meta', {name: 'msapplication-TileImage', content: '/logo.svg'}],
        ['meta', {name: 'msapplication-TileColor', content: '#3eaf7c'}],
    ],
    host: '0.0.0.0',//本地服务
    port: 8888,//本地服务
    dest: 'docs',
    // 语言配置
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'VuePress',
            description: 'Vue 驱动的静态网站生成器',
        },
        '/en-US/': {
            lang: 'en-US',
            title: 'VuePress',
            description: 'Vue-powered Static Site Generator',
        },
    },
    // 主题配置
    theme: defaultTheme({
        docsDir: 'docs',
        logo: '/logo.png',
        // logoDark: '',
        repo: 'https://github.com/ahong18s/demo.vuepress2',
        repoLabel: 'GitHub',
        locales: {
            '/': {
                colorMode: 'auto',
                colorModeSwitch: true,
                docsDir: 'src',
                editLink: true,
                editLinkText: '在 GitHub 上编辑此页',//编辑链接文字
                // editLinkPattern:'',
                navbar: navbarZh,
                // repoLabel: '',
                // 多语言下拉菜单的标题
                selectLanguageAriaLabel: '选择语言',
                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言',
                sidebar: sidebarZh,
                sidebarDepth: 2,//默认1，侧边栏会自动地显示由当前页面的标题（headers）组成的链接
                // page meta
                lastUpdated: true,
                lastUpdatedText: '上次更新',
                contributorsText: '贡献者',
                // custom containers
                tip: '提示',
                warning: '注意',
                danger: '警告',
                // 404 page
                notFound: [
                    '这里什么都没有',
                    '我们怎么到这来了？',
                    '这是一个 404 页面',
                    '看起来我们进入了错误的链接',
                ],
                backToHome: '返回首页',
                // a11y
                openInNewWindow: '在新窗口打开',
                toggleColorMode: '切换颜色模式',
                toggleSidebar: '切换侧边栏',
            },
            '/en-US/': {
                colorMode: 'auto',
                colorModeSwitch: true,
                docsDir: 'src',
                editLink: false,
                editLinkText: 'Edit this page on GitHub',
                // editLinkPattern:'',
                navbar: navbarEn,
                // repoLabel: '',
                // Configuration of Service Worker
                selectLanguageAriaLabel: 'Languages',
                selectLanguageText: 'Languages',
                selectLanguageName: 'English',//The label of the language in the drop-down menu
                sidebar: sidebarEn,
                sidebarDepth: 2,//默认1，侧边栏会自动地显示由当前页面的标题（headers）组成的链接
                // page meta
                lastUpdated: true,
                lastUpdatedText: 'last update',
                contributorsText: 'contributor',
                // custom containers
                tip: 'prompt',
                warning: 'warning',
                danger: 'danger',
                // 404 page
                notFound: [
                    'There\'s nothing here',
                    'How did we get here?',
                    'This is a 404 page',
                    'Looks like we entered the wrong link',
                ],
                backToHome: 'homepage',
                // a11y
                openInNewWindow: 'Open in a new window',
                toggleColorMode: 'Switch color mode',
                toggleSidebar: 'Switch Sidebar',
            },
        },
        themePlugins: {
            // only enable git plugin in production mode
            git: isProd,
            // use shiki plugin in production mode instead
            prismjs: !isProd,
        },
    }),
    // 语法配置
    markdown: {
        importCode: {
            handleImportPath: (str) =>
                str.replace(/^@vuepress/, resolve(__dirname, '../../ecosystem')),
        },
        code: {
            highlightLines: true
        }
    },
    plugins: [
        registerComponentsPlugin({
            components: {
                NpmBadge: resolve(__dirname, './components/NpmBadge.vue'),
            },
        }),
        copyCodePlugin({
            locales: {
                "/": {
                    copy: "复制此段代码",
                },

                "/en-US/": {
                    copy: "Copy this code segment",
                },
            },
        }),
        isProd ? shikiPlugin({ theme: 'dark-plus' }) : [],
        // ["md-enhance", {codegroup: true}],
        docsearchPlugin({
            appId: 'H2L64TMNCG',
            apiKey: 'e01bf3b3d84f22621aff4e1de2adbe85',
            indexName: 'demo-vuepress2',
            // indexBase: base,
            searchParameters: {
                facetFilters: ['tags:v2'],
            },
            locales: {
                '/': {
                    placeholder: '搜索文档',
                    translations: {
                        button: {
                            buttonText: '搜索文档',
                            buttonAriaLabel: '搜索文档',
                        },
                        modal: {
                            searchBox: {
                                resetButtonTitle: '清除查询条件',
                                resetButtonAriaLabel: '清除查询条件',
                                cancelButtonText: '取消',
                                cancelButtonAriaLabel: '取消',
                            },
                            startScreen: {
                                recentSearchesTitle: '搜索历史',
                                noRecentSearchesText: '没有搜索历史',
                                saveRecentSearchButtonTitle: '保存至搜索历史',
                                removeRecentSearchButtonTitle: '从搜索历史中移除',
                                favoriteSearchesTitle: '收藏',
                                removeFavoriteSearchButtonTitle: '从收藏中移除',
                            },
                            errorScreen: {
                                titleText: '无法获取结果',
                                helpText: '你可能需要检查你的网络连接',
                            },
                            footer: {
                                selectText: '选择',
                                selectKeyAriaLabel: '输入键',
                                navigateText: '切换',
                                navigateUpKeyAriaLabel: '上箭头',
                                navigateDownKeyAriaLabel: '下箭头',
                                closeText: '关闭',
                                closeKeyAriaLabel: '退出键',
                                searchByText: '搜索提供者',
                            },
                            noResultsScreen: {
                                noResultsText: '无法找到相关结果',
                                suggestedQueryText: '你可以尝试查询',
                                reportMissingResultsText: '你认为该查询应该有结果？',
                                reportMissingResultsLinkText: '点击反馈',
                            },
                        },
                    },
                },
                '/en-US/': {
                    placeholder: 'Search docs',
                    translations: {
                        button: {
                            buttonText: 'Search',
                            buttonAriaLabel: 'Search',
                        },
                        modal: {
                            searchBox: {
                                resetButtonTitle: 'Clear the query',
                                resetButtonAriaLabel: 'Clear the query',
                                cancelButtonText: 'Cancel',
                                cancelButtonAriaLabel: 'Cancel',
                            },
                            startScreen: {
                                recentSearchesTitle: 'Recent',
                                noRecentSearchesText: 'No recent searches',
                                saveRecentSearchButtonTitle: 'Save this search',
                                removeRecentSearchButtonTitle: 'Remove this search from history',
                                favoriteSearchesTitle: 'Favorite',
                                removeFavoriteSearchButtonTitle: 'Remove this search from favorites',
                            },
                            errorScreen: {
                                titleText: 'Unable to fetch results',
                                helpText: 'You might want to check your network connection.',
                            },
                            footer: {
                                selectText: 'to select',
                                selectKeyAriaLabel: 'Enter key',
                                navigateText: 'to navigate',
                                navigateUpKeyAriaLabel: 'Arrow up',
                                navigateDownKeyAriaLabel: 'Arrow down',
                                closeText: 'to close',
                                closeKeyAriaLabel: 'Escape key',
                                searchByText: 'Search by',
                            },
                            noResultsScreen: {
                                noResultsText: 'No results for',
                                suggestedQueryText: 'Try searching for',
                                reportMissingResultsText: 'Believe this query should return results?',
                                reportMissingResultsLinkText: 'Let us know.',
                            },
                        },
                    },
                },
            },
        }),
    ],
});
