import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// optional - provides `prose` classes
import typography from "@tailwindcss/typography";

// `import { uico } from "uico";` instead of relative import
import { uico } from "./plugin";

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		postcss: {
			plugins: [
				tailwindcss({
					// edit `content` based on your project's files and structure
					content: ["./src/**/*.{html,js,svelte,ts}"],
					plugins: [typography, uico],
				}),
				autoprefixer(),
			],
		},
	},
});
