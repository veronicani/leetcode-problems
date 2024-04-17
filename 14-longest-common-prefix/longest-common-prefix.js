/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let out = "";

    for (let i = 0; i < strs[0].length; i++) {
        for (let str of strs) {
            if (str[i] !== strs[0][i]) return out;
        }
        out += strs[0][i];
    }
    return out;
};