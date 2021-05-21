/* 3.寻找两个正序数组的中位数。
给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2
*/

var findMedianSortedArrays = function(nums1, nums2) {
  var i = 0; var j = 0; var k = 0
  var num3 = []
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] > nums2[j]) {
      num3[k++] = nums2[j++]
    } else {
      num3[k++] = nums1[i++]
    }
  }
  while (i < nums1.length) {
    num3[k++] = nums1[i++]
  }
  while (j < nums2.length) {
    num3[k++] = nums2[j++]
  }
  var middle = Math.floor(num3.length / 2)
  if (num3.length % 2 === 1) {
    return num3[middle]
  } else {
    return (num3[middle] + num3[middle - 1]) / 2
  }
}

var findMedianSortedArrays = function(nums1, nums2) {
  // make sure to do binary search for shorten array
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1]
  }
  // m <= n
  const m = nums1.length
  const n = nums2.length
  let low = 0
  let high = m
  while (low <= high) {
    //i + j = m - i + n - j + 1
    const i = low + Math.floor((high - low) / 2)
    const j = Math.floor((m + n + 1) / 2) - i

    const maxLeftA = i === 0 ? -Infinity : nums1[i - 1]
    const minRightA = i === m ? Infinity : nums1[i]
    const maxLeftB = j === 0 ? -Infinity : nums2[j - 1]
    const minRightB = j === n ? Infinity : nums2[j]

    if (maxLeftA <= minRightB && minRightA >= maxLeftB) {
      return (m + n) % 2 === 1
        ? Math.max(maxLeftA, maxLeftB)
        : (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2
    } else if (maxLeftA > minRightB) {
      high = i - 1
    } else {
      low = low + 1
    }
  }
}