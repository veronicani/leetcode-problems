"use strict"

H   H EEEEE L     L      OOO       W   W  OOO  RRRR  L     DDDD  !!
H   H E     L     L     O   O      W W W O   O R   R L     D   D !! 
HHHHH EEEEE L     L     O   O      W W W O   O RRRR  L     D   D !! 
H   H E     L     L     O   O  ,,   W W  O   O R   R L     D   D    
H   H EEEEE LLLLL LLLLL  OOO  ,,    W W   OOO  R   R LLLLL DDDD  !!

{'H': [[H, ,  ,H][H, , , H],...], //-> 5
 'L': [[L, ,  , ][L, , ,  ],...],
 ',': [[',', , ][',', ',']],

}

// - find the max height of the art (matrix w/ max length)
//input of 'HELLO, WORLD'

// loop starting from maxheight - decrement
  // loop over each letter in the input string, ignore spaces
    //lookup the letter
    //if the length of the letter matrix is >= to current height
      //loop over subarray @ length of the ltr matrix - currHeight
        //print out each char
    //else find the max length of letter's subarray & print out # spaces according
    //print out a space

const INPUT_TO_GRAPHIC = {};

function asciiPrinter(str) {
  const maxHeight = maxHeightOfGraphic(str);
  
  for (let row = maxHeight; row >= 1; row--) {
    for (let s of str) {
      if (s === ' ') break;
      const graphic = INPUT_TO_GRAPHIC[s];
      if (graphic.length >= row) {
        let idx = graphic.length - row;
        for (char of graphic[idx]) {
          console.log(char);
        }
      } else {
        let maxWidthOfLetter = maxLength(graphic);
        for (let i = 0; i < maxWidthOfLetter; i++) {
          console.log(' ');
        }
      }
    }
  }
}

function maxHeightOfGraphic(str) {
  let max = 0;
  for (s of str) {
    const graphic = INPUT_TO_GRAPHIC[s];
    max = Math.max(graphic.length, max);
  }
  return max;
}

function maxLength(matrix) {
  let max = 0;
  for (m of matrix) {
    max = Math.max(m.length, max);
  }
  return max;
}


