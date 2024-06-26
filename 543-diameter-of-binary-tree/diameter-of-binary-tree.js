/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let max = [0];
    length(root, max);
    return max[0];
    
};

var length = function(root, max) {
    if (!root) return 0;
    const left = length(root.left, max);
    const right = length(root.right, max);

    max[0] = Math.max(max, left + right);
    return Math.max(left, right) + 1;
}