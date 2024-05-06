/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  //if nums length is 0 -> return undefined
  if (nums.length === 0) return null;
  //find midpoint of nums
  let mid = Math.floor(nums.length / 2);

  return new TreeNode(
    nums[mid], 
    sortedArrayToBST(nums.slice(0, mid)),
    sortedArrayToBST(nums.slice(mid + 1))
  );
};