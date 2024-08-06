class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        s_chars = defaultdict(int)
        for c in s:
            s_chars[c] += 1
        for c in t:
            if c not in s_chars:
                return False
            s_chars[c] -= 1
            if not s_chars[c]:
                del s_chars[c]

        return len(s_chars) == 0
