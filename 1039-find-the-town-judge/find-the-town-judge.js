/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (!trust.length) return n === 1 ? 1 : -1;
    let people = [];
    for (let i = 0; i <= n; i++) {
        people.push(0);
    }
    for (let [truster, trustee] of trust) {
        people[trustee]++;
        people[truster]--;
    }

    for (let p = 0; p < people.length; p++) {
        if (people[p] === n - 1) return p;
    }
    return -1;
};