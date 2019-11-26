# JS 数组高阶函数

* 这里回调函数中的 index 和 arr 都可以省略。回调函数后有参数是设置调整 this 指向的，这里暂时不使用

- `Array.prototype.forEach((item, index) => {})`
	遍历数组元素，利用回调函数对元素进行操作
	无法 break 中途跳出循环，因此不可控
	不支持 return 操作输出，return 只用于控制循环是否跳出当前循环
	因此难操作成新数组、新值，故不作多分析

- `Array.prototype.map((item, index, self) => {return newItems})`
	更新数组：依次调用数组元素，返回操作后的新数组，不改变原数组
	
- `Array.prototype.filter((item, index, self) => {return trueItems})`
	过滤数组：依次判断数组元素，返回结果为 true 的元素，不改变原数组

- `Array.prototype.find((item, index, self) => {return trueItem})`
	检索元素：回调函数判断为 true 则跳出循环并返回该元素
	`arr.findIndex()` 与 `arr.find()` 类似，但返回的是元素的下标

- `Array.prototype.some((item, index) => {return true?})`
	判断数组：回调函数判断结果为 true 则跳出循环并返回 true，否则返回 false

- `Array.prototype.every((item, index) => {return false?})`
	判断数组：回调函数判断结果为 false 则跳出循环并返回 false，否则返回 true

- `arr.includes(search)`
	判断数组是否含有某元素，返回一个布尔值（实用性不如正则）

- `reduce((pre, next, index, self))`
	叠加数组，这里叠加指：可以利用上次遍历操作的结果在下一次遍历使用，重复叠加使用下去
	回调函数参数：
	+ pre(第一次为数组第一项，之后为上一操作的结果)
	+ next(数组的下一项)
	+ index(next项的下标)
	+ self(数组本身)
