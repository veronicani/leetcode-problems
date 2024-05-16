/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let n1set = new Set(nums1);
    let n2set = new Set(nums2);
    let n1 = [];
    let n2 = [];
    for (let n of n1set) {
        if (!n2set.has(n)) n1.push(n);
    }
    for (let n of n2set) {
        if (!n1set.has(n)) n2.push(n);
    }
    return [n1, n2];
};