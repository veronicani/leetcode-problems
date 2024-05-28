/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let smallestAbs = +Infinity;
    let smallestIdx = 0;
    for (let i = 0; i < nums.length; i++) {
        if (Math.abs(nums[i]) < smallestAbs) {
            smallestAbs = Math.abs(nums[i]);
            smallestIdx = i;  
        }
    }
    let l = smallestIdx;
    let r = l + 1;
    let res = [];
    while (l >= 0 && r < nums.length) {
        if (Math.abs(nums[l]) <= Math.abs(nums[r])) {
            res.push(nums[l] ** 2);
            l--;
        } else {
            res.push(nums[r] ** 2);
            r++;
        }
    }
    while (nums[l] !== undefined) {
        res.push(nums[l] ** 2);
        l--;
    }
    while (nums[r] !== undefined) {
        res.push(nums[r] ** 2);
        r++;
    }

    return res;
};