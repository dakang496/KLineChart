import{_ as e,c as o,o as i,a4 as t}from"./chunks/framework.ZDcuJqHf.js";const m=JSON.parse('{"title":"📠 Change Log","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/guide/changelog.md","filePath":"en-US/guide/changelog.md","lastUpdated":1709481896000}'),a={name:"en-US/guide/changelog.md"},d=t('<h1 id="📠-change-log" tabindex="-1">📠 Change Log <a class="header-anchor" href="#📠-change-log" aria-label="Permalink to &quot;📠 Change Log&quot;">​</a></h1><h2 id="_9-8-0" tabindex="-1">9.8.0 <a class="header-anchor" href="#_9-8-0" aria-label="Permalink to &quot;9.8.0&quot;">​</a></h2><p><code>2024-03-04</code></p><ul><li>🆕 Support custom coordinate axis.</li><li>🆕 Support indicator mapping to future time.</li><li>🆕 Support folding long decimals.</li><li>🆕 Support adding data forward and backward.</li><li>🐞 Fix formatting time issue for different browsers.</li></ul><p><code>2024-01-12</code></p><ul><li>🐞 Fix the issue of ineffective indicator attributes <code>minValue</code> and <code>maxValue</code>.</li><li>🐞 Fix the display issue on the x-axis of the overlay.</li><li>💄 Optimize the display of style <code>candle.type: &#39;ohlc&#39;</code>.</li><li>💄 Optimize drawing clarity.</li></ul><h2 id="_9-7-1" tabindex="-1">9.7.1 <a class="header-anchor" href="#_9-7-1" aria-label="Permalink to &quot;9.7.1&quot;">​</a></h2><p><code>2023-12-18</code></p><ul><li>🐞 Fix indicators and overlays methods not effect error.</li><li>🐞 Fix package manager download node version dependency error.</li></ul><h2 id="_9-7-0" tabindex="-1">9.7.0 <a class="header-anchor" href="#_9-7-0" aria-label="Permalink to &quot;9.7.0&quot;">​</a></h2><p><code>2023-12-12</code></p><ul><li>🆕 Add instance apis<code>setMaxOffsetLeftDistance</code> and <code>setMaxOffsetRightDistance</code>.</li><li>🆕 Add indicator attribute <code>zLevel</code>.</li><li>💄 Optimize the rendering of the ohlc candle bar.</li><li>🐞 Fix the blurry issue with the candle bar.</li><li>🐞 Fix the rendering rules for the <code>zLevel</code> overlay.</li></ul><h2 id="_9-6-0" tabindex="-1">9.6.0 <a class="header-anchor" href="#_9-6-0" aria-label="Permalink to &quot;9.6.0&quot;">​</a></h2><p><code>2023-11-14</code></p><ul><li>🖋️ Refactor the separator module.</li><li>🆕 Chart api <code>init(ds, options)</code>, parameter <code>options</code> add <code>layout</code>.</li><li>🆕 Instance api <code>createIndicator(value, isStack, paneOptions, callback)</code>, parameter <code>PaneOptions</code> add <code>position</code>.</li><li>🆕 Style <code>candle.tooltip.custom</code> adds <code>turnover</code> string template.</li><li>💄 Optimize the style <code>overlay.text</code> configuration.</li><li>💄 Optimize the implementation of <code>utils.clone</code> and <code>utils.merge</code>.</li><li>🐞 Fix the issue of multiple overlay styles display error.</li><li>🐞 Fix the issue of multiple indicator styles display error.</li></ul><h2 id="_9-5-4" tabindex="-1">9.5.4 <a class="header-anchor" href="#_9-5-4" aria-label="Permalink to &quot;9.5.4&quot;">​</a></h2><p><code>2023-09-22</code></p><ul><li>🐞 Fix the issue of not display the latest price line when the style <code>candle.type</code> is <code>area</code>.</li><li>🐞 Fix the issue of incorrect display of the style <code>crosshair.vertical.text.paddingLeft</code>.</li></ul><h2 id="_9-5-3" tabindex="-1">9.5.3 <a class="header-anchor" href="#_9-5-3" aria-label="Permalink to &quot;9.5.3&quot;">​</a></h2><p><code>2023-09-19</code></p><ul><li>🐞 Fix typescript import error.</li></ul><h2 id="_9-5-2" tabindex="-1">9.5.2 <a class="header-anchor" href="#_9-5-2" aria-label="Permalink to &quot;9.5.2&quot;">​</a></h2><p><code>2023-09-18</code></p><ul><li>💄 Optimize the figure <code>text</code>.</li><li>💄 Optimize built-in overlays <code>simpleAnnotation</code> and <code>simpleTag</code>.</li><li>💄 Optimize the free style of technical indicators and support increment.</li><li>🐞 Fix typescript declaration issue.</li></ul><h2 id="_9-5-1" tabindex="-1">9.5.1 <a class="header-anchor" href="#_9-5-1" aria-label="Permalink to &quot;9.5.1&quot;">​</a></h2><p><code>2023-08-14</code></p><ul><li>🆕 Add chart api <code>getOverlayClass</code>.</li><li>🆕 Style configuration <code>candle.tooltip.custom</code> add built-in support <code>change</code>.</li><li>💄 Optimize figure <code>rect</code> event trigger.</li><li>↩️ Separator event trigger optimization rollback.</li></ul><h2 id="_9-5-0" tabindex="-1">9.5.0 <a class="header-anchor" href="#_9-5-0" aria-label="Permalink to &quot;9.5.0&quot;">​</a></h2><p><code>2023-06-15</code></p><ul><li>🆕 <code>Overlay</code> add event <code>onDoubleClick</code>, add property <code>modeSensitivity</code>.</li><li>🆕 Style configuration <code>candle.tooltip.custom</code> supports string templates.</li><li>🐞 Optimize the scrolling frame drop issue on the mobile side.</li><li>🐞 Fix pane id naming typo.</li><li>💄 Optimize the response sensitivity of dividing line events.</li><li>💄 Optimize the attrs type declaration in OverlayFigure under typescript.</li></ul><h2 id="_9-4-0" tabindex="-1">9.4.0 <a class="header-anchor" href="#_9-4-0" aria-label="Permalink to &quot;9.4.0&quot;">​</a></h2><p><code>2023-05-25</code></p><ul><li>🆕 Instance API &#39;createOverlay&#39; supports arrays.</li><li>🆕 <code>overlay</code> add attributes <code>paneId</code>, <code>defaultZLevel</code> and <code>zLevel</code>.</li><li>🆕 <code>xAxis</code> add methods <code>convertTimestampFromPixel</code> and <code>convertTimestampToPixel</code>.</li><li>💄 Optimize the display of candle.</li></ul><h2 id="_9-3-0" tabindex="-1">9.3.0 <a class="header-anchor" href="#_9-3-0" aria-label="Permalink to &quot;9.3.0&quot;">​</a></h2><p><code>2023-05-13</code></p><ul><li>🆕 Add chart API <code>utils.calcTextWidth</code>.</li><li>🆕 The instance APIs <code>createIndicator(value, isStack, options)</code> and <code>setPaneOptions(options)</code> have added <code>options. axisOptions</code>.</li><li>🆕 The indicator graphic configuration supports customization.</li><li>💄 Optimize the bar width ratio.</li><li>💄 Optimize internal acquisition of screen pixel ratio.</li><li>💄 Optimize internal ID generation.</li></ul><h2 id="_9-2-2" tabindex="-1">9.2.2 <a class="header-anchor" href="#_9-2-2" aria-label="Permalink to &quot;9.2.2&quot;">​</a></h2><p><code>2023-05-04</code></p><ul><li>🐞 Fix figure <code>line</code> check event error.</li><li>💄 Optimize type check.</li></ul><h2 id="_9-2-1" tabindex="-1">9.2.1 <a class="header-anchor" href="#_9-2-1" aria-label="Permalink to &quot;9.2.1&quot;">​</a></h2><p><code>2023-04-27</code></p><ul><li>💄 Optimize the default style by changing <code>#EF5350</code> to <code>#F92855</code> and <code>#26A69A</code> to <code>#2DC08E</code>.</li><li>💄 Optimize typescript declarations.</li></ul><h2 id="_9-2-0" tabindex="-1">9.2.0 <a class="header-anchor" href="#_9-2-0" aria-label="Permalink to &quot;9.2.0&quot;">​</a></h2><p><code>2023-04-24</code></p><ul><li>🆕 Add instance API <code>getOffsetRightDistance</code> and <code>executeAction</code>.</li><li>🆕 Add success callback for instance API <code>applyNewData</code>, <code>applyMoreData</code> and <code>updateData</code>.</li><li>🆕 Support the display of thousands.</li><li>🆕 Add style configuration <code>candle.bar.upBorderColor</code>, <code>candle.bar.downBorderColor</code>, <code>candle.bar.noChangeBorderColor</code>, <code>candle.bar.upWickColor</code>, <code>candle.bar.downWickColor</code>, <code>candle.bar.noChangeWickColor</code>, <code>candle.tooltip.rect.position</code> and <code>candle.tooltip.rect.offsetBottom</code>.</li><li>🆕 Add <code>realFrom</code> and <code>realTo</code> to all <code>visibleRange</code>.</li><li>💄 Optimize API, <code>klinecharts.utils.isValid</code> and <code>klinecharts.utils.formatBigNumber</code>.</li><li>💄 Optimize the log output in the development environment.</li></ul><h2 id="_9-1-3" tabindex="-1">9.1.3 <a class="header-anchor" href="#_9-1-3" aria-label="Permalink to &quot;9.1.3&quot;">​</a></h2><p><code>2023-04-15</code></p><ul><li>🐞 Fix the issue of not refreshing when the input parameter of the chart API <code>applyNewData</code> is an empty array.</li><li>🐞 Fix the issue of cross cursor text not displaying on the y-axis when there is no data.</li><li>💄 Optimize the display of area chart.</li><li>💄 Optimize coverage event callback parameters and add <code>figureKey</code> and <code>figureIndex</code>.</li><li>💄 Optimize typescript overlay style types, as well as base types <code>DeepPartial</code> and <code>DeepRequired</code>.</li></ul><h2 id="_9-1-2" tabindex="-1">9.1.2 <a class="header-anchor" href="#_9-1-2" aria-label="Permalink to &quot;9.1.2&quot;">​</a></h2><p><code>2023-04-10</code></p><ul><li>🐞 Fix the issue of inaccurate triggering events for the built-in figure <code>line</code>.</li><li>🐞 Fix the issue of triggering events for the first time after the <code>simpleAnnotation</code> and <code>simpleTag</code> built-in overlays are drawn.</li><li>💄 Optimize overlay figure to ignore events and support event selection.</li></ul><h2 id="_9-1-1" tabindex="-1">9.1.1 <a class="header-anchor" href="#_9-1-1" aria-label="Permalink to &quot;9.1.1&quot;">​</a></h2><p><code>2023-03-14</code></p><ul><li>🐞 Fix the invalidity of the built-in figure <code>arc</code>.</li><li>💄 Optimize rendering updates.</li></ul><h2 id="_9-1-0" tabindex="-1">9.1.0 <a class="header-anchor" href="#_9-1-0" aria-label="Permalink to &quot;9.1.0&quot;">​</a></h2><p><code>2023-02-23</code></p><ul><li>🆕 The chart instance method <code>subscribeAction</code> and <code>unsubscribeAction</code> types add <code>onCandleBarClick</code>.</li><li>🆕 The overlay supports double-clicking to force the end of drawing.</li><li>💄 Optimize event handling.</li></ul><h2 id="_9-0-1" tabindex="-1">9.0.1 <a class="header-anchor" href="#_9-0-1" aria-label="Permalink to &quot;9.0.1&quot;">​</a></h2><p><code>2023-02-17</code> 🐞 Fix the introduction of typescript.</p><h2 id="_9-0-0" tabindex="-1">9.0.0 <a class="header-anchor" href="#_9-0-0" aria-label="Permalink to &quot;9.0.0&quot;">​</a></h2><p><code>2023-02-16</code></p><ul><li>🛠 Typescript refactoring.</li><li>🆕 New features <ul><li>Add Y axis direction zoom and scroll.</li><li>API <ul><li>New chart methods <code>registerFigure</code>, <code>getSupportFigures</code>, <code>getFigureClass</code>, <code>rigiderOverlay</code>, <code>getSupportOverlays</code>, <code>registerLocale</code>, <code>getSupportLocales</code>, <code>registerStyles</code> are added.</li><li>New instance methods, <code>getSize</code>, <code>setLocale</code>, <code>getLocal</code>, <code>setCustomApi</code>, <code>getVisibleRange</code>, <code>createOverlay</code>, <code>getOverlayById</code>, <code>overrideOverlay</code>, <code>removeOverlay</code>.</li></ul></li><li>Style Configuration <ul><li>Add <code>candle.priceMark.last.text.borderStyle</code>, <code>candle.tooltip.icons</code>, <code>indicator.lastValueMark.text.borderStyle</code>, <code>indicator.tooltip.icons</code>, <code>crosshair.horizontal. text.borderStyle</code>, <code>crosshair.vertical.text.borderStyle</code>.</li></ul></li></ul></li><li>👉 Change <ul><li>API <ul><li>Chart method <code>extension.addTechnicalIndicatorTemplate</code> is changed to <code>registerIndicator</code>.</li><li>Chart method <code>extension.addShapeTemplate</code> is changed to <code>registerOverlay</code>.</li><li>Instance method <code>setStyleOptions</code> is changed to <code>setStyles</code>.</li><li>Instance method <code>getStyleOptions</code> is changed to <code>getStyles</code>.</li><li>Instance method <code>setPaneOptions(options)</code>, <code>options</code> add new attribute <code>gap</code>.</li><li>Instance method <code>setOffsetRightSpace</code> is changed to <code>setOffsetRightDistance</code>.</li><li>Instance method <code>createTechnicalIndicator</code> is changed to <code>createIndicator</code></li><li>Instance method <code>overlayTechnicalIndicator</code> is changed to <code>overrideIndicator</code>.</li><li>Instance method <code>getTechnicalIndicatorByPaneId</code> is changed to <code>getIndicatorByPaneId</code>.</li><li>Instance method <code>removeTechnicalIndicator</code> is changed to <code>removeIndicator</code>.</li></ul></li><li>Style Configuration <ul><li>All <code>line.style</code> options are changed to <code>solid</code> and <code>dashed</code>.</li><li>All <code>dashValue</code> is changed to <code>dashedValue</code>.</li><li><code>xAxis.height</code> is changed to <code>xAxis.size</code>, <code>xAxis.tickeText.paddingTop</code> is changed to <code>xAxis.tickeText.marinStart</code>, and <code>xAxis.tickeText.paddingBottom</code> is changed to <code>xAxis.tickeText.marinEnd</code>.</li><li><code>yAxis.height</code> is changed to <code>yAxis.size</code>, <code>yAxis.tickeText.paddingTop</code> is changed to <code>yAxis.tickeText.marinStart</code>, and <code>yAxis.tickeText.paddingBottom</code> is changed to <code>yAxis.tickeText.marinEnd</code>.</li><li><code>technicalIndicator.bar</code> is changed to <code>indicator.bars</code>, <code>technicalIndicator.line</code> is changed to <code>indicator.lines</code>，<code>technicalIndicator.circle</code> is changed to <code>indicator.circles</code></li></ul></li><li>Custom Extension <ul><li>The technical indicator attribute <code>calcParams</code> has been changed to support any type.</li><li>The technical indicator attribute <code>plots</code> is changed to <code>figures</code>.</li><li>The technical indicator attribute <code>regeneratePlots</code> is changed to&#39; regeneratefigures&#39;.</li><li>The technical indicator attribute <code>calcTechnicalIndicator</code> is changed to <code>calc</code>.</li><li>The technical indicator attribute <code>render</code> is changed to &#39;draw&#39;.</li></ul></li></ul></li><li>🗑 Abandonment <ul><li>API <ul><li>Delete instance methods <code>getWidth</code>, <code>getHeight</code>, and use <code>getSize</code> instead.</li><li>Delete instance methods <code>createShape</code>, <code>createAnnotation</code>, <code>createTag</code>, and use <code>createOverlay</code> instead.</li><li>Delete instance methods <code>removeShape</code>, <code>removeAnnotation</code>, <code>removeTag</code>. Use <code>removeOverlay</code> instead.</li><li>Delete the instance method <code>setShapeOptions</code> and use <code>overrideOverlay</code> instead.</li><li>Delete instance methods <code>createHtml</code>, <code>removeHtml</code>, <code>addTechnicalIndicatorTemplate</code>, <code>getTechnicalIndicatorTemplate</code>, <code>addShapeTemplate</code>.</li></ul></li><li>Style Configuration <ul><li>Delete <code>shape</code>, <code>annotation</code>, <code>tag</code> and use <code>overlay</code> instead.</li><li>Delete <code>candle.margin</code>，<code>technicalIndicator.margin</code>。</li></ul></li><li>Custom Extension <ul><li>The related attributes are no longer saved in the technical indicator template.</li><li>Delete <code>Shape</code> and use <code>Overlay</code> instead.</li></ul></li></ul></li></ul><h2 id="_8-x" tabindex="-1">8.x <a class="header-anchor" href="#_8-x" aria-label="Permalink to &quot;8.x&quot;">​</a></h2><p>Go to <a href="https://github.com/liihuu/KLineChart/blob/v8.6.3/docs/en/changelog.md" target="_blank" rel="noreferrer">Github</a> to check the change log for 8.x.</p><h2 id="_7-x" tabindex="-1">7.x <a class="header-anchor" href="#_7-x" aria-label="Permalink to &quot;7.x&quot;">​</a></h2><p>Go to <a href="https://github.com/liihuu/KLineChart/blob/v7.5.0/docs/en/changelog.md" target="_blank" rel="noreferrer">Github</a> to check the change log for 7.x.</p><h2 id="_6-x" tabindex="-1">6.x <a class="header-anchor" href="#_6-x" aria-label="Permalink to &quot;6.x&quot;">​</a></h2><p>Go to <a href="https://github.com/liihuu/KLineChart/blob/v6.1.0/docs/en/CHANGELOG.md" target="_blank" rel="noreferrer">Github</a> to check the change log for 6.x.</p><h2 id="_5-x" tabindex="-1">5.x <a class="header-anchor" href="#_5-x" aria-label="Permalink to &quot;5.x&quot;">​</a></h2><p>Go to <a href="https://github.com/liihuu/KLineChart/releases/tag/v5.0.0" target="_blank" rel="noreferrer">Github</a> to view the 5.x release notes.</p><h2 id="_4-x" tabindex="-1">4.x <a class="header-anchor" href="#_4-x" aria-label="Permalink to &quot;4.x&quot;">​</a></h2><p>Go to <a href="https://github.com/liihuu/KLineChart/releases/tag/v4.0.0" target="_blank" rel="noreferrer">Github</a> to view the 4.x release notes.</p>',72),c=[d];function l(r,n,s,h,u,p){return i(),o("div",null,c)}const f=e(a,[["render",l]]);export{m as __pageData,f as default};