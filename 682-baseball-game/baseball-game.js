/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let score = [];
    let final = 0;
    for (o of operations) {
        if (Number(o)) {
            score.push(Number(o));
            final += score[score.length -1];
        } else if (o === 'C') {
            final -= score.pop();
        } else if (o === '+') {
            score.push(score[score.length -1] + score[score.length -2])
            final += score[score.length -1];
        } else if (o === 'D') {
            score.push(score[score.length -1] * 2);
            final += score[score.length -1];
        }
    }
    
    return final; 
};