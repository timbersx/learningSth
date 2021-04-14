import { success } from './mod1.js'
// 👆在循环依赖时，
console.log(1)
console.log(success)
// console.log(success) // 会报错,ReferenceError :Cannot access 'success' before initialization
// setTimeout(() => {
//   console.log(success) // 不会报错,并且获取到了success的值
// }, 0)



setTimeout(() => {
  console.log(success) // 实时变化，是“实时绑定”的
}, 2000)

// export {
//   label
// } 