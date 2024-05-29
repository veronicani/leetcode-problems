class Solution:
    def calPoints(self, operations: List[str]) -> int:
        scores = []
        sum = 0
        for o in operations:
            try:
                scores.append(int(o))
                sum += int(o)
            except ValueError:
                pass
            if o == '+':
                scores.append(scores[-1] + scores[-2])
                sum += scores[-1]
            elif o == 'D':
                scores.append(scores[-1] * 2)
                sum += scores[-1]
            elif o == 'C':
                sum -= scores[-1]
                scores.pop()
        return sum