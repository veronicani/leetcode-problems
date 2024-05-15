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
    let stack = []; //[]
    let order = []; //[1, 5]
    while (stack.length || root) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop(); //1
        if (root.val <= order[order.length - 1]) return false;
        order.push(root.val); 
        root = root.right;
    }
    return true;
};