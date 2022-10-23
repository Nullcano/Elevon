<script>
  export let title
  export let description
</script>

<article class="card">
  <header class="mono">{title}</header>
  <p>{description}</p>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
    <path fill="currentColor" fill-rule="nonzero" d="M15.268 4.21a.75.75 0 0 0-1.04 1.08l8.275 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441l-9.428-9.07Z"/>
  </svg>
</article>

<style>
  article {
    padding: .5rem 1rem;
    display: grid;
    grid-template-columns: 12rem auto 2rem;
    align-items: center;
    border-bottom: 1px solid var(--gray-15);
  }
  header {
    font-size: 1.25rem;
  }
  p {
    margin: 0;
    padding: 0 1rem;
    color: var(--gray-90);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  svg {
    width: 2rem;
    height: 2rem;
  }
</style>