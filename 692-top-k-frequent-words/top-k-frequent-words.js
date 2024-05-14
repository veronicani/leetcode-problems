/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let wordsFreq = freqCounter(words);

    //add each word into a bucket
    const bucket = [];
    for (const word in wordsFreq) {
        if (!bucket[wordsFreq[word]]) bucket[wordsFreq[word]] = [];
        bucket[wordsFreq[word]].push(word);
    }
    let res = [];
    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) res.push(...bucket[i].sort());
    }
    return res.slice(0, k);
};

var freqCounter = function(words) {
    const count = {};
    for (const w of words) {
        count[w] = (count[w] || 0) + 1;
    }
    return count;
}