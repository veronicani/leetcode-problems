class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        vals = set(nums)
        max_seq = 0
        for n in nums:
            if n - 1 not in vals:
                next = n + 1
                while next in vals:
                    next += 1
                max_seq = max(max_seq, next - n)
        return max_seq