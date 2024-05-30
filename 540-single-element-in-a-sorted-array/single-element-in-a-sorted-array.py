class Solution:
    def singleNonDuplicate(self, nums: List[int]) -> int:
        if len(nums) <= 1: 
            return nums[0]
        
        i = 0
        while i < len(nums):
            if i + 1 >= len(nums) or nums[i + 1] != nums[i]:
                return nums[i]
            if nums[i + 1] == nums[i]:
                i += 1
                while (nums[i] == nums[i - 1] and i < len(nums)):
                    i += 1

        