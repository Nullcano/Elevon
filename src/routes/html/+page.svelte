<script>
  import { slugify } from '$lib/utils'
	import { htmlMeta } from '$lib/api/sections'
	import { elements } from '$lib/api/elements'

	$: categories = [...new Set(elements.map(element => element.category))];
</script>

<svelte:head>
	<title>{htmlMeta.title} - Elevon</title>
	<meta property="og:title" content="{htmlMeta.title} - Elevon" />
	<meta property="og:site_name" content="Elevon" />
	<meta property="og:url" content="https://elevon.dev/{htmlMeta.slug}" />
	<meta property="og:description" content="{htmlMeta.description}" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="" />
</svelte:head>

<div class="title">
	<div>
		<h1>{htmlMeta.title}</h1>
		<p class="title-description">{htmlMeta.description}</p>
	</div>
</div>

<div class="category-grid">
	{#each categories as cat}
		<a href="{htmlMeta.slug}/{slugify(cat)}">
			{cat}
		</a>
	{/each}
</div>

<style>
	.category-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
		gap: .5rem;
	}
	a {
		display: block;
		padding: 2rem;
		padding-block-start: 4rem;
		color: unset;
		text-decoration: none;
		text-transform: uppercase;
		border: 1px solid rgba(255,255,255,.5);
	}
	.title {
		padding: 3rem 0;
		display: grid;
		grid-template-columns: 1fr auto;
	}
	.title-description {
		max-width: 60ch;
		display: flex;
		align-items: center;
		font-size: 1.25rem;
	}
</style>