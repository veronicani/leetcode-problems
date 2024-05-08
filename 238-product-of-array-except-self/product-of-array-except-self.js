/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const prefix = [];
    const suffix = [];
    for (let i = 0; i < nums.length; i++) {
        let pre = prefix[i - 1] !== undefined ? prefix[i - 1] : 1;
        prefix[i] = nums[i] * pre;
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        let suf = suffix[i + 1] !== undefined ? suffix[i + 1] : 1;
        suffix[i] = nums[i] * suf;
    }
    const res = [];
    
    for (let i = 0; i < nums.length; i++) {
        let pre = prefix[i - 1] !== undefined ? prefix[i - 1] : 1;
        let suf = suffix[i + 1] !== undefined ? suffix[i + 1] : 1;
        res[i] = pre * suf;
    }
    return res;
};