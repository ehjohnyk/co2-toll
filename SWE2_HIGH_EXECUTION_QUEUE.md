# SWE-2 HIGH EXECUTION QUEUE

PROGRAM_END: 2026-10-15
PROJECT: CO2-TOLL
RULE: Reconcile route/rate/data truth before implementation; do not hard-code legal/toll semantics that are not sourced and versioned.

## ACTIVE
- Insert any current correctness/productization closure here.

## READY
1. **CO2-SWE2-001 — Route Segmentation + Rate Engine**
   - Objective: deterministic country/segment calculation with versioned rate sources, vehicle inputs and auditable output.
2. **CO2-SWE2-002 — Data/Provider Reliability**
   - Objective: OSRM/provider timeout, retry, cache, staleness, route fallback and truthful failure semantics.
3. **CO2-SWE2-003 — Scenario / Fleet API**
   - Objective: compare route/vehicle scenarios, bulk/fleet calculations and reproducible evidence without presenting unsourced fees as official.
4. **CO2-SWE2-004 — Customer Web/Mobile Experience**
   - Objective: route input -> map -> segmented calculation -> assumptions/evidence -> export with real browser/mobile E2E.
5. **CO2-SWE2-005 — Production Data Governance**
   - Objective: rate-version provenance, update workflow, validation, staging/deployment and hostile correctness audit.

## BLOCKED
- Authoritative external tariff/legal datasets, commercial/legal approval and production provider credentials remain external gates.

## COMPLETED
- Record package, PR, implementation SHA, CI SHA, merge SHA and evidence here.
