<script>
	import '../arctic/css/arctic.css'
	import '../css/app.css'
	import NavMain from '$lib/app/NavMain.svelte'
</script>

<NavMain />
<main>
	<slot />
</main>

<style>
	main {
		position: relative;
		margin: 0 auto;
		padding: 5rem 0;
		max-width: 90em;
		width: calc(100% - 5rem);
		border-left: 1px solid var(--gray-15);
		border-right: 1px solid var(--gray-15);
		min-height: 100vh;
	}
	@media (max-width: 30rem) {
		main {
			width: calc(100% - 2rem);
		}
	}
</style>