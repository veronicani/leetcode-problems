/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    //let ans = [];
    //iterate over nums1
        //find the idx of matching val to curr1
        //loop over nums2 starting from idx of match
            //if curr2 g8 than curr1
                //push the val into ans
        //push -1 into ans
    
    //return ans
    const ans = [];
    for (let i = 0; i < nums1.length; i++) {
        let matchIdx = nums2.findIndex(n2 => n2 === nums1[i]);
        for (let j = matchIdx + 1; j < nums2.length; j++) {
            if (nums2[j] > nums1[i]) {
                ans.push(nums2[j]);
                break;
            }
        }
        if (ans.length < i + 1) ans.push(-1);
    }
    return ans;
};