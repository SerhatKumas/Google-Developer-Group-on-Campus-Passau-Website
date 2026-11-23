#!/usr/bin/env node

/**
 * ==============================================================================
 * Google Developer Group on Campus Passau — Automated Rules Auditor
 * ==============================================================================
 * Master CLI entrypoint for repository audits.
 * Individual audit modules reside in scripts/audit/ and docs/audit/.
 *
 * Usage:
 *   npm run audit
 *   npm run audit:full
 *   node scripts/audit-rules.mjs --module=git
 * ==============================================================================
 */

import { runAllAudits } from "./audit/index.mjs";

const exitCode = runAllAudits();
process.exit(exitCode);
