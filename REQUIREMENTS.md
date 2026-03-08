# REQUIREMENTS

## Project Name
Tic Tac Toe

## Summary
A browser-based two-player local Tic Tac Toe game. Players take turns on the same device. The app tracks scores across rounds using localStorage and is deployable as a static site.

## Problem Statement
A simple, self-contained web game that two people can play on the same device without any backend, accounts, or network connectivity.

## Goals
- Playable two-player Tic Tac Toe in the browser
- Score persistence across rounds via localStorage
- Deployable to a static host (GitHub Pages or Netlify)
- Minimal, functional UI

## Non-Goals
- AI / single-player mode
- Online multiplayer / networking
- User accounts or authentication
- Mobile-native app
- Animations or visual polish beyond functional clarity

## Users / Actors
- Primary users: Two human players sharing a single device/browser

## MVP Scope
- 3×3 board
- Two-player local turn-based play (Player X and Player O)
- Win detection (rows, columns, diagonals)
- Draw detection
- Score tracking (wins per player + draws) persisted in localStorage
- Round reset without clearing scores
- Full score reset option
- Served via Vite dev server; production build deployable to static host

## Functional Requirements
- FR-1: Display a 3×3 interactive game board
- FR-2: Players alternate turns starting with Player X
- FR-3: Clicking a cell marks it with the current player's symbol (X or O)
- FR-4: Occupied cells cannot be clicked again
- FR-5: Detect and announce a win when a player completes a row, column, or diagonal
- FR-6: Detect and announce a draw when all cells are filled with no winner
- FR-7: Display current turn indicator
- FR-8: Display score (X wins, O wins, Draws)
- FR-9: Scores persist across page reloads via localStorage
- FR-10: "New Round" button resets the board without clearing scores
- FR-11: "Reset Scores" button clears localStorage scores and resets display
- FR-12: Production build output is a static bundle deployable to GitHub Pages or Netlify

## Non-Functional Requirements
- NFR-1: No runtime dependencies beyond Vite (dev/build only)
- NFR-2: Works in modern browsers (Chrome, Firefox, Safari, Edge — latest 2 versions)
- NFR-3: Responsive layout — playable on desktop and mobile screen sizes
- NFR-4: Page load under 1s on a standard connection

## Constraints
- Vanilla HTML, CSS, JavaScript only (no React, Vue, or other UI frameworks)
- Vite for dev server and build tooling only
- No backend

## Project-Level Acceptance Criteria
- AC-1: Two players can complete a full game from start to win/draw
- AC-2: Scores increment correctly and survive a page reload
- AC-3: Board resets cleanly on "New Round" without losing scores
- AC-4: `vite build` produces a deployable static bundle with no errors
- AC-5: Game is playable on a mobile-sized viewport (≥ 320px wide)

## Assumptions
- Deploy target is GitHub Pages or Netlify (static hosting, no server-side rendering needed)
- No custom domain required for MVP
- Player names are fixed as "Player X" and "Player O" (no custom naming in MVP)

## Open Questions
- None — all clarifications resolved before project creation
