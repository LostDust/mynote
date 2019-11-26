# Vue

[TOC]

## 概述

- Vue 是用于构建视图界面的渐进式框架，核心库只关心视图层
- 响应式的数据绑定、视图组件化
- 框架工具
  1. 构建工具（@vue/cli）
  2. 请求工具（vue-resource）
  3. 客户端状态（vue-router）
  4. 大规模状态管理（vuex）

> 库：开发时调用的代码包；框架：完整的项目解决方案。

- `Vue.config.productionTip = false` 阻止启动生产消息

## Vue 实例

### 字段

- `el` 属性指定挂载节点
- `data` 属性定义实例下的属性，视图将会实时响应这些属性的变化
- `methods` 属性定义实例下的方法
- `computed` 属性会返回运算的结果
  与 `methods` 不同，`computed` 会对计算结果进行响应式缓存
- `watch` 属性侦听其他属性的变动，适用于执行异步操作或开销较大的操作
- `components` 属性定义实例下的组件
  `template` 组件需要模板以及注册通讯
- `filter` 属性定义过滤器
- `transitions` 属性定义过渡效果
  `leaveClass: , enterClass:`
- 此外 Vue 实例还暴露了其他的属性与方法，它们都以 `$` 为前缀

### 生命周期

- **实例生命周期**
  1. beforeCreate(){} //开始创建实例
  2. created(){} //创建实例完成（变量声明完成）
  3. beforeMount(){} //开始渲染模板
  4. mounted(){} //渲染模板完成（文档渲染完成）
- **数据生命周期**
  1. beforeUpdate(){} //开始数据更新
  2. updated(){} //数据更新之后
  3. beforeDestroy(){} //开始销毁数据
  4. destroyed(){} //销毁数据完成

### 过渡动画

- 将过渡节点置入 `<transition>` 标签中
  `v-for` 应包裹在 `<transition-group>` 标签中
  添加 `appear` 属性实现初始化时的过渡
  添加 `tag="ul"` 属性指定 `<transition-group>` 转译的标签类型，默认为 `<span>`
- `<transition>` 的 `name` 属性指定样式前缀，默认为 `v`
- 入场过渡：`.v-enter => .v-enter-active => .v-enter-to`
- 离场过渡：`.v-leave => .v-leave-active => .v-leave-to`
- 过渡周期钩子函数 `v-on`：
  - `before-enter => enter => after-enter`、`enter-cancelled`
  - `before-leave => leave => after-leave`、`leave-cancelled`
- `<transition-group>` 组件还有一个特殊之处。不仅可以进入和离开动画，还可以改变定位。要使用这个新功能只需了解新增的 **v-move 特性**，它会在元素的改变定位的过程中应用

### 发送请求

- `vue-resource` `axios`

## 模板语法（数据驱动）

- vue 允许开发者声明式地将实例数据与 DOM 绑定起来
- 在底层实现上，vue 将模板编译成虚拟 DOM 渲染函数
- 也可以不使用模板，使用 JSX 语法直接写渲染（render）函数

### 插值与指令

- **插值：** 通过 `{{ msg }}` 语法将实例数据或 JS 表达式插入 innerHTML
  注意每个绑定最多只能包含单个表达式
- **指令：**
  - `v-once` 指令指定该节点不会响应实例数据的变化，不需要属性值
  - `v-html` 指令在该节点下输出 HTML 代码，属性值为字符串
    `v-html="<html>"`
  - `v-if` 指令定义节点是否插入到 DOM 中，属性值为字符串
    后面可以跟 `v-else` 或 `v-if-else` 子句
  - `v-show` 指令定义节点的可见性，属性值为布尔值
  - `v-for"` 指令可以遍历数组项或对象属性名，使用 `for-in` 语法
    `<li v-for="i in arr">{{i}}</li>`
    `data:{arr:[1, 2]}`
    高级遍历语法：`<li v-for="(value, key, index) in object">`
    也可以循环整数：`<li v-for="i in 10">`
  - `v-bind` 指令可以绑定 HTML 属性和实例数据
    `v-bind:attr="<app.data>"`
  - `v-on` 指令用于监听 DOM 事件，`v-on:click="<app.method>"`
  - `v-model` 指令用于表单元素绑定
- **指令缩写：**
  `v-bind:attr="<app.data>"` => `:attr="<app.data>"`
  `v-on:click="<app.method>"` => `@click="<app.method>"`
- **动态参数：**
  `v-on:[argu]="<app.method>"`，`[]` 包含的的内容会被当做实例数据或 JS 表达式解析
- **修饰符：**
  `v-on:submit.prevent="onSubmit"`，`.` 后面的内容会被视为修饰符，用于指出一个指令应该以特殊方式绑定
  - `v-model.lazy` 在 "change" 时而非 "input" 时响应更新
  - `v-model.number` 自动将用户输入的数据转变为数字类型
  - `v-model.trim` 自动过滤用户输入的首尾空格
  - `@submit.prevent` 阻止默认事件
  - `@click.stop` 阻止事件冒泡

> 模板表达式都被放置在沙盒中，只能访问全局变量的一个白名单，如 Math、Date
> 开发者不应在模板表达式中试图访问用户定义的全局变量

### 类绑定

- 对象语法：
  `v-bind:class="{ active: isActive }"`
  `v-bind:class="{ <app.data> }"`
  给 `v-bind:class` 传递一个对象，类名的存在与否取决于其属性值的真假
  对象语法常常结合返回对象的计算属性使用
- 数组语法：
  `v-bind:class="[activeClass, errorClass]"`
  给 `v-bind:class` 传递一个数组，将实例数据作为数组项传递进去
  还可以在数组语法中嵌套对象语法 `v-bind:class="[<app.data>, activeClass]"`

### 样式绑定

- 对象语法
  `v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"`
  `v-bind:style="{ <app.data> }"`
  Vue 支持将数组作为属性值传入，最终会渲染数组中最后一个被浏览器支持的值
- 数组语法
  `v-bind:style` 的数组语法可以将多个样式对象应用到一个元素上
- 当使用需要添加浏览器引擎前缀的 CSS 属性时，Vue 会自动侦测并添加相应的前缀

## Vue 组件

### 组件注册

- 获取组件的 name：`VueComponent.$options.name`

- 组件是可复用的 Vue 实例，调用组件语法：`<componentName></componentName>`
- 组件的 data 属性必须是一个函数，每个组件各自维护独立的数据对象
- 在实例外注册组件（全局注册）

```JavaScript
Vue.component('componentName', {
  data: function () {
    return { data }
  },
  template: <HTML>
})
new Vue({})
```

- 在实例内注册组件（局部注册）

```JavaScript
new Vue({
  cpmponents: {
    componentName: {
      data: function () {
        return { data }
      },
      template: <HTML>
    }
  }
})
```

- 动态组件
  `<component v-bind:is="tempName">`
  `is` 属性的值为组件名称，切换组件会初始化数据

### 模板声明

保证模板元素只有一个子元素

- 以字符串形式存在
- 包含在 `<template>` 标签中以 HTML 代码形式存在

```JavaScript
<template id="temp"> <HTML> </template>
new Vue({{
  components: {
    componentName: {
      template: "#temp"
    }
  }
})
```

- 包含在 `<script type="text/x-template">` 标签中以 HTML 代码形式存在
  `type="text/x-template"` 中的内容会被浏览器忽略掉，不会被解析
  当浏览器渲染到模板引擎的 JS 代码时，JS 模板引擎获取到这个标签中的内容，然后使用数据对其进行渲染输出到页面上（此语法不能引用文件）

```JavaScript
<script type="text/x-template" id="temp"> <HTML> </script>
new Vue({{
  components: {
    componentName: {
      template: "#temp"
    }
  }
})
```

### 组件通信

- 在外部向组件内传递数据
  `component` 对象的 `prop` 属性可以在组件上注册自定义特性
  传递给 `prop` 特性的值会变成组件实例的一个属性
  一般会配合 `v-for` 和 `v-bind` 指令使用

```JavaScript
<template id="temp">{{ msg }}</template>
// 将值传递给 prop 特性
<componentName v-for="i in list" v-bind:msg="i"></componentName>
new Vue({
  data: {
    list: [{}, {}, {}]，
    plat: 1
  },
  components: {
    componentName: {
      template: "#temp",
      // 注册自定义特性
      props: ["msg"]
    }
  }
})
```

- 子组件内部向外部传递数据或触发事件

组件的 `$emit()` 方法能够触发组件外部的自定义事件
第一个参数为外部监听到的自定义事件名，第二个参数是自定义事件的传入参数

```JavaScript
<template id="parent"></template>
<template id="child">
  <button v-on:click="$emit('call', msg)"></button>
</template>
<parent>
  <child v-on:call="func"></chlid>
</parent>
// app.$on:call 也可以监听到
Vue.component("parent", {
  template: "#parent",
  methods: {
    func：function(args) {
      console.log(args);
    }
  }
});
Vue.component("child", {
  template: "#child",
  data: function() {
    return { msg: "" }
  }
});
```

- 在组件上使用 `v-model`

```JavaScript
<template id="temp">
  <input
    type="text"
    // 将其 value 特性绑定到一个名叫 value 的 prop 上
    v-bind:value="value"
    // 在其 input 事件被触发时，将新的值通过自定义的 input 事件抛出
    v-on:input="$emit('input', $event.target.value)"
  />
</template>
<temp v-model="msg"></temp>
Vue.component("temp", {
  props: ["value"],
  template: "#temp"
});
```

## Vue 自定义指令

## VueRouter

### 路由配置

- 引入 `vue-router.js` 文件；

- 或安装并引入 `vue-router` 模块并在 Vue 上注册：`Vue.use(VueRouter)`

- 实例化路由对象 `VueRouter` 并配置路由

```JavaScript
// 创建一个路由并进行配置
let router = new VueRouter({
  mode: 'history', // 开启 history 模式
  routes: [{
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home
      children: [{
          path: "child",
          alias: "other", // 路径别名
          name: "child", // 标识路由
          component: Child
        },
        { // 懒加载
          path: "lazy",
          component: resolve => require(["./components/Lazy.vue"], resolve)
        }
      ]
    }
  ]
});
```

- 在 Vue 实例中注册路由并在挂载节点下插入路由模板

  1. `<router-link to=""></router-link>`
  2. `<router-view></router-view>`

- 以 `/` 开头的嵌套路径会被当作根路径

### 导航守卫

- 全局导航守卫：
  - `router.beforeEach((to, from, next) => {})`;
  - `router.beforeResolve((to, from, next) => {})`;
  - `router.afterEach((to, fromt) => {})`
- 路由规则中声明：`{ routes: [{ beforeEnter: ((to, from, next) => {}) => {} }] }`
- 组件导航守卫：
  - `beforeRouteEnter(to, from, next){}`;
  - `beforeRouteUpdate(to, from, next){}`;
  - `beforeRouteLeave(to, from, next){}`
- `beforeRouteEnter` 不能获取组件实例 this
- next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
- next(false): 中断当前的导航。
- next(url)

### $route 和 $router

- \$router 为 VueRouter 实例，想要导航到不同 URL，则使用 `$router.push(location, onComplete?, onAbort?)` 方法
  - `router.push("/home")`
  - `router.push({ name: "home", params: { id: "233" } })` 需要使用 `name` 字段标识路由
- \$route 为当前 Router 跳转对象，里面可以获取 `name`、`path`、`query`、`params` 等

### 传递参数

```vue
routes: [{ path: "/test/:id", component: Test }]
<router-link to="/test/ID"></router-link>
<p>{{ $route.params.id }}</p>

routes: [{ path: "/test", component: Test }]
<router-link to="/test?id=ID"></router-link>
<p>{{ $route.query.id }}</p>
```

## Vue 插槽

- 在组件标签中添加的内容可以插入到模板的指定位置

```html
<component><content /></component>
<template>
  <slot></slot>
</template>
```

- 具名插槽：为添加的内容指定名称属性

```html
// 组件调用
<component>
  <template v-slot:slotName><content /></template>
</component>
// 组件模板
<template>
  <slot name="<slotName>"></slot>
</template>
```

- 作用域插槽：能够让插槽内容访问子组件中的数据

```html
// 组件调用
<component>
  <template v-slot:slotName="<msgName>">{{ msgName }}</template>
</component>
// 组件模板 绑定在
<slot>
  元素上的特性被称为插槽 prop
  <template>
    <slot :msg="data"></slot> </template
></slot>
```

## 运行时版本

### webpack

- `npm i vue vue-loader vue-template-compiler -D`
- 在 `./webpack.config.js` 中进行配置
- 注意引入插件 `vue-loader/lib/plugin`

### vue-loader

- _vue-loader_ 会解析 vue 文件，提取每个语言块，如有必要会通过其它 loader 处理（比如\<script>默认用 babel-loader 处理，\<style>默认用 style-loader 处理）。最后将他们组装成一个 CommonJS 模块，module.exports 出一个 Vue.js 组件对象。

### 模板的 `style` 元素属性

- `scoped` 属性指定样式只作用于当前模板，不需要属性值
- `lang` 属性指定使用的预处理语言，如：`sass`、`less`

## vue-cli

- Vue cli
  1. `npm install -g @vue/cli` 安装 VueCli_3.x
  2. `vue create <project>` 初始化项目模板
  3. `cd <project>` 进入项目目录
  4. `npm run serve` 启动开发环境

## Vuex

- **Vuex** 的核心是 _store_，其本质上是一个容器，存储着应用中的 _state_。Vuex 和全局对象有以下两点不同：
  1. Vuex 的状态存储是响应式的，若 store 中的状态发生变化，那么相应的组件也会发生更新；
  2. 改变 store 中的状态的唯一途径就是显式地*提交 (commit) mutation*
- Vuex 并不限制你的代码结构。但它规定了一些需要遵守的规则：
  1. 应用层级的状态应该集中到单个 store 对象中
  2. 提交 **mutation** 是更改状态的唯一方法，并且这个过程是同步的
  3. 异步逻辑都应该封装到 **action** 里面
- 安装依赖：`npm i -D vuex`
- 在项目目录下新建：./src/vuex/store.js

```js
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    info: "I'm Info"
  },
  // 改变 store 中的 state（同步）
  mutations: {
    call1: (state, msg) => (state.info = msg);
  },
  // 间接调用 mutation 的方法（异步）
  actions: {
    call2: (context, msg) => context.commit("call1", msg)
  },
  // getters 算是 state 的一个计算属性
  getters: {
    after: state => `${state.info} >>>`
  }
});
```

- 在组件中调用 store

```vue
<template>
  <section>
    <p>store: {{ $store.state.info }}</p>
    <p>getter: {{ $store.getters.after }}</p>
    <input type="text" v-model="$store.state.info" />
    <button @click="$store.commit('call1', 'haha')">Click</button>
    <button @click="$store.dispatch('call2', 'hehe')">Click</button>
  </section>
</template>

<script>
import store from "./vuex/store.js";
export default { store };
</script>
```

- 使用 _mutations(同步)_ 和 _actions(异步)_ 修改 store 中的 state 的方式和自定义事件 _emit_ 非常相似
- 官方并不建议直接去修改 store 里面的值，而是通过提交一个 actions，在 actions 中提交 mutation 去修改状态值

- _getters_ 算是 store 的一个计算属性，通过 store 对象的 getters 属性来访问
- { mapState, mapMutations, mapActions, mapGetters }
- `map*` 辅助函数能够将 store 中的 `*` 映射到组件中，调用辅助函数时需传入一个对象，value 值为 store 的属性名或方法名的，key 值为其映射到当前组件中的命名名称。
- mapGetters 可传入数组，这样做不可为映射目标重命名

```vue
<template>
  <section>
    <p>store: {{ $store.state.info }}</p>
    <p>getter: {{ $store.getters.after }}</p>
    <input type="text" v-model="$store.state.info" />
    <button @click="change1('haha~')">Click</button>
    <button @click="change2('hehe~')">Click</button>
  </section>
</template>

<script>
import store from "./vuex/store.js";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapMutations({
      change1: "call1"
    }),
    ...mapActions({
      change2: "call2"
    })
  },
  computed: {
    ...mapState({
      last: "info"
      // 使用箭头函数会丢失 this 指向
      // last: state => state.info
    }),
    ...mapGetters({ after: "after" })
    // ...mapGetters(["after"])
  },
  store
};
</script>
```

## Nuxt

## TypeScript

### 依赖

- **ts-loader**：让 webpack 能够识别 _.ts_、_.tsx_ 文件
- **vue-class-component**： 作用是用类的方式编写组件
  `import { Component } from "vue-class-component"`

- **vue-property-decorator**：在 _vue-class-component_ 上增强更多结合 Vue 特性的装饰器
  `import { Component, Vue } from "vue-property-decorator"`

### 配置

- 让 TypeScript 识别 _.vue_：创建 src/shim-vue.d.ts 文件，作用是告诉 TypeScript _.vue_ 文件可以交给 vue-load 模块来处理

```typescript
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
```

- tsconfig.json

```json
{
  "exclude": ["node_modules"],
  "compilerOptions": {
    // 与 Vue 的浏览器支持保持一致
    "target": "es5",
    // 这可以对 this 上的数据属性进行更严格的推断
    "strict": true,
    // 如果使用 webpack 2+ 或 rollup，可以利用 tree-shake:
    "module": "es2015",
    "moduleResolution": "node",
    // 启用装饰器
    "experimentalDecorators": true,
    // 支持 JSX
    "jsx": "preserve",
    // 是否在表达式和声明上有隐含的any类型时报错
    "noImplicitAny": false
  }
}
```

- webpack

```javascript
rules: [
  {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    options: { appendTsSuffixTo: [/\.vue$/] }
  },
  { test: /\.vue$/, loader: "vue-loader" },
}
```

### 代码

```vue
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class App extends Vue {
  info: string = "Hello~";
  // 生命周期钩子
  mounted(): void {
    this.print();
  }
  // 计算属性
  get computedInfo(): string {
    return `computed: ${this.info}`;
  }
  // 方法
  print(): void {
    alert(`greeting: ${this.info}`);
  }
}
</script>
```

## JSX

### 依赖

- 安装 loader ：babel-loader
- 安装 _babel_ 依赖（_babel 7.0_）：

  - @babel/core
  - @babel/cli
  - @babel/polyfill
  - @babel/preset-env
  - @vue/babel-preset-jsx
  - @vue/babel-helper-vue-jsx-merge-props

### 配置

- webpack

```
rules: [
  { test: /\.vue$/, loader: "vue-loader" },
  { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/ }
]
```

- 可在 prackage.json 中配置，也可新建配置文件

```json
{
  "presets": ["@vue/babel-preset-jsx"],
  "plugins": []
}
```

### 代码

```jsx
<script lang="jsx">
  export default {
    name: "App",
    data() {},
    render() {
      return <p>Hello</p>
    }
  };
</script>
```
