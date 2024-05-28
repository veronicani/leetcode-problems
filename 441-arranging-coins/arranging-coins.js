/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let low = 1;
    let high = n;
    while (low <= high) {
        let row = Math.floor((low + high) / 2);
        let coinsNeeded = (row / 2) * (row + 1);
        if (n === coinsNeeded) return row;
        if (n < coinsNeeded) high = row - 1;
        else low = row + 1;
    }
    return high;
};
