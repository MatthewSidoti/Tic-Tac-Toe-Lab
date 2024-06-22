
const board = ["", "", "", "", "", "", "", "", ""];
let turn = ' ';
let winner = false;
let tie = false;


const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('message');

console.log(squareEls);
console.log(messageEl);


function init() {
  console.log('Initializing game...');
  winner = false;
  tie = false;
  turn = 'X';
  board.fill('');
  render();
}


init();


function render() {
  updateBoard();
  messageEl.textContent = updateMessage(winner, tie);
}

function updateBoard() {
  board.forEach((value, index) => {
    squareEls[index].textContent = value;
    squareEls[index].classList.remove('winner');
    
    if (value === 'X' || value === 'O') {
      squareEls[index].classList.add(value === 'X' ? 'playerX' : 'playerO');
    } else {
      squareEls[index].classList.remove('playerX', 'playerO');
    }
  });
}

function updateMessage(winner, tie) {
  if (!winner && !tie) {
    return `It is currently the turn of Player ${turn}.`;
  } else if (!winner && tie) {
    return "It's a tie! The game is over.";
  } else {
    return `Player ${turn === 'X' ? 'O' : 'X'} wins! The game is over.`;
  }
}


const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], 
  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
  [0, 4, 8], [2, 4, 6]             
];


function handleClick(event) {
  const index = Array.from(squareEls).indexOf(event.target);
  if (board[index] === '' && !winner) {
    placePiece(index);
    checkForWinner();
    checkForTie();
    turn = turn === 'X' ? 'O' : 'X';
    render();
  }
}

function placePiece(index) {
  if (board[index] === '') {
    board[index] = turn;
    console.log(board);
    render();
  }
}

function checkForWinner() {
  winningCombos.forEach(combo => {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winner = true;
      [a, b, c].forEach(index => squareEls[index].classList.add('winner'));
    }
  });
}

function checkForTie() {
  if (board.every(square => square !== '') && !winner) {
    tie = true;
  }
}


squareEls.forEach(squareEl => {
  squareEl.addEventListener('click', handleClick);
});