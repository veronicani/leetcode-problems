class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        # if len(s) is not len(t) return false

        # create a map of s -> t
        # create a map of t -> s
        
        # loop over s by index
        # if s_char is not in s_t
            # add s_char map, map to t[i]
            # add t[i] to t_map, map to s_char
        # else
            # check val of s_t[s_char]
            # if t_s[val] is not s_char
            # return false
        
        # return true

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
        