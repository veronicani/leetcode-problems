var calcEucDistFrom0 = function ([x, y]) {
    return Math.sqrt(Math.pow((x - 0), 2) + Math.pow((y - 0), 2));
}

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    //iterate over the points, add the idx and dist of each to map - (dist, idx)
    let distances = [];
    for (let i = 0; i < points.length; i++) {
        distances.push([calcEucDistFrom0(points[i]), i]);
    }
    //sort the map, from small -> large
    distances.sort((a, b) => (a[0] - b[0]));
    console.log("sorted distances=", distances);
    //for k times
        //push val of map[i] into the out
    const res = [];
    for (let j = 0; j < k; j++) {
        const currD = distances[j];
        const pIdx = currD[1];
        res.push(points[pIdx]);
    }
    return res;
};

