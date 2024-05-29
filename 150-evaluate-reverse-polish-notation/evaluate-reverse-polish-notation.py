class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stk = []
        for t in tokens:
            if t == '+':
                second = stk.pop()
                first = stk.pop()
                stk.append(first + second)
            elif t == '-':
                second = stk.pop()
                first = stk.pop()
                stk.append(first - second)
            elif t == '*':
                second = stk.pop()
                first = stk.pop()
                stk.append(first * second)
            elif t == '/':
                second = stk.pop()
                first = stk.pop()
                stk.append(int(float(first) / second))
            else:
                stk.append(int(t))

        return stk[-1]