<script>
  import { page } from '$app/stores'
</script>

<aside class="position-sticky card-sm height-full background-light-lighten overflow-vertical-auto">
	<ul class="padding-100 display-flex flex-direction-column gap-050">
		<h3 class="margin-bottom-050 text-bold text-center text-uppercase">Documentation</h3>
		<a class:active="{$page.url.pathname.includes('start')}" class="light hover-light-lighten" href="/docs/start">
			<div class="padding-x-200 padding-y-050">Get Started</div>
		</a>
		<a class:active="{$page.url.pathname.includes('tags')}" class="light hover-light-lighten" href="/docs/tags">
			<div class="padding-x-200 padding-y-050">Semantic Elements</div>
		</a>
		<a class:active="{$page.url.pathname.includes('sizing')}" class="light hover-light-lighten" href="/docs/sizing">
			<div class="padding-x-200 padding-y-050">Sizing Guide</div>
		</a>
		<a class:active="{$page.url.pathname.includes('layout')}" class="light hover-light-lighten" href="/docs/layout">
			<div class="padding-x-200 padding-y-050">Layout</div>
		</a>
		<a class:active="{$page.url.pathname.includes('typography')}" class="light hover-light-lighten" href="/docs/typography">
			<div class="padding-x-200 padding-y-050">Typography</div>
		</a>
		<a class:active="{$page.url.pathname.includes('palettes')}" class="light hover-light-lighten" href="/docs/palettes">
			<div class="padding-x-200 padding-y-050">Palettes</div>
		</a>
		<a class:active="{$page.url.pathname.includes('shorthands')}" class="light hover-light-lighten" href="/docs/shorthands">
			<div class="padding-x-200 padding-y-050">Shorthands</div>
		</a>
	</ul>
</aside>

<style>
	a {
		border-radius: .75rem;
	}
	.active {
		background-color: var(--light);
	}
</style>