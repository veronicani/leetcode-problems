class LLNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LL {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    findNode(key) {
        let curr = this.head;
        while (curr) {
            if (curr.key === key) return curr;
            curr = curr.next;
        }
        return null;
    }
    
    append(key, val) {
        let node = this.findNode(key);
        if (node) {
            node.val = val;
            return;
        }
        let newNode = new LLNode(key, val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    remove(key) {
        let node = this.findNode(key);
        if (!node) return null;
        let prev = node.prev;
        let next = node.next;
        if (!prev) this.head = next;
        if (!next) this.tail = prev;
        
        if (prev) prev.next = next;
        if (next) next.prev = prev;
        return true;
    }
}

class MyHashMap {
    constructor(size = 0) {
        this.array = this._createArray(size);
    }

    _createArray(size) {
        const arr = [];
        for (let i = 0; i < size; i++) {
            arr.push(null);
        }
        return arr;
    }
    
    _hashToIdx(key) {
        //hash the key to an existing index within arrays bounds
        //return the idx
        return key;
    }

    put(key, val) {
        //_hashToIdx to find idx
        //lookup this.array[idx]
        //if null, create a new LL, append k:v to LL
        //else if LL, append k:v to LL
        const idx = this._hashToIdx(key);
        let ll = this.array[idx];
        if (!ll) {
            ll = new LL();
            this.array[idx] = ll;
        }
        ll.append(key, val);
    }

    remove(key, val) {
        //_hashToIdx to find idx
        //lookup this.array[idx]
        //if null, return -1
        //else if LL, remove k:v from LL -> if it returns null, return -1
        const idx = this._hashToIdx(key);
        const ll = this.array[idx];
        if (!ll) return -1;
        if (ll.remove(key) === null) return -1;
    }

    get(key) {
        //_hashToIdx to find idx
        //lookup this.array[idx]
        //if null, return -1
        //else if LL, find k:v from LL -> 
            //if it returns null, return -1
            //else if it returns node, return node.val
        const idx = this._hashToIdx(key);
        const ll = this.array[idx];
        if (!ll) return -1;
        let node = ll.findNode(key);
        if (!node) return -1;
        return node.val;
    }
}