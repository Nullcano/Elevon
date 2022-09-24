<script>
	import '../meter/css/meter.css'
	import '../css/app.css'
	import Header from '$lib/app/Header.svelte'
	import '../meter/js/meter.js'
</script>

<Header />
<main class="padding-top-350 min-height-full">
	<slot />
</main>