<script lang="ts">
	import twColors from "tailwindcss/colors";
	import Badge from "$lib/components/Badge.svelte";
	import Button from "$lib/components/Button.svelte";
	import Card from "$lib/components/Card.svelte";
	import Input from "$lib/components/Input.svelte";
	import Link from "$lib/components/Link.svelte";
	import { convertColorsToHSL } from "$lib/utilities";
	import Theme from "./Theme.svelte";

	const components = [
		{ name: ".badge", comp: Badge },
		{ name: ".button", comp: Button },
		{ name: ".card", comp: Card },
		{ name: ".input", comp: Input },
		{ name: ".link", comp: Link },
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
	<title>uico - Theme</title>
	<meta name="description" content="Create a theme" />
</svelte:head>

<Theme bind:colors bind:hslColors bind:radius />

<article
	style={customProps}
	class="bg-background p-6 text-foreground prose-headings:text-foreground"
>
	<div class="max-w-prose">
		<h1>Theme</h1>
		<a href="/">README</a>
		<p class="border-l-4 bg-muted px-2 py-1 italic text-muted-foreground">
			Select "Customize" in the upper right corner to customize.
		</p>
		{#each components as { name, comp }}
			<section>
				<h2>{name}</h2>
				<svelte:component this={comp} />
			</section>
		{/each}
	</div>
</article>
