/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    strs = strs.sort();
    const sortedStrs = {};
    for (str of strs) {
        let sorted = str.split('').sort().join('');
        if (sortedStrs[sorted] === undefined) {
            sortedStrs[sorted] = [str];
        } else {
            sortedStrs[sorted].push(str);
        }
    }

    const anagrams = [];

    for (key in sortedStrs) {
        anagrams.push(sortedStrs[key]);
    }

    return anagrams.sort((a, b) => a.length - b.length);
};