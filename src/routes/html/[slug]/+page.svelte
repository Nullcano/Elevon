<script>
  import { page } from '$app/stores'
  import { elements } from '$lib/api/elements'
  import { slugify } from '$lib/utils'

  const element = elements.find(e => slugify(e.title) === $page.params.slug)
  console.log(element)
</script>

{#if element}
  <div class="grid-2">
    <div class="intro">
      <h1>{element.title}</h1>
      <p>{element.description}</p>  
    </div>
  </div>
  {:else}
  <div class="grid-2">
    <div class="intro">
      <p>No content found for this page.</p>
    </div>
  </div>
{/if}