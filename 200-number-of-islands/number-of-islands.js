/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let count = 0;
    let queue = [];

    var markIsland = function() {
        while (queue.length) {
            let [y, x] = queue.shift();
            if (y < 0 || y >= grid.length ||
                x < 0 || x >= grid[0].length ||
                grid[y][x] !== '1') continue;
            
            grid[y][x] = '#';
            for (let [dy, dx] of directions) {
                queue.push([y + dy, x + dx]);
            }
        }
    }

    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            if (grid[y][x] === '1') {
                count++;
                queue.push([y, x]);
                markIsland();
            }
        }
    }

    return count;
};