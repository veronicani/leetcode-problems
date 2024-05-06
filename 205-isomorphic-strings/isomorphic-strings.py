class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) != len(s):
            return False

        s_t = {}
        t_s = {}

        for i in range(len(s)):
            sChar = s[i]
            tChar = t[i]

            if ((sChar in s_t and s_t[sChar] != tChar) or 
                (tChar in t_s and t_s[tChar] != sChar)):
                    return False
            
            s_t[sChar] = tChar
            t_s[tChar] = sChar
        
        return True