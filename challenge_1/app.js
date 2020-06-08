// the first move always starts with player X
// the app detects a win or tie and displays an appropriate message
// a button resets the game for a new round of gameplay

// console.log('Hello App')
// console.log(document.getElementById('1'))

let whoseTurn = 'x';

const replaceSpot = (id) => {
  console.log('hello click');
  console.log(id);
  const whoseTurnNow = 'whoseTurnNow';
  if (whoseTurn === 'x' && document.getElementById(id).innerHTML === 'Not taken') {
    document.getElementById(id).innerHTML = 'X';
    document.getElementById(whoseTurnNow).innerHTML = "O's turn";
    whoseTurn = 'o';
  }
  if (whoseTurn === 'o' && document.getElementById(id).innerHTML === 'Not taken') {
    document.getElementById(id).innerHTML = 'O';
    document.getElementById(whoseTurnNow).innerHTML = "X's turn";
    whoseTurn = 'x';
  }
}