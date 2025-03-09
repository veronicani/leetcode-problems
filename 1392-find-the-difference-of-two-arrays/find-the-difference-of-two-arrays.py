class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        nums1_vals = set(nums1)
        nums2_vals = set(nums2)

        nums1_unique = []
        nums2_unique = []

        for n1 in nums1:
            if n1 not in nums2_vals and n1 in nums1_vals:
                nums1_unique.append(n1)
                nums1_vals.remove(n1)
        
        for n2 in nums2:
            if n2 not in nums1_vals and n2 in nums2_vals:
                nums2_unique.append(n2)
                nums2_vals.remove(n2)
        
        return [nums1_unique, nums2_unique]
        