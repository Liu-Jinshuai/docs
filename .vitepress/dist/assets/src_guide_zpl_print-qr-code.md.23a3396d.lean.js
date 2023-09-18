import{_ as e,v as p,b as l,F as a,L as s,t as o,R as t,M as r}from"./chunks/framework.cfa95d4c.js";const f=JSON.parse('{"title":"print QR code","description":"","frontmatter":{},"headers":[],"relativePath":"src/guide/zpl/print-qr-code.md","filePath":"src/guide/zpl/print-qr-code.md"}'),c={name:"src/guide/zpl/print-qr-code.md"},i={id:"print-qr-code",tabindex:"-1"},D=a("a",{class:"header-anchor",href:"#print-qr-code","aria-label":'Permalink to "print QR code <Badge type="danger" text="beta" />"'},"​",-1),F=t(`<h2 id="use" tabindex="-1">use <a class="header-anchor" href="#use" aria-label="Permalink to &quot;use&quot;">​</a></h2><ul><li><a href="/printeaseDocs/src/api/zpl.html#init">init</a>: init the command</li><li><a href="/printeaseDocs/src/api/zpl.html#setqrcode">setQRCode</a>: This command is used to print the QR code</li><li><a href="/printeaseDocs/src/api/zpl.html#setprint">setPrint</a>: execute print</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> printease </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">printease</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> zpl </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> printease</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">zpl</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ZplLib</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">zpl</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">init</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">zpl</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setQRCode</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123456789</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">zpl</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setPrint</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(zpl</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getBuffer</span><span style="color:#A6ACCD;">())</span></span></code></pre></div>`,3);function y(C,d,A,h,m,u){const n=r("Badge");return p(),l("div",null,[a("h1",i,[s("print QR code "),o(n,{type:"danger",text:"beta"}),s(),D]),F])}const g=e(c,[["render",y]]);export{f as __pageData,g as default};