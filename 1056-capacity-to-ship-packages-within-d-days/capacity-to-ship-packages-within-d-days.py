class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        # find max weight + sum of all pckgs
        max_cap = 0
        min_cap = 0
        for i in (range(len(weights))):
            max_cap += weights[i]
            min_cap = max(min_cap, weights[i])
        
        while (min_cap <= max_cap):
            curr_cap = (min_cap + max_cap) // 2
            # simulate the ship carrying the boxes & count num of days
            day = 1
            load = 0
            for w in weights:
                load += w
                if (load > curr_cap):
                    load = w
                    day += 1
            if day > days:
                min_cap = curr_cap + 1
            else:
                max_cap = curr_cap - 1
            
        return min_cap