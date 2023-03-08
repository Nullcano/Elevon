<script>
  import { page } from '$app/stores'
  import { components } from '$lib/api/components'
  import { slugify } from '$lib/utils'

  let categoryName
  let categoryItems = []

  const slug = $page.params.slug
  const category = components.find(component => slugify(component.category) === slug)
  categoryName = category ? category.category : ''
  categoryItems = components.filter(component => component.category === categoryName)
</script>

<div class="grid-2">
  <div class="intro">
    <h1>{categoryName}</h1>
  </div>
</div>

<div class="grid">
  {#each categoryItems as item}
    <a href="/components/{slugify(categoryName)}/{slugify(item.title)}">
      <div class="card">
        <div class="body">
          <div class="h5"></div>
          {item.title}
        </div>
      </div>
    </a>
  {/each}
</div>

<style>
  .grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
		gap: 1rem;
	}
	a {
		text-decoration: none;
	}
</style>