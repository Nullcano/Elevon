<script>
  import { page } from '$app/stores'
  import { components } from '$lib/api/components'
  import { slugify } from '$lib/utils'

  const component = components.find(e => slugify(e.title) === $page.params.slug)
  console.log(component)
</script>

{#if component}
  <div class="grid-2">
    <div class="intro">
      <h1>{component.title}</h1>
      <p>{component.description}</p>  
    </div>
  </div>
  {#if component.examples}
    {#each component.examples as example}
      <div class="py3">
        <h4>{example.title}</h4>
        <p class="py3">{example.description}</p>
        <div>
          {@html example.markup}
        </div>
        <pre><code>{example.markup}</code></pre>
      </div>
    {/each}
  {/if}
  {:else}
  <div class="grid-2">
    <div class="intro">
      <p>No content found for this page.</p>
    </div>
  </div>
{/if}