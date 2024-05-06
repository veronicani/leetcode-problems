/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const sFC = {};
    const tFC = {};

    for (let i = 0; i < s.length; i++) {
        sFC[s[i]] = (sFC[s[i]] || 0) + 1;
        tFC[t[i]] = (tFC[t[i]] || 0) + 1;
    }

    for (key in sFC) {
        if (tFC[key] !== sFC[key]) {
            return false;
        }
    }
    return true;
};