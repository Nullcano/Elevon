<script>
  import { p } from '../../../api/elements'
  import { slugify } from '$lib/utils'

  export let data
  const item = data.item
  const snippet = JSON.stringify(item.preview)

  $: item = item
</script>

<nav class="breadcrumbs">
  <a href="/{p.slug}">{data.category}</a> / <a href="/{p.slug}/{data.slug}">{item.title}</a>
</nav>

<article>
  <h1>{item.title}</h1>
  <p>{item.description}</p>
  
  {#if item.preview}
  <div class="preview-container">
    <label for="preview">Preview</label>
    <div id="preview" class="preview">
      {@html item.preview}
    </div>
  </div>
  {/if}

  {#if snippet}
  <div class="code-container">
    <label for="code">HTML</label>
    <pre><code>{JSON.parse(snippet)}</code></pre>
  </div>
  {/if}

  <footer>
    <a href="/{p.slug}/{slugify(data.previous.title)}">
      <div class="next">
        <h3>Previous Element</h3>
        {data.previous.title}
      </div>
    </a>
     <a href="/{p.slug}/{slugify(data.next.title)}">
      <div class="next">
        <h3>Next Element</h3>
        {data.next.title}
      </div>
    </a>
  </footer>
</article>

<style>
  .breadcrumbs {
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  article {
    padding: 2rem;
  }
  p {
    margin: 2rem 0;
    font-size: 1.25rem;
  }
  .preview {
    margin-bottom: -1px;
    padding: 1rem;
    border: 1px solid var(--median);
    display: block;
    overflow: auto;
  }
  pre {
    padding: 1rem;
    border: 1px solid var(--median);
  }
  code {
    margin: 0;
  }
  footer {
    margin-top: 2rem;
  }
</style>