/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let j = s.length - 1;
    for (let i = 0; i <= j; i++) {
        console.log('ichar=', s[i], 'jchar=', s[j]);
        if (!isAlphaNum(s, i)) {
            console.log('s not alphs');
            continue;
        } else if (!isAlphaNum(s, j)) {
            console.log('j not alphs');
            j--;
            i--;
        } else if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        } else {
            console.log('both match');
            j--;
        }
    }
    return true;
};

const isAlphaNum = (s, i) => s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90 || s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57 || s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122;