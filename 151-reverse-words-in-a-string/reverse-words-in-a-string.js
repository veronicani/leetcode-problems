/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const res = [];
    for (let end = s.length - 1; end >= 0; end--) {
      if (s[end] !== ' ') {
        let start = end;
        while (s[start] !== ' ' && start >= 0) {
          start--;
        }
        let word = s.slice(start + 1, end + 1);
        res.push(word);
        end = start;
      }
    }
    return res.join(' ');
};