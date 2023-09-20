import{_ as r,r as a,o,c,d as n,a as i,b as e,w as u,e as l}from"./app-8ceb8f5d.js";const v={},p=i("h1",{id:"command-line-interface",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#command-line-interface","aria-hidden":"true"},"#"),e(" Command Line Interface")],-1),m={href:"https://www.npmjs.com/package/@vuepress/cli",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},b=l(`<p>Run <code>vuepress --help</code> to get following help messages:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Usage:
  $ vuepress &lt;command&gt; [options]

Commands:
  dev [sourceDir]    Start development server
  build [sourceDir]  Build to static site
  info               Display environment information

For more info, run any command with the \`--help\` flag:
  $ vuepress dev --help
  $ vuepress build --help
  $ vuepress info --help

Options:
  -v, --version  Display version number 
  -h, --help     Display this message 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),f={class:"custom-container tip"},g=i("p",{class:"custom-container-title"},"prompt",-1),_={href:"https://www.npmjs.com/package/debug",target:"_blank",rel:"noopener noreferrer"},y=i("p",null,[e("Set environment variable "),i("code",null,"DEBUG=vuepress*"),e(" to enable debug logs.")],-1),w=l(`<h2 id="dev" tabindex="-1"><a class="header-anchor" href="#dev" aria-hidden="true">#</a> dev</h2><p>Start a development server to develop your VuePress site locally.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Usage:
  $ vuepress dev [sourceDir]

Options:
  -c, --config &lt;config&gt;  Set path to config file 
  -p, --port &lt;port&gt;      Use specified port (default: 8080) 
  -t, --temp &lt;temp&gt;      Set the directory of the temporary files 
  --host &lt;host&gt;          Use specified host (default: 0.0.0.0) 
  --cache &lt;cache&gt;        Set the directory of the cache files 
  --clean-temp           Clean the temporary files before dev 
  --clean-cache          Clean the cache files before dev 
  --open                 Open browser when ready 
  --debug                Enable debug mode 
  --no-watch             Disable watching page and config files (default: true)
  -v, --version          Display version number 
  -h, --help             Display this message
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">prompt</p><p>Options set by CLI will override those options with the same name in your config file.</p></div><h2 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> build</h2>`,5),k=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Usage:
  $ vuepress build [sourceDir]

Options:
  -c, --config &lt;config&gt;  Set path to config file 
  -d, --dest &lt;dest&gt;      Set the directory build output (default: .vuepress/dist) 
  -t, --temp &lt;temp&gt;      Set the directory of the temporary files 
  --cache &lt;cache&gt;        Set the directory of the cache files 
  --clean-temp           Clean the temporary files before build 
  --clean-cache          Clean the cache files before build 
  --debug                Enable debug mode 
  -v, --version          Display version number 
  -h, --help             Display this message
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">prompt</p><p>Options set by CLI will override those options with the same name in your config file.</p></div><h2 id="info" tabindex="-1"><a class="header-anchor" href="#info" aria-hidden="true">#</a> info</h2><p>Outputs information about your system and dependencies.</p><p>This command would be helpful when you want to check your environment or report an issue.</p>`,5);function x(D,S){const t=a("NpmBadge"),s=a("ExternalLinkIcon"),d=a("RouterLink");return o(),c("div",null,[p,n(t,{package:"@vuepress/cli"}),i("p",null,[e("VuePress CLI is provided by "),i("a",m,[e("@vuepress/cli"),n(s)]),e(" package. It is included by the "),i("a",h,[e("vuepress"),n(s)]),e(" package, and you can also install it separately.")]),b,i("div",f,[g,i("p",null,[e("VuePress is using "),i("a",_,[e("debug"),n(s)]),e(" module.")]),y]),w,i("p",null,[e("Build your VuePress site to static files, which are ready for "),n(d,{to:"/en-US/guide/deployment.html"},{default:u(()=>[e("deployment")]),_:1}),e(".")]),k])}const B=r(v,[["render",x],["__file","cli.html.vue"]]);export{B as default};
