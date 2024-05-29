class MyStack:

    def __init__(self):
        self.q = deque()

    def push(self, x: int) -> None:
        self.q.append(x)

    def pop(self) -> int:
        # rotate vals until the last val is at front
        # e.g. [1, 2, 3] -> [3, 1, 2]
        for n in range(len(self.q) - 1):
            self.q.append(self.q.popleft())
        return self.q.popleft()

    def top(self) -> int:
        # rotate vals until the last val is at front
        # e.g. [1, 2, 3] -> [3, 1, 2]
        for n in range(len(self.q) - 1):
            self.q.append(self.q.popleft())
        top = self.q.popleft()
        self.q.append(top)
        
        return top

    def empty(self) -> bool:
        return len(self.q) == 0
        


# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()