import fs from "fs";
import path from "path";
import { defineConfig } from "tsup";

export default defineConfig({
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
	splitting: false,
	treeshake: true,
	external: ["react", "react-dom", "motion", "motion/react"],
	async onSuccess() {
		const distDir = path.resolve("dist");
		const files = fs.readdirSync(distDir, { recursive: true }) as string[];
		for (const file of files) {
			if (file.endsWith(".js") || file.endsWith(".mjs")) {
				const filePath = path.join(distDir, file);
				if (fs.statSync(filePath).isFile()) {
					const content = fs.readFileSync(filePath, "utf8");
					if (
						!content.startsWith('"use client";') &&
						!content.startsWith("'use client';")
					) {
						fs.writeFileSync(filePath, `"use client";\n${content}`);
					}
				}
			}
		}
		console.log('⚡️ Prepended "use client"; to all dist files');
	},
});
