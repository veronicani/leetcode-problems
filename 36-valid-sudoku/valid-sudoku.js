/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let y = 0; y < board.length; y++) {
        let notSeen = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
        for (let x = 0; x < board[y].length; x++) {
            if (board[y][x] !== '.') {
                if (!notSeen.has(board[y][x])) return false;
                notSeen.delete(board[y][x]);
            }
        }   
    }
    for (let x = 0; x < board[0].length; x++) {
        let notSeen = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
        for (let y = 0; y < board.length; y++) {
            if (board[y][x] !== '.') {
                if (!notSeen.has(board[y][x])) return false;
                notSeen.delete(board[y][x]);
            }
        }   
    }
    const subgrids = {
        0: new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']),
        1: new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']),
        2: new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']),
        3: new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']),
        4: new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']),
        5: new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']),
        6: new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']),
        7: new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']),
        8: new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']),
    }
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
            if (board[y][x] !== '.') {
                let subgridIdx = Math.floor(y / 3) * 3 + Math.floor(x / 3);
                if (!subgrids[subgridIdx].has(board[y][x])) return false;
                subgrids[subgridIdx].delete(board[y][x]);
            }
        }   
    }
    return true;
};