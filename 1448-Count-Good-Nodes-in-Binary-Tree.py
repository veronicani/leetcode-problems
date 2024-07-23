# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        to_visit = [(root, root.val)]
        num_good = 0
        while to_visit:
            curr, greatest = to_visit.pop()
            if curr.val >= greatest:
                num_good += 1
                greatest = curr.val
            if curr.left:
                to_visit.append((curr.left, greatest))
            if curr.right:
                to_visit.append((curr.right, greatest))
        return num_good