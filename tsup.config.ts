import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["package/index.ts"],
	outDir: "package/dist",
	dts: true,
	format: "esm",
	clean: true,
});
