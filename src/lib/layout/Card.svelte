<article class="card">
  <header>
    <slot name="title"></slot>
  </header>
  <p>
    <slot name="description"></slot>
  </p>
  <footer>
    <slot name="categories"></slot>
  </footer>
</article>

<style>
  .card {
		padding: 1rem 2rem;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    gap: 2rem;
		color: var(--light);
    border-bottom: 1px solid var(--median);
	}
	header {
		font-size: 1.5rem;
	}
  p {
    margin: .5rem 0;
  }
</style>