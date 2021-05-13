/* 2.给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0 开头。*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  var ls1 = l1
  var ls2 = l2
  var carry = 0
  var result = ''
  var current = ''
  while (ls1 !== null || ls2 !== null || carry) {
    var flag = (ls1 ? ls1.val : 0) + (ls2 ? ls2.val : 0) + carry
    if (ls1 === l1) {
      result = new ListNode(flag % 10)
      current = result
    } else {
      current.next = new ListNode(flag % 10)
      current = current.next
    }
    carry = Math.floor(flag / 10)
    ls1 = ls1 && ls1.next
    ls2 = ls2 && ls2.next
  }
  return result
}

