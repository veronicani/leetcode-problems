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
    //create a set
    //loop through the ll
        //if it isn't in the set, add it
        //if it is in the set -> return true
    //return false;
    const seen = new Set();
    while (head) {
        if (seen.has(head)) return true;
        seen.add(head);
        head = head.next;
    }
    return false;
};