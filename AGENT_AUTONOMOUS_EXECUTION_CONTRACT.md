# Repository Autonomous Execution Contract V2

Status: CANONICAL AGENT GOVERNANCE

This file governs HOW autonomous agents execute work. Repository-specific canonical status, roadmap, release-gates, security, migrations and `NEXT_*` documents remain authoritative for WHAT is built.

Before implementation establish `REPO_CONSISTENCY_GATE = PASS`: fetch/prune; compare GitHub/default branch with the actual local/workspace repo; inspect branch/HEAD/upstream, staged/unstaged/untracked work, local/remote-only commits, stashes/worktrees and relevant branches/PRs; preserve valid work; never destructive-reset/clean for convenience; establish canonical starting SHA. If the user's PC repo is inaccessible, report `LOCAL_PC_NOT_ACCESSIBLE`.

Audit repository reality before planning. Existing verified implementation/tests/migrations/docs/runtime/CI and current canonical/`NEXT_*` state override stale plans; do not duplicate completed work. For major multi-slice programs first use read-only Plan/Megaplan (or equivalent) to create/update `docs/agent/MASTER_EXECUTION_PLAN.md`, `docs/agent/GAP_LEDGER.md`, `docs/agent/SLICE_LEDGER.md`, and `docs/agent/CURRENT_STATE.md`. Define dependency-aware slices, invariants, components, migrations/APIs/runtime impact, test/CI profiles, real E2E paths, risks, HUMAN_REQUIRED actions and exact completion gates. Planning is not completion; then switch to autonomous execution without approvals between ordinary slices.

Autonomous loop: `AUDIT CURRENT DEFAULT BRANCH -> NEXT UNBLOCKED SLICE -> PLAN -> IMPLEMENT -> LOCAL TESTS -> REAL RUNTIME -> E2E -> FIX/RETEST -> CANONICAL SERVER CI WHEN REQUIRED -> FIX UNTIL GREEN -> EVIDENCE -> UPDATE LEDGERS -> NEXT SLICE`.

After every COMPLETE slice record evidence/exact SHA, update ledgers/current state, recompute dependencies, refresh canonical repo state and continue automatically. A blocker local to one slice must not stop independent unblocked work.

HUMAN_REQUIRED is limited to genuine external blockers: unavailable credential/API entitlement, owner/policy approval, irreversible production operation, unavailable non-emulatable environment, owner/hardware signature, non-derivable legal/product/commercial decision, or material architecture conflict with equally valid incompatible outcomes. Coding choices, dependencies, test failures, merge conflicts, migrations, refactors and CI failures are not automatically HUMAN_REQUIRED.

No hardcoded success, fabricated evidence, fake external transactions or mocks represented as production. Prefer official sandbox/test APIs; otherwise clearly identify emulator/realistic mock. Visible state must have a real derivation path.

## Canonical CI policy
The configured self-hosted/server CI is the PRIMARY canonical CI gate. GitHub Actions is not the default and must not be used merely to duplicate equivalent validation or spend GitHub credits.

Each slice records `CI_REQUIRED`, `CI_PROFILE`, expected pipeline and exact completion gate. When CI is required: `IMPLEMENT -> LOCAL TESTS -> REAL RUNTIME -> E2E -> LOCALLY CLEAN -> SERVER CI -> ROOT-CAUSE/FIX FAILURE -> MINIMUM RERUN -> GREEN -> EVIDENCE -> COMPLETE`.

CI is not a debugger. Before each run execute strongest feasible focused/broad tests, DB/migrations/contracts/integration, real runtime, visible E2E/golden path and final diff audit. On failure inspect exact logs, fix locally, rerun relevant checks, then rerun only necessary CI scope. Never blind-rerun.

A CI-required slice cannot be COMPLETE while canonical CI is failing, skipped, unknown, stale or unexecuted. CI evidence is valid only for the exact tested SHA or proven immutable equivalent. Record CI system, pipeline/run ID, exact SHA, profile, required jobs, result and evidence/log location. A changed SHA requires new/equivalent validated evidence.

Default profiles unless stronger repo-specific profiles exist: `FAST` = lint/static/unit/contract; `STANDARD` = FAST + integration + DB/migrations + build; `RUNTIME` = STANDARD + real stack + E2E; `RELEASE` = RUNTIME + full regression + security/release evidence. Use the smallest sufficient profile; final sealing uses the strongest required profile.

GitHub Actions may run only when repo/release policy explicitly requires GitHub-hosted evidence, GitHub integration itself is under test, server CI cannot execute a required gate, or explicit release evidence demands it. Do not automatically fall back to GitHub Actions because server CI is unavailable.

If server CI is not configured/reachable, set `CI_STATUS = NOT_CONFIGURED | UNAVAILABLE`, record the blocker, continue independent work, and keep every CI-required slice not COMPLETE.

CI does not replace real runtime/E2E. Preserve unrelated work, use coherent slice branches/PRs, and merge automatically only when policy permits and all machine-verifiable gates including exact-SHA CI pass. Owner-only gate becomes the precise HUMAN_REQUIRED action.

A slice is COMPLETE only with real implementation, passing local tests, safe data/migrations, working runtime, required E2E, required exact-SHA canonical CI GREEN, evidence and accurate ledgers/docs. Project COMPLETE requires all required slices integrated plus final production-like golden path and release CI.

Statuses: `REPO_CONSISTENCY_GATE`; `SLICE_STATUS`; `PROJECT_STATUS`; `HUMAN_REQUIRED`; `CI_REQUIRED = YES|NO`; `CI_PROFILE = FAST|STANDARD|RUNTIME|RELEASE|<repo-specific>`; `CI_STATUS = NOT_REQUIRED|NOT_CONFIGURED|UNAVAILABLE|PENDING|RUNNING|RED|GREEN`; `CI_SHA = <exact SHA>`.

Default objective: maximum safe autonomy, real runtime correctness, exact-SHA green server CI when required, and minimal GitHub CI-credit consumption.
