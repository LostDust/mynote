# npm & yarn

[TOC]

## npm 指令

- 项目初始化：`npm init`
- 安装项目的全部依赖：`npm install`
- 安装：`npm install <moduleName>`
  `--save`/`-S` 将包添加到依赖列表里面
  `--save --dev`/`-D` 将包添加到开发依赖列表里面
- 升级：`npm update`、`npm update <moduleNmae>`
- 移除：`npm uninstall <moduleNmae>`
- 运行：`npm run <script>`
- 清除缓存：`npm cache clean --force`
- 查看全局安装路径：`npm config get prefix`
- 清楚缓存：`npm cache clean --force`
- 设置淘宝源：`npm config set registry https://registry.npm.taobao.org`
- 查看源：`npm config get registry`
- 查看 prefix 变量：`npm config get prefix`

## yarn 指令

- 项目初始化：`yarn init`
- 安装项目的全部依赖：`yarn`
- 安装：`yarn add [<moduleNmae>]`
- 升级：`yarn upgrade <moduleNmae>`
- 移除：`yarn remove <moduleNmae>`
- 运行：`yern <script>`
- 清除缓存：`yarn cache clean`

## Linux

- 软链接配置全局命令：sudo ln -s /usr/local/bin/node /bin/node
