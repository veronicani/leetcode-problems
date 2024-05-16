/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let subgridSeen = {
            0: new Set(),
            1: new Set(),
            2: new Set(),
            3: new Set(),
            4: new Set(),
            5: new Set(),
            6: new Set(),
            7: new Set(),
            8: new Set(),
        };

    for (let v = 0; v < board.length; v++) {
        let rowSeen = new Set();
        let colSeen = new Set();

        for (let h = 0; h < board[v].length; h++) {
            let _row = board[v][h];
            let _col = board[h][v];
            let _sub = board[v][h];
            let subIdx = Math.floor(v / 3) * 3 + Math.floor(h / 3);
            
            if (_row !== '.') {
                if (rowSeen.has(_row)) return false;
                rowSeen.add(_row);
            }
            if (_col !== '.') {
                if (colSeen.has(_col)) return false;
                colSeen.add(_col);
            }
            if (_sub !== '.') {
                if (subgridSeen[subIdx].has(_sub)) return false;
                subgridSeen[subIdx].add(_sub);
            }
        }
    }   
    return true;
};