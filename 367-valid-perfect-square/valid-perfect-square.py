class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        for n in (range(num + 1)):
            if n ** 2 == num:
                return True
            if n ** 2 > num:
                return False