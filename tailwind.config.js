import typography from "@tailwindcss/typography";

// import from "uico" instead of relative import
import { uico } from "./plugin";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,ts,svelte}"], // edit based on your project
	theme: {
		extend: {
			borderColor: {
				DEFAULT: "hsl(var(--border))",
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
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
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
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
	plugins: [typography, uico],
};
