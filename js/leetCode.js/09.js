/* 9. 回文数
给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。 */
/**
 * @param {number} x
 * @return {boolean}
 */

// 双指针
var isPalindrome = function(x) {
  x = x + ''
  var len = x.length
  var i = 0; var j = len - 1
  while (j > i) {
    if (x[i] !== x[j]) {
      return false
    }
    i++
    j--
  }
  return true
}

// 反转一半数字
var isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }
  var reverseNumber = 0
  while (x > reverseNumber) {
    reverseNumber = reverseNumber * 10 + x % 10
    x = parseInt(x / 10)
  }
  return x === reverseNumber || x === parseInt(reverseNumber / 10)
}