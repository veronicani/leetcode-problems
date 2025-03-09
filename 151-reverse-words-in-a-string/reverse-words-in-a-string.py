class Solution:
    def reverseWords(self, s: str) -> str:
        words = []
        l, r = len(s) - 1, len(s) - 1
        while l >= 0:
            while l >= 0 and s[l] == ' ':
                l -= 1
                r -= 1
            while l >= 0 and s[l].isalnum():
                l -= 1
            if s[l + 1: r + 1]:
                words.append(s[l + 1: r + 1])
            r = l
            
        return " ".join(words)