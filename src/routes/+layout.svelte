<script>
	import '../elevon/css/elevon.css'
	import '../css/app.css'
	import NavMain from '$lib/app/NavMain.svelte'
</script>

<svelte:head>
	<title>Elevon</title>
	<meta property="og:title" content="Elevon" />
	<meta property="og:site_name" content="Elevon" />
	<meta property="og:url" content="https://elevon.dev" />
	<meta property="og:description" content="A contemporary UI-kit that can be utilized as a complete design system for web applications." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="" />
</svelte:head>

<NavMain />
<main>
	<slot />
</main>

<style>
	main {
		position: relative;
		margin: 0 auto;
		padding: 4rem 0;
		max-width: 90em;
		width: calc(100% - 4rem);
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