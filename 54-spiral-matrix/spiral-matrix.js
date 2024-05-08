/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const numVals = matrix.length * matrix[0].length;
    let left = 0;
    let right = matrix[0].length - 1;
    let top = 0;
    let bottom = matrix.length - 1;
    const res = [];

    while (res.length < numVals) {
        //traverse right from topleft -> topright
        for (let x = left; x <= right && res.length < numVals; x++) {
            res.push(matrix[top][x]);
        }
        top++;

        //traverse down from topright -> bottomright
        for (let y = top; y <= bottom && res.length < numVals; y++) {
            res.push(matrix[y][right]);
        }
        right--;

        //traverse left from bottomright -> bottomleft;
        for (let x = right; x >= left && res.length < numVals; x--) {
            res.push(matrix[bottom][x]);
        }
        bottom--;


        //traverse up from bottomleft -> topleft;
        
        for (let y = bottom; y >= top && res.length < numVals; y--) {
            res.push(matrix[y][left]);
        }
        left++;
        
        console.log('res=', res);
    }
    return res;
};