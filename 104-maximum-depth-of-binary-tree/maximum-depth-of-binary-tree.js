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
var maxDepth = function(root) {
    if (!root) return 0;
    let max = 1;
    let stack = [[root, 1]];
    while (stack.length) {
        let [curr, height] = stack.pop();
        max = Math.max(max, height); 
        if (curr.left) stack.push([curr.left, height + 1]);
        if (curr.right) stack.push([curr.right, height + 1]);
    }
    return max; 
};