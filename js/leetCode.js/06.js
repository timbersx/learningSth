/* 6. Z 字形变换
将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
P   A   H   N
A P L S I I G
Y   I   R
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
请你实现这个将字符串进行指定行数变换的函数。
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// 创建一个数组，长度等于行数[], 然后循环字符串, 根据行数存在数组里，拼接字符串
// LEETCODEISHIRING，第一个【'L', 'E', 'E'】,然后拼接【'LC', 'ET', 'E'】......最后拼完再join就行了
 var convert = function(s, numRows) {
  const arr = []; let num = 0; let flag = false
  if (numRows === 1) return s
  for (let c = 0; c < numRows; c++) {
    arr[c] = ''
  }
  for (let c = 0; c < s.length; c++) {
  // 到达最后一行
    if (num === numRows - 1 || num === 0) {
      flag = !flag
    }
    arr[num] += s[c]
    flag ? ++num : --num
  }
  let ans = ''
  for (const item of arr) {
    ans += item
  }
  return ans
}

// 自己的写法
var convert = function (s, numRows) {
  var resultArr = []
  for (let i = 0; i < numRows; i++) {
    addIndex(i)
  }
  function addIndex(i) {
    const index = i
    let bool = true
    const cout0 = 2 * (numRows - i - 1)
    const cout1 = 2 * i
    if (cout0 === 0 && cout1 === 0) {
      return (resultArr = s.split(''))
    }
    while (s[i] !== undefined) {
      resultArr.push(s[i])
      if (index === 0) {
        i += cout0
      } else if (index === numRows - 1) {
        i += cout1
      } else if (bool) {
        i += cout0
      } else {
        i += cout1
      }
      bool = !bool
    }
  }
  return resultArr.join('')
}