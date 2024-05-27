/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let seen = new Set();
    let l = 0;
    for (let r = 0; r < nums.length; r++) {
        while (r - l > k) {
            seen.delete(nums[l]);
            l++;
        }
        if (seen.has(nums[r])) return true;
        seen.add(nums[r]);
    }
    return false;
};