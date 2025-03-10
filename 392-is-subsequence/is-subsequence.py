class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        sp = 0
        for i in range(len(t)):
            if sp < len(s) and t[i] == s[sp]:
                sp += 1
        
        return sp >= len(s)