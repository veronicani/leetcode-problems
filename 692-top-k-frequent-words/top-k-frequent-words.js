/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const wordFreq = freqCounter(words);
    wordFreqSorted = Array.from(Object.entries(wordFreq))
        .sort((a, b) => {
            if (a[1] < b[1]) return 1;
            else if (a[1] === b[1]) return sortAlpha(a[0], b[0]);
            else return -1;
        });

    let res = [];
    for (let i = 0; i < k; i++) {
        res.push(wordFreqSorted[i][0]);
    }
    return res;
};

var freqCounter = function(words) {
    let count = {};
    for (w of words) {
        count[w] = count[w] + 1 || 1;
    }
    return count;
}

var sortAlpha = function(a, b) {
    console.log('a=', a, 'b=', b);
    let shorterLength = a.length < b.length ? a.length : b.length;
    let longer = shorterLength === a.length ? b : a;
    for (let i = 0; i < shorterLength; i++) {
        if (a.charCodeAt(i) < b.charCodeAt(i)) return -1;
        else if (a.charCodeAt(i) > b.charCodeAt(i)) return 1;
    }
    return longer === a ? 1 : -1;
}