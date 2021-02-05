// 常常用下叙方法保存arguments
Array.prototype.slice.call({'0': 'A', '1': 'B',length: 2})
// 会返回['A', 'B']

// 判断数组中是否有某元素时，位非运算相当于-（x+1）
if(~arr.indexOf(ele)){} //简洁

// 求数组中绝对值最大的一项
Math.max.apply(null, arr.map(Math.abs))

// 这个时间值代表了消息被实际加入到队列的最小延迟时间。如果队列中没有其它消息并且栈为空，在这段延迟时间过去之后，消息会被马上处理。
// 但是，如果有其它消息，setTimeout 消息必须等待其它消息处理完。因此第二个参数仅仅表示最少延迟时间，而非确切的等待时间。
setTimeout(() => {}, 1000)