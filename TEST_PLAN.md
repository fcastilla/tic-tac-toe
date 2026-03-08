# TEST PLAN

## Scope
Functional validation of the Tic Tac Toe web app against project-level acceptance criteria and per-task acceptance criteria.

## Test Approach
Manual browser testing for MVP. No automated test framework in scope for M2. Automated tests may be added post-MVP.

## Test Environment
- Browser: Chrome (latest), Firefox (latest)
- Viewport sizes: 1280×800 (desktop), 375×667 (mobile)
- Dev server: `npm run dev` (Vite)
- Production build: `npm run build` → serve `dist/`

## Test Cases

### TC-1: Board Rendering
- Board displays 9 empty cells in a 3×3 grid
- All cells are clickable on game start

### TC-2: Turn Alternation
- First click marks cell as X
- Second click marks a different cell as O
- Turn indicator updates after each move

### TC-3: Occupied Cell Protection
- Clicking an already-marked cell does nothing
- Turn does not change on invalid click

### TC-4: Win Detection
- Complete a row → win announced, board locks
- Complete a column → win announced, board locks
- Complete a diagonal → win announced, board locks
- Winning cells are visually highlighted

### TC-5: Draw Detection
- Fill all 9 cells with no winner → draw announced, board locks

### TC-6: Score Tracking
- X win → X score increments
- O win → O score increments
- Draw → Draws score increments
- Scores display correctly after each round

### TC-7: localStorage Persistence
- Play a round, note scores, reload page → scores unchanged
- Scores survive hard reload (Ctrl+Shift+R)

### TC-8: New Round
- Click "New Round" → board clears, scores unchanged, turn resets to X

### TC-9: Reset Scores
- Click "Reset Scores" → all scores reset to 0, localStorage cleared

### TC-10: Responsive Layout
- At 375px width: board and controls are fully visible and usable, no horizontal scroll
- At 1280px width: layout is centered and readable

### TC-11: Production Build
- `npm run build` completes with no errors
- `dist/` folder contains index.html and assets
- App functions correctly when served from dist/

## Pass Criteria
All TC-1 through TC-11 must pass before M2 is marked complete.
TC-10 and TC-11 are required for M3 completion.
