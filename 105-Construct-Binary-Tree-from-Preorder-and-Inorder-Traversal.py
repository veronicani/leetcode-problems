# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        if not preorder or not inorder:
            return None
        tree = TreeNode(preorder[0])
        mid = inorder.index(preorder.pop(0))
        tree.left = self.buildTree(preorder, inorder[:mid])
        tree.right = self.buildTree(preorder, inorder[mid + 1:])
        return tree