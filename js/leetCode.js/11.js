/* 11. 盛最多水的容器
给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。*/

/**
 * @param {number[]} height
 * @return {number}
 */

// 双指针法，舍弃较小边
var maxArea = function(height) {
  var len = height.length
  var s = 0
  var b = len - 1
  var squre = 0
  while (s !== b) {
    var space
    if (height[b] >= height[s]) {
      space = height[s] * (b - s)
      s++
    } else {
      space = height[b] * (b - s)
      b--
    }
    squre = squre < space ? space : squre
  }
  return squre
}