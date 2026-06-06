import { defineConfig } from "tsdown";

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
	unbundle: false, // bundle: true was deprecated
	platform: "neutral",
	deps: {
		neverBundle: [
			"react",
			"react-dom",
			"motion",
			"motion/react",
			"react/jsx-runtime",
		],
	},
});
