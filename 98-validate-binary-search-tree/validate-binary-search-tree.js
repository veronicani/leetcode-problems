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
    var _isValid = function(node, lower, upper) {
        if (node === null) return true;
        if (node.val >= upper || node.val <= lower) return false;

        return (_isValid(node.left, lower, node.val) &&
            _isValid(node.right, node.val, upper));
    }

    return _isValid(root, -Infinity, +Infinity);

};