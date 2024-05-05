/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indices = new Map();
    for (let i = 0; i < nums.length; i++) {
        let com = target - nums[i];
        if (indices.has(com)) return [i, indices.get(com)];
        indices.set(nums[i], i);
    }
};