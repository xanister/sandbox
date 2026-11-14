# Sandbox fixture: architecture

## Purpose
This repository is a fixture that Vector's tests change on purpose.

## Invariants
- Test work adds or edits plain note files under `notes/`, one file per ticket.
- No change touches `src/`, `package.json` or `.github/`.
