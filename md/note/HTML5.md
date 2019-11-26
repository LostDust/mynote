# HTML5

[TOC]

## 新增属性

- contentEditable：使元素内容在页面中可编辑，该属性可继承；
- spellCheck：对元素的输入内容进行拼写检查；
- placeholder
- <\* id="el" data-info="" /> => el.dataset.info

## 新增元素

## History

- HTML5 History API 能在不刷新整个页面的情况下修改站点的 URL
- `history.replaceState([data], [title], [url])` 方法会替换地址栏中的 URL，但不会修改浏览器的 History
- `history.pushState([data], [title], [url])` 方法会修改浏览器的 History
- [data] 用来传递我们需要的数据，当页面的状态发生变化时我们可以接收到该数据。如用户点击浏览器的后退和向前按钮。需要注意的是在 Firefox 中只允许传递最多 640K 的数据
- [title] 是一个字符串，不过截止到目前，几乎所有的浏览器都忽略该参数
- [url] 是我们想要替换的 URL
