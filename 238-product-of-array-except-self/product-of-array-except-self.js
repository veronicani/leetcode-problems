/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = [];
    let lefts = [];
    let rights = [];
    lefts[0] = 1;
    rights[nums.length -1] = 1;

    for (let i = 1; i < nums.length; i++) {
        lefts[i] = lefts[i - 1] * nums[i - 1];
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        rights[i] = rights[i + 1] * nums[i + 1];
    }
    for (let i = 0; i < nums.length; i++) {
        res.push(lefts[i] * rights[i]);
    }
    return res;
};