class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxP = 0
        buy = 0
        sell = 0
        while sell < len(prices):
            if prices[sell] < prices[buy]:
                buy = sell
            maxP = max(maxP, prices[sell] - prices[buy])
            sell += 1
        return maxP
            