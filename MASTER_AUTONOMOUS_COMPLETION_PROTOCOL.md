# MASTER AUTONOMOUS COMPLETION PROTOCOL

Authority: repository-wide default for every coding agent, orchestrator, subagent and AI-assisted workflow.

This protocol supplements local safety/product/release rules and explicit owner gates; stricter local rules win. It never authorizes irreversible production/public actions, paid commitments, legal acceptance or secret disclosure without explicit authorization.

## Core rule
Every substantial task is input into the whole project completion program, not an isolated slice. After the requested item, automatically continue with the next dependency-ready machine-solvable item.

`AUDIT -> EXECUTABLE MASTER PLAN -> DEPENDENCY DAG -> PARALLEL SPECIALIST AUDITS -> IMPLEMENT -> HOSTILE REVIEW -> FOCUSED/FULL TESTS -> REAL RUNTIME/E2E -> EXACT-SHA SERVER CI -> MERGE/CLOSURE -> RESYNC -> NEXT READY ITEM`

## Orchestrator/subagents
For large work, the primary agent is technical lead/orchestrator. Use specialist subagents aggressively for architecture, product/backend/frontend, database, security, auth/trust, persistence/recovery, external APIs, infra/CI, tests/E2E, observability, dependency/license, docs/source-of-truth and hostile review. Give each explicit scope, deliverable, severity classification, read/write authority and dependencies. Prefer parallel read-only audits first; parallel writes use separate worktrees/branches. The orchestrator owns integration.

## Executable master plan
Maintain one project-level completion plan with exact SHA/current truth, target state, dependency graph, execution queue, acceptance/runtime/security/external/owner gates and PR/SHA/CI evidence. Track `ID`, `TRACK`, `DEPENDENCIES`, `CURRENT_STATE`, `IMPLEMENTATION`, `TESTS`, `RUNTIME_EVIDENCE`, `SECURITY_GATE`, `EXTERNAL_BLOCKER`, `OWNER_BLOCKER`, `ACCEPTANCE`, `STATUS`, `PR`, `SHA`. Do not stop after writing it; execute it.

## Dependency-aware autonomy
Run independent tracks in parallel. When one becomes HUMAN/EXTERNAL/LEGAL/ELAPSED_TIME/OWNER_REQUIRED, record the exact blocker and continue all independent machine work. Ask the owner only when an external or irreversible choice blocks all remaining progress.

## Tool authority
Use subagents, worktrees, GitHub CLI/API, shell, Node/Python, Docker, databases, Playwright/browser tools, analyzers, security/dependency/license scanners, temporary services and official sandboxes. Install safe useful tooling when missing; keep temporary artifacts out of source.

## Whole-repo hostile audit
Audit the whole system for TODO/FIXME/HACK, placeholders, mocks, test-only paths, localhost fallbacks, hard-coded credentials/endpoints, silent fallback, fail-open, missing auth/validation/idempotency, replay, races, corruption, unsafe retries, non-atomic persistence, secret leakage, cleanup/rollback gaps, false PASS and stale docs. Classify P0/P1/P2/P3/FALSE_POSITIVE/EXTERNAL_ONLY. Close all valid machine-solvable P0/P1/P2.

## Complete behavior / reality-first evidence
Cover applicable validation, authorization, negative paths, timeout/retry/idempotency, persistence/restart, cleanup/rollback, logging/redaction, observability, tests and runtime evidence. False READY/PASS is a release defect. Prefer unit/property -> integration -> full runtime -> visible E2E -> official sandbox/testnet -> cross-host/restart/delayed evidence -> production only after explicit authorization. Mocks never prove real integration.

## CI / source of truth
Use local focused/full tests before a meaningful final candidate. Run trusted self-hosted/server CI on exact SHA where configured; inspect exact logs and never blind-rerun. Continuously reconcile master plan/current state/ledger/evidence/release docs and exact SHA/test counts.

## Machine completion
Machine-complete only when the entire master graph is exhausted, OPEN_MACHINE_P0/P1/P2 are zero, tests/release audit/docs are green/consistent, no tracked secrets or false PASS remain, and all remaining work is strictly external/owner-only. Do not write `Task complete` for one slice; use `TRACK COMPLETE` and continue.

## Permanent directive
Do not ask `what next?` when derivable from the master plan. Do not stop at one PR, one green CI run or one external blocker. Maintain whole-project structure continuously until machine-solvable work is exhausted.