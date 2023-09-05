<script lang="ts">
	import ColorPicker from "./ColorPicker.svelte";
	export let colors: Record<string, string>;
</script>

<div class="mb-6">
	{#each Object.keys(colors) as property}
		<h4>{property}</h4>
		<ColorPicker bind:value={colors[property]} />
	{/each}
</div>
