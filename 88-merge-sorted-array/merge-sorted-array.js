var merge = function (nums1, m, nums2, n) {
  let n1 = m - 1;
  let n2 = n - 1;
  let nL = nums1.length - 1;

  while (n2 >= 0) {
    if (nums1[n1] > nums2[n2]) {
      nums1[nL] = nums1[n1];
      nL--;
      n1--;
    } else {
      nums1[nL] = nums2[n2];
      n2--;
      nL--;
    }
  }
}