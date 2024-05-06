/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const ans = new Array(nums1.length).fill(-1);
    const nums1Idx = new Map(nums1.map((val, i) => [val, i]));

    let stack = [];
    
    for (let i = 0; i < nums2.length; i++) {
        let n2 = nums2[i];

        let stackTop = stack[stack.length - 1];
        while (stack.length > 0 && n2 > stackTop) {
            let stackTopIdx = nums1Idx.get(stackTop);
            ans[stackTopIdx] = n2;
            stack.pop();
            stackTop = stack[stack.length - 1];
        }
        if (nums1Idx.has(n2)) {
            stack.push(n2);
        }
    }
    
    return ans;
};