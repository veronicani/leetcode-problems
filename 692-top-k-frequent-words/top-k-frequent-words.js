/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let wordsFreq = freqCounter(words);

    let pq = new MaxPriorityQueue({
        compare: (word1, word2) => {
            if (word1.count > word2.count) return -1;
            if (word1.count < word2.count) return 1;
            
            let sorted = [word1.word, word2.word].sort();
            return sorted[0] === word1.word ? -1 : 1;
        }
    });

    for (let word in wordsFreq) {
        pq.enqueue({ word, count: wordsFreq[word]});
    }
    
    const res = [];
    for (let i = 0; i < k; i++) {
        res.push(pq.dequeue().word);
    }
    return res;
};

var freqCounter = function(words) {
    const count = {};
    for (const w of words) {
        count[w] = (count[w] || 0) + 1;
    }
    return count;
}