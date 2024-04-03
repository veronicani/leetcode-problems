class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        s_t = {}
        t_s = {}
        
        for i, s_char in enumerate(s):
            t_char = t[i]

            if s_char in s_t:
                if s_t[s_char] != t_char:
                    return False
            
            else:
                if t_char in t_s:
                    return False

                s_t[s_char] = t_char
                t_s[t_char] = s_char
            
            s_val = s_t[s_char]

            if t_s[s_val] != s_char:
                return False

        return True
        