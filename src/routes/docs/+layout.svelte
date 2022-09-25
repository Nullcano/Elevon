<script>
	import DocsNav from '$lib/app/DocsNav.svelte'
</script>

<div class="height-full display-grid columns-auto-fill">
	<DocsNav />
	<section class="position-relative display-grid columns-fill-auto align-items-start overflow-vertical-auto">
		<slot />
	</section>
</div>