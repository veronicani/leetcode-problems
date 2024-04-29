/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let sorted = new ListNode();
  let curr = sorted;
  while (list1 && list2)  {
    if (list1.val <= list2.val) {
        curr.next = list1;
        list1 = list1.next;
    } else {
        curr.next = list2;
        list2 = list2.next;
    }
    curr = curr.next;
    console.log('sorted=', sorted);
    console.log('curr=', curr);
    console.log('list1=', list1, 'list2=', list2);
  }

  if (list1) curr.next = list1;
  else if (list2) curr.next = list2;

  return sorted.next;
};