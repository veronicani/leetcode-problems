/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let buy = 0;
    let sell = 1;

    while (sell < prices.length) {
        let profit = prices[sell] - prices[buy];
        max = Math.max(max, profit);
        if (prices[sell] < prices[buy]) buy = sell;
        sell++;
    }
    return max;
};