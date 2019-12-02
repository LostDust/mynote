# React_阻止事件冒泡

## 原生事件与合成事件



## 方法

-  阻止合成事件间的冒泡，用 `e.stopPropagation()`；
-  阻止合成事件与除最外层 document 上的原生事件间的冒泡；

```javascript
document.body.addEventListener("click", e => {
  // 通过 e.target.matches 判断阻止冒泡，传入事件源的 select
  if (e.target && e.target.matches("#source")) return;
  console.log("todo...");
})
```

-  阻止合成事件与最外层 document 上的事件间的冒泡，用 `e.nativeEvent.stopImmediatePropagation()`

  （不懂为啥没用）