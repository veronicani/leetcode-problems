class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy = 0
        max_profit = 0
        for sell in range(len(prices)):
            print('sell=', sell, 'buy=', buy)
            profit = prices[sell] - prices[buy]
            max_profit = max(profit, max_profit)
            if prices[sell] < prices[buy]:
                buy = sell
        return max_profit