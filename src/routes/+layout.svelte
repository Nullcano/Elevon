<script>
	import '../meter/css/meter.css'
	import '../css/app.css'
	import Header from '$lib/app/Header.svelte'
	import '../meter/js/meter.js'
</script>

<Header />
<main class="position-relative top-500 calc-height-vh-full-500 background-dark text-light-darken overflow-vertical-auto">
	<slot />
</main>