class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])
        minutes = 0
        num_fresh = 0
        rotten = collections.deque()

        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == 2:
                    rotten.append((r, c))
                elif grid[r][c] == 1:
                    num_fresh += 1
        
        while rotten and num_fresh > 0:
            
            for _ in range(len(rotten)):
                ry, rx = rotten.popleft()
                delta = [(1, 0), (-1, 0), (0, 1), (0, -1)]
                for dy, dx in delta:
                    y, x = ry + dy, rx + dx
                    if y < 0 or y >= ROWS or x < 0 or x >= COLS or grid[y][x] == 2 or grid[y][x] == 0:
                        continue
                    
                    grid[y][x] = 2
                    num_fresh -= 1
                    rotten.append((y, x))
            
            minutes += 1
        
        return minutes if num_fresh == 0 else -1
                


