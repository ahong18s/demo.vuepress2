import{_ as o,r as a,o as c,c as u,d as t,a as i,b as e,w as d,e as r}from"./app-8ceb8f5d.js";const p={},h=i("h1",{id:"git",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),e(" git")],-1),m=i("p",null,"This plugin will collect git information of your pages, including the created and updated time, the contributors, etc.",-1),g=r(`<p>This plugin is mainly used to develop themes. You won&#39;t need to use it directly in most cases.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm i -D @vuepress/plugin-git@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { gitPlugin } from &#39;@vuepress/plugin-git&#39;

export default {
  plugins: [
    gitPlugin({
      // options
    }),
  ],
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-repository" tabindex="-1"><a class="header-anchor" href="#git-repository" aria-hidden="true">#</a> Git Repository</h2>`,5),v={href:"https://git-scm.com/book/en/Git-Basics-Getting-a-Git-Repository",target:"_blank",rel:"noopener noreferrer"},b={href:"https://git-scm.com/docs/git-clone#Documentation/git-clone.txt---depthltdepthgt",target:"_blank",rel:"noopener noreferrer"},f=r(`<div class="custom-container warning"><p class="custom-container-title">warning</p><p>This plugin will significantly slow down the speed of data preparation, especially when you have a lot of pages. You can consider disabling this plugin in <code>dev</code> mode to get better development experience.</p></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="createdtime" tabindex="-1"><a class="header-anchor" href="#createdtime" aria-hidden="true">#</a> createdTime</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Whether to collect page created time or not.</p></li></ul><h3 id="updatedtime" tabindex="-1"><a class="header-anchor" href="#updatedtime" aria-hidden="true">#</a> updatedTime</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Whether to collect page updated time or not.</p></li></ul><h3 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors" aria-hidden="true">#</a> contributors</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Whether to collect page contributors or not.</p></li></ul><h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2><h3 id="gitinclude" tabindex="-1"><a class="header-anchor" href="#gitinclude" aria-hidden="true">#</a> gitInclude</h3><ul><li><p>Type: <code>string[]</code></p></li><li><p>Details:</p><p>An array of relative paths to be included when calculating page data.</p></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>---
gitInclude:
  - relative/path/to/file1
  - relative/path/to/file2
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="page-data" tabindex="-1"><a class="header-anchor" href="#page-data" aria-hidden="true">#</a> Page Data</h2><p>This plugin will add a <code>git</code> field to page data.</p><p>After using this plugin, you can get the collected git information in page data:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { usePageData } from &#39;@vuepress/client&#39;
import type { GitPluginPageData } from &#39;@vuepress/plugin-git&#39;

export default {
  setup() {
    const page = usePageData&lt;GitPluginPageData&gt;()
    console.log(page.value.git)
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-createdtime" tabindex="-1"><a class="header-anchor" href="#git-createdtime" aria-hidden="true">#</a> git.createdTime</h3><ul><li><p>Type: <code>number</code></p></li><li><p>Details:</p><p>Unix timestamp in milliseconds of the first commit of the page.</p><p>This attribute would take the minimum of the first commit timestamps of the current page and the files listed in <a href="#gitinclude">gitInclude</a>.</p></li></ul><h3 id="git-updatedtime" tabindex="-1"><a class="header-anchor" href="#git-updatedtime" aria-hidden="true">#</a> git.updatedTime</h3><ul><li><p>Type: <code>number</code></p></li><li><p>Details:</p><p>Unix timestamp in milliseconds of the last commit of the page.</p><p>This attribute would take the maximum of the last commit timestamps of the current page and the files listed in <a href="#gitinclude">gitInclude</a>.</p></li></ul><h3 id="git-contributors" tabindex="-1"><a class="header-anchor" href="#git-contributors" aria-hidden="true">#</a> git.contributors</h3><ul><li>Type: <code>GitContributor[]</code></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>interface GitContributor {
  name: string
  email: string
  commits: number
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>The contributors information of the page.</p><p>This attribute would also include contributors to the files listed in <a href="#gitinclude">gitInclude</a>.</p></li></ul>`,24);function y(x,_){const s=a("NpmBadge"),n=a("RouterLink"),l=a("ExternalLinkIcon");return c(),u("div",null,[h,t(s,{package:"@vuepress/plugin-git"}),m,i("p",null,[e("The "),t(n,{to:"/en-US/reference/default-theme/config.html#lastupdated"},{default:d(()=>[e("lastUpdated")]),_:1}),e(" and "),t(n,{to:"/en-US/reference/default-theme/config.html#contributors"},{default:d(()=>[e("contributors")]),_:1}),e(" of default theme is powered by this plugin.")]),g,i("p",null,[e("This plugin requires your project to be inside a "),i("a",v,[e("Git Repository"),t(l)]),e(", so that it can collect information from the commit history.")]),i("p",null,[e("You should ensure all commits are available when building your site. For example, CI workflows usually clone your repository with "),i("a",b,[e("--depth 1"),t(l)]),e(" to avoid fetching all commits, so you should disable the behavior to make this plugin work properly in CI.")]),f])}const T=o(p,[["render",y],["__file","git.html.vue"]]);export{T as default};
