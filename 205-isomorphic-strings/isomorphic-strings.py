class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) != len(s):
            return False

        s_t = {}
        t_s = {}

        for i in range(len(s)):
            sChar = s[i]
            tChar = t[i]
            if sChar in s_t:
                if s_t[sChar] != tChar:
                    return False
            elif tChar in t_s:
                if t_s[tChar] != sChar:
                    return False
            else:
                s_t[sChar] = tChar
                t_s[tChar] = sChar
        
        return True