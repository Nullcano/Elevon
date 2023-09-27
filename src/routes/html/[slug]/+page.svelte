<script>
  import { page } from '$app/stores'
  import { elements } from '$lib/api/elements'
  import { slugify } from '$lib/utils'
  import ItemDisplay from '$lib/ItemDisplay.svelte'
  import CodeBlock from '$lib/CodeBlock.svelte'

  const element = elements.find(e => slugify(e.title) === $page.params.slug)
  console.log(element)
</script>

{#if element}
  <div class="grid-2">
    <div class="intro">
      <h1>{element.title}</h1>
      <p>{element.description}</p>
      {#if element.preview}
        {#if element.category !== "Metadata"}
          <ItemDisplay>
            {@html element.preview}
          </ItemDisplay>
        {/if}
        <CodeBlock>
          {element.preview}
        </CodeBlock>
      {/if}
    </div>
  </div>
  {:else}
  <div class="grid-2">
    <div class="intro">
      <p>No content found for this page.</p>
    </div>
  </div>
{/if}