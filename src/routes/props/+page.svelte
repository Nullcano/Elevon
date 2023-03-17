<script>
  import { sections } from '$lib/api/sections'
  let here = sections[0]
</script>

<div class="intro">
  <h1>{here.title}</h1>
  <p>{here.description}</p>  
</div>

<div class="category-sections">
  <div class="category">
    <h2>Color</h2>
  </div>
  <div class="category">
    <h2>Measure</h2>
  </div>
  <div class="category">
    <h2>Position</h2>
  </div>
  <div class="category">
    <h2>Animate</h2>
  </div>
</div>