/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let b = 0;
    let s = b + 1;

    while (s < prices.length) {
        if (prices[b] > prices[s]) {
            b = s;
        } else {
            let currProfit = prices[s] - prices[b];
            maxProfit = Math.max(currProfit, maxProfit);
        }
        s++;
    }

    return maxProfit;
};