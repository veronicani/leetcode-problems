Q.
how many players? 2
which moves?
- createBoard
- playMove('X', coords)
  - if same player, reject
  - 
- checkForWin(curr)
  - see if there is a winning combo for the curr coordinate
- if winner, end game with winner
- if board full, end game w/o winner
- otherwise, continue
