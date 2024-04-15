/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const ans = [];
    while (ans.length < 2 * nums.length) {
        for (let num of nums) {
            ans.push(num);
        }
    }
    return ans;
};