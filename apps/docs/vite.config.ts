import { domco } from "domco";
import { adapter } from "domco/adapter/vercel";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		domco({
			adapter: adapter(),
		}),
	],
});
