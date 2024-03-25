"use strict"

//1.
//splice in nums2 @ nums1, starting from nums1[m]
  //remove n values from nums1, add n values
//sort the array in inc order

var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n, nums2);
  nums1.sort((a, b) => (a - b));
}

//2.
//assign pointers
  //n1 = m - 1 (last el of nums1)
  //n2 = n - 1 (last el of nums2)
  //n1L = nums1.length - 1 (last val of nums1)

//until we've reach begin of n2, less than 0
  //if n2 >= to n1 
    //replace n1L w. n2
    //move back n1L
    //move back n2
  //else
    //replace n1L w. n1
    //move back n1L
    //move back n1

var merge = function (nums1, m, nums2, n) {
  let n1 = m - 1;
  let n2 = n - 1;
  let n1L = nums1.length - 1;

  while (n2 >= 0) {
    if (nums2[n2] >= nums1[n1]) {
      nums1[n1L] = nums2[n2];
      n2--;
    } else {
      nums1[n1L] = nums1[n1];
      n1--;
    }
    n1L--;
  }
}

//TODO: this enters into an infinite loop