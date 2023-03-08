<script>
  import { sections } from '$lib/api/sections'
  import { elements } from '$lib/api/elements'
  import { slugify } from '$lib/utils'

  let here = sections[7]
</script>

<svelte:head>
	<title>{here.title} - Elevon</title>
	<meta property="og:title" content="{here.title} - Elevon" />
	<meta property="og:site_name" content="Elevon" />
	<meta property="og:url" content="https://elevon.dev/{here.slug}" />
	<meta property="og:description" content="{here.shortDescription}" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="" />
</svelte:head>

<div class="grid-2">
  <div class="intro">
    <h1>{here.title}</h1>
    <p>{here.description}</p>  
	</div>
</div>

<div class="list">
	{#each elements as element}
		<a href="/html/{slugify(element.title)}">
			<div class="grid">
				<div>{element.title}</div>
				<div>{element.description}</div>
			</div>
		</a>
	{/each}
</div>

<style>
	.list {
		display: flex;
		flex-direction: column;
	}
	.grid {
		padding: 1rem;
		display: grid;
		grid-template-columns: 16rem 1fr;
	}
	a {
		text-decoration: none;
	}
</style>