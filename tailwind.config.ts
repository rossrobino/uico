import type { Config } from "tailwindcss";
import { uico } from "./package/index.ts";
import typography from "@tailwindcss/typography";

export default {
	plugins: [
		uico({
			colorFunction: "oklch",
			colorPalette: "oklch",
		}),
		typography,
	],
	content: ["./src/**/*.{html,js,ts,md}"],
} satisfies Config;
