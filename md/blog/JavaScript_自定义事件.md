# JavaScript_自定义事件

## 原生

```javascript
window.addEventListener("eventName", event => {
  console.log("得到数据为：", event.detail.info);
  });
function todo() {
  const myEvent = new CustomEvent("eventName", {
    detail: { info: "hello" }
  });
  window.dispatchEvent(myEvent);
}
```

## events 模块

- node 的 events 模块只提供了一个对象：`events.EventEmitter`，其核心就是事件触发与事件监听器功能的封装 
-  大多数情况下我们并不会直接去使用 EventEmitter，而是在对象中继承它。 

```javascript
const events = require("events");
const emitter = new events.EventEmitter();
// 事件监听1
emitter.on([eventName], (arg1, arg2) => { console.log("监听器1", arg1, arg2) });
// 事件监听2
emitter.on([eventName], (arg1, arg2) => { console.log("监听器2", arg1, arg2) });
// 事件触发
emitter.emit([eventName], "hello", "world"); // 监听器1 hello world 监听器2 hello world
// 其他 API
emitter.once() // 注册单次监听器，触发一次后立刻解除该监听器
emitter.removeListener() // 注销事件监听
emiiter.removeAllListeners() // 注销所有事件监听



```

- EventEmitter 定义了一个特殊的事件 error，通常在遇到异常时会发射 error 事件。
- 当 error 被触发时，EventEmitter 规定如果没有响应的监听器，Node.js 会把它当作异常，退出程序并打印调用栈。我们一般要为会发射 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃。



















