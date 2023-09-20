import{_ as t,r,o,c as l,a as i,b as e,d as s,w as d,e as a}from"./app-8ceb8f5d.js";const c={},p=i("h1",{id:"向客户端代码传递数据",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#向客户端代码传递数据","aria-hidden":"true"},"#"),e(" 向客户端代码传递数据")],-1),u=i("p",null,"我们知道，VuePress 插件入口和主题入口是在 Node 端处理的，但有时候你可能需要向客户端动态传递数据。例如，你希望在用户传入不同的选项时生成不同的数据。",-1),v=i("h2",{id:"使用-define-hook",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#使用-define-hook","aria-hidden":"true"},"#"),e(" 使用 "),i("code",null,"define"),e(" Hook")],-1),m=a(`<p>首先，通过 <code>define</code> Hook 定义一些常量：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default (options) =&gt; ({
  define: {
    __FOO__: options.foo || &#39;str&#39;,
    __OBJ__: {
      bar: options.bar || 123,
    },
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在客户端代码中直接使用它们：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>const foo = __FOO__
const obj = __OBJ__
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你在客户端代码中使用 TypeScript ，你可能需要手动声明这些全局常量的类型：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>declare const __FOO__: string
declare const __OBJ__: { bar: number }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="写入并加载临时文件" tabindex="-1"><a class="header-anchor" href="#写入并加载临时文件" aria-hidden="true">#</a> 写入并加载临时文件</h2><p>如果你需要实现一些更复杂的功能，你可以写入临时文件，并在客户端代码中动态加载它们。</p>`,8),_=i("code",null,"foo.js",-1),b=a(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default (options) =&gt; ({
  async onPrepared(app) {
    // 写入临时文件
    await app.writeTemp(&#39;foo.js&#39;, \`export const foo = \${JSON.stringify(options.foo)}\`)
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在客户端代码中通过 <code>@temp</code> 别名来加载临时文件：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { foo } from &#39;@temp/foo&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你在客户端代码中使用 TypeScript ，你可能需要手动声明这些临时模块的类型：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>declare module &#39;@temp/foo&#39; {
  export const foo: string
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function f(h,g){const n=r("RouterLink");return o(),l("div",null,[p,u,v,i("p",null,[e("插件 API 提供了一个 "),s(n,{to:"/reference/plugin-api.html#define"},{default:d(()=>[e("define")]),_:1}),e(" Hook 来定义客户端代码中的全局常量。你可以利用它来向客户端传递数据。")]),m,i("p",null,[e("首先，写入一个名为 "),_,e(" 的临时文件，它将会生成在 "),s(n,{to:"/reference/config.html#temp"},{default:d(()=>[e("temp")]),_:1}),e(" 目录中：")]),b])}const y=t(c,[["render",f],["__file","passing-data-to-client-code.html.vue"]]);export{y as default};
