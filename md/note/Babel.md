# Babel

[TOC]

## 概述

**Babel** 是一个 **JavaScript** 编译器，主要用于将 **ES2015+** 版本的代码转换为向后兼容的 **JavaScript** 语法，从而在现有环境执行

## 配置文件

配置文件用于设置转码规则和插件，**Babel** 的配置文件为 _.babelrc_ 或 _babel.config.js_。

官方建议使用 _babel.config.js_，配置文件存放于项目根目录下。

- _babel.config.js_ 文件基本格式如下：

```javascript
module.exports = function (api) {
  api.cache(true);

  const presets = [ ... ];
  const plugins = [ ... ];

  return {
    presets,
    plugins
  };
}
```

- _.babelrc_ 文件基本格式如下：

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": ["transform-vue-jsx", "transform-runtime"]
}
```

- 还可以选择将 .babelrc 中的配置信息作为 babel 键的值添加到 package.json 文件中，如下所示：

```json
{
  "name": "my-package",
  "version": "1.0.0",
  "babel": {
    "presets": [],
    "plugins": []
  }
}
```

- `presets` 字段设定转码规则，以下是官方提供的规则集，使用 **npm** 安装后在配置文件中导入
  - **ES2015** 转码规则：babel-preset-es2015
  - **ES7** 不同阶段语法提案的转码规则（共有 4 个阶段），选装一个：
  - babel-preset-stage-0
  - babel-preset-stage-1
  - babel-preset-stage-2
  - babel-preset-stage-3
  - **React** 转码规则：babel-preset-react
- 如果某些代码需要调用 **Babel** 的 **API** 进行转码，就要使用 `babel-core` 模块
- **babel-preset-env** 可以根据配置的目标运行环境自动启用需要的 **babel** 插件

## 相关工具包

1. _@babel/core_ **Babel** 核心模块
2. _@babel/cli_ 命令行工具
3. _@babel/preset-env_ 会为目标浏览器中没有的功能加载转换插件
4. _@babel/polyfill_ 模块包括 core-js 和一个自定义的 regenerator runtime 模块用于模拟完整的 ES2015+ 环境

## 运行时转换

- 使用 JSX 可以极大的简化 React 元素的创建，JSX 抽象化了 React.createElement() 函数的使用。
- 通过 Babel，将 JSX 转换为使用 React.createElement() 类的 ES5 的语句，使其能被现今的浏览器引擎识别

> 在运行时引用 babel.js 虽然容易使用而且还很方便，不过并不是一种好的方案，因为需要转换，所以更加耗时。
> 这一缺点在产品阶段显得更加明显。类似于 JSFiddle 这样的工具，在线转换 React 用的就是这种方法。

- browser.js 为 babel.js 的浏览器版本，`type="text/babel"`
