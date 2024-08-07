class Solution:
    def calculate(self, s: str) -> int:
        stack = []
        prev_op = '+'
        s += '#' # forces loop to happen 1x after iterating over s, to calc final prev_op
        num = 0
        for c in s:
            if c == ' ':
                continue
            elif c.isdigit():
                num = num*10 + int(c)
            else:
                if prev_op == '+':
                    stack.append(num)
                elif prev_op == '-':
                    stack.append(-num)
                elif prev_op == '/':
                    operand = stack.pop()
                    stack.append(int(operand/num))
                elif prev_op == '*':
                    operand = stack.pop()
                    stack.append(operand*num)
                num = 0
                prev_op = c
        print('stck=', stack)
        return sum(stack)
                