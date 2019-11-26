# React

[TOC]

## 安装依赖

- create-react-app：官方脚手架工具
  `npm i create-react-app`
  `create-react-app appName`
  `cd appName`
  `npm start`
- react：用于创建组件和虚拟 DOM，以及组件的生命周期
  `const node = React.createElement("h1", null, "text_content")`
  `const node = React.createElement("h1", { id: "one" }, "text_content")`
- react-dom：用于进行 DOM 操作
  `ReactDOM.render(node, parentNode)`
- babel：用于转译 JSX 语法

## webpack 配置

- 安装 loader ：`babel-loader`
- 安装 _babel_ 依赖（_babel 7.0_）：
  - @babel/core
  - @babel/cli
  - @babel/polyfill
  - @babel/preset-env
  - @babel/preset-react
- 在 _babel.config.js_ 或 _.babelrc_ 中配置 _Babel_

```javascript
module.exports = function(api) {
  api.cache(true);

  const presets = ["env", "react"];
  const plugins = [];

  return {
    presets,
    plugins
  };
};
```

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": []
}
```

## JSX

### JSX 语法

- 由于关键字冲突，需要用 `className` 替代 `class` 属性，用 `htmlFor` 替代 `for` 属性；
- 写内联样式时必须传入样式属性对象，如：`<div style={ stylesObj }></div>`；
- 使用模块方式引入本地图片：
  `import img from "./img.jpg"; <img src={img} />`

- 要修改 `state` 中的数据时，使用 `this.setState({})` 才能触发页面更新；
- `this.setState({}, <callback>)` 的执行是异步的，第二个参数是执行完毕后调用的回调函数
- **事件绑定**需要使用小驼峰命名法，如：`onClick={()=> this.event()}`；
- 事件绑定如果这么写会丢失 _this_：`onClick={this.event}`；

### 创建组件

- 组件名称首字母要大写

```jsx
// 创建无状态组件
function First(props) {
  return <p>Hello?{props.msg}</p>;
}
// 创建有状态组件
class Second extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Hello"
    };
  }
  render() {
    return <p>Hello!{this.props.msg}</p>;
  }
}
```

- 组件 Props 通讯

```html
const msg = { a: 1 };
<First msg="{" msg.a }></First>
<Second { ...msg }></Second>
```

- 组件的 defaultProps 方法：声明 Props 的默认值
- 组建的 propTypes 方法：验证 Props 的数据类型，需要引入模块 "prop-types"

### 循环

```jsx
class test extends React.Component {
  constructor() {
    super();
    this.state = {
      list: ["first", "last"]
    };
  }
  render() {
    const list = this.state.list.map(item => {
      return <li key={item}>{item}</li>;
    });
    return <ul>{list}</ul>;
  }
}
```

### 样式冲突

- 在 _webpack.config.js_ 中配置 `use: ["style-loader", "css-loader?modules"]`;
- 在 _.jsx_ 文件中引入样式文件时：`import style from "./style.css"`;
- 为组件元素赋予类名：`className={style.test}`
- `css-loader?modules&localIdentName=` 自定义生成类名的格式
- [path]=>相对路径；[name] =>样式文件名；[loacl]=>类名；[hash:\<length>]=>哈希值

### 双向绑定

- 为元素绑定只读属性：`<input value={this.state.data} readOnly />`
- 为元素绑定可写属性：`<input value={this.state.data} onChang={e => this.event(e)} />`
- `event(e) { this.setState({ data: e.target.value }) }`
- JSX 中：元素的 `defaultValue` 属性为原生的 `value` 属性

### 生命周期

1. componentWillMount：组件即将挂载（即将废弃，用 constructor 代替）
2. render
3. componentDidMount：组件完成挂载
4. componentWillReceiveProps：组件即将接收 props
5. shouldComponentUpdata：方法需要返回一个布尔值，表示是否需要进行数据更新
6. componentWillUpdate：组件即将更新
7. render
8. compomentDidUpdate：组件完成更新
9. componentWillUnmount：组件即将销毁

## 路由

### React-Router-DOM

```jsx
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
// import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";

<Router>
  <Link to="/">home</Link>
  <Link to="/test">test</Link>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/test" component={Test} />
    // 子路由 <Route path={`${props.match.url}/child`} component={Child} />
  </Switch>
</Router>;
```

- `<Router>` 所有 Router 组件的通用低阶接口。通常情况下，应用程序只会使用其中一个高阶 Router：`<BrowserRouter><HashRouter><MemoryRouter>eRouter><StaticRouter>`
  - `<BrowserRouter>` 使用 HTML5 提供的 history API (`pushState`, `replaceState` 和 `popstate`事件) 来保持 UI 和 URL 的同步。
  - `<HashRouter>` 使用 URL 的 `hash` 部分（即 `window.location.hash`）来保持 UI 和 URL 的同步。
- `<Switch>` 用于渲染与路径匹配的**第一个**子 `<Route>` 或 `<Redirect>`。
- `<Route>` 最基本的职责是在其 path 属性与某个 location 匹配时呈现一些 UI。
  - 使用 `<Redirect />` 会导航（跳转）到一个新的位置，新的位置将覆盖历史堆栈中的当前条目：`<Route path="/" exact component={() => <Redirect to="/home" />} />`
  - `exact` 属性表示严格匹配
- `<Link>` 为你的应用提供声明式的、可访问的导航链接。
  - `<NavLink>` 一个特殊版本的 `<Link>`，它会在与当前 URL 匹配时为其呈现元素添加样式属性。
- `<Prompt>` 用于在位置跳转之前给予用户一些确认信息。当你的应用程序进入一个应该阻止用户导航的状态时（比如表单只填写了一半），弹出一个提示。
  - 在 BrowserRouter 和 HashRouter 上有 getUserConfirmation 属性可以阻止默认弹窗，在属性中传入回调，return 弹窗组件
- `<MemoryRouter>` 将 URL 的历史记录保存在内存中的 `<Router>`（不读取或写入地址栏）在测试和非浏览器环境中很有用，例如 React Native。

### 路由传值

```jsx
<Link to="/test/message">test</Link>
<Route path="/test/:info" component={Test} />
return <p>{props.match.params.info}</p>;       // 函数组件
return <p>{this.props.match.params.info}</p>;  // 类组件

<Link to="/test/?info=message">test</Link>
<Route path="/test" component={Test} />
return <p>{props.location.search}</p>;         // 函数组件 "?info=message"

<Link to={ { path: "/test", query: { info: "message" } } }>
<Route path="/test" component={Test} />
return <p>{props.location.query.info}</p>;     // 函数组件
```

- 在组件中获取信息：
  - `match.path` 用于匹配路径模式，常用来创建嵌套的 \<Route>，如：`Route path="/users/:Id"`
  - `match.url` 返回 URL 中匹配部分的字符串，常用于创建嵌套的 \<Link>，如：`Link to="/users/6"`；
- `withRouter`：HOC， history、location、match 三个对象传入 props

### react-router-config

```jsx
import React from "react";
import { HashRouter, Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";

const routes = [
  { path: "/", exact: true, component: Home },
  { path: "/home", component: Home },
  {
    path: "/info",
    component: Info,
    routes: [
      {
        path: "/info/child",
        component: Child
      }
    ]
  }
];

function App() {
  return (
    <HashRouter>
      <p>hello</p>
      <Link to={`/home`}>home</Link>
      <Link to={`/info`}>info</Link>
      <Link to={`/info/child`}>info/child</Link>
      {renderRoutes(routes)}
    </HashRouter>
  );
}

function Info({ route }) {
  return (
    <section>
      <p>info</p>
      {renderRoutes(route.routes)}
    </section>
  );
}
```

## 组件懒加载

```jsx
import React, { Suspense } from "react";

function Container() {
  // 使用 React 的 lazy API
  const LazyComponent = React.lazy(() => import("./Lazy.jsx"));
  return (
    <section>
      {/* 在等待加载 lazy 组件时做优雅降级（如 loading 指示器等） */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </section>
  );
}
```

```jsx
import React, { useState, useEffect } from "react";

function Container(props) {
  const [LazyComponent, setLC] = useState(null);
  useEffect(() => {
    // 使用 import
    import("./Demo.jsx").then(Com => setLC(Com.default));
  }, []);
  return <section>{LazyComponent || null}</section>;
}
```

```jsx
import React, { Suspense } from "react";
// 结合路由
function Container(props) {
  function loadLazy() {
    const LazyComponent = React.lazy(() => import("./Demo.jsx"));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    );
  }
  return (
    <section>
      <Link to="/lazy">Get</Link>
      <Route path="/lazy" render={() => loadLazy()}></Route>
    </section>
  );
}
```

```jsx
// 结合路由
function Container(props) {
  const [LazyComponent, setLC] = useState(null);
  function loadLazy() {
    if (!LazyComponent) import("./Demo.jsx").then(Com => setLC(Com.default));
    return LazyComponent || null;
  }
  return (
    <section>
      <Link to="/lazy">Get</Link>
      <Route path="/lazy" render={() => loadLazy()}></Route>
    </section>
  );
}
```

## Redux

- `npm i -D redux`
- 开发工具：Redux Developer Tools

```js
import { createStore } from "redux";

// Reducer 负责管理 Store 中的 state
const defaultStore = {
  data: "Hello~"
};
// 声明 Action 处理函数用于响应 store.dispatch 方法
function reducer(state = defaultStore, action) {
  let newState = JSON.parse(JSON.stringify(state));
  newState[action.type] = action.value;
  return newState;
}

// Store 负责存储 state
const store = createStore(reducer);
// 向外暴露 Store 对象
export default store;
```

```JSX
import React, { Component } from "react";
import store from "./store.js";

class Test extends Component {
  constructor(props) {
    super(props);
    // 组件获取 Store 中的 state
    this.state = store.getState();
    // 创建一个订阅者，监听 Store 的变化
    this.clear = store.subscribe(this.storeUpdate.bind(this));
  }
  componentWillUnmount() {
    this.clear();
  }
  storeUpdate() {
    // 在 Store 更新后刷新组件 state
    this.setState(store.getState());
  }
  change(e) {
    // 创建 Action 对象，type 字段为描述信息，value 字段为目标值
    const action = {
      type: "value",
      value: e.target.value
    };
    // 将 Action 对象传递给 Store
    store.dispatch(action);
  }
  render() {
    return (
      <section>
        <p>{this.state.data}</p>
        <input value={this.state.data || ""} onChange={e => this.change(e)}></input>
      </section>
    );
  }
}
```

### redux-thunk

Redux 的状态更新是同步的，如果需要异步更新需要使用中间件

- `yarn add redux-thunk`

```jsx
// store.js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

function reducer(){}
// 将 thunk 传入 createStore 来完成 store.dispatch 的功能增强
// * createStore 方法可以接受初始状态作为参数，那样的话 applyMiddleware 就是第三个参数了
// 如果传入多个中间件，次序从左往右
const store = () => createStore(reducer, applyMiddleware(thunk));

// 一个 Action creator，返回一个函数，而不是一个 action 对象
function fetchTodo(url) {
  return function(dispatch, getState) {
    // todo async
    fetchRequest(url)
      .then(res => res.json())
      .then(json => dispatch({ type: "UPDATE", value: json })
  }
}

class AsyncApp extends React.Component {
  componentDidMount() {
    store.dispatch(fetchTodo(url)) // .then(() => {})
  }
}

```

```jsx
// applyMiddlewares 作用是将所有中间件合成一个数组，依次执行
export default function applyMiddleware(...middlewares) {
  return createStore => (reducer, preloadedState, enhancer) => {
    var store = createStore(reducer, preloadedState, enhancer);
    var dispatch = store.dispatch;
    var chain = [];

    var middlewareAPI = {
      getState: store.getState,
      dispatch: action => dispatch(action)
    };
    chain = middlewares.map(middleware => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);

    return { ...store, dispatch };
  };
}

function thunk({ getState, dispatch }) {
  const state = getState();
  // do something
  dispatch(action);
}
```

## Hooks

- React Hooks 的意思是：组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码"钩"进来
- React 默认提供了一些常用钩子，开发者也可以自己封装钩子
- 约定钩子一律使用 `use` 前缀命名
- React_16.8+ 支持
- 状态管理：就是 React Hooks 不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序

```jsx
import React, { useState } from "react";
const [ count , setCount ] = useState(0);
<p>{count}</p>
<button onClick={()=>{setCount(count+1)}}>click</button>
```

- 生命周期钩子

```jsx
import React, { useState, useEffect } from "react";
useEffect(() => {
  // componentDidMount & componentWillUpdate(指定targetData)
});
useEffect(() => {
  return () => {
    // componentWillUnmount & compomentDidUpdate(指定targetData)
    // 数组中的状态发生变化时执行回调，当传入空数组时代表在组件销毁时执行回调
  };
}, []);
```

- Context

```jsx
import React, { createContext, useContext } from "react";

// 传递
const CountContext = createContext();
<CountContext.Provider value={count}></CountContext.Provider>

// 使用
const count = useContext(CountContext)
<CountContext.Provider value={count}>
  <p>{count}</p>;
</CountContext.Provider>
```

- useReducer
- useReducer 不能在组件外调用
- reducer return 出的是新值

```jsx
import React, { createContext, useContext, useReducer } from "react";

// store.js
const initState = { msg: "hello" };
const reduxContext = createContext(initState);
function reducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      return action[action.value];
    default:
      return state;
  }
}
// export { reduxContext, reducer };

// App.jsx
// import { reduxContext, reducer } from "store.js";
const [msg, dispatch] = useReducer(reducer, "hello");
const store = { msg, dispatch };
return <reduxContext.Provider value={store}><Child /></reduxContext.Provider>;

// Child.jsx
// import { reduxContext } from "store.js";
function Child() {
  const { msg, dispatch } = useContext(reduxContext);
  function changeValue(e) {
    const action = {
      type: "UPDATE",
      value: "info",
      info: e.target.value
    };
    dispatch(action);
  }
  return (
    <input type="text" value={msg} onChange={e => changeValue(e)} />
    <p>{msg}</p>
  );
}
```

- useRef：返回一个可变的 ref 对象，其 `current` 属性被初始化为传入的参数；返回的 ref 对象在组件的整个生命周期内保持不变。
- 作用： 获取子组件的实例(只有类组件可用) ； 在函数组件中的一个全局变量，不会因为 render 重复申明， 类似于类组件的

### 注意

- 不要在循环，条件或嵌套函数中调用 Hook，必须始终在 React 函数的顶层使用 Hook。这是因为 React 需要利用调用顺序来正确更新相应的状态，以及调用相应的钩子函数。一旦在循环或条件分支语句中调用 Hook，就容易导致调用顺序的不一致性，从而产生难以预料到的后果
- 只能在 React 函数式组件或自定义 Hook 中使用 Hook
- 通过启用 eslint-plugin-react-hooks 插件，来规范使用

## Next

## TypeScript

### package

- typescript
- @types/react
- @types/react-dom

### webpack.config

```js
esolve: {
  extensions: [".ts", ".tsx", ".js", ".jsx"]
},
rules: [
  {
    test: /\.tsx?$/,
    loader: "ts-loader",
    exclude: /node_modules/
  }
]
```

### tsconfig

```json
{
  "include": ["./src/*"],
  "compilerOptions": {
    "lib": ["dom", "es2015"],
    "jsx": "react"
  }
}
```

## react-transition-group

- 组件：Transition 、CssTransition、SwitchTransition、TransitionGroup

### CSSTransition

- 将 `CSSTransition` 组件包裹在需要实现动画效果的元素外，然后进行相关属性的配置
- `in: boolean`：从 false 变为 true 则动画入场，反之出场
- `timeout: number`：过渡时长
- `classNames: string`：默认 "fade"
- `unMountOnExit`：可选，当动画出场后在页面上移除包裹的 DOM 节点
- 组件应用了一系列 `classNames` 来对过渡样式进行描述：（\* 为 classNames）
  - 第一次加载时：`.*-appear` => `.*-appear-active` => `.*-enter-done`
  - 入场：`.*-enter` => `.*-enter-active` => `.*-enter-done`
  - 离场：`.*-exit` => `.*-exit-active` => `.*-exit-done`
- 过渡周期钩子函数
  - `onEnter`：当组件 enter 或 appear 时调用
  - `onEntering`：当组件 enter-active 或 appear-active 时调用
  - `onEntered`：当组件的 enter、appearclassName 被移除时调用
  - `onExit`：当组件应用 exit 类名时调用
  - `onExiting`：当组件应用 exit-active 类名时调用
  - `onExited`：当组件 exit 类名被移除，且添加了 exit-done 类名时调用

## React-scripts

### 定制

- 执行 `react-scripts eject`， 把 _react-scripts_ 拆除然后将配置暴露到应用顶层
- 使用 _react-app-rewired_，通过 _config-overrides.js_ 进行配置

### 配置

- 安装 _react-app-rewired_、_customize-cra_
- 修改 _package.json_ / scripts / `react-scripts *` => `react-app-rewired *`
- 创建 _config-overrides.js_

## 报错处理

- Warning: A component is changing an uncontrolled input of type undefined to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component.

- 这个组件中 `value = {this.state.data}` 有一些情况是 `this.state.data == undefined` 那么这个组件就会变成非受控组件。
- 解决方案：`value = { this.state.childName || "" }` 如果当前的状态是 undefined 那么组件的值是空字符串。
