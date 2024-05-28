/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    return removeCoins(1, n);
};

var removeCoins = function(row, coins) {
    if (coins < row) return row - 1;
    return (removeCoins(row + 1, coins - row));
}
