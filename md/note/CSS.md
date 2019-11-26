# CSS

[TOC]

## 概述

**CSS** 指层叠样式表（_Cascading Style Sheets_），是一门指定 **HTML** 元素样式的语言。

> 尽管 "CSS3" 这个名词非常流行，但其并没有在任何规范中被定义过；它包括 CSS 规范的第三版以及 CSS2 之后的新规范。

## 选择符语法

### 选择符类型

- 基本类型：元素选择、类选择、ID 选择、属性选择
- 结构关系：后代选择、兄弟选择、相邻选择、子元素选择

### 属性选择符结合正则

- `[key=value]` => key 属性值等于 value
- `[key*=value]` => key 属性值中包含 value 字段
- `[key$=value]` => key 属性值必须以 value 字段结尾
- `[key^=value]` => key 属性值必须以 value 字段开头

### 伪类选择符

- UI 伪类能够监听 UI 的状态变化
  - `:link`：表示未访问过的链接；
  - `:visited`：表示已访问过的链接；
  - `:hover`：UI 处于鼠标悬停状态；
  - `:active`：UI 处于鼠标点击状态；
  - `:focus`：输入 UI 处于焦点状态；
  - `:target`：UI 处于被选作为目标的状态（如锚点）
- 结构化伪类能够筛选存在某种结构关系的元素
  - `:first-child`：筛选出首个子元素；
  - `:last-child`：筛选出末个子元素；
  - `:nth-child(index)`：筛选出第 index 个子元素；
  - `first-of-type`：筛选出第一个元素；
  - `last-of-type`：筛选出最后一个元素；
  - `only-of-type`：筛选出唯一一个元素；
  - `not(select)`：过滤掉符合 select 规则的元素；
  - `odd` 表示下标为奇数；`even` 表示下标为偶数

### 伪元素选择符

CSS 伪元素用于对抽象元素设置样式

- `::first-line`：选中文本元素的首行；
- `::first-letter`：选中文本元素的首字母；
- `::before`：在元素*内*的开头插入内容，`content` 属性指定插入的内容；
- `::after`：在元素*内*的末尾插入内容，`content` 属性指定插入的内容

### 权重

- **特指度**（_specificity_）：表示一条规则有多明确，特指度越高权重越高；
- 在属性后面增加 `!important` 能加重权重，如：color: blue !important;（_慎用_）

## 排版属性

### 字体属性

- `font-family` 属性指定字体栈；

  给字体栈的最后一项指定一个通用字体十分重要，如：

  `serif` 衬线字体、`sans-serif` 无衬线字体、`monospace` 等宽字体（代码体）、·cursive· 手写体

- `font-size` 属性指定字体尺寸，单位包括：`px`、`em`、`rem`；

- `font-style` 属性指定字体样式：`italic（斜体）`、`oblique`（使字体倾斜）、`normal`（正体）

- `font-weight` 属性指定字体粗细：`bold`、`normal`；

- `letter-spacing` 属性设定字符间距；

- `font-variant` 属性：`small-caps`（将小写字母变成小型大写字母，句子的首字母不变）、`normal`

- - 在设定 `font-size` 属性时可以顺便设定 `line-height`，如：`12px/1.5` 表示行高为字体大小的 1.5 倍

### 文本属性

- `text-indent` 属性指定缩进距离；
- `test-align` 属性指定文本水平对齐方式；
- `line-height` 属性用于指定行高（行高的 `1em` 相当于当前元素的 `font-size`）
- `word-spacing` 属性设定单词间距（_CSS_ 会将前后留有空格的字符或字符串视为单词）
- `vertical-align`：参照基线垂直移动文本，只作用于行内元素
- `test-transform` 属性转换文本大小写；
- `test-shadow` 属性设置字体阴影；
- `text-decoration` 属性用于为文本添加修饰样式；
- - 使用 `@font-face` 规则在网页中嵌入可下载字体的 _CSS_ 功能，已经得到广泛支持
- - 设定 _WEB_ 字体的方式包括：使用公共字体库、封装 `@font-face` 包

## 布局属性

### 盒子模型

- 垂直方向上的外边距会重叠，实际外边距为较大那个

- 为文本元素设置外边距时通常会混合使用不同的单位：

  水平边距使用 `px` 单位，以便与父元素保持固定的距离；

而垂直边距则使用 `em` 单位，使得段落间距适应字体大小的变化

- 使用 `border-style`、`border-width`、`border-color` 等属性可以一次性指定四条边框的样式；

- 使用 `border-top`、`border-right` 等属性可以指定某条边框的所有样式；

- 使用 `border-left-style` 等属性可以指定某条边框的某种样式；

- `border-radius` 属性能够指定元素边框圆角样式，

  属性值为一个时为圆角半径，两个时（如：`10px/20px`）为圆角横向半径与纵向半径

### 定位

- 绝对定位元素的任意祖先元素都可以作为定位的参照物，只要将相应祖先元素设置为相对定位
- `display: table`：该属性使元素能够模仿出与表格元素相似的特性
  - `display: table` 属性相当于 `table` 标签；
  - `display: table-row` 属性相当于 `tr` 标签；
  - `display: table-cell` 属性相当于 `td` 标签；
  - \*当设置 `display: table` 时，`padding` 设置会失效；
  - \*当设置 `display: table-row`，时，`margin` 和 `padding` 设置会失效；
  - \*当设置 `display: table-cell`，时，`margin` 设置会失效

### 浮动

- 围住浮动元素的方式

  - 为父元素添加 `overflow: hidden`，强制其包围浮动元素（该属性的真正用途是隐藏溢出内容）

  - 同时浮动父元素，会使得父元素收缩包裹住子元素（记得处理宽度）

  - 添加非浮动的清除元素：
    在父元素的最后添加一个非浮动的子元素，然后清除该元素

    - 更简洁的方式：`clearfix` 规则，赋予父元素 `clearfix` 类名

```css
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}
```

- 当没有父元素时，可以给浮动元素应用：`clear: both`，强迫其定位在前一个浮动元素下方

### 背景

- `background-attachment: fixed`，背景不会随着元素滚动而移动
- `background-size: cover` 会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小
- `background-position`
- `background-origin` 属性规定 `background-position` 属性相对于什么参照物来定位
- 渐变色：第一个参数为起点，默认为 `top`；可以为角度，如 `-45deg` 为左上角
  `background-image: linear-gradient(45deg, orange, red)`
  `background-image: linear-gradient(left, orange, red)`
  或：background-image: linear-gradient(to left, orange, red)
- 渐变点：能够设定多个渐变梯度，如：
  `background-image: linear-gradient(orange 20%, red 50%)`
- 为同一个渐变点设定两种颜色可以起到突变效果
  `background-image: linear-gradient(orange 50%, red 50%)`
  等价于：`background-image: linear-gradient(orange 20%, red 0)`
- 如果没有声明渐变点的位置，则会均匀分布于整个渐变区域
- 放射性渐变：（渐变圆心坐标，渐变类型，渐变点）
  `background-image: radial-gradient(20px, 30px, circle, red, orange, yellow)`
- 斜条纹：
  `linear-gradient(45deg, #fb3 25%, #58a 0, #58a 50%, #fb3 0, #fb3 75%, #58a0)`
  linear-gradient() 和 radial-gradient()
  repeating-linear-gradient() 和 repeating-radial-gradient()
  两者不同之处在于：后者不需要指定尺寸，会直接填满整个背景
  repeating-linear-gradient(45deg, #fb3, #58a 30px)
  background-size: width height

## 多栏布局

- 多栏布局有三种基本实现方案：固定宽度、流动、弹性

- **固定宽度**布局的大小不会随用户调整浏览器窗口大小而发生变化，一般是 900 到 1100 像素宽。其中 960 像素是最常见的

- 添加边距或边框不破坏布局的方式：

  - 从设定的元素宽度中减去增加的边距宽度和边框宽度（不推荐）；

  - 在内部元素上添加边距；

  - 使用 `box-sizing: border-box` 属性，甚至可以给所有元素应用该属性

  - IE6/7 不支持 `box-sizing`，可以使用*腻子脚本*（_polyfill_）解决该问题：

    ```html
    <!--[if lt IE 8]>
      <script src="helpers/borderBoxModel.js"></script>
    <![endif]-->
    ```

- **中栏流动**布局的大小会随用户调整浏览器窗口大小而变化，这种布局能够更好的适应大屏幕，同时也意味着放弃对页面某些方面的控制。比如随着页面的变化，文本行的长度和页面元素之间的位置关系可能随时发生变化

  - 在中栏改变大小时使用负外边距定位右栏，如：圣杯布局、双飞燕布局
  - 使用 _CSS3_ 让栏容器具有类似表格单元的行为，如：`display: table-cell`，作用：
    1. 单元格不需要浮动就可以并排显示，为其应用内边距也不会破坏布局；
    2. 默认情况下同行的单元格等高；
    3. 没有明确宽度的单元格都是流动的
  - 页脚信息：页脚适合放置一些声明信息，如：免责声明、服务条款、联系信息、隐私政策和版权声明等
  - 预防尺寸过大的子元素破坏布局的方式：`max-width: 100%`、`overflow: hidden` 以及`word-wrap: break-word` （该属性允许长单词在中间断行，一般适用于长 URL）

- 弹性布局使用 em 作为单位，页面中所有元素可以随着用户的偏好缩放

### Flex 布局

简介 {
Flex 是 Flexible Box 的缩写
意为“弹性布局”
用来为盒状模型提供最大的灵活性

任何一个容器都可以指定为 Flex 布局。
_{display: flex;}
_{display: inline-flex;}
// Webkit 内核的浏览器，必须加上-webkit 前缀
_{display: -webkit-flex; /_ Safari \*/}
注意：设为 Flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效
}

基本概念 {
采用 Flex 布局的元素，称为 Flex 容器（flex container），简称”容器”
它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称”项目”

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）
主轴的开始位置（与边框的交叉点）叫做 main start，结束位置叫做 main end；
交叉轴的开始位置叫做 cross start，结束位置叫做 cross end
项目默认沿主轴排列
单个项目占据的主轴空间叫做 main size，占据的交叉轴空间叫做 cross size
}

### 居中方式

- 水平居中

  - `inline-block`
    元素可以设定边框和边距，并会收缩包裹的内容而不是扩展填充父元素，变相为元素指定宽度

    - 设定 inline-block 属性的元素可以包围浮动元素
      为要居中的元素（如 nav）设置：text-align: center
      为其子元素（如 ul）设置：display：inline-block

- \*为其应用 auto 外边距同样可以居中，而不需要 text-align: center

  - Flex，父元素属性：

    ```css
    display: flex;
    justify-content: center；
    align-items: center;
    ```

- 垂直居中

  - `text-align: center`（`line-height = height`）
  - 设置容器属性：`display: table`
    设置子元素属性：`display: table-cell; vertical-align: middle;`

## UI 组件

### 下拉菜单

- 通过在 `<li>` 标签中嵌套 `<ul>` 标签实现多级菜单
- 将所有 `<li>` 标签指定为 relative 定位，将所有 `<ul>` 标签指定为 absolute 定位
- 横向排列菜单的子菜单定位为 {top: 100%; left: 0}，纵向排列菜单的子菜单定位为 {top: 0; left: 100%}
- 设定：`li ul { display: none } li:hover > ul {display: block}`
- 突出显示选择路径：`li:hover > a { background-color: #aaa }`
  原理是 `hover` 事件会沿元素结构层次向上冒泡，因此所有 `li` 元素都设定了该事件

### 表单

- 表单元素有两个必要的属性：`action` 和 `method`
  `action` 指定要提交的服务器接口 _URL_，`method` 指定请求提交的方式（_get_、_post_）
  表单中的数据是以键值对的形式发送给服务器的，其中*键*指控件的 name 属性值

- `<fieldset>` 元素用于包含一组相关的表单控件，其第一个子元素一定是 `<legend>` 元素，包含该控件组的标题及标注

- `<legend>` 元素的默认位置是由浏览器内部一种未加说明的机制确定的，并不是由样式表设定的。
  可以通过将其包含在属性 `display: block` 的 span 元素中来解决这个问题

- 每个控件都有一个对应的 `<label>` 元素，用于描述控件代表的数据，
  `<label>` 元素元素可以包含控件，也可以放在控件牵头或者后头，
  如果没有用 `<label>` 元素包含控件，那么其 `for` 属性必须与控件的 ID 相对应
  这是为了将两者关联起来，用户在点击标注文本时也能选择单选按钮与复选框

- 控件类型，一般值 `<input>` 元素的 type 值
  placeholder 属性指定控件内容为空时显示的占位符文本，可以为其设置样式，如：
  `input::-webkit-input-placeholder { color:#ccc }`

- 复选框与单选按钮都是成组出现的，相同的 _name_ 属性表示其属于同组复选框或单选按钮之中
  这个组中每个选项由其 _value_ 属性唯一标识，其发送到服务器的数据格式为 name="value"

- select 元素会创建一个下拉列表，每个备选项都由 option 元素标识

### 弹出层

弹出层也叫提示层，指在鼠标悬停时弹出（显示）的一个界面组件
在页面 s 空间有限的情况下，可以为用户提供更多的信息

- 行内元素的定位原则是与文本基线对齐，而不是与其容器的底边对齐
  因此在将其放在块级匀速内时，指定其属性 display: block
- z-index 与动态生成 HTML 元素
- figure 与 figcaption 元素
  figure 元素内只能有一个 figcaption 元素，并且时首个或末个元素

在一个包含多个同辈元素的容器内，这些同辈元素会构造一个堆叠上下文，
其子元素会上下堆叠起来，如第一个元素及其后代元素都将位于第二个元素下面
通过将 div 的宽和高设为 0，将其他三个边框颜色设为 transparent 来制作三角形

## 响应式

- 响应式设计的要素：媒体查询、流式布局、弹性图片
- 使用一项叫媒体查询的 CSS 功能，能检测出用户设备的屏幕大小
  媒体查询可以使用两种方法来写：@media 规则和 `<link>` 标签的 media 属性
  常用的媒体类型：all、handled、print、screen...
  媒体特性：min-device-width、min-width、orientation（portrait、landscape）
  可以使用逻辑运算符（and\or\not）及关键字（all\only）组合媒体类型和媒体特性
  其中 only 关键字可以用来对不支持媒体查询的浏览器隐藏样式表

  - 在样式表中包含 @media，如：@media print {nav {display: none}}
    这条规则声明：如果当前页面要打印，那就比显示 nav 元素
    - 在此是将 CSS 嵌套进 @media 规则中，
      尽管可以将 CSS 嵌套进 @media 中，但媒体查询本身却不能互相嵌套
      @media screen and (max-width:568px) {
      .column {float:none; width:96%; margin:0 auto;}}
      当页面时通过屏幕显示并且屏幕宽度不大于 568 像素时，令 column 类的元素互相堆叠
  - 在 `<link>` 标签的 media 属性里写媒体查询

- 断点：指媒体查询起作用的屏幕宽度临界点
  - 用 `<meta>` 标签设定视口：
    移动设备会将适合大屏幕的网页缩小，某些时候这并不是所期望的结果
    `<meta name="viewport" content="width=device-width; maximumscale=1.0" />`
    通过 `<meta>` 标签告诉浏览器按照屏幕宽度来显示网页，不要缩小网页
  - 针对平板优化布局 及 针对智能手机优化布局
  - 移动 Safari 中的缩放 bug：Safari Mobile（iPhone 浏览器）中有一个 bug
    在设备从竖屏旋转成横屏时，会导致缩放和重绘问题
    让下拉菜单支持触摸：使用 Modernizr 检测设备是否支持触摸

## 常用属性

### 过渡属性

- `transition` 属性

  -property：产生变化的属性
  -duration：变化的时间长度
  -timing-function：调速函数（ease-in、ease-out、ease-in-out、linear）
  -delay：变化前的延时时间

- 2D 过渡

  rotate()，旋转元素，参数为角度（deg），可为负
  translate(x, y)，平移元素，参数为距离，可为负*[translateX, translateY]
  scale(x, y)，缩放元素，参数为倍数，可为负*[scaleX, scaleY, scaleZ]
  skew(x, y)，倾斜元素，参数为角度（deg），可为负\_[skewX, skewY]
  matrix()方法有六个参数，包含旋转，缩放，移动（平移）和倾斜功能

  - 透视：transform: perspective(800px);

- 3D 过渡

  rotateX()，围绕 X 轴旋转元素，参数为角度，单位 deg，可为负
  rotateY()，围绕 Y 轴旋转元素，参数为角度，单位 deg，可为负
  translateZ()，需要给父级赋予 transform-style: preserve-3d;

- 变换参考点

  transform-origin: x y;
  transform-origin: left center; // 左-中
  transform-origin: 0% 50%; // 左-中
  transform-origin: 0px 50px;

### 阴影属性

box-shadow: h-shadow v-shadow blur spread color inset;
boxShadow 属性把一个或多个下拉阴影添加到框上。

- 该属性是一个用逗号分隔阴影的列表，每个阴影由 2-4 个长度值、一个可选的颜色值
  和一个可选的 inset 关键字来规定。

h-shadow 水平阴影偏移量，允许负值（必需）
v-shadow 垂直阴影偏移量，允许负值（必需）
blur 模糊量，过渡距离（可选）
spread 阴影的大小，增加量（可选）
color 阴影的颜色（可选）
inset 从外层的阴影（开始时）改变阴影内侧阴影（可选）
+= ,inset 0 0 0 0 red

### 可见性属性

- `display: none` 元素不会占据显示空间，即不会被渲染到文档中
  `visibility: hidden`、`opacity: 0` 元素会占据显示空间，即会被渲染到文档中

- 原生 js 设置透明度（兼容 IE 与其他浏览器）\

  ```javascript
  var alpha = 30;
  node.style.filter = "alpha(opacity:" + alpha + ")";
  node.style.opacity = alpha / 100;
  ```

- jQuery 设置透明度（jQuery 对设置进行了整合，解决了兼容问题）
  `$("select").css("opacity","0.3")`

## 浏览器前缀

- 厂商前缀（VSP）用于声明该属性是过渡的、部分实现的或者实验性的，为保证在大多数浏览器中能够使用这个属性，应根据对应的浏览器为其添加 VSP

  - -webkit- /_ Safari and Chrome _/
  - -moz- /_ Firefox _/
  - -ms- /_ IE 9 _/
  - -o- /_ Opera _/
  - 最后别忘了 W3C 标准属性声明
  - \*Modernizr 是一个 JS 库，用于检测用户浏览器支持哪些 HTML5 和 CSS3 功能

- 在标准的开发过程中，开发者往往没有兴趣尝试那些实验性的标准，因为一旦这些技术有变动，应用该技术的网站就会出现问题，这就否定开发者尝试早期标准的付出。为了解决这个难题，许多方案被提了出来，饱受诟病的浏览器前缀就是其中之一。现在浏览器厂商已经很少以前缀的方式来实验性地实现新特性了，取而代之的是通过配置开关来启用新特性，这可以有效防止开发者在生产环境中使用它们

## 变量

- `background: currentColor` 将颜色设置为文本的颜色
- `font: inherit` 将字体设定为与页面的其他部分相同（color: inherit;）
  inherit 可以用在任何 CSS 属性中，而且它总是绑定到父元素的计算值

## 函数

- calc(）

## 媒体查询

一个**媒体查询**由一个可选的媒体类型和若干个使用媒体功能的限制了样式表范围的表达式组成，例如宽度、高度和颜色。**媒体查询**，添加自 CSS3，允许内容的呈现针对一个特定范围的输出设备而进行裁剪，而不必改变内容本身。

## 预处理语言

### 嵌套

### 运算

- `margin: (14px/2);`
- `top: 50px + 100px;`
- `right: 100px - 50px;`
- `left: 10 * 10;`

### css 变量

- Sass 的变量必须是 \$ 符号开始，然后变量名和值使用冒号隔开
- Less 的变量名使用 @ 符号开始
- Stylus 对变量名没有任何限定，你可以是 \$ 开始，也可以是任意的字符，而且与变量值之间可以用冒号、空格隔开，需要注意的是 Stylus (0.22.4) 将会编译 @ 开始的变量，但其对应的值并不会赋予该变量，换句话说，在 Stylus 的变量名不要用 @ 开头。

### Mixins (混入)

- Sass：`@mixin error($borderWidth: 2px) {}`
  调用：`p { @include error(5px); }`

- Less：`.error(@borderWidth: 2px) {}`
  调用：`p { .error(5px); }`

- Stylus：`error(borderWidth= 2px) {}`
  调用：`p { error(); }`

### 继承

- Less：`.block {} p{ .book; }`

- Sass 和 Stylus：`.block {} p{ @extend .book; }`

### 导入

- `@ import "reset.css";`

### 颜色函数

### 错误报告
