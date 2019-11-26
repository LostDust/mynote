# JavaScript\_闭包与 WeakMap 对象实现对象的私有属性

```JavaScript
let Parent = (() => {
  let data = new WeakMap();
  let Parent = {
    set: function(msg) {
      data.set(this, msg);
    },
    get: function() {
      console.log(data.get(this));
    }
  };
  return Parent;
})();


let Child = (() => {
  let Child = Object.create(Parent);
  return Child;
})()

Parent.set(10);
Parent.get();

Child.set(20);
Child.get();
```
