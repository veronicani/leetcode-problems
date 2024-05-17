/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let seen = new Set();
    
    var findPerimeter = function(y, x) {
        if (y < 0 || y >= grid.length ||
            x < 0 || x >= grid[0].length || 
            grid[y][x] === 0) {
                return 1;
            }
        //cannot add (y, x) (no tuples) or [y, x] (diff ref) to a set
        if (seen.has(`${y},${x}`)) return 0;
        seen.add(`${y},${x}`);
        let perimeter = 0;
        perimeter += findPerimeter(y - 1, x);
        perimeter += findPerimeter(y + 1, x);
        perimeter += findPerimeter(y, x - 1);
        perimeter += findPerimeter(y, x + 1);

        return perimeter;
    }
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            if (grid[y][x] === 1) {
                return findPerimeter(y, x);
            }
        }
    }
    return 0;
};