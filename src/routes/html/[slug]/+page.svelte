<script>
  import { slugify } from '$lib/utils'
	import { meta, elements } from '$lib/api/elements'

	$: items = elements.filter(element => element.category == meta.slug);
</script>

<svelte:head>
	<title>{meta.title} - Elevon</title>
	<meta property="og:title" content="{meta.title} - Elevon" />
	<meta property="og:site_name" content="Elevon" />
	<meta property="og:url" content="https://elevon.dev/{meta.slug}" />
	<meta property="og:description" content="{meta.description}" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="" />
</svelte:head>

<div class="title">
	<div>
		<h1>{meta.title}</h1>
		<p class="title-description">{meta.description}</p>
	</div>
</div>

<div class="category-grid">
	{#each items as i}
		<a href="{meta.slug}/{slugify(i.title)}">
			{i.title}
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