// 常常用下叙方法保存arguments
Array.prototype.slice.call({'0': 'A', '1': 'B',length: 2}) // 会返回['A', 'B']

// 判断数组中是否有某元素时，位非运算相当于-（x+1）
if(~arr.indexOf(ele)){} //简洁

// 求数组中绝对值最大的一项
Math.max.apply(null, arr.map(Math.abs))

// 这个时间值代表了消息被实际加入到队列的最小延迟时间。如果队列中没有其它消息并且栈为空，在这段延迟时间过去之后，消息会被马上处理。
// 但是，如果有其它消息，setTimeout 消息必须等待其它消息处理完。因此第二个参数仅仅表示最少延迟时间，而非确切的等待时间。
setTimeout(() => {}, 1000)

// 不是所有的回调函数都是异步的 — 有一些是同步的。一个例子就是使用 
Array.prototype.forEach()

// 传递参数给setTimeout() 
function sayHi(who) {
  alert('Hello ' + who + '!');
}
let myGreeting = setTimeout(sayHi, 2000, 'Mr. Universe')

// .then()块的工作方式类似于使用AddEventListener()向对象添加事件侦听器时的方式。它不会在*事件发生之前*运行（当promise履行时）。
// 最显着的区别是.then()每次使用时只运行一次，而事件监听器可以多次调用。
Promise.then(() => {})

// XMLHttpRequest
function sendMessage(url, type, callBack) {
  let xhr = new XMLHttpRequest()
  xhr.open('get', url)
  xhr.responseType = type
  xhr.onload = function() {
    callBack(xhr.response)
  }
  xhr.send()
}