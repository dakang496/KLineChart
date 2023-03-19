import{_ as s,c as a,o as n,N as e}from"./chunks/framework.a087d028.js";const u=JSON.parse('{"title":"📚 Data","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/guide/datasource.md"}'),l={name:"en-US/guide/datasource.md"},p=e(`<h1 id="📚-data" tabindex="-1">📚 Data <a class="header-anchor" href="#📚-data" aria-label="Permalink to &quot;📚 Data&quot;">​</a></h1><p>The data required for the chart must be in a fixed format. Through the chart API <a href="./instance-api.html#applynewdata-datalist-more">applyNewData(dataList, more)</a>, <a href="./instance-api.html#applymoredatadatalist-more">applyMoreData(dataList, more)</a> and <a href="./instance-api.html#updatedatadata">updateData(data)</a> to interact data with the chart.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Timestamp, millisecond, required fields</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">timestamp</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Open price, required fields</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">open</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Close price, required field</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">close</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Highest price, required field</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">high</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Lowest price, required field</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">low</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// volume, optional field</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">volume</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Turnover, a non-required field, if you need to display the technical indicators &#39;EMV&#39; and &#39;AVP&#39;, you need to fill this field with data.</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">turnover</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">number</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,4),t=[p];function o(c,r,i,y,F,d){return n(),a("div",null,t)}const h=s(l,[["render",o]]);export{u as __pageData,h as default};
