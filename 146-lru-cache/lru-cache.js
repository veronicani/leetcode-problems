/** DLL Cache Node */
class DLLNode {
    constructor(key, val) {
        this.val = val;
        this.key = key;
        this.next = null;
        this.prev = null;
    }
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

 class LRUCache {
    constructor(capacity = 0) {
        this.cache = new Map();
        this.capacity = capacity;
        
        this.head = new DLLNode(0, 0);
        this.tail = new DLLNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    _insertNode(node) {
        const prev = this.tail.prev;
        prev.next = node;
        this.tail.prev = node;
        node.prev = prev;
        node.next = this.tail;
    }

    _removeNode(node) {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    _findLRUNode() {
        return this.head.next;
    }

    get(key) {
        if (this.cache.get(key) !== undefined) {
            //move the node to the end of queue
            let currNode = this.cache.get(key);
            this._removeNode(currNode);
            this._insertNode(currNode);
            return currNode.val;
        }
        return -1;
    }

    put(key, value) {
        if (this.cache.get(key) !== undefined) {
            let currNode = this.cache.get(key);
            this._removeNode(currNode);
            this.cache.delete(currNode.key);
        }
        
        //if cache is at capacity
        if (this.cache.size === this.capacity) {
            //remove LRU node from queue and cache
            let lruNode = this._findLRUNode();
            this._removeNode(lruNode);
            this.cache.delete(lruNode.key);
        }
  
        let newNode = new DLLNode(key, value);
        this._insertNode(newNode);
        this.cache.set(key, newNode);
    }
}