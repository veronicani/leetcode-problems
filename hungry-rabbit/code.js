"use strict"

function hungryRabbit(field) {
  const fieldH = field.length - 1;
  const fieldL = field[fieldH].length - 1;
  let [y, x] = findStart(field);
  let count = field[y][x];
  field[y][x] = 0;

  while (!(y <= 0 || y >= fieldH || x <= 0 || x >= fieldL)) {
    let [y2, x2] = findNextSpot(y, x, field);
    [y, x] = [y2, x2];
    count += field[y][x];
    field[y][x] = 0;
  }

  return count;
}

function findNextSpot(y, x, field) {
  let max = 0;
  let yFinal = y;
  let xFinal = x;
  for (let yd = y - 1; yd <= y + 1; yd++) {
    if (yd === y) continue;
    if (field[yd][x] > max) {
      max = field[yd][x];
      yFinal = yd;
    }
  }
  for (let xd = x - 1; xd <= x + 1; xd++) {
    if (xd === x) continue;
    if (field[y][xd] > max) {
      max = field[y][xd];
      xFinal = xd;
    }
  }
  return [yFinal, xFinal];
}

function findStart(field) {
  let yOptions = new Set(
    [Math.floor(field.length / 2), Math.floor(field.length / 2)]
  ); 
  let xOptions = new Set(
    [Math.floor(field[0].length / 2), Math.floor(field[0].length / 2)]
  ); 
  
  let max = 0;
  let [y, x] = [0, 0];

  for (const yOp of yOptions) {
    for (const xOp of xOptions) {
      if (field[yOp][xOp] > max) {
        max = field[yOp][xOp];
        [y, x] = [yOp, xOp];
      }
    }
  }
  return [y, x];
}