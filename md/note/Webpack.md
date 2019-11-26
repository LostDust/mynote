# webpack@4.x

[TOC]

## 概述

功能：用于项目的自动化构建，能够根据依赖关系，将静态资源打包压缩等

当页面引入的静态资源多了以后：

- 会产生大量的二次请求；
- 依赖关系错综复杂

webpack 自身只支持处理 JS，使用 loader 能够让 webpack 处理 JS 以外的文件
包括：出入口文件、模式、loader、plugin

先简单地概述一下 webpack 的工作原理：webpack 读取入口文件（entry），然后递归查找所依赖的模块(module)，构建成一个“依赖图”，然后根据配置中的加载器(loader)和打包策略来对模块进行编译。

但是如果中间有文件发生变化了，上面所述的整个递归遍历流程会重新再进行一次。

## 安装与配置

- `npm i webpack webpack-cli -D` 命令进行安装
- 默认配置文件为 `./webpack.config.js` 或 `./webpackfile.js`
- webpack 默认只支持 JS 文件的打包，其他文件类型需要安装对应的 loader

### mode 字段

### module 字段

- rules：

```js
rules: [
  { test: /\.vue$/, use: "vue-loader" },
  { test: /\.css$/, use: ["style-loader", "css-loader"] },
  { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
  { test: /\.js$/, use: {
    loader: "babel-loader",
    // include: path.resolve("snake/src"),
    exclude: /node_modules/
  }
]
```

### devServer 字段

```json
proxy: {
  "/api": {
    target: "http://localhost:3000",
    pathRewrite: {"/api": ""} // 将/api替换掉
  }
} // 访问：http://localhost:8080/api/test，就会被代理到：http://localhost:3000/test 上
```

### plugins 字段

- 设置 HTML 模板：html-webpack-plugin 插件
- 设置全局变量：webpack.ProvidePlugin 插件

## 命令行指令

- `npm i wabpack-cli -D` 安装打包依赖
- `npx webpack` 命令进行打包，
- 该命令会运行`./node_modules/webpack/bin/webpack.js` 文件
- `npx webpack --config <configFile>` 手动指定配置文件
- 默认情况下会将 `./src/` 目录下的文件打包到 `./dist/main.js`，入口文件 `index.js`

## 本地静态服务

- `npm i webpack-dev-server -D` 安装开发服务依赖
- `npx webpack-dev-server` 命令启动静态服务
  打包文件的存放目录为项目根目录，保存在内存中而不是硬盘中

## 编译功能

### 编译 HTML 文件

- `npm i html-webpack-plugin -D` 安装 HTML 插件
- 在 `./webpack.config.js` 中进行配置
- 在打包 JS 文件时也会打包 HTML 文件，并自动引入打包后的 JS 文件

### 编译 CSS 文件

- `npm i css-loader style-loader less-loader -D` 安装 CSS 插件
- 在 `./webpack.config.js` 中进行配置
- 在 JS 源文件中引入 CSS 文件

### 抽离 CSS 样式

- `npm i mini-css-extract-plugin -D` 安装插件
- 在 `./webpack.config.js` 中进行配置
- `css-loader?modules` 为样式表启用模块化（css-in-js）
- `css-loader?localIdentName=[name]-[local]`
  - `[name]` 样式表名称
  - `[path]` 样式表相对于项目根目录的路径
  - `[local]` 样式表类名名称
  - `[hash:<length>]` 样式表哈希值
- 在打包时会将 CSS 样式抽离到一个文件中，并在 HTML 中引用

### 压缩 CSS 文件

- `npm i optimize-css-assets-webpack-plugin -D` 安装 CSS 压缩插件
  `npm i uglifyjs-webpack-plugin -D` 安装 JS 压缩插件
- 在 `./webpack.config.js` 中进行配置（需要使用生产模式）

### 添加浏览器前缀

- `npm i postcss-loader autoprefixer -D` 安装插件
- 在 `./webpack.config.js`、`./postcss.config.js` 中进行配置

### 编译 less/sass/stylus

- `npm i less less-loader -D` 安装 less 插件
  `npm i node-sass sass-loader -D` 安装 sass 插件
  `npm i stylus stylus-loader -D` 安装 stylus 插件

- 在 `./webpack.config.js` 中进行配置
- 在 JS 源文件中引入 less/sass/stylus 文件

### 处理静态资源

- `npm i url-loader file-loader -D`
- url-loader 用于将图片转换为 base64，file-loader 用于打包静态资源，生成 public URL
- 在 `./webpack.config.js` 中进行配置
- `{ test: /\.png$/, use: "url-loader" }`
- 定义多大的图片转换为 base64
- `use: [option: { limit:50000, outputPath: 'images' }]`

### 转换高级语法

- `npm i babel-loader -D` 安装 loader
  `npm i @babel/core @babel/cli -D` 安装 babel 核心模块
  `@babel/preset-env` 可以根据配置的目标运行环境，自动将 ES2015+ 的代码转换为 ES5。
  `@babel/polyfill` 用于加载 _polyfill_ 库，解决了 Babel 不转换新 API 的问题
  `@babel/runtime` 提供编译模块的工具函数，启用插件 babel-plugin-transform-runtime 后，Babel 就会使用 babel-runtime 下的工具函数
- 在 `./webpack.config.js` 中进行配置
- `module: { rules: [{ exclude: /node_modules/ }] }` 编译时忽略 node_modules 文件夹

### 代码校验

- `npm i eslint eslint-loader -D` 安装 babel 核心模块
- 下载 `.eslintrc.json` 规则文件
- 在 `./webpack.config.js` 中进行配置

## 路径别名

```javascript
resolve: {
	extensions: [".js", ".jsx"], // 在引入文件时这几种后缀名可以省略
  alias: {
		"@": path.resolve(__dirname, "./src")
  }
}
```

## 异常处理记录

### Cannot find module 'webpack/lib/node/NodeTemplatePlugin'

- npm remove webpack -g
- npm i webpack --save-dev（不要全局安装）
- 有建议将上一句分为如下两句操作（获得多数人认可）：
- npm i webpack -g
- npm link webpack --save-dev

### 引入 Node 模块报错

- 在配置文件中添加：`node: { <moduleName>: "empty" }`

## ESLint

\<cintent>
