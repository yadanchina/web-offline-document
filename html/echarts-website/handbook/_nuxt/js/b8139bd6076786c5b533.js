(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{506:function(r,n,e){"use strict";e.r(n),n.default="# Rich Text\r\n\r\nRich text can be used in Apache ECharts<sup>TM</sup> labels of series, axis or other components since v3.7. Which supports:\r\n\r\n- Box styles (background, border, shadow, etc.), rotation, position of a text block can be specified.\r\n- Styles (color, font, width/height, background, shadow, etc.) and alignment can be customzied on fragments of text.\r\n- Image can be used in text as icon or background.\r\n- Combine these configurations, some special effects can be made, such as simple table, horizontal rule (hr).\r\n\r\nAt the beginning, the meanings of two terms that will be used below should be clarified:\r\n\r\n- Text Block: The whole block of label text.\r\n- Text fragment: Some piece of text in a text block.\r\n\r\nFor example:\r\n\r\n<md-example src=\"doc-example/text-block-fragment\" width=\"450\" height=\"300\"></md-example>\r\n\r\n## Options about Text\r\n\r\necharts provides plenty of text options, including:\r\n\r\n- Basic font style: `fontStyle`, `fontWeight`, `fontSize`, `fontFamily`.\r\n- Fill of text: `color`.\r\n- Stroke of text: `textBorderColor`, `textBorderWidth`.\r\n- Shadow of text: `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`.\r\n- Box size of text block or text fragment: `lineHeight`, `width`, `height`, `padding`.\r\n- Alignment of text block or text fragment: `align`, `verticalAlign`.\r\n- Border, background (color or image) of text block or text fragment: `backgroundColor`, `borderColor`, `borderWidth`, `borderRadius`.\r\n- Shadow of text block or text fragment: `shadowColor`, `shadowBlur`, `shadowOffsetX`, `shadowOffsetY`.\r\n- Position and rotation of text block: `position`, `distance`, `rotate`.\r\n\r\nUser can defined styles for text fragment in `rich` property. For example, [series-bar.label.rich](option.html#series-bar.label.rich)\r\n\r\nFor example:\r\n\r\n```js\r\nlabelOption = {\r\n  // Styles defined in 'rich' can be applied to some fragments\r\n  // of text by adding some markers to those fragment, like\r\n  // `{styleName|text content text content}`.\r\n  // `'\\n'` is the newline character.\r\n  formatter: [\r\n    '{a|Style \"a\" is applied to this fragment}',\r\n    '{b|Style \"b\" is applied to this fragment}This fragment use default style{x|use style \"x\"}'\r\n  ].join('\\n'),\r\n\r\n  // Styles for the whole text block are defined here:\r\n  color: '#333',\r\n  fontSize: 5,\r\n  fontFamily: 'Arial',\r\n  borderWidth: 3,\r\n  backgroundColor: '#984455',\r\n  padding: [3, 10, 10, 5],\r\n  lineHeight: 20,\r\n\r\n  // Styles for text fragments are defined here:\r\n  rich: {\r\n    a: {\r\n      color: 'red',\r\n      lineHeight: 10\r\n    },\r\n    b: {\r\n      backgroundColor: {\r\n        image: 'xxx/xxx.jpg'\r\n      },\r\n      height: 40\r\n    },\r\n    x: {\r\n      fontSize: 18,\r\n      fontFamily: 'Microsoft YaHei',\r\n      borderColor: '#449933',\r\n      borderRadius: 4\r\n    }\r\n    // ...\r\n  }\r\n};\r\n```\r\n\r\n> Notice: `width` and `height` only work when `rich` specified.\r\n\r\n## Basic Styles of Text, Text Block and Text Fragment\r\n\r\nBasic font style can be set to text: `fontStyle`, `fontWeight`, `fontSize`, `fontFamily`.\r\n\r\nFill color and stroke color can be set to text: `color`, `textBorderColor`, `textBorderWidth`.\r\n\r\nBorder style and background style can be set to text block: `borderColor`, `borderWidth`, `backgroundColor`, `padding`.\r\n\r\nBorder style and background style can be set to text fragment too: `borderColor`, `borderWidth`, `backgroundColor`, `padding`.\r\n\r\nFor example:\r\n\r\n```js live\r\noption = {\r\n  series: [\r\n    {\r\n      type: 'scatter',\r\n      symbolSize: 1,\r\n      data: [\r\n        {\r\n          value: [0, 0],\r\n          label: {\r\n            show: true,\r\n            formatter: [\r\n              'Plain text',\r\n              '{textBorder|textBorderColor + textBorderWidth}',\r\n              '{textShadow|textShadowColor + textShadowBlur + textShadowOffsetX + textShadowOffsetY}',\r\n              '{bg|backgroundColor + borderRadius + padding}',\r\n              '{border|borderColor + borderWidth + borderRadius + padding}',\r\n              '{shadow|shadowColor + shadowBlur + shadowOffsetX + shadowOffsetY}'\r\n            ].join('\\n'),\r\n            backgroundColor: '#eee',\r\n            borderColor: '#333',\r\n            borderWidth: 2,\r\n            borderRadius: 5,\r\n            padding: 10,\r\n            color: '#000',\r\n            fontSize: 14,\r\n            shadowBlur: 3,\r\n            shadowColor: '#888',\r\n            shadowOffsetX: 0,\r\n            shadowOffsetY: 3,\r\n            lineHeight: 30,\r\n            rich: {\r\n              textBorder: {\r\n                fontSize: 20,\r\n                textBorderColor: '#000',\r\n                textBorderWidth: 3,\r\n                color: '#fff'\r\n              },\r\n              textShadow: {\r\n                fontSize: 16,\r\n                textShadowBlur: 5,\r\n                textShadowColor: '#000',\r\n                textShadowOffsetX: 3,\r\n                textShadowOffsetY: 3,\r\n                color: '#fff'\r\n              },\r\n              bg: {\r\n                backgroundColor: '#339911',\r\n                color: '#fff',\r\n                borderRadius: 15,\r\n                padding: 5\r\n              },\r\n              border: {\r\n                color: '#000',\r\n                borderColor: '#449911',\r\n                borderWidth: 1,\r\n                borderRadius: 3,\r\n                padding: 5\r\n              },\r\n              shadow: {\r\n                backgroundColor: '#992233',\r\n                padding: 5,\r\n                color: '#fff',\r\n                shadowBlur: 5,\r\n                shadowColor: '#336699',\r\n                shadowOffsetX: 6,\r\n                shadowOffsetY: 6\r\n              }\r\n            }\r\n          }\r\n        }\r\n      ]\r\n    }\r\n  ],\r\n  xAxis: {\r\n    show: false,\r\n    min: -1,\r\n    max: 1\r\n  },\r\n  yAxis: {\r\n    show: false,\r\n    min: -1,\r\n    max: 1\r\n  }\r\n};\r\n```\r\n\r\n## Label Position\r\n\r\n`label` option can be use in charts like `bar`, `line`, `scatter`, etc. The position of a label, can be specified by [label.position](option.html#series-scatter.label.position)、[label.distance](option.html#series-scatter.label.distance).\r\n\r\nTry to modify the `position` and `distance` option in the following example:\r\n\r\n```js live\r\noption = {\r\n  series: [\r\n    {\r\n      type: 'scatter',\r\n      symbolSize: 160,\r\n      symbol: 'roundRect',\r\n      data: [[1, 1]],\r\n      label: {\r\n        // Options: 'left', 'right', 'top', 'bottom', 'inside', 'insideTop', 'insideLeft', 'insideRight', 'insideBottom', 'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'\r\n        position: 'top',\r\n        distance: 10,\r\n\r\n        show: true,\r\n        formatter: ['Label Text'].join('\\n'),\r\n        backgroundColor: '#eee',\r\n        borderColor: '#555',\r\n        borderWidth: 2,\r\n        borderRadius: 5,\r\n        padding: 10,\r\n        fontSize: 18,\r\n        shadowBlur: 3,\r\n        shadowColor: '#888',\r\n        shadowOffsetX: 0,\r\n        shadowOffsetY: 3,\r\n        textBorderColor: '#000',\r\n        textBorderWidth: 3,\r\n        color: '#fff'\r\n      }\r\n    }\r\n  ],\r\n  xAxis: {\r\n    max: 2\r\n  },\r\n  yAxis: {\r\n    max: 2\r\n  }\r\n};\r\n```\r\n\r\n> Notice, there are different optional values of `position` by different chart types. And `distance` is not supported in every chart. More detailed info can be checked in [option doc](${mainSitePath}option.html).\r\n\r\n## Label Rotation\r\n\r\nSometimes label is needed to be rotated. For example:\r\n\r\n```js live {layout: 'lr'}\r\nconst labelOption = {\r\n  show: true,\r\n  rotate: 90,\r\n  formatter: '{c}  {name|{a}}',\r\n  fontSize: 16,\r\n  rich: {\r\n    name: {}\r\n  }\r\n};\r\n\r\noption = {\r\n  xAxis: [\r\n    {\r\n      type: 'category',\r\n      data: ['2012', '2013', '2014', '2015', '2016']\r\n    }\r\n  ],\r\n  yAxis: [\r\n    {\r\n      type: 'value'\r\n    }\r\n  ],\r\n  series: [\r\n    {\r\n      name: 'Forest',\r\n      type: 'bar',\r\n      barGap: 0,\r\n      label: labelOption,\r\n      emphasis: {\r\n        focus: 'series'\r\n      },\r\n      data: [320, 332, 301, 334, 390]\r\n    },\r\n    {\r\n      name: 'Steppe',\r\n      type: 'bar',\r\n      label: labelOption,\r\n      emphasis: {\r\n        focus: 'series'\r\n      },\r\n      data: [220, 182, 191, 234, 290]\r\n    }\r\n  ]\r\n};\r\n```\r\n\r\n[align](option.html#series-bar.label.align) and[verticalAlign](option.html#series-bar.label.verticalAlign) can be used to adjust location of label in this scenario.\r\n\r\nNotice, `align` and `verticalAlign` are applied firstly, then rotate.\r\n\r\n## Layout and Alignment of Text fragment\r\n\r\nTo understand the layout rule, every text fragment can be imagined as a `inline-block` dom element in CSS.\r\n\r\n`content box size` of a text fragment is determined by its font size by default. It can also be specified directly by `width` and `height`, although they are rarely set. `border box size` of a text fragment is calculated by adding the `border box size` and `padding`.\r\n\r\nOnly `'\\n'` is the newline character, which breaks a line.\r\n\r\nMultiple text fragment exist in a single line. The height of a line is determined by the biggest `lineHeight` of text fragments. `lineHeight` of a text fragment can be specified in `rich`, or in the parent level of `rich`, otherwise using `box size` of the text fragment.\r\n\r\nHaving `lineHeight` determined, the vertical position of text fragments can be determined by `verticalAlign` (there is a little different from the rule in CSS):\r\n\r\n- `'bottom'`: The bottom edge of the text fragment sticks to the bottom edge of the line.\r\n- `'top'`: The top edge of the text fragment sticks to the top edge of the line.\r\n- `'middle'`: In the middle of the line.\r\n\r\nThe width of a text block can be specified by `width`, otherwise, by the longest line. Having the width determined, text fragment can be placed in each line, where the horizontal position of text fragments can be determined by its `align`.\r\n\r\n- Firstly, place text fragments whose `align` is `'left'` from left to right continuously.\r\n- Secondly, place text fragments whose `align` is `'right'` from right to left continuously.\r\n- Finally, the text fragments remained will be sticked and placed in the center of the rest of space.\r\n\r\nThe position of text in a text fragment:\r\n\r\n- If `align` is `'center'`, text aligns at the center of the text fragment box.\r\n- If `align` is `'left'`, text aligns at the left of the text fragment box.\r\n- If `align` is `'right'`, text aligns at the right of the text fragment box.\r\n\r\n## Effects: Icon, Horizontal Rule, Title Block, Simple Table\r\n\r\nSee example:\r\n\r\n```js live {layout: 'lr'}\r\noption = {\r\n  series: [\r\n    {\r\n      type: 'scatter',\r\n      data: [\r\n        {\r\n          value: [0, 0],\r\n          label: {\r\n            formatter: [\r\n              '{tc|Center Title}{titleBg|}',\r\n              '  Content text xxxxxxxx {sunny|} xxxxxxxx {cloudy|}  ',\r\n              '{hr|}',\r\n              '  xxxxx {showers|} xxxxxxxx  xxxxxxxxx  '\r\n            ].join('\\n'),\r\n            rich: {\r\n              titleBg: {\r\n                align: 'right'\r\n              }\r\n            }\r\n          }\r\n        },\r\n        {\r\n          value: [0, 1],\r\n          label: {\r\n            formatter: [\r\n              '{titleBg|Left Title}',\r\n              '  Content text xxxxxxxx {sunny|} xxxxxxxx {cloudy|}  ',\r\n              '{hr|}',\r\n              '  xxxxx {showers|} xxxxxxxx  xxxxxxxxx  '\r\n            ].join('\\n')\r\n          }\r\n        },\r\n        {\r\n          value: [0, 2],\r\n          label: {\r\n            formatter: [\r\n              '{titleBg|Right Title}',\r\n              '  Content text xxxxxxxx {sunny|} xxxxxxxx {cloudy|}  ',\r\n              '{hr|}',\r\n              '  xxxxx {showers|} xxxxxxxx  xxxxxxxxx  '\r\n            ].join('\\n'),\r\n            rich: {\r\n              titleBg: {\r\n                align: 'right'\r\n              }\r\n            }\r\n          }\r\n        }\r\n      ],\r\n      symbolSize: 1,\r\n      label: {\r\n        show: true,\r\n        backgroundColor: '#ddd',\r\n        borderColor: '#555',\r\n        borderWidth: 1,\r\n        borderRadius: 5,\r\n        color: '#000',\r\n        fontSize: 14,\r\n        rich: {\r\n          titleBg: {\r\n            backgroundColor: '#000',\r\n            height: 30,\r\n            borderRadius: [5, 5, 0, 0],\r\n            padding: [0, 10, 0, 10],\r\n            width: '100%',\r\n            color: '#eee'\r\n          },\r\n          tc: {\r\n            align: 'center',\r\n            color: '#eee'\r\n          },\r\n          hr: {\r\n            borderColor: '#777',\r\n            width: '100%',\r\n            borderWidth: 0.5,\r\n            height: 0\r\n          },\r\n          sunny: {\r\n            height: 30,\r\n            align: 'left',\r\n            backgroundColor: {\r\n              image:\r\n                '/examples/data/asset/img/weather/sunny_128.png'\r\n            }\r\n          },\r\n          cloudy: {\r\n            height: 30,\r\n            align: 'left',\r\n            backgroundColor: {\r\n              image:\r\n                '/examples/data/asset/img/weather/cloudy_128.png'\r\n            }\r\n          },\r\n          showers: {\r\n            height: 30,\r\n            align: 'left',\r\n            backgroundColor: {\r\n              image:\r\n                '/examples/data/asset/img/weather/showers_128.png'\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  ],\r\n  xAxis: {\r\n    show: false,\r\n    min: -1,\r\n    max: 1\r\n  },\r\n  yAxis: {\r\n    show: false,\r\n    min: 0,\r\n    max: 2,\r\n    inverse: true\r\n  }\r\n};\r\n```\r\n\r\nIcon is implemented by using image in `backgroundColor`.\r\n\r\n```js\r\nrich: {\r\n    Sunny: {\r\n        backgroundColor: {\r\n            image: './data/asset/img/weather/sunny_128.png'\r\n        },\r\n        // Can only height specified, but leave width auto obtained\r\n        // from the image, where the aspect ratio kept.\r\n        height: 30\r\n    }\r\n}\r\n```\r\n\r\nHorizontal rule (like HTML &lt;hr&gt; tag) can be implemented by border:\r\n\r\n```js\r\nrich: {\r\n    hr: {\r\n        borderColor: '#777',\r\n        // width is set as '100%' to fullfill the text block.\r\n        // Notice, the percentage is based on the content box, without\r\n        // padding. Although it is a little different from CSS rule,\r\n        // it is convinent in most cases.\r\n        width: '100%',\r\n        borderWidth: 0.5,\r\n        height: 0\r\n    }\r\n}\r\n```\r\n\r\nTitle block can be implemented by `backgroundColor`:\r\n\r\n```js\r\n// Title is at left.\r\nformatter: '{titleBg|Left Title}',\r\nrich: {\r\n    titleBg: {\r\n        backgroundColor: '#000',\r\n        height: 30,\r\n        borderRadius: [5, 5, 0, 0],\r\n        padding: [0, 10, 0, 10],\r\n        width: '100%',\r\n        color: '#eee'\r\n    }\r\n}\r\n\r\n// Title is in the center of the line.\r\n// This implementation is a little tricky, but is works\r\n// without more complicated layout mechanism involved.\r\nformatter: '{tc|Center Title}{titleBg|}',\r\nrich: {\r\n    titleBg: {\r\n        align: 'right',\r\n        backgroundColor: '#000',\r\n        height: 30,\r\n        borderRadius: [5, 5, 0, 0],\r\n        padding: [0, 10, 0, 10],\r\n        width: '100%',\r\n        color: '#eee'\r\n    }\r\n}\r\n```\r\n\r\nSimple table can be implemented by specify the same width to text fragments that are in the same column of different lines. See the [example](${exampleEditorPath}pie-rich-text).\r\n"}}]);