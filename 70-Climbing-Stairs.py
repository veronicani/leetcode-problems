class Solution:
    def climbStairs(self, n: int) -> int:
        a, b = 1, 1
        c = 1
        for n in range(2, n + 1):
            c = a + b
            a = b
            b = c
        
        return c