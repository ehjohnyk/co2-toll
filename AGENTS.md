# Agent Operating Contract

Every coding agent, orchestrator and subagent must read and follow `MASTER_AUTONOMOUS_COMPLETION_PROTOCOL.md` before substantial work.

A substantial task is part of the whole-project completion program, not an isolated slice. Maintain an executable dependency-aware master graph, use parallel specialist/subagent audits where useful, continue automatically with the next machine-solvable item after a track closes, and reserve `Task complete` for full machine-exhaustion of the project.

Repository-specific safety, secrets policy, irreversible actions and explicit owner authorization remain stricter than the master protocol.

Default execution pattern:

`AUDIT -> MASTER PLAN -> PARALLEL AUDITS -> IMPLEMENT -> HOSTILE REVIEW -> FOCUSED/FULL TESTS -> REAL RUNTIME/E2E WHERE SAFE -> EXACT-SHA SERVER CI -> CLOSURE -> RESYNC -> NEXT READY ITEM`

Never fabricate external evidence or readiness. Never expose secrets. Never perform irreversible production actions without explicit owner authorization.

## SWE-2 High acceleration program

During the temporary SWE-2 High availability window, every substantial coding workflow must also read and follow `SWE2_HIGH_ACCELERATION_PROTOCOL.md` and maintain `SWE2_HIGH_EXECUTION_QUEUE.md`. SWE-2 High is reserved for the highest-value difficult implementation packages; orchestration, read-only audit and lightweight work should be delegated appropriately. Repository-specific safety and owner authorization remain stricter.
