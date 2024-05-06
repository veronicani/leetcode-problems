/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 0) return [[]];
    let tri = [[1]];

    for (let r = 1; r < numRows; r++) {
        let temp = [0, ...tri[r - 1], 0];
        let row = [];
        for (let i = 1; i < temp.length; i++) {
            row.push(temp[i - 1] + temp[i]);
        }
        tri.push(row);
    }
    return tri;
};

//nRows = 3
//tri = [[1], [1, 1], [1, 2, 1]]
//temp = [0, 1, 1, 0]
//row = [1, 2, 1]