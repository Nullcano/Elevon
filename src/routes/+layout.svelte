<script>
	import '../elevon/css/atoms.css'
	import '../elevon/css/prevention.css'
	import '../elevon/css/molecules.css'
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
<slot />