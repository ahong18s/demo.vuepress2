import{_ as r,r as s,o as u,c,d as i,a as e,b as l,w as t,e as a}from"./app-8ceb8f5d.js";const h={},p=e("h1",{id:"frontmatter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter","aria-hidden":"true"},"#"),l(" Frontmatter")],-1),m=e("h2",{id:"all-pages",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#all-pages","aria-hidden":"true"},"#"),l(" All Pages")],-1),f=e("p",null,"Frontmatter in this section will take effect in all types of pages.",-1),v=e("h3",{id:"externallinkicon",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#externallinkicon","aria-hidden":"true"},"#"),l(" externalLinkIcon")],-1),g=e("li",null,[e("p",null,[l("Type: "),e("code",null,"boolean")])],-1),b=e("p",null,"Details:",-1),_=e("p",null,"Also see:",-1),x=e("h3",{id:"navbar",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#navbar","aria-hidden":"true"},"#"),l(" navbar")],-1),y=e("li",null,[e("p",null,[l("Type: "),e("code",null,"boolean")])],-1),k=e("li",null,[e("p",null,"Details:"),e("p",null,"Show navbar on this page or not."),e("p",null,"If you disable navbar in theme config, this frontmatter will not take effect.")],-1),T=e("p",null,"Also see:",-1),S=a(`<h3 id="pageclass" tabindex="-1"><a class="header-anchor" href="#pageclass" aria-hidden="true">#</a> pageClass</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Add extra class name to this page.</p></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>---
pageClass: custom-page-class
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then you can customize styles of this page in <code>.vuepress/styles/index.scss</code> file:</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code>.theme-container.custom-page-class {
  /* page styles */
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),w=a(`<h2 id="home-page" tabindex="-1"><a class="header-anchor" href="#home-page" aria-hidden="true">#</a> Home Page</h2><p>Frontmatter in this section will only take effect in home pages.</p><h3 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> home</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>Specify whether the page is homepage or a normal page.</p><p>If you don&#39;t set this frontmatter or set it to <code>false</code>, the page would be a <a href="#normal-page">normal page</a>.</p></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>---
home: true
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="heroimage" tabindex="-1"><a class="header-anchor" href="#heroimage" aria-hidden="true">#</a> heroImage</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Specify the url of the hero image.</p></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>---
# public file path
heroImage: /images/hero.png
# url
heroImage: https://vuejs.org/images/logo.png
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),D=e("h3",{id:"heroimagedark",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#heroimagedark","aria-hidden":"true"},"#"),l(" heroImageDark")],-1),A=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string")])],-1),C=e("li",null,[e("p",null,"Details:"),e("p",null,"Specify the url of hero image to be used in dark mode."),e("p",null,"You can make use of this option if you want to use different heroImage config in dark mode.")],-1),L=e("p",null,"Also see:",-1),I=e("li",null,[e("a",{href:"#heroimage"},"Default Theme > Frontmatter > heroImage")],-1),U=a('<h3 id="heroalt" tabindex="-1"><a class="header-anchor" href="#heroalt" aria-hidden="true">#</a> heroAlt</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Specify the <code>alt</code> attribute of the hero image.</p><p>This will fallback to the <a href="#heroText">heroText</a>.</p></li></ul><h3 id="heroheight" tabindex="-1"><a class="header-anchor" href="#heroheight" aria-hidden="true">#</a> heroHeight</h3>',3),N=e("li",null,[e("p",null,[l("Type: "),e("code",null,"number")])],-1),E=e("li",null,[e("p",null,[l("Default: "),e("code",null,"280")])],-1),P=e("p",null,"Details:",-1),V=e("p",null,[l("Specify the "),e("code",null,"height"),l(" attribute of the hero "),e("code",null,"<img>"),l(" tag.")],-1),F=e("p",null,"You may need to reduce this value if the height of your hero image is less than the default value.",-1),j={href:"https://web.dev/cls/",target:"_blank",rel:"noopener noreferrer"},H=e("h3",{id:"herotext",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#herotext","aria-hidden":"true"},"#"),l(" heroText")],-1),B=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string | null")])],-1),M=e("p",null,"Details:",-1),G=e("p",null,"Specify the the hero text.",-1),R=e("p",null,[l("Set to "),e("code",null,"null"),l(" to disable hero text.")],-1),Y=e("h3",{id:"tagline",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tagline","aria-hidden":"true"},"#"),l(" tagline")],-1),z=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string | null")])],-1),O=e("p",null,"Details:",-1),q=e("p",null,"Specify the the tagline.",-1),J=e("p",null,[l("Set to "),e("code",null,"null"),l(" to disable tagline.")],-1),K=a(`<h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> actions</h3><ul><li>Type:</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>Array&lt;{
  text: string
  link: string
  type?: &#39;primary&#39; | &#39;secondary&#39;
}&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>Configuration of the action buttons.</p></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>---
actions:
  - text: Get Started
    link: /guide/getting-started.html
    type: primary
  - text: Introduction
    link: /guide/
    type: secondary
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> features</h3><ul><li>Type:</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>Array&lt;{
  title: string
  details: string
}&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>Configuration of the features list.</p></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>---
features:
  - title: Simplicity First
    details: Minimal setup with markdown-centered project structure helps you focus on writing.
  - title: Vue-Powered
    details: Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue.
  - title: Performant
    details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Specify the content of the footer.</p></li></ul><h3 id="footerhtml" tabindex="-1"><a class="header-anchor" href="#footerhtml" aria-hidden="true">#</a> footerHtml</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>Allow HTML in footer or not.</p><p>If you set it to <code>true</code>, the <a href="#footer">footer</a> will be treated as HTML code.</p></li></ul><h2 id="normal-page" tabindex="-1"><a class="header-anchor" href="#normal-page" aria-hidden="true">#</a> Normal Page</h2><p>Frontmatter in this section will only take effect in normal pages.</p><h3 id="editlink" tabindex="-1"><a class="header-anchor" href="#editlink" aria-hidden="true">#</a> editLink</h3>`,17),Q=e("li",null,[e("p",null,[l("Type: "),e("code",null,"boolean")])],-1),W=e("li",null,[e("p",null,"Details:"),e("p",null,[l("Enable the "),e("em",null,"edit this page"),l(" link in this page or not.")])],-1),X=e("p",null,"Also see:",-1),Z=e("h3",{id:"editlinkpattern",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#editlinkpattern","aria-hidden":"true"},"#"),l(" editLinkPattern")],-1),$=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string")])],-1),ee=e("li",null,[e("p",null,"Details:"),e("p",null,[l("Specify the pattern of the "),e("em",null,"edit this page"),l(" link of this page.")])],-1),le=e("p",null,"Also see:",-1),ie=e("h3",{id:"lastupdated",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lastupdated","aria-hidden":"true"},"#"),l(" lastUpdated")],-1),ne=e("li",null,[e("p",null,[l("Type: "),e("code",null,"boolean")])],-1),te=e("li",null,[e("p",null,"Details:"),e("p",null,[l("Enable the "),e("em",null,"last updated timestamp"),l(" in this page or not.")])],-1),ae=e("p",null,"Also see:",-1),se=e("h3",{id:"contributors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#contributors","aria-hidden":"true"},"#"),l(" contributors")],-1),de=e("li",null,[e("p",null,[l("Type: "),e("code",null,"boolean")])],-1),oe=e("li",null,[e("p",null,"Details:"),e("p",null,[l("Enable the "),e("em",null,"contributors list"),l(" in this page or not.")])],-1),re=e("p",null,"Also see:",-1),ue=e("h3",{id:"sidebar",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sidebar","aria-hidden":"true"},"#"),l(" sidebar")],-1),ce=e("li",null,[e("p",null,[l("Type: "),e("code",null,"false | 'auto' | SidebarConfigArray | SidebarConfigObject")])],-1),he=e("li",null,[e("p",null,"Details:"),e("p",null,"Configure the sidebar of this page.")],-1),pe=e("p",null,"Also see:",-1),me=e("h3",{id:"sidebardepth",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sidebardepth","aria-hidden":"true"},"#"),l(" sidebarDepth")],-1),fe=e("li",null,[e("p",null,[l("Type: "),e("code",null,"number")])],-1),ve=e("li",null,[e("p",null,"Details:"),e("p",null,"Configure the sidebar depth of this page.")],-1),ge=e("p",null,"Also see:",-1),be=a(`<h3 id="prev" tabindex="-1"><a class="header-anchor" href="#prev" aria-hidden="true">#</a> prev</h3><ul><li><p>Type: <code>NavLink | string</code></p></li><li><p>Details:</p><p>Specify the link of the previous page.</p><p>If you don&#39;t set this frontmatter, the link will be inferred from the sidebar config.</p><p>To configure the prev link manually, you can set this frontmatter to a <code>NavLink</code> object or a string:</p><ul><li>A <code>NavLink</code> object should have a <code>text</code> field and a <code>link</code> field.</li><li>A string should be the path to the target page file. It will be converted to a <code>NavLink</code> object, whose <code>text</code> is the page title, and <code>link</code> is the page route path.</li></ul></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>---
# NavLink
prev:
  text: Get Started
  link: /guide/getting-started.html

# NavLink - external url
prev:
  text: GitHub
  link: https://github.com

# string - page file path
prev: /guide/getting-started.md

# string - page file relative path
prev: ../../guide/getting-started.md
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="next" tabindex="-1"><a class="header-anchor" href="#next" aria-hidden="true">#</a> next</h3><ul><li><p>Type: <code>NavLink | string</code></p></li><li><p>Details:</p><p>Specify the link of the next page.</p><p>If you don&#39;t set this frontmatter, the link will be inferred from the sidebar config.</p><p>The type is the same as <a href="#prev">prev</a> frontmatter.</p></li></ul>`,5);function _e(xe,ye){const d=s("NpmBadge"),n=s("RouterLink"),o=s("ExternalLinkIcon");return u(),c("div",null,[p,i(d,{package:"@vuepress/theme-default"}),m,f,v,e("ul",null,[g,e("li",null,[b,e("p",null,[l("Provided by "),i(n,{to:"/en-US/reference/plugin/external-link-icon.html#externallinkicon"},{default:t(()=>[l("@vuepress/plugin-external-link-icon")]),_:1}),l(".")])]),e("li",null,[_,e("ul",null,[e("li",null,[i(n,{to:"/en-US/reference/default-theme/config.html#themeplugins-externallinkicon"},{default:t(()=>[l("Default Theme > Config Reference > themePlugins.externalLinkIcon")]),_:1})])])])]),x,e("ul",null,[y,k,e("li",null,[T,e("ul",null,[e("li",null,[i(n,{to:"/en-US/reference/default-theme/config.html#navbar"},{default:t(()=>[l("Default Theme > Config > navbar")]),_:1})])])])]),S,e("ul",null,[e("li",null,[l("Also see: "),e("ul",null,[e("li",null,[i(n,{to:"/en-US/reference/default-theme/styles.html#style-file"},{default:t(()=>[l("Default Theme > Styles > Style File")]),_:1})])])])]),w,e("ul",null,[e("li",null,[l("Also see: "),e("ul",null,[e("li",null,[i(n,{to:"/en-US/guide/assets.html#public-files"},{default:t(()=>[l("Guide > Assets > Public Files")]),_:1})])])])]),D,e("ul",null,[A,C,e("li",null,[L,e("ul",null,[I,e("li",null,[i(n,{to:"/en-US/reference/default-theme/config.html#colormode"},{default:t(()=>[l("Default Theme > Config > colorMode")]),_:1})])])])]),U,e("ul",null,[N,E,e("li",null,[P,V,F,e("p",null,[l("Notice that the height is also constrained by CSS. This attribute is to reduce "),e("a",j,[l("Cumulative Layout Shift (CLS)"),i(o)]),l(" that caused by the loading of the hero image.")])])]),H,e("ul",null,[B,e("li",null,[M,G,e("p",null,[l("This will fallback to the site "),i(n,{to:"/en-US/reference/config.html#title"},{default:t(()=>[l("title")]),_:1}),l(".")]),R])]),Y,e("ul",null,[z,e("li",null,[O,q,e("p",null,[l("This will fallback to the site "),i(n,{to:"/en-US/reference/config.html#description"},{default:t(()=>[l("description")]),_:1}),l(".")]),J])]),K,e("ul",null,[Q,W,e("li",null,[X,e("ul",null,[e("li",null,[i(n,{to:"/en-US/reference/default-theme/config.html#editlink"},{default:t(()=>[l("Default Theme > Config > editLink")]),_:1})])])])]),Z,e("ul",null,[$,ee,e("li",null,[le,e("ul",null,[e("li",null,[i(n,{to:"/en-US/reference/default-theme/config.html#editlinkpattern"},{default:t(()=>[l("Default Theme > Config > editLinkPattern")]),_:1})])])])]),ie,e("ul",null,[ne,te,e("li",null,[ae,e("ul",null,[e("li",null,[i(n,{to:"/en-US/reference/default-theme/config.html#lastupdated"},{default:t(()=>[l("Default Theme > Config > lastUpdated")]),_:1})])])])]),se,e("ul",null,[de,oe,e("li",null,[re,e("ul",null,[e("li",null,[i(n,{to:"/en-US/reference/default-theme/config.html#contributors"},{default:t(()=>[l("Default Theme > Config > contributors")]),_:1})])])])]),ue,e("ul",null,[ce,he,e("li",null,[pe,e("ul",null,[e("li",null,[i(n,{to:"/en-US/reference/default-theme/config.html#sidebar"},{default:t(()=>[l("Default Theme > Config > sidebar")]),_:1})])])])]),me,e("ul",null,[fe,ve,e("li",null,[ge,e("ul",null,[e("li",null,[i(n,{to:"/en-US/reference/default-theme/config.html#sidebardepth"},{default:t(()=>[l("Default Theme > Config > sidebarDepth")]),_:1})])])])]),be])}const Te=r(h,[["render",_e],["__file","frontmatter.html.vue"]]);export{Te as default};
