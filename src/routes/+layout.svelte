<script>
	import '../meter/css/meter.css'
	import '../css/app.css'
	import Header from '$lib/app/Header.svelte'
	import '../meter/js/meter.js'
</script>

<Header />
<main class="position-relative top-350 calc-height-vh-full-350 overflow-vertical-auto">
	<slot />
</main>