/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next) return head;

    //find the length and tail of LL
    let len = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        len++;
    }
    console.log('len=', len, 'tail=', tail);

    //find the point to cut off from the LL - k vals from tail
    if (k >= len) k = k % len;
    if (k == 0) return head;

    let curr = head;
    for (let i = 0; i < (len - k - 1); i++) {
        curr = curr.next;
    }
    let newHead = curr.next;
    curr.next = null;
    tail.next = head; 

    return newHead;
};