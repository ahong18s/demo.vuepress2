import{_ as t,r as s,o as r,c as l,a,b as e,d as i,w as d,e as o}from"./app-8ceb8f5d.js";const c={},u=a("h1",{id:"adding-extra-pages",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#adding-extra-pages","aria-hidden":"true"},"#"),e(" Adding Extra Pages")],-1),v=a("p",null,"Sometimes you might want to add some extra pages without creating a markdown file in the source directory.",-1),m=o(`<h2 id="add-a-default-homepage" tabindex="-1"><a class="header-anchor" href="#add-a-default-homepage" aria-hidden="true">#</a> Add a Default Homepage</h2><p>As a theme author, you may not require users to create a <code>/README.md</code> file as the homepage, but you want to provide a default one:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { createPage } from &#39;@vuepress/core&#39;

export default {
  // all pages have been loaded after initialization
  async onInitialized(app) {
    // if the homepage does not exist
    if (app.pages.every((page) =&gt; page.path !== &#39;/&#39;)) {
      // create a homepage
      const homepage = await createPage(app, {
        path: &#39;/&#39;,
        // set frontmatter
        frontmatter: {
          layout: &#39;Layout&#39;,
        },
        // set markdown content
        content: \`\\
# Welcome to \${app.options.title}

This is the default homepage
\`,
      })
      // add it to \`app.pages\`
      app.pages.push(homepage)
    }
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function p(h,g){const n=s("RouterLink");return r(),l("div",null,[u,v,a("p",null,[e("With the help of "),i(n,{to:"/en-US/reference/plugin-api.html"},{default:d(()=>[e("Plugin API")]),_:1}),e(" and "),i(n,{to:"/en-US/reference/node-api.html"},{default:d(()=>[e("Node API")]),_:1}),e(", we can do that with ease.")]),m])}const f=t(c,[["render",p],["__file","adding-extra-pages.html.vue"]]);export{f as default};
