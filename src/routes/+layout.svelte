<script>
	import '../elevon/css/props.css'
	import '../elevon/css/resets.css'
	import '../elevon/css/classes.css'
	import '../css/app.css'

	import AppNav from '$lib/app/AppNav.svelte'
	import AppAside from '$lib/app/AppAside.svelte'
	import SearchModal from '$lib/app/SearchModal.svelte'
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

<div>
	<AppNav />
	<AppAside />
	<slot />
</div>
<SearchModal />

<style>
	div {
		padding-inline-start: 18rem;
	}
</style>