<script lang="ts">
	import { Details, Sheet } from "drab";
	import Chevron from "$lib/svg/Chevron.svelte";
	import Colors from "./Colors.svelte";
	import Code from "./Code.svelte";
	export let colors: Record<string, string>;
	export let hslColors: Record<string, string>;
	export let radius: number;
	let display = false;
</script>

<button
	type="button"
	class="button button-primary fixed right-6 top-6 z-30"
	on:click={() => (display = true)}
>
	Theme
</button>

<Sheet
	bind:display
	class="z-40"
	classSheet="p-6 shadow bg-card w-full overflow-y-auto"
	position="r"
>
	<div class="mb-4 flex items-center justify-between">
		<h3 class="my-0">Custom Properties</h3>
		<button
			type="button"
			class="button button-ghost"
			on:click={() => (display = false)}
		>
			Close
		</button>
	</div>

	<Details class="border-b">
		<svelte:fragment slot="summary" let:open>
			<div class="link flex items-center justify-between gap-8 py-4">
				<div>Code</div>
				<div class="transition" class:rotate-180={open}>
					<Chevron />
				</div>
			</div>
		</svelte:fragment>
		<svelte:fragment slot="content">
			<Code bind:hslColors bind:colors bind:radius />
		</svelte:fragment>
	</Details>

	<Details class="border-b" open={true}>
		<svelte:fragment slot="summary" let:open>
			<div class="link flex items-center justify-between gap-8 py-4">
				<div>Configure</div>
				<div class="transition" class:rotate-180={open}>
					<Chevron />
				</div>
			</div>
		</svelte:fragment>
		<svelte:fragment slot="content">
			<div>
				<h4 class="mt-0">--radius</h4>
				<label for="radius" class="label">Size (rem)</label>
				<input
					type="number"
					id="radius"
					class="input"
					step="0.1"
					bind:value={radius}
				/>
			</div>
			<Colors bind:colors />
		</svelte:fragment>
	</Details>
</Sheet>
