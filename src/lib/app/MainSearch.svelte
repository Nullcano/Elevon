<script>
	import { slugify } from '$lib/utils'
	import { meta, elements } from '$lib/api/elements.js'

  let searchIsOpen
  let searchInput
	let searchTerm = ''

  function handleKeyDown(e) {
    console.log(e.which)
    if (e.ctrlKey && e.which == 75)
    {
      e.preventDefault()
      openSearch()
    }
  }

  const openSearch = function() {
    searchIsOpen = true
  }
  const closeSearch = function() {
    searchIsOpen = false
    searchTerm = ''
    searchResults = []
  }

  function callFocus(input){
    input.focus();
  }

	$: filteredResults = elements.filter(i => {
    let title = i.title.toLowerCase()
    let desc = i.description.toLowerCase()
    let term = searchTerm.toLowerCase()
    if (title.includes(term) || desc.includes(term)) {
      return i;
    }
  })
</script>

<svelte:window on:keydown={handleKeyDown} />

<svelte:head>
  {#if searchIsOpen}
    <style>
      body {
        overflow: hidden;
      }
    </style>
  {/if}
</svelte:head>

<a role="button" href={''} class="search" on:click={openSearch}>
  <span>Search <kbd>Ctrl</kbd> + <kbd>K</kbd></span>
</a>

{#if searchIsOpen}
  <div class="search-overlay" on:click={closeSearch}></div>
  <div class="search-container">
    <div class="search-box">
      <input type="text" bind:this={searchInput} bind:value={searchTerm} use:callFocus placeholder="Search" />
    </div>
    {#if searchTerm}
      <div class="search-results" on:click={closeSearch}>
        {#each filteredResults as r}
          <a href="/{meta.slug}/{slugify(r.title)}">
            <div class="result">
              {r.title}
            </div>
          </a>
        {/each}
      </div>
    {/if}
  </div>
{/if}

<style>
  :global(.ofh) {
    overflow: hidden;
  }
  .search-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(5,5,5,.75);
    backdrop-filter: blur(4px);
    z-index: 1100;
  }
  .search-container {
    position: fixed;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    width: 40em;
    max-width: 100%;
    z-index: 1100;
  }
  .search-box input {
    width: 100%;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    background: var(--gray-10);
    border: 0;
    border-radius: .5rem;
    outline: none;
    box-shadow: 0 0 1.5rem rgba(0,0,0,.5);
  }
  .search-results {
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    background: var(--gray-10);
    max-width: 40em;
    width: 100%;
    max-height: 50vh;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    z-index: 1100;
    overflow-y: auto;
  }
  .result {
    padding: 1rem 2rem;
    border-top: 1px solid var(--gray-15);
  }
  a:focus-visible {
    outline: 0;
  }
  a:hover .result, a:focus-visible .result {
    background: var(--gray-5);
  }
  .search-results a {
    background: black;
  }
  a {
    color: var(--gray-80);
  }
  a:hover {
    color: var(--gray-100);
    text-decoration: none;
  }
  [role="button"] {
    padding: .25rem .75rem;
    border: 1px solid var(--gray-15);
    border-radius: 60em;
    display: flex;
    align-items: center;
  }
  kbd {
    position: relative;
    top: -2px;
    padding: 0 .5rem;
    border: 1px solid var(--gray-15);
    color: var(--gray-60);
    border-radius: 60em;
  }
  kbd:first-child {
    margin-left: .5rem;
  }
</style>