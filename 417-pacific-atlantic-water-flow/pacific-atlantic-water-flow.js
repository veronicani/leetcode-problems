var pacificAtlantic = function(heights) {
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let seenPacific = new Set();
    let seenAtlantic = new Set();
    
    var canPacific = function(y, x) {
      if (y <= 0 || x <= 0) return true;
      let flatCoords = y * heights[0].length + x;
      if (seenPacific.has(flatCoords)) return false;
      seenPacific.add(flatCoords);
      
      for (let [yd, xd] of directions) {
        if (y + yd >= heights.length ||
             x + xd >= heights[0].length) continue;
        
        if (heights[y][x] >= heights[y + yd][x + xd] && 
        canPacific(y + yd, x + xd, y, x)) return true;
      }
      return false;
    }
    
    var canAtlantic = function(y, x) {
      if (y >= heights.length - 1 || x >= heights[0].length - 1) return true;

      let flatCoords = y * heights[0].length + x;
      if (seenAtlantic.has(flatCoords)) return false;
      seenAtlantic.add(flatCoords);
      
      for (let [yd, xd] of directions) {
        if (y + yd < 0 || x + xd < 0) continue;
        
        if (heights[y][x] >= heights[y + yd][x + xd] && 
          canAtlantic(y + yd, x + xd, y, x)) return true;
      }
      return false;
    }
    
    let res = [];
    for (let y = 0; y < heights.length; y++) {
      for (let x = 0; x < heights[0].length; x++) {
        if (canAtlantic(y, x) && canPacific(y, x)) res.push([y, x]);
        seenPacific = new Set();
        seenAtlantic = new Set();
      }
    }
    return res;
};