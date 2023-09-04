<script lang="ts">
	import { findColor, type CustomColors } from "$lib/utilities";
	import twColors from "tailwindcss/colors";
	export let colors: Record<string, string>;
	export let hslColors: Record<string, string>;

	export let radius: number;

	const setCode = (hslColors: Record<string, string>, radius: number) => {
		let code = "";
		Object.entries(hslColors).forEach(([property, value], i) => {
			const hex = Object.values(colors)[i];
			let [color, shade] = findColor(hex, twColors as unknown as CustomColors);
			code += `${property}: ${value}; /* ${color}${
				shade ? "-" + shade : ""
			} */\n`;
		});
		code += `--radius: ${radius}rem;`;
		return code;
	};

	$: code = setCode(hslColors, radius);
</script>

<pre class="mb-4 mt-0">{code}</pre>
