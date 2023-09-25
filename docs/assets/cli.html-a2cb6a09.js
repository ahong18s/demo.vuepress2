import{_ as t,r as a,o as c,c as o,d as n,a as i,b as e,w as v,e as l}from"./app-09910f35.js";const u={},p=i("h1",{id:"命令行接口",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#命令行接口","aria-hidden":"true"},"#"),e(" 命令行接口")],-1),m={href:"https://www.npmjs.com/package/@vuepress/cli",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},b=l(`<p>执行 <code>vuepress --help</code> 来获取下列帮助信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Usage:
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),f={class:"custom-container tip"},g=i("p",{class:"custom-container-title"},"提示",-1),_={href:"https://www.npmjs.com/package/debug",target:"_blank",rel:"noopener noreferrer"},y=i("p",null,[e("设置环境变量 "),i("code",null,"DEBUG=vuepress*"),e(" 可以启用调试日志。")],-1),w=l(`<h2 id="dev" tabindex="-1"><a class="header-anchor" href="#dev" aria-hidden="true">#</a> dev</h2><p>启动一个开发服务器，在本地开发你的 VuePress 站点。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Usage:
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>通过命令行设置的配置项，会覆盖你配置文件中的同名配置项。</p></div><h2 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> build</h2>`,5),x=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Usage:
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>通过命令行设置的配置项，会覆盖你配置文件中的同名配置项。</p></div><h2 id="info" tabindex="-1"><a class="header-anchor" href="#info" aria-hidden="true">#</a> info</h2><p>输出当前系统和依赖相关的信息。</p><p>在你想要检查你的环境，或者提交 Issue 时候，可以使用该命令。</p>`,5);function k(D,S){const d=a("NpmBadge"),s=a("ExternalLinkIcon"),r=a("RouterLink");return c(),o("div",null,[p,n(d,{package:"@vuepress/cli"}),i("p",null,[e("VuePress 命令行接口是由 "),i("a",m,[e("@vuepress/cli"),n(s)]),e(" 包提供的。它包含在 "),i("a",h,[e("vuepress"),n(s)]),e(" 包之中，当然你也可以单独安装它。")]),b,i("div",f,[g,i("p",null,[e("VuePress 使用了 "),i("a",_,[e("debug"),n(s)]),e(" 模块。")]),y]),w,i("p",null,[e("将你的 VuePress 站点构建成静态文件，以便你进行后续"),n(r,{to:"/guide/deployment.html"},{default:v(()=>[e("部署")]),_:1}),e("。")]),x])}const B=t(u,[["render",k],["__file","cli.html.vue"]]);export{B as default};
