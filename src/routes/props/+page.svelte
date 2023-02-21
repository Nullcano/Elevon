<script>
  import { sections } from '$lib/api/sections'
  let here = sections[0]
</script>

<div class="grid-2">
  <div class="intro">
    <h1>{here.title}</h1>
    <p>{here.description}</p>    
    <div class="py4 category-links">
      <div class="px3 py2 category">
        <span>Color</span>
      </div>
      <div class="px3 py2 category">
        <span>Measure</span>
      </div>
      <div class="px3 py2 category">
        <span>Position</span>
      </div>
      <div class="px3 py2 category">
        <span>Animate</span>
      </div>
    </div>
  </div>
  <div class="right">
    <div class="illustration">
      <img src="images/props.png" alt="Props" />
    </div>
  </div>
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