/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const nums2 = new Set();
    for (const n of nums) {
        if (nums2.has(n)) return true;
        nums2.add(n);
    }
    return false;
};