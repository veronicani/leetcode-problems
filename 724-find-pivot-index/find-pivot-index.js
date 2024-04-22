/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sumL = 0;
    let sumR = nums.reduce((acc, curr) => acc + curr, 0) - nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (sumL === sumR) return i;
        sumL += nums[i];
        sumR -= nums[i + 1];
    }
    return -1;
};