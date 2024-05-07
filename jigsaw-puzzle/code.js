"use strict"

class Edge {
  constructor(val, type) {
    this.val = val;
    this.type = type;
  }
}

class Piece {
  constructor([[lv, lt], [tv, tt], [bv, bt], [rv, rt]]) {
    this.top = new Edge(tv, tt);
    this.bottom = new Edge(bv, bt);
    this.right = new Edge(rv, rt);
    this.left = new Edge(lv, lt);
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
      
      for (let i = 0; i < this.pieces.length; i++) {
        let curr = this.pieces[i];
        if (this._match(curr.left, this.lastPlaced.right) === true) {
          this._placePiece(curr, i);
          break;
        }
      }
      if (this.lastPlaced.right.type === 'flat') {
        let topP = prevRow[0];
        for (let i = 0; i < this.pieces.length; i++) {
          let curr = this.pieces[i];
          if (this._match(curr.top, topP.bottom) === true) {
            this.board.push([]);
            this._placePiece(curr, i);
            break;
          }
        }
      }
    }
    return this.board;
  }

}