/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) return true;
    if (p && !q) return false;
    if (!p && q) return false;
    if (p.val !== q.val) return false;
    if (isSameTree(p.left, q.left) === false) return false;
    if (isSameTree(p.right, q.right) === false) return false;
    return true;
};