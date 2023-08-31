/** @type {import("prettier").Options} */
export default {
	useTabs: true,
	printWidth: 80,
	plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-css-order"],
	overrides: [
		{
			files: "*.svelte",
			options: {
				parser: "svelte",
			},
		},
	],
};
