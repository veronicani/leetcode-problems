class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stk = []
        for t in tokens:
            if t == '+':
                stk.append(stk.pop() + stk.pop())
            elif t == '-':
                second, first = stk.pop(), stk.pop()
                stk.append(first - second)
            elif t == '*':
                stk.append(stk.pop() * stk.pop())
            elif t == '/':
                second, first = stk.pop(), stk.pop()
                stk.append(int(float(first) / second))
            else:
                stk.append(int(t))

        return stk[-1]