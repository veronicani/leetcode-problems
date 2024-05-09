"use strict"

//maps Chess pieces to initial coordinates of a board.
const INITIAL_POSITIONS = new Map([
  ['0-0', ["black", 'king']],
  ['0-1', ["black", 'rook']],
  //...,
])

//Chess notations mapped to board coordinates.
const NOTATION_TO_COORDS = {
  "A1": [7, 0],
  "A2": [6, 0],
  "A3": [5, 0],
  "A8": [0, 0],
};

//Piece class
class Piece {
  constructor(type, color, position) {
    this.currPosition = position;
    this.color = color;
    this.type = type;
  }

  sayHi() {
    return 'I am a chess piece!';
  }
}

// Classes for K, Q, rook, knight, etc. 
class King extends Piece {

  sayHi() {
    return 'I am a king';
  }

  getFutureCoords() {
    //return list of coords for all future moves of K
    const [y, x] = this.currPosition;
    return [
      [y + 1, x],
      [y - 1, x],
      [y, x - 1],
      [y, x + 1],
      [y - 1, x - 1],
      [y + 1, x + 1],
      [y - 1, x + 1],
      [y + 1, x - 1]
    ]
  }
}

class Chess {
  constructor() {
    this.board = this.makeBoard();
    this.currPlayer = 'black';
    this.isCheckMate = false;
  }

  makeBoard() {
    const board = [];
    for (let y = 0; y < 8; y++) {
      board[y] = [];
      for (let x = 0; x < 8; x++) {
        const piece = INITIAL_POSITIONS.get(`${y}-${x}`);
        if (!piece) board[y][x] = null;
        else {
          const [color, type] = piece;
          board[y][x] = this._makePiece(type, color, [y, x]);
        }
      }
    }
    return board;
  }

  _makePiece(type, color, position) {
    //series of if/else that inits a Piece to corres. class
    //if role = 'king' -> return new King()
    if (type === 'king') {
      return new King(type, color, position);
    }
  }

  playMove(currPosition, futurePosition) {
    if (!(currPosition in NOTATION_TO_COORDS) || 
      !(futurePosition in NOTATION_TO_COORDS)) throw new Error('Invalid move!');
    //lookup the board coords from currP & futureP
    let [yCurr, xCurr] = NOTATION_TO_COORDS[currPosition];
    let [yFut, xFut] = NOTATION_TO_COORDS[futurePosition];
    //find the piece at currP
    let piece = this.board[yCurr][xCurr];
    //if !piece -> throw Err
    if (!piece) throw new Error('No piece found');
    //if piece.color is not currPlayer -> throw Err
    if (piece.color !== this.currPlayer) throw new Error ('Wrong player');
    //piece.getFutureCoords -> return an array of [coords]
    //filter out the coords that are outside the board's bounds
    const validCoords = piece
      .getFutureCoords()
      .map(([y, x]) => y >= 0 && y < 8 && x >= 0 && x < 8);
    //if getFutureValidCoords doesn't contain futurePosition
      //throw Err
    return validCoords;
    //if the futurePosition has a piece belonging to currPlayer
      //throw Err
    //assign the futurePosition on board to be curr piece
    //update the curr piece's currPosition
    //assign the currPosition to be null

    //run isCheck on curr piece to see if there is a check
    //if there isCheck, run isCheckmate on currPiece
  }

  isCheck(currPiece) {
    //get valid future moves from currPiece
    //return true if any moves are opposing color's king
  }

  isCheckMate(currPiece) {
    //get the future moves of the opposing king
      //check for moves out of range of the currPiece's futuremoves
    
    //check to see if any opposing color's pieces future moves 
    //can take currPiece (includes currPiece's position)

    //check if any piece can move into the 
  }
}