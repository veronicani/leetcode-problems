/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squares = nums.map(n => n ** 2);
    squares.sort((a, b) => a - b);
    return squares;
};