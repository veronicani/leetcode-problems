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
            return minHeap.front().element;
        }
        if (val > minHeap.front().element) {
            minHeap.dequeue(minHeap.front().element);
            minHeap.enqueue(val);
        }
        return minHeap.front().element;
    }
}