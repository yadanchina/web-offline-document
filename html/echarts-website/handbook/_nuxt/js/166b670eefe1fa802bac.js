(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{468:function(e,t,r){"use strict";r.r(t),t.default='# Stacked Area Chart\r\nThe stacked area chart is a special kind of area chart. It is used to compare several data series in the same interval. The main difference between the area chart and stacked area chart is that the base of every series is over the previous one. Therefore, every time a line is measured, the area between the lines will be filled with color.\r\n\r\nIf there are several series and you want to analyze the part-to-whole relationship for every single one, which reflects the contribution of partial quantity to the total, you can use the stacked area chart. For instance, the contribution of one seller to the total sales.\r\n\r\n<iframe max-width="830" width="100%" height="400" \r\nsrc="https://gallery.echartsjs.com/view-lite.html?cid=xHySthj74z">\r\n</iframe>\r\n\r\nHere are two different kinds of stacked area chart:\r\n\r\n+ <b>Traditional stacked chart</b>: Use the original value to stack, show the change in the whole process.\r\n+ <b>Percentage stacked chart</b>: The percentage stacked chart shows how did the relationship between series changed with time. The cumulative total is not the focus as this kind of chart. The important is to show the series distribution as the whole.\r\n\r\n<iframe max-width="830" width="100%" height="400" \r\nsrc="https://gallery.echartsjs.com/view-lite.html?cid=xSyBN2i7Vf">\r\n</iframe>\r\n\r\n## Suggestion for Using Stacked Area Chart\r\n\r\n1. The area chart can\'t display data in many series that are closed to each others. It will make the chart hard to read: \r\n\r\n<iframe max-width="830" width="100%" height="400" \r\nsrc="https://gallery.echartsjs.com/view-lite.html?cid=xHyNDxOo4M">\r\n</iframe>\r\n\r\nWith the same series, stacked bar chart works better:\r\n\r\n<iframe max-width="830" width="100%" height="400" \r\nsrc="https://gallery.echartsjs.com/view-lite.html?cid=xSyBN2i7Vf">\r\n</iframe>\r\n\r\n<div class="article-look-outside">\r\n\t<div class="article-look-inside" style="padding-bottom:50%">\r\n\t    <iframe class="article-look-content"\r\n\t    src="https://gallery.echartsjs.com/view-lite.html?cid=xHyNDxOo4M">\r\n\t    </iframe>\r\n\t</div>\r\n</div>\r\n\r\n2. Although the stacked bar chart is good dealing with several series, try not to include more than 7 in one chart.\r\n\r\n3. Because the stacked bar chart provides the relation between part and whole, you should not include negative value in series.\r\n\r\n4. We suggest putting larger values on the top side of the chart, you will get a better display effect.\r\n'}}]);