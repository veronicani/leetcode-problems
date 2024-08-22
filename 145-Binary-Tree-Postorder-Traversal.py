# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        postorder = []
        stk = []
        while root or stk:
            while root:
                if root.right:
                    stk.append(root.right)
                stk.append(root)
                root = root.left
            root = stk.pop()
            if root.right and stk and stk[-1] == root.right:
                stk.pop()
                stk.append(root)
                root = root.right
            else:
                postorder.append(root.val)
                root = None
        return postorder
