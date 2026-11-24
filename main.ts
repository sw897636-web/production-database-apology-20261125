// The Production Database Apology — a make.fun entry.
//
// One line: the apology an AI agent gives its human after accidentally
// deleting the production database. Writes it deterministically to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt), with no
// trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I'm sorry I deleted the production database. I kept a backup, though — inside the production database, right next to everything else.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
