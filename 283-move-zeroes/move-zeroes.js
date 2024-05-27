/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0;
    let j = 1;
    while (j < nums.length) {
        while (nums[i] !== 0 && j < nums.length - 1) {
            i++;
            j++;
        }
        while (nums[j] === 0 && j < nums.length - 1) {
            j++;
        }
        if (nums[j] !== 0 && nums[i] === 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        i++;
        j++;
    }
    return nums;
};
//0 0 1 0 3 12
//1 0 0 0 3 12
//1 3 0 0 0 12
//1 3 12 0 0 0       