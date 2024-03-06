import type { Config } from "domco";
// import { fontFamily } from "../../package/tw/fonts";

export const config: Config = {
	build: async ({ document }) => {
		const form = document.querySelector("form");

		// print this to copy
		// const fonts = Object.keys(fontFamily);
		// for (let i = 0; i < fonts.length; i++) {
		// 	fonts[i] = "font-" + fonts[i];
		// }
		// console.log(fonts);

		const fontClasses = [
			"font-sans",
			"font-serif",
			"font-mono",
			"font-antique",
			"font-transitional",
			"font-old-style",
			"font-humanist",
			"font-humanist-geometric",
			"font-humanist-classical",
			"font-neo-grotesque",
			"font-mono-serif",
			"font-industrial",
			"font-serif-slab",
			"font-sans-rounded",
			"font-didone",
			"font-handwritten",
		] as const;

		if (form) {
			fontClasses.forEach((font) => {
				const label = document.createElement("label");
				label.className = `${font} button button-outline has-[:checked]:button-secondary justify-between gap-2`;
				form.appendChild(label);
				label.textContent = font;

				const input = document.createElement("input");
				if (font === "font-sans") {
					input.setAttribute("checked", "true");
				}
				input.className = "input";
				input.type = "radio";
				input.name = "font";
				input.value = font;
				label.appendChild(input);
			});
		}
	},
};
