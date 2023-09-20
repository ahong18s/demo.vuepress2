import{_ as t,h as c,o as a,c as r,a as e,t as l,d as v,w as u,e as o,i as m}from"./app-8ceb8f5d.js";const p=o(`<h1 id="markdown-与-vue-sfc" tabindex="-1"><a class="header-anchor" href="#markdown-与-vue-sfc" aria-hidden="true">#</a> Markdown 与 Vue SFC</h1><p>每一个 Markdown 文件，首先都会编译为 HTML ，然后转换为一个 Vue 单文件组件 (SFC) 。换句话说，你可以像写 Vue SFC 一样来写 Markdown 文件：</p><ul><li><code>&lt;script&gt;</code> 和 <code>&lt;style&gt;</code> 标签会直接被当作 Vue SFC 中的标签。换句话说，它们是从 <code>&lt;template&gt;</code> 标签中提升到了 SFC 的顶层。</li><li>所有 <code>&lt;script&gt;</code> 和 <code>&lt;style&gt;</code> 标签的以外的内容，会先被编译为 HTML ，然后被当作 Vue SFC 的 <code>&lt;template&gt;</code> 标签。</li></ul><div class="custom-container warning"><p class="custom-container-title">注意</p><p>由于 Vue 单文件组件只能包含一个 <code>&lt;script&gt;</code> 标签，你应该避免在 VuePress Markdown 中使用多于一个 <code>&lt;script&gt;</code> 标签。</p></div><p>我们来看一个例子：</p><p><strong>输入</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>_你好， {{ msg }}_

&lt;RedDiv&gt;

_当前计数为： {{ count }}_

&lt;/RedDiv&gt;

&lt;button @click=&quot;count++&quot;&gt;点我！&lt;/button&gt;

&lt;script setup&gt;
import { h, ref } from &#39;vue&#39;

const RedDiv = (_, ctx) =&gt; h(
  &#39;div&#39;,
  {
    class: &#39;red-div&#39;,
  },
  ctx.slots.default()
)
const msg = &#39;Markdown 中的 Vue&#39;
const count = ref(0)
&lt;/script&gt;

&lt;style&gt;
.red-div {
  color: red;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p>`,8),b="Markdown 中的 Vue",g={__name:"markdown-and-vue-sfc.html",setup(_){const s=(d,n)=>m("div",{class:"red-div"},n.slots.default()),i=c(0);return(d,n)=>(a(),r("div",null,[p,e("p",null,[e("em",null,"你好， "+l(b))]),v(s,null,{default:u(()=>[e("p",null,[e("em",null,"当前计数为： "+l(i.value),1)])]),_:1}),e("p",null,[e("button",{onClick:n[0]||(n[0]=f=>i.value++)},"点我！")])]))}},k=t(g,[["__file","markdown-and-vue-sfc.html.vue"]]);export{k as default};
