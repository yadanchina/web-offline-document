(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{562:function(n,r,e){"use strict";e.r(r),r.default="# 南丁格尔图（玫瑰图）\r\n\r\n南丁格尔图又称玫瑰图，通常用弧度相同但半径不同的扇形表示各个类目。\r\n\r\nECharts 可以通过将饼图的 [`series.roseType`](${optionPath}series-pie.roseType) 值设为 `'area'` 实现南丁格尔图，其他配置项和饼图是相同的。\r\n\r\n```js live\r\noption = {\r\n  series: [\r\n    {\r\n      type: 'pie',\r\n      data: [\r\n        {\r\n          value: 100,\r\n          name: 'A'\r\n        },\r\n        {\r\n          value: 200,\r\n          name: 'B'\r\n        },\r\n        {\r\n          value: 300,\r\n          name: 'C'\r\n        },\r\n        {\r\n          value: 400,\r\n          name: 'D'\r\n        },\r\n        {\r\n          value: 500,\r\n          name: 'E'\r\n        }\r\n      ],\r\n      roseType: 'area'\r\n    }\r\n  ]\r\n};\r\n```\r\n"}}]);