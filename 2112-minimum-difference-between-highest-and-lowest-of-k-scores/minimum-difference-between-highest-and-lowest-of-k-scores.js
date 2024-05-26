/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if (nums.length <= 1) return 0;

    nums.sort((a, b) => a - b);
    let minDiff = +Infinity;
    let l = 0;
    while (l <= nums.length - k) {
        let r = l + k - 1;
        let min = nums[l];
        let max = nums[r];
        minDiff = Math.min(minDiff, max - min);
        l++;
    }
    return minDiff;
};
