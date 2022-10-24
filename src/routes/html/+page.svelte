<script>
  import { goto } from '$app/navigation'
  import { slugify } from '$lib/utils'
	import { meta, elements } from '$lib/api/elements'
	import List from '$lib/layout/List.svelte'
	import Card from '$lib/layout/Card.svelte'

	let filterTerm = ''
	let dataDisplayMode = 'list'

	const searchResults = elements.filter(i => {
    let title = i.title.toLowerCase()
    let desc = i.description.toLowerCase()
    let term = filterTerm.toLowerCase()
    if (title.includes(term) || desc.includes(term)) {
      return i;
    }
  })

	const all = elements
	const flow = elements.filter(i => i.categories.includes("Flow"))
	const none  = ''

	$: currentFilter = all
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
	<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024">
		<path d="m145 96 66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z"/>
	</svg>
</div>

<nav>
	<input placeholder="Filter by search..." on:focus={() => currentFilter = searchResults} bind:value={filterTerm} />
	<button on:click={() => currentFilter = all}>All</button>
	<button on:click={() => currentFilter = flow}>Flow</button>
	<button on:click={() => currentFilter = none}>None</button>
</nav>

{#if dataDisplayMode == 'list'}
	<List>
		{#each currentFilter as i}
			<a href="{meta.slug}/{slugify(i.title)}">
				<Card title={i.title} description={i.description} />
			</a>
		{/each}
	</List>
{/if}

<style>
	nav {
		display: flex;
		gap: 2rem;
	}
	a {
		color: unset;
		text-decoration: none;
	}
	.title {
		padding: 3rem 0;
		display: grid;
		grid-template-columns: 1fr auto;
	}
	svg {
		width: 12rem;
		fill: var(--gray-10)
	}
	.title-description {
		max-width: 60ch;
		display: flex;
		align-items: center;
		font-size: 1.25rem;
	}
</style>