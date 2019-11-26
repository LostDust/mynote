# 这是一级标题

---

## 目录

[TOC]

<details>
<summary>这是折叠内容</summary>
<p>pre：以原有格式显示元素内的文字是已经格式化的文本</p>
<pre><code>title，value，callBack可以缺省</code></pre>
</details>

## 前言

Markdown 是一种轻量级的「标记语言」，它的优点很多，目前也被越来越多的写作爱好者，撰稿者广泛使用。

---

## 列表语法

### 无序列表

- 第一项
- 第二项
- 第三项

### 有序列表

1. first
2. second
3. third

### 复选框

- [ ] 支持以 PDF 格式导出文稿
- [ ] 改进 Cmd 渲染算法，使用局部渲染技术提高渲染效率
- [x] 新增 Todo 列表功能
- [x] 修复 LaTex 公式渲染问题
- [x] 新增 LaTex 公式编号功能

---

## 引用格式

> 如果你需要引用一小段别处的句子，那么就要用引用的格式。

---

## 图片与链接

```markdown
[这是一张图片的超链接](../img/001.jpg)
![这是一张图片](../img/001.jpg)
```

---

## 粗体与斜体

在刚才的导语里提到，**_Markdown_** 是一种用来写作的轻量级「_标记语言_」，它用简洁的语法代替排版，而不像一般我们用的字处理软件 **Word** 或 **Pages** 有大量的排版、字体设置。它使我们专心于码字，用「_标记_」语法，来代替常见的排版格式。~~删除线~~

在刚才的导语里提到，**_Markdown_** 是一种用来写作的轻量级「_标记语言_」，它用简洁的语法代替排版，而不像一般我们用的字处理软件 **Word** 或 **Pages** 有大量的排版、字体设置。它使我们专心于码字，用「_标记_」语法，来代替常见的排版格式。~~删除线~~

## 注脚

这是一个 注脚[^1]，233。

[^1]: 这是注脚的内容。

---

## 表格

### 好麻烦 QAQ

---

## 代码框

### 代码行

`var funcs = [];`

### 代码块

```JavaScript
for (let i = 0; i < 10; i++) {
  funcs.push(function() {
    console.log(i);
  });
}
funcs.forEach(function(func) {
  func();
});
```

---

## 流程图

```flow
st=>start: Start
i=>inputoutput: 输入年份n
cond1=>condition: n能否被4整除？
cond2=>condition: n能否被100整除？
cond3=>condition: n能否被400整除？
o1=>inputoutput: 输出非闰年
o2=>inputoutput: 输出非闰年
o3=>inputoutput: 输出闰年
o4=>inputoutput: 输出闰年
e=>end
st->i->cond1
cond1(no)->o1->e
cond1(yes)->cond2
cond2(no)->o3->e
cond2(yes)->cond3
cond3(yes)->o2->e
cond3(no)->o4->e
```
