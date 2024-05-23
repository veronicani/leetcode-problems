/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        if (s[l] !== s[r]) {
            return (isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1));
        }
        l++;
        r--;
    }
    return true;
};

var isPalindrome = function(s, l, r) {
    if (l > r) {
        return true;
    }
    if (s[l] !== s[r]) return false;
    l++;
    r--;
    return isPalindrome(s, l, r);
}