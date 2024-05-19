var threeSum = function(nums) {
    let res = [];
    nums.sort((a, b) => a - b);
    const firstValsToComplement = {};
    
    for (let start = 0; nums[start] <= 0; start++) {
      let startVal = nums[start];
      if (startVal in firstValsToComplement) continue;
      firstValsToComplement[startVal] = 0 - startVal;
      
      const complements = new Set();
      let left = start + 1;
      let right = nums.length - 1;
      
      while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === firstValsToComplement[startVal]) {
          if (!complements.has(nums[left]) && !complements.has(nums[right])) {
            res.push([startVal, nums[left], nums[right]]);
            complements.add(nums[left]);
            complements.add(nums[right]);
          }
          left++;
          right--;
        } else if (sum < firstValsToComplement[startVal]) {
          left++;
        } else right--;
      }
    }
    return res;
};
