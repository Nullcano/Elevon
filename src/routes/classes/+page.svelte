<script>
  import { sections } from '$lib/api/sections'
  let here = sections[1]
</script>

<svelte:head>
	<title>{here.title} - Elevon</title>
	<meta property="og:title" content="{here.title} - Elevon" />
	<meta property="og:site_name" content="Elevon" />
	<meta property="og:url" content="https://elevon.dev/{here.slug}" />
	<meta property="og:description" content="{here.shortDescription}" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="" />
</svelte:head>

<div class="grid-2">
  <div class="intro">
    <h1>{here.title}</h1>
    <p>{here.description}</p>
		<div class="py4 category-links">
      <div class="px3 py2 category">
        <span>Layout</span>
      </div>
      <div class="px3 py2 category">
        <span>Display</span>
      </div>
      <div class="px3 py2 category">
        <span>Typography</span>
      </div>
      <div class="px3 py2 category">
        <span>Color</span>
      </div>
      <div class="px3 py2 category">
        <span>Interactivity</span>
      </div>
      <div class="px3 py2 category">
        <span>Animation</span>
      </div>
    </div>
	</div>
	<div class="right">
    <div class="illustration">
      <img src="images/classes.png" alt="Classes" />
    </div>
  </div>
</div>