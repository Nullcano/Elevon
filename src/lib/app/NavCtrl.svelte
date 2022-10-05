<script>
  let searchInput
	let searchQuery
  let searchIsOpen
  let menuIsOpen
  let keysPressed = {}

  function handleKeyDown(e) {
    keysPressed[e.key] = true
    if (keysPressed['Control'] && e.key == 'k') {
      e.preventDefault()
      searchIsOpen = true
      searchInput.focus()
    }
	}

  function focusElem(elem) {
		elem.focus()
	}
  
  const handleKeyUp = function() {
		message.length === 0 ? showInput = false : showInput = true
	}

  const openSearch = function() {
    searchIsOpen = true
  }

  const closeSearch = function() {
    searchIsOpen = false
  }

  const openMenu = function() {
    menuIsOpen = !menuIsOpen
  }
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

<nav class="controls">
  <a role="button" href={''} class="search" on:click={openSearch}>
    <div class="ctrl-item">
      <span>Search</span>
      <span><kbd>Ctrl</kbd> + <kbd>K</kbd></span>
    </div>
  </a>
</nav>

{#if searchIsOpen}
  <div class="search-overlay" on:click={closeSearch}></div>
  <div class="search-container">
    <div class="search-box">
      <input type="text" bind:this={searchInput} bind:value={searchQuery} use:focusElem on:keyup={handleKeyUp} on:click={openSearch} placeholder="Search" />
    </div>
  </div>
{/if}

<style>
  :global(.ofh) {
    overflow: hidden;
  }
  .search-overlay {
    position: fixed;
    top: 3rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--dark);
  }
  .search-container {
    position: relative;
    width: 100%;
  }
  .search-box input {
    width: 100%;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    background: var(--median);
    color: var(--light);
    border: 0;
    outline: none;
  }
  nav {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
  }
  a {
    color: var(--arctic-60);
  }
  a:hover {
    color: var(--arctic-90);
    text-decoration: none;
  }
  [role="button"] {
    background: transparent;
    border: 0;
  }
  .search .ctrl-item {
    padding: 1rem 2rem;
    color: var(--light);
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
  }
  kbd {
    padding: 0 .5rem;
    background: var(--median);
    color: var(--light);
    border-radius: 60em;
  }
</style>