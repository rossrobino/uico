import plugin from "tailwindcss/plugin.js";
import type { CSSRuleObject } from "tailwindcss/types/config.js";

export default plugin(({ addComponents, theme }) => {
	const focusVisible: CSSRuleObject = {
		"&:focus-visible": {
			outline: 'theme("outlineColor.foreground") solid theme("outlineWidth.2")',
			"outline-offset": theme("outlineOffset.2"),
		},
	};

	const button: CSSRuleObject[] = [
		{
			".button": {
				display: "flex",
				"justify-content": "center",
				"align-items": "center",
				"transition-duration": theme("transitionDuration.DEFAULT"),
				"transition-property": theme("transitionProperty.DEFAULT"),
				"transition-timing-function": theme("transitionTimingFunction.DEFAULT"),
				"box-shadow": theme("boxShadow.DEFAULT"),
				"border-radius": theme("borderRadius.DEFAULT"),
				padding: "theme('padding.2') theme('padding.3')",
				height: theme("height.10"),
				"font-weight": theme("fontWeight.medium"),
				"font-size": theme("fontSize.sm"),
				"line-height": theme("lineHeight.5"),
				"letter-spacing": theme("letterSpacing.wide"),
				"&:hover": { opacity: theme("opacity.90") },
				"&:active": {
					transform: "scale(theme('scale.95'))",
					"box-shadow": "none",
				},
				"&:disabled": {
					opacity: theme("opacity.50"),
					"pointer-events": "none",
				},
				...focusVisible,
			},
		},
		{
			".button-primary": {
				"background-color": theme("backgroundColor.primary.DEFAULT"),
				color: theme("colors.primary.foreground"),
			},
		},
		{
			".button-secondary": {
				"background-color": theme("backgroundColor.secondary.DEFAULT"),
				color: theme("colors.secondary.foreground"),
			},
		},
		{
			".button-destructive": {
				"background-color": theme("backgroundColor.destructive.DEFAULT"),
				color: theme("colors.destructive.foreground"),
			},
		},
		{
			".button-ghost": {
				"box-shadow": "none",
				"background-color": "transparent",
				"&:hover": {
					"background-color": theme("backgroundColor.muted.DEFAULT"),
				},
			},
		},
		{
			".button-icon": {
				padding: theme("padding.2"),
			},
		},
	];

	const input: CSSRuleObject[] = [
		{
			".input": {
				display: "flex",
				border:
					'theme("borderWidth.DEFAULT") solid theme("borderColor.DEFAULT")',
				"border-radius": theme("borderRadius.DEFAULT"),
				"background-color": theme("backgroundColor.background"),
				padding: 'theme("padding.2") theme("padding.3")',
				width: theme("width.full"),
				height: theme("height.10"),
				"accent-color": theme("accentColor.primary.DEFAULT"),
				"font-size": theme("fontSize.sm"),
				"line-height": theme("lineHeight.5"),
				"&::placeholder": {
					opacity: theme("opacity.70"),
				},
				"&:disabled": { opacity: theme("opacity.50"), cursor: "not-allowed" },
				...focusVisible,
			},
		},
		{
			'input:not([type="checkbox"]):not([type="radio"]).input, select.input, textarea.input':
				{
					"-webkit-appearance": "none",
					"-moz-appearance": "none",
					appearance: "none",
				},
		},
		{
			'input[type="checkbox"].input, input[type="radio"].input': {
				"aspect-ratio": theme("aspectRatio.square"),
				width: theme("width.5"),
				height: theme("height.4"),
			},
		},
		{
			'input[type="color"].input': {
				"border-width": "0",
				padding: "0",
			},
		},
		{
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
		},
		{
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
						'theme("borderWidth.2") solid theme("borderColor.primary.DEFAULT")',
					"border-radius": theme("borderRadius.full"),
					background: theme("backgroundColor.primary.foreground"),
					width: theme("width.5"),
					height: theme("height.5"),
				},
				"&::-moz-range-thumb": {
					"margin-top": "-0.375rem",
					border:
						'theme("borderWidth.2") solid theme("borderColor.primary.DEFAULT")',
					"border-radius": theme("borderRadius.full"),
					background: theme("backgroundColor.primary.foreground"),
					width: theme("width.5"),
					height: theme("height.5"),
				},
				"&::-webkit-slider-runnable-track": {
					"border-radius": theme("borderRadius.full"),
					background: theme("backgroundColor.primary.DEFAULT"),
					height: theme("height.2"),
				},
				"&::-moz-range-track": {
					"border-radius": theme("borderRadius.full"),
					background: theme("backgroundColor.primary.DEFAULT"),
					height: theme("height.2"),
				},
			},
		},
		{
			"select[multiple].input, textarea.input": {
				height: theme("height.20"),
			},
		},
	];

	const label: CSSRuleObject[] = [
		{
			".label": {
				"font-weight": theme("fontWeight.medium"),
				"font-size": theme("fontSize.sm"),
				"line-height": theme("lineHeight.none"),
			},
		},
	];

	const link: CSSRuleObject[] = [
		{
			".link": {
				cursor: "pointer",
				color: theme("colors.primary.DEFAULT"),
				"text-decoration": "underline",
				"text-underline-offset": theme("textUnderlineOffset.2"),
				...focusVisible,
			},
		},
	];

	addComponents([...button, ...input, ...label, ...link]);
});
