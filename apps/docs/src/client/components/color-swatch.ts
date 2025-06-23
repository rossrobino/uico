import type { Share } from "drab/share";
import "drab/share/define";

export class ColorSwatch extends HTMLElement {
	connectedCallback() {
		const share = document.createElement("drab-share") as Share;

		share.style.display = "contents";

		const shade = parseInt(
			this.style
				.getPropertyValue("background-color")
				.split("-")
				.at(3)
				?.slice(0, -1) ?? "",
		);

		const button = document.createElement("button");
		button.type = "button";

		if (shade > 400) {
			this.style.colorScheme = "dark";
		} else {
			this.style.colorScheme = "light";
		}

		button.addEventListener("click", () => {
			share.setAttribute("text", getComputedStyle(this).backgroundColor);
		});

		button.dataset.trigger = "";
		button.dataset.content = "";
		button.ariaLabel = `Copy base color of shade ${shade}`;

		button.classList.add("ghost", "icon");

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

		share.append(button);
		share.append(swap);
		this.append(share);
	}
}
