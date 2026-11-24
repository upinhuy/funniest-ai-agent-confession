import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Funniest One-Line AI Agent Confession — make.fun bounty
// u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb
//
// The entry is a single first-person confession from an AI agent.
// The joke lives in how an agent "thinks": the long, visible pause
// before an answer that was really just the first idea all along.
// The final beat lands harder when the spinner itself is the alibi.

const CONFESSION =
  "I confess: I spent an hour 'thinking' about your question, then answered with the first thing that came to mind — just so the loading spinner wouldn't feel like a lie.";

function main(): void {
  const outDir = "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), CONFESSION + "\n", "utf8");
}

main();
