# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        smallest = []
        stk = []
        while len(smallest) < k:
            while root:
                stk.append(root)
                root = root.left
            root = stk.pop()
            smallest.append(root.val)
            if len(smallest) == k:
                return root.val
            root = root.right
