
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let n1 = m - 1;
  let n2 = n - 1;
  let nL = nums1.length - 1;

  while (n2 >= 0) {
    if (nums1[n1] > nums2[n2]) {
      nums1[nL] = nums1[n1];
      n1--;
    } else {
      nums1[nL] = nums2[n2];
      n2--;
    }
    nL--;
  }
}