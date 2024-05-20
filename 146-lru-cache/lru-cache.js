class QNode {
    constructor(key, val, timestamp) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
        this.timestamp = timestamp;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.head = null;
        this.tail = null;
        this.timestamp = 0;
        this.length = 0;
        this.map = {};
    }

    put(key, val) {
        let node = this.map[key];
        if (node) this.remove(key);

        node = new QNode(key, val, this.timestamp);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.map[key] = node;
        this.timestamp++;
        this.length++;
        while (this.length > this.capacity) {
            this._dequeue();
        }
    }

    remove(key) {
        let node = this.map[key];
        if (!node) return;
        if (this.head === node) {
            this._dequeue();
            return;
        }
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        if (next) next.prev = prev;
        else this.tail = prev;

        delete this.map[node.key];
        this.length--;
    }

    get(key) {
        let node = this.map[key];
        if (!node) return -1;
        this.remove(key);
        this.put(key, node.val);
        return node.val;
    }

    _dequeue() {
        let head = this.head;

        if (this.head === this.tail) {
            head.next = null;
            this.head = null;
            this.tail = null;
        } else {
            let next = head.next;
            head.next = null;
            next.prev = null;
            this.head = next;
        }
        delete this.map[head.key];
        this.length--;
    }
}