import "@/client/components/color";
import { ColorMaker } from "uico";

class ColorGenerator extends HTMLElement {
	connectedCallback() {
		const hue = document.createElement("input");
		hue.type = "range";
		hue.id = "hue";
		hue.max = "360";
		hue.min = "0";
		hue.value = "180";

		hue.style.marginBlockEnd = "var(--size-6)";

		const label = document.createElement("label");
		label.setAttribute("for", hue.id);

		this.append(label);
		this.append(hue);

		const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

		for (const shade of shades) {
			const swatch = document.createElement("color-swatch");
			swatch.style.backgroundColor = `var(--color-${shade})`;
			this.append(swatch);
		}

		const colorMaker = new ColorMaker();

		const createColors = (hue: number) => {
			label.textContent = `hue (${hue})`;
			const palettes = colorMaker.getPalettes([
				{
					name: "color",
					hue,
				},
			]);

			const palette = palettes["color"]!;

			for (const [shade, value] of Object.entries(palette)) {
				this.style.setProperty(`--color-${shade}`, value);
			}
		};

		createColors(180);
		hue.addEventListener("input", () => {
			createColors(parseInt(hue.value));
		});
	}
}

customElements.define("color-generator", ColorGenerator);
