<script>
  import { goto } from '$app/navigation'
  import { slugify } from '$lib/utils'
	import { p, elements } from '../../api/elements'
	import Card from '$lib/layout/Card.svelte'
</script>

<svelte:head>
	<title>{p.title} - Arctic Style</title>
	<meta property="og:title" content="{p.title} - Arctic Style" />
	<meta property="og:site_name" content="Arctic Style" />
	<meta property="og:url" content="https://arctic.style/{p.slug}" />
	<meta property="og:description" content="{p.description}" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="" />
</svelte:head>

<div class="title">
	<div class="display-flex align-items-center gap-medium cursor-pointer" on:click={() => goto("/")}>
		<span>- Return to home</span>
	</div>
	<h1>{p.title}</h1>
	<p class="title-description">{p.description}</p>
</div>

{#each elements as i}
	<a href="/{p.slug}/{slugify(i.title)}">
		<Card>
			<div slot="description">{i.description}</div>
			<div slot="title" class="mono">{i.title}</div>
			<div slot="categories" class="categories">
				{#each i.categories as c}
					<div class="category">{c}</div>
				{/each}
			</div>
		</Card>
	</a>
{/each}

<style>
	a {
		text-decoration: none;
	}
	.title {
		padding: 2rem;
	}
	.title-description {
		max-width: 60ch;
		min-height: 5rem;
		padding: 0 1rem;
		display: flex;
		align-items: center;
		font-size: 1.25rem;
	}
	.categories {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		gap: 1rem;
	}
	.category {
		padding: .25rem 1rem;
		border-radius: 60em;
		border: 1px solid var(--median);
		font-size: .8rem;
	}
</style>