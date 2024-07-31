class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        maxArea = 0
        visited = set()
        def calcArea(coords):
            nonlocal visited
            
            if coords in visited:
                return 0
            y, x = coords
            if (y < 0 or y >= len(grid) or x < 0 or x >= len(grid[0])):
                return 0
            if grid[y][x] == 0:
                return 0
            visited.add(coords)
            currArea = 1
            coords = [(y, x + 1), (y, x-1), (y-1, x), (y+1, x)]
            for c in coords:
                currArea += calcArea(c)
            return currArea
        
        for y in range(len(grid)):
            for x in range(len(grid[y])):
                if grid[y][x] == 1:
                    islandArea = calcArea((y, x))
                    maxArea = max(maxArea, islandArea)
        
        return maxArea