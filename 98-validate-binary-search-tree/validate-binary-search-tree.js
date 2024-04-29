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
var isValidBST = function(root) {
    _validBST = function (node, min, max) {
        if (!node) return true;
        if ((node.val >= max) || (node.val <= min)) return false;
        let LNisBST = _validBST(node.left, min, node.val);
        let RNisBST = _validBST(node.right, node.val, max);
        return LNisBST && RNisBST;
    }
    return _validBST(root, -Infinity, +Infinity);
};