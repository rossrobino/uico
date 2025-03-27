import type { Dialog } from "drab/dialog";

export class Picker extends HTMLElement {
	connectedCallback() {
		const prop = this.getAttribute("prop")!;
		const value = this.getAttribute("value")!;
		const type = this.getAttribute("type")!;

		const input = document.createElement("input");
		input.id = prop;
		input.type = type === "color" ? type : "number";
		input.value = value;

		if (type === "number") {
			input.min = "0";
			input.max = "1";
			input.step = "0.005";
		} else if (type === "px") {
			input.min = "0";
			input.max = "50";
		}

		const propName = `--${prop}`;

		// append to theme-code for user to copy
		const code = document.querySelector("theme-code pre code")!;
		const span = document.createElement("span");
		code.append(span);

		const setProp = () => {
			const v = type === "px" ? `${input.value}px` : input.value;
			span.textContent = `${propName}: ${v};\n`;
			document.documentElement.style.setProperty(propName, v);
		};
		setProp();

		input.addEventListener("input", setProp);

		const label = document.createElement("label");
		label.textContent = prop;
		label.setAttribute("for", prop);

		const div = document.createElement("div");

		div.append(label);
		div.append(input);
		this.append(div);
	}
}

export class Edit extends HTMLElement {
	connectedCallback() {
		const button = this.querySelector("button")!;
		const toggle = () => {
			document.querySelector<Dialog>("drab-dialog")?.toggle();
		};

		button.addEventListener("click", toggle);
	}
}
