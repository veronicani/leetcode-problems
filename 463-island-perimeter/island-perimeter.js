/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let perimeter = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            let sq = grid[y][x];
            console.log('y=', y, 'x=', x, 'sq=', sq);
            if (sq === 0) continue; 
            if (y !== 0) {
                if (!grid[y - 1][x]) perimeter++;
            } else perimeter++;
            if (y !== grid.length - 1) {
                if (!grid[y + 1][x]) perimeter++;
            } else perimeter++;
            if (!grid[y][x + 1]) perimeter++;
            if (!grid[y][x - 1]) perimeter++;
            console.log('peri=', perimeter);
        }           
    }
    return perimeter;
};