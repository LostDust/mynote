# Angular

[toc]

## 项目结构

- @e2e/ 端对端测试文件
- @node-modules/
- @src/
  - @src/app/ 根模块和组件
    - @src/app/app.module.ts 根模块：告诉 ag 如何组装应用
    - @src/app/app.component.html 根组件
    - @src/app/app.component.ts 根组件
    - @src/app/app.component.less 根组件
  - @src/assets/ 静态资源
  - @src/browserslist 支持哪些浏览器
  - @src/favicon.ico
  - @src/index.html
  - @src/main.ts
  - styles.less
- @package.json
- @tsconfig.json
- @tslint.json

## 项目依赖

### 特性包

- _@angular/core_：ng 核心库，包括所有的元数据装饰器： `Component` 、 `Directive` ，依赖注入系统，以及组件生命周期钩子。
- _@angular/platform-browser_：与 DOM 和浏览器相关的每样东西，特别是帮助往 DOM 中渲染的那部分。 这个包还包含 bootstrapStatic 方法，用来引导那些在产品构建时需要离线预编译模板的应用程序。
- _@angular/platform-browser-dynamic_：为应用程序提供一些 _提供商_ 和 _bootstrap_ 方法，以便在客户端编译模板。不要用于离线编译。 我们使用这个包在开发期间引导应用，以及引导 plunker 中的范例。
- _@angular/common_：常用的那些由 Angular 开发组提供的服务、管道和指令。
- _@angular/compiler_：Angular 的模板编译器 。 它会把模板转化成代码，以供应用程序运行和渲染。 开发人员通常不会直接跟这个编译器打交道，而是通过 platform-browser-dynamic 或离线模板编译器间接使用它。

### 填充 (Polyfill) 包

- _rxjs_：一个为 可观察对象 (Observable) 规范 提供的填充库，该规范已经提交给了 TC39 委员会，以决定是否要在 JavaScript 语言中进行标准化。 开发人员应该能在兼容的版本中选择一个喜欢的 rxjs 版本，而不用等 Angular 升级。
- _core-js_：为全局上下文 (window) 打的补丁，提供了 ES2015(ES6) 的很多基础特性。 我们也可以把它换成提供了相同内核 API 的其它填充库。
- _zone.js_：一个为 Zone 规范 提供的填充库，该规范已经提交给了 TC39 委员会，以决定是否要在 JavaScript 语言中进行标准化。 开发人员应该能在兼容的版本中选择一个喜欢的 zone.js 版本，而不用等 Angular 升级。

## 模板语法

- 属性绑定：`<div [title]="data" [ngClass]="" [ngStyle]=""></div>`
- 文本绑定：

```vue
<div>{{ data }}</div>
```

- 数据绑定：`import { FormsModule } from "@angular/forms"; <input [(ngModule)]="val"></input>`
- 判断：`<li *ngIf="item.show"></li>`
- for 循环：`<li *ngFor="let item of list; let key = index"></li>`
- switch 循环：`<ul [ngSwitch]="data"><li *ngSwitchCase="val"></li><li *ngSwitchDefault></li></ul>`
- 事件：`<button (click)="event($event)"></button>`
- 管道：Vue 的过滤器
