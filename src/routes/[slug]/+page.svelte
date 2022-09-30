<script>
  import { goto } from '$app/navigation'
  import { slugify } from '$lib/utils'
  export let data
	const item = data.cat
</script>

<svelte:head>
	<title>{item.category} - Arctic Style</title>
	<meta property="og:title" content="{item.category} - Tags - Meter" />
	<meta property="og:site_name" content="Steffen Wold" />
	<meta property="og:url" content="https://arctic.style/{slugify(item.category)}" />
	<meta property="og:description" content={item.description} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="" />
</svelte:head>

<div class="title display-flex align-items-center justify-space-between">
	<h1>{item.category}</h1>
	<div class="display-flex align-items-center gap-medium cursor-pointer" on:click={() => goto("/docs/tags")}>
		<svg class="width-200 height-200 flip-y--180" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
			<path d="M15.268 4.21a.75.75 0 0 0-1.04 1.08l8.275 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441l-9.428-9.07Z" fill="currentColor" fill-rule="nonzero"/>
		</svg>
		<span>Return to tags</span>
	</div>
</div>

<p class="category-description">{item.description}</p>

<div class="grid">
	{#each item.items as i}
		{#if i.enabled}
			<a href="/{slugify(item.category)}/{slugify(i.title)}">
				<div class="card">
					<h3>{i.title}</h3>
					<figure class="illustration">
						{#if i.illustration}
							{i.illustration}
						{/if}
					</figure>
					<p>{i.description}</p>
				</div>
			</a>
		{/if}
	{/each}
</div>

<style>
	.title {
		height: 5rem;
		padding: 0 1rem;
	}
	.category-description {
		max-width: 60ch;
		min-height: 5rem;
		padding: 0 1rem;
		display: flex;
		align-items: center;
		font-size: 1.25rem;
	}
	.grid {
		margin: 1rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
		gap: 1rem;
	}
	.card {
		padding: 1rem;
		background: var(--dark);
		color: var(--light);
	}
	.card h3 {
		font-size: 1.5rem;
	}
	.card .illustration {
		width: 100%;
		height: 5rem;
	}
	.card p {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
</style>