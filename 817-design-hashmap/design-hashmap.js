class MyHashMap {
    constructor() {
        this.map = [];
    }

    _hashToIdx(key) {
        return key;
    }

    put(key, val) {
        const idx = this._hashToIdx(key);
        this.map[idx] = val;
    }

    get(key) {
        const idx = this._hashToIdx(key);
        return (this.map[idx] !== undefined ? this.map[idx] : -1);
    }

    remove(key) {
        const idx = this._hashToIdx(key);
        if (this.map[idx] === undefined) return -1;
        this.map[idx] = undefined;
    }
}