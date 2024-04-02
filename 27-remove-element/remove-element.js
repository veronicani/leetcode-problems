/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    //initiate count = 0
    //loop over each num, from index
      //if num not val -> replace nums[count] with num, increment count
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[count] = nums[i];
        count++;
      }
    }
    return count;
};