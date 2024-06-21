//1) Define the required variables used to track the state of the game.
const board =["", "", ""
  "", "", "",
  "", "". "",
]
const turn = ' '
const winner = ;
const tie = ;
//2) Store cached element references.
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('message');

console.log(squareEls)
console.log(messageEl)
//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.
function init() {
  console.log('Initializing game...');
  
 
  board = ['', '', '', '', '', '', '', '', ''];

  turn = 'X';
  winner = false;
  tie = false;

 
  render();
}

// d. Call init function when app loads
init();

//4) The state of the game should be rendered to the user.
function render () {

}

function updateBoard() {
  const squareEls = document.querySelectorAll('.sqr');
  
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
      return `It is currently the turn of Player ${turn}.` 
  } else if (!winner && tie) {
      return "It's a tie! The game is over.";
  } else {
      return `Player ${turn} wins! The game is over.`;
  }
}
//5) Define the required constants.
const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];


//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
