/* 5.最长回文子串
给你一个字符串 s，找到 s 中最长的回文子串。
*/

/* 暴力破解，会超时 */
var longestPalindrome = function(s) {
  let result = ''
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      var str = s.slice(i, j)
      var revStr = str.split('').reverse().join('')
      if (str === revStr) {
        result = result.length < str.length ? str : result
      }
    }
  }
  return result
}

var longestPalindrome = function(s) {
  if (s.length < 2) {
    return s
  }
  var result = ''
  for (let i = 0; i < s.length; i++) {
    expandLoop(i, i)
    expandLoop(i, i + 1)
  }
  function expandLoop(m, n) {
    while (m >= 0 && n <= s.length && s[m] === s[n]) {
      m--
      n++
    }
    const res = s.slice(m + 1, n)
    result = res.length > result.length ? res : result
  }
  return result
}