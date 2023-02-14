<script>
  import { meta } from '$lib/api/molecules'
  import { slugify } from '$lib/utils'

  export let data
  $: item = data.item
  $: snippet = JSON.stringify(item.preview)
</script>

<article>
  <header>
    {#if data.previous}
      <a href="/{meta.slug}/{slugify(data.previous.title)}">
        <div class="nav-item previous">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
            <path fill="currentColor" fill-rule="nonzero" d="M15.268 4.21a.75.75 0 0 0-1.04 1.08l8.275 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441l-9.428-9.07Z"/>
          </svg>
          <span>{data.previous.title}</span>
        </div>
      </a>
      {:else}
      <div class="nav-item previous empty"></div>
    {/if}
    <div>
      <a href="/{meta.slug}">
        <nav class="crumb">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
            <path fill="currentColor" fill-rule="nonzero" d="M15.268 4.21a.75.75 0 0 0-1.04 1.08l8.275 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441l-9.428-9.07Z"/>
          </svg>
          <span>{data.category}</span>
        </nav>
      </a>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
    {#if data.next}
      <a href="/{meta.slug}/{slugify(data.next.title)}">
        <div class="nav-item next">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
            <path fill="currentColor" fill-rule="nonzero" d="M15.268 4.21a.75.75 0 0 0-1.04 1.08l8.275 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441l-9.428-9.07Z"/>
          </svg>
          <span>{data.next.title}</span>
        </div>
      </a>
      {:else}
      <div class="nav-item next empty"></div>
    {/if}
  </header>

  {#if item.preview}
    <div class="container">
      <div class="label">Preview</div>
      <div id="preview" class="preview">
        {@html item.preview}
      </div>
    </div>
  {/if}

  {#if snippet}
    <div class="container">
      <div class="label">HTML</div>
      <pre><code>{JSON.parse(snippet)}</code></pre>
    </div>
  {/if}
</article>

<style>
  a {
    color: currentColor;
    text-decoration: none;
  }
  a:hover {
    color: var(--gray-100);
  }
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
  }
  .crumb {
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    gap: .5rem;
    border-bottom: 1px solid var(--gray-15);
  }
  .crumb svg {
    width: 1.5rem;
  }
  h1 {
    margin: 1rem 2rem 0 2rem;
    padding: 0;
  }
  p {
    padding: 1rem 2rem;
    font-size: 1.25rem;
  }
  .container {
    border: 1px solid var(--gray-15);
  }
  .label {
    width: 12rem;
    padding: 1rem 2rem;
    border-right: 1px solid var(--gray-15);
    text-align: center;
  }
  pre {
    padding: 1rem;
    border-top: 1px solid var(--gray-15);
  }
  code {
    margin: 0;
  }
  .nav-item {
    position: relative;
    width: 12rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    font-size: 1.25rem;
  }
  .previous, .previous.empty {
    border-right: 1px solid var(--gray-15);
  }
  .next, .next.empty  {
    border-left: 1px solid var(--gray-15);
  }
  .nav-item svg {
    width: 3rem;
  }
  .crumb svg, .previous svg {
    transform: rotateZ(-180deg);
  }
  .empty {
    opacity: 0.8;
    background: repeating-linear-gradient( -45deg, var(--gray-10), var(--gray-10) 5px, var(--gray-5) 5px, var(--gray-5) 25px );
  }
</style>