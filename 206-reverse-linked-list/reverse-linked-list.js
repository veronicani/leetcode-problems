/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) return null;
    let cur = head;
    let prev = null;
    while (cur) {
        head = cur;
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return head;
};