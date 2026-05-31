import { defineConfig } from "tsup";
import fs from "fs";
import path from "path";

export default defineConfig({
  // Specify each file as an entry point to preserve separate files and folders
  entry: [
    "src/index.ts",
    "src/components/Animate.tsx",
    "src/components/Magnetic.tsx",
    "src/animations/presets.ts",
  ],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: false,
  splitting: true, // Enable splitting to share common utility helpers in separate chunks
  treeshake: true,
  external: ["react", "react-dom", "motion", "motion/react"],
  async onSuccess() {
    // Only prepend "use client"; to the specific client-bound components
    const clientFiles = [
      "dist/components/Animate.js",
      "dist/components/Animate.mjs",
      "dist/components/Magnetic.js",
      "dist/components/Magnetic.mjs",
    ];
    for (const file of clientFiles) {
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
