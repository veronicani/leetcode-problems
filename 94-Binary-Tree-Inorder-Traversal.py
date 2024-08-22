# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        inorder = []
        stk = []
        while root or stk:
            while root:
                stk.append(root)
                root = root.left
            if stk:
                root = stk.pop()
                inorder.append(root.val)
                root = root.right
        
        return inorder
            