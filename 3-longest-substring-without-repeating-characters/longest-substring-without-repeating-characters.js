/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let b = 0;
    let e = 0;
    while (e < s.length) {
        let sub = s.slice(b, e + 1);
        let chars = new Set(sub);
        while (chars.size < sub.length) {
            b++;
            sub = s.slice(b, e + 1);
            chars = new Set(sub);
        }
        let len = e - b + 1;
        max = Math.max(len, max);
        e++;
    }
    return max;
};