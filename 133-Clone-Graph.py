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

        def cloneNode(node):
            if node in old_new:
                return old_new[node]
            
            copy = Node(node.val)
            old_new[node] = copy
            for n in node.neighbors:
                copy.neighbors.append(cloneNode(n))
            return copy
        
        return cloneNode(node) if node else None
        

        