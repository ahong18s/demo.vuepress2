import{_ as t,r as d,o as c,c as u,d as n,a as e,b as i,w as a,e as r}from"./app-09910f35.js";const h={},v=e("h1",{id:"docsearch",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docsearch","aria-hidden":"true"},"#"),i(" docsearch")],-1),b={href:"https://docsearch.algolia.com/",target:"_blank",rel:"noopener noreferrer"},m=r(`<div class="custom-container tip"><p class="custom-container-title">prompt</p><p>Default theme will add DocSearch to the navbar once you configure this plugin correctly.</p><p>This plugin may not be used directly in other themes, so you&#39;d better refer to the documentation of your theme for more details.</p></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm i -D @vuepress/plugin-docsearch@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { docsearchPlugin } from &#39;@vuepress/plugin-docsearch&#39;

export default {
  plugins: [
    docsearchPlugin({
      // options
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="get-search-index" tabindex="-1"><a class="header-anchor" href="#get-search-index" aria-hidden="true">#</a> Get Search Index</h2>`,5),p={href:"https://docsearch.algolia.com/apply/",target:"_blank",rel:"noopener noreferrer"},g=e("a",{href:"#apikey"},"apiKey",-1),_=e("a",{href:"#indexname"},"indexName",-1),f={href:"https://docsearch.algolia.com/docs/run-your-own/",target:"_blank",rel:"noopener noreferrer"},y=e("a",{href:"#appId"},"appId",-1),x=e("a",{href:"#apikey"},"apiKey",-1),w=e("a",{href:"#indexname"},"indexName",-1),D=r(`<details class="custom-container details"><summary>Official crawler config</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>new Crawler({
  appId: &#39;YOUR_APP_ID&#39;,
  apiKey: &#39;YOUR_API_KEY&#39;,
  rateLimit: 8,
  startUrls: [
    // These are urls which algolia start to craw
    // If your site is divided in to mutiple parts,
    // you may want to set mutiple entry links
    &#39;https://YOUR_WEBSITE_URL/&#39;,
  ],
  sitemaps: [
    // if you are using sitemap plugins (e.g.: vuepress-plugin-sitemap2), you may provide one
    &#39;https://YOUR_WEBSITE_URL/sitemap.xml&#39;,
  ],
  ignoreCanonicalTo: false,
  exclusionPatterns: [
    // You can use this to stop algolia crawing some paths
  ],
  discoveryPatterns: [
    // These are urls which algolia looking for,
    &#39;https://YOUR_WEBSITE_URL/**&#39;,
  ],
  // Crawler schedule, set it according to your docs update frequency
  schedule: &#39;at 02:00 every 1 day&#39;,
  actions: [
    // you may have mutiple actions, especially when you are deploying mutiple docs under one domain
    {
      // name the index with name you like
      indexName: &#39;YOUR_INDEX_NAME&#39;,
      // paths where the index take effect
      pathsToMatch: [&#39;https://YOUR_WEBSITE_URL/**&#39;],
      // controls how algolia extracts records from your site
      recordExtractor: ({ $, helpers }) =&gt; {
        // options for @vuepress/theme-default
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
    // controls how index are initialized
    // only has effects before index are initialize
    // you may need to delete your index and recraw after modification
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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The above <code>recordProps</code> is the configuration used for the default theme. You can modify them according to the theme you are using.</p><p>Notice that the <code>initialIndexSettings.YOUR_INDEX_NAME.attributesForFaceting</code> fields must include <code>&#39;lang&#39;</code> to make this plugin work properly.</p></details>`,1),k={class:"custom-container tip"},S=e("p",{class:"custom-container-title"},"prompt",-1),T={href:"https://crawler.algolia.com/admin/crawlers/",target:"_blank",rel:"noopener noreferrer"},I=e("h2",{id:"options",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),i(" Options")],-1),P=e("h3",{id:"apikey",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#apikey","aria-hidden":"true"},"#"),i(" apiKey")],-1),A=e("li",null,[e("p",null,[i("Type: "),e("code",null,"string")])],-1),E=e("li",null,[e("p",null,[i("Required: "),e("code",null,"true")])],-1),N=e("li",null,[e("p",null,"Details:"),e("p",null,[i("The "),e("code",null,"apiKey"),i(" that you received from the DocSearch team, or generated by yourself.")])],-1),R=e("p",null,"Also see:",-1),O={href:"https://docsearch.algolia.com/docs/api#apikey",target:"_blank",rel:"noopener noreferrer"},U=e("h3",{id:"indexname",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#indexname","aria-hidden":"true"},"#"),i(" indexName")],-1),Y=e("li",null,[e("p",null,[i("Type: "),e("code",null,"string")])],-1),z=e("li",null,[e("p",null,[i("Required: "),e("code",null,"true")])],-1),B=e("li",null,[e("p",null,"Details:"),e("p",null,[i("The "),e("code",null,"indexName"),i(" that you received from the DocSearch team, or generated by yourself.")])],-1),C=e("p",null,"Also see:",-1),q={href:"https://docsearch.algolia.com/docs/api#indexname",target:"_blank",rel:"noopener noreferrer"},L=e("h3",{id:"appid",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#appid","aria-hidden":"true"},"#"),i(" appId")],-1),W=e("li",null,[e("p",null,[i("Type: "),e("code",null,"string")])],-1),j=e("li",null,[e("p",null,[i("Required: "),e("code",null,"true")])],-1),K=e("li",null,[e("p",null,"Details:"),e("p",null,"It defines your own application ID.")],-1),V=e("p",null,"Also see:",-1),F={href:"https://docsearch.algolia.com/docs/api#appid",target:"_blank",rel:"noopener noreferrer"},M=e("h3",{id:"searchparameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#searchparameters","aria-hidden":"true"},"#"),i(" searchParameters")],-1),X=e("li",null,[e("p",null,[i("Type: "),e("code",null,"SearchParameters")])],-1),H=e("li",null,[e("p",null,"Details:"),e("p",null,"Parameters of Algolia Search API.")],-1),G=e("p",null,"Also see:",-1),Q={href:"https://docsearch.algolia.com/docs/api/#searchparameters",target:"_blank",rel:"noopener noreferrer"},$={href:"https://www.algolia.com/doc/api-reference/search-api-parameters/",target:"_blank",rel:"noopener noreferrer"},J=e("h3",{id:"placeholder",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#placeholder","aria-hidden":"true"},"#"),i(" placeholder")],-1),Z=e("li",null,[e("p",null,[i("Type: "),e("code",null,"string")])],-1),ee=e("li",null,[e("p",null,[i("Default: "),e("code",null,"'Search docs'")])],-1),ie=e("li",null,[e("p",null,"Details:"),e("p",null,"The placeholder attribute of the search input.")],-1),ne=e("p",null,"Also see:",-1),le={href:"https://docsearch.algolia.com/docs/api/#placeholder",target:"_blank",rel:"noopener noreferrer"},re=e("h3",{id:"disableuserpersonalization",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#disableuserpersonalization","aria-hidden":"true"},"#"),i(" disableUserPersonalization")],-1),se=e("li",null,[e("p",null,[i("Type: "),e("code",null,"boolean")])],-1),ae=e("li",null,[e("p",null,[i("Default: "),e("code",null,"false")])],-1),de=e("li",null,[e("p",null,"Details:"),e("p",null,"Whether to disable all personalized features: recent searches, favorite searches, etc.")],-1),oe=e("p",null,"Also see:",-1),te={href:"https://docsearch.algolia.com/docs/api/#disableuserpersonalization",target:"_blank",rel:"noopener noreferrer"},ce=e("h3",{id:"initialquery",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#initialquery","aria-hidden":"true"},"#"),i(" initialQuery")],-1),ue=e("li",null,[e("p",null,[i("Type: "),e("code",null,"string")])],-1),he=e("li",null,[e("p",null,"Details:"),e("p",null,"The initial query when the modal opens.")],-1),ve=e("p",null,"Also see:",-1),be={href:"https://docsearch.algolia.com/docs/api/#initialquery",target:"_blank",rel:"noopener noreferrer"},me=e("h3",{id:"translations",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#translations","aria-hidden":"true"},"#"),i(" translations")],-1),pe=e("li",null,[e("p",null,[i("Type: "),e("code",null,"Partial<DocSearchTranslations>")])],-1),ge=e("li",null,[e("p",null,"Details:"),e("p",null,"Allow replacing the default text in the DocSearch button or modal.")],-1),_e=e("p",null,"Also see:",-1),fe={href:"https://docsearch.algolia.com/docs/api/#translations",target:"_blank",rel:"noopener noreferrer"},ye=r(`<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>Type: <code>Record&lt;string, DocsearchPluginOptions&gt;</code></p></li><li><p>Details:</p><p>Options of this plugin in different locales.</p><p>All other options of this plugin are acceptable in locale config.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),xe=e("h3",{id:"indexbase",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#indexbase","aria-hidden":"true"},"#"),i(" indexBase")],-1),we=e("li",null,[e("p",null,[i("Type: "),e("code",null,"string")])],-1),De=e("p",null,"Details:",-1),ke=e("p",null,"The base path of the search index.",-1),Se=e("p",null,[i("If you are deploying your site to multiple domains, you don't need to submit all of them to DocSearch and generate search index separately. You could choose one of the domains as the "),e("em",null,"index domain"),i(", and only submit the "),e("em",null,"index domain"),i(" to Docsearch for crawling search index. Then, you could reuse the search index across all deployments.")],-1),Te=e("em",null,"index domain",-1),Ie=r('<h3 id="injectstyles" tabindex="-1"><a class="header-anchor" href="#injectstyles" aria-hidden="true">#</a> injectStyles</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Whether to inject the default styles of DocSearch or not.</p><p>If you think the default styles of DocSearch is not compatible with your site, you can try to override the default styles, or set this option to <code>false</code> to totally exclude the default styles.</p><p>When this option is disabled, you need to import your own styles for DocSearch. Also notice that all styles customization in <a href="#styles">Styles</a> section would be unavailable.</p></li></ul><h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles</h2>',3),Pe={href:"https://docsearch.algolia.com/docs/styling",target:"_blank",rel:"noopener noreferrer"},Ae=r(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>:root {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> Components</h2><h3 id="docsearch-1" tabindex="-1"><a class="header-anchor" href="#docsearch-1" aria-hidden="true">#</a> Docsearch</h3><ul><li><p>Details:</p><p>This plugin will register a <code>&lt;Docsearch /&gt;</code> component globally, and you can use it without any props.</p><p>Put this component to where you want to place the docsearch button. For example, default theme puts this component to the end of the navbar.</p></li></ul><div class="custom-container tip"><p class="custom-container-title">prompt</p><p>This component is mainly used for theme development. You don&#39;t need to use it directly in most cases.</p></div>`,5);function Ee(Ne,Re){const o=d("NpmBadge"),l=d("ExternalLinkIcon"),s=d("RouterLink");return c(),u("div",null,[v,n(o,{package:"@vuepress/plugin-docsearch"}),e("p",null,[i("Integrate "),e("a",b,[i("Algolia DocSearch"),n(l)]),i(" into VuePress, which can provide search to your documentation site.")]),m,e("p",null,[i("You need to "),e("a",p,[i("submit the URL of your site"),n(l)]),i(" to join the DocSearch program. The DocSearch team will send "),g,i(" and "),_,i(" to your email once the index is generated. Then you can configure this plugin to enable DocSearch in VuePress.")]),e("p",null,[i("Alternatively, you can "),e("a",f,[i("run your own crawler"),n(l)]),i(" to generate the index, and then use your own "),y,i(", "),x,i(" and "),w,i(" to configure this plugin.")]),D,e("div",k,[S,e("p",null,[i("If you are not using default theme, or you meet any problems when using docsearch, you can also check the above example crawler config, and ahead to "),e("a",T,[i("Algolia Crawler"),n(l)]),i(", and edit your config with 'Editor' panel in project sidebar.")])]),I,P,e("ul",null,[A,E,N,e("li",null,[R,e("ul",null,[e("li",null,[e("a",O,[i("DocSearch > Options > apiKey"),n(l)])])])])]),U,e("ul",null,[Y,z,B,e("li",null,[C,e("ul",null,[e("li",null,[e("a",q,[i("DocSearch > Options > indexName"),n(l)])])])])]),L,e("ul",null,[W,j,K,e("li",null,[V,e("ul",null,[e("li",null,[e("a",F,[i("DocSearch > Options > appId"),n(l)])])])])]),M,e("ul",null,[X,H,e("li",null,[G,e("ul",null,[e("li",null,[e("a",Q,[i("DocSearch > Options > searchParameters"),n(l)])]),e("li",null,[e("a",$,[i("Algolia > Search API Parameters"),n(l)])])])])]),J,e("ul",null,[Z,ee,ie,e("li",null,[ne,e("ul",null,[e("li",null,[e("a",le,[i("DocSearch > Options > placeholder"),n(l)])])])])]),re,e("ul",null,[se,ae,de,e("li",null,[oe,e("ul",null,[e("li",null,[e("a",te,[i("DocSearch > Options > disableUserPersonalization"),n(l)])])])])]),ce,e("ul",null,[ue,he,e("li",null,[ve,e("ul",null,[e("li",null,[e("a",be,[i("DocSearch > Options > initialQuery"),n(l)])])])])]),me,e("ul",null,[pe,ge,e("li",null,[_e,e("ul",null,[e("li",null,[e("a",fe,[i("DocSearch > Options > translations"),n(l)])])])])]),ye,e("ul",null,[e("li",null,[i("Also see: "),e("ul",null,[e("li",null,[n(s,{to:"/en-US/guide/i18n.html"},{default:a(()=>[i("Guide > I18n")]),_:1})])])])]),xe,e("ul",null,[we,e("li",null,[e("p",null,[i("Default: "),n(s,{to:"/en-US/reference/config.html#base"},{default:a(()=>[i("base")]),_:1})])]),e("li",null,[De,ke,Se,e("p",null,[i("However, if the "),n(s,{to:"/en-US/reference/config.html#base"},{default:a(()=>[i("base")]),_:1}),i(" of your deployments are different for different domains, you need to set the option to the "),n(s,{to:"/en-US/reference/config.html#base"},{default:a(()=>[i("base")]),_:1}),i(" of your "),Te,i(", so that other deployments could reuse the search index correctly.")])])]),Ie,e("p",null,[i("You can customize styles via CSS variables that provided by "),e("a",Pe,[i("@docsearch/css"),n(l)]),i(":")]),Ae])}const Ue=t(h,[["render",Ee],["__file","docsearch.html.vue"]]);export{Ue as default};
