<script>
  import { slugify } from '$lib/utils'
	import { elements } from '$lib/api/elements'
  import { showSearch } from '$lib/stores'

  let searchInput
  let searchTerm

  const closeSearch = () => showSearch.update(state => !state)

  $: filteredResults = elements.filter(i => {
    let title = i.title.toLowerCase()
    let desc = i.description.toLowerCase()
    let term = searchTerm ? searchTerm.toLowerCase() : ''
    if (title.includes(term) || desc.includes(term)) {
      return i;
    }
  })
</script>

{#if $showSearch}
  <div class="search-wrapper">
    <div class="search-overlay" on:click={closeSearch}></div>
    <div class="search-container">
      <div class="search-box">
        <input type="text" bind:this={searchInput} bind:value={searchTerm} placeholder="Search" />
      </div>
      {#if searchTerm}
        <div class="search-results" on:click={closeSearch}>
          {#each filteredResults as r}
            <a href="/html/{slugify(r.title)}">
              <div class="result">
                {r.title}
              </div>
            </a>
          {/each}
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  .search-wrapper {
    position: fixed;
    z-index: 100;
  }
  .search-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.8);
    backdrop-filter: blur(4px);
  }
  .search-container {
    position: fixed;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    width: 40em;
    max-width: 100%;
  }
  .search-box input {
    width: 100%;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    background: var(--night-4);
    color: var(--day-1);
    border: 0;
    border-radius: .5rem;
    outline: none;
    box-shadow: 0 0 1.5rem rgba(0,0,0,.5);
  }
  .search-results {
    position: absolute;
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
    background: var(--night-4);
    max-width: 40em;
    width: 100%;
    max-height: 50vh;
    border-radius: .5rem;
    overflow-y: auto;
  }
  .result {
    padding: 1rem;
  }
  .search-results a {
    margin: .5rem;
    text-decoration: none;
    display: block;
    border-radius: 60em;
    background: var(--night-3);
  }
  .search-results a:hover {
    background: var(--night-2);
  }
</style>