/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let seen = new Set();
    for (n of nums) {
        if (!seen.has(n)) {
            seen.add(n);
        } else {
            seen.delete(n);
        }
    }
    for (let s of seen) {
        if (s !== undefined) {
            return s;
        }
    }
};