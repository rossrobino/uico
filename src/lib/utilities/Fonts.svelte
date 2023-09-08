<script lang="ts">
	const stacks = [
		"font-mono",
		"font-serif",
		"font-sans",
		"font-antique",
		"font-transitional",
		"font-old-style",
		"font-humanist",
		"font-humanist-geometric",
		"font-humanist-classical",
		"font-neo-grotesque",
		"font-mono-serif",
		"font-industrial",
		"font-serif-slab",
		"font-sans-rounded",
		"font-didone",
		"font-handwritten",
	];

	stacks.sort();

	let font = "font-sans";
</script>

<section>
	<h3>Fonts</h3>

	<div class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
		{#each stacks as stack}
			<button
				class="button button-ghost {stack}"
				on:click={() => (font = stack)}
			>
				{stack}
			</button>
		{/each}
	</div>

	<hr />

	<div class={font}>
		<h1>Heading 1</h1>
		<h2>Heading 2</h2>
		<h3>Heading 3</h3>

		<p>
			These fonts are courtesy of
			<a href="https://modernfontstacks.com/">Modern Font Stacks</a>
			and the three built in Tailwind stacks. These are
			<i>system font stacks,</i>
			so you are
			<strong>not shipping</strong>
			an extra font with your bundle.
		</p>

		<blockquote>Modern Font Stacks is awesome!</blockquote>
	</div>
</section>
