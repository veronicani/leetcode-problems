"use strict"

var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null;

  const midpoint = Math.floor(nums.length / 2);
  
  return TreeNode(
    nums[midpoint],
    sortedArrayToBST(nums.slice(0, midpoint)),
    sortedArrayToBST(nums.slice(midpoint + 1, nums.length))
  );
};

//FIXME: returns undefined