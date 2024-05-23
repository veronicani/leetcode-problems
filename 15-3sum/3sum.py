class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()
        print('sorted=', nums)
        for i in range(len(nums) - 1):
            if (i > 0 and nums[i] == nums[i - 1]):
                continue
            a = nums[i]
            print('a=', a)
            if a > 0:
                break
            l = i + 1
            r = len(nums) - 1
            while l < r:
                b = nums[l]
                c = nums[r]
                threeSum = a + b + c
                if threeSum < 0:
                    l += 1
                elif threeSum > 0:
                    r -= 1
                else:
                    res.append([a, b, c])
                    l += 1
                    while (nums[l] == nums[l - 1] and l < r):
                        l += 1
        return res


# [-4, -1, -1, 0, 1, 2, 5]
# return if i is greater than 0
# set l - 1 ahead of i
# set r at the end
    # while l < r
    # if the sum of 3 vals < 0
        # move l up
    # if sum 3 vals > 0
        # move r down
    # if equal 0
        # push 3 vals into res
        # move l up
        # while l is same as l - 1, move l up


