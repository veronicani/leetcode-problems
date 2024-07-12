# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        stk = [(root, root.val)]
        count = 0
        while stk:
            node, greatest = stk.pop()
            if node.val >= greatest:
                count += 1
            greatest = max(greatest, node.val)
            if node.left:
                stk.append((node.left, greatest))
            if node.right:
                stk.append((node.right, greatest))
        
        return count