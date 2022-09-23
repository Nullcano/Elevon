<script>
	import '../meter/css/meter.css';
	import '../css/app.css';
	import Header from '$lib/app/Header.svelte'
</script>

<Header />
<main class="min-height-parent display-grid columns-auto-fill">
	<slot />
</main>