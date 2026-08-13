import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/**/*.ts"],
	target: ["esnext"],
	format: ["esm"],
	outDir: "dist",
	clean: true,
	minify: true,
	bundle: true,
	treeshake: true,
});
