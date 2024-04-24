var euclideanDist = function([x, y]) {
    return Math.sqrt((x - 0) ** 2 + (y - 0) ** 2);
}

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const maxPQ = new MaxPriorityQueue();
    for (p of points) {
        let dist = euclideanDist(p);
        if (maxPQ.size() < k) {
            maxPQ.enqueue(p, dist);
        } else if (dist < maxPQ.front().priority) {
            maxPQ.dequeue();
            maxPQ.enqueue(p, dist);
        }
    }

    const res = maxPQ.toArray().map(v => v.element);
    return res;
};