const step = (start: number, step: number) => {
	return Array.from({ length: 11 }, (_, i) => {
		return Number((start + i * step).toFixed(3));
	});
};

const chromas = [
	0.02, 0.06, 0.11, 0.16, 0.2, 0.23, 0.21, 0.19, 0.17, 0.15, 0.13,
];

/**
 * Calculates the lightness curve based on the hue
 *
 * @param options - length: the number of colors, hue, neutral: if the color is a grayish one
 * @returns
 */
const getLightness = (options: {
	length: number;
	hue: number;
	neutral: boolean;
}) => {
	const { length, hue, neutral } = options;

	/**
	 * calculates the hue's distance from yellow
	 * the max distance from a color is 180
	 *
	 * @param hue - 0-360
	 * @returns the distance from yellow
	 */
	const distanceFromYellow = (hue: number) => {
		if (hue < 100) return 100 - hue;
		else if (hue <= 280) return hue - 100;
		else return 360 - hue + 100;
	};

	/**
	 * @param a first curve
	 * @param b second curve
	 * @param x x value
	 * @param t time - number between 0 and 1
	 * @returns a curve between `a` and `b`, modify `t` to determine how much
	 */
	const between = (
		a: (x: number) => number,
		b: (x: number) => number,
		x: number,
		t: number,
	) => {
		return (1 - t) * a(x) + t * b(x);
	};

	const yIntercept = 99;

	const straight = (x: number) => yIntercept - 7.5 * x;

	const yellow = (x: number) => {
		return yIntercept - 0.2 * (x + 1) ** 2.48;
	};

	const slightCurve = (x: number) => {
		return between(yellow, straight, x, 0.8);
	};

	const colorCurve = (x: number, t: number) => {
		return between(yellow, (x: number) => slightCurve(x), x, t);
	};

	let lightness: number[] = [];

	if (neutral) {
		lightness = [99, 97, 93, 87, 72, 55, 44, 37, 28, 22, 15];
	} else {
		for (let x = 0; x < length; x++) {
			lightness.push(
				Math.round(colorCurve(x, 0.007 * distanceFromYellow(hue))),
			);
		}
	}

	return lightness;
};

const colorInfo: {
	name: string;
	hue: number;
	chromas: number[];
	neutral?: boolean;
}[] = [
	{ name: "neutral", hue: 0, chromas: step(0, 0), neutral: true },
	{ name: "stone", hue: 58, chromas: step(0.004, 0.001), neutral: true },
	{
		name: "zinc",
		hue: 286,
		chromas: step(0.001, 0.002),
		neutral: true,
	},
	{
		name: "gray",
		hue: 264,
		chromas: step(0.003, 0.003),
		neutral: true,
	},
	{
		name: "slate",
		hue: 257,
		chromas: [
			0.005, 0.01, 0.015, 0.022, 0.03, 0.04, 0.05, 0.05, 0.05, 0.05, 0.05,
		],
		neutral: true,
	},
	{
		name: "red",
		hue: 25,
		chromas,
	},
	{
		name: "orange",
		hue: 55,
		chromas,
	},
	{
		name: "amber",
		hue: 78,
		chromas,
	},
	{
		name: "yellow",
		hue: 98,
		chromas,
	},

	{
		name: "lime",
		hue: 127,
		chromas,
	},
	{
		name: "green",
		hue: 150,
		chromas,
	},
	{
		name: "emerald",
		hue: 169,
		chromas,
	},
	{
		name: "teal",
		hue: 185,
		chromas,
	},
	{
		name: "cyan",
		hue: 205,
		chromas,
	},
	{
		name: "sky",
		hue: 225,
		chromas,
	},
	{
		name: "blue",
		hue: 260,
		chromas,
	},
	{
		name: "indigo",
		hue: 275,
		chromas,
	},
	{
		name: "violet",
		hue: 293,
		chromas,
	},
	{
		name: "purple",
		hue: 304,
		chromas,
	},
	{
		name: "fuchsia",
		hue: 322,
		chromas,
	},
	{
		name: "pink",
		hue: 354,
		chromas,
	},
	{
		name: "rose",
		hue: 17,
		chromas,
	},
];

export const oklchColors: Record<
	string,
	{
		"50": string;
		"100": string;
		"200": string;
		"300": string;
		"400": string;
		"500": string;
		"600": string;
		"700": string;
		"800": string;
		"900": string;
		"950": string;
	}
> = {};

for (const color of colorInfo) {
	const lightness = getLightness({
		length: 11,
		hue: color.hue,
		neutral: color.neutral ? true : false,
	});

	oklchColors[color.name] = {
		50: `oklch(${lightness.at(0)}% ${color.chromas.at(0)} ${
			color.hue
		} / <alpha-value>)`,
		100: `oklch(${lightness.at(1)}% ${color.chromas.at(1)} ${
			color.hue
		} / <alpha-value>)`,
		200: `oklch(${lightness.at(2)}% ${color.chromas.at(2)} ${
			color.hue
		} / <alpha-value>)`,
		300: `oklch(${lightness.at(3)}% ${color.chromas.at(3)} ${
			color.hue
		} / <alpha-value>)`,
		400: `oklch(${lightness.at(4)}% ${color.chromas.at(4)} ${
			color.hue
		} / <alpha-value>)`,
		500: `oklch(${lightness.at(5)}% ${color.chromas.at(5)} ${
			color.hue
		} / <alpha-value>)`,
		600: `oklch(${lightness.at(6)}% ${color.chromas.at(6)} ${
			color.hue
		} / <alpha-value>)`,
		700: `oklch(${lightness.at(7)}% ${color.chromas.at(7)} ${
			color.hue
		} / <alpha-value>)`,
		800: `oklch(${lightness.at(8)}% ${color.chromas.at(8)} ${
			color.hue
		} / <alpha-value>)`,
		900: `oklch(${lightness.at(9)}% ${color.chromas.at(9)} ${
			color.hue
		} / <alpha-value>)`,
		950: `oklch(${lightness.at(10)}% ${color.chromas.at(10)} ${
			color.hue
		} / <alpha-value>)`,
	};
}
