/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //loop over nums
        //if the curr val is in the set
            //return true
        //add the curr val to a set
    //return false
    const nums2 = new Set();
    for (const n of nums) {
        if (nums2.has(n)) return true;
        nums2.add(n);
    }
    return false;
};