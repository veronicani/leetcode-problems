class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # loop through all the num, keep track of previous numbers & idcs
        # if current number can be added to a prev num to == target, then we found match
        num_to_idx = {}
        for i in range(len(nums)):
            comp = target - nums[i]
            if comp in num_to_idx:
                return [num_to_idx[comp], i]
            num_to_idx[nums[i]] = i
        

