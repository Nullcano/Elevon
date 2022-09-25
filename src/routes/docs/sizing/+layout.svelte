<script>
  import Document from '$lib/app/Document.svelte'
  import AnchorNav from '$lib/app/AnchorNav.svelte'
  import { sizing } from '$lib/data.js'
</script>

<Document>
  <h1>Sizing Guide</h1>
  <slot />
</Document>

<AnchorNav>
  {#each sizing as item}
    <li>
      <a href="#{item.id}">{item.id}</a>
    </li>
  {/each}
</AnchorNav>