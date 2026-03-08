# ARCHITECTURE

## Overview
Single-page static web app. No backend. All game logic runs in the browser. Vite handles dev server and production build. Deployed as a static bundle to GitHub Pages or Netlify.

## Chosen Stack
- Frontend: Vanilla HTML5 + CSS3 + ES6 JavaScript (no framework)
- Backend: None
- Database: None (localStorage for score persistence)
- Auth: None
- Storage: Browser localStorage
- Deployment: Static host — GitHub Pages or Netlify
- CI/CD: Optional (Vite build step; can be triggered manually or via GitHub Actions)

## Project Structure
```
tic-tac-toe/
├── index.html          # App shell and board markup
├── style.css           # All styles
├── main.js             # Game logic entry point
├── package.json        # Vite dev dependency only
├── vite.config.js      # Minimal Vite config (base path for GH Pages if needed)
└── .gitignore
```

## Major Components

### Board
- 3×3 grid rendered as 9 clickable cells
- Cells hold state: empty | X | O
- Visual feedback on hover (empty cells only)
- Winning cells highlighted on game end

### Game Logic (main.js)
- Turn management: alternates X → O → X
- Move validation: reject clicks on occupied cells or after game over
- Win detection: check all 8 winning lines after each move
- Draw detection: all cells filled, no winner
- Game state: `board[]`, `currentPlayer`, `gameOver`, `scores{}`

### Score Tracker
- Tracks `{ x: number, o: number, draws: number }`
- Reads from localStorage on page load
- Writes to localStorage after each round ends
- Displayed in a score panel above or below the board

### UI Controls
- Turn indicator: "Player X's turn" / "Player O's turn" / result message
- "New Round" button: resets board, increments scores, keeps localStorage
- "Reset Scores" button: clears localStorage, resets score display

## Data Model Notes
- localStorage key: `ttt_scores`
- Value: JSON string `{ "x": 0, "o": 0, "draws": 0 }`
- Board state is in-memory only (not persisted — intentional)

## API / Interface Notes
- No external APIs
- No inter-component messaging beyond direct DOM manipulation and JS function calls

## Security Notes
- No user input beyond cell clicks and button presses
- localStorage data is not sensitive; no sanitization concerns
- No external scripts or CDN dependencies in production build

## Deployment Notes
- `npm run build` → `dist/` folder is the deployable artifact
- For GitHub Pages: set `base` in `vite.config.js` to the repo name (e.g. `/tic-tac-toe/`)
- For Netlify: drag-and-drop `dist/` or connect repo with build command `npm run build` and publish dir `dist`

## Risks
- R-1 (Low): Vite base path misconfiguration breaks asset loading on GitHub Pages — mitigated by explicit `vite.config.js` base setting
- R-2 (Low): localStorage unavailable in some private/incognito modes — scores silently fail to persist; game still functions

## Deferred Decisions
- CI/CD pipeline (GitHub Actions) — deferred to post-MVP
- Custom player names — deferred to post-MVP
- Deploy target confirmation (GitHub Pages vs Netlify) — either works; no code change needed
