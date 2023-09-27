import{_ as t,r as p,o as c,c as r,a as n,b as s,d as a,w as e,e as o}from"./app-27037075.js";const D={},d=n("h1",{id:"writing-a-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#writing-a-plugin","aria-hidden":"true"},"#"),s(" Writing a Plugin")],-1),u={class:"custom-container tip"},y=n("p",{class:"custom-container-title"},"prompt",-1),v=n("h2",{id:"create-a-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#create-a-plugin","aria-hidden":"true"},"#"),s(" Create a Plugin")],-1),h=n("em",null,"Plugin Object",-1),m=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">fooPlugin</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">name:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress-plugin-foo&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// ...</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),b=n("em",null,"Plugin Object",-1),g=n("em",null,"Plugin Function",-1),_=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">barPlugin</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">name:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress-plugin-bar&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// ...</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A plugin usually needs to allow user options, so we typically provide users with a function to receive options, and returns a <em>Plugin Object</em> or a <em>Plugin Function</em>. Then your plugin should be converted like this:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">fooPlugin</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">name:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress-plugin-foo&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// ...</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">barPlugin</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">name:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress-plugin-bar&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// ...</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="publish-to-npm" tabindex="-1"><a class="header-anchor" href="#publish-to-npm" aria-hidden="true">#</a> Publish to NPM</h2>`,4),C={href:"https://docs.npmjs.com/cli/v8/configuring-npm/package-json",target:"_blank",rel:"noopener noreferrer"},f=o(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vuepress-plugin-foo&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;keywords&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&quot;vuepress-plugin&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),E=n("code",null,"name",-1),k=n("code",null,"vuepress-plugin-xxx",-1),x=n("code",null,"@org/vuepress-plugin-xxx",-1),P=n("em",null,"Plugin Object",-1),w=n("li",null,[s("Set "),n("code",null,"keywords"),s(" to include "),n("code",null,"vuepress-plugin"),s(", so that users can search your plugin on NPM.")],-1);function A(F,j){const l=p("RouterLink"),i=p("ExternalLinkIcon");return c(),r("div",null,[d,n("div",u,[y,n("p",null,[s("Before reading this guide, you'd better learn the VuePress "),a(l,{to:"/en-US/advanced/architecture.html"},{default:e(()=>[s("architecture")]),_:1}),s(" first.")])]),v,n("p",null,[s("A plugin should be a plain JavaScript object that satisfies the "),a(l,{to:"/en-US/reference/plugin-api.html"},{default:e(()=>[s("Plugin API")]),_:1}),s(", which is called a "),h,s(":")]),m,n("p",null,[s("A plugin could also be a function that receives the "),a(l,{to:"/en-US/reference/node-api.html#app"},{default:e(()=>[s("app instance")]),_:1}),s(" as the param and returns a "),b,s(", which is called a "),g,s(":")]),_,n("p",null,[s("After creating a plugin, you should follow some conventions in the "),n("a",C,[s("package.json"),a(i)]),s(" file before publishing it to NPM:")]),f,n("ul",null,[n("li",null,[s("Set "),E,s(" to follow the naming convention, i.e. "),k,s(" or "),x,s(", which should be consistent with the "),a(l,{to:"/en-US/reference/plugin-api.html#name"},{default:e(()=>[s("name")]),_:1}),s(" field of the "),P,s(".")]),w])])}const S=t(D,[["render",A],["__file","plugin.html.vue"]]);export{S as default};