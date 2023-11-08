window.__EC_DOC_option_gl_series_map3D = {
  "name": {
    "desc": "<p>Series name used for displaying in <a href=\"https://echarts.apache.org/zh/option.html#tooltip\" target=\"_blank\">tooltip</a> and filtering with <a href=\"https://echarts.apache.org/zh/option.html#legend\" target=\"_blank\">legend</a>, or updating data and configuration with <code class=\"codespan\">setOption</code>.</p>\n"
  },
  "map": {
    "desc": "<p>The map type. The map type used in ECharts-gl is the same as the <a href=\"http://echarts.baidu.com/option.html#geo.map\" target=\"_blank\">geo</a> component.</p>\n<p>You can download the required map file in the <a href=\"http://ecomfe.github.io/echarts-builder-web/map3.html\" target=\"_blank\">Map Download Interface</a>, then to import and register it into ECharts.</p>\n<p>EChart provides map data in two formats. One is the JS file that can be imported directly through the script tag. After it is introduced, the map name and data will be automatically registered. Another is the JSON file that needs to be registered manually after loaded asynchronously by AJAX.</p>\n<p>Here are two types of use examples:</p>\n<p><strong> JavaScript Introduction Example </strong></p>\n<pre><code class=\"lang-html\">&lt;script src=&quot;echarts.js&quot;&gt;&lt;/script&gt;\n&lt;script src=&quot;map/js/china.js&quot;&gt;&lt;/script&gt;\n&lt;script&gt;\nvar chart = echarts.init(document.getElementById(&#39;main&#39;));\nchart.setOption({\n    series: [{\n        type: &#39;map&#39;,\n        map: &#39;china&#39;\n    }]\n});\n&lt;/script&gt;\n</code></pre>\n<p><strong> JSON Introduction Example </strong></p>\n<pre><code class=\"lang-js\">$.get(&#39;map/json/china.json&#39;, function (chinaJson) {\n    echarts.registerMap(&#39;china&#39;, chinaJson);\n    var chart = echarts.init(document.getElementById(&#39;main&#39;));\n    chart.setOption({\n        series: [{\n            type: &#39;map&#39;,\n            map: &#39;china&#39;\n        }]\n    });\n});\n</code></pre>\n<p>ECharts uses the data in [geoJSON] (<a href=\"http://geojson.org/\" target=\"_blank\">http://geojson.org/</a>) format as the outline of the map. In addition, you can also obtain data in [geoJSON] (<a href=\"http://geojson.org/\" target=\"_blank\">http://geojson.org/</a>) format of the map by other means and register it in ECharts.</p>\n"
  },
  "boxWidth": {
    "desc": "<p>三维地图 width in a 3D scene. With <a href=\"#series-map3D.viewControl.distance\">viewControl.distance</a> you can get the most appropriate display size.</p>\n<p>The following image is a schematic diagram of <code class=\"codespan\">boxWidth</code>, <code class=\"codespan\">boxHeight</code>, <code class=\"codespan\">boxDepth</code>, <code class=\"codespan\">regionHeight</code> in 三维地图.</p>\n<p><img width=\"600\" height=\"auto\" src=\"documents/asset/gl/img/geo-size.png\"></p>\n"
  },
  "boxHeight": {
    "desc": "<p>三维地图 height in a 3D scene.</p>\n<p>Component height. This height contains the height of the bar and scatter on a 3D map.</p>\n"
  },
  "boxDepth": {
    "desc": "<p>三维地图 depth in a 3D scene.</p>\n<p>The component depth defaults to automatic, ensuring that the scale of the 3D component is the same as the ratio of the input GeoJSON.</p>\n"
  },
  "regionHeight": {
    "desc": "<p>The height of each area of the 3D map. This height is the height of the model, less than <a href=\"#series-map3D.boxHeight\">boxHeight</a>. <code class=\"codespan\">boxHeight - regionHeight</code> will be used for the display of 3D bar, 3D scatter, and etc.</p>\n"
  },
  "environment": {
    "desc": "<p>Environment map. Support for solid colors, gradual colors, URL of panoramic texture. The default is <code class=\"codespan\">&#39;auto&#39;</code>, which is used as the environment texture when <a href=\"#series-map3D.light.ambientCubemap.texture\">light.ambientCubemap.texture</a> is configured. Otherwise, the environment texture is not displayed.</p>\n<p>Example: </p>\n<pre><code class=\"lang-js\">// Configure as a panoramic texture\nenvironment: &#39;asset/starfield.jpg&#39;\n// Configured as a solid black background\nenvironment: &#39;#000&#39;\n// Configured as a background with a vertical gradient\nenvironment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{\n  offset: 0, color: &#39;#00aaff&#39; // Sky color\n}, {\n  offset: 0.7, color: &#39;#998866&#39; // Ground color\n}, {\n  offset: 1, color: &#39;#998866&#39; // Ground color\n}], false)\n\n</code></pre>\n"
  },
  "groundPlane": {
    "desc": "<p>The ground allows the entire assembly to be “placed” to make the entire scene look more realistic.</p>\n<p> <code class=\"codespan\">groundPlane</code> supports setting up separate <code class=\"codespan\">realisticMaterial</code>, <code class=\"codespan\">colorMaterial</code>, <code class=\"codespan\">lambertMaterial</code> and other materials. If not set, the material parameters of the component are taken by default.</p>\n"
  },
  "groundPlane.show": {
    "desc": "<p>Whether to display the ground.</p>\n"
  },
  "groundPlane.color": {
    "desc": "<p>The color of the ground.</p>\n"
  },
  "instancing": {
    "desc": "<p><code class=\"codespan\">instancing</code> will merge all the <a href=\"http://geojson.org/geojson-spec.html#geometry-objects\" target=\"_blank\">geometry</a>  in GeoJSON into one. When GeoJSON has a lot of (thousands) <a href=\"http://geojson.org/geojson-spec.html#geometry-objects\" target=\"_blank\">geometry</a>, it can effectively improve drawing efficiency.</p>\n"
  },
  "label": {
    "desc": "<p>The setting of the label.</p>\n"
  },
  "label.show": {
    "desc": "<p>Whether to show the label.</p>\n"
  },
  "label.distance": {
    "desc": "<p>Distance to the host graphic element.</p>\n<p>The distance from the label to the graphic. In a 3D Scatter, this distance is the pixel value of the screen space. In other figures, this distance is the relative 3D distance.</p>\n"
  },
  "label.formatter": {
    "desc": "<p>The formatter of the label content, which supports the string template and the callback function. In either form, <code class=\"codespan\">\\n</code> is supported to represent a new line.</p>\n<p><strong>String template:</strong> </p>\n<p>The model variation includes:</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>: series name.</li>\n<li><code class=\"codespan\">{b}</code>: the name of a data item.</li>\n<li><code class=\"codespan\">{c}</code>: the value of a data item.</li>\n</ul>\n<p><strong>Example:</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {c}&#39;\n</code></pre>\n<p><strong>Callback function:</strong>\n Callback function is in form of:</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>The <code class=\"codespan\">params</code> is the single data set needed by formatter, which is formed as:</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n}\n</code></pre>\n<p>Note: the usage of encode and dimensionNames can be:</p>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "label.textStyle": {
    "desc": "<p>The font style of the label.</p>\n"
  },
  "label.textStyle.color": {
    "desc": "<p>The Color of the text.</p>\n"
  },
  "label.textStyle.borderWidth": {
    "desc": "<p>The border width of the text.</p>\n"
  },
  "label.textStyle.borderColor": {
    "desc": "<p>The border color of the text.</p>\n"
  },
  "label.textStyle.fontFamily": {
    "desc": "<p>The font family of the text.</p>\n"
  },
  "label.textStyle.fontSize": {
    "desc": "<p>The font size of the text.</p>\n"
  },
  "label.textStyle.fontWeight": {
    "desc": "<p>The font thick weight of the text.</p>\n<p><strong>Optional:</strong></p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "itemStyle": {
    "desc": "<p>Visual properties of 3D graphics in 三维地图, including color, transparency, strokes, etc.</p>\n"
  },
  "itemStyle.color": {
    "desc": "<p>The color of the graphic. </p>\n<pre><code class=\"lang-js\">// pure white\n[1, 1, 1, 1]\n</code></pre>\n<p>When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.</p>\n"
  },
  "itemStyle.opacity": {
    "desc": "<p>The opacity of the graphic.</p>\n"
  },
  "itemStyle.borderWidth": {
    "desc": "<p>The width of the border. With the border, you can distinguish each area more clearly. As shown below:</p>\n<p><img width=\"\" height=\"auto\" src=\"documents/asset/gl/img/geo-border.png\"></p>\n"
  },
  "itemStyle.borderColor": {
    "desc": "<p>The color of the border.</p>\n"
  },
  "emphasis": {
    "desc": "<p>Graphic and label styles when mouse hover is highlighted.</p>\n"
  },
  "emphasis.label.show": {
    "desc": "<p>Whether to show the label.</p>\n"
  },
  "emphasis.label.distance": {
    "desc": "<p>Distance to the host graphic element.</p>\n<p>The distance from the label to the graphic. In a 3D Scatter, this distance is the pixel value of the screen space. In other figures, this distance is the relative 3D distance.</p>\n"
  },
  "emphasis.label.formatter": {
    "desc": "<p>The formatter of the label content, which supports the string template and the callback function. In either form, <code class=\"codespan\">\\n</code> is supported to represent a new line.</p>\n<p><strong>String template:</strong> </p>\n<p>The model variation includes:</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>: series name.</li>\n<li><code class=\"codespan\">{b}</code>: the name of a data item.</li>\n<li><code class=\"codespan\">{c}</code>: the value of a data item.</li>\n</ul>\n<p><strong>Example:</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {c}&#39;\n</code></pre>\n<p><strong>Callback function:</strong>\n Callback function is in form of:</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>The <code class=\"codespan\">params</code> is the single data set needed by formatter, which is formed as:</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n}\n</code></pre>\n<p>Note: the usage of encode and dimensionNames can be:</p>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "emphasis.label.textStyle": {
    "desc": "<p>The font style of the label.</p>\n"
  },
  "emphasis.label.textStyle.color": {
    "desc": "<p>The Color of the text.</p>\n"
  },
  "emphasis.label.textStyle.borderWidth": {
    "desc": "<p>The border width of the text.</p>\n"
  },
  "emphasis.label.textStyle.borderColor": {
    "desc": "<p>The border color of the text.</p>\n"
  },
  "emphasis.label.textStyle.fontFamily": {
    "desc": "<p>The font family of the text.</p>\n"
  },
  "emphasis.label.textStyle.fontSize": {
    "desc": "<p>The font size of the text.</p>\n"
  },
  "emphasis.label.textStyle.fontWeight": {
    "desc": "<p>The font thick weight of the text.</p>\n<p><strong>Optional:</strong></p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "emphasis.itemStyle.color": {
    "desc": "<p>The color of the graphic. </p>\n<pre><code class=\"lang-js\">// pure white\n[1, 1, 1, 1]\n</code></pre>\n<p>When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.</p>\n"
  },
  "emphasis.itemStyle.opacity": {
    "desc": "<p>The opacity of the graphic.</p>\n"
  },
  "data": {
    "desc": "<p>The setting of the map area.</p>\n"
  },
  "data.name": {
    "desc": "<p>The name of the corresponding map area, such as <code class=\"codespan\">&#39;Guangdong&#39;</code>, <code class=\"codespan\">&#39;Zhejiang&#39;</code>.</p>\n"
  },
  "data.value": {
    "desc": "<p>The data value for this area.</p>\n"
  },
  "data.regionHeight": {
    "desc": "<p>The height of the area. Different heights can be set to express the size of the data. When GeoJSON is the data of the building, this value can also be used to represent the approximate height. As shown below：</p>\n<p><img width=\"700\" height=\"auto\" src=\"documents/asset/gl/img/city-region-height.jpg\"></p>\n"
  },
  "data.itemStyle": {
    "desc": "<p>Style settings for a single area.</p>\n"
  },
  "data.itemStyle.color": {
    "desc": "<p>The color of the graphic. </p>\n<pre><code class=\"lang-js\">// pure white\n[1, 1, 1, 1]\n</code></pre>\n<p>When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.</p>\n"
  },
  "data.itemStyle.opacity": {
    "desc": "<p>The opacity of the graphic.</p>\n"
  },
  "data.itemStyle.borderWidth": {
    "desc": "<p>The width of the border. With the border, you can distinguish each area more clearly. As shown below:</p>\n<p><img width=\"\" height=\"auto\" src=\"documents/asset/gl/img/geo-border.png\"></p>\n"
  },
  "data.itemStyle.borderColor": {
    "desc": "<p>The color of the border.</p>\n"
  },
  "data.label": {
    "desc": "<p>Label settings for a single area.</p>\n"
  },
  "data.label.show": {
    "desc": "<p>Whether to show the label.</p>\n"
  },
  "data.label.distance": {
    "desc": "<p>Distance to the host graphic element.</p>\n<p>The distance from the label to the graphic. In a 3D Scatter, this distance is the pixel value of the screen space. In other figures, this distance is the relative 3D distance.</p>\n"
  },
  "data.label.formatter": {
    "desc": "<p>The formatter of the label content, which supports the string template and the callback function. In either form, <code class=\"codespan\">\\n</code> is supported to represent a new line.</p>\n<p><strong>String template:</strong> </p>\n<p>The model variation includes:</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>: series name.</li>\n<li><code class=\"codespan\">{b}</code>: the name of a data item.</li>\n<li><code class=\"codespan\">{c}</code>: the value of a data item.</li>\n</ul>\n<p><strong>Example:</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {c}&#39;\n</code></pre>\n<p><strong>Callback function:</strong>\n Callback function is in form of:</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>The <code class=\"codespan\">params</code> is the single data set needed by formatter, which is formed as:</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n}\n</code></pre>\n<p>Note: the usage of encode and dimensionNames can be:</p>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "data.label.textStyle": {
    "desc": "<p>The font style of the label.</p>\n"
  },
  "data.label.textStyle.color": {
    "desc": "<p>The Color of the text.</p>\n"
  },
  "data.label.textStyle.borderWidth": {
    "desc": "<p>The border width of the text.</p>\n"
  },
  "data.label.textStyle.borderColor": {
    "desc": "<p>The border color of the text.</p>\n"
  },
  "data.label.textStyle.fontFamily": {
    "desc": "<p>The font family of the text.</p>\n"
  },
  "data.label.textStyle.fontSize": {
    "desc": "<p>The font size of the text.</p>\n"
  },
  "data.label.textStyle.fontWeight": {
    "desc": "<p>The font thick weight of the text.</p>\n<p><strong>Optional:</strong></p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "data.emphasis": {
    "desc": "<p>Setting the highlight for labels and styles for a single area.</p>\n"
  },
  "data.emphasis.itemStyle.color": {
    "desc": "<p>The color of the graphic. </p>\n<pre><code class=\"lang-js\">// pure white\n[1, 1, 1, 1]\n</code></pre>\n<p>When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.</p>\n"
  },
  "data.emphasis.itemStyle.opacity": {
    "desc": "<p>The opacity of the graphic.</p>\n"
  },
  "data.emphasis.itemStyle.borderWidth": {
    "desc": "<p>The width of the border. With the border, you can distinguish each area more clearly. As shown below:</p>\n<p><img width=\"\" height=\"auto\" src=\"documents/asset/gl/img/geo-border.png\"></p>\n"
  },
  "data.emphasis.itemStyle.borderColor": {
    "desc": "<p>The color of the border.</p>\n"
  },
  "data.emphasis.label.show": {
    "desc": "<p>Whether to show the label.</p>\n"
  },
  "data.emphasis.label.distance": {
    "desc": "<p>Distance to the host graphic element.</p>\n<p>The distance from the label to the graphic. In a 3D Scatter, this distance is the pixel value of the screen space. In other figures, this distance is the relative 3D distance.</p>\n"
  },
  "data.emphasis.label.formatter": {
    "desc": "<p>The formatter of the label content, which supports the string template and the callback function. In either form, <code class=\"codespan\">\\n</code> is supported to represent a new line.</p>\n<p><strong>String template:</strong> </p>\n<p>The model variation includes:</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>: series name.</li>\n<li><code class=\"codespan\">{b}</code>: the name of a data item.</li>\n<li><code class=\"codespan\">{c}</code>: the value of a data item.</li>\n</ul>\n<p><strong>Example:</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {c}&#39;\n</code></pre>\n<p><strong>Callback function:</strong>\n Callback function is in form of:</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>The <code class=\"codespan\">params</code> is the single data set needed by formatter, which is formed as:</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n}\n</code></pre>\n<p>Note: the usage of encode and dimensionNames can be:</p>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "data.emphasis.label.textStyle": {
    "desc": "<p>The font style of the label.</p>\n"
  },
  "data.emphasis.label.textStyle.color": {
    "desc": "<p>The Color of the text.</p>\n"
  },
  "data.emphasis.label.textStyle.borderWidth": {
    "desc": "<p>The border width of the text.</p>\n"
  },
  "data.emphasis.label.textStyle.borderColor": {
    "desc": "<p>The border color of the text.</p>\n"
  },
  "data.emphasis.label.textStyle.fontFamily": {
    "desc": "<p>The font family of the text.</p>\n"
  },
  "data.emphasis.label.textStyle.fontSize": {
    "desc": "<p>The font size of the text.</p>\n"
  },
  "data.emphasis.label.textStyle.fontWeight": {
    "desc": "<p>The font thick weight of the text.</p>\n<p><strong>Optional:</strong></p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "shading": {
    "desc": "<p>The coloring effect of 3D graphics in 三维地图. The following three coloring methods are supported in echarts-gl:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;color&#39;</code>\nOnly display colors, not affected by other factors such as lighting.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;lambert&#39;</code>\nThrough the classic [lambert] coloring, can express the light and dark that the light shows.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;realistic&#39;</code>\nRealistic rendering, combined with <a href=\"#globe.light.ambientCubemap\">light.ambientCubemap</a> and <a href=\"#globe.postEffect\">postEffect</a>, can improve the quality and texture of the display. [Physical Based Rendering (PBR)] (<a href=\"https://www.marmoset.co/posts/physically-based-rendering-and-you-can-too/\" target=\"_blank\">https://www.marmoset.co/posts/physically-based-rendering-and-you-can-too/</a>) is used in ECharts GL to represent realistic materials.</p>\n</li>\n</ul>\n"
  },
  "realisticMaterial": {
    "desc": "<p>The configuration item of the realistic material is valid when <a href=\"#series-map3D.shading\">shading</a> is <code class=\"codespan\">&#39;realistic&#39;</code>.</p>\n"
  },
  "realisticMaterial.detailTexture": {
    "desc": "<p>The texture map of the material detail.</p>\n"
  },
  "realisticMaterial.textureTiling": {
    "desc": "<p>Tiles the texture map of the material detail. The default is <code class=\"codespan\">1</code>, which means that the stretch is filled. When greater than <code class=\"codespan\">1</code>, the number indicates how many times the texture is tiled.</p>\n<p><strong>Note:</strong>  The use of tiling requires the <code class=\"codespan\">detail texture</code> height and width to be 2 to the power of n. For example, 512x512, if it is a 200x200 texture, you cannot use tiling.</p>\n"
  },
  "realisticMaterial.textureOffset": {
    "desc": "<p>The displacement of the texture detail texture.</p>\n"
  },
  "realisticMaterial.roughness": {
    "desc": "<p>The <code class=\"codespan\">roughness</code> attribute is used to indicate the roughness of the material, <code class=\"codespan\">0</code> is completely smooth, <code class=\"codespan\">1</code> is completely rough, and the middle value is between the two.</p>\n<p>The following images show the effect of <code class=\"codespan\">roughness</code> in <a href=\"#globe\"><code class=\"codespan\">globe</code></a> <code class=\"codespan\">0.2</code> (smooth) and <code class=\"codespan\">0.8</code> (rough).</p>\n<p><img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-gloss.png\">\n<img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-rough.png\"></p>\n<p>When you want to express more complex materials. You can set <code class=\"codespan\">roughness</code> directly to the texture that stores the roughness with each pixel as follows.</p>\n<p><img width=\"300\" height=\"300\" src=\"documents/asset/gl/img/roughness.png\"></p>\n<p>The more white the color in the texture, the larger the value and the rougher it is. You can get texture resources of different materials from resource websites such as [<a href=\"http://freepbr.com/]\" target=\"_blank\">http://freepbr.com/]</a> (<a href=\"http://freepbr.com/)\" target=\"_blank\">http://freepbr.com/)</a>. You can also generate it yourself using other tools.</p>\n"
  },
  "realisticMaterial.metalness": {
    "desc": "<p>The <code class=\"codespan\">metalness</code> attribute is used to indicate whether the material is metal or non-metal, <code class=\"codespan\">0</code> is non-metallic, <code class=\"codespan\">1</code> is metal, and the middle value is between the two. Usually set to <code class=\"codespan\">0</code> and <code class=\"codespan\">1</code> to meet most of the scenes.</p>\n<p>The picture below show the difference between `metal&#39; and &#39;0&#39; in <a href=\"#globe\">globe</a>.</p>\n<p><img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-metal.png\">\n<img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-non-metal.png\"></p>\n<p>As with <a href=\"#series-map3D.realisticMaterial.roughness\">roughness</a> you can set <code class=\"codespan\">metalness</code> directly to the metal texture.</p>\n"
  },
  "realisticMaterial.roughnessAdjust": {
    "desc": "<p>Roughness adjustment is useful when using roughness map. The overall roughness of the texture can be adjusted. The default is <code class=\"codespan\">0.5</code>, <code class=\"codespan\">0</code> is completely smooth, <code class=\"codespan\">1</code> is completely rough.</p>\n"
  },
  "realisticMaterial.metalnessAdjust": {
    "desc": "<p>Metalness adjustment is useful when using metalness maps. The overall metallicity of the texture can be adjusted. The default is <code class=\"codespan\">0.5</code>, <code class=\"codespan\">0</code> is non-metal, <code class=\"codespan\">1</code> is metal.</p>\n"
  },
  "realisticMaterial.normalTexture": {
    "desc": "<p>Normal map of material details.</p>\n<p>Using normal maps, you can still display rich shades of detail on the surface of the object with fewer vertices.</p>\n"
  },
  "lambertMaterial": {
    "desc": "<p>The configuration item of the lambert material is valid when <a href=\"#series-map3D.shading\">shading</a> is <code class=\"codespan\">&#39;lambert&#39;</code>.</p>\n"
  },
  "lambertMaterial.detailTexture": {
    "desc": "<p>The texture map of the material detail.</p>\n"
  },
  "lambertMaterial.textureTiling": {
    "desc": "<p>Tiles the texture map of the material detail. The default is <code class=\"codespan\">1</code>, which means that the stretch is filled. When greater than <code class=\"codespan\">1</code>, the number indicates how many times the texture is tiled.</p>\n<p><strong>Note:</strong>  The use of tiling requires the <code class=\"codespan\">detail texture</code> height and width to be 2 to the power of n. For example, 512x512, if it is a 200x200 texture, you cannot use tiling.</p>\n"
  },
  "lambertMaterial.textureOffset": {
    "desc": "<p>The displacement of the texture detail texture.</p>\n"
  },
  "colorMaterial": {
    "desc": "<p>The color material related configuration item is valid when <a href=\"#series-map3D.shading\">shading</a> is <code class=\"codespan\">&#39;color&#39;</code>.</p>\n"
  },
  "colorMaterial.detailTexture": {
    "desc": "<p>The texture map of the material detail.</p>\n"
  },
  "colorMaterial.textureTiling": {
    "desc": "<p>Tiles the texture map of the material detail. The default is <code class=\"codespan\">1</code>, which means that the stretch is filled. When greater than <code class=\"codespan\">1</code>, the number indicates how many times the texture is tiled.</p>\n<p><strong>Note:</strong>  The use of tiling requires the <code class=\"codespan\">detail texture</code> height and width to be 2 to the power of n. For example, 512x512, if it is a 200x200 texture, you cannot use tiling.</p>\n"
  },
  "colorMaterial.textureOffset": {
    "desc": "<p>The displacement of the texture detail texture.</p>\n"
  },
  "light": {
    "desc": "<p>Light related settings. Invalid when <a href=\"#series-map3D.shading\">shading</a> is &#39;color&#39;.</p>\n<p>The lighting settings affect the components and all the charts on the component&#39;s coordinate system.</p>\n<p>A reasonable lighting setting can make the brightness and darkness of the whole scene richer and more layered.</p>\n"
  },
  "light.main": {
    "desc": "<p>The setting of the main light source of the scene. In the <a href=\"#globe\">globe</a> component is the sun.</p>\n"
  },
  "light.main.color": {
    "desc": "<p>The color of the main light source.</p>\n"
  },
  "light.main.intensity": {
    "desc": "<p>The intensity of the main light source.</p>\n"
  },
  "light.main.shadow": {
    "desc": "<p>Whether the main light source displays a shadow. The default is off.</p>\n<p>Turning on the shadows can bring more realistic and layered lighting to the scene. But it also increases the operating overhead of the program.</p>\n<p>The following two images show the difference between turning on the shadow and turning off the shadow.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-shadow.png\" width=\"100%\" title=\"Shadow\"><img />\n    <img  src=\"documents/asset/gl/img/geo-no-shadow.png\" width=\"100%\" title=\"No Shadow\"><img />\n<div />\n"
  },
  "light.main.shadowQuality": {
    "desc": "<p>The quality of the shadow. You can choose <code class=\"codespan\">&#39;low&#39;</code>, <code class=\"codespan\">&#39;medium&#39;</code>, <code class=\"codespan\">&#39;high&#39;</code>, <code class=\"codespan\">&#39;ultra&#39;</code></p>\n<p>The following two images shows the difference between low quality and high quality shadows.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-shadow-low.png\" width=\"100%\" title=\"Low\"><img />\n    <img  src=\"documents/asset/gl/img/geo-shadow-high.png\" width=\"100%\" title=\"High\"><img />\n<div />\n"
  },
  "light.main.alpha": {
    "desc": "<p>The main light source is around the x-axis, which is the angle of up-down rotation. Control the direction of the light with <a href=\"#series-map3D.light.main.beta\">beta</a>.</p>\n<p>As the following image show:</p>\n<p><img width=\"\" height=\"auto\" src=\"documents/asset/gl/img/light-alpha-beta.png\"></p>\n<p>The <a href=\"#globe\">globe</a> component can control the time of sunlight by <a href=\"#globe.light.main.time\">time</a>.</p>\n"
  },
  "light.main.beta": {
    "desc": "<p>The main light source is around the y-axis, which is the angle of the left-right rotation.</p>\n"
  },
  "light.ambient": {
    "desc": "<p>Global ambient light settings.</p>\n"
  },
  "light.ambient.color": {
    "desc": "<p>The color of ambient light.</p>\n"
  },
  "light.ambient.intensity": {
    "desc": "<p>The intensity of ambient light.</p>\n"
  },
  "light.ambientCubemap": {
    "desc": "<p>The ambientCubemap uses texture as the source of ambient light, which provides diffuse and specular for objects. The diffuse and specular can be set separately by <a href=\"#series-map3D.light.ambientCubemap.diffuseIntensity\">diffuseIntensity</a> and <a href=\"#series-map3D.light.ambientCubemap.specularIntensity\">specularIntensity</a>.</p>\n"
  },
  "light.ambientCubemap.texture": {
    "desc": "<p>The URL of the ambient cubemap supports HDR images in the <code class=\"codespan\">.hdr</code> format. You can obtained the resources for <code class=\"codespan\">.hdr</code> from <a href=\"http://www.hdrlabs.com/sibl/archive.html\" target=\"_blank\">http://www.hdrlabs.com/sibl/archive.html</a> and other websites.</p>\n<p>Example：</p>\n<pre><code class=\"lang-js\">ambientCubemap: {\n    texture: &#39;pisa.hdr&#39;,\n    // The exposure value used when analytic hdr\n    exposure: 1.0\n}\n</code></pre>\n"
  },
  "light.ambientCubemap.diffuseIntensity": {
    "desc": "<p>The intensity of diffuse.</p>\n"
  },
  "light.ambientCubemap.specularIntensity": {
    "desc": "<p>The intensity of specular.</p>\n"
  },
  "postEffect": {
    "desc": "<p>Post-processing effects related configuration. It can add effects such as highlights, depth of field, screen space ambient occlusion (SSAO), toning to the picture. And it can make the whole picture more textured.</p>\n<p>The following are the differences between closing <code class=\"codespan\">postEffect</code> and opening <code class=\"codespan\">postEffect</code>.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/globe-posteffect-disable.png\" width=\"100%\" title=\"Disable\"><img />\n    <img  src=\"documents/asset/gl/img/globe-posteffect-enable.png\" width=\"100%\" title=\"Enable\"><img />\n<div />\n\n<p>Note that when postEffect is enable, <a href=\"#series-map3D.temporalSuperSampling\">temporalSuperSampling</a> is enable by default. After the picture is still, the picture will continue to be enhanced, including anti-aliasing, depth of field, SSAO, shadows, etc.</p>\n"
  },
  "postEffect.enable": {
    "desc": "<p>Whether to enable post-processing effects. Not enabled by default.</p>\n"
  },
  "postEffect.bloom": {
    "desc": "<p>Bloom is used to reproducing the effects that occur in real cameras when taking pictures in a bright environment.\nBecause traditional RGB can only represent colors in the range of &#39;0 - 255&#39;, so we need to use the bloom effect simulates fringes of light extending from the borders of bright areas, creating the illusion of a bright light overwhelming the camera. As shown below：</p>\n<p><img width=\"\" height=\"auto\" src=\"documents/asset/gl/img/globe-posteffect-bloom.png\"></p>\n"
  },
  "postEffect.bloom.enable": {
    "desc": "<p>Whether to enable the bloom effect.</p>\n"
  },
  "postEffect.bloom.bloomIntensity": {
    "desc": "<p>The intensity of the bloom. The default is 0.1.</p>\n"
  },
  "postEffect.depthOfField": {
    "desc": "<p>Depth of Field is a post-processing effect that simulates the focus properties of a camera. The area of focus is clear, and the area away from the focus is gradually blurred.</p>\n<p>The depth of field effect allows the observer to focus on the area of focus and make the picture feel stronger. Large depth of field can also create a macro model effect.</p>\n<p>The following are the differences between turning off and turning on the depth of field effect.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-no-dof.png\" width=\"100%\" title=\"Disable\"><img />\n    <img  src=\"documents/asset/gl/img/geo-dof.png\" width=\"100%\" title=\"Enable\"><img />\n<div />\n"
  },
  "postEffect.depthOfField.enable": {
    "desc": "<p>Whether to enable the depth of field.</p>\n"
  },
  "postEffect.depthOfField.focalDistance": {
    "desc": "<p>The initial focus distance. The user can click on the area to automatically focus.</p>\n"
  },
  "postEffect.depthOfField.focalRange": {
    "desc": "<p>The size of the in-focus area. The objects in this range are completely clear and there is no blurring.</p>\n"
  },
  "postEffect.depthOfField.fstop": {
    "desc": "<p>[F value] of the lens (<a href=\"https://zh.wikipedia.org/wiki/%E7%84%A6%E6%AF%94)\" target=\"_blank\">https://zh.wikipedia.org/wiki/%E7%84%A6%E6%AF%94)</a>, the smaller the value, the shallower the depth of field.</p>\n"
  },
  "postEffect.depthOfField.blurRadius": {
    "desc": "<p>Blur radius outside the focus.</p>\n<p>The difference blur effect between the different radius. </p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-dof-small.png\" width=\"100%\" title=\"blurSize: 3\"><img />\n    <img  src=\"documents/asset/gl/img/geo-dof-large.png\" width=\"100%\" title=\"blurSize: 10\"><img />\n<div />\n"
  },
  "postEffect.screenSpaceAmbientOcclusion": {
    "desc": "<p>The ambient occlusion post-processing effect darkens the corners, holes, crevices, and areas where most light can`t reach. It is a supplement to the traditional shadow map, which makes the whole scene more natural and layered.</p>\n<p>Below is a comparison of the effects of no SSAO and SSAO:</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-no-ssao.png\" width=\"100%\" title=\"No SSAO\"><img />\n    <img  src=\"documents/asset/gl/img/geo-ssao.png\" width=\"100%\" title=\"SSAO\"><img />\n<div />\n"
  },
  "postEffect.SSAO": {
    "desc": "<p>Same as <a href=\"#series-map3D.postEffect.screenSpaceAmbientOcclusion\">screenSpaceAmbientOcclusion</a></p>\n"
  },
  "postEffect.SSAO.enable": {
    "desc": "<p>Whether to enable SSAO (screen space ambient occlusion). Not enabled by default.</p>\n"
  },
  "postEffect.SSAO.quality": {
    "desc": "<p>The quality of SSAO (screen space ambient occlusion). Supporting<code class=\"codespan\">&#39;low&#39;</code>, <code class=\"codespan\">&#39;medium&#39;</code>, <code class=\"codespan\">&#39;high&#39;</code>, <code class=\"codespan\">&#39;ultra&#39;</code></p>\n"
  },
  "postEffect.SSAO.radius": {
    "desc": "<p>The radius of the SSAO (screen space ambient occlusion). The larger the radius, the more natural the effect, but you need to set a higher <code class=\"codespan\">&#39;quality&#39;</code>. </p>\n<p>The following example is the difference between a smaller and larger radius:</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-ssao-small-radius.png\" width=\"100%\" title=\"Radius: 1\"><img />\n    <img  src=\"documents/asset/gl/img/geo-ssao-large-radius.png\" width=\"100%\" title=\"Radius: 10\"><img />\n<div />\n"
  },
  "postEffect.SSAO.intensity": {
    "desc": "<p>The intensity of SSAO (screen space ambient occlusion). The larger the value, the darker the color.</p>\n"
  },
  "postEffect.colorCorrection": {
    "desc": "<p>Color correction and adjustment. Similar to Color Adjustments in Photoshop.</p>\n<p>The same scene in the figure below is adjusted to the difference between the cool color system and the warm color system.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/buildings-cold.jpg\" width=\"100%\" title=\"Cold\"><img />\n    <img  src=\"documents/asset/gl/img/buildings-warm.jpg\" width=\"100%\" title=\"Warm\"><img />\n<div />\n\n"
  },
  "postEffect.colorCorrection.enable": {
    "desc": "<p>Whether to enable the color correction.</p>\n"
  },
  "postEffect.colorCorrection.lookupTexture": {
    "desc": "<p>Color correction lookup texture, recommended.</p>\n<p>The color correction lookup texture is a texture image like the one below.</p>\n<p><img width=\"200\" height=\"auto\" src=\"documents/asset/gl/img/lookup.png\"></p>\n<p>This is the basic lookup texture image that you can use directly.\nTo adjust the color of the scene to the effect you want, you can take a screenshot of the scene and adjust the color to the desired effect in image processing software such as Photoshop. Then apply the same adjustment to the image of the lookup texture above.</p>\n<p>For example, after turning into a cool tone, the image of the lookup texture will look like this:</p>\n<p><img width=\"200\" height=\"auto\" src=\"documents/asset/gl/img/crispwinter.png\"></p>\n<p>Then the texture image is used as the value of the configuration item, and you can get the same effect in Photoshop.</p>\n<p>Of course, if you just want to get a screenshot, you don&#39;t have to do it anymore, but if you want to easily adjust to the ideal color in real-time interactive works, this is very useful.</p>\n"
  },
  "postEffect.colorCorrection.exposure": {
    "desc": "<p>The exposure of the image.</p>\n"
  },
  "postEffect.colorCorrection.brightness": {
    "desc": "<p>The brightness of the image.</p>\n"
  },
  "postEffect.colorCorrection.contrast": {
    "desc": "<p>The contrast of the image.</p>\n"
  },
  "postEffect.colorCorrection.saturation": {
    "desc": "<p>The saturation of the image.</p>\n"
  },
  "postEffect.FXAA": {
    "desc": "<p>After opening <a href=\"#series-map3D.postEffect\">postEffect</a>, WebGL&#39;s default MSAA (Multi Sampling Anti Aliasing) will not work. At this time, FXAA (Fast Approximate Anti-Aliasing) can solve the anti-aliasing problem quickly and easily. FXAA blurs the edge of the scene to solve the problem of aliasing. It works well on some scenes, but in echarts-gl, you need to ensure that the edges of many texts and lines are sharp and clear, so FXAA is not suitable. At this point we can use supersampling by setting a higher <code class=\"codespan\">devicePixelRatio</code> as follows:</p>\n<pre><code class=\"lang-js\">var chart = echarts.init(dom, null, {\n    devicePixelRatio: 2\n})\n</code></pre>\n<p>However, setting a higher <code class=\"codespan\">devicePixelRatio</code> has high requirements for computer performance, so more often we recommend using <a href=\"#series-map3D.temporalSuperSampling\">temporalSuperSampling</a> in echarts-gl. After the picture is still, it will continue to sample multiple times and taken at several instances inside the pixel and an average color value is calculated.,thus achieving anti-aliasing effect.</p>\n"
  },
  "postEffect.FXAA.enable": {
    "desc": "<p>Whether to enable FXAA. Not enabled by default.</p>\n"
  },
  "temporalSuperSampling": {
    "desc": "<p>Temporal supersampling. After opening <a href=\"#series-map3D.postEffect\">postEffect</a>, WebGL&#39;s default MSAA (MultiSampling Anti-Aliasing) will not work, so we need to solve the problem of sampling.</p>\n<p>Temporal supersampling is an anti-aliasing method. After the picture is still, it will continue to sample multiple times and taken at several instances inside the pixel and an average color value is calculated, thus achieving anti-aliasing effect.\nAnd in this process, ECharts-gl also progressively enhances some of the effects in <a href=\"#series-map3D.postEffect\">postEffect</a> that require sampled guarantees. For example <a href=\"#series-map3D.postEffect.SSAO\">SSAO</a>, <a href=\"#series-map3D.postEffect.depthOfField\">Depth of Field</a>, and shadow.</p>\n<p>The following is the difference between not opening <code class=\"codespan\">temporalSuperSampling</code> and opening <code class=\"codespan\">temporalSuperSampling</code>.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 800px;\">\n    <img  src=\"documents/asset/gl/img/surface-no-taa.png\" width=\"100%\" title=\"No AA\"><img />\n    <img  src=\"documents/asset/gl/img/surface-taa.png\" width=\"100%\" title=\"AA\"><img />\n<div />\n"
  },
  "temporalSuperSampling.enable": {
    "desc": "<p>Whether to enable temporal supersampling. By default, temporal supersampling is also turned on synchronously when <a href=\"#series-map3D.postEffect\">postEffect</a> is turned on.</p>\n"
  },
  "viewControl": {
    "desc": "<p><code class=\"codespan\">viewControl</code> is used for mouse rotation, zooming, and other perspective control.</p>\n"
  },
  "viewControl.projection": {
    "desc": "<p>The way of projection, the default is <code class=\"codespan\">&#39;perspective&#39;</code> projection, also supports setting to <code class=\"codespan\">&#39;orthogonal&#39;</code> projection.</p>\n"
  },
  "viewControl.autoRotate": {
    "desc": "<p>Whether to enable the angle of view to automatically rotate around the object.</p>\n"
  },
  "viewControl.autoRotateDirection": {
    "desc": "<p>The direction in which the object auto rotates. The default is <code class=\"codespan\">&#39;cw&#39;</code> means clockwise from top to bottom, and can also use  <code class=\"codespan\">&#39;ccw&#39;</code> means counterclockwise from top to bottom.</p>\n"
  },
  "viewControl.autoRotateSpeed": {
    "desc": "<p>The speed at which the object auto rotates. The unit is <code class=\"codespan\">angle/second</code>, the default is <code class=\"codespan\">10</code>, which is a turn of <code class=\"codespan\">36</code> seconds.</p>\n"
  },
  "viewControl.autoRotateAfterStill": {
    "desc": "<p>The time interval for automatic rotation to resume after the mouse is still. Valid after opening <a href=\"#series-map3D.viewControl.autoRotate\">autoRotate</a>.</p>\n"
  },
  "viewControl.damping": {
    "desc": "<p>The damping when the mouse is rotated, zoomed, etc.\nWhen it is greater than 0, the angle of view will continue to move (rotate and zoom) due to certain inertia after the mouse is still.</p>\n"
  },
  "viewControl.rotateSensitivity": {
    "desc": "<p>The sensitivity of the rotation operation. The greater the value, the more sensitive. Supports the use of arrays to set the horizontal and vertical rotation sensitivity separately.</p>\n<p>The default is <code class=\"codespan\">1</code>.</p>\n<p>Cannot be rotated after setting to <code class=\"codespan\">0</code>.</p>\n<pre><code class=\"lang-js\">// can&#39;t rotate\nrotateSensitivity: 0\n// can only be rotated horizontally\nrotateSensitivity: [1, 0]\n//  can only rotate vertically\nrotateSensitivity: [0, 1]\n</code></pre>\n"
  },
  "viewControl.zoomSensitivity": {
    "desc": "<p>The sensitivity of the zoom operation, the larger the value, the more sensitive. The default is <code class=\"codespan\">1</code>.</p>\n<p>Can<code class=\"codespan\">t be scaled after setting to</code>0`.</p>\n"
  },
  "viewControl.panSensitivity": {
    "desc": "<p>The sensitivity of the panning operation, the greater the value, the more sensitive. Supports the use of arrays to set the horizontal and vertical translation sensitivity.</p>\n<p>The default is <code class=\"codespan\">1</code>.</p>\n<p>Cannot pan after setting to <code class=\"codespan\">0</code>.</p>\n"
  },
  "viewControl.panMouseButton": {
    "desc": "<p>The mouse button used for panning operation supports:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;left&#39;</code> left mouse button (default)</p>\n</li>\n<li><p><code class=\"codespan\">&#39;middle&#39;</code> middle mouse button</p>\n</li>\n<li><p><code class=\"codespan\">&#39;right&#39;</code> right mouse button</p>\n</li>\n</ul>\n<p>Note: If set to the right mouse button, the default context menu will be blocked.</p>\n"
  },
  "viewControl.rotateMouseButton": {
    "desc": "<p>The mouse button used for the rotation operation supports:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;left&#39;</code> left mouse button</p>\n</li>\n<li><p><code class=\"codespan\">&#39;middle&#39;</code> middle mouse button (default)</p>\n</li>\n<li><p><code class=\"codespan\">&#39;right&#39;</code> right mouse button</p>\n</li>\n</ul>\n<p>Note: If set to the right mouse button, the default context menu will be blocked.</p>\n"
  },
  "viewControl.distance": {
    "desc": "<p>The distance of the default perspective from the subject. For <a href=\"#globe\">globe</a>, the distance from the Earth&#39;s surface is the distance from the center origin for other components such as <a href=\"#grid3D\">grid3D</a> and <a href=\"#geo3D\">geo3D</a>. Valid when <a href=\"#series-map3D.viewControl.projection\">projection</a> is <code class=\"codespan\">&#39;perspective&#39;</code>.</p>\n"
  },
  "viewControl.minDistance": {
    "desc": "<p>The angle of view is controlled by the mouse to bring the minimum distance to the subject. Valid when <a href=\"#series-map3D.viewControl.projection\">projection</a> is <code class=\"codespan\">&#39;perspective&#39;</code>.</p>\n"
  },
  "viewControl.maxDistance": {
    "desc": "<p>The angle of view can be extended to the maximum distance of the subject by mouse control. Valid when <a href=\"#series-map3D.viewControl.projection\">projection</a> is <code class=\"codespan\">&#39;perspective&#39;</code>.</p>\n"
  },
  "viewControl.orthographicSize": {
    "desc": "<p>The size of the orthogonal projection. Valid when <a href=\"#series-map3D.viewControl.projection\">projection</a> is <code class=\"codespan\">&#39;orthographic&#39;</code>.</p>\n"
  },
  "viewControl.maxOrthographicSize": {
    "desc": "<p>The maximum value of the orthogonal projection scaling. Valid when <a href=\"#series-map3D.viewControl.projection\">projection</a> is <code class=\"codespan\">&#39;orthographic&#39;</code>.</p>\n"
  },
  "viewControl.minOrthographicSize": {
    "desc": "<p>The minimum value of the orthogonal projection scaling. Valid when <a href=\"#series-map3D.viewControl.projection\">projection</a> is <code class=\"codespan\">&#39;orthographic&#39;</code></p>\n"
  },
  "viewControl.alpha": {
    "desc": "<p>The angle of view is around the x-axis, which is the angle of rotation up and down. With <a href=\"#series-map3D.light.main.beta\">beta</a> you can control the direction of the perspective.</p>\n<p>As shown below：</p>\n<p><img width=\"\" height=\"auto\" src=\"documents/asset/gl/img/view-alpha-beta.png\"></p>\n"
  },
  "viewControl.beta": {
    "desc": "<p>The angle of view is around the y-axis, which is the angle of rotation from left to right.</p>\n"
  },
  "viewControl.center": {
    "desc": "<p>At the center of the angle of view, the rotation will also rotate around this center point. The default is <code class=\"codespan\">[0,0,0]</code>.</p>\n"
  },
  "viewControl.minAlpha": {
    "desc": "<p>The minimum alpha value to rotate up and down. That is, the angle of view can be rotated to reach the uppermost angle.</p>\n"
  },
  "viewControl.maxAlpha": {
    "desc": "<p>The maximum alpha value to rotate up and down. That is, the angle of view can be rotated to the lowest angle.</p>\n"
  },
  "viewControl.minBeta": {
    "desc": "<p>The minimum beta value to rotate left and right. That is, the angle of view can be rotated to the leftmost angle.</p>\n"
  },
  "viewControl.maxBeta": {
    "desc": "<p>The maximum beta value to rotate left and right rotation. That is, the angle of view can be rotated to the rightmost angle.</p>\n"
  },
  "viewControl.animation": {
    "desc": "<p>Whether to enable animation.</p>\n"
  },
  "viewControl.animationDurationUpdate": {
    "desc": "<p>The duration time for update the transition animation.</p>\n"
  },
  "viewControl.animationEasingUpdate": {
    "desc": "<p>The easing effect for update transition animation.</p>\n"
  },
  "zlevel": {
    "desc": "<p>The layer in which the component is located.</p>\n<p><code class=\"codespan\">zlevel</code> is used to make layers with Canvas. Graphical elements with different <code class=\"codespan\">zlevel</code> values will be placed in different Canvases, which is a common optimization technique. We can put those frequently changed elements (like those with animations) to a separate <code class=\"codespan\">zlevel</code>. Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid the crash.</p>\n<p>Canvases with bigger <code class=\"codespan\">zlevel</code> will be placed on Canvases with smaller <code class=\"codespan\">zlevel</code>.</p>\n<p><strong>Note:</strong> The layers of the components in echarts-gl need to be separated from the layers of the components in echarts. The same <code class=\"codespan\">zlevel</code> cannot be used for both WebGL and Canvas drawing at the same time.</p>\n"
  },
  "left": {
    "desc": "<p>Distance between  component and the left side of the container.</p>\n<p><code class=\"codespan\">left</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>; and it can also be <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, or <code class=\"codespan\">&#39;right&#39;</code>.</p>\n<p>If the <code class=\"codespan\">left</code> value is set to be <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, or <code class=\"codespan\">&#39;right&#39;</code>, then the component will be aligned automatically based on position.</p>\n"
  },
  "top": {
    "desc": "<p>Distance between  component and the top side of the container.</p>\n<p><code class=\"codespan\">top</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>; and it can also be <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, or <code class=\"codespan\">&#39;bottom&#39;</code>.</p>\n<p>If the <code class=\"codespan\">left</code> value is set to be <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, or <code class=\"codespan\">&#39;bottom&#39;</code>, then the component will be aligned automatically based on position.</p>\n"
  },
  "right": {
    "desc": "<p>Distance between  component and the right side of the container.</p>\n<p><code class=\"codespan\">right</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>.</p>\n<p> Adaptive by default.</p>\n"
  },
  "bottom": {
    "desc": "<p>Distance between  component and the bottom side of the container.</p>\n<p><code class=\"codespan\">bottom</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>.</p>\n<p> Adaptive by default.</p>\n"
  },
  "width": {
    "desc": "<p> The width of the view of the component.</p>\n"
  },
  "height": {
    "desc": "<p> The height of the view of the component.</p>\n"
  }
}