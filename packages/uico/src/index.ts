type ColorInfo = {
	name: string;
	hue: number;
};

export class ColorMaker {
	/**
	 * Chroma values used for the non-neutral colors.
	 */
	chromas = [0.02, 0.06, 0.11, 0.16, 0.2, 0.23, 0.21, 0.19, 0.17, 0.15, 0.13];

	/**
	 * Starting values for the colors to be built from.
	 */
	colorInfo: ColorInfo[] = [
		{
			name: "red",
			hue: 25,
		},
		{
			name: "orange",
			hue: 55,
		},
		{
			name: "amber",
			hue: 78,
		},
		{
			name: "yellow",
			hue: 98,
		},

		{
			name: "lime",
			hue: 127,
		},
		{
			name: "green",
			hue: 150,
		},
		{
			name: "emerald",
			hue: 169,
		},
		{
			name: "teal",
			hue: 185,
		},
		{
			name: "cyan",
			hue: 205,
		},
		{
			name: "sky",
			hue: 225,
		},
		{
			name: "blue",
			hue: 260,
		},
		{
			name: "indigo",
			hue: 275,
		},
		{
			name: "violet",
			hue: 293,
		},
		{
			name: "purple",
			hue: 304,
		},
		{
			name: "fuchsia",
			hue: 322,
		},
		{
			name: "pink",
			hue: 354,
		},
		{
			name: "rose",
			hue: 17,
		},
	];

	/**
	 * Calculates the hue's distance from yellow,
	 * the max distance from a color is 180.
	 *
	 * Yellow colors need to be brighter to look correct.
	 *
	 * @param hue - 0-360
	 * @returns the distance from yellow
	 */
	#distanceFromYellow(hue: number) {
		const spectrum = 360;
		const yellow = 100;
		const furthestAway = 280; // yellow + spectrum / 2

		if (hue < yellow) {
			// just the difference
			// ex: hue is 30,
			// 100 - 30 = 70
			return yellow - hue;
		} else if (hue <= furthestAway) {
			// ex: hue is 130
			// 130 - 100 = 30
			return hue - yellow;
		} else {
			// ex: hue is 300
			// since hue is closer going backwards around the spectrum to 0 and then from 360
			// 360 - 300 + 100 = 160
			return spectrum - hue + yellow;
		}
	}

	/**
	 * Calculates a curve between two other curves.
	 *
	 * @param a first curve
	 * @param b second curve
	 * @param x x value
	 * @param t time - number between 0 and 1
	 * @returns a curve between `a` and `b`, modify `t` to determine how much
	 */
	#between(
		a: (x: number) => number,
		b: (x: number) => number,
		x: number,
		t: number,
	) {
		return (1 - t) * a(x) + t * b(x);
	}

	/**
	 * Calculates the lightness curve based on the hue.
	 *
	 * @param hue hue value
	 * @returns The lightness values for the color.
	 */
	#getLightness(hue: number) {
		const yIntercept = 99;

		/** straight line with constant slope */
		const straight = (x: number) => yIntercept - 7.5 * x;

		/** yellow line needs to be lighter */
		const yellow = (x: number) => yIntercept - 0.2 * (x + 1) ** 2.48;

		/** slight curve between straight and yellow */
		const slightCurve = (x: number) => this.#between(yellow, straight, x, 0.8);

		/** the final color curve,  */
		const colorCurve = (x: number, t: number) =>
			this.#between(yellow, slightCurve, x, t);

		const lightness: number[] = [];

		for (let x = 0; x < this.chromas.length; x++) {
			lightness.push(
				Math.round(colorCurve(x, 0.007 * this.#distanceFromYellow(hue))),
			);
		}

		return lightness;
	}

	/**
	 * An object containing the created color palettes.
	 * @param colorInfo
	 */
	getPalettes(colorInfo?: ColorInfo[]) {
		if (!colorInfo) {
			colorInfo = this.colorInfo;
		}

		const plt: Record<
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
			const lightness = this.#getLightness(color.hue);

			plt[color.name] = {
				50: `oklch(0.${lightness.at(0)} ${this.chromas.at(0)} ${color.hue})`,
				100: `oklch(0.${lightness.at(1)} ${this.chromas.at(1)} ${color.hue})`,
				200: `oklch(0.${lightness.at(2)} ${this.chromas.at(2)} ${color.hue})`,
				300: `oklch(0.${lightness.at(3)} ${this.chromas.at(3)} ${color.hue})`,
				400: `oklch(0.${lightness.at(4)} ${this.chromas.at(4)} ${color.hue})`,
				500: `oklch(0.${lightness.at(5)} ${this.chromas.at(5)} ${color.hue})`,
				600: `oklch(0.${lightness.at(6)} ${this.chromas.at(6)} ${color.hue})`,
				700: `oklch(0.${lightness.at(7)} ${this.chromas.at(7)} ${color.hue})`,
				800: `oklch(0.${lightness.at(8)} ${this.chromas.at(8)} ${color.hue})`,
				900: `oklch(0.${lightness.at(9)} ${this.chromas.at(9)} ${color.hue})`,
				950: `oklch(0.${lightness.at(10)} ${this.chromas.at(10)} ${color.hue})`,
			};
		}

		return plt;
	}

	/**
	 * An object containing a string of css variables for each color palette.
	 */
	get css() {
		const colorsCss: Record<string, string> = {};

		for (const [name, values] of Object.entries(this.getPalettes())) {
			colorsCss[name] = `:root {\n`;

			for (const [shade, c] of Object.entries(values)) {
				colorsCss[name] += `\t--${name}-${shade}: ${c};\n`;
			}

			colorsCss[name] += `}\n`;
		}

		return colorsCss;
	}
}
