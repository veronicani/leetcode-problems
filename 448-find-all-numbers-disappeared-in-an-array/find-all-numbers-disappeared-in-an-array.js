/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let set = new Set(Array.from({length: nums.length}, (v, i) => i + 1));
    
    for (n of nums) {
        if (set.has(n)) {
            set.delete(n);
        }
    }
    
    return Array.from(set);
};