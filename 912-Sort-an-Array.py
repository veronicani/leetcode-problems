class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        if len(nums) <= 1:
            return nums
        mid = len(nums) // 2
        left_half = self.sortArray(nums[0:mid])
        right_half = self.sortArray(nums[mid:])
        
        return merge(left_half, right_half)
    
    def merge(left, right):
        l_idx = 0
        r_idx = 0
        res = []
        
        while l_idx < len(left) and r_idx < len(right):
            if left[l_idx] < right[r_idx]:
                res.append(left[l_idx])
                l += 1
            else:
                res.append(right[r_idx])
                r += 1
        
        while l_idx < len(left):
            res.append(left[l_idx])
            l += 1
        while r_idx < len(right):
            res.append(right[r_idx])
            r += 1
        return res