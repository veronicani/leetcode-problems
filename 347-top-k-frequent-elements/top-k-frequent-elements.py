from collections import Counter
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # iterate over all nums w/ counter
        # create an array to store number(s) at idx(count) - 
        # iterate backwards over the array for k times, add values to output
        num_to_freq = self.count(nums)
        sorted_vals = self.sort_by_freq(len(nums), num_to_freq)
        k_most_freq_els = self.get_k_most_freq_els(k, sorted_vals)
        return k_most_freq_els
    
    def count(self, nums) -> dict[int, int]:
        num_to_freq = Counter()
        for num in nums:
            num_to_freq[num] += 1
        return num_to_freq
    
    def sort_by_freq(self, output_len, num_to_freq):
        """
        Stores each val in the corresponding index that represents their frequency.
        If there isn't a list at a new index, creates a new index.
        """
        sorted_freqs = [[] for _ in range(output_len + 1)]
        for num, freq in num_to_freq.items():
            bucket = sorted_freqs[freq]
            bucket.append(num)
        return sorted_freqs
            
    def get_k_most_freq_els(self, k: int, sorted_vals: List[List[int]]) -> List[int]:
        out = []
        print('sorted_vals=', sorted_vals)
        for bucket in sorted_vals[::-1]:
            print(f'{bucket=}')
            for val in bucket:
                out.append(val)
                if len(out) >= k:
                    return out
            

        

