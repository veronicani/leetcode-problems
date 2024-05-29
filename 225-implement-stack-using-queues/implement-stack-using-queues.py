class MyStack:

    def __init__(self):
        self.q1 = deque()
        self.q2 = deque()

    def push(self, x: int) -> None:
        self.q1.append(x)

    def pop(self) -> int:
        # move all vals from q1 except last into q2
        while len(self.q1) > 1:
            self.q2.append(self.q1.popleft())
        popped = self.q1.popleft()

        # move all vals from q2 to q1
        while len(self.q2):
            self.q1.append(self.q2.popleft())

        return popped

    def top(self) -> int:
        while len(self.q1) > 1:
            self.q2.append(self.q1.popleft())
        top = self.q1.popleft()

        while len(self.q2):
            self.q1.append(self.q2.popleft())
        
        self.q1.append(top)
        return top

    def empty(self) -> bool:
        return len(self.q1) == 0
        


# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()