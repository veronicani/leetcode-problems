class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        min_costs = [0] * (len(cost) + 1) #[0, 0, 0, 0] -- append extra 0 for base case
        min_costs[-2] = cost[-1] #[10, 15, 20, 0]
        for i in range(len(min_costs) - 3, -1, -1):
            min_costs[i] = cost[i] + min(min_costs[i + 1], min_costs[i + 2])
            
        return min(min_costs[0], min_costs[1])