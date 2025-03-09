class Solution:
    def reverseWords(self, s: str) -> str:
        words = []
        l, r = len(s) - 1, len(s) - 1
        while l >= 0:
            while s[l] == ' ':
                l -= 1
                r -= 1
            while s[l].isalnum() and l >= 0:
                l -= 1
            if s[l + 1: r + 1]:
                words.append(s[l + 1: r + 1])
            r = l
        
        print('words=', words)
            
        return " ".join(words)