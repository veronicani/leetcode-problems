class Solution:
    def singleNonDuplicate(self, nums: List[int]) -> int:
        l = 0
        r = len(nums) - 1
        while (l <= r):
            m = l + ((r - l) // 2)
            if ((m - 1 < 0 or nums[m - 1] != nums[m]) and
                (m + 1 >= len(nums) or nums[m + 1] != nums[m])):
                return nums[m]
            
            # want to check the side that has odd # of vals left
            # [0, 1, 1, 2, 2] -> leftSize = 1 (0)
            # [0, 0, 1, 1, 2] -> leftSize = 2 (0, 0)
            leftSize = m - 1 if nums[m - 1] == nums[m] else m
            if leftSize % 2 == 0:
                l = m + 1
            else:
                r = m - 1

        