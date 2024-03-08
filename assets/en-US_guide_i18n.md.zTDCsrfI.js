import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.ZDcuJqHf.js";const D=JSON.parse('{"title":"🌏 Internationalization","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/guide/i18n.md","filePath":"en-US/guide/i18n.md","lastUpdated":1699374419000}'),e={name:"en-US/guide/i18n.md"},h=n(`<h1 id="🌏-internationalization" tabindex="-1">🌏 Internationalization <a class="header-anchor" href="#🌏-internationalization" aria-label="Permalink to &quot;🌏 Internationalization&quot;">​</a></h1><p>Currently, the chart has two built-in <code>en-US</code> and <code>zh-CN</code>. The default language is <code>en-US</code>. If you need to use other languages, you can refer to the following scheme.</p><h2 id="adding-new-language" tabindex="-1">Adding new language <a class="header-anchor" href="#adding-new-language" aria-label="Permalink to &quot;Adding new language&quot;">​</a></h2><p>Adding new language is accomplished through <code>klinecharts.registerLocale(key, locales)</code>.</p><p>For example, to add traditional Chinese language, you can do this,</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes material-theme-palenight github-light vp-code"><code><span class="line"><span style="--shiki-dark:#BABED8;--shiki-light:#24292E;">klinecharts</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#82AAFF;--shiki-light:#6F42C1;">registerLocale</span><span style="--shiki-dark:#BABED8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;">&#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#032F62;">zh-HK</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;">&#39;</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">,</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#24292E;">  time</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#032F62;">時間：</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;">&#39;</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#24292E;">  open</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#032F62;">開：</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;">&#39;</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#24292E;">  high</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#032F62;">高：</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;">&#39;</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#24292E;">  low</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#032F62;">低：</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;">&#39;</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#24292E;">  close</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#032F62;">收：</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;">&#39;</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#24292E;">  volume</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#032F62;">成交量：</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;">&#39;</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#24292E;">  turnover</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#032F62;">成交額：</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;">&#39;</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#24292E;">  change</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#032F62;">漲幅：</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">}</span><span style="--shiki-dark:#BABED8;--shiki-light:#24292E;">)</span></span></code></pre></div><h2 id="use-new-language" tabindex="-1">Use new language <a class="header-anchor" href="#use-new-language" aria-label="Permalink to &quot;Use new language&quot;">​</a></h2><p>After adding new language, you can complete language switching through the chart API <code>init(options)</code> or <code>setLocale(key)</code>.</p>`,8),t=[h];function l(k,p,d,r,F,g){return a(),i("div",null,t)}const c=s(e,[["render",l]]);export{D as __pageData,c as default};