class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        unique = set()
        maxLength = 0
        st = 0
        e = 0
        while e < len(s):
            while s[e] in unique:
                unique.remove(s[st])
                st += 1
            maxLength = max(maxLength, e - st + 1)
            unique.add(s[e])
            e += 1
        
        return maxLength
