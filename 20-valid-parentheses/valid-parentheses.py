class Solution:
    def isValid(self, s: str) -> bool:
        # stk -> can only store open parens
        # if open parens, can store
        # if closed parens, check if most recent val in stk is complement
            # if not false
        # return true if empty stk
        stk = []
        parens_map = {'(': ')', '[': ']', '{': '}'}
        for char in s:
            if char in parens_map:
                stk.append(char)
            elif stk and parens_map.get(stk[-1]) == char:
                stk.pop()
            else:
                return False
        return len(stk) == 0