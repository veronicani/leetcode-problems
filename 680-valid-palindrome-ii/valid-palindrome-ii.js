/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        if (s[l] !== s[r]) {
            return (isPalindrome(s.slice(l + 1, r + 1)) ||
                isPalindrome(s.slice(l, r)));
        }
        l++;
        r--;
    }
    return true;
};

var isPalindrome = function(str) {
    let l = 0;
    let r = str.length - 1;
    while (l < r) {
        if (str[l] !== str[r]) return false;
        l++;
        r--;
    }
    return true;
}
