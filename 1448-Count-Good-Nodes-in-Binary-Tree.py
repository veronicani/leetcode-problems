import collections
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        res = []
        to_visit = collections.deque()
        if root:
            to_visit.append([root, root.val])
            
            while to_visit:
                curr, greatest = to_visit.popleft()
                if curr.val >= greatest:
                    res.append(curr.val)
                if curr.left:
                    to_visit.append([curr.left, max(curr.val, greatest)])
                if curr.right:
                    to_visit.append([curr.right, max(curr.val, greatest)])
            
        return len(res)
