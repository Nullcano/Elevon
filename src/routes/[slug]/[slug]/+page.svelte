<script>
  export let data
  const item = data.item
  const snippet = JSON.stringify(item.preview)
</script>

<nav class="breadcrumbs">
  <a href="/{data.category}">{data.category}</a> / <a href="/{data.category}/{data.slug}">{data.slug}</a>
</nav>

<article>
  <small>{data.index}</small>
  <h1>{item.title}</h1>

  <p>{item.description}</p>
  
  {#if item.preview}
    <div>
      {@html item.preview}
    </div>
  {/if}

  {#if snippet}
    <pre>
      <code>
        {JSON.parse(snippet)}
      </code>
    </pre>
  {/if}
</article>

<style>
  .breadcrumbs {
    height: 3rem;
    margin: 1rem;
    padding: 0 1rem;
    color: var(--light);
    background: var(--dark);
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  article {
    padding: 5rem;
  }
</style>