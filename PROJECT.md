# PROJECT

## Purpose
This project was created from the `software-dev-team` template for a multi-agent delivery workflow coordinated by a lead agent.

## Agent Roles
- lead
- dev
- review
- test
- docs

## Core Rules
- only the lead is human-facing
- only one active task exists per project at a time
- workers communicate through workflow files
- workers do not advance milestones on their own
- lead is the authority for task release, milestone progression, and status communication
- docs is milestone-level by default and does not block the next development task unless explicitly requested by lead

## Approval Gates
The workflow must stop and wait for explicit human approval at:
- plan approval
- major scope changes
- major architecture changes
- milestone completion
- release readiness when risk is non-trivial
