"use strict"

class Edge {
  constructor(val, type) {
    this.val = val;
    this.type = type;
  }
}

class Piece {
  constructor([[lv, lt], [tv, tt], [bv, bt], [rv, rt]]) {
    this.edges = [
      new Edge(lv, lt),
      new Edge(tv, tt),
      new Edge(bv, bt),
      new Edge(rv, rt),
    ]
  }
}

class Jigsaw {
  constuctor(pieces) {
    this.pieces = pieces;
    this.board = [];
    this.lastPlaced = null;
  }

  _findFirst() {
    for (let i = 0; i < this.pieces.length; i++) {
      let curr = this.pieces[i];
      if (curr.top.type === 'flat' && curr.left.type === 'flat') {
        const newRow = [];
        newRow.push(curr);
        this.pieces.splice(i, 1);
        this.board.push(newRow);
        this.lastPlaced = curr;
      }
    }
    throw new Error('Missing first piece!');
  }

  _match(e1, e2) {
    //returns T/F if the edges match
  }

  _placePiece(piece, idx) {
    const lastRow = this.board[this.board.length - 1];
    lastRow.push(piece);
    this.pieces.splice(idx, 1);
    this.lastPlaced = piece;
  }

  solve() {
    _findFirst();

    while (this.pieces.length) {
      let prevEdge = this.lastPlaced.right;
      
      //If the last placed piece's right edge is flat, 
      //make a new row, and find match for the prev row's first piece
      if (this.lastPlaced.right.type === 'flat') {
        let topP = this.board[this.board.length - 1][0];
        prevEdge = topP.bottom;
        this.board.push([]);
      }

      for (let i = 0; i < this.pieces.length; i++) {
        let curr = this.pieces[i];
        for (let j = 0; j < curr.edges.length; j++) {
          if (this._match(curr.edges[j], prevEdge) === true) {
            this._placePiece(curr, i);
            break;
          }
          break;
        }
      }
    }
    return this.board;
  }

}