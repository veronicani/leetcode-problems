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
    let queueLL = [root];
    let height = 0;
    while (queueLL.length) {
        let q = queueLL.length;
        for (let i = 0; i < q; i++) {
            let curr = queueLL.shift();
            if (curr.left) queueLL.push(curr.left);
            if (curr.right) queueLL.push(curr.right);
        }
        height++;
    }
    return height;
};