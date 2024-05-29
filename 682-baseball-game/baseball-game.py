class Solution:
    def calPoints(self, operations: List[str]) -> int:
        scores = []
        sum = 0
        for o in operations:
            if o == '+':
                scores.append(scores[-1] + scores[-2])
                sum += scores[-1]
            elif o == 'D':
                scores.append(scores[-1] * 2)
                sum += scores[-1]
            elif o == 'C':
                sum -= scores.pop()
            else:
                try:
                    scores.append(int(o))
                    sum += scores[-1]
                except ValueError:
                    pass
        return sum