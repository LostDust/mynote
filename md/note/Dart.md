# Dart

[TOC]

## 环境搭建

## 基础语法

### 数据类型

- Number: int\double
- String
- Boolean: bool
- List
- Maps

### 声明

- `<dataType> <varName> = date`
- `var` 语句能够声明任意类型的静态类型变量
- `dynamic` 语句能够声明任意类型的动态类型变量
- 声明函数时需要声明返回值类型：`<returnType> <functionName> = function`
- `void` 语句能够声明没有返回值的函数
- 不声明返回值类型的函数可以返回任意类型
- 不定参数用 `[]` 框起来，默认参数用赋值运算符
- `final` 类似 `const`，但 `final` 是惰性初始化，即在第一次使用时才进行初始化

### 面向对象

- Dart 中没有 public 之类的访问修饰符，在属性或方法前加 `_` 表示其为私有，但必须将其所属的类抽离成模块才能生效
- 类名同时也作为该类实例的声明语句
- 与类名同名的方法为该类的默认初始化方法，不需要声明返回值类型
- 命名初始化方法：`<默认初始化方法>.<命名初始化方法>() {}`
- 初始化方法简写：`<初始化方法>(this.xxx)`
- 初始化列表：`<初始化方法>():dataName=data {}`
- 计算方法能够当作属性使用：
  - getter: `get dataName { return }`
  - setter: `set dataName(value) {} dataName = value;`
- `static` 标识静态成员，在类中调用静态成员不需要类名作为前缀
- 静态成员无法访问实例成员
- 对象操作符

  - 条件运算符：`clsName?.method()` 判断对象为空时不执行
  - 类型判断：`if(child is Parent)`，相当于 JS 的`instanceof`
  - 类型转换：`child as Parent`，转换实例的类
  - 级联（链式）操作：`flag.a = 1..b = 2;`

- 建议在复写父类方法时，标注：`@override`；
- 引用父类的构造函数：`<初始化方法>(xxx):super(yyy) {}`
- `super` 返回父类的引用，用以调用父类的构造函数及实例属性方法

### 接口

- 抽象类，对后代类的行为进行约束，无法直接实例化：`abstract class <抽象类名> {}`
- 抽象方法：语法相当于没有函数体的普通方法，后代类必须实现抽象方法
- 接口：`class <className> implements <抽象类名> {}`
- 接口是一种特殊抽象类(语法角度)，只能有抽象方法和常量
- 如果是复用已有的类的实现，使用继承(extends)，如果只是使用已有类的外在行为，使用接口(implements)
- 接口出了要实现抽象方法，还需要实现属性；
- 一个类可以有多个接口，但不能多继承
- 使用 mixins 实现混合：`class C with A,B {}`，A 和 B 中不能有构造函数，并且只能继承自 Object
- mixins 的类型就是其超类的子类型

### 泛型

- 泛型能够校验不确定的数据类型，用`<T>`来表示：`T fn<T>(T val) {}`
- E(element)、T(type)、K(key)、V(value)是泛型中常用的几个名称,实际上定义泛型时完全可以不使用它们.
- `fn<String>()` 函数的参数及返回值都必须是 String
- 应用：`class List<T> {} list l = new List<int>()`

## 库

- 自定义库：`import "lib/xxx.dart";`
- 内置库：`import "dart/io";`
- Pub 库：`import "package:serral/xxx.dart";`
  - 创建 _pubspec.yaml_ 文件，配置依赖；
  - 运行 `pub get`;

## 笔记

- final 类似 const，但 final 是惰性初始化，即在第一次使用时才进行初始化
- a ??= 1; 如果 a 为空的话，将 1 赋值给 a
- b = a ?? 1; 如果 a 为空的话，将 1 赋值给 b
- data is type 判断数据类型
- str.isEmpty 判断是否为空字符串
- num.isNaN 判断是否为 NaN
- 访问修饰符
- dart2js dart 文件名 --out=js 文件名

---

a ??= 1; 如果 a 为空的话，将 1 赋值给 a

b = a ?? 1; 如果 a 为空的话，将 1 赋值给 b

data is type 判断数据类型

str.isEmpty 判断是否为空字符串

num.isNaN 判断是否为 NaN

可选参数使用中括号包裹
