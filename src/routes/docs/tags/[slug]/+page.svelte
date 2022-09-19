<script>
  import { goto } from '$app/navigation'
  import { slugify } from '$lib/utils'

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
	<div class="short-small display-flex align-items-center gap-medium cursor-pointer" on:click={() => goto("/docs/tags")}>
		<svg class="parent-height flip-y--180" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
			<path d="M15.268 4.21a.75.75 0 0 0-1.04 1.08l8.275 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441l-9.428-9.07Z" fill="currentColor" fill-rule="nonzero"/>
		</svg>
		<span>Return</span>
	</div>
</div>

<p class="margin-top-small padding-all-medium background-dark">{itemDesc}</p>

<h2 class="padding-top-medium">Semantic Design</h2>
<div class="padding-all-medium">
	This is the default <a href="/docs/tags/a">hyperlink</a>.
</div>
<pre class="padding-all-medium background-dark overflow-horizontal-auto"><code>This is a default &#x3C;a href=&#x22;/docs/tags/a&#x22;&#x3E;hyperlink&#x3C;/a&#x3E;.</code></pre>
<h2 class="padding-top-medium">Example Design</h2>
<div class="padding-all-medium">
	This is a styled <a class="padding-all-small background-dark text-light-darken hover-text-light hover-reset-underline animate" href="/docs/tags/a">hyperlink</a>.
</div>
<pre class="padding-all-medium background-dark overflow-horizontal-auto"><code>This is a styled &#x3C;a class=&#x22;padding-all-small background-dark text-light-darken hover-text-light hover-reset-underline animate&#x22; href=&#x22;/docs/tags/a&#x22;&#x3E;hyperlink&#x3C;/a&#x3E;.</code></pre>