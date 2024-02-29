import type { Config } from "domco";
import { readFile } from "fs/promises";
import { process } from "robino/util/md";
import { oklchColors } from "../package/oklchColors/index.ts";
import hexColorData from "tailwindcss/colors";
import { removeAlphaValue } from "../package/util/removeAlphaValue/index.ts";
import fs from "node:fs/promises";

export const config: Config = {
	layout: await fs.readFile("src/layout.html", "utf-8"),

	layoutBuild: async ({ document, HTMLElement, customElements }, { route }) => {
		const title = route.at(1)?.toUpperCase() + route.slice(2);
		document.title = "uico" + (title !== "undefined" ? ` - ${title}` : "");

		const md = await readFile(
			route === "/" ? "README.md" : `src${route}/index.md`,
			"utf-8",
		);
		const { html } = await process(md);
		const article = document.querySelector("article");
		if (article) article.innerHTML = html;

		const headings = document.querySelectorAll("h2, h3, h4, h5");
		headings.forEach((heading) => {
			if (heading && heading.id) {
				const id = heading.id;
				heading.classList.add("flex");
				heading.innerHTML = /*html*/ `
				<a href="#${id}" class="not-prose hover:underline flex items-center gap-1">
					${heading.innerHTML}
				</a>
			`;
			}
		});

		class ColorPalette extends HTMLElement {
			connectedCallback() {
				for (const color of Object.keys(oklchColors)) {
					const h3 = document.createElement("h3");
					h3.textContent = color;
					h3.classList.add("first:mt-0", "capitalize");
					this.appendChild(h3);

					const container = document.createElement("div");
					container.classList.add(
						"grid",
						"grid-cols-2",
						"md:grid-cols-1",
						"gap-2",
					);
					this.appendChild(container);

					const okColors = document.createElement("div");
					okColors.classList.add("grid", "md:grid-cols-12", "gap-1.5");
					container.appendChild(okColors);

					const hexColors = document.createElement("div");
					hexColors.classList.add("grid", "md:grid-cols-12", "gap-1.5");
					container.appendChild(hexColors);

					const okLabel = document.createElement("h4");
					okLabel.classList.add("m-0", "text-xs", "self-center");
					okLabel.textContent = "oklch";
					okColors.appendChild(okLabel);

					const hexLabel = document.createElement("h4");
					hexLabel.classList.add("m-0", "text-xs", "self-center");
					hexLabel.textContent = "hex";
					hexColors.appendChild(hexLabel);

					//@ts-expect-error
					for (const [num, shade] of Object.entries(oklchColors[color])) {
						const okButton = document.createElement("button");
						okButton.classList.add(
							"p-5",
							"rounded",
							"hover:cursor-copy",
							"active:opacity-90",
						);
						okButton.title = `${color}-${num}`;
						okButton.style.backgroundColor = removeAlphaValue(shade);
						okButton.setAttribute(
							"data-copy",
							removeAlphaValue(shade).slice(6, -1),
						);
						okColors.appendChild(okButton);

						const twButton = document.createElement("button");
						twButton.title = `${color}-${num}`;
						twButton.classList.add(
							"tw-color",
							"p-5",
							"rounded",
							"hover:cursor-copy",
							"active:opacity-90",
						);
						//@ts-expect-error
						const hexColor = hexColorData[color][num] as string;
						twButton.style.backgroundColor = hexColor;
						twButton.setAttribute("data-copy", hexColor);
						hexColors.appendChild(twButton);
					}
				}
			}
		}

		customElements.define("color-palette", ColorPalette);
	},
};
