/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //set max = nums[0];
    //set sum = nums[0];
    //loop from beg to end
        //if sum < 0, reset to 0
        //add the curr num to the sum
        //recalc the max bw curr sum and max
    let max = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (sum < 0) sum = 0;
        sum += nums[i];
        max = Math.max(sum, max);
    }
    return max;
};