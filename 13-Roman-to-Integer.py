class Solution:
    def romanToInt(self, s: str) -> int:
        roman_vals = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000,
        }

        total = 0

        for i in range(len(s) - 1, -1, -1):
            
            if i + 1 < len(s) and roman_vals[s[i]] < roman_vals[s[i + 1]]:
                total -= roman_vals[s[i]]
            else:
                total += roman_vals[s[i]]

        return total
# XXVII