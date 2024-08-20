class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        chars = defaultdict(int)
        for c in t:
            chars[c] += 1
        for c in s:
            chars[c] -= 1
            if chars[c] == 0:
                del chars[c]
        return list(chars.keys())[0]