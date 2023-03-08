<script>
  import { sections } from '$lib/api/sections'
	import { components } from '$lib/api/components'
  import { slugify } from '$lib/utils'

  let here = sections[2]
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

{#each [...new Set(components.map(component => component.category))] as category}
	<div class="flex">
    	<a href="/components/{slugify(category)}">
			<h4>{category}</h4>
		</a>
		<div class="grid">
			{#each components.filter(component => component.category === category) as item}
				<a href="/components/{slugify(category)}/{slugify(item.title)}">
					<div class="card">
						<div class="body">
							<div class="h5"></div>
							{item.title}
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
{/each}

<style>
	.flex {
		margin-block: 2rem;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
		gap: 1rem;
	}
	a {
		text-decoration: none;
	}
</style>