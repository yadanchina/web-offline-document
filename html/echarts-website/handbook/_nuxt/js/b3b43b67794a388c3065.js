(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{559:function(n,r,e){"use strict";e.r(r),r.default="# 阶梯线图\r\n\r\n阶梯线图又称方波图，它使用水平和垂直的线来连接两个数据点，而普通折线图则直接将两个点连接起来。阶梯线图能够很好地表达数据的突变。\r\n\r\n在 ECharts 中，系列的 `step` 属性用来表征阶梯线图的连接类型，它共有三种取值：`'start'`、`'middle'` 和 `'end'`，分别表示在当前点，当前点与下个点的中间点，下个点拐弯。\r\n\r\n```js live\r\noption = {\r\n  xAxis: {\r\n    type: 'category',\r\n    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\r\n  },\r\n  yAxis: {\r\n    type: 'value'\r\n  },\r\n  series: [\r\n    {\r\n      name: 'Step Start',\r\n      type: 'line',\r\n      step: 'start',\r\n      data: [120, 132, 101, 134, 90, 230, 210]\r\n    },\r\n    {\r\n      name: 'Step Middle',\r\n      type: 'line',\r\n      step: 'middle',\r\n      data: [220, 282, 201, 234, 290, 430, 410]\r\n    },\r\n    {\r\n      name: 'Step End',\r\n      type: 'line',\r\n      step: 'end',\r\n      data: [450, 432, 401, 454, 590, 530, 510]\r\n    }\r\n  ]\r\n};\r\n```\r\n\r\n> 请注意这个例子中不同的 `step` 取值对应的数据点和连线的区别。\r\n"}}]);