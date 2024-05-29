class MinStack:

    def __init__(self):
        self.stk = []
        self.minStk = [] # used to keep track of curr min

    def push(self, val: int) -> None:
        self.stk.append(val)
        # compare curr val w/ prev. min val in stack to find new min
        minVal = min(val, self.minStk[-1] if self.minStk else val)
        self.minStk.append(minVal)

    def pop(self) -> None:
        self.stk.pop()
        self.minStk.pop()

    def top(self) -> int:
        return self.stk[-1]

    def getMin(self) -> int:
        return self.minStk[-1]


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()