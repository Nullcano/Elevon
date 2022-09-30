<script>
	import '../meter/css/meter.css'
	import '../css/app.css'
	import '../meter/js/meter.js'
	import NavMain from '$lib/app/NavMain.svelte'
	import NavCtrl from '$lib/app/NavCtrl.svelte';
</script>

<main>
	<NavMain />
	<NavCtrl />
	<section>
		<slot />
	</section>
</main>

<style>
	main {
		position: relative;
		overflow: hidden;
		background: var(--dark);
	}
	main::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: transparent;
		opacity: 0.05;
		background-image:  linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px);
		background-size: 1rem 1rem;
		mix-blend-mode: difference;
		z-index: 1800;
		pointer-events: none;
	}
	section {
		margin-left: 12rem;
		margin-top: 4rem;
		height: calc(100vh - 4rem);
		background: var(--light);
		overflow-y: auto;
	}
</style>