/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let seen = new Set();
    let l = 0;
    let r = 0;
    while (r < nums.length) {
        while (seen.size > k) {
            seen.delete(nums[l]);
            l++;
        }
        if (seen.has(nums[r])) return true;
        seen.add(nums[r]);
        r++;
    }
    return false;
};