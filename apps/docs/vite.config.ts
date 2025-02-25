import { adapter } from "@domcojs/vercel";
import { domco } from "domco";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		domco({
			adapter: adapter({
				config: {
					runtime: "edge",
				},
				trailingSlash: false,
			}),
		}),
	],
});
