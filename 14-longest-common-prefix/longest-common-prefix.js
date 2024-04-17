/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let out = "";
    let shortestLen = +Infinity;
    
    for (let str of strs) {
        if (str.length < shortestLen) shortestLen = str.length;
    }

    for (let i = 0; i < shortestLen; i++) {
        for (let str of strs) {
            if (str[i] !== strs[0][i]) return out;
        }
        out += strs[0][i];
    }
    return out;
};