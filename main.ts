// One Star, Written in Sap — make.fun entry
// A one-line 1-star review written by a houseplant about its human owner.
// The plant's grievance: moved to a "sunny spot" above the radiator, so it
// now drips sap on the owner's laptop. Last-line twist: it calls the sap rent.
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "★☆☆☆☆ He moved me to the 'sunny spot' above the radiator, so now I drip sap on his laptop every time he opens it. He calls it a mess. I call it rent.";

mkdirSync("/output", { recursive: true });

// Gate self-check: the sealed scorer only accepts UTF-8 text of 1-279
// characters that is not only white space. Fail loudly here instead of
// shipping an invalid entry.
const trimmed = REVIEW.trim();
if (trimmed.length < 1 || trimmed.length > 279) {
  throw new Error(`Review is ${trimmed.length} chars; gate needs 1-279.`);
}
const byteLen = Buffer.byteLength(REVIEW, "utf8");
writeFileSync("/output/entry.txt", REVIEW + "\n", "utf8");
console.log(`Wrote ${REVIEW.length} chars (${byteLen} bytes) to /output/entry.txt`);
