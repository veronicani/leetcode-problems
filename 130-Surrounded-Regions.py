class Solution:
    def solve(self, board: List[List[str]]) -> None:
        \\\
        Do not return anything, modify board in-place instead.
        \\\
        ROWS, COLS = len(board), len(board[0])
        def protect(y, x):
            coords = [(y+1, x), (y-1, x), (y, x-1), (y, x+1)]
            if (
                y < 0
                or y > ROWS - 1
                or x < 0
                or x > COLS - 1
                or board[y][x] != 'O'
            ):
                return
            board[y][x] = '#' 
            for y, x in coords:
                protect(y, x)

        # protect unsurrounded regions O -> #
        for r in range(ROWS):
            for c in range(COLS):
                 # check for Os at edge of board
                if board[r][c] == 'O' and (r in [0, ROWS - 1] or c in [0, COLS - 1]):
                    protect(r, c)
        
        for r in range(ROWS):
            for c in range(COLS):
                # every O that hasn't been protected can now be surrounded
                if board[r][c] == 'O':
                    board[r][c] = 'X'
                # changed protected regions # back into O
                elif board[r][c] == '#':
                    board[r][c] = 'O'
        
        
        return board
