/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alphaNum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        while (alphaNum.indexOf(s[l]) < 0 && l < r) l++;
        while (alphaNum.indexOf(s[r]) < 0 && r > l) r--;
        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
        l++;
        r--;
    }
    return true;
};