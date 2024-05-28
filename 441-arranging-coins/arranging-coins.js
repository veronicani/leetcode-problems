/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    //loop count
    //subtract 1 from n, then 2, then 3, until n <= 0;
    let row;
    for (row = 1; n >= row; row++) {
        n -= row;
    }
    return (row - 1);
};

//n = 5 -> 4 -> 2 -> -1;
//1, 2, 3