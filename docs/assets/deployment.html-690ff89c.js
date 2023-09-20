import{_ as a,r as t,o as r,c,a as e,b as n,d as s,w as o,f as u,e as l}from"./app-8ceb8f5d.js";const v={},b=e("h1",{id:"部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#部署","aria-hidden":"true"},"#"),n(" 部署")],-1),h=e("p",null,"下述的指南基于以下条件：",-1),m=e("li",null,[n("Markdown 源文件放置在你项目的 "),e("code",null,"docs"),n(" 目录；")],-1),p=e("li",null,[n("使用的是默认的构建输出目录 ("),e("code",null,".vuepress/dist"),n(") ；")],-1),_={href:"https://pnpm.io/zh/",target:"_blank",rel:"noopener noreferrer"},g=e("li",null,[n("VuePress 作为项目依赖安装，并在 "),e("code",null,"package.json"),n(" 中配置了如下脚本：")],-1),f=l(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;scripts&quot;: {
    &quot;docs:build&quot;: &quot;vuepress build docs&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github-pages" tabindex="-1"><a class="header-anchor" href="#github-pages" aria-hidden="true">#</a> GitHub Pages</h2>`,2),k=l("<p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.github.io/</code> ，你可以省略这一步，因为 <code>base</code> 默认就是 <code>&quot;/&quot;</code> 。</p><p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code> ，也就是说你的仓库地址是 <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> ，则将 <code>base</code> 设置为 <code>&quot;/&lt;REPO&gt;/&quot;</code>。</p>",2),E={href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"},y=e("p",null,[n("创建 "),e("code",null,".github/workflows/docs.yml"),n(" 文件来配置工作流。")],-1),q=l(`<details class="custom-container details"><summary>点击展开配置样例</summary><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>name: docs

on:
  # 每当 push 到 main 分支时触发部署
  push:
    branches: [main]
  # 手动触发部署
  workflow_dispatch:

jobs:
  docs:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
        with:
          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录
          fetch-depth: 0

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          # 选择要使用的 pnpm 版本
          version: 8
          # 使用 pnpm 安装依赖
          run_install: true

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          # 选择要使用的 node 版本
          node-version: 18
          # 缓存 pnpm 依赖
          cache: pnpm

      # 运行构建脚本
      - name: Build VuePress site
        run: pnpm docs:build

      # 查看 workflow 的文档来获取更多信息
      # @see https://github.com/crazy-max/ghaction-github-pages
      - name: Deploy to GitHub Pages
        uses: crazy-max/ghaction-github-pages@v2
        with:
          # 部署到 gh-pages 分支
          target_branch: gh-pages
          # 部署目录为 VuePress 的默认输出目录
          build_dir: docs/.vuepress/dist
        env:
          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),x={class:"custom-container tip"},w=e("p",{class:"custom-container-title"},"提示",-1),j={href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},P=e("h2",{id:"gitlab-pages",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gitlab-pages","aria-hidden":"true"},"#"),n(" GitLab Pages")],-1),R=l("<p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.gitlab.io/</code> ，你可以省略这一步，因此 <code>base</code> 默认就是 <code>&quot;/&quot;</code> 。</p><p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.gitlab.io/&lt;REPO&gt;/</code> ，也就是说你的仓库地址是 <code>https://gitlab.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> ，则将 <code>base</code> 设置为 <code>&quot;/&lt;REPO&gt;/&quot;</code>。</p>",2),B=e("code",null,".gitlab-ci.yml",-1),N={href:"https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/",target:"_blank",rel:"noopener noreferrer"},C=l(`<details class="custom-container details"><summary>点击展开配置样例</summary><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code># 选择你要使用的 docker 镜像
image: node:18-buster

pages:
  # 每当 push 到 main 分支时触发部署
  only:
    - main

  # 缓存 node_modules
  cache:
    key:
      files:
        - pnpm-lock.yaml
    paths:
      - .pnpm-store

  # 安装 pnpm
  before_script:
    - curl -fsSL https://get.pnpm.io/install.sh | sh -
    - pnpm config set store-dir .pnpm-store

  # 安装依赖并运行构建脚本
  script:
    - pnpm install --frozen-lockfile
    - pnpm docs:build --dest public

  artifacts:
    paths:
      - public
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),S={class:"custom-container tip"},V=e("p",{class:"custom-container-title"},"提示",-1),O={href:"https://docs.gitlab.com/ce/user/project/pages/#getting-started",target:"_blank",rel:"noopener noreferrer"},A=e("h2",{id:"google-firebase",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#google-firebase","aria-hidden":"true"},"#"),n(" Google Firebase")],-1),G={href:"https://www.npmjs.com/package/firebase-tools",target:"_blank",rel:"noopener noreferrer"},I=e("li",null,[e("p",null,[n("在你项目的根目录下创建 "),e("code",null,"firebase.json"),n(" 和 "),e("code",null,".firebaserc"),n("，并包含以下内容：")])],-1),H=l(`<p><code>firebase.json</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;hosting&quot;: {
    &quot;public&quot;: &quot;./docs/.vuepress/dist&quot;,
    &quot;ignore&quot;: []
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>.firebaserc</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;projects&quot;: {
    &quot;default&quot;: &quot;&lt;YOUR_FIREBASE_ID&gt;&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在执行了 <code>pnpm docs:build</code> 后, 使用 <code>firebase deploy</code> 指令来部署。</li></ol>`,5),L={class:"custom-container tip"},U=e("p",{class:"custom-container-title"},"提示",-1),M={href:"https://firebase.google.com/docs/cli",target:"_blank",rel:"noopener noreferrer"},T=e("h2",{id:"heroku",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#heroku","aria-hidden":"true"},"#"),n(" Heroku")],-1),D={href:"https://devcenter.heroku.com/articles/heroku-cli",target:"_blank",rel:"noopener noreferrer"},F={href:"https://signup.heroku.com",target:"_blank",rel:"noopener noreferrer"},K=e("li",null,[e("p",null,[n("运行 "),e("code",null,"heroku login"),n(" 并填写你的 Heroku 认证信息：")])],-1),z=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>heroku login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>在你的项目根目录中，创建一个名为 <code>static.json</code> 的文件，并包含下述内容：</li></ol><p><code>static.json</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;root&quot;: &quot;./docs/.vuepress/dist&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Y={href:"https://github.com/heroku/heroku-buildpack-static",target:"_blank",rel:"noopener noreferrer"},W=e("h2",{id:"kinsta",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kinsta","aria-hidden":"true"},"#"),n(" Kinsta")],-1),$={href:"https://kinsta.com/docs/vuepress-application/",target:"_blank",rel:"noopener noreferrer"},J=e("h2",{id:"edgio",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#edgio","aria-hidden":"true"},"#"),n(" Edgio")],-1),Q={href:"https://docs.edg.io/guides/vuepress",target:"_blank",rel:"noopener noreferrer"},X=e("h2",{id:"netlify",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#netlify","aria-hidden":"true"},"#"),n(" Netlify")],-1),Z={href:"https://netlify.com",target:"_blank",rel:"noopener noreferrer"},ee=e("ul",null,[e("li",null,[e("strong",null,"Build Command:"),n(),e("code",null,"pnpm docs:build")]),e("li",null,[e("strong",null,"Publish directory:"),n(),e("code",null,"docs/.vuepress/dist")])],-1),ne={href:"https://docs.netlify.com/configure-builds/environment-variables",target:"_blank",rel:"noopener noreferrer"},se=e("ul",null,[e("li",null,[e("code",null,"NODE_VERSION"),n(": 18")])],-1),ie=e("li",null,[e("p",null,"点击 deploy 按钮。")],-1),le=e("h2",{id:"vercel",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vercel","aria-hidden":"true"},"#"),n(" Vercel")],-1),de={href:"https://vercel.com",target:"_blank",rel:"noopener noreferrer"},te=e("ul",null,[e("li",null,[e("strong",null,"FRAMEWORK PRESET:"),n(),e("code",null,"Other")]),e("li",null,[e("strong",null,"BUILD COMMAND:"),n(),e("code",null,"pnpm docs:build")]),e("li",null,[e("strong",null,"OUTPUT DIRECTORY:"),n(),e("code",null,"docs/.vuepress/dist")])],-1),oe=e("li",null,[e("p",null,"点击 deploy 按钮。")],-1),ae=e("h2",{id:"云开发-cloudbase",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#云开发-cloudbase","aria-hidden":"true"},"#"),n(" 云开发 CloudBase")],-1),re={href:"https://cloudbase.net/?site=vuepress",target:"_blank",rel:"noopener noreferrer"},ce={href:"https://cloudbase.net/framework.html?site=vuepress",target:"_blank",rel:"noopener noreferrer"},ue=e("ol",null,[e("li",null,"全局安装 CloudBase CLI ：")],-1),ve=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`pnpm install -g @cloudbase/cli
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),be={start:"2"},he={href:"https://console.cloud.tencent.com/tcb/env/index?tdl_anchor=ad&tdl_site=vuejs",target:"_blank",rel:"noopener noreferrer"},me=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cloudbase init --without-template
cloudbase framework:deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>CloudBase CLI 首先会跳转到控制台进行登录授权，然后将会交互式进行确认。</p><p>确认信息后会立即进行部署，部署完成后，可以获得一个自动 SSL，CDN 加速的网站应用，你也可以搭配使用 GitHub Action 来持续部署 GitHub 上的 VuePress 应用。</p><p>也可以使用 <code>cloudbase init --template vuepress</code> 快速创建和部署一个新的 VuePress 应用。</p>`,4),pe={class:"custom-container tip"},_e=e("p",{class:"custom-container-title"},"提示",-1),ge={href:"https://github.com/TencentCloudBase/cloudbase-framework?site=vuepress#%E9%A1%B9%E7%9B%AE%E7%A4%BA%E4%BE%8B",target:"_blank",rel:"noopener noreferrer"},fe=e("h2",{id:"_21-云盒子",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_21-云盒子","aria-hidden":"true"},"#"),n(" 21 云盒子")],-1),ke={href:"https://www.21yunbox.com/docs/#/deploy-vuepress",target:"_blank",rel:"noopener noreferrer"};function Ee(ye,qe){const i=t("ExternalLinkIcon"),d=t("RouterLink");return r(),c("div",null,[b,h,e("ul",null,[m,p,e("li",null,[n("使用 "),e("a",_,[n("pnpm"),s(i)]),n(" 作为包管理器，当然也支持使用 npm 或 yarn 。")]),g]),f,e("ol",null,[e("li",null,[e("p",null,[n("设置正确的 "),s(d,{to:"/reference/config.html#base"},{default:o(()=>[n("base")]),_:1}),n(" 选项。")]),k]),e("li",null,[e("p",null,[n("选择你想要使用的 CI 工具。这里我们以 "),e("a",E,[n("GitHub Actions"),s(i)]),n(" 为例。")]),y])]),q,e("div",x,[w,e("p",null,[n("请参考 "),e("a",j,[n("GitHub Pages 官方指南"),s(i)]),n(" 来获取更多信息。")])]),P,e("ol",null,[e("li",null,[e("p",null,[n("设置正确的 "),s(d,{to:"/reference/config.html#base"},{default:o(()=>[n("base")]),_:1}),n(" 选项。")]),R]),e("li",null,[e("p",null,[n("创建 "),B,n(" 文件来配置 "),e("a",N,[n("GitLab CI"),s(i)]),n(" 工作流。")])])]),C,e("div",S,[V,e("p",null,[n("请参考 "),e("a",O,[n("GitLab Pages 官方指南"),s(i)]),n(" 来获取更多信息。")])]),A,e("ol",null,[e("li",null,[e("p",null,[n("请确保你已经安装了 "),e("a",G,[n("firebase-tools"),s(i)]),n("。")])]),I]),H,e("div",L,[U,e("p",null,[n("请参考 "),e("a",M,[n("Firebase CLI 官方指南"),s(i)]),n(" 来获取更多信息。")])]),T,e("ol",null,[e("li",null,[e("p",null,[n("首先安装 "),e("a",D,[n("Heroku CLI"),s(i)]),n("；")])]),e("li",null,[e("p",null,[e("a",F,[n("在这里"),s(i)]),n(" 注册一个 Heroku 账号；")])]),K]),z,e("p",null,[n("这里是你项目的配置，请参考 "),e("a",Y,[n("heroku-buildpack-static"),s(i)]),n(" 来获取更多信息。")]),W,e("p",null,[n("请查看 "),e("a",$,[n("Set Up VuePress on Kinsta"),s(i)]),n(" 。")]),J,e("p",null,[n("请查看 "),e("a",Q,[n("Edgio Documentation > Framework Guides > VuePress"),s(i)]),n(" 。")]),X,e("ol",null,[e("li",null,[e("p",null,[n("前往 "),e("a",Z,[n("Netlify"),s(i)]),n(" ，从 GitHub 创建一个新项目，并进行如下配置：")]),ee]),e("li",null,[e("p",null,[n("设置 "),e("a",ne,[n("Environment variables"),s(i)]),n(" 来选择 Node 版本：")]),se]),ie]),le,e("ol",null,[e("li",null,[e("p",null,[n("前往 "),e("a",de,[n("Vercel"),s(i)]),n(" ，从 GitHub 创建一个新项目，并进行如下配置：")]),te]),oe]),u(" 下列平台是中文文档特有的，放在最下方 "),ae,e("p",null,[e("a",re,[n("云开发 CloudBase"),s(i)]),n(" 是一个云原生一体化的 Serverless 云平台，支持静态网站、容器等多种托管能力，并提供简便的部署工具 "),e("a",ce,[n("CloudBase Framework"),s(i)]),n(" 来一键部署应用。")]),ue,ve,e("ol",be,[e("li",null,[n("在项目根目录运行以下命令一键部署 VuePress 应用，在部署之前可以先 "),e("a",he,[n("开通环境"),s(i)]),n("：")])]),me,e("div",pe,[_e,e("p",null,[n("更多详细信息请查看 CloudBase Framework 的"),e("a",ge,[n("部署项目示例"),s(i)])])]),fe,e("p",null,[n("请查看 "),e("a",ke,[n("21 云盒子 - 部署一个 VuePress 静态网页"),s(i)]),n("。")])])}const we=a(v,[["render",Ee],["__file","deployment.html.vue"]]);export{we as default};
