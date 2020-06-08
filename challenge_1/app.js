// the first move always starts with player X
// the app detects a win or tie and displays an appropriate message
// a button resets the game for a new round of gameplay

// console.log('Hello App')
// console.log(document.getElementById('1'))
let originalHTML = document.getElementById('gameTable').innerHTML;
let takeTurn = true;
let whoseTurn = 'x';
let gameOn = true;
let takenSpots = [];
let xRow = {'1': 0, '2': 0, '3': 0};
let xCol = {'1': 0, '2': 0, '3': 0};
let xDiag = {'for': 0, 'back': 0};
let oRow = {'1': 0, '2': 0, '3': 0};
let oCol = {'1': 0, '2': 0, '3': 0};
let oDiag = {'for': 0, 'back': 0};
let xScore = 0;
let oScore = 0;
document.getElementById('xScore').innerHTML = `X : ${xScore}`;
document.getElementById('oScore').innerHTML = `O : ${oScore}`;

const restart = () => {
  if (takeTurn) {
    whoseTurn = 'o';
    takeTurn = false;
  } else {
    whoseTurn = 'x';
    takeTurn = true;
  }
  gameOn = true;
  takenSpots = [];
  xRow = {'1': 0, '2': 0, '3': 0};
  xCol = {'1': 0, '2': 0, '3': 0};
  xDiag = {'for': 0, 'back': 0};
  oRow = {'1': 0, '2': 0, '3': 0};
  oCol = {'1': 0, '2': 0, '3': 0};
  oDiag = {'for': 0, 'back': 0};
  document.getElementById('whoseTurnNow').innerHTML = `New Game Start, ${whoseTurn.toUpperCase()}'s turn`;
  document.getElementById('gameTable').innerHTML = originalHTML;
  document.getElementById('whoWon').innerHTML = '';
}

const replaceSpot = (id) => {
  // console.log('hello click');
  // console.log(id);
  const whoseTurnNow = 'whoseTurnNow';
  const whoWon = 'whoWon';
  if (gameOn) {
    if (whoseTurn === 'x' && document.getElementById(id).innerHTML === 'Not taken') {
      document.getElementById(id).innerHTML = whoseTurn.toUpperCase();
      document.getElementById(whoseTurnNow).innerHTML = `${whoseTurn.toUpperCase()}'s turn`;
      whoseTurn = 'o';
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
        xScore++;
        document.getElementById('xScore').innerHTML = `X : ${xScore}`;
      }
    }
    if (whoseTurn === 'o' && document.getElementById(id).innerHTML === 'Not taken') {
      document.getElementById(id).innerHTML = whoseTurn.toUpperCase();
      document.getElementById(whoseTurnNow).innerHTML = `${whoseTurn.toUpperCase()}'s turn`;
      whoseTurn = 'x';
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
        oScore++;
        document.getElementById('oScore').innerHTML = `O : ${oScore}`;
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

