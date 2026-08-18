# Repository Autonomous Execution Contract V3

Status: CANONICAL AGENT GOVERNANCE

This file governs HOW autonomous agents execute work. Repository-specific canonical status, roadmap, release-gates, security, migrations and product contracts remain authoritative for WHAT is built.

Before implementation establish `REPO_CONSISTENCY_GATE = PASS`: fetch/prune; compare GitHub/default branch with the actual local/workspace repo; inspect branch/HEAD/upstream, staged/unstaged/untracked work, local/remote-only commits, stashes/worktrees and relevant branches/PRs; preserve valid work; never destructive-reset/clean for convenience; establish canonical starting SHA. If the user's PC repo is inaccessible, report `LOCAL_PC_NOT_ACCESSIBLE`.

Audit repository reality before planning. Existing verified code/tests/runtime override stale docs; do not duplicate completed work.

This repository is a legacy/minimal foundation, so first use Plan/Megaplan to create `docs/agent/MASTER_EXECUTION_PLAN.md`, `GAP_LEDGER.md`, `SLICE_LEDGER.md` and `CURRENT_STATE.md` from actual runtime truth before adding features. Classify dependencies/APIs, security, data sources, tests, UX and deployment as REAL/PARTIAL/STALE/MISSING.

Autonomous loop:
`AUDIT CURRENT MAIN -> BOOT LEGACY RUNTIME -> VERIFY EXTERNAL ROUTING/DATA -> BUILD RECOVERY PLAN -> NEXT VERTICAL SLICE -> IMPLEMENT -> LOCAL TESTS -> REAL RUNTIME -> VISIBLE E2E -> FIX/RETEST -> CANONICAL SERVER CI WHEN REQUIRED -> FIX UNTIL GREEN -> EVIDENCE -> UPDATE LEDGERS -> NEXT SLICE`.

After every COMPLETE slice record evidence/exact SHA, update canonical state, recompute dependencies, refresh repo state and continue automatically. A local external-data blocker must not stop independent work.

HUMAN_REQUIRED is limited to genuine external blockers: unavailable credential/API entitlement, owner/policy approval, irreversible production operation, unavailable non-emulatable environment, non-derivable legal/commercial product decision, or material architecture conflict. Dependency upgrades, test failures, refactors, API adapter implementation and CI failures are not automatically HUMAN_REQUIRED.

No hardcoded success, fabricated route/toll/emissions data or mocks represented as current production facts. Prefer official/current data sources or clearly versioned provider adapters. If authoritative tariffs/rules are unavailable, keep the affected result explicitly non-authoritative rather than presenting a guessed value as a legal/current toll.

## Canonical CI policy
The configured self-hosted/server CI is the PRIMARY canonical CI gate. GitHub Actions is not the default and must not be used merely to duplicate server validation or spend credits.

Each slice records `CI_REQUIRED`, `CI_PROFILE`, expected pipeline and exact completion gate. Required order when CI is required:
`IMPLEMENT -> LOCAL TESTS -> INTEGRATION -> REAL RUNTIME -> E2E -> LOCALLY CLEAN -> SERVER CI -> ROOT-CAUSE/FIX FAILURE -> MINIMUM RERUN -> GREEN -> EVIDENCE -> COMPLETE`.

CI is not a debugger. Before each run execute strongest feasible unit/integration/provider-contract tests, build/runtime, visible E2E and final diff audit. On failure inspect exact logs, fix locally, rerun relevant checks, then rerun only necessary CI scope. Never blind-rerun.

A CI-required slice cannot be COMPLETE while canonical CI is failing, skipped, unknown, stale or unexecuted. CI evidence is valid only for the exact tested SHA or proven immutable equivalent. Record CI system, run ID, exact SHA, profile, required jobs, result and evidence location. A changed SHA requires new/equivalent validated evidence.

Default profiles: `FAST` = lint/static/unit/contract; `STANDARD` = FAST + integration + build; `RUNTIME` = STANDARD + external-adapter/test runtime + E2E; `RELEASE` = RUNTIME + full regression + security/release/data-version evidence.

GitHub Actions may run only when explicitly required or server CI cannot execute a required GitHub-specific gate. If server CI is not configured/reachable, record `CI_STATUS = NOT_CONFIGURED | UNAVAILABLE`, continue independent work and keep CI-required slices not COMPLETE.

A slice is COMPLETE only with real implementation, passing tests, working runtime, required E2E, required exact-SHA canonical CI GREEN, evidence and accurate ledgers/docs. Project COMPLETE requires the full intended user flow plus final production-like E2E and release CI.

## CO2 Toll recovery/completion bootstrap — 2026-08-18
Current README describes only a minimal Node/API-gateway + static web skeleton: route distance comes from OSRM and is multiplied by a fixed `0.05 EUR/km` value for Slovakia/Austria/Germany. Treat that as a prototype assumption, not proof of a current legal/toll/CO2 pricing model.

First autonomous audit must:
1. boot the current API gateway and web UI on a clean environment;
2. verify OSRM request/error/timeout/route-segmentation behavior and all country-distance calculations;
3. inventory dependencies and stale/security risks;
4. determine from repository intent whether the product is a generic route-cost estimator, CO2/toll calculator or regulatory toll product, and represent ambiguity explicitly in the plan rather than silently inventing law/tariffs;
5. replace magic tariff constants with versioned/configurable tariff/emissions contracts and adapter provenance;
6. add deterministic unit/integration tests, failure handling and a visible route-calculation E2E;
7. modernize the UI/runtime/deployment only as needed to produce one reliable end-to-end product;
8. add observability/configuration/security and final release validation.

Do not build a large platform around the prototype before the calculation truth model is fixed. If current official tariff/regulatory data requires external legal/data-provider confirmation, isolate that as a precise gap while completing the provider-neutral implementation and test fixtures.

Default objective: turn the minimal OSRM prototype into a truthful, maintainable, versioned route/toll/CO2 calculation product instead of adding unrelated features.
