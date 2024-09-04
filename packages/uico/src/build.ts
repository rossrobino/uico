import { ColorMaker } from "./index.js";
import fs from "node:fs/promises";
import path from "node:path";

const build = async () => {
	await writeColors();
};

const writeColors = async () => {
	const colorMaker = new ColorMaker();

	const outDir = "colors";

	await fs.mkdir(outDir, { recursive: true });

	const promises = [];

	for (const [color, css] of Object.entries(colorMaker.css)) {
		promises.push(fs.writeFile(path.join(outDir, `${color}.css`), css));
	}

	await Promise.all(promises);
};

build();
