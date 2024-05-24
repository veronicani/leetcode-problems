/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let total = 0;
    let maxCurrProfit = 0;
    let buy = 0;
    let sell = 0;
    while (sell < prices.length) {
        let currProfit = prices[sell] - prices[buy];
        maxCurrProfit = Math.max(currProfit, maxCurrProfit);
        if (currProfit < maxCurrProfit) {
            total += maxCurrProfit;
            maxCurrProfit = 0;
            buy = sell;
        }
        sell++;
    }
    total += maxCurrProfit;
    return total;
};