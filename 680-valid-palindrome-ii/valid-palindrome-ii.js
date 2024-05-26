/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        if (s[l] !== s[r]) {
            let lStr = s.slice(l + 1, r + 1);
            let rStr = s.slice(l, r);
            return (lStr === reverseStr(lStr) ||
                rStr === reverseStr(rStr));
        }
        l++;
        r--;
    }
    return true;
};

var reverseStr = function(s) {
    return s.split('').reverse().join('');
}