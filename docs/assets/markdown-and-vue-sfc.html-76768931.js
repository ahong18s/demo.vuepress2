import{_ as d,h as a,o as c,c as o,a as e,t as l,d as r,w as u,e as v,i as m}from"./app-8ceb8f5d.js";const p=v(`<h1 id="markdown-and-vue-sfc" tabindex="-1"><a class="header-anchor" href="#markdown-and-vue-sfc" aria-hidden="true">#</a> Markdown and Vue SFC</h1><p>Each Markdown file is first compiled into HTML, and then converted to a Vue SFC. In other words, you can write a Markdown file like a Vue SFC:</p><ul><li>Blocks <code>&lt;script&gt;</code> and <code>&lt;style&gt;</code> are treated as Vue SFC blocks as they are. In other words, they are hoisted from the <code>&lt;template&gt;</code> block to the top-level of SFC.</li><li>Everything outside <code>&lt;script&gt;</code> and <code>&lt;style&gt;</code> will be compiled into HTML, and be treated as Vue SFC <code>&lt;template&gt;</code> block.</li></ul><div class="custom-container warning"><p class="custom-container-title">warning</p><p>As Vue SFC can contain only one <code>&lt;script&gt;</code> element, you should avoid using more than one <code>&lt;script&gt;</code> in VuePress markdown.</p></div><p>Here comes an example:</p><p><strong>Input</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>_Hello, {{ msg }}_

&lt;RedDiv&gt;

_Current count is: {{ count }}_

&lt;/RedDiv&gt;

&lt;button @click=&quot;count++&quot;&gt;Click Me!&lt;/button&gt;

&lt;script setup&gt;
import { h, ref } from &#39;vue&#39;

const RedDiv = (_, ctx) =&gt; h(
  &#39;div&#39;,
  {
    class: &#39;red-div&#39;,
  },
  ctx.slots.default()
)
const msg = &#39;Vue in Markdown&#39;
const count = ref(0)
&lt;/script&gt;

&lt;style&gt;
.red-div {
  color: red;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p>`,8),b="Vue in Markdown",g={__name:"markdown-and-vue-sfc.html",setup(_){const t=(s,n)=>m("div",{class:"red-div"},n.slots.default()),i=a(0);return(s,n)=>(c(),o("div",null,[p,e("p",null,[e("em",null,"Hello, "+l(b))]),r(t,null,{default:u(()=>[e("p",null,[e("em",null,"Current count is: "+l(i.value),1)])]),_:1}),e("p",null,[e("button",{onClick:n[0]||(n[0]=h=>i.value++)},"Click Me!")])]))}},k=d(g,[["__file","markdown-and-vue-sfc.html.vue"]]);export{k as default};
