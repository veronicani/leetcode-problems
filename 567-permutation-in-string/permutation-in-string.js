/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let s1Count = charCount(s1)
    let s2Count = charCount(s2.slice(0, s1.length));
    if (sameCount(s1Count, s2Count)) return true;

    let l = 0;
    for (let r = l + s1.length; r <= s2.length; r++) {
        s2Count[s2[l]]--;
        s2Count[s2[r]] = (s2Count[s2[r]] || 0) + 1;
        if (sameCount(s1Count, s2Count)) return true;
        l++;
    }
    return false;
};

var charCount = function(s) {
    let count = {};
    for (let i = 0; i < s.length; i++) {
        count[s[i]] = (count[s[i]] || 0) + 1;
    }
    return count;
}

var sameCount = function(o1, o2) {
    for (let o in o1) {
        if (o1[o] !== o2[o]) return false;
    }
    return true;
}