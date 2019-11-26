# TyprScript

[TOC]

## 依赖安装

- `yarn add typescript`
- webpack：`yarn add ts-node`

## 命令

- `tsc <fileName>`
- `tsc <fileaName> -w`

## 接口

- 对象接口

  - `interface IFull { first:string; last?:string }`

- 函数接口
  - `interface IComponent { (props?: {}): JSX.Element }`

## 属性类型

- public
- protected : 当前类和后代类
- private : 当前类

## 装饰器

- 一种特殊类型的声明，能够被附加到类声明、方法、属性或参数上，可以修改类的行为
- 一个能够对类、方法、属性或参数进行功能扩展的方法
- 类装饰器
- 方法装饰器
- 属性装饰器
- 参数装饰器
- 装饰器是过去几年中 JS 最重要的特性之一，现在已经是 ES7 的标准
