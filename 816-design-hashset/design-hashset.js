class MyHashSet {
    constructor() {
        this.set = [];
    }

    add(key) {
        this.set[key] = key;
    }

    contains(key) {
        return this.set[key] !== undefined;
    }

    remove(key) {
        if (this.set[key]) this.set[key] = undefined;
    }
}