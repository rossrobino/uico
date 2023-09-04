<script lang="ts">
	import twColors from "tailwindcss/colors";
	import Badge from "$lib/components/Badge.svelte";
	import Button from "$lib/components/Button.svelte";
	import Card from "$lib/components/Card.svelte";
	import Input from "$lib/components/Input.svelte";
	import Link from "$lib/components/Link.svelte";
	import Progress from "$lib/components/Progress.svelte";
	import { convertColorsToHSL } from "$lib/utilities";
	import Theme from "$lib/components/theme/Theme.svelte";

	export let data;

	const components = [
		{ name: ".badge", comp: Badge },
		{ name: ".button", comp: Button },
		{ name: ".card", comp: Card },
		{ name: ".input", comp: Input },
		{ name: ".link", comp: Link },
		{ name: ".progress", comp: Progress },
	];

	let colors: Record<string, string> = {
		"--background": twColors.zinc[50],
		"--foreground": twColors.zinc[700],
		"--muted": twColors.zinc[100],
		"--muted-foreground": twColors.zinc[600],
		"--primary": twColors.zinc[800],
		"--primary-foreground": twColors.zinc[100],
		"--secondary": twColors.zinc[200],
		"--secondary-foreground": twColors.zinc[900],
		"--destructive": twColors.rose[700],
		"--destructive-foreground": twColors.zinc[100],
		"--accent": twColors.zinc[800],
		"--accent-foreground": twColors.zinc[200],
		"--card": twColors.white,
		"--card-foreground": twColors.zinc[700],
		"--border": twColors.zinc[300],
	};

	let radius = 0.3;

	const getCustomProps = (colors: Record<string, string>, border: number) => {
		let style = "";
		for (let i = 0; i < Object.entries(colors).length; i++) {
			const entry = Object.entries(colors)[i];
			const name = entry[0];
			const value = entry[1];
			style += `${name}: ${value}; `;
		}
		style += `--radius: ${border}rem;`;
		return style;
	};

	$: customProps = getCustomProps(hslColors, radius);

	$: hslColors = convertColorsToHSL(colors);
</script>

<svelte:head>
	<title>uico</title>
	<meta
		name="description"
		content="UI components for TailwindCSS projects"
	/>
</svelte:head>

<div class="prose prose-zinc w-full prose-a:link">
	{@html data.readMe}
	<Theme bind:colors bind:hslColors bind:radius />

	<div
		style={customProps}
		class="card mt-8 bg-background text-foreground prose-headings:text-foreground"
	>
		<h2 class="mt-0">Preview</h2>
		<p class="border-l-4 bg-muted px-2 py-1 italic text-muted-foreground">
			Select "Theme" in the upper right corner to customize.
		</p>
		<h3>Components</h3>
		{#each components as { name, comp }}
			<section>
				<h4>{name}</h4>
				<svelte:component this={comp} />
			</section>
		{/each}
	</div>
</div>
