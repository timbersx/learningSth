/* 1. 两数之和
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。 */
function getTwoAdd(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const otherIndex =  map.get(target - nums[i])
    if(otherIndex !== undefined) return [i, otherIndex]
    map.set(nums[i], i) // 把值当成键设进map里
  }
}

function getTwoAdd2(nums, target) {
  var temp = {}
  for (let i = 0; i < nums.length; i++) {
    const otherValue = target - nums[i]
    if(temp[otherValue]) return [i, temp[otherValue]]
    temp[nums[i]] = i
  }
}