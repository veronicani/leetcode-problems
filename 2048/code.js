"use strict"

/** Class for 2048. */
class Game {
  constructor(size) {
    this.board = this.makeBoard(size);
    this.merged = this.makeBoard(size);
    this.win = false;
    this.generateNewPiece(2);
    console.log('board=', this.board);
  }

  /** Makes an empty board and fills it with null. */
  makeBoard(size) {
    const board = [];
    for (let i = 0; i < size; i++) {
      board[i] = [];
      for (let j = 0; j < size; j++) {
        board[i][j] = null;
      }
    }
    return board;
  }
  
  /** Places a new tile in a random empty spot on board. */
  generateNewPiece(val) {
    const emptySpots = []; 

    for (let y = 0; y < this.board.length; y++) {
      for (let x = 0; x < this.board.length; x++) {
        if (this.board[y][x] === null) emptySpots.push([y, x]);
      }
    }
    if (!emptySpots.length) return;
    const spotIdx = Math.floor(Math.random() * emptySpots.length);
    const [y, x] = emptySpots[spotIdx];
    this.board[y][x] = val;
  }
  
  /** Executes 1 round of the game according to the direction of the key. 
   * Places a new piece on the board after player's turn, and checks to see
   * if the game can be continued.
  */
  playMove(key) {
    if (key === 'up') {
      this.shiftTiles('up');
        for (let y = 0; y < this.board.length - 1; y++) {
          for (let x = 0; x < this.board.length; x++) {
            let curr = {val: this.board[y][x], coords: [y, x]};
            let below = {val: this.board[y + 1][x], coords: [y + 1, x]};
            if (this.mergeTiles(curr, below) === 'true') {
              this.shiftTiles('up');
            }
          }
        }
      }
    
    //if key = 'down'
      //shiftTiles(down);
      //loop over vals in last row
        //loop over all vals from the end to 1 in the curr col
        //if mergeTiles(curr, above) returns true
          //shiftTiles(down)
    //if key = 'right'
      //shiftTiles(right);
      //loop over vals in last col
        //loop over all vals from the end to 1 in the curr row
        //if mergeTiles(curr, left) returns true
          //shiftTiles(right)
    //if key = 'left'
      //shiftTiles(left);
      //loop over vals in first col
        //loop over all vals from 0 to end - 1 in the curr row
        //if mergeTiles(curr, right) returns true
          //shiftTiles(left)

    //check for win
      //if win, set this.win = true, end game
    if (this.checkForWin === true) {
      this.win = true;
      endGame(this.win);
    }
    //if gameOver, end game
    if (this.checkGameOver === true) {
      endGame(this.win);
    }
    //if board is not full, generateNewPiece;
    console.log('board=', this.board);
    this.generateNewPiece(2);
    console.log('boardnewpiece=', this.board);
    this.merged = this.makeBoard(this.board.length);
    
  }

  shiftTiles(direction) {
    if (direction === 'up') {
      for (let y = 1; y < this.board.length; y++) {
        for (let x = 0; x < this.board.length; x++) {
          let curr = this.board[y][x];
          if (curr !== null) {
            let y2 = y;
            while (y2 > 0 && this.board[y2 - 1][x] === null) {
              y2--; 
            }
            if (y2 !== y) {
              this.board[y2][x] = curr;
              this.board[y][x] = null;
            }
          }
        }
      }
    }
  }

  mergeTiles(curr, next) {
    let [y1, x1] = curr.coords;
    let [y2, x2] = next.coords;

    if (curr.val !== null && curr.val === next.val && this.merged[y1][x1] === null) {
      this.board[y1][x1] = curr.val * 2;
      this.merged[y1][x1] = true;
      this.board[y2][x2] = null;
      return true;
    }
  }

  checkForWin() {
    for (let y = 0; y < this.game.length; y++) {
      for (let x = 0; x < this.game.length; x++) {
        if (this.board[y][x] === 2048) return true;
      }
    }
    return false;
  }

  checkGameOver() {
    for (let y = 0; y < this.game.length; y++) {
      for (let x = 0; x < this.game.length; x++) {
        let curr = this.game[y][x];
        if (curr === null) return false;
        let l = this.game[y][x - 1];
        let r = this.game[y][x + 1];
        let b = this.game[y + 1][x];
        let a = this.game[y - 1][x];
        if (curr === l || curr === r || curr === b || curr === a) return false;
      }
    }
    return true;
  }

  endGame(win) {
    if (win) console.log('You win!');
    else console.log('Try again!');
  }
}