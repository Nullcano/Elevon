<script>
	import '../elevon/css/props.css'
	import '../elevon/css/resets.css'
	import '../elevon/css/classes.css'
	import '../css/app.css'

	import { nightMode } from '$lib/stores'
	import AppHeader from '$lib/app/AppHeader.svelte'
	import ScrollTop from '$lib/app/ScrollTop.svelte'
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

<div data-theme={$nightMode ? 'night' : 'day'}>
	<AppHeader />
	<slot />
</div>
<ScrollTop />
<SearchModal />