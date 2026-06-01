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
	splitting: true, // Let tsup split client and server code
	treeshake: true,
	external: ["react", "react-dom", "motion", "motion/react"],
	async onSuccess() {
		// We surgically add "use client" only to files that actually use motion or hooks
		const distDir = path.resolve("dist");
		const files = fs.readdirSync(distDir, { recursive: true }) as string[];

		for (const file of files) {
			if (file.endsWith(".js") || file.endsWith(".mjs")) {
				const filePath = path.join(distDir, file);
				if (fs.statSync(filePath).isFile()) {
					const content = fs.readFileSync(filePath, "utf8");
					const usesClientFeatures =
						content.includes("motion") ||
						content.includes("useState") ||
						content.includes("useEffect") ||
						content.includes("useSpring");

					const isPreset = file.includes("presets");

					if (usesClientFeatures && !isPreset) {
						if (!content.startsWith('"use client";')) {
							fs.writeFileSync(filePath, `"use client";\n${content}`);
						}
					}
				}
			}
		}
	},
});
