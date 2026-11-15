# Agent Operating Contract

Every coding agent, orchestrator and subagent must read and follow `MASTER_AUTONOMOUS_COMPLETION_PROTOCOL.md` before substantial work.

A substantial task is part of the whole-project completion program, not an isolated slice. Maintain an executable dependency-aware master graph, use parallel specialist/subagent audits where useful, continue automatically with the next machine-solvable item after a track closes, and reserve `Task complete` for full machine-exhaustion of the project.

Repository-specific safety, secrets policy, irreversible actions and explicit owner authorization remain stricter than the master protocol.

Default execution pattern:

`AUDIT -> MASTER PLAN -> PARALLEL AUDITS -> IMPLEMENT -> HOSTILE REVIEW -> FOCUSED/FULL TESTS -> REAL RUNTIME/E2E WHERE SAFE -> EXACT-SHA SERVER CI -> CLOSURE -> RESYNC -> NEXT READY ITEM`

Never fabricate external evidence or readiness. Never expose secrets. Never perform irreversible production actions without explicit owner authorization.

## SWE-2 High acceleration program

During the temporary SWE-2 High availability window, every substantial coding workflow must also read and follow `SWE2_HIGH_ACCELERATION_PROTOCOL.md` and maintain `SWE2_HIGH_EXECUTION_QUEUE.md`. SWE-2 High is reserved for the highest-value difficult implementation packages; orchestration, read-only audit and lightweight work should be delegated appropriately. Repository-specific safety and owner authorization remain stricter.

## Portfolio AI factory — owner operating directive (2026-11-15)

This section is mandatory for Devin, orchestrators, coding agents and subagents. It supplements existing repository instructions, master completion protocols and product contracts; **stricter security, owner-approval, finance, live-operation and release gates always prevail**. Do not use it to bypass protected branches or existing CI.

1. **All products continue in parallel.** Coordinate capacity across repositories rather than arbitrarily cancelling projects. Honor repository-specific explicit holds and deployment restrictions; do not silently resume an owner-paused rollout.
2. **Mission-first, autonomous delivery.** Translate each owner objective into user-observable outcomes, bounded release scope and measurable acceptance criteria. Autonomously inspect actual HEAD, open PRs/issues, repo architecture, documentation, current CI/runtime evidence and relevant market/competitor gaps before selecting implementation. Maintain a dependency-aware executable plan; report assumptions and blockers, not invented certainty. The owner defines *what* must work; agents decide *how* within the guardrails.
3. **Specialist delegation.** For substantial work, orchestrate architecture/product, backend, frontend/UX, data/integrations, security, independent QA/E2E, DevOps/release and documentation specialists as useful. Assign non-overlapping ownership, deliverables and acceptance gates. Parallelize independent read-only audits; isolate concurrent writes in branches/worktrees. Lead agent integrates and resolves conflicts.
4. **Engineering and verification loop.** AUDIT -> ARCHITECTURE/DEPENDENCY PLAN -> IMPLEMENT -> TEST BEFORE COMMIT -> INDEPENDENT HOSTILE REVIEW -> FIX -> FULL REGRESSION -> COMMIT/PR -> EXACT-HEAD TRUSTED CI -> STAGING/REAL RUNTIME E2E -> DOCUMENTED RELEASE/POST-MERGE VERIFICATION. Apply real PostgreSQL, Chromium/Playwright, Windows/Android/mobile, restore/rollback and security checks whenever relevant and available. Never weaken checks, hide skips, treat mocks as integration proof or report queued CI as green.
5. **Release closure instead of endless scope creep.** Maintain both a complete long-term product roadmap and a separately bounded, testable *current release*. New ideas go into the backlog/next version unless the owner explicitly re-baselines current acceptance. Finish, independently test and document the accepted release before expanding it; a release being ready is not a claim that the entire multi-year product vision is complete.
6. **Cross-repo reuse and governance.** Before building shared auth, AI model routing, agent orchestration, MCP, observability, audit/event/evidence or CI features, inspect canonical implementations and prefer versioned interfaces/reusable modules over duplicated stacks. GENIUS Hub is the coordination target, **not** permission to block this repository on unfinished GENIUS features.
7. **Evidence-based status.** Maintain the repository's existing roadmap/ledger/requirements and include exact PR/SHA, tests (counts and skips), security findings, CI result, real runtime evidence, documentation changes and remaining external/owner blockers. Statuses must distinguish SPECIFIED, IMPLEMENTED, TESTED, STAGING_VERIFIED, PRODUCTION_VERIFIED and BLOCKED. Measure progress in accepted functional capabilities, not prompts, commit volume or PR count.

Routine reversible engineering is autonomous. Secret disclosure, financial/live transactions, irreversible migrations, production activation, legal commitments and any stricter owner gates still require their existing explicit authorization.
