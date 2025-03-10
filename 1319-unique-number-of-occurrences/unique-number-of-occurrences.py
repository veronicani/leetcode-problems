from collections import defaultdict

class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        occurences = defaultdict(int)
        for val in arr:
            occurences[val] += 1
        
        unique_occurences = set(occurences.values())

        return len(unique_occurences) == len(occurences)