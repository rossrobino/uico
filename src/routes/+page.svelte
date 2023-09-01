<script lang="ts">
	import Badge from "./components/Badge.svelte";
	import Button from "./components/Button.svelte";
	import Card from "./components/Card.svelte";
	import Input from "./components/Input.svelte";
	import Link from "./components/Link.svelte";
	import Progress from "./components/Progress.svelte";

	export let data;

	const components = [
		{ name: ".badge", comp: Badge },
		{ name: ".button", comp: Button },
		{ name: ".card", comp: Card },
		{ name: ".input", comp: Input },
		{ name: ".link", comp: Link },
		{ name: ".progress", comp: Progress },
	];
</script>

<svelte:head>
	<title>layercomp</title>
	<meta
		name="description"
		content="A layer of components for TailwindCSS projects"
	/>
</svelte:head>

<div class="prose prose-zinc w-full prose-a:link dark:prose-invert">
	{@html data.readMe}

	{#each components as { name, comp }}
		<section>
			<h2>{name}</h2>
			<svelte:component this={comp} />
		</section>
	{/each}
</div>
