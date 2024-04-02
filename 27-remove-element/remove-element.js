/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    //initiate count = 0
    //loop over each num, from index
      //if num not val -> increment count
      //else if the num === val, replace with __
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        count++;
      } else {
        nums.splice(i, 1);
        i--;
      }
    }
    return count;
};