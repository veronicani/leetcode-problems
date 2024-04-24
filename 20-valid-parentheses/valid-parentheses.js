/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const ps = {
        "}":"{",
        ")":"(",
        "]":"["
        };
    for (let char of s) {
        if (char in ps) {
            if (ps[char] !== stack[stack.length - 1]) return false;
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
};