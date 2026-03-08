# RELEASE NOTES

## v1.0.0 — 2026-03-08

### Summary
Initial MVP release of the Tic Tac Toe web app built with Vanilla JS + Vite.

### Features
- 3×3 interactive board with alternating turns (X/O)
- Win detection across all 8 lines and draw detection
- Game-over board lock and winning-cell highlight
- Score tracking for X wins, O wins, and draws
- Score persistence in `localStorage` (`ttt_scores`)
- `New Round` control (resets board, keeps scores)
- `Reset Scores` control (clears persisted scores and display)
- Responsive layout for mobile and desktop viewports
- Deploy configuration for GitHub Pages and Netlify
- GitHub Actions workflow for Pages deploy on push to `main`

### Known Limitations
- Local two-player only (no AI / no online multiplayer)
- Fixed player names (Player X / Player O)
- No round history or analytics
- ARIA grid semantics are minimal and can be improved in a follow-up accessibility pass
