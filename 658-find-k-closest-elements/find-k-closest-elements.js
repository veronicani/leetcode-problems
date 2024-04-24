/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    //find closest val to x, and its idx
    let cV = arr[0];
    let cIdx = 0;

    let start = 0;
    let end = arr.length - 1;
    while (end >= start) {
        let m = Math.floor((start + end) / 2);
        console.log("m=", m, "mval=", arr[m]);
        let closestDiff = Math.abs(x - cV);
        let currDiff = Math.abs(x - arr[m]);
        console.log("closestDiff=", closestDiff, "currDiff=", currDiff);
        if (currDiff < closestDiff || (currDiff === closestDiff && arr[m] <= cV)) {
            cV = arr[m];
            cIdx = m;
        }

        if (arr[m] === x) {
            break;
        } else if (arr[m] > x) {
            end = m - 1;
        } else {
            start = m + 1;
        }
    }
    
    //define the window for vals
    let l = cIdx;
    let r = cIdx;

    console.log("cIdx=", cIdx, "lval=", arr[l], "rval=", arr[r]);

    for (let i = 1; i < k; i++) {
        let nxtLDiff = Math.abs(x - arr[l - 1]);
        let nxtRDiff = Math.abs(x - arr[r + 1]);
        console.log('nxtLDiff=', nxtLDiff, 'nxtRDiff=', nxtRDiff);
        if (l === 0) {
            r++;
        } else if (r === arr.length - 1) {
            l--;
        } else if (nxtLDiff < nxtRDiff || (nxtLDiff === nxtRDiff && arr[l - 1] <= arr[r + 1])) {
            l--;
        } else {
            r++;
        }
    }
    
    return arr.slice(l, r + 1);
};