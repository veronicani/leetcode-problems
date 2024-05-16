/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for (let n of nums) {
        let absN = Math.abs(n);
        let idx = absN - 1;
        nums[idx] = (Math.abs(nums[idx])) * -1;
    }
    console.log('nums=', nums);
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) res.push(i + 1);
    }
    return res;
};