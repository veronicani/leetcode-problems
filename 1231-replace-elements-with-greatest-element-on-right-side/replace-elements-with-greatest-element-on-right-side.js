/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    //init max = -1;
    let max = -1;
    let right = -1;
    //loop from the end of the arr to the begin
    for (let i = arr.length - 1; i >= 0; i--) {
        //store the num to the right of curr val
        //reassign max to be max between the prev. max & the num to the right
        max = Math.max(max, right);
        right = arr[i];
        //replace the curr val with max
        arr[i] = max;
    }

    return arr;

};