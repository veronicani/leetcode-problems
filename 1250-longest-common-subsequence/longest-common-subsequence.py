class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        ncols = len(text2) + 1
        nrows = len(text1) + 1
        dp = [[0 for _ in range(ncols)] for _ in range(nrows)]

        for c1 in range(len(text1) - 1 , -1, -1):
            for c2 in range(len(text2) - 1, -1, -1):
                if text1[c1] == text2[c2]:
                    
                    dp[c1][c2] = 1 + dp[c1+1][c2+1]
                else:
                    max_next_sub = max(dp[c1+1][c2], dp[c1][c2+1])
                    dp[c1][c2] = max_next_sub
        return dp[0][0]