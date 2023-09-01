import typography from "@tailwindcss/typography";

// import from "layercomp" instead of relative import
import layercomp from "./src/index.js";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./site/**/*.{html,js}"], // edit based on your project
	theme: {
		extend: {
			borderColor: {
				DEFAULT: "hsl(var(--border))",
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: "hsl(var(--card))",
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
			},
			borderRadius: {
				lg: "calc(var(--radius) + 4px)",
				md: "calc(var(--radius) + 2px)",
				DEFAULT: "var(--radius)",
				sm: "calc(var(--radius) - 2px)",
			},
		},
	},
	plugins: [typography, layercomp],
};
