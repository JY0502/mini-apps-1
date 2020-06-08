// the first move always starts with player X
// the app detects a win or tie and displays an appropriate message
// a button resets the game for a new round of gameplay

// console.log('Hello App')
// console.log(document.getElementById('1'))

const replaceSpot = (id) => {
  console.log('hello click');
  console.log(id);
  document.getElementById(id).innerHTML = 'X';
}