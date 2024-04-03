class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        # if len(s) is not len(t) return false

        # create a map of s -> t
        # loop over s by index
        # if s[i] is not in map
            # add to map, map to t[i]
        # else
            # if map @ s is not equal to t[i]
            # return false
        # return true

        if len(s) != len(t):
            return False
        
        s_t = dict()
        
        for i, char in enumerate(s):
            if char not in s_t:
                if t[i] in s_t.values():
                    return False
                s_t[char] = t[i]
            else:
                if s_t[char] != t[i]:
                    return False
        return True
        