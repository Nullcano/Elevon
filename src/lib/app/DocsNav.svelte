<script>
  import { page } from '$app/stores'
</script>

<aside class="position-sticky card-sm height-full background-dark border-right border-thin border-dark-lighten overflow-vertical-auto">
	<h3 class="position-sticky top-none margin-none padding-x-200 height-500 row-center text-bold text-uppercase background-dark border-bottom border-thin border-dark-lighten">Documentation</h3>
	<ul class="margin-none padding-none display-flex flex-direction-column">
		<a class:active="{$page.url.pathname.includes('start')}" class="light hover-light-lighten" href="/docs/start">
			<div class="padding-x-200 height-300 row-center">Get Started</div>
		</a>
		<a class:active="{$page.url.pathname.includes('tags')}" class="light hover-light-lighten" href="/docs/tags">
			<div class="padding-x-200 height-300 row-center">Semantic Elements</div>
		</a>
		<a class:active="{$page.url.pathname.includes('sizing')}" class="light hover-light-lighten" href="/docs/sizing">
			<div class="padding-x-200 height-300 row-center">Sizing Guide</div>
		</a>
		<a class:active="{$page.url.pathname.includes('layout')}" class="light hover-light-lighten" href="/docs/layout">
			<div class="padding-x-200 height-300 row-center">Layout</div>
		</a>
		<a class:active="{$page.url.pathname.includes('typography')}" class="light hover-light-lighten" href="/docs/typography">
			<div class="padding-x-200 height-300 row-center">Typography</div>
		</a>
		<a class:active="{$page.url.pathname.includes('palettes')}" class="light hover-light-lighten" href="/docs/palettes">
			<div class="padding-x-200 height-300 row-center">Palettes</div>
		</a>
		<a class:active="{$page.url.pathname.includes('shorthands')}" class="light hover-light-lighten" href="/docs/shorthands">
			<div class="padding-x-200 height-300 row-center">Shorthands</div>
		</a>
	</ul>
</aside>

<style>
	a {
		margin-bottom: -1px;
		border-bottom: 1px solid var(--dark-lighten);
	}
	.active {
		background-color: var(--dark-darken);
	}
</style>