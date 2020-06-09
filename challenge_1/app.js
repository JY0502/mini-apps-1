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
const Row = {'x1': 0, 'x2': 0, 'x3': 0, 'o1': 0, 'o2': 0, 'o3': 0};
const Col = {'x1': 0, 'x2': 0, 'x3': 0, 'o1': 0, 'o2': 0, 'o3': 0};
const Diag = {'xfor': 0, 'xback': 0, 'ofor': 0, 'oback': 0};
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
  for (let key in Row) {Row[key] = 0;};
  for (let key in Col) {Col[key] = 0;};
  for (let key in Diag) {Diag[key] = 0;};
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
    if (document.getElementById(id).innerHTML === 'Not taken') {
      document.getElementById(id).innerHTML = whoseTurn.toUpperCase();
      document.getElementById(whoseTurnNow).innerHTML = `${whoseTurn.toUpperCase()}'s turn`;
      Row[whoseTurn + id[0]]++;
      Col[whoseTurn + id[1]]++;
      if(id[0] === id[1]) {
        Diag[whoseTurn + 'for']++;
      }
      if (Number(id[0]) + Number(id[1]) === 4) {
        Diag[whoseTurn + 'back']++;
      }
      if (Row[whoseTurn + id[0]] === 3 || Col[whoseTurn + id[1]] === 3 || Diag[whoseTurn + 'for'] === 3 || Diag[whoseTurn + 'back'] === 3) {
        gameOn = false;
        document.getElementById(whoseTurnNow).innerHTML = "Game Over";
        document.getElementById(whoWon).innerHTML = `Congratulations ${whoseTurn.toUpperCase()} wins!`;
        if (whoseTurn === 'x') {
          xScore++;
        } else {
          oScore++;
        }
        document.getElementById(whoseTurn + 'Score').innerHTML = `${whoseTurn.toUpperCase()} : ${xScore}`;
      }
    }
    takenSpots.push(id);
    if (takenSpots.length === 9) {
      gameOn = false;
      document.getElementById(whoWon).innerHTML = "Tie Game";
      document.getElementById(whoseTurnNow).innerHTML = "Game Over";
    }
  }
  if (whoseTurn === 'x') {
    whoseTurn = 'o';
  } else {
    whoseTurn = 'x';
  }
}
