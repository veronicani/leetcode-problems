/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let max = 0;
    let numsSet = new Set(nums);
    for (let n of nums) {
        console.log('n=', n);
        if (!numsSet.has(n - 1)) {
            let count = 1;
            while (numsSet.has(n + 1)) {
                count++;
                n++;
            }
            max = Math.max(max, count);
        }
    }
    return max;
};