import{_ as r,r as t,o as p,c,d as s,a,b as e,w as d,e as i}from"./app-111ec351.js";const u={},v=a("h1",{id:"command-line-interface",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#command-line-interface","aria-hidden":"true"},"#"),e(" Command Line Interface")],-1),m={href:"https://www.npmjs.com/package/@vuepress/cli",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},h=i(`<p>Run <code>vuepress --help</code> to get following help messages:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Usage:
  $ vuepress <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>

Commands:
  dev <span class="token punctuation">[</span>sourceDir<span class="token punctuation">]</span>    Start development server
  build <span class="token punctuation">[</span>sourceDir<span class="token punctuation">]</span>  Build to static site
  info               Display environment information

For <span class="token function">more</span> info, run any <span class="token builtin class-name">command</span> with the <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--help</span><span class="token variable">\`</span></span> flag:
  $ vuepress dev <span class="token parameter variable">--help</span>
  $ vuepress build <span class="token parameter variable">--help</span>
  $ vuepress info <span class="token parameter variable">--help</span>

Options:
  -v, <span class="token parameter variable">--version</span>  Display version number 
  -h, <span class="token parameter variable">--help</span>     Display this message 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),k={class:"custom-container tip"},f=a("p",{class:"custom-container-title"},"prompt",-1),g={href:"https://www.npmjs.com/package/debug",target:"_blank",rel:"noopener noreferrer"},_=a("p",null,[e("Set environment variable "),a("code",null,"DEBUG=vuepress*"),e(" to enable debug logs.")],-1),y=i(`<h2 id="dev" tabindex="-1"><a class="header-anchor" href="#dev" aria-hidden="true">#</a> dev</h2><p>Start a development server to develop your VuePress site locally.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Usage:
  $ vuepress dev <span class="token punctuation">[</span>sourceDir<span class="token punctuation">]</span>

Options:
  -c, <span class="token parameter variable">--config</span> <span class="token operator">&lt;</span>config<span class="token operator">&gt;</span>  Set path to config <span class="token function">file</span> 
  -p, <span class="token parameter variable">--port</span> <span class="token operator">&lt;</span>port<span class="token operator">&gt;</span>      Use specified port <span class="token punctuation">(</span>default: <span class="token number">8080</span><span class="token punctuation">)</span> 
  -t, <span class="token parameter variable">--temp</span> <span class="token operator">&lt;</span>temp<span class="token operator">&gt;</span>      Set the directory of the temporary files 
  <span class="token parameter variable">--host</span> <span class="token operator">&lt;</span>host<span class="token operator">&gt;</span>          Use specified <span class="token function">host</span> <span class="token punctuation">(</span>default: <span class="token number">0.0</span>.0.0<span class="token punctuation">)</span> 
  <span class="token parameter variable">--cache</span> <span class="token operator">&lt;</span>cache<span class="token operator">&gt;</span>        Set the directory of the cache files 
  --clean-temp           Clean the temporary files before dev 
  --clean-cache          Clean the cache files before dev 
  <span class="token parameter variable">--open</span>                 Open browser when ready 
  <span class="token parameter variable">--debug</span>                Enable debug mode 
  --no-watch             Disable watching page and config files <span class="token punctuation">(</span>default: <span class="token boolean">true</span><span class="token punctuation">)</span>
  -v, <span class="token parameter variable">--version</span>          Display version number 
  -h, <span class="token parameter variable">--help</span>             Display this message
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">prompt</p><p>Options set by CLI will override those options with the same name in your config file.</p></div><h2 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> build</h2>`,5),w=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Usage:
  $ vuepress build <span class="token punctuation">[</span>sourceDir<span class="token punctuation">]</span>

Options:
  -c, <span class="token parameter variable">--config</span> <span class="token operator">&lt;</span>config<span class="token operator">&gt;</span>  Set path to config <span class="token function">file</span> 
  -d, <span class="token parameter variable">--dest</span> <span class="token operator">&lt;</span>dest<span class="token operator">&gt;</span>      Set the directory build output <span class="token punctuation">(</span>default: .vuepress/dist<span class="token punctuation">)</span> 
  -t, <span class="token parameter variable">--temp</span> <span class="token operator">&lt;</span>temp<span class="token operator">&gt;</span>      Set the directory of the temporary files 
  <span class="token parameter variable">--cache</span> <span class="token operator">&lt;</span>cache<span class="token operator">&gt;</span>        Set the directory of the cache files 
  --clean-temp           Clean the temporary files before build 
  --clean-cache          Clean the cache files before build 
  <span class="token parameter variable">--debug</span>                Enable debug mode 
  -v, <span class="token parameter variable">--version</span>          Display version number 
  -h, <span class="token parameter variable">--help</span>             Display this message
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">prompt</p><p>Options set by CLI will override those options with the same name in your config file.</p></div><h2 id="info" tabindex="-1"><a class="header-anchor" href="#info" aria-hidden="true">#</a> info</h2><p>Outputs information about your system and dependencies.</p><p>This command would be helpful when you want to check your environment or report an issue.</p>`,5);function x(D,S){const l=t("NpmBadge"),n=t("ExternalLinkIcon"),o=t("RouterLink");return p(),c("div",null,[v,s(l,{package:"@vuepress/cli"}),a("p",null,[e("VuePress CLI is provided by "),a("a",m,[e("@vuepress/cli"),s(n)]),e(" package. It is included by the "),a("a",b,[e("vuepress"),s(n)]),e(" package, and you can also install it separately.")]),h,a("div",k,[f,a("p",null,[e("VuePress is using "),a("a",g,[e("debug"),s(n)]),e(" module.")]),_]),y,a("p",null,[e("Build your VuePress site to static files, which are ready for "),s(o,{to:"/en-US/guide/deployment.html"},{default:d(()=>[e("deployment")]),_:1}),e(".")]),w])}const B=r(u,[["render",x],["__file","cli.html.vue"]]);export{B as default};
