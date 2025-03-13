import { adapter } from "@domcojs/vercel";
import { md } from "@robino/md";
import { domco } from "domco";
import langBash from "shiki/langs/bash.mjs";
import langCss from "shiki/langs/css.mjs";
import langHtml from "shiki/langs/html.mjs";
import langJs from "shiki/langs/js.mjs";
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
		md({
			highlighter: {
				langs: [langBash, langCss, langJs, langHtml],
			},
		}),
	],
});
