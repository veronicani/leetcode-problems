\\\
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
\\\

from typing import Optional
class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        old_new = {}
        if not node:
            return None
        
        def cloneNode(node):
            if node in old_new:
                return old_new[node]
            
            old_new[node] = Node(node.val)
            for n in node.neighbors:
                old_new[node].neighbors.append(cloneNode(n))
            return old_new[node]
        
        cloneNode(node)
        return old_new[node]