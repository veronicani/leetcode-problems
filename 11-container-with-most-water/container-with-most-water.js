var maxArea = function(height) {
    let l = 0;
    let r = height.length -1;
    let max = 0;
    while (l < r) {
      let water = (r - l) * Math.min(height[l], height[r]);
      max = Math.max(water, max);
      if (height[l] > height[r]) {
        r--;
      } else {
        l++;
      }
    }
    return max;
};