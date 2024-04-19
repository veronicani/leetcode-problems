/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let nFreq = {};
    for (let n of nums) {
        nFreq[n] = nFreq[n] + 1 || 1
        if (nFreq[n] > nums.length / 2) return n;
    }
};