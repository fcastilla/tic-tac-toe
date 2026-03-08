const app = document.querySelector('#app');

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const board = Array(9).fill('');
let currentPlayer = 'X';
let gameOver = false;
let winningLine = null;
let winner = null;
let isDraw = false;

app.innerHTML = `
  <main class="game">
    <h1>Tic Tac Toe</h1>
    <p id="turn-indicator" aria-live="polite"></p>
    <div class="board" role="grid" aria-label="Tic Tac Toe board"></div>
  </main>
`;

const turnIndicator = document.querySelector('#turn-indicator');
const boardEl = document.querySelector('.board');

for (let index = 0; index < board.length; index += 1) {
  const cellButton = document.createElement('button');
  cellButton.type = 'button';
  cellButton.className = 'cell';
  cellButton.dataset.index = String(index);
  cellButton.setAttribute('role', 'gridcell');

  cellButton.addEventListener('click', () => {
    if (board[index] !== '' || gameOver) {
      return;
    }

    board[index] = currentPlayer;

    winningLine = getWinningLine(board);

    if (winningLine) {
      winner = currentPlayer;
      gameOver = true;
    } else if (board.every((cell) => cell !== '')) {
      isDraw = true;
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    render();
  });

  boardEl.appendChild(cellButton);
}

function getWinningLine(currentBoard) {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line;

    if (
      currentBoard[a] !== '' &&
      currentBoard[a] === currentBoard[b] &&
      currentBoard[a] === currentBoard[c]
    ) {
      return line;
    }
  }

  return null;
}

function render() {
  const cellButtons = boardEl.querySelectorAll('.cell');

  cellButtons.forEach((button, index) => {
    button.textContent = board[index];
    button.disabled = board[index] !== '' || gameOver;
    button.classList.toggle('winning', Boolean(winningLine && winningLine.includes(index)));
  });

  if (winner) {
    turnIndicator.textContent = `Player ${winner} wins!`;
    return;
  }

  if (isDraw) {
    turnIndicator.textContent = "It's a draw!";
    return;
  }

  turnIndicator.textContent = `Player ${currentPlayer}'s turn`;
}

render();
