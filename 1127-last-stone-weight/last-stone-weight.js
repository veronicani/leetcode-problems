/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let stonesOrdered = new MaxPriorityQueue();
    for (let s of stones) {
        stonesOrdered.enqueue(s);
    }
    while (stonesOrdered.size() > 1) {
        let first = stonesOrdered.dequeue().element;
        let second = stonesOrdered.dequeue().element;
        let result = first - second;
        if (result > 0) stonesOrdered.enqueue(result);
    }
    return stonesOrdered.size() === 1 ? stonesOrdered.dequeue().element : 0;
};