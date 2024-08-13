class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = defaultdict(set)
        cols = defaultdict(set)
        subgrids = defaultdict(set)
        
        for y in range(len(board)):
            for x in range(len(board)):
                if board[y][x] == '.':
                    continue
                if int(board[y][x]) not in range(1, 10):
                    return False
                grid = y // 3 * 3 + x // 3
                cell = board[y][x]
                if (cell in rows[y] or
                    cell in cols[x] or
                    cell in subgrids[grid]):
                    return False
                rows[y].add(cell)
                cols[x].add(cell)
                subgrids[grid].add(cell)

        return True