# ES6 语法

[TOC]

## 声明语句

- `let` 语句声明变量：可以重复赋值但不能重复声明；没有变量提升；不能跨块级作用域；全局变量不会成为 `window` 对象的属性

- `const`（constant）关键字声明常量：不能重复声明和赋值，一般使用大写

## 解构赋值

解构赋值可以用来一次初始化多个变量

- 结构数组

  - `let [a, b] = [1, 2]`
  - `let [a, b] = [b, a]` 使用数组解构进行值的互换
  - `let [a, [b, c]] = [1, [2, 3]]`
  - `let [a, b, c] = "yoo"`
  - 设置默认值：`let [a, b = default] = [1, 2]`

- 解构对象

  - `let {a, b} = {a: 1, b: 2}`
  - 重新声明并赋值：`let {a, b: c} = {a: 1, b: 2}`
  - 解构对象属性或方法：
    `let { length } = "yoo"` 相当于 `length = "yoo".length`
    `let { floor } = Math`

- 解构传参：
  `function test([a, b]) {}`
  `test([1, 2])`

  `function text({a, b}) {}`
  `test({ a: 1; b: 2 })`

- 还有一个称为属性简写的功能，它是对象解构的另一种方式
  `let [x, y] = ["a", "b"]`
  `let obj = { x, y }`
  `console.log(obj); // { x: "a", y: "b" }`

## 展开运算符

- 将传入参数转换为数组的元素，作用类似于不定参
  `funcrion fun (...x) {}`

- 剩余参数
  `funcrion fun (y, ...x) {}`

- 将集合对象转换为数组
  `[...document.querySelectorAll("div")].map`

- 依次调用数组的元素
  `console.log(...arr)`
  `func(...arr)`

- 展开对象
  `const obj2 = { ...obj1 }`

## 模板字符串

- 模板字符串（模板字面量）是允许嵌入表达式的字符串字，可以使用*多行字符串*和*字符串插值*功能

- 模板字符串包裹在一对反引号（\` \`）之中，表达式包裹在 `${}` 之中

- **标签模板字符串**：标签模板字符串是模板字符串的高级应用形式。

  - 本质并不是模板，而是函数的特殊调用形式
  - 标签指的是函数，紧跟在后面的模板字符串是函数的传入参数

  - 函数的第一个传入参数是模板字符串中所有字符串片段组成的数组
  - 函数的后续传入参数是模板字符串中所有表达式
  - 标签函数并不一定需要返回一个字符串

  ```
  alert`1`
  ```

## Promise

- Promise 是一个 JS 对象，它代表了一个异步操作的最终状态（完成或失败），以及该异步操作的结果值。

- 在实例化 Promise 对象时需要传入回调函数，第一个回调会被立即执行，该回调会被传入两个回调参数
- 调用第一个回调参数 `resolve(result)` 表示当前回调执行成功，Promise 会链式调用 `.then()` 方法中的第一个回调；
- 调用第二个回调参数 `reject()` 表示当前回调执行失败，Promise 会调用第二个回调或链式调用 `catch()` 方法中的回调函数。
- 本质上，Promise 是一个绑定了回调的对象，而不是将回调传进函数内部
- `Promise.all()` 规整方法（所有都成功才是整体的成功，否则就是失败）
- `Promise.race()` 竞速方法（首个出现的执行结果就是整体的执行结果）

## ES6 函数

### 箭头函数

- 语法：foo = x => {}
- 箭头函数没有声明提升
- 箭头函数的 this 会指向外部作用域的 this（词法作用域）

### 延展参数

- 语法：`func (a=1) // 赋予函数形参默认值`

### 生成器函数

- 生成器函数（_generator function_）返回一个生成器对象，生成器对象可以反复调用`next()` 来返回序列中的下一项

- Generator 函数语法：function 和函数名之间有一个 `*` 号；函数体内部使用了 `yield` 表达式

- 语法：
  ```
  function* func() {
    yield function() {
      console.log("第一个 next");
    }
    yield function() {
      console.log("第二个 next");
    }
  }

  func().next()
  func().next().valur() => yield_1
  func().next().valur() => yield_2
  ```

## 面向对象

### class 语句

- ES6 使用 class 语句声明构造函数，本质是封装语法糖，依旧是基于原型的实现方式

```javascript
class Person {
  constructor() {} // 声明构造函数
  method() {} // 声明原型函数
}
```

### 继承

- 使用 `extends` 关键字扩展一个类并继承它的行为
- 在构造函数中需要先调用一次 `super()` 方法继承父类的构造函数
-

```javascript
class Child extends Parent {
  constructor(x, y, color) {
    super(x, y); // 调用父类的构造函数
    this.color = color; // 扩展子类的构造函数
  }
  method() {}
}
```

### 属性存取器

- 使用 Class 语法也可以为属性创建存取器函数，虽然不像其他面向对象语言（封装概念），类的属性不是私有的，但最好还是遵循一种命名模式

```
class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
}
let min = new Func("first");
console.log(min.name);
min.name = "next";
console.log(min.name);
min.name = "last";
console.log(min.name);
```

- 要声明 get 或 set 函数，只需在要暴露和使用的函数名前面加上 get 或 set 关键字
- 可以使用相同的名字声明类属性，或者在属性名前面加下划线，让这个属性看起来像是私有的
- \_name 并非真正的私有属性，我们仍然可以引用它

### this 指向

- call() 和 alppy() 都能改变 this 指向
- 利用 apply() 函数的参数特性能把数组转化为参数，类似扩展运算符
- bind() 参数与 call() 相同，但只是返回函数体，相当于为一个函数绑定 this
- bind() 还可以预定义参数

## 块级作用域

- JS 中的作用域：全局作用域、函数作用域、块级作用域（包括 for、if 语句）
- 通过 var 声明的变量可以跨块作用域访问，但不能跨函数作用域访问
- 通过 `let`、`const` 声明的变量既不能跨块作用域访问，也不能跨函数作用域访问

## Symbol

```javascript
let first = Symbol("hello");
console.log(first.description); //"hello"

let next = Symbol.for("hello");
console.log(Symbol.keyFor(next)); //"hello"

Symbol("hello") === Symbol("hello"); // false
Symbol.for("hello") === Symbol.for("hello"); // true
```

## getter & setter

- 也就是说 setter/getter 是`hook函数`，而真实的存储变量是`_name`，我们可以在代码中直接获取它。
- `get name () { return this._name; }`

## 装饰器

- 装饰器能够为类添加静态属性和方法
- **装饰器对类的行为的改变，是代码编译时发生的，而不是在运行时**。这意味着，装饰器能在编译阶段运行代码。也就是说，**装饰器本质就是编译时执行的函数**。

```javascript
```
