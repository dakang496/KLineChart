import{_ as a,c as t,o as e,N as o}from"./chunks/framework.a087d028.js";const f=JSON.parse('{"title":"🙋 FAQ","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/guide/faq.md"}'),n={name:"en-US/guide/faq.md"},s=o(`<h1 id="🙋-faq" tabindex="-1">🙋 FAQ <a class="header-anchor" href="#🙋-faq" aria-label="Permalink to &quot;🙋 FAQ&quot;">​</a></h1><h2 id="after-the-chart-is-initialized-only-one-line-can-be-seen" tabindex="-1">After the chart is initialized, only one line can be seen? <a class="header-anchor" href="#after-the-chart-is-initialized-only-one-line-can-be-seen" aria-label="Permalink to &quot;After the chart is initialized, only one line can be seen?&quot;">​</a></h2><p>The chart always fills the container, checking to see if the container has height.</p><h2 id="the-candle-shows-a-line-no-fluctuation-what-to-do" tabindex="-1">The candle shows a line, no fluctuation, what to do? <a class="header-anchor" href="#the-candle-shows-a-line-no-fluctuation-what-to-do" aria-label="Permalink to &quot;The candle shows a line, no fluctuation, what to do?&quot;">​</a></h2><p>Chart default price precision is two decimal, call <code>setPriceVolumePrecision(pricePrecision, volumePrecision)</code> to set the precision.</p><h2 id="how-to-create-a-real-time-chart" tabindex="-1">How to create a real-time chart? <a class="header-anchor" href="#how-to-create-a-real-time-chart" aria-label="Permalink to &quot;How to create a real-time chart?&quot;">​</a></h2><p>Through style settings.</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">chart</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setStyleOptions</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">candle</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">area</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="built-in-technical-indicators-calculated-data-is-not-what-you-want-how-to-do" tabindex="-1">Built-in technical indicators, calculated data is not what you want, how to do? <a class="header-anchor" href="#built-in-technical-indicators-calculated-data-is-not-what-you-want-how-to-do" aria-label="Permalink to &quot;Built-in technical indicators, calculated data is not what you want, how to do?&quot;">​</a></h2><p>You can override <code>calc</code> by the chart method <code>createIndicator</code> or <code>overrideIndicator</code>.</p><h2 id="what-if-i-want-to-create-an-indicator-other-than-the-built-in-technical-indicator" tabindex="-1">What if I want to create an indicator other than the built-in technical indicator? <a class="header-anchor" href="#what-if-i-want-to-create-an-indicator-other-than-the-built-in-technical-indicator" aria-label="Permalink to &quot;What if I want to create an indicator other than the built-in technical indicator?&quot;">​</a></h2><p>Charts support custom technical indicators, see <a href="./indicator.html">indicators</a> for details.</p><h2 id="want-to-mark-the-point-of-sale-how-should-do" tabindex="-1">Want to mark the point of sale, how should do? <a class="header-anchor" href="#want-to-mark-the-point-of-sale-how-should-do" aria-label="Permalink to &quot;Want to mark the point of sale, how should do?&quot;">​</a></h2><p>Overlays can be used. The built-in overlay has a <code>simpleAnnotation</code>, which can be created with the chart api <code>createOverlay({ name: &#39;simpleAnnotation&#39;, ... }, paneId)</code>.</p>`,14),i=[s];function l(c,r,h,d,p,u){return e(),t("div",null,i)}const w=a(n,[["render",l]]);export{f as __pageData,w as default};
