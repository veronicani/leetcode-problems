/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    //if numRows is 0, return [[]]

    //init result = [[1]]
    //loop for i = 1; i < numRows
        //init row -> []
        //make temp arr -> append 0 to beg and end of the last row in result
            //for j = 1; until j reaches end of temp
            // push the sum of j and prev into row
        //push row into the result
    //return result

    if (numRows === 0) return [[]];

    let result = [[1]];
    while (result.length < numRows) {
        let row = [];
        let temp = [0, ...result[result.length - 1], 0];
        for (let i = 1; i < temp.length; i++) {
            row.push(temp[i] + temp[i - 1]); 
        }
        result.push(row);
    }

    return result;
};