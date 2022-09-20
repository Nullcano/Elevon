<script>
	import '../meter/css/meter.css';
	import Nav from '$lib/app/Nav.svelte'
</script>

<Nav />
<main class="min-height-device background-dark-darken text-light">
	<section class="padding-vertical-8" data-layout="fluid">
		<slot />
	</section>
</main>