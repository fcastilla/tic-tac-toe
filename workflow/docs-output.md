# DOCS OUTPUT

## Scope
Milestone-level docs review triggered on M3 completion (project release).

## Task / Milestone
M3 complete — tic-tac-toe v1.0.0

## Docs Agent Instructions
Review and improve user-facing documentation for the released project. Specifically:

1. **RELEASE_NOTES.md** — verify it is accurate, complete, and readable. Add the turn indicator (FR-7) as an explicit feature bullet if missing. Ensure known limitations are clearly stated.
2. **README.md** — verify it exists and covers: what the project is, how to run it locally (`npm install` + `npm run dev`), how to build (`npm run build`), and a pointer to DEPLOY.md for deployment. Create or update as needed.
3. **DEPLOY.md** — verify it is accurate. Add a note about the `vite preview` limitation (does not work locally with base path set; use `vite preview --base /` or temporarily revert base path).

## Context
- Project: tic-tac-toe
- Release: v1.0.0 (2026-03-08)
- main branch at: 85c1c1b
- Build: `npm run build` — clean, dist/ produced
- Deploy target: GitHub Pages (base: /tic-tac-toe/) or Netlify
- Known carry-forwards: ARIA grid row wrapper, Vite CJS deprecation warning (cosmetic)

## Documents to Update
- RELEASE_NOTES.md (review/polish)
- README.md (create or update)
- DEPLOY.md (add vite preview caveat)

## Release Note Changes
- Add turn indicator as explicit feature bullet if absent

## Missing Documentation
- README.md may not exist — create if absent
