/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let l = 0;
    let r = k;
    while (l < nums.length) {
        for (let i = l + 1; i <= r; i++) {
            if (nums[i] === undefined) break;
            if (nums[i] === nums[l]) return true;
        }
        l++;
        r++;
    }
    return false;
};