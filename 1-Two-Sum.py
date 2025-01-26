class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        idxes = dict()
        for i in range(len(nums)):
            comp = target - nums[i]
            if comp in idxes:
                return [idxes[comp], i]
            idxes[nums[i]] = i
        