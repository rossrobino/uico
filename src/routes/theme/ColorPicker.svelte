<script lang="ts">
	import { findColor, randomId, type CustomColors } from "$lib/colors";
	import twColors from "tailwindcss/colors";

	export let value: string;

	let [color, shade] = findColor(value, twColors as unknown as CustomColors);

	$: currentColor = twColors[color as keyof typeof twColors];

	const id = randomId();

	const onChange = () => {
		if (typeof currentColor === "object") {
			value = currentColor[shade as keyof typeof currentColor];
		} else {
			value = currentColor;
		}
	};

	const disabled = ["Select", "black", "white", "inherit"];

	const exclude = [
		"current",
		"transparent",
		"lightBlue",
		"warmGray",
		"trueGray",
		"coolGray",
		"blueGray",
	];
</script>

<div class="grid grid-cols-3 gap-2">
	<div>
		<label for="color-{id}" class="label">Color</label>
		<select
			class="input capitalize"
			bind:value={color}
			id="color-{id}"
			on:change={onChange}
		>
			<option>Select</option>
			{#each Object.entries(twColors) as color}
				{#if !exclude.includes(color[0])}
					<option value={color[0]}>{color[0]}</option>
				{/if}
			{/each}
		</select>
	</div>
	<div>
		<label for="shade-{id}" class="label">Shade</label>
		<select
			class="input"
			bind:value={shade}
			id="shade-{id}"
			on:change={onChange}
			disabled={disabled.includes(color)}
		>
			{#each Object.entries(twColors) as color}
				{#each Object.entries(color[1]) as shade}
					{#if color[0] === "zinc"}
						<option value={shade[0]}>{shade[0]}</option>
					{/if}
				{/each}
			{/each}
		</select>
	</div>
	<div>
		<label for="sample-{id}" class="label">Sample</label>
		<div
			class="card h-10 p-4"
			id="sample-{id}"
			style="background-color: {value};"
		></div>
	</div>
</div>
