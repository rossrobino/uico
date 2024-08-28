import type { Copy } from "drab/copy";
import "drab/copy/define";

class ColorSwatch extends HTMLElement {
	connectedCallback() {
		const copy = document.createElement("drab-copy") as Copy;
		copy.style.display = "contents";

		copy.value = getComputedStyle(this).backgroundColor;

		const shade = parseInt(
			this.style
				.getPropertyValue("background-color")
				.split("-")
				.at(3)
				?.slice(0, -1) ?? "",
		);

		const button = document.createElement("button");

		if (shade > 400) {
			this.style.colorScheme = "dark";
		} else {
			this.style.colorScheme = "light";
		}

		button.dataset.trigger = "";
		button.dataset.content = "";
		button.ariaLabel = `Copy base color of shade ${shade}`;

		button.classList.add("ghost");

		button.innerHTML = `
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
				<path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
				<path d="M16 4h2a2 2 0 0 1 2 2v4" />
				<path d="M21 14H11" />
				<path d="m15 10-4 4 4 4" />
			</svg>
		`;

		const swap = document.createElement("template");
		swap.dataset.swap = "";
		swap.innerHTML = `
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M20 6 9 17l-5-5" />
			</svg>
		`;

		copy.append(button);
		copy.append(swap);
		this.append(copy);
	}
}

customElements.define("color-swatch", ColorSwatch);
