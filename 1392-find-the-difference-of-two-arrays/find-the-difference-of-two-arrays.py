class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        nums1_vals = set(nums1)
        nums2_vals = set(nums2)

        for n1 in nums1:
            if n1 in nums2_vals:
                nums1_vals.remove(n1)
                nums2_vals.remove(n1)
        
        return [list(nums1_vals), list(nums2_vals)]
        