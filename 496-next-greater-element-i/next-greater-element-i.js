/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const ans = [];
    const nums2Idx = {};
    
    for (let n = 0; n < nums2.length; n++) {
        const n2 = nums2[n]
        nums2Idx[n2] = n;
    }

    for (let i = 0; i < nums1.length; i++) {
        const n1 = nums1[i];
        const matchIdx = nums2Idx[n1];
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