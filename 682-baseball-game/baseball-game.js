/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let score = [];
    for (o of operations) {
        if (Number(o)) score.push(Number(o));
        else if (o === 'C') score.pop();
        else if (o === '+') {
            score.push(score[score.length -1] + score[score.length -2])
        } else if (o === 'D') score.push(score[score.length -1] * 2);
    }
    let final = 0;
    for (s of score) {
        final += s;
    }
    return final; 
};