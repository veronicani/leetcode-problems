"use strict"

class TTT(size) {
  this.currPlayer = 'O';
  this.board = makeBoard(size);

  function makeBoard(size) {
    //return a matrix like [[_, _, _], [_, _, _]]
  }

  function playMove(currPlayer, coords) {
    //
    //switch the currPlayer
  }

  function isValidMove(currPlayer, coords) { //[x, y]
    if (currPlayer !== this.currPlayer) throw new Error ("wrong player!");

    let [x, y] = coords;

    if (board[y][x] !== '_') throw new Error ("not an empty spot!");
  }

}