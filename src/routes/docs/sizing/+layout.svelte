<script>
  import Document from '$lib/app/Document.svelte'
  import AnchorNav from '$lib/app/AnchorNav.svelte'

  let anchorNav = `
    <li>
      <a href="#quickstart">Quickstart</a>
    </li>
  `
</script>

<Document>
  <h1>Sizing Guide</h1>
  <slot />
</Document>

<AnchorNav>
  {@html anchorNav}
</AnchorNav>