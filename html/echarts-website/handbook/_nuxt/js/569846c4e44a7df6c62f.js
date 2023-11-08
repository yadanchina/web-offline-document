(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{477:function(e,n,r){"use strict";r.r(n),n.default="# Dataset\r\n\r\n`dataset` is a component dedicated to manage data. Although you can set the data in `series.data` for every series, we recommend you use the `dataset` to manage the data since ECharts 4 so that the data can be reused by multiple components and convenient for the separation of \"data and configs\". After all, data is the most common part to be changed while other configurations will mostly not change at runtime.\r\n\r\n## Define **data** under **series**\r\n\r\nIf data is defined under `series`, for example:\r\n\r\n```js live\r\noption = {\r\n  xAxis: {\r\n    type: 'category',\r\n    data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']\r\n  },\r\n  yAxis: {},\r\n  series: [\r\n    {\r\n      type: 'bar',\r\n      name: '2015',\r\n      data: [89.3, 92.1, 94.4, 85.4]\r\n    },\r\n    {\r\n      type: 'bar',\r\n      name: '2016',\r\n      data: [95.8, 89.4, 91.2, 76.9]\r\n    },\r\n    {\r\n      type: 'bar',\r\n      name: '2017',\r\n      data: [97.7, 83.1, 92.5, 78.1]\r\n    }\r\n  ]\r\n};\r\n```\r\n\r\nDefining `data` under `series` is suitable for customization for some special data structures such as \"tree\", \"graph\" and large data.\r\nHowever, it is not conducive to the data sharing for multiple series as well as mapping arrangement of chart types and series based on the original data. The other disadvantage is that programmers always need to divide the data in separate series (and categories) first.\r\n\r\n## Define **data** in **dataset**\r\n\r\nHere are the advantages if you define `data` in `dataset`:\r\n\r\n- Follow the ideas of data visualization: (I) Provide the data, (II)Mapping from data to visual to become a chart.\r\n- Divide data from other configurations. The data often change but others not. It is\r\n  Easy to manage separately.\r\n- Data can be reused by several series or component, you don't need to create copies of a large amount of data for every series.\r\n- Support more common data format, such as a 2D array, array of classes, etc., to avoid users from converting for data format to a certain extent.\r\n\r\nHere is a simple `dataset` example:\r\n\r\n```js live\r\noption = {\r\n  legend: {},\r\n  tooltip: {},\r\n  dataset: {\r\n    // Provide a set of data.\r\n    source: [\r\n      ['product', '2015', '2016', '2017'],\r\n      ['Matcha Latte', 43.3, 85.8, 93.7],\r\n      ['Milk Tea', 83.1, 73.4, 55.1],\r\n      ['Cheese Cocoa', 86.4, 65.2, 82.5],\r\n      ['Walnut Brownie', 72.4, 53.9, 39.1]\r\n    ]\r\n  },\r\n  // Declare an x-axis (category axis).\r\n  // The category map the first column in the dataset by default.\r\n  xAxis: { type: 'category' },\r\n  // Declare a y-axis (value axis).\r\n  yAxis: {},\r\n  // Declare several 'bar' series,\r\n  // every series will auto-map to each column by default.\r\n  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]\r\n};\r\n```\r\n\r\nOr try to use the \"array of classes\" format:\r\n\r\n```js live\r\noption = {\r\n  legend: {},\r\n  tooltip: {},\r\n  dataset: {\r\n    // Define the dimension of array. In cartesian coordinate system,\r\n    // if the type of x-axis is category, map the first dimension to\r\n    // x-axis by default, the second dimension to y-axis.\r\n    // You can also specify 'series.encode' to complete the map\r\n    // without specify dimensions. Please see below.\r\n\r\n    dimensions: ['product', '2015', '2016', '2017'],\r\n    source: [\r\n      { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },\r\n      { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },\r\n      { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },\r\n      { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }\r\n    ]\r\n  },\r\n  xAxis: { type: 'category' },\r\n  yAxis: {},\r\n  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]\r\n};\r\n```\r\n\r\n## Map from Data to Chart\r\n\r\nThe ideas of data visualization: (I) Provide the data, (II)Mapping from data to visual to become a chart.\r\n\r\nIn short, you can set these configs of mapping:\r\n\r\n- Specify 'column' or 'row' of `dataset` to map the `series`. You can use [series.seriesLayoutBy](${optionPath}series.seriesLayoutBy) to configure it. The default is to map according to the column.\r\n- Rule of specifying dimension mapping: how to mapping from dimensions of 'dataset' to `axis`, `tooltip`, `label` and `visualMap`. To configure the mapping, please use [series.encode](${optionPath}series.encode) and [visualMap](${optionPath}visualMap). The previous case did not give the mapping configuration so that ECharts will follow the default: if x-axis is category, mapping to the first row in `dataset.source`; three-column chart mapping with each row in `dataset.source` one by one.\r\n\r\nThe details of the configuration are shown below:\r\n\r\n## Map Row or Column of **dataset** to **series**\r\n\r\nHaving the dataset, you can configure flexibly how the data map to the axis and series.\r\n\r\nYou can use `seriesLayoutBy` to change the understanding of row and column of the chart. `seriesLayoutBy` can be:\r\n\r\n- `'column'`: Default value. The series are placed above the column of `dataset`.\r\n- `'row'`: The series are placed above the row of `dataset`.\r\n\r\nCheck this case:\r\n\r\n```js live\r\noption = {\r\n  legend: {},\r\n  tooltip: {},\r\n  dataset: {\r\n    source: [\r\n      ['product', '2012', '2013', '2014', '2015'],\r\n      ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],\r\n      ['Milk Tea', 86.5, 92.1, 85.7, 83.1],\r\n      ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]\r\n    ]\r\n  },\r\n  xAxis: [\r\n    { type: 'category', gridIndex: 0 },\r\n    { type: 'category', gridIndex: 1 }\r\n  ],\r\n  yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],\r\n  grid: [{ bottom: '55%' }, { top: '55%' }],\r\n  series: [\r\n    // These series will show in the first coordinate, each series map a row in dataset.\r\n    { type: 'bar', seriesLayoutBy: 'row' },\r\n    { type: 'bar', seriesLayoutBy: 'row' },\r\n    { type: 'bar', seriesLayoutBy: 'row' },\r\n    // These series will show in the second coordinate, each series map a column in dataset.\r\n    { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },\r\n    { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },\r\n    { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },\r\n    { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 }\r\n  ]\r\n};\r\n```\r\n\r\nThe effect of configuration is shown in [this case](${exampleEditorPath}dataset-series-layout-by).\r\n\r\n## Dimension\r\n\r\nMost of the data described in commonly used charts is a \"two-dimensional table\" structure, in the previous case, we use a 2D array to contain a two-dimensional table. Now, when we map a series to a column, that column was called a \"dimension\" and each row was called \"item\", vice versa.\r\n\r\nThe dimension can have their name to display in the chart. Dimension name can be defined in the first column (row). In the previous case, `'score'`, `'amount'`, `'product'` are the name of dimensions. The actual data locate from the second row. ECharts will automatically check if the first column (row) contained dimension name in `dataset.source`. You can also use `dataset.sourceHeader: true` to declare that the first column (row) represents the dimension name.\r\n\r\nTry to use single `dataset.dimensions` or some `series.dimensions` to define the dimensions, therefore you can specify the name and type together.\r\n\r\n```js\r\nvar option1 = {\r\n  dataset: {\r\n    dimensions: [\r\n      { name: 'score' },\r\n      // can be abbreviated as 'string', to indicate dimension name 。\r\n      'amount',\r\n      // Specify dimensions in 'type'.\r\n      { name: 'product', type: 'ordinal' }\r\n    ],\r\n    source: []\r\n  }\r\n  // ...\r\n};\r\n\r\nvar option2 = {\r\n  dataset: {\r\n    source: []\r\n  },\r\n  series: {\r\n    type: 'line',\r\n    // series.dimensions will cover the config in dataset.dimension\r\n    dimensions: [\r\n      null, // use null if you do not want dimension name.\r\n      'amount',\r\n      { name: 'product', type: 'ordinal' }\r\n    ]\r\n  }\r\n  // ...\r\n};\r\n```\r\n\r\nIn most cases, you don't need to define the dimension type because the ECharts will automatically judge it. If the judgment is inaccurate, you can define it manually.\r\n\r\nDimension type can be the following values:\r\n\r\n- `'number'`: Default, normal data.\r\n- `'ordinal'`: String types data like categories, text can be used on the axis only with the dimension type 'ordinal'. ECharts will try to judge this type automatically but might be inaccurate, so you can specify manually.\r\n- `'time'`: To represent time data, ECharts can automatically analyze data as timestamp if the dimension type is defined as `'time'`. For instance, ECharts will auto-analyze if the data of this dimension is '2017-05-10'. If the dimension is used as time axis ([axis.type](${optionPath}xAxis.type) = `'time'`), the dimension type will also be `'time'`. See [data](${optionPath}series.data) for more time type support.\r\n- `'float'`: Use `TypedArray` to optimize the performance in `'float'` dimension.\r\n- `'int'`: Use `TypedArray` to optimize the performance in `'int'` dimension.\r\n\r\n## Map from Data to Charts (series.encode)\r\n\r\nAfter understand the concept of dimension, you can use [series.encode](${optionPath}series.encode) to make a mapping:\r\n\r\n```js live\r\nvar option = {\r\n  dataset: {\r\n    source: [\r\n      ['score', 'amount', 'product'],\r\n      [89.3, 58212, 'Matcha Latte'],\r\n      [57.1, 78254, 'Milk Tea'],\r\n      [74.4, 41032, 'Cheese Cocoa'],\r\n      [50.1, 12755, 'Cheese Brownie'],\r\n      [89.7, 20145, 'Matcha Cocoa'],\r\n      [68.1, 79146, 'Tea'],\r\n      [19.6, 91852, 'Orange Juice'],\r\n      [10.6, 101852, 'Lemon Juice'],\r\n      [32.7, 20112, 'Walnut Brownie']\r\n    ]\r\n  },\r\n  xAxis: {},\r\n  yAxis: { type: 'category' },\r\n  series: [\r\n    {\r\n      type: 'bar',\r\n      encode: {\r\n        // Map \"amount\" column to x-axis.\r\n        x: 'amount',\r\n        // Map \"product\" row to y-axis.\r\n        y: 'product'\r\n      }\r\n    }\r\n  ]\r\n};\r\n```\r\n\r\nThe basic structure of `series.encode` declaration:\r\n\r\n- To the left of the colon: Specific name of axis or label.\r\n- To the right of the colon: Dimension name (string) or number(int, count from 0), to specify one or several dimensions (using array).\r\n\r\nGenerally, the following info is not necessary to be defined. Fill in as needed.\r\n\r\nAttribute suggested by `series.encode`\r\n\r\n```js\r\n// Supported in every coordinate and series:\r\nencode: {\r\n  // Display the value of dimension named \"product\" and \"score\" in tooltip.\r\n  tooltip: ['product', 'score']\r\n  // Connect dimension name of \"Dimension 1\" and \"Dimension 3\" as the series name. (Avoid to repeat longer names in series.name)\r\n  seriesName: [1, 3],\r\n  // Means to use the value in \"Dimension 2\" as the id. It makes the new and old data correspond by id\r\n\t// when using setOption to update data, so that it can show animation properly.\r\n  itemId: 2,\r\n  // The itemName will show in the legend of Pie Charts.\r\n  itemName: 3\r\n}\r\n\r\n// Grid/cartesian coordinate unique configs:\r\nencode: {\r\n  // Map \"Dimension 1\", \"Dimension 5\" and \"dimension named 'score'\" to x-axis:\r\n  x: [1, 5, 'score'],\r\n  // Map \"Dimension 0\" to y-axis:\r\n  y: 0\r\n}\r\n\r\n// singleAxis unique configs:\r\nencode: {\r\n  single: 3\r\n}\r\n\r\n// Polar coordinate unique configs:\r\nencode: {\r\n  radius: 3,\r\n  angle: 2\r\n}\r\n\r\n// Geo-coordinate unique configs:\r\nencode: {\r\n  lng: 3,\r\n  lat: 2\r\n}\r\n\r\n// For some charts without coordinate like pie chart, funnel chart:\r\nencode: {\r\n  value: 3\r\n}\r\n```\r\n\r\nThis is a richer [example](${exampleEditorPath}dataset-encode1) of `series.encode`.\r\n\r\n## Default series.encode\r\n\r\nIt is worth mentioning that ECharts will use some default mapping rules for some general charts (line, bar, scatter, candlestick, etc.) if `series.encode` is not specified. The default rule is:\r\n\r\n- In coordinate system (e.g. Cartesian, Polar):\r\n  - If there is category axis ([axis.type](${optionPath}xAxis.type) = `'category'`), map the first column(row) to the axis and each subsequent column(row) to each series.\r\n  - If both axes is not the category, then map every two columns in one series to two axes.\r\n- Without axis (e.g. Pie Chart):\r\n  - Use the first column(row) as the name, second column(row) as value. ECharts will not set the name if there is only one column(row).\r\n\r\nWhile the default rule cannot fulfill the requirements, you can configure `encode` by yourself, which is not complicate. Here is an [example](${exampleEditorPath}dataset-default).\r\n\r\n## Some Normal Settings of series.encode\r\n\r\nQ: How to set the 3rd column as x-axis, 5th column as y-axis?\r\n\r\nA:\r\n\r\n```js\r\noption = {\r\n  series: {\r\n    // dimensionIndex count from 0, so the 3rd line is dimensions[2].\r\n    encode: { x: 2, y: 4 }\r\n    // ...\r\n  }\r\n};\r\n```\r\n\r\nQ: How to set the 3rd row as x-axis, 5th row as y-axis?\r\n\r\nA:\r\n\r\n```js\r\noption = {\r\n  series: {\r\n    encode: { x: 2, y: 4 },\r\n    seriesLayoutBy: 'row'\r\n    // ...\r\n  }\r\n};\r\n```\r\n\r\nQ: How to set the 2nd column as a label?\r\n\r\nA:\r\nWe now support to trace value from specific dimension for [label.formatter](${optionPath}series.label.formatter):\r\n\r\n```js\r\nseries: {\r\n  label: {\r\n    // `'{@score}'` means the value in the dimension named \"score\".\r\n    // `'{@[4]}'` means the value in dimension 4.\r\n    formatter: 'aaa{@product}bbb{@score}ccc{@[4]}ddd';\r\n  }\r\n}\r\n```\r\n\r\nQ: How to show the 2nd and 3rd column in the tooltip?\r\n\r\nA:\r\n\r\n```js\r\noption = {\r\n  series: {\r\n    encode: {\r\n      tooltip: [1, 2]\r\n      // ...\r\n    }\r\n    // ...\r\n  }\r\n};\r\n```\r\n\r\nQ: How to define the dimension name if is not included in the dataset?\r\n\r\nA:\r\n\r\n```js\r\nvar option = {\r\n  dataset: {\r\n    dimensions: ['score', 'amount'],\r\n    source: [\r\n      [89.3, 3371],\r\n      [92.1, 8123],\r\n      [94.4, 1954],\r\n      [85.4, 829]\r\n    ]\r\n  }\r\n};\r\n```\r\n\r\nQ: How to map the 3rd column to the size of the scatter chart?\r\n\r\nA:\r\n\r\n```js live\r\nvar option = {\r\n  dataset: {\r\n    source: [\r\n      [12, 323, 11.2],\r\n      [23, 167, 8.3],\r\n      [81, 284, 12],\r\n      [91, 413, 4.1],\r\n      [13, 287, 13.5]\r\n    ]\r\n  },\r\n  visualMap: {\r\n    show: false,\r\n    dimension: 2, // means the 3rd column\r\n    min: 2, // lower bound\r\n    max: 15, // higher bound\r\n    inRange: {\r\n      // Size of the bubble.\r\n      symbolSize: [5, 60]\r\n    }\r\n  },\r\n  xAxis: {},\r\n  yAxis: {},\r\n  series: {\r\n    type: 'scatter'\r\n  }\r\n};\r\n```\r\n\r\nQ: I specified a mapping in encode, why it is not worked?\r\n\r\nA: Check your spelling, such as misspell the dimension name `'Life Expectancy'` to `'Life Expectency'` in encode.\r\n\r\n## Visual Channel Mapping\r\n\r\nWe can map visual channel by using [visualMap](${optionPath}visualMap). Check details in the [visualMap](${optionPath}visualMap) document. Here is an [example](${exampleEditorPath}dataset-encode0).\r\n\r\n## Formats of Charts\r\n\r\nIn most of the normal chart, the data is suitable to be described in the form of a two-dimensional table. That well-known software like 'MS Excel' and 'Numbers' all uses a two-dimensional table. Their data can be exported to JSON format and input to `dataset.source` and avoid some steps of data processing.\r\n\r\n> You can switch .csv file to JSON using tools like [dsv](https://github.com/d3/d3-dsv) or [PapaParse](https://github.com/mholt/PapaParse).\r\n\r\nAs the example shown behind, in the data transmission of JavaScript, the two-dimensional data can be stored directly by two-dimensional array.\r\n\r\nExpect from the two-dimensional array, the dataset also supports using key-value which is also a common way. However, we don't support [seriesLayoutBy](${optionPath}series.seriesLayoutBy) in this format right now.\r\n\r\n```js\r\ndataset: [\r\n  {\r\n    // column by column key-value array is a normal format\r\n    source: [\r\n      { product: 'Matcha Latte', count: 823, score: 95.8 },\r\n      { product: 'Milk Tea', count: 235, score: 81.4 },\r\n      { product: 'Cheese Cocoa', count: 1042, score: 91.2 },\r\n      { product: 'Walnut Brownie', count: 988, score: 76.9 }\r\n    ]\r\n  },\r\n  {\r\n    // row by row key-value\r\n    source: {\r\n      product: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie'],\r\n      count: [823, 235, 1042, 988],\r\n      score: [95.8, 81.4, 91.2, 76.9]\r\n    }\r\n  }\r\n];\r\n```\r\n\r\n## How to Reference Several Datasets\r\n\r\nECharts support to define several datasets at the same moment. Series can assign the one to reference by [series.datasetIndex](${optionPath}series.datasetIndex). For example:\r\n\r\n```js\r\nvar option = {\r\n  dataset: [\r\n    {\r\n      // 1st Dataset\r\n      source: []\r\n    },\r\n    {\r\n      // 2nd Dataset\r\n      source: []\r\n    },\r\n    {\r\n      // 3rd Dataset。\r\n      source: []\r\n    }\r\n  ],\r\n  series: [\r\n    {\r\n      // Use 2nd dataset\r\n      datasetIndex: 1\r\n    },\r\n    {\r\n      // Use 1st dataset\r\n      datasetIndex: 0\r\n    }\r\n  ]\r\n};\r\n```\r\n\r\n## series.data in ECharts 3\r\n\r\nECharts 4 still supports the data declaration way in ECharts 3. If the series has already declared the [series.data](${optionPath}series.data), then use [series.data](${optionPath}series.data) but not `dataset`.\r\n\r\n```js\r\noption = {\r\n  xAxis: {\r\n    type: 'category',\r\n    data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']\r\n  },\r\n  yAxis: {},\r\n  series: [\r\n    {\r\n      type: 'bar',\r\n      name: '2015',\r\n      data: [89.3, 92.1, 94.4, 85.4]\r\n    },\r\n    {\r\n      type: 'bar',\r\n      name: '2016',\r\n      data: [95.8, 89.4, 91.2, 76.9]\r\n    },\r\n    {\r\n      type: 'bar',\r\n      name: '2017',\r\n      data: [97.7, 83.1, 92.5, 78.1]\r\n    }\r\n  ]\r\n};\r\n```\r\n\r\nIn fact, [series.data](${optionPath}series.data) is an important setting method which will always exist. Some special non-table format chart like [treemap](${optionPath}series-treemap), [graph](${optionPath}series-graph) and [lines](${optionPath}series-lines) still cannot be edit in dataset, you still need to use [series.data](${optionPath}series.data). In another way, for render huge amount of data (over a million), you need to use [appendData](${mainSitePath}api.html#echartsInstance.appendData) which is not supported by `dataset`.\r\n\r\n## Others\r\n\r\nThe following charts now support dataset:\r\n`line`, `bar`, `pie`, `scatter`, `effectScatter`, `parallel`, `candlestick`, `map`, `funnel`, `custom`.\r\nECharts will support more charts in the future.\r\n\r\nIn the end, here is an [example](${exampleEditorPath}dataset-link) of several charts shared one `dataset` with linkage interaction.\r\n"}}]);