// the first move always starts with player X
// the app detects a win or tie and displays an appropriate message
// a button resets the game for a new round of gameplay

// console.log('Hello App')
// console.log(document.getElementById('1'))

let whoseTurn = 'X';
let gameOn = true;
const takenSpots = [];
const xRow = {'1': 0, '2': 0, '3': 0};
const xCol = {'1': 0, '2': 0, '3': 0};
const xDiag = {'for': 0, 'back': 0};
const oRow = {'1': 0, '2': 0, '3': 0};
const oCol = {'1': 0, '2': 0, '3': 0};
const oDiag = {'for': 0, 'back': 0};

const replaceSpot = (id) => {
  // console.log('hello click');
  // console.log(id);
  const whoseTurnNow = 'whoseTurnNow';
  const whoWon = 'whoWon';
  if (gameOn) {
    if (whoseTurn === 'X' && document.getElementById(id).innerHTML === 'Not taken') {
      document.getElementById(id).innerHTML = whoseTurn;
      document.getElementById(whoseTurnNow).innerHTML = `${whoseTurn}'s turn`;
      whoseTurn = 'O';
      xRow[id[0]]++;
      xCol[id[1]]++;
      if(id[0] === id[1]) {
        xDiag.for++;
      }
      if (Number(id[0]) + Number(id[1]) === 4) {
        xDiag.back++;
      }
      if (xRow[id[0]] === 3 || xCol[id[1]] === 3 || xDiag.for === 3 || xDiag.back === 3) {
        gameOn = false;
        document.getElementById(whoseTurnNow).innerHTML = "Game Over";
        document.getElementById(whoWon).innerHTML = "Congratulations X wins!";
      }
    }
    if (whoseTurn === 'O' && document.getElementById(id).innerHTML === 'Not taken') {
      document.getElementById(id).innerHTML = whoseTurn;
      document.getElementById(whoseTurnNow).innerHTML = `${whoseTurn}'s turn`;
      whoseTurn = 'X';
      oRow[id[0]]++;
      oCol[id[1]]++;
      if(id[0] === id[1]) {
        oDiag.for++;
      }
      if (Number(id[0]) + Number(id[1]) === 4) {
        oDiag.back++;
      }
      if (oRow[id[0]] === 3 || oCol[id[1]] === 3 || oDiag.for === 3 || oDiag.back === 3) {
        gameOn = false;
        document.getElementById(whoseTurnNow).innerHTML = "Game Over";
        document.getElementById(whoWon).innerHTML = "Congratulations O wins!";
      }
    }
    takenSpots.push(id);
    if (takenSpots.length === 9) {
      gameOn = false;
      document.getElementById(whoWon).innerHTML = "Tie Game";
      document.getElementById(whoseTurnNow).innerHTML = "Game Over";
    }
  }
}

