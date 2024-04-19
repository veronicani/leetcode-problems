/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res = 0;
    let count = 0;
    for (n of nums) {
        if (count === 0) res = n;
        if (n === res) count++;
        else count--;
    }
    return res;
};