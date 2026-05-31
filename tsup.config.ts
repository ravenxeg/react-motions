import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: false,
  splitting: true,
  treeshake: true,
  external: ["react", "react-dom", "motion", "motion/react"],
  banner: {
    js: '"use client";',
  },
});
