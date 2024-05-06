/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let max = 0;
    let l = 0;
    let r = 0;
    let count = {}; //stores the count of chars in curr window
    let maxCharCount = 0;
    while (r < s.length) {
        count[s[r]] = count[s[r]] === undefined ? 1 : count[s[r]] + 1;
        maxCharCount = Math.max(count[s[r]], maxCharCount);
        while ((r - l + 1) - maxCharCount > k) {
            count[s[l]]--;
            l++;
        }
        max = Math.max(r - l + 1, max);
        r++;
    }
    return max;
};