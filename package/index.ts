import plugin from "tailwindcss/plugin.js";
import type { CSSRuleObject } from "tailwindcss/types/config";
import { oklchColors } from "./oklchColors/index.js";
import { typography } from "./oklchColors/typography.js";
import { fontFamily } from "./fonts/index.js";
import { removeAlphaValue } from "./util/removeAlphaValue/index.js";

export type UicoOptions = {
	/**
	 * @description
	 *
	 * Adds css components such as `button` and `input`.
	 *
	 * @default true
	 */
	components?: boolean;

	/**
	 * @description
	 *
	 * Adds font utilities like `font-antique`.
	 *
	 * @default true
	 */
	fonts?: boolean;

	/**
	 * @description
	 *
	 * Color function to use for your css custom properties.
	 * If `false`, properties will be used directly.
	 *
	 * For example, set to `false` or leave undefined if your custom properties are hex codes.
	 *
	 * Alternatively, set to a string to use a function instead: `colorFunction: "oklch"`
	 *
	 * Then set custom properties without the function: `--primary: 32% 0.05 257;`
	 *
	 * See the [TailwindCSS Reference](https://tailwindcss.com/docs/customizing-colors#using-css-variables)
	 * for an explanation on why, and more information on how to set up these properties.
	 *
	 * @default false
	 */
	colorFunction?: string | false;

	/**
	 * @description
	 *
	 * Experimental - set to `"oklch"` to overwrite the default
	 * tailwind hex colors to oklch alternatives.
	 *
	 * See example colors here: [uico.robino.dev/oklch](https://uico.robino.dev/oklch/)
	 *
	 * @default "hex"
	 */
	colorPalette?: "hex" | "oklch";
};

export const uico = plugin.withOptions(
	function (options: UicoOptions = {}) {
		return function ({ addBase, addComponents, theme }) {
			setOptions(options);

			const themeColors = {
				background: removeAlphaValue(theme("colors.background")),
				foreground: removeAlphaValue(theme("colors.foreground")),
				muted: removeAlphaValue(theme("colors.muted.DEFAULT")),
				mutedForeground: removeAlphaValue(theme("colors.muted.foreground")),
				primary: removeAlphaValue(theme("colors.primary.DEFAULT")),
				primaryForeground: removeAlphaValue(theme("colors.primary.foreground")),
				secondary: removeAlphaValue(theme("colors.secondary.DEFAULT")),
				secondaryForeground: removeAlphaValue(
					theme("colors.secondary.foreground"),
				),
				destructive: removeAlphaValue(theme("colors.destructive.DEFAULT")),
				destructiveForeground: removeAlphaValue(
					theme("colors.destructive.foreground"),
				),
				accent: removeAlphaValue(theme("colors.accent.DEFAULT")),
				accentForeground: removeAlphaValue(theme("colors.accent.foreground")),
				card: removeAlphaValue(theme("colors.card.DEFAULT")),
				cardForeground: removeAlphaValue(theme("colors.card.foreground")),
				border: removeAlphaValue(theme("borderColor.DEFAULT")),
			} as const;

			if (options?.components) {
				// reusable properties

				const border = `theme("borderWidth.DEFAULT") solid ${themeColors.border}`;

				// base

				addBase([
					{
						"*:focus-visible": {
							outline: `${themeColors.accent} solid theme("outlineWidth.2")`,
							"outline-offset": theme("outlineOffset.2"),
						},
					},
				]);

				// components

				const badge: CSSRuleObject = {
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
						color: themeColors.primaryForeground,
						"background-color": themeColors.primary,
					},
					".badge-secondary": {
						color: themeColors.secondaryForeground,
						"background-color": themeColors.secondary,
					},
					".badge-destructive": {
						color: themeColors.destructiveForeground,
						"background-color": themeColors.destructive,
					},
					".badge-outline": {
						color: themeColors.foreground,
						"background-color": themeColors.background,
						border,
					},
				};

				const button: CSSRuleObject = {
					".button": {
						display: "flex",
						cursor: "pointer",
						"justify-content": "center",
						"align-items": "center",
						"transition-duration": theme("transitionDuration.DEFAULT"),
						"transition-property": theme("transitionProperty.DEFAULT"),
						"transition-timing-function": theme(
							"transitionTimingFunction.DEFAULT",
						),
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
						"background-color": themeColors.primary,
						color: themeColors.primaryForeground,
					},
					".button-secondary": {
						"background-color": themeColors.secondary,
						color: themeColors.secondaryForeground,
					},
					".button-destructive": {
						"background-color": themeColors.destructive,
						color: themeColors.destructiveForeground,
					},
					".button-ghost": {
						"background-color": "transparent",
						"&:hover": {
							"background-color": themeColors.muted,
						},
					},
					".button-outline": {
						color: themeColors.foreground,
						border,
					},
					".button-icon": {
						padding: theme("padding.2"),
					},
				};

				const card: CSSRuleObject = {
					".card": {
						"background-color": themeColors.card,
						padding: theme("padding.6"),
						"border-radius": theme("borderRadius.md"),
						"box-shadow": theme("boxShadow.sm"),
					},
				};

				const input: CSSRuleObject = {
					".input": {
						display: "flex",
						border,
						"border-radius": theme("borderRadius.DEFAULT"),
						"background-color": themeColors.background,
						padding: 'theme("padding.2") theme("padding.3")',
						width: theme("width.full"),
						height: theme("height.10"),
						"accent-color": themeColors.accent,
						"font-size": theme("fontSize.sm"),
						"line-height": theme("lineHeight.5"),
						"&::placeholder": {
							opacity: theme("opacity.60"),
							color: "inherit",
						},
						"&:disabled": {
							opacity: theme("opacity.50"),
							cursor: "not-allowed",
						},
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
							border: `theme("borderWidth.2") solid ${themeColors.accent}`,
							"border-radius": theme("borderRadius.full"),
							background: themeColors.accentForeground,
							width: theme("width.5"),
							height: theme("height.5"),
							"box-shadow": "none", // iOS safari
						},
						"&::-moz-range-thumb": {
							"margin-top": "-0.375rem",
							border: `theme("borderWidth.2") solid ${themeColors.primary}`,
							"border-radius": theme("borderRadius.full"),
							background: themeColors.accentForeground,
							width: theme("width.5"),
							height: theme("height.5"),
						},
						"&::-webkit-slider-runnable-track": {
							"border-radius": theme("borderRadius.full"),
							background: themeColors.accent,
							height: theme("height.2"),
						},
						"&::-moz-range-track": {
							"border-radius": theme("borderRadius.full"),
							background: themeColors.accent,
							height: theme("height.2"),
						},
					},
				};

				const label: CSSRuleObject = {
					".label": {
						display: "inline-block",
						"font-weight": theme("fontWeight.medium"),
						"font-size": theme("fontSize.sm"),
						"line-height": theme("lineHeight.none"),
					},
				};

				const link: CSSRuleObject = {
					".link": {
						cursor: "pointer",
						color: themeColors.primary,
						"text-decoration": "underline",
						"text-underline-offset": theme("textUnderlineOffset.2"),
					},
				};

				addComponents([badge, button, card, input, label, link]);
			}
		};
	},
	function (options = {}) {
		setOptions(options);

		return {
			theme: {
				extend: {
					typography: options.colorPalette === "oklch" ? typography : {},
					borderColor: {
						DEFAULT: options.colorFunction
							? `${options.colorFunction}(var(--border) / <alpha-value>)`
							: "var(--border)",
					},
					colors: {
						...(options.colorPalette === "oklch" ? oklchColors : {}),
						background: options.colorFunction
							? `${options.colorFunction}(var(--background) / <alpha-value>)`
							: "var(--background)",
						foreground: options.colorFunction
							? `${options.colorFunction}(var(--foreground) / <alpha-value>)`
							: "var(--foreground)",
						muted: {
							DEFAULT: options.colorFunction
								? `${options.colorFunction}(var(--muted) / <alpha-value>)`
								: "var(--muted)",
							foreground: options.colorFunction
								? `${options.colorFunction}(var(--muted-foreground) / <alpha-value>)`
								: "var(--muted-foreground)",
						},
						primary: {
							DEFAULT: options.colorFunction
								? `${options.colorFunction}(var(--primary) / <alpha-value>)`
								: "var(--primary)",
							foreground: options.colorFunction
								? `${options.colorFunction}(var(--primary-foreground) / <alpha-value>)`
								: "var(--primary-foreground)",
						},
						secondary: {
							DEFAULT: options.colorFunction
								? `${options.colorFunction}(var(--secondary) / <alpha-value>)`
								: "var(--secondary)",
							foreground: options.colorFunction
								? `${options.colorFunction}(var(--secondary-foreground) / <alpha-value>)`
								: "var(--secondary-foreground)",
						},
						destructive: {
							DEFAULT: options.colorFunction
								? `${options.colorFunction}(var(--destructive) / <alpha-value>)`
								: "var(--destructive)",
							foreground: options.colorFunction
								? `${options.colorFunction}(var(--destructive-foreground) / <alpha-value>)`
								: "var(--destructive-foreground)",
						},
						accent: {
							DEFAULT: options.colorFunction
								? `${options.colorFunction}(var(--accent) / <alpha-value>)`
								: "var(--accent)",
							foreground: options.colorFunction
								? `${options.colorFunction}(var(--accent-foreground) / <alpha-value>)`
								: "var(--accent-foreground)",
						},
						card: {
							DEFAULT: options.colorFunction
								? `${options.colorFunction}(var(--card) / <alpha-value>)`
								: "var(--card)",
							foreground: options.colorFunction
								? `${options.colorFunction}(var(--card-foreground) / <alpha-value>)`
								: "var(--card-foreground)",
						},
					},
					...(options.components
						? {
								borderRadius: {
									lg: "calc(var(--radius) + 6px)",
									md: "calc(var(--radius) + 3px)",
									DEFAULT: "var(--radius)",
									sm: "calc(var(--radius) - 3px)",
								},
							}
						: {}),
					fontFamily: options.fonts ? fontFamily : {},
				},
			},
		};
	},
);

const setOptions = (options: UicoOptions) => {
	const defaultOptions: UicoOptions = {
		components: true,
		fonts: true,
		colorFunction: false,
		colorPalette: "hex",
	};

	const keys = Object.keys(defaultOptions) as (keyof UicoOptions)[];

	keys.forEach((key) => {
		if (options[key] === undefined) {
			// @ts-ignore
			options[key] = defaultOptions[key];
		}
	});
};
