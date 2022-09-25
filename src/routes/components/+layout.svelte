<script>
	import DocsNav from '$lib/app/DocsNav.svelte'
</script>

<div class="height-full display-grid columns-auto-fill">
	<DocsNav />
	<section class="position-relative">
		<slot />
	</section>
</div>