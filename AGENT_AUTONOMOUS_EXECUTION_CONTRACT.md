# Repository Autonomous Execution Contract V1

Status: CANONICAL AGENT GOVERNANCE

This file defines the default operating model for any autonomous coding agent working in this repository. Repository-specific canonical status, release-gate, roadmap, security, migration, and `NEXT_*` documents remain authoritative for product direction. This contract governs HOW the work is executed and must not silently replace valid project-specific scope.

## 1. Mandatory pre-flight repository consistency gate

Before architecture work, implementation, refactoring, migrations, dependency changes, commits, pushes, PR operations, or CI:

1. identify the GitHub repository, default branch and remote HEAD;
2. `git fetch --all --prune`;
3. inspect local path, branch, HEAD, upstream, staged/unstaged/untracked changes, local-only/remote-only commits, stashes and worktrees;
4. compare local state with the actual upstream/default branch;
5. inspect relevant open/recent branches/PRs when access permits;
6. preserve every valid local-only change before reconciliation;
7. never use destructive reset/clean commands merely to obtain a clean tree;
8. reconcile deliberately and establish the true canonical starting SHA.

If the user's PC/local repository is not actually accessible, state `LOCAL_PC_NOT_ACCESSIBLE`; never pretend it was verified.

Do not start planned project work until `REPO_CONSISTENCY_GATE = PASS` or a precisely documented HUMAN_REQUIRED blocker prevents reconciliation.

## 2. Audit before planning

Treat current repository reality as stronger evidence than stale planning text. Before creating new work:

- audit existing implementation, tests, migrations, docs, CI, runtime contracts and active branches;
- determine what is already complete, partial, obsolete, duplicated, blocked or missing;
- preserve verified work;
- do not recreate functionality merely because an older roadmap says it is missing;
- respect the repository's current canonical next slice unless the audit proves it is obsolete or unsafe.

## 3. Plan mode / megaplan phase

For every major program or multi-slice task, first use the strongest available read-only planning mode (`Plan`, `Megaplan`, or equivalent) to produce a dependency-aware executable plan grounded in the audited repository.

The first planning pass must create or update these repository-local control files (paths may be adapted to an existing project convention):

- `docs/agent/MASTER_EXECUTION_PLAN.md`
- `docs/agent/GAP_LEDGER.md`
- `docs/agent/SLICE_LEDGER.md`
- `docs/agent/CURRENT_STATE.md`

The plan must define concrete slices, dependencies, invariants, affected components, migration/API/runtime impact, tests, real E2E paths, risks, HUMAN_REQUIRED operations and exact completion gates.

Planning is not completion. After the master plan is accepted by the invoking workflow, switch to Agent/Autonomous execution mode. Do not require human approval between ordinary slices.

## 4. Autonomous execution loop

Execute the approved master plan continuously:

`AUDIT CURRENT MAIN -> SELECT NEXT UNBLOCKED SLICE -> EXECUTABLE SLICE PLAN -> IMPLEMENT -> LOCAL TESTS -> REAL RUNTIME -> E2E -> FIX -> RETEST -> EVIDENCE -> MATURE CI -> UPDATE LEDGERS -> NEXT SLICE`

When a slice reaches every completion gate:

1. record exact evidence and resulting SHA;
2. mark it `COMPLETE` in `SLICE_LEDGER`;
3. refresh `CURRENT_STATE` and `GAP_LEDGER`;
4. recompute dependencies;
5. select the next unblocked canonical slice;
6. continue automatically.

Do not stop merely to ask what to do next when the answer can be derived from the plan, repository state, tests, architecture or established engineering practice.

Before each new slice, fetch/inspect current canonical state again so that work merged by another agent is incorporated rather than duplicated.

## 5. HUMAN_REQUIRED is narrow

Interrupt the human only for a genuine external blocker such as:

- unavailable credential/secret/API entitlement;
- wallet or hardware signature that must be performed by the owner;
- owner-only or policy-required approval/merge;
- irreversible production operation requiring explicit authorization;
- unavailable external environment/sandbox that cannot be safely emulated;
- product/legal/commercial decision not derivable from repository truth;
- material architecture conflict where multiple incompatible product decisions are equally valid.

A normal coding choice, test failure, merge conflict, migration implementation detail, refactor decision or CI failure is NOT automatically HUMAN_REQUIRED. Diagnose and resolve it autonomously where safe.

## 6. Real functionality rule

Do not implement fake functionality to satisfy tests or UI expectations. No hardcoded success state, fabricated evidence, fake external transaction, fake AI behavior, fake settlement or mocked production integration presented as real.

Use real official sandbox/test APIs whenever available. If unavailable, use a clearly identified local emulator or realistic mock and keep the production boundary explicit.

Visible state must have a real derivation path from persisted/runtime evidence.

## 7. Validation standard

CI is regression protection, not the primary debugger.

Before remote CI, perform the strongest feasible local validation:

- focused tests;
- broader regression suite;
- database/migration checks;
- contract/integration tests;
- real runtime with frontend/backend/database/auth/workers/external services as applicable;
- visible user E2E/golden path for user-facing workflows;
- final diff and repository-state audit.

If E2E fails, find root cause, fix it, and restart the golden path from the beginning when the failure invalidates prior evidence.

Prefer one mature CI run per completed slice. Do not burn CI on blind reruns or tiny speculative pushes.

## 8. Safe Git/PR discipline

Preserve unrelated work. Use dedicated slice branches/PRs where the repository workflow expects them. Keep commits coherent and reviewable. Do not combine unrelated future slices into one giant change.

A whole project may have one master plan, but it must not become one giant commit.

Merge automatically only when repository permissions/policy allow it and every machine-verifiable gate is satisfied. If an owner gate is mandatory, prepare the exact verified merge candidate and report only that narrow action as HUMAN_REQUIRED.

## 9. Definition of done

A slice is `COMPLETE` only when implementation is real, relevant tests pass, migrations/data safety are verified, runtime works, required E2E passes, evidence is recorded, docs/ledgers match reality, no known blocker remains inside slice scope, and CI is green when CI is part of the gate.

A project/program is `COMPLETE` only after all required slices are integrated and the final production-like golden path passes end to end.

Never label written code, a plan, mocks, or partial validation as complete.

## 10. Required status vocabulary

Use explicit machine-readable status where useful:

- `REPO_CONSISTENCY_GATE = PASS | BLOCKED`
- `SLICE_STATUS = READY | ACTIVE | BLOCKED | COMPLETE`
- `PROJECT_STATUS = ACTIVE | BLOCKED | RELEASE_CANDIDATE | COMPLETE`
- `HUMAN_REQUIRED = NONE | <precise external action>`

The default objective is maximum safe autonomy with minimum human coordination overhead while preserving repository truth, runtime correctness, security, evidence quality and CI credits.
