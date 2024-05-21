class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class MPriorityQueue {
    constructor(capacity, nums){
        this.capacity = capacity;
        this.length = 0;
        this.head = null;
        this.tail = null;
        
        for (const n of nums) {
            this.enqueue(n);
        }
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
        while (this.length > this.capacity) {
            this.dequeue();
        }
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
        return this.head.val;
    }
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest {
    constructor(k, nums) {
        this.pQ = new MPriorityQueue(k, nums);
    }

    add(val) {
        this.pQ.enqueue(val);
        return this.pQ.findTop();
    }
}