window.__EC_DOC_option_brush = {
  "id": {
    "desc": "<p>Component ID, not specified by default. If specified, it can be used to refer the component in option or API.</p>\n"
  },
  "toolbox": {
    "desc": "<p>Use the buttons in toolbox.</p>\n<p>Buttons in toolbox that is related to brush includes:</p>\n<ul>\n<li><code class=\"codespan\">&#39;rect&#39;</code>: for selection-box in rectangle shape;</li>\n<li><code class=\"codespan\">&#39;polygon&#39;</code>: for selection-box in polygon shape;</li>\n<li><code class=\"codespan\">&#39;lineX&#39;</code>: for horizontal selection-box;</li>\n<li><code class=\"codespan\">&#39;lineY&#39;</code>: for vertical selection-box;</li>\n<li><code class=\"codespan\">&#39;keep&#39;</code>: for setting mode between <code class=\"codespan\">single</code> and <code class=\"codespan\">multiple</code> selection, the former of which supports clearing selection on click, and the latter selecting multiple areas;</li>\n<li><code class=\"codespan\">&#39;clear&#39;</code>: for clearing all selections.</li>\n</ul>\n"
  },
  "brushLink": {
    "desc": "<p>Links interaction between selected items in different series.</p>\n<p>Following is an example of enabling selected effect for <code class=\"codespan\">scatter</code> and <code class=\"codespan\">parallel</code> charts once a scatter chart is selected.</p>\n<p><code class=\"codespan\">brushLink</code> is an array of <code class=\"codespan\">seriesIndex</code>es, which assignes the series that can be interacted. For example, it can be:</p>\n<ul>\n<li><code class=\"codespan\">[3, 4, 5]</code> for interacting series with seriesIndex as <code class=\"codespan\">3</code>, <code class=\"codespan\">4</code>, or <code class=\"codespan\">5</code>;</li>\n<li><code class=\"codespan\">&#39;all&#39;</code> for interacting all series;</li>\n<li><code class=\"codespan\">&#39;none&#39;</code>, or <code class=\"codespan\">null</code>, or <code class=\"codespan\">undefined</code> for disabling <code class=\"codespan\">brushLink</code>.</li>\n</ul>\n<p><strong>Attention</strong></p>\n<p><code class=\"codespan\">brushLink</code> is a mapping of <code class=\"codespan\">dataIndex</code>. So <strong><code class=\"codespan\">data</code> of every series with <code class=\"codespan\">brushLink</code> should be guaranteed to correspond to the other</strong>.</p>\n<p>Example:</p>\n<pre><code class=\"lang-javascript\">option = {\n    brush: {\n        brushLink: [0, 1]\n    },\n    series: [\n        {\n            type: &#39;bar&#39;\n            data: [232,    4434,    545,      654]     // data has 4 items\n        },\n        {\n            type: &#39;parallel&#39;,\n            data: [[4, 5], [3, 5], [66, 33], [99, 66]] // data also has 4 items, which correspond to the data above\n        }\n    ]\n};\n</code></pre>\n"
  },
  "seriesIndex": {
    "desc": "<p>Assigns which of the series can use brush selecting, whose value can be:</p>\n<ul>\n<li><code class=\"codespan\">&#39;all&#39;</code>: all series;</li>\n<li><code class=\"codespan\">&#39;Array&#39;</code>: series index array;</li>\n<li><code class=\"codespan\">&#39;number&#39;</code>: certain series index.</li>\n</ul>\n"
  },
  "geoIndex": {
    "desc": "<p>Assigns which of the geo can use brush selecting.</p>\n<p><code class=\"codespan\">brush</code> can be set to be <em>global</em>, or <em>belonging to a particular coordinate</em>.</p>\n<p><strong>Global brushes</strong></p>\n<p>Selecting is enabled for everywhere in ECharts&#39;s instance in this case. This is the default situation, when brush is not set to be global.</p>\n<p><strong>Coordinate brushes</strong></p>\n<p>Selecting is enabled only in the assigned coordinates in this case. Selecting-box will be altered according to scaling and translating of coordinate (see <code class=\"codespan\">roam</code> and <code class=\"codespan\">dataZoom</code>).</p>\n<p>In practice, you may often find coordinate brush to be a more frequently made choice, particularly in <code class=\"codespan\">geo</code> charts.</p>\n<p>By assigning <a href=\"#brush.geoIndex\">brush.geoIndex</a>, or <a href=\"#brush.xAxisIndex\">brush.xAxisIndex</a>, or <a href=\"#brush.yAxisIndex\">brush.yAxisIndex</a>, brush selecting axes can be assigned, whose value can be:</p>\n<ul>\n<li><code class=\"codespan\">&#39;all&#39;</code>: for all axes;</li>\n<li><code class=\"codespan\">number</code>: like <code class=\"codespan\">0</code>, for a particular coordinate with that index;</li>\n<li><code class=\"codespan\">Array</code>: like <code class=\"codespan\">[0, 4, 2]</code>, for coordinates with those indexes;</li>\n<li><code class=\"codespan\">&#39;none&#39;</code>, or <code class=\"codespan\">null</code>, or <code class=\"codespan\">undefined</code>: for not assigning.</li>\n</ul>\n<p>Example:</p>\n<pre><code class=\"lang-javascript\">option = {\n    geo: {\n        ...\n    },\n    brush: {\n        geoIndex: &#39;all&#39;, // brush selecting is enabled only in all geo charts above\n        ...\n    }\n};\n</code></pre>\n<p>Example:</p>\n<pre><code class=\"lang-javascript\">option = {\n    grid: [\n        {...}, // grid 0\n        {...}  // grid 1\n    ],\n    xAxis: [\n        {gridIndex: 1, ...}, // xAxis 0 for grid 1\n        {gridIndex: 0, ...}  // xAxis 1 for grid 0\n    ],\n    yAxis: [\n        {gridIndex: 1, ...}, // yAxis 0 for grid 1\n        {gridIndex: 0, ...}  // yAxis 1 for grid 0\n    ],\n    brush: {\n        xAxisIndex: [0, 1], // brush selecting is enabled only in coordinates with xAxisIndex as `0` or `1`\n        ...\n    }\n};\n</code></pre>\n"
  },
  "xAxisIndex": {
    "desc": "<p>Assigns which of the xAxisIndex can use brush selecting.</p>\n<p><code class=\"codespan\">brush</code> can be set to be <em>global</em>, or <em>belonging to a particular coordinate</em>.</p>\n<p><strong>Global brushes</strong></p>\n<p>Selecting is enabled for everywhere in ECharts&#39;s instance in this case. This is the default situation, when brush is not set to be global.</p>\n<p><strong>Coordinate brushes</strong></p>\n<p>Selecting is enabled only in the assigned coordinates in this case. Selecting-box will be altered according to scaling and translating of coordinate (see <code class=\"codespan\">roam</code> and <code class=\"codespan\">dataZoom</code>).</p>\n<p>In practice, you may often find coordinate brush to be a more frequently made choice, particularly in <code class=\"codespan\">geo</code> charts.</p>\n<p>By assigning <a href=\"#brush.geoIndex\">brush.geoIndex</a>, or <a href=\"#brush.xAxisIndex\">brush.xAxisIndex</a>, or <a href=\"#brush.yAxisIndex\">brush.yAxisIndex</a>, brush selecting axes can be assigned, whose value can be:</p>\n<ul>\n<li><code class=\"codespan\">&#39;all&#39;</code>: for all axes;</li>\n<li><code class=\"codespan\">number</code>: like <code class=\"codespan\">0</code>, for a particular coordinate with that index;</li>\n<li><code class=\"codespan\">Array</code>: like <code class=\"codespan\">[0, 4, 2]</code>, for coordinates with those indexes;</li>\n<li><code class=\"codespan\">&#39;none&#39;</code>, or <code class=\"codespan\">null</code>, or <code class=\"codespan\">undefined</code>: for not assigning.</li>\n</ul>\n<p>Example:</p>\n<pre><code class=\"lang-javascript\">option = {\n    geo: {\n        ...\n    },\n    brush: {\n        geoIndex: &#39;all&#39;, // brush selecting is enabled only in all geo charts above\n        ...\n    }\n};\n</code></pre>\n<p>Example:</p>\n<pre><code class=\"lang-javascript\">option = {\n    grid: [\n        {...}, // grid 0\n        {...}  // grid 1\n    ],\n    xAxis: [\n        {gridIndex: 1, ...}, // xAxis 0 for grid 1\n        {gridIndex: 0, ...}  // xAxis 1 for grid 0\n    ],\n    yAxis: [\n        {gridIndex: 1, ...}, // yAxis 0 for grid 1\n        {gridIndex: 0, ...}  // yAxis 1 for grid 0\n    ],\n    brush: {\n        xAxisIndex: [0, 1], // brush selecting is enabled only in coordinates with xAxisIndex as `0` or `1`\n        ...\n    }\n};\n</code></pre>\n"
  },
  "yAxisIndex": {
    "desc": "<p>Assigns which of the yAxisIndex can use brush selecting.</p>\n<p><code class=\"codespan\">brush</code> can be set to be <em>global</em>, or <em>belonging to a particular coordinate</em>.</p>\n<p><strong>Global brushes</strong></p>\n<p>Selecting is enabled for everywhere in ECharts&#39;s instance in this case. This is the default situation, when brush is not set to be global.</p>\n<p><strong>Coordinate brushes</strong></p>\n<p>Selecting is enabled only in the assigned coordinates in this case. Selecting-box will be altered according to scaling and translating of coordinate (see <code class=\"codespan\">roam</code> and <code class=\"codespan\">dataZoom</code>).</p>\n<p>In practice, you may often find coordinate brush to be a more frequently made choice, particularly in <code class=\"codespan\">geo</code> charts.</p>\n<p>By assigning <a href=\"#brush.geoIndex\">brush.geoIndex</a>, or <a href=\"#brush.xAxisIndex\">brush.xAxisIndex</a>, or <a href=\"#brush.yAxisIndex\">brush.yAxisIndex</a>, brush selecting axes can be assigned, whose value can be:</p>\n<ul>\n<li><code class=\"codespan\">&#39;all&#39;</code>: for all axes;</li>\n<li><code class=\"codespan\">number</code>: like <code class=\"codespan\">0</code>, for a particular coordinate with that index;</li>\n<li><code class=\"codespan\">Array</code>: like <code class=\"codespan\">[0, 4, 2]</code>, for coordinates with those indexes;</li>\n<li><code class=\"codespan\">&#39;none&#39;</code>, or <code class=\"codespan\">null</code>, or <code class=\"codespan\">undefined</code>: for not assigning.</li>\n</ul>\n<p>Example:</p>\n<pre><code class=\"lang-javascript\">option = {\n    geo: {\n        ...\n    },\n    brush: {\n        geoIndex: &#39;all&#39;, // brush selecting is enabled only in all geo charts above\n        ...\n    }\n};\n</code></pre>\n<p>Example:</p>\n<pre><code class=\"lang-javascript\">option = {\n    grid: [\n        {...}, // grid 0\n        {...}  // grid 1\n    ],\n    xAxis: [\n        {gridIndex: 1, ...}, // xAxis 0 for grid 1\n        {gridIndex: 0, ...}  // xAxis 1 for grid 0\n    ],\n    yAxis: [\n        {gridIndex: 1, ...}, // yAxis 0 for grid 1\n        {gridIndex: 0, ...}  // yAxis 1 for grid 0\n    ],\n    brush: {\n        xAxisIndex: [0, 1], // brush selecting is enabled only in coordinates with xAxisIndex as `0` or `1`\n        ...\n    }\n};\n</code></pre>\n"
  },
  "brushType": {
    "desc": "<p>Default type of brush.</p>\n<ul>\n<li><code class=\"codespan\">&#39;rect&#39;</code>: for selection-box in rectangle shape;</li>\n<li><code class=\"codespan\">&#39;polygon&#39;</code>: for selection-box in polygon shape;</li>\n<li><code class=\"codespan\">&#39;lineX&#39;</code>: for horizontal selection-box;</li>\n<li><code class=\"codespan\">&#39;lineY&#39;</code>: for vertical selection-box;</li>\n</ul>\n"
  },
  "brushMode": {
    "desc": "<p>Default brush mode, whose value can be:</p>\n<ul>\n<li><code class=\"codespan\">&#39;single&#39;</code>: for single selection;</li>\n<li><code class=\"codespan\">&#39;multiple&#39;</code>: for multiple selection.</li>\n</ul>\n"
  },
  "transformable": {
    "desc": "<p>Determines whether a selected box can be changed in shape or translated.</p>\n"
  },
  "brushStyle": {
    "desc": "<p>Default brush style, whose value is:</p>\n<pre><code class=\"lang-javascript\">{\n    borderWidth: 1,\n    color: &#39;rgba(120,140,180,0.3)&#39;,\n    borderColor: &#39;rgba(120,140,180,0.8)&#39;\n},\n</code></pre>\n"
  },
  "throttleType": {
    "desc": "<p>By default, <code class=\"codespan\">brushSelected</code> is always triggered when selection-box is selected or moved, to tell the outside about the event.</p>\n<p>But efficiency problems may occur when events are triggered too frequently, or the animation result may be affected. So brush components provides <a href=\"#brush.throttleType\">brush.throttleType</a> and <a href=\"#brush.throttleDelay\">brush.throttleDelay</a> to solve this problem.</p>\n<p>Valid <code class=\"codespan\">throttleType</code> values can be:</p>\n<ul>\n<li><code class=\"codespan\">&#39;debounce&#39;</code>: for triggering events only when the action has been stopped (no action after some duration). Time threshold can be assigned with <a href=\"#brush.throttleDelay\">brush.throttleDelay</a>;</li>\n<li><code class=\"codespan\">&#39;fixRate&#39;</code>: for triggering event with a certain frequency. The frequency can be assigned with <a href=\"#brush.throttleDelay\">brush.throttleDelay</a>.</li>\n</ul>\n<p>In this <a href=\"https://echarts.apache.org/examples/zh/view.html?c=scatter-map-brush&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a>, <code class=\"codespan\">debounce</code> is used to make sure the bar chart is updated only when the user has stopped action. In other cases, the animation result may not be so good.</p>\n"
  },
  "throttleDelay": {
    "desc": "<p><code class=\"codespan\">0</code> for disabling throttle.</p>\n<p>By default, <code class=\"codespan\">brushSelected</code> is always triggered when selection-box is selected or moved, to tell the outside about the event.</p>\n<p>But efficiency problems may occur when events are triggered too frequently, or the animation result may be affected. So brush components provides <a href=\"#brush.throttleType\">brush.throttleType</a> and <a href=\"#brush.throttleDelay\">brush.throttleDelay</a> to solve this problem.</p>\n<p>Valid <code class=\"codespan\">throttleType</code> values can be:</p>\n<ul>\n<li><code class=\"codespan\">&#39;debounce&#39;</code>: for triggering events only when the action has been stopped (no action after some duration). Time threshold can be assigned with <a href=\"#brush.throttleDelay\">brush.throttleDelay</a>;</li>\n<li><code class=\"codespan\">&#39;fixRate&#39;</code>: for triggering event with a certain frequency. The frequency can be assigned with <a href=\"#brush.throttleDelay\">brush.throttleDelay</a>.</li>\n</ul>\n<p>In this <a href=\"https://echarts.apache.org/examples/zh/view.html?c=scatter-map-brush&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a>, <code class=\"codespan\">debounce</code> is used to make sure the bar chart is updated only when the user has stopped action. In other cases, the animation result may not be so good.</p>\n"
  },
  "removeOnClick": {
    "desc": "<p>Defined whether <em>clearing all select-boxes on click</em> is enabled when <a href=\"#brush.brushMode\">brush.brushMode</a> is <code class=\"codespan\">&#39;single&#39;</code>.</p>\n"
  },
  "inBrush": {
    "desc": "<p>Defines visual effects of items in selection.</p>\n<p>Available visual effects include:</p>\n<ul>\n<li><code class=\"codespan\">symbol</code>: Type of symbol.</li>\n<li><code class=\"codespan\">symbolSize</code>: Symbol size.</li>\n<li><code class=\"codespan\">color</code>: Symbol color.</li>\n<li><code class=\"codespan\">colorAlpha</code>: Symbol alpha channel.</li>\n<li><code class=\"codespan\">opacity</code>: Opacity of symbol and others (like labels).</li>\n<li><code class=\"codespan\">colorLightness</code>: Lightness in <a href=\"https://en.wikipedia.org/wiki/HSL_and_HSV\" target=\"_blank\">HSL</a>.</li>\n<li><code class=\"codespan\">colorSaturation</code>: Saturation in <a href=\"https://en.wikipedia.org/wiki/HSL_and_HSV\" target=\"_blank\">HSL</a>.</li>\n<li><code class=\"codespan\">colorHue</code>: Hue in <a href=\"https://en.wikipedia.org/wiki/HSL_and_HSV\" target=\"_blank\">HSL</a>.</li>\n</ul>\n<p>In most cases, inBrush can be left unassigned, in which case default visual configuration remains.</p>\n"
  },
  "outOfBrush": {
    "desc": "<p>Defines visual effects of items out of selection.</p>\n<p>Available visual effects include:</p>\n<ul>\n<li><code class=\"codespan\">symbol</code>: Type of symbol.</li>\n<li><code class=\"codespan\">symbolSize</code>: Symbol size.</li>\n<li><code class=\"codespan\">color</code>: Symbol color.</li>\n<li><code class=\"codespan\">colorAlpha</code>: Symbol alpha channel.</li>\n<li><code class=\"codespan\">opacity</code>: Opacity of symbol and others (like labels).</li>\n<li><code class=\"codespan\">colorLightness</code>: Lightness in <a href=\"https://en.wikipedia.org/wiki/HSL_and_HSV\" target=\"_blank\">HSL</a>.</li>\n<li><code class=\"codespan\">colorSaturation</code>: Saturation in <a href=\"https://en.wikipedia.org/wiki/HSL_and_HSV\" target=\"_blank\">HSL</a>.</li>\n<li><code class=\"codespan\">colorHue</code>: Hue in <a href=\"https://en.wikipedia.org/wiki/HSL_and_HSV\" target=\"_blank\">HSL</a>.</li>\n</ul>\n<p><strong>Note:</strong> If <code class=\"codespan\">outOfBrush</code> is not assigned, <code class=\"codespan\">color</code> will be set to be <code class=\"codespan\">&#39;#ddd&#39;</code> by default. If the color is not desired, you can use:</p>\n<pre><code class=\"lang-javascript\">brush: {\n    ...,\n    outOfBrush: {\n        colorAlpha: 0.1\n    }\n}\n</code></pre>\n"
  },
  "z": {
    "desc": "<p>z-index of brush cover box. It can be adjust when incorrect overlap occurs.</p>\n"
  }
}