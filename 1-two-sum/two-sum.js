/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indices = {};
    for (let i = 0; i < nums.length; i++) {
        let com = target - nums[i];
        if (indices[com] !== undefined) return [i, indices[com]];
        indices[nums[i]] = i;
    }
};