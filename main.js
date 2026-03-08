const app = document.querySelector('#app');

const board = Array(9).fill('');
let currentPlayer = 'X';

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
    if (board[index] !== '') {
      return;
    }

    board[index] = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    render();
  });

  boardEl.appendChild(cellButton);
}

function render() {
  const cellButtons = boardEl.querySelectorAll('.cell');

  cellButtons.forEach((button, index) => {
    button.textContent = board[index];
    button.disabled = board[index] !== '';
  });

  turnIndicator.textContent = `Player ${currentPlayer}'s turn`;
}

render();
