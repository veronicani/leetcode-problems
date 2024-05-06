"use strict"

class TTT {
  constructor(size, p1) {
    this.board = this.createBoard(size);
    this.winner = null;
    this.currPlayer = p1;
  }

  createBoard(size) {
    const board = [];
    for (let r = 0; r < size; r++) {
      board[r] = [];
      for (let c = 0; c < size; c++) {
        board[r][c] = null;
      }
    }
    return board;
  }
  /** playMove: 
   * player - token representing player
   */
  playMove(player, coords) {
    if (this.currPlayer !== player) return;
    
    let [x, y] = coords;
    if (this.board[y][x] !== null) {
      console.log('Invalid move!');
      return;
    }
    this.board[y][x] = player;
    
    if (this.checkForWin(x, y) === true || this.boardIsFull()) {
      this.endGame(this.winner);
      return;
    }
    this.currPlayer = this.currPlayer === 'X' ? 'O' : 'X';
  }

  checkForWin(x, y) {
    if (this.board[y][x] === null) return false;
    //_win: checks to see if all coords are valid and currPlayer
    const _win = coords => (
      coords.every(([y, x]) =>
        y >= 0 &&
        y < this.board.length &&
        x >= 0 &&
        x < this.board[y].length &&
        this.board[y][x] === this.currPlayer
        )
      );

    const horz = [[y, x],[y, x+1],[y, x+2]];
    const vert = [[y, x],[y+1, x],[y+2, x]];
    const diaLR = [[y, x],[y+1, x+1],[y+2, x+2]];
    const diaRL = [[y, x],[y-1, x-1],[y-2, x-2]];

    if (_win(horz) || _win(vert) || _win(diaLR) || _win(diaRL)) {
      this.winner = this.currPlayer;
      return true;
    };
  }

  boardIsFull() {
    for (let r = 0; r < this.board.length; r++) {
      for (let c = 0; c < this.board[r].length; c++) {
        if (this.board[r][c] === null) return false;
      }
    }
    return true;
  }

  endGame(winner) {
    let msg = winner ? `${this.currPlayer} won!` : `Tie!`;
    console.log(msg);
  }
}