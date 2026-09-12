#!/usr/bin/env node

import { runCLI } from "../src/cli.js";

runCLI().catch((error) => {
  console.error("❌ An error occurred:", error);
  process.exit(1);
});
