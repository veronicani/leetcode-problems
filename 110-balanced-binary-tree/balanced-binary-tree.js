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
 * @return {boolean}
 */
var isBalanced = function(root) {
    var balanced = function(root) {
        if (!root) return 0;
        const left = balanced(root.left);
        const right = balanced(root.right);
        if (left === -1 || right === -1) return -1;
        if (Math.abs(left - right) > 1) return -1;
        return (Math.max(left, right) + 1);
    }
    const res = balanced(root);
    return res >= 0;
};

