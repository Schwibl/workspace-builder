# How to git (workspace designer)

Mandatory for every change that lands in the repo. This file is the *habit*: branch, commit, and open a PR. Coding standards live elsewhere.

## When to open

- Before starting work that will produce commits
- Before writing a commit message
- When work is done and tested and ready to land on `main`

## Feature branches

Always work on a **feature branch**. Do not commit directly to `main`.

1. Start from up-to-date `main`
2. Create a descriptive feature branch for the change
3. Push the branch and open a PR when the work is ready

## Commit messages

Every commit message must follow this pattern:

```text
[feature] <Action verb in past tense> <commit work done>
```

Rules:

- `[feature]` is a short bracketed tag for the area or feature (snake_case or kebab-case is fine)
- The verb is **past tense** (Implemented, Added, Fixed, Made, …)
- The rest names what landed in that commit — concrete, not vague

Correct example:

```text
[agents] Added the Blocky and DNBH agent pointers
```

More valid shapes:

```text
[studio] Kept category labels inside the picker
[checkout] Returned a rental request id
```

Do **not** use vague messages (`update`, `wip`, `fix`, `changes`) or present/future tense (`Adding…`, `Will fix…`).

## Pull requests

When the work is **done and tested**, create a pull request into `main`.

- Base branch: `main`
- One logical change set per PR when practical
- Do not claim done until the PR exists (or the change summary records why a PR was skipped)

## Merge into main

Always **squash merge** into `main` (GitHub: “Squash and merge”).

Why: a squash lands one commit on `main` with a single parent. The history graph stays linear — it does **not** show a side branch / merge diamond. A normal merge commit (`Merge pull request #N…`) keeps two parents and shows that deviation; do not use it for `main`.

Also fine for linear history, but not the default here: **rebase and merge** (keeps every feature-branch commit, still no merge diamond). Prefer squash unless the PR intentionally needs multiple commits preserved on `main`.

When squashing, set the squash commit message to the same pattern:

```text
[feature] <Action verb in past tense> <commit work done>
```

## Done gate

Do not claim a change set done until:

1. It lives on a feature branch (not committed only on local `main`)
2. Commits match `[feature] <Past-tense verb> <work done>`
3. A PR into `main` is open (or already merged)
