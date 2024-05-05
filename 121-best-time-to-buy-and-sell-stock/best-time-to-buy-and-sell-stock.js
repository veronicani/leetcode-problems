/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let buy = 0;
    let sell = 1;
    let profit = 0;

    while (sell < prices.length) {
        profit = prices[sell] - prices[buy];
        max = Math.max(max, profit);
        if (prices[sell] < prices[buy]) buy = sell;
        sell++;
    }
    return max;
};