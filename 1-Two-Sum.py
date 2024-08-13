class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        vals = {}
        for i in range(len(nums)):
            curr = nums[i]
            comp = target - curr
            if comp in vals:
                return [i, vals[comp]]
            vals[nums[i]] = i