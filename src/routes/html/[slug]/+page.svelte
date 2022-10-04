<script>
  import { p, elements } from '../../../api/elements'
  import { slugify } from '$lib/utils'

  export let data
  const item = data.item
  const snippet = JSON.stringify(item.preview)
  let nextItem
  let index = elements.indexOf(item)

  if (index >= 0 && index < elements.length - 1) {
    nextItem = elements[index + 1]
  }
</script>

<nav class="breadcrumbs">
  <a href="/{slugify(p.slug)}">{data.category}</a> / <a href="/{slugify(data.category)}/{data.slug}">{item.title}</a>
</nav>

<article>
  <small>{data.index}</small>
  <h1>{item.title}</h1>

  <p>{item.description}</p>
  
  {#if item.preview}
    <div class="preview">
      {@html item.preview}
    </div>
  {/if}

  {#if snippet}
<pre><code>{JSON.parse(snippet)}</code></pre>
  {/if}

  <footer>
    <h3>Next Element</h3>
    {nextItem.title}
  </footer>
</article>

<style>
  .breadcrumbs {
    padding: 2rem;
    color: var(--light);
    background: var(--dark);
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
    color: initial;
    background: var(--light);
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