import plugin from "tailwindcss/plugin.js";

export const uico = plugin(
	({ addBase, addComponents, theme }) => {
		// reusable properties

		const border =
			'theme("borderWidth.DEFAULT") solid theme("borderColor.DEFAULT")';

		// base

		addBase({
			html: {
				"-webkit-tap-highlight-color": "transparent",
			},
			"*:focus-visible": {
				outline:
					'theme("outlineColor.accent.DEFAULT") solid theme("outlineWidth.2")',
				"outline-offset": theme("outlineOffset.2"),
			},
		});

		// components

		/** @type {import("tailwindcss/types/config.js").CSSRuleObject} */
		const badge = {
			".badge": {
				display: "flex",
				"align-items": "center",
				"justify-content": "center",
				height: theme("height.5"),
				"font-size": theme("fontSize.xs"),
				"line-height": theme("lineHeight.4"),
				"border-radius": theme("borderRadius.DEFAULT"),
				padding: "theme('padding[0.5]') theme('padding[2.5]')",
			},
			".badge-primary": {
				color: theme("colors.primary.foreground"),
				"background-color": theme("backgroundColor.primary.DEFAULT"),
			},
			".badge-secondary": {
				color: theme("colors.secondary.foreground"),
				"background-color": theme("backgroundColor.secondary.DEFAULT"),
			},
			".badge-destructive": {
				color: theme("colors.destructive.foreground"),
				"background-color": theme("backgroundColor.destructive.DEFAULT"),
			},
			".badge-outline": {
				color: theme("colors.foreground"),
				"background-color": theme("backgroundColor.background"),
				border,
			},
		};

		/** @type {import("tailwindcss/types/config.js").CSSRuleObject} */
		const button = {
			".button": {
				display: "flex",
				"justify-content": "center",
				"align-items": "center",
				"transition-duration": theme("transitionDuration.DEFAULT"),
				"transition-property": theme("transitionProperty.DEFAULT"),
				"transition-timing-function": theme("transitionTimingFunction.DEFAULT"),
				"border-radius": theme("borderRadius.DEFAULT"),
				padding: "theme('padding.2') theme('padding.3')",
				height: theme("height.10"),
				"font-weight": theme("fontWeight.medium"),
				"font-size": theme("fontSize.sm"),
				"line-height": theme("lineHeight.5"),
				"letter-spacing": theme("letterSpacing.wide"),
				"&:hover": { opacity: theme("opacity.90") },
				"&:disabled": {
					opacity: theme("opacity.50"),
					"pointer-events": "none",
				},
			},
			".button-primary": {
				"background-color": theme("backgroundColor.primary.DEFAULT"),
				color: theme("colors.primary.foreground"),
			},
			".button-secondary": {
				"background-color": theme("backgroundColor.secondary.DEFAULT"),
				color: theme("colors.secondary.foreground"),
			},
			".button-destructive": {
				"background-color": theme("backgroundColor.destructive.DEFAULT"),
				color: theme("colors.destructive.foreground"),
			},
			".button-ghost": {
				"background-color": "transparent",
				"&:hover": {
					"background-color": theme("backgroundColor.muted.DEFAULT"),
				},
			},
			".button-outline": {
				"background-color": theme("backgroundColor.background"),
				color: theme("colors.foreground"),
				border,
				"&:hover": {
					"background-color": theme("backgroundColor.muted.DEFAULT"),
				},
			},
			".button-icon": {
				padding: theme("padding.2"),
			},
		};

		/** @type {import("tailwindcss/types/config.js").CSSRuleObject} */
		const card = {
			".card": {
				color: theme("colors.card.foreground"),
				"background-color": theme("backgroundColor.card.DEFAULT"),
				padding: theme("padding.6"),
				"border-radius": theme("borderRadius.md"),
				"box-shadow": theme("boxShadow.sm"),
				border,
			},
		};

		/** @type {import("tailwindcss/types/config.js").CSSRuleObject} */
		const input = {
			".input": {
				display: "flex",
				border,
				"border-radius": theme("borderRadius.DEFAULT"),
				"background-color": theme("backgroundColor.background"),
				padding: 'theme("padding.2") theme("padding.3")',
				width: theme("width.full"),
				height: theme("height.10"),
				"accent-color": theme("accentColor.accent.DEFAULT"),
				"font-size": theme("fontSize.sm"),
				"line-height": theme("lineHeight.5"),
				"&::placeholder": {
					opacity: theme("opacity.60"),
					color: "inherit",
				},
				"&:disabled": { opacity: theme("opacity.50"), cursor: "not-allowed" },
			},
			'input:not([type="checkbox"]):not([type="radio"]).input, select.input, textarea.input':
				{
					"-webkit-appearance": "none",
					"-moz-appearance": "none",
					appearance: "none",
				},
			'input[type="checkbox"].input, input[type="radio"].input': {
				"aspect-ratio": theme("aspectRatio.square"),
				width: theme("width.5"),
				height: theme("height.4"),
			},
			'input[type="color"].input': {
				"border-width": "0",
				padding: "0",
				"background-color": "transparent",
			},
			'input[type="file"].input': {
				"&::file-selector-button": {
					margin: "0",
					border: "none",
					"background-color": "transparent",
					padding: '0 theme("padding.2") 0 0',
					color: "inherit",
					"font-weight": theme("fontWeight.medium"),
					"font-size": "inherit",
					"line-height": "inherit",
				},
			},
			'input[type="range"].input': {
				cursor: "pointer",
				border: "none",
				background: "transparent",
				"padding-right": "0",
				"padding-left": "0",
				"&::-webkit-slider-thumb": {
					"-webkit-appearance": "none",
					"margin-top": "-0.375rem",
					border:
						'theme("borderWidth.2") solid theme("borderColor.accent.DEFAULT")',
					"border-radius": theme("borderRadius.full"),
					background: theme("backgroundColor.accent.foreground"),
					width: theme("width.5"),
					height: theme("height.5"),
					"box-shadow": "none", // iOS safari
				},
				"&::-moz-range-thumb": {
					"margin-top": "-0.375rem",
					border:
						'theme("borderWidth.2") solid theme("borderColor.primary.DEFAULT")',
					"border-radius": theme("borderRadius.full"),
					background: theme("backgroundColor.accent.foreground"),
					width: theme("width.5"),
					height: theme("height.5"),
				},
				"&::-webkit-slider-runnable-track": {
					"border-radius": theme("borderRadius.full"),
					background: theme("backgroundColor.accent.DEFAULT"),
					height: theme("height.2"),
				},
				"&::-moz-range-track": {
					"border-radius": theme("borderRadius.full"),
					background: theme("backgroundColor.accent.DEFAULT"),
					height: theme("height.2"),
				},
			},
		};

		/** @type {import("tailwindcss/types/config.js").CSSRuleObject} */
		const label = {
			".label": {
				display: "inline-block",
				"font-weight": theme("fontWeight.medium"),
				"font-size": theme("fontSize.sm"),
				"line-height": theme("lineHeight.none"),
			},
		};

		/** @type {import("tailwindcss/types/config.js").CSSRuleObject} */
		const link = {
			".link": {
				cursor: "pointer",
				color: theme("colors.primary.DEFAULT"),
				"text-decoration": "underline",
				"text-underline-offset": theme("textUnderlineOffset.2"),
			},
		};

		addComponents([badge, button, card, input, label, link]);
	},
	{
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
					lg: "calc(var(--radius) + 6px)",
					md: "calc(var(--radius) + 3px)",
					DEFAULT: "var(--radius)",
					sm: "calc(var(--radius) - 3px)",
				},
				fontFamily: {
					// https://modernfontstacks.com
					antique: [
						"Superclarendon",
						"Bookman Old Style",
						"URW Bookman",
						"URW Bookman L",
						"Georgia Pro",
						"Georgia",
						"serif",
					],
					transitional: [
						"Charter",
						"Bitstream Charter",
						"Sitka Text",
						"Cambria",
						"serif",
					],
					"old-style": [
						"Iowan Old Style",
						"Palatino Linotype",
						"URW Palladio L",
						"P052",
						"serif",
					],
					humanist: [
						"Seravek",
						"Gill Sans Nova",
						"Ubuntu",
						"Calibri",
						"DejaVu Sans",
						"source-sans-pro",
						"sans-serif",
					],
					"humanist-geometric": [
						"Avenir",
						"Montserrat",
						"Corbel",
						"URW Gothic",
						"source-sans-pro",
						"sans-serif",
					],
					"humanist-classical": [
						"Optima",
						"Candara",
						"Noto Sans",
						"source-sans-pro",
						"sans-serif",
					],
					"neo-grotesque": [
						"Inter",
						"Roboto",
						"Helvetica Neue",
						"Arial Nova",
						"Nimbus Sans",
						"Arial",
						"sans-serif",
					],
					"mono-serif": ["Nimbus Mono PS", "Courier New", "monospace"],
					industrial: [
						"Bahnschrift",
						"DIN Alternate",
						"Franklin Gothic Medium",
						"Nimbus Sans Narrow",
						"sans-serif-condensed",
						"sans-serif",
					],
					"serif-slab": [
						"Rockwell",
						"Rockwell Nova",
						"Roboto Slab",
						"DejaVu Serif",
						"Sitka Small",
						"serif",
					],
					"sans-rounded": [
						"ui-rounded",
						"Hiragino Maru Gothic ProN",
						"Quicksand",
						"Comfortaa",
						"Manjari",
						"Arial Rounded MT",
						"Arial Rounded MT Bold",
						"Calibri",
						"source-sans-pro",
						"sans-serif",
					],
					didone: [
						"Didot",
						"Bodoni MT",
						"Noto Serif Display",
						"URW Palladio L",
						"P052",
						"Sylfaen",
						"serif",
					],
					handwritten: [
						"Segoe Print",
						"Bradley Hand",
						"Chilanka",
						"TSCu_Comic",
						"casual",
						"cursive",
					],
				},
			},
		},
	},
);
