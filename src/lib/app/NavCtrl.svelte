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

<nav class="controls">
  <a role="button" href={''} class="search" on:click={openSearch}>
    <div class="ctrl-item">
      <span>Search</span>
      <span><kbd>Ctrl</kbd> + <kbd>K</kbd></span>
    </div>
  </a>
  <a role="button" href={''} class="menu" on:click={openMenu}>
    <div class="ctrl-item">
      Overview
    </div>
  </a>
</nav>

{#if searchIsOpen}
  <div class="position-fixed pull-top width-vw-full height-vh-full z-index-100">
    <div class="position-fixed pull-top width-vw-full height-vh-full background-dark-darken-75 backdrop-blur" on:click={closeSearch}></div>
    <div class="position-relative margin-auto container-md padding-y-200">
      <input class="width-full padding-x-200 padding-y-100 background-dark-darken text-light-lighten" type="text" bind:this={searchInput} bind:value={searchQuery} use:focusElem on:keyup={handleKeyUp} on:click={openSearch} placeholder="Search" />
    </div>
  </div>
{/if}

<style>
  [role="button"] {
    background: transparent;
    border: 0;
    color: (--light);
  }
  nav {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 12rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 1600;
  }
  nav.controls {
    right: 0;
    bottom: auto;
    left: 12rem;
    width: calc(100% - 12rem);
    height: 4rem;
    flex-direction: row;
    justify-content: space-between;
  }
  a {
    color: var(--light);
  }
  .ctrl-item {
    margin: 1rem;
    height: 2rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
  }
  .search .ctrl-item {
    margin: 1rem 0;
    width: 12rem;
    height: 2rem;
    background: var(--light);
    color: var(--dark);
    justify-content: space-between;
  }
  kbd {
    padding: 0 .5rem;
    background: var(--dark);
    color: var(--light);
  }
</style>