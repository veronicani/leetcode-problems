/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const ans = [];
    let lastLoggedIdx = 0; //keep track of last val found @ nums2
    let matchIdx = 0;
    const nums2Idx = {};
    for (let i = 0; i < nums1.length; i++) {
        //if n1 is in nums2Idx, return lookup of n1
        let n1 = nums1[i]
        if (nums2Idx[n1] !== undefined) {
            matchIdx = nums2Idx[n1];
        } else {
        //loop over nums2, start from lastLogged
            for (let j = lastLoggedIdx; j < nums2.length; j++) {
                let n2 = nums2[j];
                nums2Idx[n2] = j;
                lastLoggedIdx++;
                if (nums2Idx[n1] !== undefined) {
                    matchIdx = nums2Idx[n1];
                    break;
                }
            }
        }
        //find greater val than curr val of nums1 @ nums2
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