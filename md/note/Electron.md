# Electron

[TOC]

## 依赖

- `electron`、`electron-packager`

## 主进程与渲染进程

- 运行 JS 脚本的进程称为主进程；

- 主进程使用 BrowserWindow 实例在渲染进程中渲染页面，有多少页面就有多少渲染进程

- `const { BrowserWindow } = require('electron')`
- `const win = new BrowserWindow()`

- `let myNotification = new Notification('标题', { body: '通知正文内容' })`
- `myNotification.onclick = () => console.log('通知被点击')`

## 渲染进程调用 NodeAPI

- 引入 `electron` 模块的 `remote` 对象，`const remote= require("electron").remote`

- `remote` 对象方法：

- const { ipcRenderer } = **require**("electron"); // 通讯 ipcMain

## 进程间通讯

- `win.send("call", <msg>)` - `ipcRenderer.on("call", (e, [msg]) => {})`
- `ipcRenderer.send("call", <msg>)` - `ipcMain.on("call", (e, [msg]) => {})`

## 打包

- `electron-packager . <ProjectName> --win --out ../Snake --arch=x64 --app-version=0.0.1 --ignore=node_modules --electron-version=6.0.0`

## 调试

引入 electron 时：`const { ipcRenderer } = window.require("electron")`，不然会报错

Electron 扩展了`window`对象
