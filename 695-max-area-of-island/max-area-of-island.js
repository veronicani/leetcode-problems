/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max = 0;
    let seen = new Set();
    var findArea = function(y, x) {
        if (y < 0 || y >= grid.length ||
            x < 0 || x >= grid[0].length ||
            grid[y][x] === 0) return 0;
        let flatCoords = y * grid[0].length + x;
        
        if (seen.has(flatCoords)) return 0;
        seen.add(flatCoords);
        let area = 1;
        const directions = [[0, 1], [0, -1], [-1, 0], [1, 0]];
        for (let [dy, dx] of directions) {
            area += findArea(y + dy, x + dx);
            max = Math.max(area, max);
        }
        return area;
    }
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            if (grid[y][x] === 1) findArea(y, x);
        }
    }
    return max;
};