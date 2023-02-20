<script>
  import { goto } from '$app/navigation'
  import { slugify } from '$lib/utils'
	import { classes } from '$lib/api/sections'
	import { meta } from '$lib/api/molecules'
	import List from '$lib/layout/List.svelte'
	import Card from '$lib/layout/Card.svelte'

	let filterTerm = ''
	let dataDisplayMode = 'list'

	const searchResults = classes.filter(i => {
    let title = i.title.toLowerCase()
    let desc = i.description.toLowerCase()
    let term = filterTerm.toLowerCase()
    if (title.includes(term) || desc.includes(term)) {
      return i;
    }
  })

	const all = classes
	const flow = classes.filter(i => i.categories.includes("Flow"))
	const none  = ''

	$: currentFilter = all
</script>

<svelte:head>
	<title>{meta.title} - Arctic Style</title>
	<meta property="og:title" content="{meta.title} - Arctic Style" />
	<meta property="og:site_name" content="Arctic Style" />
	<meta property="og:url" content="https://arctic.style/{meta.slug}" />
	<meta property="og:description" content="{meta.description}" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="" />
</svelte:head>

<h1>{meta.title}</h1>

{#each meta.description as desc}
	<p>{desc}</p>
{/each}

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
	p {
    margin: .5rem 0;
    max-width: 60ch;
    line-height: 1.5;
  }
</style>