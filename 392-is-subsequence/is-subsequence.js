/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s === t) return true;

    let sP = 0;
    let tP = 0;

    while (t[tP] !== undefined) {
        if (s[sP] === t[tP]) {
            sP++;
            tP++;
        } else {
        tP++;
        }
    }

    if (s[sP]) return false;
    return true;
};