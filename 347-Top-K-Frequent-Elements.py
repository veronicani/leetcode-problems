class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = defaultdict(int)
        for n in nums:
            freq[n] += 1
        
        buckets = [[] for _ in range(len(nums) + 1)]
        for val in freq:
            buckets[freq[val]].append(val)
        
        res = []
        for i in range(len(buckets) - 1, -1, -1):
            res += buckets[i]
            if len(res) == k:
                return res
