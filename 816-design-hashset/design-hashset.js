class LLNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class MyHashSet {
    constructor() {
        this.set = Array.from({length: 10 ** 4}).fill(new LLNode(0));
    }

    hashKey(key) {
        return key % this.set.length;
    }

    add(key) {
        const hashIdx = this.hashKey(key);
        let curr = this.set[hashIdx];
        while(curr.next) {
            if (curr.next.val === key) return;
            curr = curr.next;
        }
        curr.next = new LLNode(key);
    }

    remove(key) {
        const hashIdx = this.hashKey(key);
        let curr = this.set[hashIdx];
        while (curr.next) {
            if (curr.next.val === key) {
                curr.next = curr.next.next;
                return;
            }
            curr = curr.next;
        }
    }

    contains(key) {
        const hashIdx = this.hashKey(key);
        let curr = this.set[hashIdx];
        while (curr.next) {
            if (curr.next.val === key) return true;
            curr = curr.next;
        }
        return false;
    }
}