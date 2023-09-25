import{_ as d,r as o,o as l,c as r,a as i,b as e,d as s,w as a,e as t}from"./app-09910f35.js";const c={},p=i("h1",{id:"passing-data-to-client-code",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#passing-data-to-client-code","aria-hidden":"true"},"#"),e(" Passing Data to Client Code")],-1),u=i("p",null,"As we know, VuePress plugin entries and theme entries are processed in Node side, but sometimes you might need to pass data to client side. For example, you want to generate different data when users use different options.",-1),m=i("h2",{id:"use-define-hook",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#use-define-hook","aria-hidden":"true"},"#"),e(" Use "),i("code",null,"define"),e(" Hook")],-1),v=t(`<p>First, define some constants in <code>define</code> hook:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default (options) =&gt; ({
  define: {
    __FOO__: options.foo || &#39;str&#39;,
    __OBJ__: {
      bar: options.bar || 123,
    },
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then use them in client code directly:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>const foo = __FOO__
const obj = __OBJ__
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>If you are using TypeScript in client code, you may need to declare the types of the global constants manually:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>declare const __FOO__: string
declare const __OBJ__: { bar: number }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="write-and-load-temp-files" tabindex="-1"><a class="header-anchor" href="#write-and-load-temp-files" aria-hidden="true">#</a> Write and Load Temp Files</h2><p>If you need to achieve some more complex features, you can write temp files and load them dynamically in client code.</p>`,8),f=i("code",null,"foo.js",-1),h=t(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>export default (options) =&gt; ({
  async onPrepared(app) {
    // write temp file
    await app.writeTemp(&#39;foo.js&#39;, \`export const foo = \${JSON.stringify(options.foo)}\`)
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, load the temp file via <code>@temp</code> alias in client code:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>import { foo } from &#39;@temp/foo&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you are using TypeScript in client code, you may need to declare the type of the temp module manually:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>declare module &#39;@temp/foo&#39; {
  export const foo: string
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function _(b,g){const n=o("RouterLink");return l(),r("div",null,[p,u,m,i("p",null,[e("Plugin API provides a "),s(n,{to:"/en-US/reference/plugin-api.html#define"},{default:a(()=>[e("define")]),_:1}),e(" hook to define global constants for client code. You can make use of it to pass data to client.")]),v,i("p",null,[e("First, write a temp file "),f,e(", which will be generated in the "),s(n,{to:"/en-US/reference/config.html#temp"},{default:a(()=>[e("temp")]),_:1}),e(" directory:")]),h])}const x=d(c,[["render",_],["__file","passing-data-to-client-code.html.vue"]]);export{x as default};
