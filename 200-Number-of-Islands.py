class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        count = 0
        def markIsland(coords):
            y, x = coords
            if y not in range(len(grid)) or x not in range(len(grid[0])):
                return
            if grid[y][x] == '0' or grid[y][x] == 'x':
                return
            grid[y][x] = 'x'
            coords = [(y - 1, x), (y + 1, x), (y, x + 1), (y, x - 1)]
            for c in coords:
                markIsland(c)
        
        for y in range(len(grid)):
            for x in range(len(grid[y])):
                if grid[y][x] == '1':
                    count += 1
                    markIsland((y, x))
        return count
