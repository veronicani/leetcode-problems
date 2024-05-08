class MyHashMap {
    constructor() {
        this.map = [];
    }

    _hashToIdx(key) {
        //hashes the key to an idx, returns idx
        return key.length % 2;
    }

    put(key, val) {
        const idx = this._hashToIdx(key);
        this.map[idx] = this.map[idx] || [];
        if (!this.map[idx].length) this.map[idx].push([key, val]);
        else {
            let i = this.map[idx].findIndex(([k, v]) => k === key);
            if (i === -1) this.map[idx].push([key, val]);
            else this.map[idx][i] = [key, val];
        }
    }
    get(key) {
        const idx = this._hashToIdx(key);
        if (!this.map[idx]) return -1;
        
        let item = this.map[idx].find(([k, v]) => k === key);
        if (!item) return -1;
        let [k, v] = item;
        return v;
        
    }
    remove(key) {
        const idx = this._hashToIdx(key);
        if (!this.map[idx]) return -1;
        
        let i = this.map[idx].findIndex(([k, v]) => k === key);
        if (i === -1) return -1;
        this.map[idx].splice(i, 1);
    }
}