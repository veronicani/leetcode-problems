/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let product = 1;
    for (n of nums) {
        product *= n;
    }
    if (product > 0) {
        return 1;
    } else if (product < 0) {
        return -1;
    } else {
        return 0;
    }
};