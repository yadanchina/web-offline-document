window.__EC_DOC_api_events = {"Mouse events":{"desc":"<p>Event parameters of mouse events are attributes of event object. The following shows basic parameters for chart click events. Other charts, like pie charts, may have additional parameters like <code class=\"codespan\">percent</code>. Please refer to callback <code class=\"codespan\">params</code> of each chart&#39;s label formatter.</p>\n<pre><code class=\"lang-ts\">{\n    // type of the component to which the clicked glyph belongs\n    // i.e., &#39;series&#39;, &#39;markLine&#39;, &#39;markPoint&#39;, &#39;timeLine&#39;\n    componentType: string,\n    // series type (make sense when componentType is &#39;series&#39;)\n    // i.e., &#39;line&#39;, &#39;bar&#39;, &#39;pie&#39;\n    seriesType: string,\n    // series index in incoming option.series (make sense when componentType is &#39;series&#39;)\n    seriesIndex: number,\n    // series name (make sense when componentType is &#39;series&#39;)\n    seriesName: string,\n    // data name, category name\n    name: string,\n    // data index in incoming data array\n    dataIndex: number,\n    // incoming rwa data item\n    data: Object,\n    // Some series, such as sankey or graph, maintains more than\n    // one types of data (nodeData and edgeData), which can be\n    // distinguished from each other by dataType with its value\n    // &#39;node&#39; and &#39;edge&#39;.\n    // On the other hand, most series has only one type of data,\n    // where dataType is not needed.\n    dataType: string,\n    // incoming data value\n    value: number|Array,\n    // color of component (make sense when componentType is &#39;series&#39;)\n    color: string,\n    // User info (only available in graphic component\n    // and custom series, if element option has info\n    // property, e.g., {type: &#39;circle&#39;, info: {some: 123}})\n    info: *\n}\n</code></pre>\n<p>Mouse events contain <code class=\"codespan\">&#39;click&#39;</code>, <code class=\"codespan\">&#39;dblclick&#39;</code>, <code class=\"codespan\">&#39;mousedown&#39;</code>, <code class=\"codespan\">&#39;mousemove&#39;</code>, <code class=\"codespan\">&#39;mouseup&#39;</code>, <code class=\"codespan\">&#39;mouseover&#39;</code>, <code class=\"codespan\">&#39;mouseout&#39;</code>, <code class=\"codespan\">&#39;globalout&#39;</code>, <code class=\"codespan\">&#39;contextmenu&#39;</code>.</p>\n<p>See <a href=\"tutorial.html#Events%20and%20actions%20in%20ECharts%0D\" target=\"_blank\">Events and actions in ECharts</a></p>\n"},"highlight":{"desc":"<p><strong>ACTION:</strong> <a href=\"#action.highlight\">highlight</a></p>\n<p>Event of data highlight.</p>\n"},"downplay":{"desc":"<p><strong>ACTION:</strong> <a href=\"#action.downplay\">downplay</a></p>\n<p>Event of data downplay.</p>\n"},"selectchanged":{"desc":"<p><strong>ACTION:</strong> <a href=\"#action.toggleSelect\">toggleSelect</a>, <a href=\"#action.select\">select</a>, <a href=\"#action.unselect\">unselect</a></p>\n<p>Event emitted when data selection is changed.</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;selectchanged&#39;,\n    fromAction: &#39;select&#39; | &#39;toggleSelect&#39; | &#39;unselect&#39;,\n    // Grouped by series.\n    selected: ({\n        dataIndex: number[], seriesIndex: number\n    })[]\n}\n</code></pre>\n"},"legendselectchanged":{"desc":"<p><strong>ACTION:</strong> <a href=\"#action.legend.legendToggleSelect\">legendToggleSelect</a>\nEvent emitted after legend selecting state changes.</p>\n<p><strong>Attention: </strong> This event will be emitted when users toggle legend button in legend component.</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;legendselectchanged&#39;,\n    // change legend name\n    name: string\n    // table of all legend selecting states\n    selected: {\n        [name: string]: boolean\n    }\n}\n</code></pre>\n"},"legendselected":{"desc":"<p><strong>ACTION:</strong> <a href=\"#action.legend.legendSelect\">legendSelect</a>\nEvent emitted after legend is selected.</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;legendselected&#39;,\n    // name of selected legend\n    name: string\n    // table of all legend selecting states\n    selected: {\n        [name: string]: boolean\n    }\n}\n</code></pre>\n<p><strong>Attention: </strong> In ECharts 2.x, event related to user switching lengend is now changed from  <code class=\"codespan\">legendselected</code> to <a href=\"#events.legendselectchanged\">legendselectchanged</a>.</p>\n"},"legendunselected":{"desc":"<p><strong>ACTION:</strong> <a href=\"#action.legend.legendUnSelect\">legendUnSelect</a>\nEvent emitted after unselecting legend.</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;legendunselected&#39;,\n    // name of unselected legend\n    name: string\n    // table of all legend selecting states\n    selected: {\n        [name: string]: boolean\n    }\n}\n</code></pre>\n"},"legendselectall":{"desc":"<p><strong>ACTION:</strong> <a href=\"#action.legend.legendAllSelect\">legendAllSelect</a>\nEvent emitted after all legends are selected.</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;legendselectall&#39;,\n    // table of all legend selecting states\n    selected: {\n        [name: string]: boolean\n    }\n}\n</code></pre>\n"},"legendinverseselect":{"desc":"<p><strong>ACTION:</strong> <a href=\"#action.legend.legendInverseSelect\">legendInverseSelect</a>\nEvent emitted after inversing all legends.</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;legendinverseselect&#39;,\n    // table of all legend selecting states\n    selected: {\n        [name: string]: boolean\n    }\n}\n</code></pre>\n"},"legendscroll":{"desc":"<p><strong>ACTION:</strong> <a href=\"#action.legend.legendScroll\">legendscroll</a>\nEvent when trigger legend scroll.</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;legendscroll&#39;,\n    scrollDataIndex: number\n    legendId: string\n}\n</code></pre>\n"},"datazoom":{"desc":"<p><strong>ACTION:</strong> <a href=\"#action.dataZoom.dataZoom\">dataZoom</a></p>\n<p>Event emitted after zooming data area.</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;datazoom&#39;,\n    // percentage of zoom start position, 0 - 100\n    start: number\n    // percentage of zoom finish position, 0 - 100\n    end: number\n    // data value of zoom start position; only exists in zoom event of triggered by toolbar\n    startValue?: number\n    // data value of zoom finish position; only exists in zoom event of triggered by toolbar\n    endValue?: number\n}\n</code></pre>\n"},"datarangeselected":{"desc":"<p><strong>ACTION:</strong> <a href=\"#action.dataRange.selectDataRange\">selectDataRange</a>\nEvent emitted after range is changed in visualMap.</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;datarangeselected&#39;,\n    // continuous visualMap is different from discrete one\n    // continuous visualMap is an array representing range of data values.\n    // discrete visualMap is an object, whose key is category or piece index; value is `true` or `false`\n    selected: Object|Array\n}\n</code></pre>\n"},"graphroam":{"desc":"<p>Event emitted after <a href=\"option.html#series-graph\" target=\"_blank\">series-graph</a> is roamed.</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;graphroam&#39;,\n    seriesId: string,\n    zoom: number, // zoom ratio of roaming once\n    originX: number,\n    originY: number\n}\n</code></pre>\n"},"georoam":{"desc":"<p>Event emitted after <a href=\"option.html#geo\" target=\"_blank\">geo</a> is roamed.</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;georoam&#39;,\n    componentType: &#39;geo&#39; | &#39;series&#39;,\n    seriesId: string,\n    zoom: number, // zoom ratio of roaming once\n    originX: number,\n    originY: number\n}\n</code></pre>\n"},"treeroam":{"desc":"<p>Event emitted after <a href=\"option.html#series-tree\" target=\"_blank\">series-tree</a> is roamed.</p>\n<p><code class=\"codespan\">treeroam</code> events include two types. One is triggered by panning and the parameters are:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;treeroam&#39;,\n    seriesId: string,\n    dx: number,\n    dy: number\n}\n</code></pre>\n<p>The other type is triggered by zooming and the parameters are:</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;treeroam&#39;,\n    seriesId: string,\n    zoom: number, // zoom ratio of roaming once\n    originX: number,\n    originY: number\n}\n</code></pre>\n"},"timelinechanged":{"desc":"<p><strong>ACTION:</strong> <a href=\"#action.timeline.timelineChange\">timelineChange</a>\nEvent emitted after time point in timeline is changed.</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;timelinechanged&#39;,\n    // index of time point\n    currentIndex: number\n}\n</code></pre>\n"},"timelineplaychanged":{"desc":"<p><strong>ACTION:</strong> <a href=\"#action.timeline.timelinePlayChange\">timelinePlayChange</a>\nSwitching event of play state in timeline.</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;timelineplaychanged&#39;,\n    // play state, true for auto play\n    playState: boolean\n}\n</code></pre>\n"},"restore":{"desc":"<p><strong>ACTION:</strong> <a href=\"#action.toolbox.restore\">restore</a>\nResets option event.</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;restore&#39;\n}\n</code></pre>\n"},"dataviewchanged":{"desc":"<p>Changing event of <a href=\"option.html#toolbox.feature.dataView\" target=\"_blank\">data view tool in toolbox</a>.</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;dataviewchanged&#39;\n}\n</code></pre>\n"},"magictypechanged":{"desc":"<p>Switching event of <a href=\"option.html#toolbox.feature.magicType\" target=\"_blank\">magic type tool in toolbox</a>.</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;magictypechanged&#39;,\n    // click to change current type; same as type attribute in echarts 2.x\n    currentType: string\n}\n</code></pre>\n"},"geoselectchanged":{"desc":"<p><strong>ACTION:</strong> <a href=\"#action.geo.geoToggleSelect\">geoToggleSelect</a></p>\n<p>Event emitted after  selecting state changes.</p>\n<p>It will be triggered when user clicks to select.</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;geoselectchanged&#39;,\n    // series ID, can be passed in option\n    seriesId: string\n    // data name\n    name: name,\n    // list for each geo component.\n    // allSelected is supported since v5.1.0\n    allSelected: ({\n        geoIndex: number\n        // selected names of each geo component.\n        name: string[]\n    })[],\n    // (deprecated).\n    // all selected data.\n    // status of different geo components will be merged.\n    selected: {\n        [name: string]: boolean\n    }\n}\n</code></pre>\n<p><strong>Attention: </strong> This event is the same as event <code class=\"codespan\">geoSelected</code> in ECharts 2.</p>\n"},"geoselected":{"desc":"<p><strong>ACTION:</strong> <a href=\"#action.geo.geoSelect\">geoSelect</a></p>\n<p>Event after selecting.</p>\n<p>Use <code class=\"codespan\">dispatchAction</code> can trigger this event, but user clicking this event won&#39;t trigger this (User clicking event please use <a href=\"#events.geoselectchanged\">geoselectchanged</a>).</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;geoselected&#39;,\n    // series ID, can incoming in option\n    seriesId: string\n    // data name\n    name: name,\n    // table of all legend selecting states\n    selected: {\n        [name: string]: boolean\n    }\n}\n</code></pre>\n<p><strong>Attention: </strong>Event triggered by user switching legend in ECharts 2.x is changed from <code class=\"codespan\">geoselected</code> to <a href=\"#events.geoselectchanged\">geoselectchanged</a>.</p>\n"},"geounselected":{"desc":"<p><strong>ACTION:</strong> <a href=\"#action.geo.geoUnSelect\">geoUnSelect</a></p>\n<p> cancels selected event.</p>\n<p>Use <code class=\"codespan\">dispatchAction</code> will trigger this event, but user clicking won&#39;t trigger it. (For user clicking event, please refer to <a href=\"#events.geoselectchanged\">geoselectchanged</a>).</p>\n<pre><code class=\"lang-ts\">{\n    type: &#39;geounselected&#39;,\n    // series ID, can incoming in option\n    seriesId: string\n    // data name\n    name: name,\n    // table of all legend selecting states\n    selected: {\n        [name: string]: boolean\n    }\n}\n</code></pre>\n"},"axisareaselected":{"desc":"<p>Selecting event of range of <a href=\"option.html#parallelAxis\" target=\"_blank\">parallel axis</a>.</p>\n<p>When selecting axis range, the following method can be used to get data indices of currently highlighted lines, which is the list of indices in <code class=\"codespan\">data</code> of <code class=\"codespan\">series</code>.</p>\n<pre><code class=\"lang-javascript\">chart.on(&#39;axisareaselected&#39;, function () {\n    var series1 = chart.getModel().getSeries()[0];\n    var series2 = chart.getModel().getSeries()[0];\n    var indices1 = series1.getRawIndicesByActiveState(&#39;active&#39;);\n    var indices2 = series2.getRawIndicesByActiveState(&#39;active&#39;);\n    console.log(indices1);\n    console.log(indices2);\n});\n</code></pre>\n"},"brush":{"desc":"<p>Event triggered after action <a href=\"#action.brush.brush\">brush</a> dispatched.</p>\n"},"brushEnd":{"desc":"<blockquote>\n<p>Since <code class=\"codespan\">v4.5.0</code></p>\n</blockquote>\n<p>Event triggered after action <a href=\"#action.brush.brushEnd\">brushEnd</a> dispatched.</p>\n"},"brushselected":{"desc":"<p>Notice what are selected.</p>\n<p>See <a href=\"option.html#brush\" target=\"_blank\">brush component</a>.</p>\n<p>This event will be triggered when <code class=\"codespan\">dispatchAction</code> called, or use do brush behavior.\nBut this event will not be triggered in <code class=\"codespan\">setOption</code>.</p>\n<p>Properties in this event.</p>\n<pre><code class=\"lang-javascript\">{\n    type: &#39;brushselected&#39;,\n    batch: [\n        {\n            // Id of the brush component. In most case, only one brush component is used, so do not care about this property.\n            brushId: string,\n            // Index of the brush component.\n            brushIndex: number,\n            // Name of the brush component.\n            brushName: string,\n\n            // The brush areas (that is, select-boxes)\n            areas: [\n                { // The first area.\n                    // `range`/`coordRange` is used to record the current\n                    // range of the area, see the definitions in &quot;brush\n                    // action&quot;.\n\n                    // If this area is &quot;glboal arae&quot; (that is, it does not\n                    // belong to any coordinate system), use `range`, where\n                    // the values are pixel.\n                    range: Array.&lt;number&gt;,\n\n                    // If the area is &quot;coordinate system area&#39;, use `coordRange`,\n                    // where the values are coordinates.\n                    coordRange: Array.&lt;number&gt;,\n                    // Specially, if the area belongs to an axis of a &quot;grid&quot; (e.g., set\n                    // `xAxisIndex: 0`), and the axis belongs to more than one cartesian\n                    // e.g., the `xAxis` corresponds to two `yAxis`), `coordRanges` is\n                    // used to record the coordinates of this area in each cartesian,\n                    // and `coordRange` is `coordRanges[0]`.\n                    coordRanges: Array.&lt;Array.&lt;number&gt;&gt;,\n                },\n                ...\n            ],\n\n            // The selected items in each series.\n            // Notice, if a series do not support `brush`, its cooresponding item still appear in this array. Namely, the index this array is the same as `seriesIndex`.\n            selected: [\n                { // The selected items in series 0.\n                    seriesIndex: number,\n                    // dataIndex can be used to find value in original data.\n                    dataIndex: [ 3, 6, 12, 23 ]\n                },\n                { // The selected items in series 0.\n                    seriesIndex: number,\n                    dataIndex: []\n                },\n                ...\n            ]\n        },\n        ...\n    ]\n}\n</code></pre>\n<p>Usage example of this event:</p>\n<pre><code class=\"lang-javascript\">var dataBySeries = [\n    [ 12, 23, 54, 6 ], // Data of series 0.\n    [ 34, 34433, 2223, 21122, 1232, 34 ] // Data of series 1.\n];\n\nchart.setOption({\n    ...,\n    brush: {\n        ...\n    },\n    series: [\n        { // series 0\n            data: dataBySeries[0]\n        },\n        { // series 1\n            data: dataBySeries[1]\n        }\n    ]\n});\n\nchart.on(&#39;brushSelected&#39;, function (params) {\n    var brushComponent = params.batch[0];\n\n    var sum = 0; // The sum of all selected values.\n\n    for (var sIdx = 0; sIdx &lt; brushComponent.selected.length; sIdx++) {\n        var dataIndices = brushComponent.selected[sIdx].dataIndex;\n\n        for (var i = 0; i &lt; dataIndices.length; i++) {\n            var dataIndex = dataIndices[i];\n            sum += dataBySeries[sIdx][dataIndex];\n        }\n    }\n    console.log(sum);\n});\n</code></pre>\n<p><strong>Tip: </strong>\n<a href=\"option.html#brush.throttleType\" target=\"_blank\">brush.throttleType</a> can be used to avoid triggering this event too frequently.</p>\n"},"globalcursortaken":{"desc":"<p>See <a href=\"#action.brush.takeGlobalCursor\">takeGlobalCursor</a>.</p>\n"},"rendered":{"desc":"<p>Trigger when a frame rendered. Notice that the <code class=\"codespan\">rendered</code> event does not indicate that the animation finished (see <a href=\"option.html#animation\" target=\"_blank\">animation</a> and relevant options) or progressive rendering finished (see <a href=\"option.html#series-scatter.progressive\" target=\"_blank\">progressive</a> and relevant options).</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">var snapshotImage = new Image();\ndocument.body.append(snapshotImage);\nchart.on(&#39;rendered&#39;, function () {\n    snapshotImage.src = chart.getDataURL();\n});\n</code></pre>\n"},"finished":{"desc":"<p>Triggered when render finished, that is, when animation finished (see <a href=\"option.html#animation\" target=\"_blank\">animation</a> and relevant options) and progressive rendering finished (see <a href=\"option.html#series-scatter.progressive\" target=\"_blank\">progressive</a> and relevant options).</p>\n<pre><code class=\"lang-ts\">var snapshotImage = new Image();\ndocument.body.append(snapshotImage);\nchart.on(&#39;finished&#39;, function () {\n    snapshotImage.src = chart.getDataURL();\n});\n</code></pre>\n<p>Note that it&#39;s recommended to register the callbacks for such an event before <code class=\"codespan\">setOption</code> in case the callbacks may not be called as expected due to the timing issue when the animation is disabled.</p>\n<pre><code class=\"lang-ts\">var option = {\n    // ...\n    animation: false\n    // ...\n};\nchart.on(&#39;finished&#39;, function () {\n    // ...  \n});\nchart.setOption(option);\n</code></pre>\n"}}