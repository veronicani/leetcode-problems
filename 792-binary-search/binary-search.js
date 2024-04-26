/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let max = nums.length - 1;
    let min = 0;
    while (max >= min) {
        let m = Math.floor((min + max) / 2);
        if (nums[m] === target) return m;
        if (nums[m] > target) max = m - 1;
        else if (nums[m] < target) min = m + 1;
    }
    return -1;
};