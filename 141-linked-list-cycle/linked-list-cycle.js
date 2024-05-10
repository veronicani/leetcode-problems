/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) return false;
    let f = head;
    let s = head;
    while (f.next && f.next.next) {
        f = f.next.next;
        s = s.next;
        if (f === s) return true;
    }
    return false;
};