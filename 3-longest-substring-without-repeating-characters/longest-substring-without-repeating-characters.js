/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    const chars = new Set();
    let l = 0;
    for (let r = 0; r < s.length; r++) {
        while (chars.has(s[r])) {
            chars.delete(s[l]);
            l++; 
        }
        max = Math.max(r - l + 1, max);
        chars.add(s[r]);
    }
    return max;
};