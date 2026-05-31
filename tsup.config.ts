import { defineConfig } from "tsup";
import fs from "fs";
import path from "path";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: false,
  splitting: false,
  treeshake: true,
  external: ["react", "react-dom", "motion", "motion/react"],
  async onSuccess() {
    const files = ["dist/index.js", "dist/index.mjs"];
    for (const file of files) {
      const filePath = path.resolve(file);
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, "utf8");
        if (!content.startsWith('"use client";') && !content.startsWith("'use client';")) {
          fs.writeFileSync(filePath, `"use client";\n${content}`);
          console.log(`⚡️ Prepend "use client"; to ${file}`);
        }
      }
    }
  },
});
