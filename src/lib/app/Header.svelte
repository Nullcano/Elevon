<script>
  import { page } from '$app/stores'
  import MeterIcon from '$lib/icons/Meter.svelte'
  import SearchIcon from '$lib/icons/Search.svelte'
  import SunIcon from '$lib/icons/Sun.svelte'

  import MenuIcon from '$lib/icons/Menu.svelte'

  let searchInput
	let searchQuery
  let searchIsOpen
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
</script>

<svelte:window on:keydown={handleKeyDown} />

<header class="position-fixed pull-top pull-left pull-right display-flex background-dark text-light border-thin border-bottom border-dark-lighten backdrop-blur z-index-100">
  <div class="display-flex align-items-center">
    <a class="background-dark hover-background-dark-darken" href="/">
      <div class="width-750 height-400 row-center justify-content-center border-thin border-right border-dark-lighten">
        <MeterIcon />
      </div>
    </a>
    <button type="button" class="padding-x-150 height-400 card-sm display-flex align-items-center justify-space-between gap-100 border-none hover-border-none background-dark hover-background-dark-darken text-light" on:click={openSearch}>
      <SearchIcon />
      <span>Search</span>
      <kbd>
        <abbr title="Control" class="text-nano-large">Ctrl</abbr>
        +
        <abbr title="K" class="text-nano-large">K</abbr>
      </kbd>
    </button>
  </div>
  <nav class="width-full justify-content-end display-flex">
    <a class:active="{$page.url.pathname.includes('docs')}" class="text-light hover-reset-underline" href="/docs">
      <div class="height-400 padding-x-200 row-center">Documentation</div>
    </a>
    <a class:active="{$page.url.pathname.includes('components')}" class="text-light hover-reset-underline" href="/components">
      <div class="height-400 padding-x-200 row-center">Components</div>
    </a>
    <a class:active="{$page.url.pathname.includes('themes')}" class="text-light hover-reset-underline" href="/themes">
      <div class="height-400 padding-x-200 row-center">Themes</div>
    </a>
  </nav>
  <div class="display-flex align-items-center">
    <button class="padding-none border-none hover-border-none background-dark hover-background-dark-darken" on:click={() => toggleDarkMode()}>
      <div class="width-750 height-400 row-center justify-content-center border-thin border-left border-dark-lighten">
        <SunIcon />
      </div>
    </button>
    <button class="padding-none border-none hover-border-none background-dark hover-background-dark-darken" on:click={() => toggleDarkMode()}>
      <div class="width-750 height-400 row-center justify-content-center border-thin border-left border-dark-lighten">
        <MenuIcon />
      </div>
    </button>
  </div>
</header>

{#if searchIsOpen}
  <div class="position-fixed pull-top width-vw-full height-vh-full z-index-100">
    <div class="position-fixed pull-top width-vw-full height-vh-full background-light-lighten-50 backdrop-blur" on:click={closeSearch}></div>
    <div class="position-relative margin-auto container-md padding-y-200">
      <input class="width-full padding-x-200 padding-y-100" type="text" bind:this={searchInput} bind:value={searchQuery} use:focusElem on:keyup={handleKeyUp} on:click={openSearch} placeholder="Search" />
    </div>
  </div>
{/if}

<style>
  nav a {
    position: relative;
    border-left: 1px solid var(--dark-lighten);
  }
  nav a::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 0;
    background-color: var(--dark-darken);
    z-index: -1;
    transition: all .2s linear;
  }
  nav a:hover::before {
    width: 20%;
  }
  nav a.active {
    color: var(--light);
  }
  nav a.active::before, nav a.active:focus::before {
    width: 100%;
  }
</style>