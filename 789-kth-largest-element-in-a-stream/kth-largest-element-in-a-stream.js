class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class MPriorityQueue {
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;

    }

    _findNextNode(node) {
        let curr = this.head;
        while (curr) {
            if (node.val < curr.val) return curr;
            curr = curr.next;
        }
        return null;
    }

    enqueue(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let nextNode = this._findNextNode(newNode);
            if (!nextNode) {
                newNode.prev = this.tail;
                this.tail.next = newNode;
                this.tail = newNode;
            } else {
                let prev = nextNode.prev;
                if (!prev) {
                    this.head = newNode;
                } else {
                    newNode.prev = prev;
                    prev.next = newNode;
                }
                nextNode.prev = newNode;
                newNode.next = nextNode;   
            }
        }
        this.length++;
    }

    dequeue() {
        let toRemove = this.head;
        let nextHead = this.head.next;
        toRemove.next = null;
        if (nextHead) {
            nextHead.prev = null;    
            this.head = nextHead;
        } else {
            this.head = null;
            this.tail = null;
        }
        this.length--;
    }

    findTop() {
        return this.head;
    }
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest {
    constructor(k, nums) {
        this.pQ = new MPriorityQueue();
        this.k = k;
        for (const n of nums) {
            this.add(n);
        }
    }

    add(val) {
        if (this.pQ.length < this.k) {
            this.pQ.enqueue(val);
            return this.pQ.findTop().val;
        }

        let top = this.pQ.findTop();
        if (val > top.val) {
            this.pQ.dequeue();
            this.pQ.enqueue(val);
        }
        return this.pQ.findTop().val;
    }
}