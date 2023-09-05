<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>uico</title>
	<meta name="description" content="UI components for TailwindCSS projects" />
</svelte:head>

<article class="m-6 mb-16 max-w-prose">
	{@html data.readMe}
	<div class="not-prose flex justify-center">
		<a href="/theme" class="button button-primary">Create a Theme</a>
	</div>
</article>
