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
    let r = k - 1;
    while (r < nums.length) {
        let min = nums[l];
        let max = nums[r];
        minDiff = Math.min(minDiff, max - min);
        l++;
        r++;
    }
    return minDiff;
};
