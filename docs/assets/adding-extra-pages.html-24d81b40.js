import{_ as d,r as l,o as r,c as t,a as n,b as e,d as a,w as s,e as c}from"./app-09910f35.js";const v={},o=n("h1",{id:"添加额外页面",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#添加额外页面","aria-hidden":"true"},"#"),e(" 添加额外页面")],-1),u=n("p",null,"有时你可能希望在不创建 Markdown 文件的情况下添加一些额外的页面。",-1),m=c(`<h2 id="添加默认的主页" tabindex="-1"><a class="header-anchor" href="#添加默认的主页" aria-hidden="true">#</a> 添加默认的主页</h2><p>作为一个主题作者，你可能不想要求用户必须创建一个 <code>/README.md</code> 文件来作为主页，但是你希望提供一个默认的主页：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { createPage } from &#39;@vuepress/core&#39;

export default {
  // 初始化之后，所有的页面已经加载完毕
  async onInitialized(app) {
    // 如果主页不存在
    if (app.pages.every((page) =&gt; page.path !== &#39;/&#39;)) {
      // 创建一个主页
      const homepage = await createPage(app, {
        path: &#39;/&#39;,
        // 设置 frontmatter
        frontmatter: {
          layout: &#39;Layout&#39;,
        },
        // 设置 markdown 内容
        content: \`\\
# 欢迎来到 \${app.options.title}

这是默认主页
\`,
      })
      // 把它添加到 \`app.pages\`
      app.pages.push(homepage)
    }
  },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function p(b,h){const i=l("RouterLink");return r(),t("div",null,[o,u,n("p",null,[e("我们可以借助于 "),a(i,{to:"/reference/plugin-api.html"},{default:s(()=>[e("插件 API")]),_:1}),e(" 和 "),a(i,{to:"/reference/node-api.html"},{default:s(()=>[e("Node API")]),_:1}),e(" 来轻松实现。")]),m])}const g=d(v,[["render",p],["__file","adding-extra-pages.html.vue"]]);export{g as default};
