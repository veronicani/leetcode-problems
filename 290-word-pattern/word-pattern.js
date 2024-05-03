/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;
    const ltrToWord = {};
    const wordToLtr = {};
    for (let i = 0; i < pattern.length; i++) {
        let currL = pattern[i];
        let currW = words[i];
        console.log('currL=', currL, 'currW=', currW);
        console.log('ltrToWord[currL]', ltrToWord[currL], 'wordToLtr[currW]=', wordToLtr[currW]);
        console.log('ltrToWord=', ltrToWord, 'wordToLtr=', wordToLtr);
        if (ltrToWord[currL] !== undefined) {
            if (ltrToWord[currL] !== currW || wordToLtr[currW] !== currL) {
                return false;
            }
        } else if (typeof wordToLtr[currW] === 'string') {
            return false;
        } else {
            ltrToWord[currL] = currW;
            wordToLtr[currW] = currL;
        }
    }
    return true;
};