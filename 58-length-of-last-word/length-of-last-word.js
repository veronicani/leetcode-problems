/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const sArr = s.split(" ");
  const last = sArr.findLast(v => v !== '');
  return last.length;
};