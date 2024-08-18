class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums = sorted(nums)
        print('nums=', nums)
        res = []
        i = 0
        while i < len(nums):
            a = nums[i]
            if a > 0:
                break
            
            l, r = i + 1, len(nums) - 1
            while l < r:
                three_sum = a + nums[l] + nums[r]
                if three_sum > 0:
                    r -= 1
                elif three_sum < 0:
                    l += 1
                else:
                    res.append([a, nums[l], nums[r]])
                    l += 1
                    while nums[l] == nums[l-1] and l < r:
                       l += 1 
            
            i += 1
            while i < len(nums) and nums[i] == nums[i - 1]:
                i += 1

        
        return res
