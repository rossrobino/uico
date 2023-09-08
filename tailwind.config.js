// optional - provides `prose` classes
import typography from "@tailwindcss/typography";

// `import { uico } from "uico";` instead of relative import
import { uico } from "./plugin";

/** @type {import('tailwindcss').Config} */
export default {
	// edit `content` based on your project's files and structure
	content: ["./src/**/*.{html,js,ts,svelte}"],
	plugins: [typography, uico],
};
