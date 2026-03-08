# GIT WORKFLOW

## Branch Strategy
- `main` — stable, deployable code only
- `dev` — integration branch for completed tasks
- `task/<task-id>-<short-title>` — per-task branches (e.g. `task/M2-T1-scaffold`)

## Flow
1. Lead releases a task
2. Dev creates a task branch from `dev`
3. Dev implements, commits, pushes branch
4. Review agent reviews the branch
5. On approval, branch is merged into `dev`
6. Test agent validates on `dev`
7. On milestone completion, lead merges `dev` → `main`

## Commit Style
- Short imperative subject line: `Add win detection logic`
- Reference task ID in commit body when relevant

## Notes
- Remote repo creation is deferred to M3
- Local git repo should be initialized at project start (M2-T1)
- Do not push to remote until human approves remote repo creation
