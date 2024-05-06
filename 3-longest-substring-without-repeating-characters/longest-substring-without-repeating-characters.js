/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let b = 0;
    let e = 0;
    let chars = new Set();

    while (e < s.length) {
        while (chars.has(s[e])) {
            chars.delete(s[b]);
            b++;
        }
        chars.add(s[e]);
        max = Math.max(chars.size, max);
        e++;
    }
    return max;
};