/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    let sFC = freqCounter(s);
    let tFC = freqCounter(t);
    for (key in sFC) {
        if (tFC[key] !== sFC[key]) {
            return false;
        }
    }
    return true;
};

function freqCounter(str) {
    const charCount = {};
    for (let s of str) {
        if (charCount[s] === undefined) {
            charCount[s] = 1;
        } else {
            charCount[s]++;
        }
    }
    return charCount;
}