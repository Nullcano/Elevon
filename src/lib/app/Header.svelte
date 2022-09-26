<script>
  import { page } from '$app/stores'
  import Logo from '$lib/app/Logo.svelte'

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

<header class="position-fixed pull-top pull-left pull-right background-light-lighten border-bottom border-normal border-light backdrop-blur z-index-100">
  <div class="margin-x-200 display-flex align-items-center justify-space-between">
    <div class="display-flex align-items-center">
      <a class="padding-100 text-center" href="/">
        <Logo />
      </a>
      <button type="button" class="margin-x-200 padding-x-100 height-200 display-flex align-items-center gap-100 background-light text-dark-lighten border-md border-light-darken border-radius-pill" on:click={openSearch}>
        <svg viewBox="0 0 24 24" focusable="false" class="width-100 height-100 display-inline-block">
          <path fill="currentColor" d="M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z"></path>
        </svg>
        <span>Search</span>
        <kbd>
          <abbr title="Control" class="text-nano-large">Ctrl</abbr>
          +
          <abbr title="K" class="text-nano-large">K</abbr>
        </kbd>
      </button>
    </div>
    <nav class="display-flex">
      <a class:active="{$page.url.pathname.includes('docs')}" class="text-dark hover-reset-underline" href="/docs">
        <div class="padding-100">Documentation</div>
      </a>
      <a class:active="{$page.url.pathname.includes('components')}" class="text-dark hover-reset-underline" href="/components">
        <div class="padding-100">Components</div>
      </a>
      <a class:active="{$page.url.pathname.includes('themes')}" class="text-dark hover-reset-underline" href="/themes">
        <div class="padding-100">Themes</div>
      </a>
    </nav>
    <div class="display-flex align-items-center">
      <a role="button" href="/"  class="width-300 height-300 display-flex justify-content-center align-items-center">
        <svg class="width-150 height-150" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"></path></svg>
      </a>
      <button class="width-300 height-300 display-flex justify-content-center align-items-center background-light-lighten text-dark" on:click={() => toggleDarkMode()}>
        <svg class="width-150 height-150" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 207.628 207.628" style="enable-background:new 0 0 207.628 207.628" xml:space="preserve"><circle cx="103.814" cy="103.814" r="45.868"/><path d="M103.814 157.183c-29.427 0-53.368-23.941-53.368-53.368s23.941-53.368 53.368-53.368 53.368 23.941 53.368 53.368-23.941 53.368-53.368 53.368zm0-91.737c-21.156 0-38.368 17.212-38.368 38.368s17.212 38.368 38.368 38.368 38.368-17.212 38.368-38.368-17.212-38.368-38.368-38.368zM103.814 39.385a7.5 7.5 0 0 1-7.5-7.5V7.5a7.5 7.5 0 0 1 15 0v24.385a7.5 7.5 0 0 1-7.5 7.5zM103.814 207.628a7.5 7.5 0 0 1-7.5-7.5v-24.385a7.5 7.5 0 0 1 15 0v24.385a7.5 7.5 0 0 1-7.5 7.5zM200.128 111.314h-24.385a7.5 7.5 0 0 1 0-15h24.385a7.5 7.5 0 0 1 0 15zM31.885 111.314H7.5a7.5 7.5 0 0 1 0-15h24.385a7.5 7.5 0 0 1 0 15zM154.676 60.452a7.474 7.474 0 0 1-5.303-2.197 7.5 7.5 0 0 1 0-10.606l17.243-17.242a7.498 7.498 0 0 1 10.606 0 7.5 7.5 0 0 1 0 10.606l-17.243 17.242a7.474 7.474 0 0 1-5.303 2.197zM35.709 179.419a7.474 7.474 0 0 1-5.303-2.197 7.5 7.5 0 0 1 0-10.606l17.243-17.243a7.5 7.5 0 0 1 10.606 0 7.5 7.5 0 0 1 0 10.606l-17.243 17.243a7.472 7.472 0 0 1-5.303 2.197zM171.918 179.419a7.474 7.474 0 0 1-5.303-2.197l-17.243-17.243a7.5 7.5 0 0 1 0-10.606 7.5 7.5 0 0 1 10.606 0l17.243 17.243a7.5 7.5 0 0 1 0 10.606 7.472 7.472 0 0 1-5.303 2.197zM52.952 60.452a7.474 7.474 0 0 1-5.303-2.197L30.406 41.013a7.5 7.5 0 0 1 0-10.606 7.498 7.498 0 0 1 10.606 0l17.243 17.242a7.5 7.5 0 0 1 0 10.606 7.472 7.472 0 0 1-5.303 2.197z"/></svg>
      </button>
      <button class="width-300 height-300 display-flex justify-content-center align-items-center background-light-lighten text-dark" on:click={() => toggleDarkMode()}>
        <svg class="width-150 height-150" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <g id="m">
            <rect width="100" height="20" x="0" y="0" />
            <rect width="80" height="20" x="0" y="40" />
            <rect width="60" height="20" x="0" y="80" />  
          </g>
        </svg>
      </button>
    </div>
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
  }
  nav a::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0;
    background-color: var(--median);
    z-index: -1;
    transition: all .2s linear;
  }
  nav a:hover::before {
    height: 4px;
  }
  nav a.active {
    color: var(--light);
  }
  nav a.active::before, nav a.active:focus::before {
    height: 100%;
  }
</style>