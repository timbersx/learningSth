// 常常用下叙方法保存arguments
Array.prototype.slice.call({'0': 'A', '1': 'B',length: 2})
// 会返回['A', 'B']

// 判断数组中是否有某元素时，位非运算相当于-（x+1）
if(~arr.indexOf(ele)){} //简洁

// 求数组中绝对值最大的一项
Math.max.apply(null, arr.map(Math.abs))