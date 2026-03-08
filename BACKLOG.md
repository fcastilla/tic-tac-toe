# BACKLOG

## Status Legend
- todo
- released
- in_progress
- review
- test
- docs
- done
- blocked

## Milestones

### M1 — Discovery and Planning
Goal: clarify requirements, propose architecture, define initial backlog, and obtain plan approval.

| ID | Title | Status | Depends On | Acceptance Criteria | Notes |
|---|---|---|---|---|---|
| M1-T1 | Clarify requirements | done | | Requirements ambiguities are resolved or explicitly recorded as assumptions. | Completed via human Q&A |
| M1-T2 | Propose architecture | done | M1-T1 | Architecture is documented at a level sufficient for MVP execution. | Vanilla JS + Vite approved |
| M1-T3 | Create implementation plan | done | M1-T2 | Initial milestones and tasks are defined. | This backlog |
| M1-T4 | Await human approval | done | M1-T3 | Human approves or requests changes to the plan. | Completed |

### M2 — Core Game (MVP)
Goal: implement the core game — board, turn logic, win/draw detection, score tracking, and Vite setup.

| ID | Title | Status | Depends On | Acceptance Criteria | Notes |
|---|---|---|---|---|---|
| M2-T1 | Project scaffold and Vite setup | done | | `npm run dev` serves the app; `npm run build` produces a dist/ bundle with no errors. | index.html, style.css, main.js, package.json, vite.config.js |
| M2-T2 | Board rendering and cell interaction | done | M2-T1 | 3×3 board renders; clicking a cell marks it X or O; occupied cells are unclickable. | |
| M2-T3 | Turn management and win/draw detection | done | M2-T2 | Players alternate turns; win is detected and announced; draw is detected and announced; game locks after result. | All 8 win lines checked |
| M2-T4 | Score tracking with localStorage | done | M2-T3 | Scores increment correctly after each round; scores survive page reload; Reset Scores clears them. | localStorage key: ttt_scores |
| M2-T5 | New Round and Reset Scores controls | done | M2-T3 | New Round resets board without clearing scores; Reset Scores clears scores and resets display. | |

### M3 — Polish and Deploy
Goal: responsive layout, deploy config, and release readiness.

| ID | Title | Status | Depends On | Acceptance Criteria | Notes |
|---|---|---|---|---|---|
| M3-T1 | Responsive layout and minimal styling | done | M2-T5 | Game is playable on viewports ≥ 320px wide; layout does not break on desktop or mobile. | |
| M3-T2 | Deploy configuration | done | M3-T1 | vite.config.js base path set; deploy instructions documented; dist/ deploys successfully to static host. | GitHub Pages or Netlify |
| M3-T3 | Final validation and release notes | done | M3-T2 | All project-level acceptance criteria pass; RELEASE_NOTES.md written. | Release complete |
