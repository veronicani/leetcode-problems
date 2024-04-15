/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    //init greatest to be first val
    //loop over arr, until reaching the last el
        //if the greatest val is the curr val
            //check the vals to the right of the curr -- find the new greatest val, for loop
            //set greatest to be next val
        //replace curr val with the greatest val
    //replace the last el with -1
    let greatest = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === greatest) {
            greatest = arr[i + 1];
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] > greatest) {
                    greatest = arr[j];
                }
            }
        }
        arr[i] = greatest;
    }
    arr[arr.length - 1] = -1;
    return arr;
};