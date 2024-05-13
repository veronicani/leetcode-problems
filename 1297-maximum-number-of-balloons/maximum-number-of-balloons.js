/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const BALLOON_CHARS = new Set(['b', 'a', 'l', 'o', 'n']);
    let ltrCount = {};
    for (let t of text) {
        if (BALLOON_CHARS.has(t)) {
            ltrCount[t] = ltrCount[t] + 1 || 1;
        }
    }
    let instances = +Infinity;
    for (const ltr of BALLOON_CHARS) {
        console.log('ltr=', ltr);
        if (!(ltr in ltrCount)) {
            ltrCount[ltr] = 0;
        }
        if (ltr === 'l' || ltr === 'o') {
            ltrCount[ltr] = Math.floor(ltrCount[ltr] / 2);
        }
        instances = Math.min(ltrCount[ltr], instances);
    }
    return instances;
};