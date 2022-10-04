<script>
	import '../arctic/css/arctic.css'
	import '../css/app.css'
	import '../arctic/js/arctic.js'
	import NavMain from '$lib/app/NavMain.svelte'
	import NavCtrl from '$lib/app/NavCtrl.svelte'
</script>

<main>
	<NavMain />
	<section>
		<NavCtrl />
		<slot />
	</section>
</main>

<style>
	main {
		position: relative;
		min-height: 100vh;
		overflow-x: hidden;
		overflow-y: auto;
	}
	section {
		position: relative;
		margin-top: 3rem;
		margin-left: 12rem;
	}
</style>