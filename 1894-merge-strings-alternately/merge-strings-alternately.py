class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        res = []
        i = 0
        w1, w2 = len(word1), len(word2)

        while i < w1 and i < w2:
            res.append(word1[i])
            res.append(word2[i])
            i += 1
        
        if i < len(word1):
            res.append(word1[i:])
        else:
            res.append(word2[i:])
        
        return "".join(res)