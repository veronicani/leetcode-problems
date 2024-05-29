class MinStack:

    def __init__(self):
        self.stk = []
        self.min = float('inf')

    def push(self, val: int) -> None:
        self.stk.append(val)
        self.min = min(self.min, val)

    def pop(self) -> None:
        self.stk.pop()
        if (len(self.stk) <= 0):
            self.min = float('inf')
        else: 
            self.min = min(self.stk)

    def top(self) -> int:
        return self.stk[-1]

    def getMin(self) -> int:
        return self.min


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()