class Solution:
    def solve(self, board: List[List[str]]) -> None:
        \\\
        Do not return anything, modify board in-place instead.
        \\\
        ROWS, COLS = len(board), len(board[0])

        def protect(y, x):
            if (y not in range(ROWS) or x not in range(COLS) or board[y][x] != 'O'):
                return
            board[y][x] = '$'
            delta = [(0, 1), (0, -1), (-1, 0), (1, 0)]
            for yd, xd in delta:
                yy, xx = yd + y, xd + x
                protect(yy, xx)
                    
        
        for r in range(ROWS):
            for c in range(COLS):
                if r in [0, ROWS - 1] or c in [0, COLS - 1]:
                    protect(r, c)
        
        for r in range(ROWS):
            for c in range(COLS):
                if board[r][c] == 'O': 
                    board[r][c] = 'X'
        
        for r in range(ROWS):
            for c in range(COLS):
                if board[r][c] == '$': 
                    board[r][c] = 'O'
        return board
        