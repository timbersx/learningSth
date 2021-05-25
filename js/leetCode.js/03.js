/* 3. 无重复字符的最长字串
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let str = ''
  let res = 0
  for (let i = 0; i < s.length; i++) {
    const element = s[i]
    const ind = str.indexOf(element)
    if (~ind) {
      str = str.substr(ind + 1) + element
    } else {
      str += element
      res = str.length > res ? str.length : res
    }
  }
  return res
}

var lengthOfLongestSubstring = function(s) {
  const arr = []
  let res = 0
  for (let i = 0; i < s.length; i++) {
    const index = arr.indexOf(s[i])
    if (index !== -1) {
      arr.splice(0, index + 1)
    }
    arr.push(s[i])
    res = Math.max(arr.length, res)
  }
  return res
}