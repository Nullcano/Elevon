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

<a role="button" href={null} class="search" on:click={openSearch}>
  <span>Search <kbd>Ctrl</kbd> + <kbd>K</kbd></span>
</a>

{#if searchIsOpen}
<div class="search-wrapper">
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
</div>
{/if}

<style>
  .search-wrapper {
    position: relative;
    z-index: 99;
  }
  .search-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--night-3-08);
    backdrop-filter: blur(4px);
    z-index: 20;
  }
  .search-container {
    position: fixed;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    width: 40em;
    max-width: 100%;
    z-index: 30;
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
    z-index: 1100;
    overflow-y: auto;
  }
  .result {
    padding: 1rem;
  }
  a:focus-visible {
    outline: 0;
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
  [role="button"] {
    padding: .5rem 1rem;
    color: var(--day-1);
    border: 1px solid var(--night-1);
    border-radius: 60em;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  kbd {
    padding: 0 .5rem;
    border: 1px solid var(--night-1);
    border-radius: .5rem;
    text-transform: uppercase;
  }
  kbd:first-child {
    margin-left: .5rem;
  }
</style>