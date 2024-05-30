class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        for n in (range(int(math.sqrt(num)) + 1)):
            if n ** 2 == num:
                return True
        return False