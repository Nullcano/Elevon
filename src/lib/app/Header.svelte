<script>
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

<header class="position-fixed pull-top pull-left pull-right height-350 background-light-lighten backdrop-blur z-index-100">
  <div class="margin-auto max-width-xl container-lg width-parent">
    <div class="width-parent height-parent display-flex align-items-center justify-space-between">
      <div class="display-flex align-items-center">
        <a href="/">
          <Logo />
        </a>
      </div>
      <div class="width-parent padding-x-xl display-flex align-items-center justify-content-end">
        <button type="button" class="margin-x-m display-flex flex-1 align-items-center background-dark border-regular border-dark" on:click={openSearch}>
          <svg viewBox="0 0 24 24" focusable="false" class="width-4 height-150 display-inline-block text-light">
            <path fill="currentColor" d="M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z"></path>
          </svg>
          <div class="">
            <p class="">Search the docs</p>
            <div>
              <span>Press </span>
              <kbd>
                <abbr title="Control" class="text-nano-large">Ctrl</abbr>
              </kbd>
              <span> and </span>
              <kbd>K</kbd>
              <span> to-search</span>
            </div>
          </div>
        </button>
        <nav class="margin-x-lg display-flex gap-sm">
          <a class="text-light-lighten hover-reset-underline" href="/docs">
            <div class="padding-sm">Documentation</div>
          </a>
          <a class="text-light-lighten hover-reset-underline" href="/components">
            <div class="padding-sm">Components</div>
          </a>
          <a class="text-light-lighten hover-reset-underline" href="/themes">
            <div class="padding-sm">Themes</div>
          </a>
        </nav>
        <button class="margin-x-xl" onclick="toggleDarkMode()">
          Dark Mode
        </button>
      </div>
    </div>
  </div>
</header>

{#if searchIsOpen}
  <div class="position-fixed pull-top width-device height-device background-light-lighten backdrop-blur z-index-100" on:click={closeSearch}></div>
  <div class="position-absolute width-parent tc z-index-110">
    <input class="margin-left-10 width-half padding-4 background-dark reset-border text-light-lighten" type="text" bind:this={searchInput} bind:value={searchQuery} use:focusElem on:keyup={handleKeyUp} placeholder="Search" />
  </div>
{/if}