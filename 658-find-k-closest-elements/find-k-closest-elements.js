/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let left = 0;
    let right = arr.length - 1;
    let cVal = arr[0];
    let cIdx = 0;

    while (left <= right) {
        let m = Math.floor((left + right) / 2);
        let currDiff = Math.abs(x - arr[m]);
        let cDiff = Math.abs(x - cVal);
        if (currDiff < cDiff || 
            (currDiff === cDiff && arr[m] < cVal)){
                cVal = arr[m];
                cIdx = m;
            }
        
        if (arr[m] > x) {
            right = m - 1;
        } else if (arr[m] < x) {
            left = m + 1;
        } else {
            break;
        }
    }

    let l = cIdx;
    let r = cIdx;
    console.log("cIdx =", cIdx);
    console.log("lr val =", arr[l]);
    
    for (let i = 1; i < k; i++) {
        let diffNextL = Math.abs(x - arr[l - 1]);
        let diffNextR = Math.abs(x - arr[r + 1]);

        if (l === 0) {
            r++;
        } else if (r === arr.length - 1) {
            l--;
        } else if (diffNextL <= diffNextR) {
            l--;
        } else {
            r++;
        }
        console.log("i=", i, "lval=", arr[l], "rval=", arr[r]);
    }

    return arr.slice(l, r + 1);

};