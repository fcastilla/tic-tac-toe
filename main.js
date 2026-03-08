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

const SCORE_STORAGE_KEY = 'ttt_scores';
const DEFAULT_SCORES = {
  x: 0,
  o: 0,
  draws: 0,
};

const board = Array(9).fill('');
let currentPlayer = 'X';
let gameOver = false;
let winningLine = null;
let winner = null;
let isDraw = false;
let resultRecorded = false;
let scores = loadScores();

app.innerHTML = `
  <main class="game">
    <h1>Tic Tac Toe</h1>

    <section class="score-panel" aria-label="Scoreboard">
      <p>X Wins: <span id="score-x"></span></p>
      <p>O Wins: <span id="score-o"></span></p>
      <p>Draws: <span id="score-draws"></span></p>
    </section>

    <p id="turn-indicator" aria-live="polite"></p>
    <div class="board" role="grid" aria-label="Tic Tac Toe board"></div>
  </main>
`;

const turnIndicator = document.querySelector('#turn-indicator');
const boardEl = document.querySelector('.board');
const scoreXEl = document.querySelector('#score-x');
const scoreOEl = document.querySelector('#score-o');
const scoreDrawsEl = document.querySelector('#score-draws');

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

    if (gameOver) {
      recordResult();
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

function recordResult() {
  if (resultRecorded) {
    return;
  }

  if (winner === 'X') {
    scores.x += 1;
  } else if (winner === 'O') {
    scores.o += 1;
  } else if (isDraw) {
    scores.draws += 1;
  }

  saveScores(scores);
  resultRecorded = true;
}

function loadScores() {
  try {
    const storedValue = localStorage.getItem(SCORE_STORAGE_KEY);

    if (!storedValue) {
      return { ...DEFAULT_SCORES };
    }

    const parsed = JSON.parse(storedValue);

    if (
      typeof parsed !== 'object' ||
      parsed === null ||
      typeof parsed.x !== 'number' ||
      typeof parsed.o !== 'number' ||
      typeof parsed.draws !== 'number'
    ) {
      return { ...DEFAULT_SCORES };
    }

    return {
      x: parsed.x,
      o: parsed.o,
      draws: parsed.draws,
    };
  } catch {
    return { ...DEFAULT_SCORES };
  }
}

function saveScores(nextScores) {
  try {
    localStorage.setItem(SCORE_STORAGE_KEY, JSON.stringify(nextScores));
  } catch {
    // Ignore localStorage write failures; game remains playable.
  }
}

function renderScores() {
  scoreXEl.textContent = String(scores.x);
  scoreOEl.textContent = String(scores.o);
  scoreDrawsEl.textContent = String(scores.draws);
}

function render() {
  const cellButtons = boardEl.querySelectorAll('.cell');

  cellButtons.forEach((button, index) => {
    button.textContent = board[index];
    button.disabled = board[index] !== '' || gameOver;
    button.classList.toggle('winning', Boolean(winningLine && winningLine.includes(index)));
  });

  renderScores();

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
