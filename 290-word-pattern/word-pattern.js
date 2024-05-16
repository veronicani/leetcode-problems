/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let words = s.split(' ');
    if (words.length !== pattern.length) return false;
    
    let charToWord = new Map();
    let wordToChar = new Map();
    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i];
        let word = words[i];
        
        if (!charToWord.has(char) && !wordToChar.has(word)) {
            charToWord.set(char, word);
            wordToChar.set(word, char);
        } else if (charToWord.get(char) !== word ||
                    wordToChar.get(word) !== char) {
            return false;
        } else if (!charToWord.has(char) || !wordToChar.has(word)) {
            return false;
        }
    }
    return true;
};