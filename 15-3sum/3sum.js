var threeSum = function(nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i < nums.length; i++) {
    let startVal = nums[i];
    if (startVal > 0) break; //the curr # is > than 0, so it cannot add to any other val after
    if (i > 0 && startVal === nums[i - 1]) continue; //the curr val is a duplicate of prev vals
    let l = i + 1;
    let r = nums.length -1;
    while (l < r) {
      let b = nums[l];
      let c = nums[r];
      let sum = startVal + b + c;
      if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      } else {
        res.push([startVal, b, c]);
        l++;
        while (nums[l] === nums[l - 1]) l++;
      }
    }
  }
  return res;
};