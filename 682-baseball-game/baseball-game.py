class Solution:
    def calPoints(self, operations: List[str]) -> int:
        scores = []
        for o in operations:
            try:
                scores.append(int(o))
            except ValueError:
                pass
            if o == '+':
                scores.append(scores[-1] + scores[-2])
            elif o == 'D':
                scores.append(scores[-1] * 2)
            elif o == 'C':
                scores.pop()
        return sum(scores)