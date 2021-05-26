/* 7. 整数反转
给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0 */

// x | 0 可以用来取整
var reverse = function(x) {
  let result = 0
  while (x !== 0) {
    result = result * 10 + x % 10
    x = (x / 10) | 0
  }
  return (result | 0) === result ? result : 0
}