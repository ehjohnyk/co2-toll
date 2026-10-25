# CO2 Toll — CI baseline and release blockers (2026-10-25)

This PR establishes the first automated CI gate. It runs **offline** Node.js syntax checks and
four security/manifest contract tests on GitHub-hosted Ubuntu, with read-only repository
permissions. No VPS runner is registered for this repository; a trusted self-hosted runner
may be introduced only after runner ownership and isolation are established.

## Confirmed improvements

- Removed an unused PostgreSQL pool containing an embedded database credential.
- Switched OSRM calls to HTTPS with a 10-second timeout and response validation.
- Sanitized external error responses.
- Explicitly labeled the API output as a **demo estimate**, not a billable quote.

## NOT a release approval

The endpoint still ignores the requested route, uses fixed waypoints, and incorrectly labels
waypoint-to-waypoint legs as country distances. The flat 0.05 EUR/km rate is unverified.
The frontend expects /api/calc while the backend exposes /calc, and there is no proven
reverse proxy. The repository lacks dependency lockfiles, integration/E2E coverage,
authoritative tariff provenance, vehicle/rate classification, and staging evidence.

**Fail closed at the business boundary:** do not use the prototype result for toll payment,
legal compliance, customer billing, or production decisions. Implement versioned country
segmentation, authoritative rate sources, truthful API semantics, runtime/E2E tests and
reproducible dependency installs before any production release. No claim of production readiness.
