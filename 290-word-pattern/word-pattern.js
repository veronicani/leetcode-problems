/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;
    if (new Set(pattern).size !== new Set(words).size) return false;

    const ltrToWord = new Map();
    
    for (let i = 0; i < pattern.length; i++) {
        let currL = pattern[i];
        let currW = words[i];
        if (ltrToWord.has(currL) && ltrToWord.get(currL) !== currW) return false;
        ltrToWord.set(currL, currW);
    }
    return true;
};