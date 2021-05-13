function Node(element) {
  this.element = element
  this.next = null
}

function ListNode() {
  this.head = new Node('head')
}

ListNode.prototype.find = function(item) {
  let currNode = this.head
  while (currNode.element !== item) {
    currNode = currNode.next
  }
  return currNode
}

ListNode.prototype.insert = function(newitem, item) {
  const newNode = new Node(newitem)
  const current = this.find(item)
  newNode.next = current.next
  current.next = newNode
}

ListNode.prototype.findPrevious = function(item) {
  let currNode = this.head
  while (currNode.next !== null && currNode.next.element !== item) {
    currNode = currNode.next
  }
}

ListNode.prototype.remove = function(item) {
  const lastNode = this.findPrevious(item)
  if (lastNode.next !== null) lastNode.next = lastNode.next.next
}

ListNode.prototype.edit = function(item, newItem) {
  this.find(item).element = newItem
}

ListNode.prototype.display = function() {
  var currNode = this.head
  while (currNode.next !== null) {
    console.log(currNode.next.element)
    currNode = currNode.next
  }
}