import{_ as o,r as d,o as t,c as u,d as n,a as e,b as i,w as a,e as r}from"./app-09910f35.js";const v={},h=e("h1",{id:"docsearch",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docsearch","aria-hidden":"true"},"#"),i(" docsearch")],-1),b={href:"https://docsearch.algolia.com/",target:"_blank",rel:"noopener noreferrer"},m=r(`<div class="custom-container tip"><p class="custom-container-title">提示</p><p>当你正确配置该插件后，默认主题会把 DocSearch 按钮添加到导航栏。</p><p>该插件不一定能在其他主题中直接使用，因此你应参考主题本身的文档来获取更多信息。</p></div><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm i -D @vuepress/plugin-docsearch@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { docsearchPlugin } from &#39;@vuepress/plugin-docsearch&#39;

export default {
  plugins: [
    docsearchPlugin({
      // 配置项
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取搜索索引" tabindex="-1"><a class="header-anchor" href="#获取搜索索引" aria-hidden="true">#</a> 获取搜索索引</h2>`,5),p={href:"https://docsearch.algolia.com/apply/",target:"_blank",rel:"noopener noreferrer"},_=e("a",{href:"#apikey"},"apiKey",-1),g=e("a",{href:"#indexname"},"indexName",-1),f={href:"https://docsearch.algolia.com/docs/run-your-own/",target:"_blank",rel:"noopener noreferrer"},x=e("a",{href:"#appId"},"appId",-1),y=e("a",{href:"#apikey"},"apiKey",-1),S=e("a",{href:"#indexname"},"indexName",-1),k=r(`<details class="custom-container details"><summary>官方爬虫配置示例</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>new Crawler({
  appId: &#39;YOUR_APP_ID&#39;,
  apiKey: &#39;YOUR_API_KEY&#39;,
  rateLimit: 8,
  startUrls: [
    // 这是 Algolia 开始抓取网站的初始地址
    // 如果你的网站被分为数个独立部分，你可能需要在此设置多个入口链接
    &#39;https://YOUR_WEBSITE_URL/&#39;,
  ],
  sitemaps: [
    // 如果你在使用 Sitemap 插件 (如: vuepress-plugin-sitemap2)，你可以提供 Sitemap 链接
    &#39;https://YOUR_WEBSITE_URL/sitemap.xml&#39;,
  ],
  ignoreCanonicalTo: false,
  exclusionPatterns: [
    // 你可以通过它阻止 Algolia 抓取某些 URL
  ],
  discoveryPatterns: [
    // 这是 Algolia 抓取 URL 的范围
    &#39;https://YOUR_WEBSITE_URL/**&#39;,
  ],
  // 爬虫执行的计划时间，可根据文档更新频率设置
  schedule: &#39;at 02:00 every 1 day&#39;,
  actions: [
    // 你可以拥有多个 action，特别是你在一个域名下部署多个文档时
    {
      // 使用适当的名称为索引命名
      indexName: &#39;YOUR_INDEX_NAME&#39;,
      // 索引生效的路径
      pathsToMatch: [&#39;https://YOUR_WEBSITE_URL/**&#39;],
      // 控制 Algolia 如何抓取你的站点
      recordExtractor: ({ $, helpers }) =&gt; {
        // @vuepress/theme-default 的选项
        return helpers.docsearch({
          recordProps: {
            lvl0: {
              selectors: &#39;.sidebar-heading.active&#39;,
              defaultValue: &#39;Documentation&#39;,
            },
            lvl1: &#39;.theme-default-content h1&#39;,
            lvl2: &#39;.theme-default-content h2&#39;,
            lvl3: &#39;.theme-default-content h3&#39;,
            lvl4: &#39;.theme-default-content h4&#39;,
            lvl5: &#39;.theme-default-content h5&#39;,
            lvl6: &#39;.theme-default-content h6&#39;,
            content: &#39;.theme-default-content p, .theme-default-content li&#39;,
          },
          indexHeadings: true,
        })
      },
    },
  ],
  initialIndexSettings: {
    // 控制索引如何被初始化，这仅当索引尚未生成时有效
    // 你可能需要在修改后手动删除并重新生成新的索引
    YOUR_INDEX_NAME: {
      attributesForFaceting: [&#39;type&#39;, &#39;lang&#39;],
      attributesToRetrieve: [&#39;hierarchy&#39;, &#39;content&#39;, &#39;anchor&#39;, &#39;url&#39;],
      attributesToHighlight: [&#39;hierarchy&#39;, &#39;hierarchy_camel&#39;, &#39;content&#39;],
      attributesToSnippet: [&#39;content:10&#39;],
      camelCaseAttributes: [&#39;hierarchy&#39;, &#39;hierarchy_radio&#39;, &#39;content&#39;],
      searchableAttributes: [
        &#39;unordered(hierarchy_radio_camel.lvl0)&#39;,
        &#39;unordered(hierarchy_radio.lvl0)&#39;,
        &#39;unordered(hierarchy_radio_camel.lvl1)&#39;,
        &#39;unordered(hierarchy_radio.lvl1)&#39;,
        &#39;unordered(hierarchy_radio_camel.lvl2)&#39;,
        &#39;unordered(hierarchy_radio.lvl2)&#39;,
        &#39;unordered(hierarchy_radio_camel.lvl3)&#39;,
        &#39;unordered(hierarchy_radio.lvl3)&#39;,
        &#39;unordered(hierarchy_radio_camel.lvl4)&#39;,
        &#39;unordered(hierarchy_radio.lvl4)&#39;,
        &#39;unordered(hierarchy_radio_camel.lvl5)&#39;,
        &#39;unordered(hierarchy_radio.lvl5)&#39;,
        &#39;unordered(hierarchy_radio_camel.lvl6)&#39;,
        &#39;unordered(hierarchy_radio.lvl6)&#39;,
        &#39;unordered(hierarchy_camel.lvl0)&#39;,
        &#39;unordered(hierarchy.lvl0)&#39;,
        &#39;unordered(hierarchy_camel.lvl1)&#39;,
        &#39;unordered(hierarchy.lvl1)&#39;,
        &#39;unordered(hierarchy_camel.lvl2)&#39;,
        &#39;unordered(hierarchy.lvl2)&#39;,
        &#39;unordered(hierarchy_camel.lvl3)&#39;,
        &#39;unordered(hierarchy.lvl3)&#39;,
        &#39;unordered(hierarchy_camel.lvl4)&#39;,
        &#39;unordered(hierarchy.lvl4)&#39;,
        &#39;unordered(hierarchy_camel.lvl5)&#39;,
        &#39;unordered(hierarchy.lvl5)&#39;,
        &#39;unordered(hierarchy_camel.lvl6)&#39;,
        &#39;unordered(hierarchy.lvl6)&#39;,
        &#39;content&#39;,
      ],
      distinct: true,
      attributeForDistinct: &#39;url&#39;,
      customRanking: [
        &#39;desc(weight.pageRank)&#39;,
        &#39;desc(weight.level)&#39;,
        &#39;asc(weight.position)&#39;,
      ],
      ranking: [
        &#39;words&#39;,
        &#39;filters&#39;,
        &#39;typo&#39;,
        &#39;attribute&#39;,
        &#39;proximity&#39;,
        &#39;exact&#39;,
        &#39;custom&#39;,
      ],
      highlightPreTag: &#39;&lt;span class=&quot;algolia-docsearch-suggestion--highlight&quot;&gt;&#39;,
      highlightPostTag: &#39;&lt;/span&gt;&#39;,
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: &#39;allOptional&#39;,
    },
  },
})
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述 <code>recordProps</code> 是用于默认主题的配置，你可以根据你使用的主题来修改它们。</p><p>注意 <code>initialIndexSettings.YOUR_INDEX_NAME.attributesForFaceting</code> 字段<strong>必须</strong>包含 <code>&#39;lang&#39;</code>，否则该插件将无法正常工作。</p></details>`,1),D={class:"custom-container tip"},P=e("p",{class:"custom-container-title"},"提示",-1),I={href:"https://crawler.algolia.com/admin/crawlers/",target:"_blank",rel:"noopener noreferrer"},E=e("h2",{id:"配置项",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置项","aria-hidden":"true"},"#"),i(" 配置项")],-1),w=e("h3",{id:"apikey",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#apikey","aria-hidden":"true"},"#"),i(" apiKey")],-1),N=e("li",null,[e("p",null,[i("类型： "),e("code",null,"string")])],-1),R=e("li",null,[e("p",null,[i("是否必需： "),e("code",null,"true")])],-1),A=e("li",null,[e("p",null,"详情："),e("p",null,[i("从 DocSearch 团队收到的 "),e("code",null,"apiKey"),i(" ，或者由你自己生成。")])],-1),O=e("p",null,"参考：",-1),T={href:"https://docsearch.algolia.com/docs/api#apikey",target:"_blank",rel:"noopener noreferrer"},U=e("h3",{id:"indexname",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#indexname","aria-hidden":"true"},"#"),i(" indexName")],-1),B=e("li",null,[e("p",null,[i("类型： "),e("code",null,"string")])],-1),L=e("li",null,[e("p",null,[i("是否必需： "),e("code",null,"true")])],-1),Y=e("li",null,[e("p",null,"详情："),e("p",null,[i("从 DocSearch 团队收到的 "),e("code",null,"indexName"),i(" ，或者由你自己生成。")])],-1),C=e("p",null,"参考：",-1),K={href:"https://docsearch.algolia.com/docs/api#indexname",target:"_blank",rel:"noopener noreferrer"},z=e("h3",{id:"appid",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#appid","aria-hidden":"true"},"#"),i(" appId")],-1),V=e("li",null,[e("p",null,[i("类型： "),e("code",null,"string")])],-1),W=e("li",null,[e("p",null,[i("是否必需： "),e("code",null,"true")])],-1),j=e("li",null,[e("p",null,"详情："),e("p",null,"用于设置你的 Application ID。")],-1),F=e("p",null,"参考：",-1),M={href:"https://docsearch.algolia.com/docs/api#appid",target:"_blank",rel:"noopener noreferrer"},q=e("h3",{id:"searchparameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#searchparameters","aria-hidden":"true"},"#"),i(" searchParameters")],-1),X=e("li",null,[e("p",null,[i("类型： "),e("code",null,"SearchParameters")])],-1),H=e("li",null,[e("p",null,"详情："),e("p",null,"Algolia 搜索 API 参数。")],-1),Q=e("p",null,"参考：",-1),$={href:"https://docsearch.algolia.com/docs/api/#searchparameters",target:"_blank",rel:"noopener noreferrer"},G={href:"https://www.algolia.com/doc/api-reference/search-api-parameters/",target:"_blank",rel:"noopener noreferrer"},J=e("h3",{id:"placeholder",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#placeholder","aria-hidden":"true"},"#"),i(" placeholder")],-1),Z=e("li",null,[e("p",null,[i("类型： "),e("code",null,"string")])],-1),ee=e("li",null,[e("p",null,[i("默认值： "),e("code",null,"'Search docs'")])],-1),ie=e("li",null,[e("p",null,"详情："),e("p",null,"搜索输入框的 placeholder 属性。")],-1),ne=e("p",null,"参考：",-1),le={href:"https://docsearch.algolia.com/docs/api#placeholder",target:"_blank",rel:"noopener noreferrer"},re=e("h3",{id:"disableuserpersonalization",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#disableuserpersonalization","aria-hidden":"true"},"#"),i(" disableUserPersonalization")],-1),se=e("li",null,[e("p",null,[i("类型： "),e("code",null,"boolean")])],-1),ae=e("li",null,[e("p",null,[i("默认值： "),e("code",null,"false")])],-1),de=e("li",null,[e("p",null,"详情："),e("p",null,"是否禁用所有的个性化功能：最近的搜索、收藏的搜索结果等。")],-1),ce=e("p",null,"参考：",-1),oe={href:"https://docsearch.algolia.com/docs/api#disableuserpersonalization",target:"_blank",rel:"noopener noreferrer"},te=e("h3",{id:"initialquery",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#initialquery","aria-hidden":"true"},"#"),i(" initialQuery")],-1),ue=e("li",null,[e("p",null,[i("类型： "),e("code",null,"string")])],-1),ve=e("li",null,[e("p",null,"详情："),e("p",null,"打开弹窗时的初始请求。")],-1),he=e("p",null,"参考：",-1),be={href:"https://docsearch.algolia.com/docs/api#initialquery",target:"_blank",rel:"noopener noreferrer"},me=e("h3",{id:"translations",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#translations","aria-hidden":"true"},"#"),i(" translations")],-1),pe=e("li",null,[e("p",null,[i("类型： "),e("code",null,"Partial<DocSearchTranslations>")])],-1),_e=e("li",null,[e("p",null,"详情："),e("p",null,"允许替换 DocSearch 按钮和弹窗内的默认文字。")],-1),ge=e("p",null,"参考：",-1),fe={href:"https://docsearch.algolia.com/docs/api/#translations",target:"_blank",rel:"noopener noreferrer"},xe=r(`<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>类型： <code>Record&lt;string, DocsearchPluginOptions&gt;</code></p></li><li><p>详情：</p><p>在不同 locales 下对该插件进行不同的配置。</p><p>该插件的所有其他选项都可以在 locale 中进行配置。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
  plugins: [
    docsearchPlugin({
      appId: &#39;&lt;APP_ID&gt;&#39;,
      apiKey: &#39;&lt;API_KEY&gt;&#39;,
      indexName: &#39;&lt;INDEX_NAME&gt;&#39;,
      locales: {
        &#39;/&#39;: {
          placeholder: &#39;Search Documentation&#39;,
          translations: {
            button: {
              buttonText: &#39;Search Documentation&#39;,
            },
          },
        },
        &#39;/zh/&#39;: {
          placeholder: &#39;搜索文档&#39;,
          translations: {
            button: {
              buttonText: &#39;搜索文档&#39;,
            },
          },
        },
      },
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),ye=e("h3",{id:"indexbase",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#indexbase","aria-hidden":"true"},"#"),i(" indexBase")],-1),Se=e("li",null,[e("p",null,[i("类型： "),e("code",null,"string")])],-1),ke=e("p",null,"详情：",-1),De=e("p",null,"搜索索引基础路径。",-1),Pe=e("p",null,[i("如果你需要把你的站点部署到不同的域名上，你不需要把它们全都提交到 Docsearch 上来分别生成搜索索引。你可以选择其中一个域名作为 "),e("em",null,"索引域名"),i(" ，并且仅将 "),e("em",null,"索引域名"),i(" 提交到 DocSearch 上来爬去搜索索引。然后，你就可以在不同的部署域名下复用索引。")],-1),Ie=e("em",null,"索引域名",-1),Ee=r('<h3 id="injectstyles" tabindex="-1"><a class="header-anchor" href="#injectstyles" aria-hidden="true">#</a> injectStyles</h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>默认值： <code>true</code></p></li><li><p>详情：</p><p>是否注入 DocSearch 的默认样式。</p><p>如果你认为 DocSearch 的默认样式和你的站点不兼容，你可以尝试覆盖默认样式，或者将该选项设置为 <code>false</code> 来完全移除默认样式。</p><p>当该选项被禁用时，你需要为 DocSearch 引入你自己的样式。同时要注意，你也无法再使用 <a href="#%E6%A0%B7%E5%BC%8F">样式</a> 章节中提到的样式自定义能力。</p></li></ul><h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h2>',3),we={href:"https://docsearch.algolia.com/docs/styling",target:"_blank",rel:"noopener noreferrer"},Ne=r(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>:root {
  --docsearch-primary-color: rgb(84, 104, 255);
  --docsearch-text-color: rgb(28, 30, 33);
  --docsearch-spacing: 12px;
  --docsearch-icon-stroke-width: 1.4;
  --docsearch-highlight-color: var(--docsearch-primary-color);
  --docsearch-muted-color: rgb(150, 159, 175);
  --docsearch-container-background: rgba(101, 108, 133, 0.8);
  --docsearch-logo-color: rgba(84, 104, 255);

  /* modal */
  --docsearch-modal-width: 560px;
  --docsearch-modal-height: 600px;
  --docsearch-modal-background: rgb(245, 246, 247);
  --docsearch-modal-shadow: inset 1px 1px 0 0 rgba(255, 255, 255, 0.5), 0 3px
      8px 0 rgba(85, 90, 100, 1);

  /* searchbox */
  --docsearch-searchbox-height: 56px;
  --docsearch-searchbox-background: rgb(235, 237, 240);
  --docsearch-searchbox-focus-background: #fff;
  --docsearch-searchbox-shadow: inset 0 0 0 2px var(--docsearch-primary-color);

  /* hit */
  --docsearch-hit-height: 56px;
  --docsearch-hit-color: rgb(68, 73, 80);
  --docsearch-hit-active-color: #fff;
  --docsearch-hit-background: #fff;
  --docsearch-hit-shadow: 0 1px 3px 0 rgb(212, 217, 225);

  /* key */
  --docsearch-key-gradient: linear-gradient(
    -225deg,
    rgb(213, 219, 228) 0%,
    rgb(248, 248, 248) 100%
  );
  --docsearch-key-shadow: inset 0 -2px 0 0 rgb(205, 205, 230), inset 0 0 1px 1px
      #fff, 0 1px 2px 1px rgba(30, 35, 90, 0.4);

  /* footer */
  --docsearch-footer-height: 44px;
  --docsearch-footer-background: #fff;
  --docsearch-footer-shadow: 0 -1px 0 0 rgb(224, 227, 232), 0 -3px 6px 0 rgba(69, 98, 155, 0.12);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2><h3 id="docsearch-1" tabindex="-1"><a class="header-anchor" href="#docsearch-1" aria-hidden="true">#</a> Docsearch</h3><ul><li><p>详情：</p><p>该插件会全局注册一个 <code>&lt;Docsearch /&gt;</code> 组件，你可以不传入任何 Props 来使用它。</p><p>将该组件放置在你想要显示 docsearch 按钮的地方。例如，默认主题将这个组件放在了导航栏的末尾。</p></li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>该组件主要用于主题开发。在大多数情况下你不需要直接使用该组件。</p></div>`,5);function Re(Ae,Oe){const c=d("NpmBadge"),l=d("ExternalLinkIcon"),s=d("RouterLink");return t(),u("div",null,[h,n(c,{package:"@vuepress/plugin-docsearch"}),e("p",null,[i("将 "),e("a",b,[i("Algolia DocSearch"),n(l)]),i(" 集成到 VuePress 中，为你的文档网站提供搜索功能。")]),m,e("p",null,[i("你需要 "),e("a",p,[i("提交你的网站 URL"),n(l)]),i(" 来加入 DocSearch 项目。当你的索引成功创建后， DocSearch 团队会将 "),_,i(" 和 "),g,i(" 发送到你的邮箱。接下来，你就可以配置该插件，在 VuePress 中启用 DocSearch 了。")]),e("p",null,[i("或者，你也可以 "),e("a",f,[i("运行你自己的爬虫"),n(l)]),i(" 来创建索引，然后使用你自己的 "),x,i(", "),y,i(" 和 "),S,i(" 来配置该插件。")]),k,e("div",D,[P,e("p",null,[i("如果你使用的不是默认主题，或者在使用 Docsearch 的时候遇到了任何问题，你也可以检查上述的爬虫配置示例，然后前往 "),e("a",I,[i("Algolia Crawler"),n(l)]),i(" 仓库，在你项目侧边栏中的 Editor 页面中修改你的配置。")])]),E,w,e("ul",null,[N,R,A,e("li",null,[O,e("ul",null,[e("li",null,[e("a",T,[i("DocSearch > Options > apiKey"),n(l)])])])])]),U,e("ul",null,[B,L,Y,e("li",null,[C,e("ul",null,[e("li",null,[e("a",K,[i("DocSearch > Options > indexName"),n(l)])])])])]),z,e("ul",null,[V,W,j,e("li",null,[F,e("ul",null,[e("li",null,[e("a",M,[i("DocSearch > Options > appId"),n(l)])])])])]),q,e("ul",null,[X,H,e("li",null,[Q,e("ul",null,[e("li",null,[e("a",$,[i("DocSearch > Options > searchParameters"),n(l)])]),e("li",null,[e("a",G,[i("Algolia > Search API Parameters"),n(l)])])])])]),J,e("ul",null,[Z,ee,ie,e("li",null,[ne,e("ul",null,[e("li",null,[e("a",le,[i("DocSearch > Options > placeholder"),n(l)])])])])]),re,e("ul",null,[se,ae,de,e("li",null,[ce,e("ul",null,[e("li",null,[e("a",oe,[i("DocSearch > Options > disableUserPersonalization"),n(l)])])])])]),te,e("ul",null,[ue,ve,e("li",null,[he,e("ul",null,[e("li",null,[e("a",be,[i("DocSearch > Options > initialQuery"),n(l)])])])])]),me,e("ul",null,[pe,_e,e("li",null,[ge,e("ul",null,[e("li",null,[e("a",fe,[i("DocSearch > Options > translations"),n(l)])])])])]),xe,e("ul",null,[e("li",null,[i("参考： "),e("ul",null,[e("li",null,[n(s,{to:"/guide/i18n.html"},{default:a(()=>[i("指南 > 多语言支持")]),_:1})])])])]),ye,e("ul",null,[Se,e("li",null,[e("p",null,[i("默认值： "),n(s,{to:"/reference/config.html#base"},{default:a(()=>[i("base")]),_:1})])]),e("li",null,[ke,De,Pe,e("p",null,[i("如果你不同部署域名下的 "),n(s,{to:"/reference/config.html#base"},{default:a(()=>[i("base")]),_:1}),i(" 是不一样的，你就需要将这个配置设置成 "),Ie,i(" 的 "),n(s,{to:"/reference/config.html#base"},{default:a(()=>[i("base")]),_:1}),i(" ，这样其他的部署域名就可以正确复用索引了。")])])]),Ee,e("p",null,[i("你可以通过 "),e("a",we,[i("@docsearch/css"),n(l)]),i(" 提供的 CSS 变量来自定义样式：")]),Ne])}const Ue=o(v,[["render",Re],["__file","docsearch.html.vue"]]);export{Ue as default};
