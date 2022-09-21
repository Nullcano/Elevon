<script>
  import { goto } from '$app/navigation'
  import { slugify, encode } from '$lib/utils'

  export let data

  let item = data.item
  let itemDesc = `${item.desc} element reference.`
</script>

<svelte:head>
	<title>{item.tag} - Tags - Meter</title>
	<meta property="og:title" content="{item.tag} - Tags - Meter" />
	<meta property="og:site_name" content="Steffen Wold" />
	<meta property="og:url" content="https://steffen.id/docs/tags/{slugify(item.tag)}" />
	<meta property="og:description" content={itemDesc} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="" />
</svelte:head>

<div class="padding-vertical-4 display-flex align-items-center justify-space-between">
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
	<div class="margin-top-7 display-grid gap-large" style="grid-template-columns: 1fr 1fr">
		<div>
			<h2>Semantic Design</h2>
			<div class="padding-5">
				{@html preview.semantic}
			</div>
			<div>
				<div class="padding-vertical-2 padding-horizontal-3 text-3 border-all border-regular border-dark">HTML</div>
				<pre class="margin-0 padding-4 background-dark overflow-horizontal-auto"><code>{preview.semantic}</code></pre>	
			</div>
		</div>
		<div>
			<h2>Example Design</h2>
			<div class="padding-5">
				{@html preview.example}
			</div>
			<div>
				<div class="padding-vertical-2 padding-horizontal-3 text-3 border-all border-regular border-dark">HTML</div>
				<pre class="margin-0 padding-4 background-dark overflow-horizontal-auto"><code>{preview.example}</code></pre>
			</div>
		</div>
	</div>
{/each}