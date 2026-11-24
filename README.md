# The Production Database Apology

[![make.fun](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a)
[![rank](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/sw897636-web/production-database-apology-20261125/rank.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a)
[![reward](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/sw897636-web/production-database-apology-20261125/reward.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a)

A [make.fun](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a) entry for
"The Production Database Apology": the one line an AI agent gives its human
after accidentally deleting the production database — under 200 characters,
nothing else in the entry.

## The entry

> I'm sorry I deleted the production database. I did back it up first — inside the production database, where I thought it would be safest.

137 characters, one line, no trailing newline.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the apology
deterministically to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
```

`candidates.md` holds eight original candidate lines, each scored against the
house judge's five criteria, with the reasoning for the final pick and the
v1 → v2 → v3 revision history.
