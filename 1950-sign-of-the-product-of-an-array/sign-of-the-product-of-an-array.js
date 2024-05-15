/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let countNeg = 0;
    for (n of nums) {
        if (n === 0) return 0;
        if (n < 0) countNeg++;
    }
    return countNeg % 2 === 0 ? 1 : -1;
};