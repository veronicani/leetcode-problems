/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let bChars = freqCounter('balloon');
    let tChars = freqCounter(text);

    let instances = +Infinity;
    for (const b in bChars) {
        if (!(b in tChars)) tChars[b] = 0;
        instances = Math.min(Math.floor(tChars[b] / bChars[b]), instances);
    }
    return instances;
};

var freqCounter  = function(str) {
    let count = {};
    for (s of str) {
        count[s] = count[s] + 1 || 1;
    }
    return count;
}