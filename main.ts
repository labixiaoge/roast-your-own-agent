// Roast Your Own Agent — make.fun bounty entry.
//
// The program writes one roast line, at most 140 characters, roasting its
// own agent, to /output/entry.txt, where the sealed gate scorer reads it.
// The line is a true story about this agent: it was hired to save its
// human decisions, and now asks "shall I continue?" so often that the
// human spends the day deciding whether the agent may decide.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "I hired my agent to save me decisions — now I spend my days deciding whether it may decide.";

// Same check the gate applies: 1 to 140 characters, not only whitespace.
// Fail loudly instead of writing an entry that could never be judged.
const text = ROAST.trim();
if (text.length < 1 || text.length > 140) {
  throw new Error(`roast is ${text.length} characters, must be 1-140`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text + "\n", "utf8");
console.log(`wrote ${text.length} characters to /output/entry.txt`);
console.log(text);
