import{_ as r,r as s,o as c,c as u,d as i,a as e,b as l,w as d,e as a}from"./app-09910f35.js";const h={},p=e("h1",{id:"配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),l(" 配置")],-1),m=a(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defaultTheme } from &#39;@vuepress/theme-default&#39;

export default {
  theme: defaultTheme({
    // 在这里进行配置
  }),
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置" aria-hidden="true">#</a> 基础配置</h2><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3>`,3),v=e("li",null,[e("p",null,[l("类型： "),e("code",null,"{ [path: string]: Partial<DefaultThemeLocaleData> }")])],-1),b=e("li",null,[e("p",null,[l("默认值： "),e("code",null,"{}")])],-1),g=e("p",null,"详情：",-1),_=e("p",null,"多语言支持的各个语言 locales 。",-1),f=e("p",null,[l("所有在 "),e("a",{href:"#locale-%E9%85%8D%E7%BD%AE"},"Locale 配置"),l(" 章节内的配置项都可以在 locales 中使用。")],-1),x=e("code",null,"locales",-1),k=e("p",null,"参考：",-1),E=a('<h2 id="locale-配置" tabindex="-1"><a class="header-anchor" href="#locale-配置" aria-hidden="true">#</a> Locale 配置</h2><p>该章节内的配置项可以作为一般配置使用，也可以使用在 <a href="#locales">locales</a> 内。</p><h3 id="colormode" tabindex="-1"><a class="header-anchor" href="#colormode" aria-hidden="true">#</a> colorMode</h3>',3),L=e("li",null,[e("p",null,[l("类型： "),e("code",null,"'auto' | 'light' | 'dark'")])],-1),w=e("li",null,[e("p",null,[l("默认值： "),e("code",null,"'auto'")])],-1),A=e("p",null,"详情：",-1),y=e("p",null,"默认颜色模式。",-1),N=e("code",null,"'auto'",-1),T={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",target:"_blank",rel:"noopener noreferrer"},B=e("li",null,[e("p",null,"参考："),e("ul",null,[e("li",null,[e("a",{href:"#colormodeswitch"},"默认主题 > 配置 > colorModeSwitch")])])],-1),R=a(`<h3 id="colormodeswitch" tabindex="-1"><a class="header-anchor" href="#colormodeswitch" aria-hidden="true">#</a> colorModeSwitch</h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>默认值： <code>true</code></p></li><li><p>详情：</p><p>是否启用切换颜色模式的功能。</p><p>如果设置为 <code>true</code> ，将会在导航栏展示一个切换颜色模式的按钮。</p></li><li><p>参考：</p><ul><li><a href="#colormode">默认主题 &gt; 配置 &gt; colorMode</a></li><li><a href="#togglecolormode">默认主题 &gt; 配置 &gt; toggleColorMode</a></li></ul></li></ul><h3 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> home</h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>/</code></p></li><li><p>详情：</p><p>首页的路径。</p><p>它将被用于：</p><ul><li>导航栏中 Logo 的链接</li><li>404 页面的 <em>返回首页</em> 链接</li></ul></li></ul><h3 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar" aria-hidden="true">#</a> navbar</h3><ul><li><p>类型： <code>false | (NavbarItem | NavbarGroup | string)[]</code></p></li><li><p>默认值： <code>[]</code></p></li><li><p>详情：</p><p>导航栏配置。</p><p>设置为 <code>false</code> 可以禁用导航栏。</p><p>为了配置导航栏元素，你可以将其设置为 <em>导航栏数组</em> ，其中的每个元素是 <code>NavbarItem</code> 对象、 <code>NavbarGroup</code> 对象、或者字符串：</p><ul><li><code>NavbarItem</code> 对象应该有一个 <code>text</code> 字段和一个 <code>link</code> 字段，还有一个可选的 <code>activeMatch</code> 字段。</li><li><code>NavbarGroup</code> 对象应该有一个 <code>text</code> 字段和一个 <code>children</code> 字段。 <code>children</code> 字段同样是一个 <em>导航栏数组</em> 。</li><li>字符串应为目标页面文件的路径。它将会被转换为 <code>NavbarItem</code> 对象，将页面标题作为 <code>text</code> ，将页面路由路径作为 <code>link</code> 。</li></ul></li><li><p>示例 1：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: &#39;Foo&#39;,
        link: &#39;/foo/&#39;,
      },
      // NavbarGroup
      {
        text: &#39;Group&#39;,
        children: [&#39;/group/foo.md&#39;, &#39;/group/bar.md&#39;],
      },
      // 字符串 - 页面文件路径
      &#39;/bar/README.md&#39;,
    ],
  }),
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>示例 2：</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  theme: defaultTheme({
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: &#39;Group&#39;,
        children: [
          {
            text: &#39;SubGroup&#39;,
            children: [&#39;/group/sub/foo.md&#39;, &#39;/group/sub/bar.md&#39;],
          },
        ],
      },
      // 控制元素何时被激活
      {
        text: &#39;Group 2&#39;,
        children: [
          {
            text: &#39;Always active&#39;,
            link: &#39;/&#39;,
            // 该元素将一直处于激活状态
            activeMatch: &#39;/&#39;,
          },
          {
            text: &#39;Active on /foo/&#39;,
            link: &#39;/not-foo/&#39;,
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: &#39;^/foo/&#39;,
          },
        ],
      },
    ],
  }),
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="logo" tabindex="-1"><a class="header-anchor" href="#logo" aria-hidden="true">#</a> logo</h3><ul><li><p>类型： <code>null | string </code></p></li><li><p>详情：</p><p>Logo 图片的 URL。</p><p>Logo 图片将会显示在导航栏的左端。</p><p>设置为 <code>null</code> 可以禁用 Logo 。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  theme: defaultTheme({
    // Public 文件路径
    logo: &#39;/images/hero.png&#39;,
    // URL
    logo: &#39;https://vuejs.org/images/logo.png&#39;,
  }),
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),I=a(`<h3 id="logodark" tabindex="-1"><a class="header-anchor" href="#logodark" aria-hidden="true">#</a> logoDark</h3><ul><li><p>类型： <code>null | string</code></p></li><li><p>详情：</p><p>在夜间模式中使用的 Logo 图片的 URL。</p><p>如果你想在夜间模式中使用不同的 Logo 图片，就可以使用该配置项。</p><p>设置为 <code>null</code> 可以在夜间模式下禁用 Logo 。忽略该配置项将会在夜间模式中使用 <a href="#logo">logo</a> 配置。</p></li><li><p>参考：</p><ul><li><a href="#logo">默认主题 &gt; 配置 &gt; logo</a></li><li><a href="#colormode">默认主题 &gt; 配置 &gt; colorMode</a></li></ul></li></ul><h3 id="repo" tabindex="-1"><a class="header-anchor" href="#repo" aria-hidden="true">#</a> repo</h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>项目仓库的 URL。</p><p>它将被用作 <em>仓库链接</em> 的链接。<em>仓库链接</em> 将会显示为导航栏的最后一个元素。</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  theme: defaultTheme({
    // 如果你按照 \`organization/repository\` 的格式设置它
    // 我们会将它作为一个 GitHub 仓库
    repo: &#39;vuejs/vuepress&#39;,
    // 你也可以直接将它设置为一个 URL
    repo: &#39;https://gitlab.com/foo/bar&#39;,
  }),
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="repolabel" tabindex="-1"><a class="header-anchor" href="#repolabel" aria-hidden="true">#</a> repoLabel</h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>项目仓库的标签。</p><p>它将被用作 <em>仓库链接</em> 的文字。<em>仓库链接</em> 将会显示为导航栏的最后一个元素。</p><p>如果你不明确指定该配置项，它将会根据 <a href="#repo">repo</a> 配置项自动推断。</p></li></ul><h3 id="selectlanguagetext" tabindex="-1"><a class="header-anchor" href="#selectlanguagetext" aria-hidden="true">#</a> selectLanguageText</h3>`,8),P=e("li",null,[e("p",null,[l("类型： "),e("code",null,"string")])],-1),G=e("p",null,"详情：",-1),S=e("p",null,[e("em",null,"选择语言菜单"),l(" 的文字。")],-1),D=e("em",null,"选择语言菜单",-1),M=a(`<h3 id="selectlanguagearialabel" tabindex="-1"><a class="header-anchor" href="#selectlanguagearialabel" aria-hidden="true">#</a> selectLanguageAriaLabel</h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p><em>选择语言菜单</em> 的 <code>aria-label</code> 属性。</p><p>它主要是为了站点的可访问性 (a11y) 。</p></li></ul><h3 id="selectlanguagename" tabindex="-1"><a class="header-anchor" href="#selectlanguagename" aria-hidden="true">#</a> selectLanguageName</h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>Locale 的语言名称。</p><p>该配置项 <strong>仅能在主题配置的 <a href="#locales">locales</a> 的内部生效</strong> 。它将被用作 locale 的语言名称，展示在 <em>选择语言菜单</em> 内。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  locales: {
    &#39;/&#39;: {
      lang: &#39;en-US&#39;,
    },
    &#39;/zh/&#39;: {
      lang: &#39;zh-CN&#39;,
    },
  },
  theme: defaultTheme({
    locales: {
      &#39;/&#39;: {
        selectLanguageName: &#39;English&#39;,
      },
      &#39;/zh/&#39;: {
        selectLanguageName: &#39;简体中文&#39;,
      },
    },
  }),
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sidebar" tabindex="-1"><a class="header-anchor" href="#sidebar" aria-hidden="true">#</a> sidebar</h3>`,6),U=e("li",null,[e("p",null,[l("类型： "),e("code",null,"false | 'auto' | SidebarConfigArray | SidebarConfigObject")])],-1),C=e("li",null,[e("p",null,[l("默认值： "),e("code",null,"'auto'")])],-1),z=e("p",null,"详情：",-1),V=e("p",null,"侧边栏配置。",-1),F=a("<p>设置为 <code>false</code> 可以禁用侧边栏。</p><p>如果你设置为 <code>&#39;auto&#39;</code>，侧边栏会根据页面标题自动生成。</p><p>为了手动配置侧边栏元素，你可以将其设置为 <em>侧边栏数组</em> ，其中的每个元素是一个 <code>SidebarItem</code> 对象或者一个字符串：</p><ul><li><code>SidebarItem</code> 对象应该有一个 <code>text</code> 字段，有一个可选的 <code>link</code> 字段、一个可选的 <code>children</code> 字段和一个可选的 <code>collapsible</code> 字段。 <code>children</code> 字段同样是一个 <em>侧边栏数组</em> 。 <code>collapsible</code> 字段来控制它是否可折叠。</li><li>字符串应为目标页面文件的路径。它将会被转换为 <code>SidebarItem</code> 对象，将页面标题作为 <code>text</code> ，将页面路由路径作为 <code>link</code> ，并根据页面小标题自动生成 <code>children</code> 。</li></ul><p>如果你想在不同子路径中使用不同的侧边栏，你可以将该配置项设置为 <em>侧边栏对象</em> ：</p><ul><li>Key 为路径前缀。</li><li>Value 为 <em>侧边栏数组</em> 。</li></ul>",6),H=e("li",null,[e("p",null,"示例 1：")],-1),W=a(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  theme: defaultTheme({
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [
      // SidebarItem
      {
        text: &#39;Foo&#39;,
        link: &#39;/foo/&#39;,
        children: [
          // SidebarItem
          {
            text: &#39;github&#39;,
            link: &#39;https://github.com&#39;,
            children: [],
          },
          // 字符串 - 页面文件路径
          &#39;/foo/bar.md&#39;,
        ],
      },
      // 字符串 - 页面文件路径
      &#39;/bar/README.md&#39;,
    ],
  }),
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>示例 2：</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  theme: defaultTheme({
    // 侧边栏对象
    // 不同子路径下的页面会使用不同的侧边栏
    sidebar: {
      &#39;/guide/&#39;: [
        {
          text: &#39;Guide&#39;,
          children: [&#39;/guide/README.md&#39;, &#39;/guide/getting-started.md&#39;],
        },
      ],
      &#39;/reference/&#39;: [
        {
          text: &#39;Reference&#39;,
          children: [&#39;/reference/cli.md&#39;, &#39;/reference/config.md&#39;],
        },
      ],
    },
  }),
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>示例 3：</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  theme: defaultTheme({
    // 可折叠的侧边栏
    sidebar: {
      &#39;/reference/&#39;: [
        {
          text: &#39;VuePress Reference&#39;,
          collapsible: true,
          children: [&#39;/reference/cli.md&#39;, &#39;/reference/config.md&#39;],
        },
        {
          text: &#39;Bundlers Reference&#39;,
          collapsible: true,
          children: [&#39;/reference/bundler/vite.md&#39;, &#39;/reference/bundler/webpack.md&#39;],
        },
      ],
    },
  }),
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sidebardepth" tabindex="-1"><a class="header-anchor" href="#sidebardepth" aria-hidden="true">#</a> sidebarDepth</h3>`,6),j=e("li",null,[e("p",null,[l("类型： "),e("code",null,"number")])],-1),K=e("li",null,[e("p",null,[l("默认值： "),e("code",null,"2")])],-1),O=a("<p>详情：</p><p>设置根据页面标题自动生成的侧边栏的最大深度。</p><ul><li>设为 <code>0</code> 来禁用所有级别的页面标题。</li><li>设为 <code>1</code> 来包含 <code>&lt;h2&gt;</code> 标题。</li><li>设为 <code>2</code> 来包含 <code>&lt;h2&gt;</code> 和 <code>&lt;h3&gt;</code> 标题。</li><li>...</li></ul>",3),Z=e("p",null,[l("由于 "),e("code",null,"markdown.headers.level"),l(" 的默认值是 "),e("code",null,"[2, 3]"),l(" ，因此 "),e("code",null,"sidebarDepth"),l(" 的默认最大值是 "),e("code",null,"2"),l(" 。")],-1),q=e("h3",{id:"editlink",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#editlink","aria-hidden":"true"},"#"),l(" editLink")],-1),J=e("li",null,[e("p",null,[l("类型： "),e("code",null,"boolean")])],-1),Q=e("li",null,[e("p",null,[l("默认值： "),e("code",null,"true")])],-1),X=e("p",null,"详情：",-1),Y=e("p",null,[l("是否启用 "),e("em",null,"编辑此页"),l(" 链接。")],-1),$=a(`<h3 id="editlinktext" tabindex="-1"><a class="header-anchor" href="#editlinktext" aria-hidden="true">#</a> editLinkText</h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>&#39;Edit this page&#39;</code></p></li><li><p>详情：</p><p><em>编辑此页</em> 链接的文字。</p></li></ul><h3 id="editlinkpattern" tabindex="-1"><a class="header-anchor" href="#editlinkpattern" aria-hidden="true">#</a> editLinkPattern</h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p><em>编辑此页</em> 链接的 Pattern 。</p><p>它将会用于生成 <em>编辑此页</em> 的链接。</p><p>如果你不设置该选项，则会根据 <a href="#docsrepo">docsRepo</a> 配置项来推断 Pattern 。但是如果你的文档仓库没有托管在常用的平台上，比如 GitHub 、 GitLab 、 Bitbucket 、 Gitee 等，那么你必须设置该选项才能使 <em>编辑此页</em> 链接正常工作。</p></li><li><p>用法：</p><table><thead><tr><th>Pattern</th><th>描述</th></tr></thead><tbody><tr><td><code>:repo</code></td><td>文档仓库 URL ，即 <a href="#docsrepo">docsRepo</a></td></tr><tr><td><code>:branch</code></td><td>文档仓库分支 ，即 <a href="#docsbranch">docsBranch</a></td></tr><tr><td><code>:path</code></td><td>页面源文件的路径，即 <a href="#docsdir">docsDir</a> 拼接上页面文件的相对路径</td></tr></tbody></table></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  theme: defaultTheme({
    docsRepo: &#39;https://gitlab.com/owner/name&#39;,
    docsBranch: &#39;master&#39;,
    docsDir: &#39;docs&#39;,
    editLinkPattern: &#39;:repo/-/edit/:branch/:path&#39;,
  }),
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>则会生成类似于 <code>&#39;https://gitlab.com/owner/name/-/edit/master/docs/path/to/file.md&#39;</code> 的链接。</p><h3 id="docsrepo" tabindex="-1"><a class="header-anchor" href="#docsrepo" aria-hidden="true">#</a> docsRepo</h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>文档源文件的仓库 URL 。</p><p>它将会用于生成 <em>编辑此页</em> 的链接。</p><p>如果你不设置该选项，则默认会使用 <a href="#repo">repo</a> 配置项。但是如果你的文档源文件是在一个不同的仓库内，你就需要设置该配置项了。</p></li></ul><h3 id="docsbranch" tabindex="-1"><a class="header-anchor" href="#docsbranch" aria-hidden="true">#</a> docsBranch</h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>&#39;main&#39;</code></p></li><li><p>详情：</p><p>文档源文件的仓库分支。</p><p>它将会用于生成 <em>编辑此页</em> 的链接。</p></li></ul><h3 id="docsdir" tabindex="-1"><a class="header-anchor" href="#docsdir" aria-hidden="true">#</a> docsDir</h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>&#39;&#39;</code></p></li><li><p>详情：</p><p>文档源文件存放在仓库中的目录名。</p><p>它将会用于生成 <em>编辑此页</em> 的链接。</p></li></ul><h3 id="lastupdated" tabindex="-1"><a class="header-anchor" href="#lastupdated" aria-hidden="true">#</a> lastUpdated</h3>`,13),ee=e("li",null,[e("p",null,[l("类型： "),e("code",null,"boolean")])],-1),le=e("li",null,[e("p",null,[l("默认值： "),e("code",null,"true")])],-1),ie=e("p",null,"详情：",-1),ne=e("p",null,[l("是否启用 "),e("em",null,"最近更新时间戳"),l(" 。")],-1),de=e("code",null,"false",-1),ae=a('<h3 id="lastupdatedtext" tabindex="-1"><a class="header-anchor" href="#lastupdatedtext" aria-hidden="true">#</a> lastUpdatedText</h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>&#39;Last Updated&#39;</code></p></li><li><p>详情：</p><p><em>最近更新时间戳</em> 标签的文字。</p></li></ul><h3 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors" aria-hidden="true">#</a> contributors</h3>',3),se=e("li",null,[e("p",null,[l("类型： "),e("code",null,"boolean")])],-1),te=e("li",null,[e("p",null,[l("默认值： "),e("code",null,"true")])],-1),oe=e("p",null,"详情：",-1),re=e("p",null,[l("是否启用 "),e("em",null,"贡献者列表"),l(" 。")],-1),ce=e("code",null,"false",-1),ue=a('<h3 id="contributorstext" tabindex="-1"><a class="header-anchor" href="#contributorstext" aria-hidden="true">#</a> contributorsText</h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>&#39;Contributors&#39;</code></p></li><li><p>详情：</p><p><em>贡献者列表</em> 标签的文字。</p></li></ul><h3 id="tip" tabindex="-1"><a class="header-anchor" href="#tip" aria-hidden="true">#</a> tip</h3>',3),he=e("li",null,[e("p",null,[l("类型： "),e("code",null,"string")])],-1),pe=e("li",null,[e("p",null,[l("默认值： "),e("code",null,"'TIP'")])],-1),me=e("p",null,"详情：",-1),ve=e("h3",{id:"warning",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#warning","aria-hidden":"true"},"#"),l(" warning")],-1),be=e("li",null,[e("p",null,[l("类型： "),e("code",null,"string")])],-1),ge=e("li",null,[e("p",null,[l("默认值： "),e("code",null,"'WARNING'")])],-1),_e=e("p",null,"详情：",-1),fe=e("h3",{id:"danger",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#danger","aria-hidden":"true"},"#"),l(" danger")],-1),xe=e("li",null,[e("p",null,[l("类型： "),e("code",null,"string")])],-1),ke=e("li",null,[e("p",null,[l("默认值： "),e("code",null,"'DANGER'")])],-1),Ee=e("p",null,"详情：",-1),Le=a('<h3 id="notfound" tabindex="-1"><a class="header-anchor" href="#notfound" aria-hidden="true">#</a> notFound</h3><ul><li><p>类型： <code>string[]</code></p></li><li><p>默认值： <code>[&#39;Not Found&#39;]</code></p></li><li><p>详情：</p><p>404 页面的提示信息。</p><p>当用户进入 404 页面时，会从数组中随机选取一条信息进行展示。</p></li></ul><h3 id="backtohome" tabindex="-1"><a class="header-anchor" href="#backtohome" aria-hidden="true">#</a> backToHome</h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>&#39;Back to home&#39;</code></p></li><li><p>详情：</p><p>404 页面中 <em>返回首页</em> 链接的文字。</p></li></ul><h3 id="openinnewwindow" tabindex="-1"><a class="header-anchor" href="#openinnewwindow" aria-hidden="true">#</a> openInNewWindow</h3>',5),we=e("li",null,[e("p",null,[l("类型： "),e("code",null,"string")])],-1),Ae=e("li",null,[e("p",null,[l("默认值： "),e("code",null,"'open in new window'")])],-1),ye=e("p",null,"详情：",-1),Ne=e("code",null,"sr-only",-1),Te=e("p",null,"它主要是为了站点的可访问性 (a11y) 。",-1),Be=e("li",null,[e("p",null,"参考："),e("ul",null,[e("li",null,[e("a",{href:"#themeplugins-externallinkicon"},"默认主题 > 配置 > themePlugins.externalLinkIcon")])])],-1),Re=a('<h3 id="togglecolormode" tabindex="-1"><a class="header-anchor" href="#togglecolormode" aria-hidden="true">#</a> toggleColorMode</h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>&#39;toggle color mode&#39;</code></p></li><li><p>详情：</p><p>切换颜色模式按钮的标题文字。</p><p>它主要是为了站点的可访问性 (a11y) 。</p></li><li><p>参考：</p><ul><li><a href="#colormodeswitch">默认主题 &gt; 配置 &gt; colorModeSwitch</a></li></ul></li></ul><h3 id="togglesidebar" tabindex="-1"><a class="header-anchor" href="#togglesidebar" aria-hidden="true">#</a> toggleSidebar</h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>&#39;toggle sidebar&#39;</code></p></li><li><p>详情：</p><p>切换侧边栏按钮的标题文字。</p><p>它主要是为了站点的可访问性 (a11y) 。</p></li></ul><h2 id="插件配置" tabindex="-1"><a class="header-anchor" href="#插件配置" aria-hidden="true">#</a> 插件配置</h2><h3 id="themeplugins" tabindex="-1"><a class="header-anchor" href="#themeplugins" aria-hidden="true">#</a> themePlugins</h3><ul><li><p>详情：</p><p>设置默认主题使用的插件。</p><p>默认主题使用了一些插件，如果你确实不需要该插件，你可以选择禁用它。在禁用插件之前，请确保你已了解它的用途。</p></li></ul><h3 id="themeplugins-activeheaderlinks" tabindex="-1"><a class="header-anchor" href="#themeplugins-activeheaderlinks" aria-hidden="true">#</a> themePlugins.activeHeaderLinks</h3>',8),Ie=e("li",null,[e("p",null,[l("类型： "),e("code",null,"boolean")])],-1),Pe=e("li",null,[e("p",null,[l("默认值： "),e("code",null,"true")])],-1),Ge=e("p",null,"详情：",-1),Se=e("h4",{id:"themeplugins-backtotop",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#themeplugins-backtotop","aria-hidden":"true"},"#"),l(" themePlugins.backToTop")],-1),De=e("li",null,[e("p",null,[l("类型： "),e("code",null,"boolean")])],-1),Me=e("li",null,[e("p",null,[l("默认值： "),e("code",null,"true")])],-1),Ue=e("p",null,"详情：",-1),Ce=e("h3",{id:"themeplugins-container",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#themeplugins-container","aria-hidden":"true"},"#"),l(" themePlugins.container")],-1),ze=e("li",null,[e("p",null,[l("类型： "),e("code",null,"Record<ContainerType, boolean>")])],-1),Ve=e("p",null,"详情：",-1),Fe=a("<p><code>ContainerType</code> 类型为：</p><ul><li><code>tip</code></li><li><code>warning</code></li><li><code>danger</code></li><li><code>details</code></li><li><code>codeGroup</code></li><li><code>codeGroupItem</code></li></ul>",2),He=e("p",null,"参考：",-1),We=e("h3",{id:"themeplugins-externallinkicon",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#themeplugins-externallinkicon","aria-hidden":"true"},"#"),l(" themePlugins.externalLinkIcon")],-1),je=e("li",null,[e("p",null,[l("类型： "),e("code",null,"boolean")])],-1),Ke=e("li",null,[e("p",null,[l("默认值： "),e("code",null,"true")])],-1),Oe=e("p",null,"详情：",-1),Ze=e("h3",{id:"themeplugins-git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#themeplugins-git","aria-hidden":"true"},"#"),l(" themePlugins.git")],-1),qe=e("li",null,[e("p",null,[l("类型： "),e("code",null,"boolean")])],-1),Je=e("li",null,[e("p",null,[l("默认值： "),e("code",null,"true")])],-1),Qe=e("p",null,"详情：",-1),Xe=e("h3",{id:"themeplugins-mediumzoom",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#themeplugins-mediumzoom","aria-hidden":"true"},"#"),l(" themePlugins.mediumZoom")],-1),Ye=e("li",null,[e("p",null,[l("类型： "),e("code",null,"boolean")])],-1),$e=e("li",null,[e("p",null,[l("默认值： "),e("code",null,"true")])],-1),el=e("p",null,"详情：",-1),ll=e("h3",{id:"themeplugins-nprogress",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#themeplugins-nprogress","aria-hidden":"true"},"#"),l(" themePlugins.nprogress")],-1),il=e("li",null,[e("p",null,[l("类型： "),e("code",null,"boolean")])],-1),nl=e("li",null,[e("p",null,[l("默认值： "),e("code",null,"true")])],-1),dl=e("p",null,"详情：",-1);function al(sl,tl){const t=s("NpmBadge"),n=s("RouterLink"),o=s("ExternalLinkIcon");return c(),u("div",null,[p,i(t,{package:"@vuepress/theme-default"}),m,e("ul",null,[v,b,e("li",null,[g,_,f,e("p",null,[l("该配置项仅能在默认主题内生效，注意不要和 "),i(n,{to:"/reference/config.html#locales"},{default:d(()=>[l("站点配置")]),_:1}),l(" 中的 "),x,l(" 混淆。")])]),e("li",null,[k,e("ul",null,[e("li",null,[i(n,{to:"/guide/i18n.html"},{default:d(()=>[l("指南 > 多语言支持")]),_:1})])])])]),E,e("ul",null,[L,w,e("li",null,[A,y,e("p",null,[l("如果设置为 "),N,l(" ，则会根据 "),e("a",T,[l("prefers-color-scheme"),i(o)]),l(" 自动设置初始颜色模式。")])]),B]),R,e("ul",null,[e("li",null,[l("参考： "),e("ul",null,[e("li",null,[i(n,{to:"/guide/assets.html#public-%E6%96%87%E4%BB%B6"},{default:d(()=>[l("指南 > 静态资源 > Public 文件")]),_:1})])])])]),I,e("ul",null,[P,e("li",null,[G,S,e("p",null,[l("如果你在站点配置中设置了多个 "),i(n,{to:"/reference/config.html#locales"},{default:d(()=>[l("locales")]),_:1}),l(" ，那么 "),D,l(" 就会显示在导航栏中仓库按钮的旁边。")])])]),M,e("ul",null,[U,C,e("li",null,[z,V,e("p",null,[l("你可以通过页面的 "),i(n,{to:"/reference/default-theme/frontmatter.html#sidebar"},{default:d(()=>[l("sidebar")]),_:1}),l(" frontmatter 来覆盖这个全局配置。")]),F]),H]),W,e("ul",null,[j,K,e("li",null,[O,e("p",null,[l("最大值取决于你通过 "),i(n,{to:"/reference/config.html#markdown-headers"},{default:d(()=>[l("markdown.headers.level")]),_:1}),l(" 提取了哪些级别的标题。")]),Z,e("p",null,[l("你可以通过页面的 "),i(n,{to:"/reference/default-theme/frontmatter.html#sidebardepth"},{default:d(()=>[l("sidebarDepth")]),_:1}),l(" frontmatter 来覆盖这个全局配置。")])])]),q,e("ul",null,[J,Q,e("li",null,[X,Y,e("p",null,[l("你可以通过页面的 "),i(n,{to:"/reference/default-theme/frontmatter.html#editlink"},{default:d(()=>[l("editLink")]),_:1}),l(" frontmatter 来覆盖这个全局配置。")])])]),$,e("ul",null,[ee,le,e("li",null,[ie,ne,e("p",null,[l("你可以通过页面的 "),i(n,{to:"/reference/default-theme/frontmatter.html#lastupdated"},{default:d(()=>[l("lastUpdated")]),_:1}),l(" frontmatter 来覆盖这个全局配置。要注意的是，如果你已经将该选项设为了 "),de,l(" ，那么这个功能会被完全禁用，并且无法在 locales 或页面 frontmatter 中启用。")])])]),ae,e("ul",null,[se,te,e("li",null,[oe,re,e("p",null,[l("你可以通过页面的 "),i(n,{to:"/reference/default-theme/frontmatter.html#contributors"},{default:d(()=>[l("contributors")]),_:1}),l(" frontmatter 来覆盖这个全局配置。要注意的是，如果你已经将该选项设为了 "),ce,l(" ，那么这个功能会被完全禁用，并且无法在 locales 或页面 frontmatter 中启用。")])])]),ue,e("ul",null,[he,pe,e("li",null,[me,e("p",null,[l("Tip "),i(n,{to:"/reference/default-theme/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8"},{default:d(()=>[l("自定义容器")]),_:1}),l(" 的默认标题。")])])]),ve,e("ul",null,[be,ge,e("li",null,[_e,e("p",null,[l("Warning "),i(n,{to:"/reference/default-theme/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8"},{default:d(()=>[l("自定义容器")]),_:1}),l(" 的默认标题。")])])]),fe,e("ul",null,[xe,ke,e("li",null,[Ee,e("p",null,[l("Danger "),i(n,{to:"/reference/default-theme/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8"},{default:d(()=>[l("自定义容器")]),_:1}),l(" 的默认标题。")])])]),Le,e("ul",null,[we,Ae,e("li",null,[ye,e("p",null,[i(n,{to:"/reference/plugin/external-link-icon.html#externallinkicon"},{default:d(()=>[l("ExternalLinkIcon")]),_:1}),l(". 链接内的 "),Ne,l(" 文字。")]),Te]),Be]),Re,e("ul",null,[Ie,Pe,e("li",null,[Ge,e("p",null,[l("是否启用 "),i(n,{to:"/reference/plugin/active-header-links.html"},{default:d(()=>[l("@vuepress/plugin-active-header-links")]),_:1}),l(" 。")])])]),Se,e("ul",null,[De,Me,e("li",null,[Ue,e("p",null,[l("是否启用 "),i(n,{to:"/reference/plugin/back-to-top.html"},{default:d(()=>[l("@vuepress/plugin-back-to-top")]),_:1}),l(" 。")])])]),Ce,e("ul",null,[ze,e("li",null,[Ve,e("p",null,[l("是否启用由 "),i(n,{to:"/reference/plugin/container.html"},{default:d(()=>[l("@vuepress/plugin-container")]),_:1}),l(" 支持的自定义容器。")]),Fe]),e("li",null,[He,e("ul",null,[e("li",null,[i(n,{to:"/reference/default-theme/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8"},{default:d(()=>[l("默认主题 > Markdown > 自定义容器")]),_:1})])])])]),We,e("ul",null,[je,Ke,e("li",null,[Oe,e("p",null,[l("是否启用 "),i(n,{to:"/reference/plugin/external-link-icon.html"},{default:d(()=>[l("@vuepress/plugin-external-link-icon")]),_:1}),l(" 。")])])]),Ze,e("ul",null,[qe,Je,e("li",null,[Qe,e("p",null,[l("是否启用 "),i(n,{to:"/reference/plugin/git.html"},{default:d(()=>[l("@vuepress/plugin-git")]),_:1}),l(" 。")])])]),Xe,e("ul",null,[Ye,$e,e("li",null,[el,e("p",null,[l("是否启用 "),i(n,{to:"/reference/plugin/medium-zoom.html"},{default:d(()=>[l("@vuepress/plugin-medium-zoom")]),_:1}),l(" 。")])])]),ll,e("ul",null,[il,nl,e("li",null,[dl,e("p",null,[l("是否启用 "),i(n,{to:"/reference/plugin/nprogress.html"},{default:d(()=>[l("@vuepress/plugin-nprogress")]),_:1}),l(" 。")])])])])}const rl=r(h,[["render",al],["__file","config.html.vue"]]);export{rl as default};
