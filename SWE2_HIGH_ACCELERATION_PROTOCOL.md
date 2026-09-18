# SWE-2 HIGH ACCELERATION PROTOCOL V1

Authority: repository-wide execution accelerator for coding agents during the temporary SWE-2 High availability window.

Program window: **through 2026-10-15** (or earlier if the model ceases to be available). After the window, keep the queue and execution discipline; substitute the best available implementation model.

This protocol supplements `AGENTS.md` and `MASTER_AUTONOMOUS_COMPLETION_PROTOCOL.md`. Repository safety, legal, production, secret, financial, owner-authorization and irreversible-action rules remain stricter.

## Core rule
SWE-2 High is the preferred heavy implementation engine, not the general-purpose clerk. The primary agent remains the orchestrator/tech lead/release owner.

Use SWE-2 High for the hardest unblocked machine-solvable work:
- architecture-heavy implementation and large coherent feature closures;
- auth/authz, cryptographic/security boundaries and hostile-review remediation;
- concurrency, state machines, idempotency, replay, persistence, crash/restart/recovery;
- AI/runtime/orchestration, model routing, memory, agent systems;
- difficult frontend/backend/external-provider integration;
- desktop/browser automation, real E2E, infra/deployment and major refactors.

Do **not** waste SWE-2 High on formatting, trivial documentation, mechanical renames, passive repo reading, obvious one-line fixes or repetitive grep work when a cheaper/read-only agent can do them.

## Orchestrator obligations
Maintain `SWE2_HIGH_EXECUTION_QUEUE.md` continuously. Always keep the next high-value package ready. When one package finishes: independently review it, integrate it, then immediately start the highest-value dependency-ready package. Do not wait for the owner between machine-solvable tracks.

Use parallel specialist subagents for architecture, security, runtime, DB/persistence, frontend/UX, E2E, infra, docs/source-of-truth and hostile review. Prefer read-only audits first. Every parallel writer must use a separate worktree/branch, isolated checkout/container or equivalent isolation. Shared mutable worktrees are prohibited.

## Work-package contract
Every SWE-2 High package must define:
`PACKAGE_ID`, `OBJECTIVE`, `WHY_HIGH_VALUE`, `DEPENDENCIES`, `OWNED_DOMAIN`, `OWNED_FILES`, `ACCEPTANCE_CRITERIA`, `NEGATIVE_PATHS`, `SECURITY_REQUIREMENTS`, `PERSISTENCE/RESTART_REQUIREMENTS`, `TEST_MATRIX`, `REAL_RUNTIME_EVIDENCE`, `E2E_REQUIREMENT`, `REVIEW_GATE`, `CI_GATE`.

Assign complete work packages, not micro-tickets. The package remains active until its acceptance gate is green.

## Reality and hostile review
Green tests are necessary, not sufficient. Prefer the strongest safe evidence available:
unit -> integration -> full runtime -> visible E2E -> official sandbox/testnet -> cross-host -> restart -> delayed observation -> production only with explicit authorization.

A reviewer that did not implement the change must attack trust boundaries, auth, races, replay, idempotency, restart/recovery, false PASS, secret leakage, production-vs-mock DTO drift, rollback/cleanup and external-evidence fabrication. Every confirmed machine-solvable P0/P1/P2 returns to the queue.

## Long-running command safety
Never wait indefinitely on silent shell commands. For long tests/builds/E2E: use bounded execution, preserve live/periodic progress, track elapsed time, inspect process trees/open handles when runtime exceeds expectation, terminate only stale task trees, preserve the working tree, diagnose the root cause and rerun cleanly. Repeatedly polling a silent shell for hours is prohibited; treat it as a hang incident.

## CI discipline
Use local/focused compute for iteration. Before canonical CI: focused tests green, full tests green, applicable runtime/E2E green, hostile review complete, diff understood, no known P0/P1/P2. Push one final candidate and require trusted exact-SHA server CI GREEN before merge.

## External blockers
An external/provider/legal/owner/elapsed-time blocker never freezes independent machine work. Record the exact blocker and owner helper/runbook, then continue the next unblocked package.

## Completion rule
A project may be called machine-complete only when all machine-solvable DAG items are exhausted, open machine P0/P1/P2 are zero, runtime/E2E evidence is complete where machine-solvable, exact-SHA CI is green, source-of-truth is consistent, and all remaining work is strictly external/owner/legal/credential/elapsed-time/irreversible-release work.
