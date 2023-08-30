import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/**/*.ts", "!src/**/*.d.ts"],
	splitting: false,
	clean: true,
	minify: false,
	target: "esnext",
	tsconfig: "tsconfig.json",
	skipNodeModulesBundle: true,
	sourcemap: true,
	keepNames: true,
	dts: false,
	shims: false,
	outDir: "build/"
});
