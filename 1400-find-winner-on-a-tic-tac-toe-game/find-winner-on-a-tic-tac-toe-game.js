/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    const board = [];
    for (let i = 0; i < 3; i++) {
        board[i] = [];
        for (let j = 0; j < 3; j++) {
            board[i][j] = null;
        }
    }
    
    let currP = 'A';
    for (let i = 0; i < moves.length; i++) {
        let [x, y] = moves[i];
        board[y][x] = currP;
        currP = currP === 'A' ? 'B' : 'A';
    }
    
    let emptySpots = 0;
    //see if there is 3 in a row for any player
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
            let curr = board[y][x];
            if (isWinner([x, y], board)) return curr;
            if (curr === null) emptySpots++;
        }
    }
    return emptySpots > 0 ? 'Pending' : 'Draw';
};

var isWinner = function(coords, board) {
    let [x, y] = coords;
    let curr = board[y][x];
    if (curr === null) return false;

    //_win: make sure that all coords are legal and equal to curr;
    var _win = function(cells) {
        return cells.every(([y, x]) =>
            y >= 0 &&
            y < board.length &&
            x >= 0 &&
            x < board[y].length &&
            board[y][x] === curr);
    }

    const horiz = [[y, x], [y, x+1], [y, x+2]];
    const vert = [[y, x], [y+1, x], [y+2, x]];
    const diaLR = [[y, x], [y+1, x+1], [y+2, x+2]];
    const diaRL = [[y, x], [y+1, x-1], [y+2, x-2]];

    return (_win(horiz) || _win(vert) || _win(diaLR) || _win(diaRL));
    
}