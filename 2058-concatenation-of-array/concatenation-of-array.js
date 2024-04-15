/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const ans = [];
    for (let count = 0; count < 2; count++) {
            for (let num of nums) {
            ans.push(num);
        }
    }

    return ans;
};