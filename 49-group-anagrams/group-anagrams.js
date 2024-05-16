/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //hM Map: k = alpha sorted ltrs v: [word]
    //for str of strs
        //alpha sort str
        //create new key of set of str
    const ltrsToWords = {};
    for (let s of strs) {
        const sorted = s.split('').sort();
        if (sorted in ltrsToWords) ltrsToWords[sorted].push(s);
        else ltrsToWords[sorted] = [s];
    }
    return Object.values(ltrsToWords);
};