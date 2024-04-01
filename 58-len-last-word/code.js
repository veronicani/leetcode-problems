"use strict"

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  //split str along spaces
  const sArr = s.split(" ");
  //return len of last word in arr
  const last = sArr[sArr.length - 1];
  return last.length;
};