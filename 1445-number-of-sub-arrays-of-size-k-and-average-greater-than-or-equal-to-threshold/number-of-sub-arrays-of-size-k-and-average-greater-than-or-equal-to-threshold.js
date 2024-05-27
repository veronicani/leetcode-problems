/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let count = 0;
    let tSum = threshold * k;
    let currSum = 0;
    for (let i = 0; i < k; i++) {
        currSum += arr[i];
    }
    if (currSum >= tSum) count++;
    
    let l = 0;
    for (let r = l + k; r < arr.length; r++) {
        currSum = currSum - arr[l] + arr[r];
        if (currSum >= tSum) count++;
        l++;
    }
    return count;
};