import collections
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        res = []
        to_visit = collections.deque()
        if root:
            to_visit.append(root)

        while to_visit:
            level = []
            for i in range(len(to_visit)):
                n = to_visit.popleft()
                level.append(n.val)
                if n.left:
                    to_visit.append(n.left)
                if n.right:
                    to_visit.append(n.right)
            
            res.append(level)
        
        return res
