/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest {
    constructor (k, nums) {
        this.k = k;
        this.minHeap = new MinPriorityQueue();

        for (const n of nums) {
            this.add(n);
        }
    }
    add(val, { minHeap } = this) {
        if (minHeap.size() < this.k) {
            minHeap.enqueue(val);
            return this.findTop();
        }
        if (this.findTop() < val) {
            minHeap.dequeue();
            minHeap.enqueue(val);
        }
        return this.findTop();
    }
    findTop({ minHeap } = this) {
        return minHeap.front().element;
    }
};
