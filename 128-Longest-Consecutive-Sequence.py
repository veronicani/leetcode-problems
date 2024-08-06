class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        vals = set(nums)
        maxLength = 0
        for n in nums:
            if n - 1 not in vals:
                next = n + 1
                while next in vals:
                    next += 1
                maxLength = max(next - n, maxLength)
        return maxLength