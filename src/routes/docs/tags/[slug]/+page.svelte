<script>
  import { goto } from '$app/navigation'
  import { slugify, encode } from '$lib/utils'

  export let data

  let item = data.item
  let itemDesc = `Axess ${item.desc} reference.`
</script>

<svelte:head>
	<title>{item.tag} - Tags - Axess</title>
	<meta property="og:title" content="{item.tag} - Tags - Axess" />
	<meta property="og:site_name" content="Steffen Wold" />
	<meta property="og:url" content="https://steffen.id/docs/tags/{slugify(item.tag)}" />
	<meta property="og:description" content={itemDesc} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="" />
</svelte:head>

<div class="display-flex align-items-center justify-space-between">
	<h1>{item.tag}</h1>
	<div class="display-flex align-items-center gap-medium cursor-pointer" on:click={() => goto("/docs/tags")}>
		<svg class="width-7 height-7 flip-y--180" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
			<path d="M15.268 4.21a.75.75 0 0 0-1.04 1.08l8.275 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441l-9.428-9.07Z" fill="currentColor" fill-rule="nonzero"/>
		</svg>
		<span>Return to tags</span>
	</div>
</div>

<p class="padding-4 background-dark">{itemDesc}</p>

{#each item.previews as preview}
	<div class="display-flex gap-large">
		<h2 class="padding-top-medium">Semantic Design</h2>
		<div class="padding-4">
			{@html preview.semantic}
		</div>
		<pre class="padding-4 background-dark overflow-horizontal-auto"><code>{preview.semantic}</code></pre>	
	</div>
	<h2 class="padding-top-medium">Example Design</h2>
	<div class="padding-4">
		{@html preview.example}
	</div>
	<pre class="padding-4 background-dark overflow-horizontal-auto"><code>{preview.example}</code></pre>
{/each}