import{_ as r,r as i,o as l,c,a as e,b as n,d as s,w as a,e as o}from"./app-8ceb8f5d.js";const h={},u=e("h1",{id:"主题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#主题","aria-hidden":"true"},"#"),n(" 主题")],-1),m=e("p",null,"VuePress 主题为你提供了布局、样式和其他功能，帮助你专注于 Markdown 内容的写作。",-1),_=e("h2",{id:"默认主题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#默认主题","aria-hidden":"true"},"#"),n(" 默认主题")],-1),v=e("p",null,"VuePress 有一个开箱即用的默认主题，正使用在你当前正在浏览的文档网站上。",-1),p=e("p",null,"如果你不指定要使用的主题，那么就会自动使用默认主题。",-1),f=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { defaultTheme } from &#39;vuepress&#39;

export default {
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: &#39;首页&#39;,
        link: &#39;/&#39;,
      },
    ],
  }),
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),b=e("p",null,"然而，你可能觉得默认主题不够出色，又或者你不想搭建一个文档网站，而是一个其他类型的网站，比如博客。此时，你可以尝试使用社区主题或者创建本地主题。",-1),x=e("h2",{id:"社区主题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#社区主题","aria-hidden":"true"},"#"),n(" 社区主题")],-1),k={href:"https://www.npmjs.com/search?q=keywords:vuepress-theme",target:"_blank",rel:"noopener noreferrer"},g=e("h2",{id:"本地主题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#本地主题","aria-hidden":"true"},"#"),n(" 本地主题")],-1);function w(V,N){const t=i("RouterLink"),d=i("ExternalLinkIcon");return l(),c("div",null,[u,m,_,v,p,e("p",null,[n("为了配置默认主题，你需要在你的配置文件中通过 "),s(t,{to:"/reference/config.html#theme"},{default:a(()=>[n("theme")]),_:1}),n(" 配置项来使用它：")]),f,e("p",null,[n("默认主题为文档网站提供了基础且实用的功能，你可以前往 "),s(t,{to:"/reference/default-theme/config.html"},{default:a(()=>[n("默认主题配置参考")]),_:1}),n(" 获取全部的配置列表。")]),b,x,e("p",null,[n("社区用户创建了很多主题，并将它们发布到了 "),e("a",k,[n("NPM"),s(d)]),n(" 上。查看主题本身的文档可以获取更详细的指引。")]),g,e("p",null,[n("如果你想要使用自己的自定义主题，但是又不想发布它，你可以创建一个本地主题。前往 "),s(t,{to:"/advanced/theme.html"},{default:a(()=>[n("深入 > 开发主题")]),_:1}),n(" 学习如何开发你自己的主题。")])])}const y=r(h,[["render",w],["__file","theme.html.vue"]]);export{y as default};
