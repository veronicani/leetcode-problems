class Solution:
    def climbStairs(self, n: int) -> int:
        memo = {0: 1, 1: 1}
        
        def climb(n: int, memo: dict[int, int]) -> int:
            if n == 0 or n == 1:
                return 1
            if n not in memo:
                memo[n] = climb(n - 1, memo) + climb(n-2, memo)
            
            return memo[n]

        climb(n, memo)
        return memo[n]
