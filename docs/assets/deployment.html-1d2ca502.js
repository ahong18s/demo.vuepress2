import{_ as a,r as t,o as r,c,a as e,b as n,d as i,w as d,e as l}from"./app-09910f35.js";const u={},v=e("h1",{id:"deployment",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#deployment","aria-hidden":"true"},"#"),n(" Deployment")],-1),p=e("p",null,"The following guides are based on some shared assumptions:",-1),m=e("li",null,[n("You are placing your Markdown source files inside the "),e("code",null,"docs"),n(" directory of your project;")],-1),h=e("li",null,[n("You are using the default build output location ("),e("code",null,".vuepress/dist"),n(");")],-1),b={href:"https://pnpm.io",target:"_blank",rel:"noopener noreferrer"},g=e("li",null,[n("VuePress is installed as a local dependency in your project, and you have setup the following script in "),e("code",null,"package.json"),n(":")],-1),_=l(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;scripts&quot;: {
    &quot;docs:build&quot;: &quot;vuepress build docs&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github-pages" tabindex="-1"><a class="header-anchor" href="#github-pages" aria-hidden="true">#</a> GitHub Pages</h2>`,2),f=l("<p>If you are deploying to <code>https://&lt;USERNAME&gt;.github.io/</code>, you can omit this step as <code>base</code> defaults to <code>&quot;/&quot;</code>.</p><p>If you are deploying to <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code>, for example your repository is at <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>, then set <code>base</code> to <code>&quot;/&lt;REPO&gt;/&quot;</code>.</p>",2),y={href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,[n("Create "),e("code",null,".github/workflows/docs.yml"),n(" to set up the workflow.")],-1),w=l(`<details class="custom-container details"><summary>Click to expand sample config</summary><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>name: docs

on:
  # trigger deployment on every push to main branch
  push:
    branches: [main]
  # trigger deployment manually
  workflow_dispatch:

jobs:
  docs:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
        with:
          # fetch all commits to get last updated time or other git log info
          fetch-depth: 0

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          # choose pnpm version to use
          version: 8
          # install deps with pnpm
          run_install: true

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          # choose node.js version to use
          node-version: 18
          # cache deps for pnpm
          cache: pnpm

      # run build script
      - name: Build VuePress site
        run: pnpm docs:build

      # please check out the docs of the workflow for more details
      # @see https://github.com/crazy-max/ghaction-github-pages
      - name: Deploy to GitHub Pages
        uses: crazy-max/ghaction-github-pages@v2
        with:
          # deploy to gh-pages branch
          target_branch: gh-pages
          # deploy the default output dir of VuePress
          build_dir: docs/.vuepress/dist
        env:
          # @see https://docs.github.com/en/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),E={class:"custom-container tip"},q=e("p",{class:"custom-container-title"},"prompt",-1),x={href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},j=e("h2",{id:"gitlab-pages",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gitlab-pages","aria-hidden":"true"},"#"),n(" GitLab Pages")],-1),R=l("<p>If you are deploying to <code>https://&lt;USERNAME&gt;.gitlab.io/</code>, you can omit <code>base</code> as it defaults to <code>&quot;/&quot;</code>.</p><p>If you are deploying to <code>https://&lt;USERNAME&gt;.gitlab.io/&lt;REPO&gt;/</code>, for example your repository is at <code>https://gitlab.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>, then set <code>base</code> to <code>&quot;/&lt;REPO&gt;/&quot;</code>.</p>",2),P=e("code",null,".gitlab-ci.yml",-1),S={href:"https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/",target:"_blank",rel:"noopener noreferrer"},I=l(`<details class="custom-container details"><summary>Click to expand sample config</summary><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code># choose a docker image to use
image: node:18-buster

pages:
  # trigger deployment on every push to main branch
  only:
    - main

  # cache node_modules
  cache:
    key:
      files:
        - pnpm-lock.yaml
    paths:
      - .pnpm-store

  # Install pnpm
  before_script:
    - curl -fsSL https://get.pnpm.io/install.sh | sh -
    - pnpm config set store-dir .pnpm-store

  # install dependencies and run build script
  script:
    - pnpm i --frozen-lockfile
    - pnpm docs:build --dest public

  artifacts:
    paths:
      - public
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),N={class:"custom-container tip"},C=e("p",{class:"custom-container-title"},"prompt",-1),O={href:"https://docs.gitlab.com/ce/user/project/pages/#getting-started",target:"_blank",rel:"noopener noreferrer"},H=e("h2",{id:"google-firebase",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#google-firebase","aria-hidden":"true"},"#"),n(" Google Firebase")],-1),U={href:"https://www.npmjs.com/package/firebase-tools",target:"_blank",rel:"noopener noreferrer"},G=e("li",null,[e("p",null,[n("Create "),e("code",null,"firebase.json"),n(" and "),e("code",null,".firebaserc"),n(" at the root of your project with the following content:")])],-1),V=l(`<p><code>firebase.json</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>After running <code>pnpm docs:build</code>, deploy using the command <code>firebase deploy</code>.</li></ol>`,5),A={class:"custom-container tip"},L=e("p",{class:"custom-container-title"},"prompt",-1),M={href:"https://firebase.google.com/docs/cli",target:"_blank",rel:"noopener noreferrer"},T=e("h2",{id:"heroku",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#heroku","aria-hidden":"true"},"#"),n(" Heroku")],-1),B={href:"https://devcenter.heroku.com/articles/heroku-cli",target:"_blank",rel:"noopener noreferrer"},D={href:"https://signup.heroku.com",target:"_blank",rel:"noopener noreferrer"},F=e("li",null,[e("p",null,[n("Run "),e("code",null,"heroku login"),n(" and fill in your Heroku credentials:")])],-1),K=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>heroku login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>Create a file called <code>static.json</code> in the root of your project with the below content:</li></ol><p><code>static.json</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;root&quot;: &quot;./docs/.vuepress/dist&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Y={href:"https://github.com/heroku/heroku-buildpack-static",target:"_blank",rel:"noopener noreferrer"},z=e("h2",{id:"kinsta",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kinsta","aria-hidden":"true"},"#"),n(" Kinsta")],-1),W={href:"https://kinsta.com/docs/vuepress-application/",target:"_blank",rel:"noopener noreferrer"},$=e("h2",{id:"edgio",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#edgio","aria-hidden":"true"},"#"),n(" Edgio")],-1),J={href:"https://docs.edg.io/guides/vuepress",target:"_blank",rel:"noopener noreferrer"},Q=e("h2",{id:"netlify",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#netlify","aria-hidden":"true"},"#"),n(" Netlify")],-1),X={href:"https://netlify.com",target:"_blank",rel:"noopener noreferrer"},Z=e("ul",null,[e("li",null,[e("strong",null,"Build Command:"),n(),e("code",null,"pnpm docs:build")]),e("li",null,[e("strong",null,"Publish directory:"),n(),e("code",null,"docs/.vuepress/dist")])],-1),ee={href:"https://docs.netlify.com/configure-builds/environment-variables",target:"_blank",rel:"noopener noreferrer"},ne=e("ul",null,[e("li",null,[e("code",null,"NODE_VERSION"),n(": 18")])],-1),ie=e("li",null,[e("p",null,"Hit the deploy button.")],-1),se=e("h2",{id:"vercel",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vercel","aria-hidden":"true"},"#"),n(" Vercel")],-1),le={href:"https://vercel.com",target:"_blank",rel:"noopener noreferrer"},oe=e("ul",null,[e("li",null,[e("strong",null,"FRAMEWORK PRESET:"),n(),e("code",null,"Other")]),e("li",null,[e("strong",null,"BUILD COMMAND:"),n(),e("code",null,"pnpm docs:build")]),e("li",null,[e("strong",null,"OUTPUT DIRECTORY:"),n(),e("code",null,"docs/.vuepress/dist")])],-1),te=e("li",null,[e("p",null,"Hit the deploy button.")],-1);function de(ae,re){const s=t("ExternalLinkIcon"),o=t("RouterLink");return r(),c("div",null,[v,p,e("ul",null,[m,h,e("li",null,[n("You are using "),e("a",b,[n("pnpm"),i(s)]),n(" as package manager, while npm and yarn are also supported;")]),g]),_,e("ol",null,[e("li",null,[e("p",null,[n("Set the correct "),i(o,{to:"/en-US/reference/config.html#base"},{default:d(()=>[n("base")]),_:1}),n(" config.")]),f]),e("li",null,[e("p",null,[n("Choose your preferred CI tools. Here we take "),e("a",y,[n("GitHub Actions"),i(s)]),n(" as an example.")]),k])]),w,e("div",E,[q,e("p",null,[n("Please refer to "),e("a",x,[n("GitHub Pages official guide"),i(s)]),n(" for more details.")])]),j,e("ol",null,[e("li",null,[e("p",null,[n("Set the correct "),i(o,{to:"/en-US/reference/config.html#base"},{default:d(()=>[n("base")]),_:1}),n(" config.")]),R]),e("li",null,[e("p",null,[n("Create "),P,n(" to set up "),e("a",S,[n("GitLab CI"),i(s)]),n(" workflow.")])])]),I,e("div",N,[C,e("p",null,[n("Please refer to "),e("a",O,[n("GitLab Pages official guide"),i(s)]),n(" for more details.")])]),H,e("ol",null,[e("li",null,[e("p",null,[n("Make sure you have "),e("a",U,[n("firebase-tools"),i(s)]),n(" installed.")])]),G]),V,e("div",A,[L,e("p",null,[n("Please refer to "),e("a",M,[n("Firebase CLI official guide"),i(s)]),n(" for more details.")])]),T,e("ol",null,[e("li",null,[e("p",null,[n("Install "),e("a",B,[n("Heroku CLI"),i(s)]),n(".")])]),e("li",null,[e("p",null,[n("Create a Heroku account by "),e("a",D,[n("signing up"),i(s)]),n(".")])]),F]),K,e("p",null,[n("This is the configuration of your site; read more at "),e("a",Y,[n("heroku-buildpack-static"),i(s)]),n(".")]),z,e("p",null,[n("See "),e("a",W,[n("Set Up VuePress on Kinsta"),i(s)]),n(".")]),$,e("p",null,[n("See "),e("a",J,[n("Edgio Documentation > Framework Guides > VuePress"),i(s)]),n(".")]),Q,e("ol",null,[e("li",null,[e("p",null,[n("On "),e("a",X,[n("Netlify"),i(s)]),n(", set up a new project from GitHub with the following settings:")]),Z]),e("li",null,[e("p",null,[n("Set "),e("a",ee,[n("Environment variables"),i(s)]),n(" to choose node version:")]),ne]),ie]),se,e("ol",null,[e("li",null,[e("p",null,[n("Go to "),e("a",le,[n("Vercel"),i(s)]),n(", set up a new project from GitHub with the following settings:")]),oe]),te])])}const ue=a(u,[["render",de],["__file","deployment.html.vue"]]);export{ue as default};
