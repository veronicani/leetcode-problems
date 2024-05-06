/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    //loop over nums
    //add to fC
    const freq = {};
    for (let n of nums) {
        freq[n] = (freq[n] || 0) + 1;
    }

    //for k times
    //find the highest count in fC
    //push val into res
    //delete val from fC
    const res = [];
    for (let i = 0; i < k; i++) {
        let maxFreqVal = 0;
        let maxFreq = 0;
        for (let val in freq) {
            if (freq[val] > maxFreq) {
                maxFreq = freq[val];
                maxFreqVal = val;
            }
        }
        res.push(maxFreqVal);
        delete freq[maxFreqVal];
    }
    return res;
};