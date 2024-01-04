import type { CSSRuleObject } from "tailwindcss/types/config";
import { oklchColors } from "./index.js";
import { removeAlphaValue } from "../util/removeAlphaValue/index.js";

export const typography: () => CSSRuleObject = () => {
	const typographyColors: CSSRuleObject = {};

	for (let color in oklchColors) {
		let linkColor = color;

		const isNeutral =
			color === "gray" ||
			color === "zinc" ||
			color === "stone" ||
			color === "slate" ||
			color === "neutral";

		const palette = structuredClone(oklchColors[color]);

		if (palette) {
			Object.entries(palette).forEach((v) => {
				const [key, value] = v;
				palette[key as keyof typeof palette] = removeAlphaValue(value);
			});

			if (isNeutral) {
				typographyColors[linkColor] = {
					css: {
						"--tw-prose-body": palette[700],
						"--tw-prose-headings": palette[900],
						"--tw-prose-lead": palette[600],
						"--tw-prose-links": palette[900],
						"--tw-prose-bold": palette[900],
						"--tw-prose-counters": palette[500],
						"--tw-prose-bullets": palette[300],
						"--tw-prose-hr": palette[200],
						"--tw-prose-quotes": palette[900],
						"--tw-prose-quote-borders": palette[200],
						"--tw-prose-captions": palette[500],
						"--tw-prose-kbd": palette[900],
						"--tw-prose-code": palette[900],
						"--tw-prose-pre-code": palette[100],
						"--tw-prose-pre-bg": palette[900],
						"--tw-prose-th-borders": palette[300],
						"--tw-prose-td-borders": palette[200],
						"--tw-prose-invert-body": palette[300],
						"--tw-prose-invert-headings": palette[50],
						"--tw-prose-invert-lead": palette[300],
						"--tw-prose-invert-links": palette[50],
						"--tw-prose-invert-bold": palette[50],
						"--tw-prose-invert-counters": palette[400],
						"--tw-prose-invert-bullets": palette[600],
						"--tw-prose-invert-hr": palette[700],
						"--tw-prose-invert-quotes": palette[100],
						"--tw-prose-invert-quote-borders": palette[700],
						"--tw-prose-invert-captions": palette[400],
						"--tw-prose-invert-kbd": palette[50],
						"--tw-prose-invert-code": palette[50],
						"--tw-prose-invert-pre-code": palette[300],
						"--tw-prose-invert-th-borders": palette[600],
						"--tw-prose-invert-td-borders": palette[700],
					},
				};
			} else {
				typographyColors[linkColor] = {
					css: {
						"--tw-prose-links": palette[600],
						"--tw-prose-invert-links": palette[400],
					},
				};
			}
		}
	}

	return typographyColors;
};
