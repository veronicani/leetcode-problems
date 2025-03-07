class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        # res - string
        # set pointer at beg word1 and word2 - i
        # while i < len word1 and word2 respectively
            # res += w1[i]
            # res += w2[i]
            # inc pointer forward
        # if pointer is < w1, append w1[i:end] to res, else append w2[i:end]
        # return res

        res = ""
        i = 0
        while i < len(word1) and i < len(word2):
            res += word1[i]
            res += word2[i]
            i += 1
        
        if i < len(word1):
            res += word1[i:]
        else:
            res += word2[i:]
        
        return res