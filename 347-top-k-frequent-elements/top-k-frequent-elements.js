/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freq = {};
    for (n of nums) {
        freq[n] = (freq[n] || 0) + 1;
    }
    const freqNums = [];
    for (let i = 0; i <= nums.length; i++) {
        freqNums.push(null);
    }
    for (let f in freq) {
        let idx = freq[f];
        if (freqNums[idx] === null) freqNums[idx] = [];
        freqNums[idx].push(Number(f));
    }
    
    let res = [];
    for (let i = freqNums.length - 1; i >= 0 && res.length < k; i--) {
        if (freqNums[i] !== null) res.push(...freqNums[i]);
    }
    return res;
};