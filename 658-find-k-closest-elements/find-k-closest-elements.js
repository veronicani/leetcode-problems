/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let l = 0;
    let r = arr.length - 1;
    while (r - l >= k) {
        let diffL = Math.abs(x - arr[l]);
        let diffR = Math.abs(x - arr[r]);
        if (diffL > diffR) l++;
        else r--;
    }
    return arr.slice(l, r + 1);
};