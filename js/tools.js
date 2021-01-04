/**
 * 检查val是否是有效的数组索引。
 */
function isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  // n >= 0 {不是负数} ；Math.floor(n) === n {不是小数，不是NaN, 但依然可能会是正无穷} ；isFinite(val) {不是无穷数}
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * 输入值字符串转数字，如果失败则返回字符串
 */
function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}