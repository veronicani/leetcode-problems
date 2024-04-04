/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    //create [] for out
    //loop for numRows x - start from 1, end when > than numRows
        //create a subarray
        //make another arr for sums = sum of each number plus prev. num
        
        //if curr = 1, push 1 into subarray
        //sums = []

        //else
            //add 1 to the beginning of subarr
            //spread out sums and add the subarr
            //add 1 to the end of subarr
            //loop over the subarr, until i reaches the end
                //add i to prev val -> push this sum into sums
            //push subarray into out
    //return out
    const out = [];
    let sums = [];
    for (let rowNum = 1; rowNum <= numRows; rowNum++) {
        let row = [];
        
        if (rowNum === 1) {
            row.push(1);
        } else {
            row.push(1);
            row.push(...sums);
            row.push(1);
            sums = [];
            for (let i = 1; i < row.length; i++) {
                sums.push(row[i] + row[i - 1]);
            }
        }
        out.push(row);
    }
    return out;
};