/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let left = 0;
    let right = matrix[0].length - 1;
    let top = 0;
    let bottom = matrix.length - 1;
    const res = [];
    let x = 0;
    let y = 0;
    while (res.length < matrix.length * matrix[0].length) {
        //traverse right from topleft -> topright
        for (let x = left; x <= right; x++) {
            let curr = matrix[top][x];
            if (curr !== null) res.push(curr);
            matrix[top][x] = null;
        }
        top++;
        //traverse down from topright -> bottomright
        for (let y = top; y <= bottom; y++) {
            let curr = matrix[y][right];
            if (curr !== null) res.push(curr);
            matrix[y][right] = null;
        }
        right--;
        //traverse left from bottomright -> bottomleft;
        for (let x = right; x >= left; x--) {
            let curr = matrix[bottom][x];
            if (curr !== null) res.push(curr);
            matrix[bottom][x] = null;
        }
        bottom--;
        //traverse up from bottomleft -> topleft;
        for (let y = bottom; y >= top; y--) {
            let curr = matrix[y][left];
            if (curr !== null) res.push(curr);
            matrix[y][left] = null;
        }
        left++;
        console.log('res=', res);
    }
    return res;
};