"use strict"

class Sudoku {
  constructor(answer) { 
    this.answer = answer;
    this.board = this.makeBoard();
    this.squaresFilled = 0;
    this.win = false;
    this.answersLeft = 3;
  }

  makeBoard() {
    //for 9 x 9 vals, make single array
        //fill with nulls
        //[null, null, null, null, null, null, ...]
  }

  _convertTo1DCoords(coords) {
    let [x, y] = coords;
    return y * 9 + x;
  }

  revealAnswer(coords) {
    let answer = this.answer[this._convertTo1DCoords(coords)];
    this.fillSquare(answer, coords);
  }

  fillSquare(val, coords) { /* (7, [2, 3])*/
    let square = this.board[this._convertTo1DCoords(coords)];
    if (val === undefined) {
      if (this.answersLeft === 0) throw new Error('Cheater!');
      this.answersLeft--;
    }
    if (square === null) this.squaresFilled++;
    this.board[this._convertTo1DCoords(coords)] = val;
    this.checkBoardFull();
  } 

  checkBoardFull() {
    if (this.squaresFilled === 81) {
      this.winner = this.checkForWin();
      this.endGame();
    }
  }

  // checkForWin() {
  //   //check all rows 1- 9
  //   //for loop -> row
  //     //init nums = Set(1 - 9)
  //     //for loop -> col
  //       //currVal = board[y][x];
  //       //if (!nums.has(currVal)) return false;
  //       //remove currVal from nums
  //     //if the nums Set still has vals -> return false;
    
  //     //check all cols 1 - 9
  //     //for loop -> col
  //     //init nums = Set(1 - 9)
  //       //for loop -> row
  //         //currVal = board[y][x];
  //         //if (!nums.has(currVal)) return false;
  //         //remove currVal from nums
  //     //if the nums Set still has vals -> return false;

  //     //check subgrids
  //     //loop for y -> increment by 3, until length of matrix - 3
  //       //loop for x - increment by 3, until length of matrix[0] - 3
  //         //for loop - col init to be equal row# until col reaches 3
        
  // }

  checkForWin() {
    //iterate over this.board from 0, increment by 9 - rows
      //make a Set from 1-9;
      //start i from 0, increment by 1 until 8
        //if currNum(this.board[rows * 9 + i]) not in set, return false
        //remove currNum from set
      //if set still has vals, return false
    
    //iterate over this.board from 0 - 8 - cols
      //make a Set from 1-9
      //start i from 0, increment by 1 till 8
        //if currNum(this.board[i * 9 + col]) not in set, return false
         //remove currNum from set
      //if set still has vals, return false

    //iterate over board from 0 - 8, increment by 3 - startRow
      //iterate over board from (0, 0) (0, 1), (0, 2) -> (1, 0) (1, 1) (1, 2)
      //
  }

  endGame() {
    if (this.win === true) console.log('You win!');
    else console.log('Try again!');
    
  }

}