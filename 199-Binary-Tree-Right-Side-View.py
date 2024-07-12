import collections
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        to_visit = collections.deque()
        if root:
            to_visit.append(root)
        
        while to_visit:
            level = []
            for i in range(len(to_visit)):
                node = to_visit.popleft()
                level.append(node.val)
                if node.left:
                    to_visit.append(node.left)
                if node.right:
                    to_visit.append(node.right)
            res.append(level[len(level) - 1])
        
        return res